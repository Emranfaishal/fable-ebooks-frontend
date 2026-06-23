"use client";

import React, { useState } from "react";
import {
    Form,
    Fieldset,
    TextField,
    Label,
    Input,
    TextArea,
    FieldError,
    Select,
    ListBox,
    Button,
    addToast // HeroUI-তে টোস্ট ব্যবহারের জন্য addToast সাধারণত ব্যবহৃত হ
} from "@heroui/react";
import { BookOpen } from "@gravity-ui/icons";


export default function AddEbookForm({ publisher }) {
    const [errors, setErrors] = useState({});
    const [coverFile, setCoverFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // ক্লায়েন্ট-সাইড ভ্যালিডেশন
        const newErrors = {};
        if (!data.title) newErrors.title = "Title is required";
        if (!data.genre) newErrors.genre = "Genre is required";
        if (!data.price) newErrors.price = "Price is required";
        if (!data.description) newErrors.description = "Description is required";
        if (!data.fullContent) newErrors.fullContent = "Full content is required";
        if (!coverFile) newErrors.coverUpload = "Cover image is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setIsSubmitting(true);

        // চূড়ান্ত পে-লোড তৈরি (এখানে সমস্ত ডেটা পেয়ে যাবেন)
        const payload = {
            title: data.title,
            genre: data.genre,
            price: Number(data.price), // সংখ্যায় রূপান্তর
            description: data.description,
            fullContent: data.fullContent,
            coverImage: coverFile, // পুরো ফাইল অবজেক্টটি এখানে থাকবে
            publisherId: publisher?._id,
            publisherName: publisher?.name,
            status: "published",
            isPubliclyVisible: true,
        };

        try {
            // ডেটা দেখতে চাইলে কনসোলে চেক করতে পারেন
            console.log("Ebook Submission Data:", payload);

            // এখানে আপনার ব্যাকএন্ড API কল করুন
            /*
            const response = await fetch('/api/ebooks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (!response.ok) throw new Error("Failed to publish");
            */

            // সফল হলে ইউজারকে নোটিফিকেশন দিন
            alert("Success! Ebook published successfully.");
            // অথবা HeroUI টোস্ট ব্যবহার করতে পারেন: 
            // addToast({ title: "Success", description: "Ebook published successfully", variant: "flat", color: "success" });

            // ফর্ম রিসেট করুন
            e.currentTarget.reset();
            setCoverFile(null);

        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files?.[0]) {
            // শুধু নাম না রেখে পুরো ফাইল অবজেক্টটি স্টেটে রাখা ভালো
            setCoverFile(e.target.files[0]);
        }
    };

    // Light Theme Style Tokens
    const textInputClass = "w-full text-black bg-zinc-50 border border-zinc-300 hover:bg-zinc-100 focus:border-zinc-500 rounded-lg h-12 px-3 text-sm placeholder:text-zinc-400 outline-none transition-all";
    const fileInputClass = "w-full text-zinc-600 bg-zinc-50 border border-zinc-300 hover:bg-zinc-100 focus:border-zinc-500 rounded-lg h-12 px-3 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-zinc-200 file:text-black hover:file:bg-zinc-300 outline-none transition-all flex items-center pt-1.5 cursor-pointer";
    const textAreaClass = "w-full text-black bg-zinc-50 border border-zinc-300 hover:bg-zinc-100 focus:border-zinc-500 rounded-lg p-3 text-sm placeholder:text-zinc-400 outline-none transition-all";

    const selectBoxClass = "w-full";
    const triggerClasses = "w-full flex items-center justify-between bg-zinc-50 border border-zinc-300 hover:bg-zinc-100 h-12 rounded-lg px-3 text-black transition-all text-sm outline-none data-[focused=true]:border-zinc-500 data-[invalid=true]:border-danger";
    const popoverClasses = "bg-white border border-zinc-200 text-black rounded-lg shadow-xl p-1";
    const listItemClasses = "flex items-center justify-between p-2 rounded-md hover:bg-zinc-100 cursor-pointer text-sm text-zinc-800 outline-none data-[focused=true]:bg-zinc-100";

    return (
        <div className="bg-zinc-50 text-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-zinc-200 rounded-xl p-8 shadow-lg">

                {/* Form Header block */}
                <div className="border-b border-zinc-200 pb-6 mb-8">
                    <h1 className="text-2xl font-semibold tracking-tight text-black">Add New Ebook</h1>
                    <p className="text-zinc-500 text-sm mt-1">
                        Fill out the details below to publish your digital book to the catalog.
                    </p>

                    {/* Publisher panel */}
                    {publisher && (
                        <div className="mt-4 inline-flex items-center gap-2 bg-zinc-100 border border-zinc-200 rounded-lg px-3 py-1.5 text-xs text-zinc-600">
                            <BookOpen size={14} className="text-zinc-400" />
                            Publishing as: <span className="font-semibold text-zinc-800">{publisher.name}</span>
                            <span className="text-emerald-600 font-medium bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">{publisher.status || "Verified"}</span>
                        </div>
                    )}
                </div>

                {/* Hero UI Main Form Handler */}
                <Form onSubmit={handleSubmit} className="space-y-8" validationErrors={errors} validationBehavior='aria'>

                    {/* SECTION 1: Ebook Meta Information */}
                    <Fieldset className="space-y-6 w-full">
                        <legend className="text-lg font-medium text-zinc-800 border-b border-zinc-200 w-full pb-2 mb-2">
                            Ebook Information
                        </legend>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TextField isInvalid={!!errors.title} className="flex flex-col gap-1 w-full">
                                <Label className="text-zinc-600 font-medium text-sm">Title</Label>
                                <Input name="title" placeholder="e.g. Mastering Next.js Server Components" className={textInputClass} />
                                {errors.title && <FieldError className="text-xs text-danger mt-1">{errors.title}</FieldError>}
                            </TextField>

                            <Select className={selectBoxClass} name="genre" isInvalid={!!errors.genre}>
                                <Label className="text-zinc-600 font-medium text-sm mb-1 block">Genre</Label>
                                <Select.Trigger className={triggerClasses}>
                                    <Select.Value className="text-black placeholder:text-zinc-400" />
                                    <Select.Indicator />
                                </Select.Trigger>
                                {errors.genre && <span className="text-xs text-danger mt-1">{errors.genre}</span>}
                                <Select.Popover className={popoverClasses}>
                                    <ListBox className="outline-none">
                                        <ListBox.Item id="technology" className={listItemClasses} textValue="Technology">Technology</ListBox.Item>
                                        <ListBox.Item id="fiction" className={listItemClasses} textValue="Fiction">Fiction</ListBox.Item>
                                        <ListBox.Item id="non-fiction" className={listItemClasses} textValue="Non-Fiction">Non-Fiction</ListBox.Item>
                                        <ListBox.Item id="sci-fi" className={listItemClasses} textValue="Sci-Fi & Fantasy">Sci-Fi & Fantasy</ListBox.Item>
                                        <ListBox.Item id="business" className={listItemClasses} textValue="Business & Finance">Business & Finance</ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TextField isInvalid={!!errors.price} className="flex flex-col gap-1 w-full">
                                <Label className="text-zinc-600 font-medium text-sm">Price (USD)</Label>
                                <Input name="price" placeholder="0.00" type="number" step="0.01" className={textInputClass} />
                                {errors.price && <FieldError className="text-xs text-danger mt-1">{errors.price}</FieldError>}
                            </TextField>

                            <div className="flex flex-col gap-1 w-full">
                                <Label className="text-zinc-600 font-medium text-sm">Cover Upload</Label>
                                <input
                                    name="coverUpload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className={fileInputClass}
                                />
                                {coverFile && <span className="text-xs text-zinc-500 mt-1">Selected: {coverFile.name}</span>}
                                {errors.coverUpload && <span className="text-xs text-danger mt-1">{errors.coverUpload}</span>}
                            </div>
                        </div>
                    </Fieldset>

                    {/* SECTION 2: Ebook Content */}
                    <Fieldset className="space-y-6 w-full">
                        <legend className="text-lg font-medium text-zinc-800 border-b border-zinc-200 w-full pb-2 mb-2">
                            Ebook Content & Details
                        </legend>

                        <TextField isInvalid={!!errors.description} className="flex flex-col gap-1 w-full">
                            <Label className="text-zinc-600 font-medium text-sm">Description</Label>
                            <TextArea
                                name="description"
                                placeholder="Write a short book summary or promotional synopsis..."
                                rows={3}
                                className={textAreaClass}
                            />
                            {errors.description && <FieldError className="text-xs text-danger mt-1">{errors.description}</FieldError>}
                        </TextField>

                        <TextField isInvalid={!!errors.fullContent} className="flex flex-col gap-1 w-full">
                            <Label className="text-zinc-600 font-medium text-sm">Full Content</Label>
                            <TextArea
                                name="fullContent"
                                placeholder="Paste or type your complete book contents / manuscript chapters here..."
                                rows={8}
                                className={textAreaClass}
                            />
                            {errors.fullContent && <FieldError className="text-xs text-danger mt-1">{errors.fullContent}</FieldError>}
                        </TextField>
                    </Fieldset>

                    {/* Form Actions */}
                    <div className="flex justify-end gap-3 pt-4 border-t border-zinc-200 w-full">
                        <Button
                            type="button"
                            variant="bordered"
                            className="border-zinc-300 text-zinc-700 hover:bg-zinc-100 rounded-lg px-6 font-medium h-11"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            isLoading={isSubmitting}
                            className="bg-black text-white font-semibold hover:bg-zinc-800 rounded-lg px-6 transition-colors h-11"
                        >
                            {isSubmitting ? "Publishing..." : "Publish"}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}