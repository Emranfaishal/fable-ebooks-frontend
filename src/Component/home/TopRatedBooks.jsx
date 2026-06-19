import { Star, ChevronRight } from "lucide-react";
import Image from "next/image";

const TopRatedBooks = () => {
    const books = [
        {
            title: "Goats and Sheep",
            image: "/topbooks.jpg",
            rating: 6.9,
        },
        {
            title: "The Long View",
            image: "/topbooks1.jpg",
            rating: 9.9,
        },
        {
            title: "Imperium",
            image: "/topbooks2.jpg",
            rating: 7.9,
        },
        {
            title: "Gulliver's Travels",
            image: "/topbooks3.jpg",
            rating: 4.0,
        },
        {
            title: "The Roommate",
            image: "/topbooks4.jpg",
            rating: 4.9,
        },
        {
            title: "The Great Gatsby",
            image: "/topbooks5.jpg",
            rating: 4.4,
        },

    ];
    return (

        <section>
            <div className="mb-8 flex items-center justify-between">
                <h2 className="text-4xl font-bold">
                    Top Rated Books
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                {books.map((book) => (
                    <div key={book.title}>
                        <div className="overflow-hidden rounded-lg">
                            <Image
                                src={book.image}
                                alt={book.title}
                                width={220}
                                height={320}
                                className="h-70 w-full object-cover"
                            />
                        </div>
                        <div className="mt-2 flex items-center gap-1">
                            <Star className="text-red-500" size={16} fill="currentColor" />
                            <span >{book.rating}</span>
                        </div>

                        <h3 className="mt-3 text-2xl font-medium">
                            {book.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopRatedBooks;