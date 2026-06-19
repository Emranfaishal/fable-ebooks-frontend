"use client";

import React from "react";
import Image from "next/image";
import { Button, Avatar } from "@heroui/react";
import { FiStar, FiArrowRight } from "react-icons/fi";

const TestimonilsPage = () => {
    const [activeSlide, setActiveSlide] = React.useState(1);
    const testimonials = [
        {
            name: "Neil Gaiman",
            rating: 5,
            image: "/neil.jpg",
            quote:
                "Being an avid reader, I've tried many book websites over the years, but this one stands out for its comprehensive collection.",
        },
        {
            name: "Stephen King",
            rating: 4,
            image: "/stephen.jpg",
            quote:
                "I'm impressed with the efficiency of this website. They often have exclusive editions and signed copies that are hard to find.",
        },
        {
            name: "J.K Rowling",
            rating: 5,
            image: "/rowling.jpg",
            quote:
                "Being an avid reader, I've tried many book websites over the years, but this one stands out for its comprehensive collection.",
        },
    ];

    function StarRating({ count }) {
        return (
            <div
                className="flex items-center gap-0.5"
                aria-label={`${count} out of 5 stars`}
            >
                {Array.from({ length: 5 }).map((_, i) => (
                    <FiStar
                        key={i}
                        className={
                            i < count
                                ? "fill-amber-400 text-amber-400"
                                : "text-gray-300"
                        }
                        size={16}
                    />
                ))} </div>
        );
    }
    return (

        <section className="bg-white px-6 py-16 sm:px-12">
            <h2 className="mb-6 text-center text-4xl font-bold">
                    Popular Authors
                </h2>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-3">
                {testimonials.map((t, idx) => (
                    <div
                        key={t.name}
                        className={`bg-gray-300 rounded-2xl p-10 flex flex-col items-center text-center transition-opacity ${idx === activeSlide ? "opacity-100" : "opacity-40"
                            }`}
                    >
                        <div className="relative mb-3 h-14 w-14 overflow-hidden rounded-full">
                            <Image
                                src={t.image}
                                alt={t.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="mb-1 text-sm font-semibold text-gray-900">
                            {t.name}
                        </p>

                        <div className="mb-3">
                            <StarRating count={t.rating} />
                        </div>

                        <p className="max-w-xs text-sm leading-relaxed text-gray-500">
                            {t.quote}
                        </p>
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="mt-10 flex items-center justify-center gap-2">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        aria-label={`Show testimonial ${idx + 1}`}
                        onClick={() => setActiveSlide(idx)}
                        className={`h-2 rounded-full transition-all ${idx === activeSlide
                            ? "w-6 bg-gray-800"
                            : "w-2 bg-gray-300 hover:bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default TestimonilsPage;