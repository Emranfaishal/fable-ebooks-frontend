"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const slides = [
    {
        title: "Best Place To Find Your Favorite Books",
        description:
            "Explore our latest releases and must-read books: your next favorite story awaits!",
        image: "/book.jpg",
    },
    {
        title: "Discover Amazing Stories",
        description:
            "Browse thousands of ebooks from talented writers around the world.",
        image: "/book1.jpg",
    },
    {
        title: "Read Anywhere Anytime",
        description:
            "Enjoy your favorite books on any device with ease.",
        image: "/book2.jpg",
    },
];

export default function HeroBanner() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    return (
        <div className="relative overflow-hidden rounded-3xl bg-sky-400">
            <div className="grid min-h-[420px] md:grid-cols-2">

                {/* Left Content */}
                <div className="flex flex-col justify-center px-8 md:px-16 text-white">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        {slides[current].title}
                    </h1>

                    <p className="mt-4 text-lg text-white/90">
                        {slides[current].description}
                    </p>

                    <Button
                        color="danger"
                        className="mt-8 w-fit font-semibold"
                    >
                        See All Books
                    </Button>
                </div>

                {/* Right Image */}
                <div className="flex items-center justify-center p-6">
                    <Image
                        src={slides[current].image}
                        alt="Book Cover"
                        width={300}
                        height={400}
                        className="rounded-lg h-88 w-auto object-cover shadow-xl"
                    />
                </div>
            </div>

            {/* Left Arrow */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg"
            >
                <FaChevronLeft />
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg"
            >
                <FaChevronRight />
            </button>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-3 w-3 rounded-full ${current === index
                            ? "bg-white"
                            : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}