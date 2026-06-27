'use server'

import { serverMutation } from "../core/server"

export const createBook =async (BookData)=>{
    return await serverMutation('/api/book',BookData)
}


// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
// export const createBook = async (BookData) => {
//     const res = await fetch(`${baseUrl}/api/book`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(BookData),
//     });
//     return res.json();
// }