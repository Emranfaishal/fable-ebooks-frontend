'use server'

import { serverMutation } from "../core/server"

export const createBooks = async (newBookData) => {
    return serverMutation('/api/addEbooks', newBookData)
}
// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
// export const createBooks = async (newBookData) => {
//     const res = await fetch(`${baseUrl}/api/addEbooks`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newBookData),
//     });
//     return res.json();
// }