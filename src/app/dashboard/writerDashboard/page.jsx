'use client'
import Sorting from '@/Component/dashboard/Sorting';
import StatsGrid from '@/Component/dashboard/StatsGrid';
import { authClient } from '@/lib/auth-client';

import {
    FileText,
    Persons,
    Play,
    CircleCheck,
} from "@gravity-ui/icons";

const ReaderDashboardHomePage = () => {

    const stats = [
        {
            title: "Total Job Posts",
            value: 48,
            icon: FileText,
        },
        {
            title: "Total Applicants",
            value: 1284,
            icon: Persons,
        },
        {
            title: "Active Jobs",
            value: 18,
            icon: Play,
        },
        {
            title: "Jobs Closed",
            value: 32,
            icon: CircleCheck,
        },
    ];
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
            <StatsGrid stats={stats}></StatsGrid>
            <Sorting></Sorting>
        </div>
    );
};

export default ReaderDashboardHomePage;