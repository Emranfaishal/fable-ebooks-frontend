"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

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
        <div className="relative overflow-hidden rounded-3xl bg-gray-300">
            <div className="grid min-h-125 md:grid-cols-2">

                {/* Left Content */}
                <motion.div
                    key={current}
                    className="flex flex-col justify-center px-8 md:px-16 text-black"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-6xl font-bold leading-tight"
                    >
                        {slides[current].title}
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mt-4 text-lg text-black"
                    >
                        {slides[current].description}
                    </motion.p>

                    <motion.div variants={itemVariants}>
                        <Button
                            className="mt-8 w-fit font-semibold bg-red-400"
                        >
                            See All Books
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    key={`image-${current}`}
                    className="flex items-center justify-center p-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image
                        src={slides[current].image}
                        alt="Book Cover"
                        width={320}
                        height={420}
                        className="rounded-xl h-105 w-auto object-cover shadow-2xl"
                        priority
                    />
                </motion.div>
            </div>

            {/* Previous Button */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg hover:scale-110 transition"
            >
                <FaChevronLeft />
            </button>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg hover:scale-110 transition"
            >
                <FaChevronRight />
            </button>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-3 w-3 rounded-full transition-all ${current === index
                                ? "bg-white scale-125"
                                : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}