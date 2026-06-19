"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function BlogData() {
    const blogs = [
        {
            id: 1,
            title: "Celebrating Diverse Voices",
            description:
                "Spotlight authors from diverse backgrounds who are contributing fresh perspectives and stories to the literary world.",
            image: "/blog1.jpg",
            author: "Jane Smith",
            authorImage: "/author1.jpg",
            date: "Oct 28, 2024",
            readTime: "15-20 mins read",
        },
        {
            id: 2,
            title: "The Evolution of Fantasy Fiction",
            description:
                "Trace the development of fantasy literature from its early roots to contemporary fantasy.",
            image: "/blog2.jpg",
            author: "Sarah Legend",
            authorImage: "/author2.jpg",
            date: "May 28, 2024",
            readTime: "15-20 mins read",
        },
        {
            id: 3,
            title: "Biographies That Inspire",
            description:
                "Focus on biographies that offer incredible insights into the lives of remarkable individuals.",
            image: "/blog3.jpg",
            author: "Emily Davis",
            authorImage: "/author3.jpg",
            date: "June 8, 2024",
            readTime: "15-20 mins read",
        },
        {
            id: 4,
            title: "Young Adult Literature Trends",
            description:
                "Examine the evolution of Young Adult literature and the trends shaping the genre.",
            image: "/blog4.jpg",
            author: "David Brown",
            authorImage: "/author4.jpg",
            date: "Sep 11, 2024",
            readTime: "15-20 mins read",
        },
    ];
    return (
        <section>
            <div className="mb-8 flex items-center justify-between">
                <h2 className="text-4xl font-bold">Popular Blogs</h2>

            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="overflow-hidden rounded-2xl bg-white shadow-sm border"
                    >
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            width={400}
                            height={250}
                            className="h-[180px] w-full object-cover"
                        />

                        <div className="p-4">
                            <p className="text-xs text-gray-500">
                                {blog.readTime}
                            </p>

                            <h3 className="mt-2 text-xl font-semibold">
                                {blog.title}
                            </h3>

                            <p className="mt-3 line-clamp-3 text-sm text-gray-600">
                                {blog.description}
                            </p>

                            <div className="mt-6 flex items-center gap-3">
                                <Image
                                    src={blog.authorImage}
                                    alt={blog.author}
                                    width={40}
                                    height={40}
                                    className="rounded-full w-15 h-15"
                                />

                                <div>
                                    <h4 className="text-sm font-medium">
                                        {blog.author}
                                    </h4>

                                    <p className="text-xs text-gray-500">
                                        {blog.date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}