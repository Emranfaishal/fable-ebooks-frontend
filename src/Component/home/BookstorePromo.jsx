"use client";

import React from "react";
import Image from "next/image";
import { Button, Avatar } from "@heroui/react";
import { FiStar, FiArrowRight } from "react-icons/fi";

const books = [
    {
        title: "Lovers in Auschwitz",
        image: "/book1.jpg",
        alt: "Lovers in Auschwitz book cover",
    },
    {
        title: "Moby Dick",
        image: "/book2.jpg",
        alt: "Moby Dick book cover",
    },
    {
        title: "One Hundred Years of Solitude",
        image: "/book.jpg",
        alt: "One Hundred Years of Solitude book cover",
    },
];



export default function BookstorePromo() {
    const [activeSlide, setActiveSlide] = React.useState(1);

    return (<div className="w-full mt-10">
        <section className="bg-[#D63B6B] px-6 py-12 sm:px-12 rounded-2xl"> <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 lg:flex-row">
            {/* Left Content */} <div className="flex flex-col items-start gap-4 text-white"> <h1 className="text-2xl font-bold leading-snug sm:text-3xl">
                Enjoy Up to 50% Off <br />
                Bestsellers and New Releases </h1>

                <Button
                    variant="light"
                    className="px-0 text-base font-medium text-white underline-offset-4 hover:underline"
                    endContent={<FiArrowRight />}
                >
                    See The Books
                </Button>
            </div>

            {/* Book Covers */}
            <div className="flex gap-4 sm:gap-5">
                {books.map((book) => (
                    <div
                        key={book.title}
                        className="relative h-44 w-32 overflow-hidden rounded-md shadow-lg ring-1 ring-black/10 sm:h-52 sm:w-36"
                    >
                        <Image
                            src={book.image}
                            alt={book.alt}
                            fill
                            className="object-cover w-full"
                        />
                    </div>
                ))}
            </div>
        </div>
        </section>
        
    </div>


    );
}
