"use client";

import React, { useState } from "react";
import { Form, TextField, Label, InputGroup, Input, Button, Card, Link } from "@heroui/react";
import { Person, Envelope, Shield, Eye, EyeClosed, CircleCheck, CircleXmark, Picture } from "@gravity-ui/icons";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
    const router = useRouter();

    // Form States
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState("");

    // UI States
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        try {
            const { data, error } = await signUp.email({
                email,
                password,
                name,
                image,
                callbackURL: "/",
            });

            if (error) {
                setErrorMessage(error.message || "Something went wrong. Please try again.");
            } else {
                setSuccessMessage("Account created successfully! Redirecting...");
                setName("");
                setEmail("");
                setImage("");
                setPassword("");

                setTimeout(() => {
                    router.push("/signIn");
                }, 2000);
            }
        } catch (err) {
            setErrorMessage("An unexpected error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-background p-4">
            <Card className="w-full max-w-md p-5 shadow-xl border border-default-100">
                <Card.Header className="flex flex-col items-center gap-1 pb-0 pt-6">
                    <Card.Title className="text-2xl font-bold tracking-tight">Create an account</Card.Title>
                    <Card.Description className="text-small text-default-500">
                        Enter your details below to create your account
                    </Card.Description>
                </Card.Header>

                <Card.Content className="pt-6">
                    {/* Status Message banners */}
                    {errorMessage && (
                        <div className="mb-4 flex items-center gap-2 rounded-medium bg-danger-50 p-3 text-small text-danger dark:bg-danger-50/10">
                            <CircleXmark className="h-4 w-4 shrink-0" />
                            <span>{errorMessage}</span>
                        </div>
                    )}

                    {successMessage && (
                        <div className="mb-4 flex items-center gap-2 rounded-medium bg-success-50 p-3 text-small text-success dark:bg-success-50/10">
                            <CircleCheck className="h-4 w-4 shrink-0" />
                            <span>{successMessage}</span>
                        </div>
                    )}

                    <Form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        {/* NAME FIELD */}
                        <TextField isRequired className="w-full">
                            <Label className="text-small font-medium text-default-700 mb-1 block">Name</Label>
                            <InputGroup>
                                <InputGroup.Prefix>
                                    <Person className="text-default-400" />
                                </InputGroup.Prefix>
                                <Input
                                    className={'w-full'}
                                    placeholder="John Doe"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </InputGroup>
                        </TextField>

                        {/* EMAIL FIELD */}
                        <TextField isRequired className="w-full">
                            <Label className="text-small font-medium text-default-700 mb-1 block">Email</Label>
                            <InputGroup>
                                <InputGroup.Prefix>
                                    <Envelope className="text-default-400" />
                                </InputGroup.Prefix>
                                <Input
                                    className={'w-full'}
                                    placeholder="you@example.com"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </InputGroup>
                        </TextField>

                        {/* PROFILE IMAGE URL FIELD */}
                        <TextField className="w-full">
                            <Label className="text-small font-medium text-default-700 mb-1 block">Profile Image URL</Label>
                            <InputGroup>
                                <InputGroup.Prefix>
                                    <Picture className="text-default-400" />
                                </InputGroup.Prefix>
                                <Input
                                    className={'w-full'}
                                    placeholder="https://example.com/avatar.jpg"
                                    type="url"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                />
                            </InputGroup>
                        </TextField>

                        {/* PASSWORD FIELD */}
                        <TextField isRequired className="w-full">
                            <Label className="text-small font-medium text-default-700 mb-1 block">Password</Label>
                            <InputGroup>
                                <InputGroup.Prefix>
                                    <Shield className="text-default-400" />
                                </InputGroup.Prefix>
                                <Input
                                    className={'w-full'}
                                    placeholder="••••••••"
                                    type={isVisible ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <InputGroup.Suffix>
                                    <button
                                        className="focus:outline-none flex items-center"
                                        type="button"
                                        onClick={toggleVisibility}
                                        aria-label="toggle password visibility"
                                    >
                                        {isVisible ? (
                                            <EyeClosed className="text-xl text-default-400" />
                                        ) : (
                                            <Eye className="text-xl text-default-400" />
                                        )}
                                    </button>
                                </InputGroup.Suffix>
                            </InputGroup>
                        </TextField>

                        <Button
                            className="w-full mt-2"
                            color="primary"
                            type="submit"
                            isLoading={isLoading}
                        >
                            Sign Up
                        </Button>
                    </Form>

                    {/* Sign In পেজে যাওয়ার অপশন */}
                    <div className="mt-4 text-center text-small">
                        <span className="text-default-500">Already have an account? </span>
                        <Link href="/signIn" size="sm" underline="hover">
                            Sign In
                        </Link>
                    </div>
                </Card.Content>
            </Card>
        </div>
    );
}