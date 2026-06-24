const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const getBooks = async (booksId, status= "active") => {
    const res = await fetch(`${baseUrl}/api/addEbooks?booksId=${booksId}&status=${status}`)
    return res.json()
}
