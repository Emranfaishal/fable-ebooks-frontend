"use client";

import React from "react";

export default function StatsCard({
    title,
    value,
    icon: Icon,
    iconBg = "bg-default-100",
}) {
    return (
        <div className="bg-content1 border border-default-200 rounded-xl p-5 h-full">
            <div className="flex flex-col gap-4">
                <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconBg}`}
                >
                    {Icon && <Icon className="w-5 h-5 text-default-600" />}
                </div>

                <div>
                    <p className="text-sm text-default-500">{title}</p>

                    <h2 className="text-3xl font-bold mt-1 text-foreground">
                        {value}
                    </h2>
                </div>
            </div>
        </div>
    );
}