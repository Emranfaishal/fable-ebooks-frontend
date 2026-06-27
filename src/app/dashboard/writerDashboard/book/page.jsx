
import { getUserSession } from '@/lib/core/session';
import CompanyProfile from './CompanyProfile';
import { getRecruiter } from '@/lib/api/allBooks';


// const BooksPage = async () => {
//     const user = await getUserSession()
//     console.log('user session is :', user);
//     const company = await getRecruiter(user?.id);
//     console.log(company)
//     return (
//         <div>
//             <CompanyProfile recruiter={user} recruiterCompany={company}></CompanyProfile>
//         </div>
//     );
// };
const BooksPage = async () => {
    const user = await getUserSession()
    console.log('user session is :', user);

    // Safety Check: If there's no user or user ID, don't fetch the company
    if (!user?.id) {
        return <div>Loading session or Unauthorized...</div>;
    }

    const company = await getRecruiter(user.id);
    console.log(company);

    return (
        <div>
            {/* Also fixed a small bug: passing user to recruiter prop */}
            <CompanyProfile recruiter={user} recruiterCompany={company} />
        </div>
    );
}; 

export default BooksPage;