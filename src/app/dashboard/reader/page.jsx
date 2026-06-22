'use client'
import { authClient } from '@/lib/auth-client';

const ReaderDashboardHomePage = () => {
    const { data: session, isPending } = authClient.useSession();
    console.log(session);

    if (isPending) {
        return null;
    }

    const user = session?.user;
    console.log(user);
    return (
        <div>
            <h2 className='text-4xl font-bold'>welcome come  {user?.name} </h2>
        </div>
    );
};

export default ReaderDashboardHomePage;