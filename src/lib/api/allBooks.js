import { serverFetch } from "../core/server"
import { getUserSession } from "../core/session"

export const getRecruiter = async (recruiter) => {
return serverFetch(`/api/my/book?recruiterId=${recruiter}`)
}
export const getLoggedRecruiterAllBooks=async()=>{
    const user=await getUserSession()
    return getRecruiter(user?.id)
}