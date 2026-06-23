"use client";

import StatsCard from "./StatCard";

export default function StatsGrid({ stats }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {stats.map((item) => (
                <StatsCard
                    key={item.title}
                    title={item.title}
                    value={item.value}
                    icon={item.icon}
                    iconBg={item.iconBg}
                />
            ))}
        </div>
    );
}