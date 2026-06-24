import React from 'react';
import { Table, Chip, Button, Tooltip } from "@heroui/react";
import { Eye, Edit2, Trash2 } from "lucide-react";
import { getBooks } from '@/lib/api/books';
import Image from 'next/image';

const EbooksPage = async () => {
    const companyId = 'company_123';
    // API থেকে বইয়ের ডাটা আনা হচ্ছে
    const books = await getBooks(companyId) || [];

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-4">
            {/* হেডার সেকশন */}
            <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold tracking-tight">E-Book Library</h2>
                <p className="text-sm text-default-500">Explore, read, and manage your company s digital book collection.</p>
            </div>

            {/* কোনো বই না থাকলে এটি দেখাবে */}
            {books.length === 0 ? (
                <div className="text-center py-12 text-default-400">
                    No books available at the moment.
                </div>
            ) : (
                <Table aria-label="Company books management table">
                    <Table.ResizableContainer>
                        <Table.Content className="min-w-200">
                            {/* ই-বুক অনুযায়ী টেবিল হেডার আপডেট করা হয়েছে */}
                            <Table.Header>
                                <Table.Column isRowHeader defaultWidth="2fr" id="bookTitle" minWidth={200}>
                                    Book Title
                                    <Table.ColumnResizer />
                                </Table.Column>
                                <Table.Column defaultWidth="1.2fr" id="genre" minWidth={150}>
                                    Genre
                                    <Table.ColumnResizer />
                                </Table.Column>
                                <Table.Column defaultWidth="1fr" id="price" minWidth={120}>
                                    Price
                                    <Table.ColumnResizer />
                                </Table.Column>
                                <Table.Column defaultWidth="1fr" id="status" minWidth={100}>
                                    Status
                                    <Table.ColumnResizer />
                                </Table.Column>
                                <Table.Column defaultWidth="1.2fr" id="actions" minWidth={150}>
                                    Actions
                                </Table.Column>
                            </Table.Header>

                            {/* ডাটা রেন্ডার সেকশন */}
                            <Table.Body emptyContent={"No books found for this company."}>
                                {books.map((book) => (
                                    <Table.Row key={book._id?.$oid || book._id}>
                                        {/* বইয়ের নাম এবং কভার ইমেজ */}
                                        <Table.Cell>
                                            <div className="flex items-center gap-3">
                                                {book.coverUrl && (
                                                    <Image
                                                        src={book.coverUrl}
                                                        alt={book.title || "Book Cover"}
                                                        width={40}   // w-10 এর সমতুল্য (40px)
                                                        height={56}  // h-14 এর সমতুল্য (56px)
                                                        className="object-cover rounded shadow-sm"
                                                    />
                                                )}
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-default-800 line-clamp-1">
                                                        {book.title}
                                                    </span>
                                                    <span className="text-xs text-default-400 line-clamp-1">
                                                        {book.description}
                                                    </span>
                                                </div>
                                            </div>
                                        </Table.Cell>

                                        {/* জেনার (Genre) */}
                                        <Table.Cell>
                                            <span className="text-sm font-medium text-default-600">
                                                {book.genre || "N/A"}
                                            </span>
                                        </Table.Cell>

                                        {/* দাম (Price) */}
                                        <Table.Cell>
                                            <span className="text-sm font-semibold text-default-700">
                                                {book.price ? `$${book.price}` : "Free"}
                                            </span>
                                        </Table.Cell>

                                        {/* স্ট্যাটাস চিপ */}
                                        <Table.Cell>
                                            <Chip

                                                size="sm"
                                                variant="soft"
                                                className="capitalize"
                                            >
                                                {book.status || "Unknown"}
                                            </Chip>
                                        </Table.Cell>

                                        {/* অ্যাকশন বাটনসমূহ */}
                                        <Table.Cell>
                                            <div className="relative flex items-center gap-2">
                                                <Tooltip content="View Details">
                                                    <Button
                                                        isIconOnly
                                                        size="sm"
                                                        variant="light"
                                                        aria-label="View book details"
                                                    >
                                                        <Eye className="text-default-400 w-4 h-4" />
                                                    </Button>
                                                </Tooltip>
                                                <Tooltip content="Edit Book">
                                                    <Button
                                                        isIconOnly
                                                        size="sm"
                                                        variant="light"
                                                        aria-label="Edit book"
                                                    >
                                                        <Edit2 className="text-default-400 w-4 h-4" />
                                                    </Button>
                                                </Tooltip>
                                                <Tooltip content="Delete Book">
                                                    <Button
                                                        isIconOnly
                                                        size="sm"
                                                        variant="light"
                                                        color="danger"
                                                        aria-label="Delete book"
                                                    >
                                                        <Trash2 className="text-danger w-4 h-4" />
                                                    </Button>
                                                </Tooltip>
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Content>
                    </Table.ResizableContainer>
                </Table>
            )}
        </div>
    );
};

export default EbooksPage;