import AddEbookForm from "./AddEbookForm";
const AddBooksPage = () => {
    const mockPublisher = {
        _id: "publisher_987",
        name: "Acme Publications (Auto-filled)",
        status: "Verified",
    };

    return (
        <div className="w-full min-h-screen bg-zinc-50">
            <AddEbookForm publisher={mockPublisher} />
        </div>
    );
};

export default AddBooksPage;