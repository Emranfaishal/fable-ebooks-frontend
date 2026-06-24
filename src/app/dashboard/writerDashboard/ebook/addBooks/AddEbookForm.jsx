'use client'
import { createBooks } from "@/lib/action/addEbooks";
import { BookOpen } from "@gravity-ui/icons";
import { Card, FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
const AddEbookForm = ({ publisher }) => {
    const [mockCompany] = useState({
        name: "Acme Corp (Auto-filled)",
        id: "company_123",
        isApproved: true,
    });
    const onSubmit = async (e) => {
        e.preventDefault();
        if (!mockCompany.isApproved) {
            alert("Your company profile must be approved before you can post jobs.");
            return;
        }
        const fromData = new FormData(e.currentTarget);

        // const ebook = Object.fromEntries(fromData.entries());
        const ebook = {
            ...Object.fromEntries(fromData.entries()),
            booksId: mockCompany.id,
            status: "active",
            isPubliclyVisible: true
        };
        console.log(ebook);
        const res = await createBooks(ebook);
        if (res.insertedId) {
            toast.success('add to the books')
            e.target.reset()
            redirect('/dashboard/writerDashboard/ebook')
        }
        // /dashboard/writerDashboard/ebook/addBooks

    };

    return (
        <div className="max-w-7xl mx-auto p-4">
            <Card>
                <div className="border-b border-zinc-200 pb-6 mb-2">
                    <h1 className="text-4xl font-bold tracking-tight text-black">Add New Ebook</h1>
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
                <form
                    onSubmit={onSubmit}
                    className="p-5 space-y-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Title */}
                        <div className="md:col-span-2">
                            <TextField name="title" isRequired>
                                <Label>Title</Label>
                                <Input placeholder="Enter Ebook Title" className="rounded-xl" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Genre */}
                        <div>
                            <Select
                                name="genre"
                                isRequired
                                className="w-full"
                                placeholder="Select Genre"
                            >
                                <Label>Genre</Label>
                                <Select.Trigger className="rounded-xl">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="Fiction" textValue="Fiction">Fiction <ListBox.ItemIndicator /></ListBox.Item>
                                        <ListBox.Item id="Non-Fiction" textValue="Non-Fiction">Non-Fiction <ListBox.ItemIndicator /></ListBox.Item>
                                        <ListBox.Item id="Sci-Fi" textValue="Sci-Fi">Sci-Fi & Fantasy <ListBox.ItemIndicator /></ListBox.Item>
                                        <ListBox.Item id="Biography" textValue="Biography">Biography <ListBox.ItemIndicator /></ListBox.Item>
                                        <ListBox.Item id="Mystery" textValue="Mystery">Mystery & Thriller <ListBox.ItemIndicator /></ListBox.Item>
                                        <ListBox.Item id="Other" textValue="Other">Other <ListBox.ItemIndicator /></ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Price */}
                        <TextField name="price" type="number" isRequired>
                            <Label>Price</Label>
                            <Input
                                type="number"
                                placeholder="$9.99"
                                className="rounded-xl"
                            />
                            <FieldError />
                        </TextField>

                        {/* Cover Upload (Image URL হিসেবে রাখা হয়েছে) */}
                        <div className="md:col-span-2">
                            <TextField name="coverUrl" isRequired>
                                <Label>Cover Upload (Image URL)</Label>
                                <Input
                                    type="url"
                                    placeholder="https://example.com/ebook-cover.jpg"
                                    className="rounded-xl"
                                />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <TextField name="description" isRequired>
                                <Label>Description</Label>
                                <TextArea
                                    placeholder="Enter a brief summary of the ebook..."
                                    className="rounded-xl"
                                />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Full Content */}
                        <div className="md:col-span-2">
                            <TextField name="fullContent" isRequired>
                                <Label>Full Content</Label>
                                <TextArea
                                    placeholder="Paste or write the entire manuscript contents here..."
                                    className="rounded-xl"
                                    rows={10}
                                />
                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    {/* Publish Button */}
                    <Button
                        type="submit"
                        variant="outline"
                        className="rounded-lg w-full bg-[#C5A358] text-white font-semibold"
                    >
                        Publish
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default AddEbookForm;