"use client";

import React, { useState } from "react";
import { Form, TextField, Label, InputGroup, Input, Button, Card, Link } from "@heroui/react";
import { Envelope, Shield, Eye, EyeClosed, CircleCheck, CircleXmark } from "@gravity-ui/icons";
import { signIn } from "@/lib/auth-client"; 
import { useRouter } from "next/navigation";

export default function SignInPage() {
    const router = useRouter();

    // Form States
    const [email, setEmail] = useState("");
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
            const { data, error } = await signIn.email({
                email,
                password,
                callbackURL: "/",
            });

            if (error) {
                setErrorMessage(error.message || "Invalid email or password.");
            } else {
                setSuccessMessage("Signed in successfully! Redirecting...");
                setEmail("");
                setPassword("");

                setTimeout(() => {
                    router.push("/");
                }, 1500);
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
                    <Card.Title className="text-2xl font-bold tracking-tight">Welcome Back</Card.Title>
                    <Card.Description className="text-small text-default-500">
                        Enter your credentials to access your account
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
                            Sign In
                        </Button>
                    </Form>

                    {/* Sign Up পেজে ফিরে যাওয়ার অপশন */}
                    <div className="mt-4 text-center text-small">
                        <span className="text-default-500">Do not have an account? </span>
                        <Link href="/signUp" size="sm" underline="hover">
                            Sign Up
                        </Link>
                    </div>
                </Card.Content>
            </Card>
        </div>
    );
}