import { getLoggedRecruiterAllBooks } from "@/lib/api/allBooks";
import AddEbookForm from "./AddEbookForm";
const AddBooksPage = async () => {
    const mockPublisher = {
        _id: "publisher_987",
        name: "Acme Publications (Auto-filled)",
        status: "Verified",
    };
    const books = await getLoggedRecruiterAllBooks()

    return (
        <div className="w-full min-h-screen bg-zinc-50">
            <AddEbookForm publisher={mockPublisher} books={books} />
        </div>
    );
};

export default AddBooksPage;