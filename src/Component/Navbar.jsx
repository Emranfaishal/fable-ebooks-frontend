"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiHome } from "react-icons/bi";
import { TbCategory, TbBrandBooking } from "react-icons/tb";
import { CiSquarePlus } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import { FaBriefcaseMedical } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";

import {
    Avatar,
    Button,
    Dropdown,
    Label,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const NavbarPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const { data: session, isPending } = authClient.useSession();

    if (isPending) {
        return null;
    }

    const user = session?.user;
   
    const logout = async () => {
        await authClient.signOut();
    };

    return (
        <nav className="sticky top-0 z-50 w-full px-4 py-4">
            <div className="mx-auto max-w-7xl">

                {/* Navbar */}
                <header className="flex p-2 items-center justify-between rounded-xl border border-white/20 bg-gray-200/90 px-6 shadow-lg backdrop-blur-xl">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <GiBookshelf className="text-3xl text-sky-500" />
                        <h2 className="text-2xl font-bold">
                            <span className="text-sky-500">Book</span>
                            <span className="text-black">s</span>
                        </h2>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">

                        <ul className="flex items-center gap-8">
                            <li>
                                <Link
                                    href="/"
                                    className="flex items-center gap-1 text-sm font-medium text-black transition-colors hover:text-sky-600"
                                >
                                    <BiHome />
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/BrowseEbooks"
                                    className="flex items-center gap-1 text-sm font-medium text-black transition-colors hover:text-sky-600"
                                >
                                    <TbCategory />
                                    BrowseEbooks
                                </Link>
                            </li>

                            {/* {user && (
                                <li>
                                    <Link
                                        href="/Dashboard"
                                        className="flex items-center gap-1 text-sm font-medium text-black transition-colors hover:text-sky-600"
                                    >
                                        <TbBrandBooking />
                                        Dashboard
                                    </Link>
                                </li>
                            )} */}
                        </ul>

                        <div className="h-6 w-px bg-black/10" />

                        {/* Auth Section */}
                        <div className="flex items-center gap-4">
                            {user ? (
                                <Dropdown>
                                    <Button
                                        className="bg-white/60 border border-black/10 backdrop-blur-md rounded-xl px-4 py-2 hover:bg-white/80"
                                    >
                                        <Avatar size="sm">
                                            <Avatar.Image
                                                src={user?.image}
                                                alt={user?.name}
                                                referrerPolicy="no-referrer"
                                            />
                                            <Avatar.Fallback>
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
                                                    {user?.name?.[0]}
                                                </div>
                                            </Avatar.Fallback>
                                        </Avatar>

                                        <span className="text-black font-medium">
                                            {user?.name}
                                        </span>

                                        <RiArrowDropDownLine className="text-2xl text-black" />
                                    </Button>

                                    <Dropdown.Popover className="rounded-xl border border-black/10 bg-white shadow-xl">
                                        <Dropdown.Menu>

                                            <Dropdown.Item textValue="user">
                                                <Label>
                                                    <p className="text-gray-500 text-sm">
                                                        Signed in as
                                                    </p>
                                                    <p>{user?.email}</p>
                                                </Label>
                                            </Dropdown.Item>

                                            <Dropdown.Item textValue="Add Facility">
                                                <Link
                                                    href="/Dashboard"
                                                    className="flex items-center gap-2 w-full"
                                                >
                                                    <CiSquarePlus />
                                                    Dashboard
                                                </Link>
                                            </Dropdown.Item>

                                            <Dropdown.Item textValue="Profile">
                                                <Link
                                                    href="/profile"
                                                    className="flex items-center gap-2 w-full"
                                                >
                                                    <CgProfile />
                                                    Profile
                                                </Link>
                                            </Dropdown.Item>

                                          

                                            <Dropdown.Item
                                                onClick={logout}
                                                variant="danger"
                                                textValue="Logout"
                                            >
                                                <div className="flex items-center gap-2 text-red-500">
                                                    <MdLogout />
                                                    Logout
                                                </div>
                                            </Dropdown.Item>

                                        </Dropdown.Menu>
                                    </Dropdown.Popover>
                                </Dropdown>
                            ) : (
                                <>
                                    <Link
                                        href="/signIn"
                                        className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-500"
                                    >
                                        Sign In
                                    </Link>

                                    <Link
                                        href="/signUp"
                                        className="rounded-xl bg-sky-500 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-sky-300"
                                    >
                                        Get Started
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden"
                    >
                        {menuOpen ? (
                            <HiX className="h-6 w-6 text-black" />
                        ) : (
                            <HiMenuAlt3 className="h-6 w-6 text-black" />
                        )}
                    </button>
                </header>

                {/* Mobile Menu */}
                {/* {menuOpen && (
                    <div className="mt-3 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/95 backdrop-blur-xl md:hidden">
                        <div className="flex flex-col gap-4 p-6">

                            <Link
                                href="/"
                                onClick={() => setMenuOpen(false)}
                                className="text-zinc-300 transition-colors hover:text-white"
                            >
                                Home
                            </Link>

                            <Link
                                href="/allFacilities"
                                onClick={() => setMenuOpen(false)}
                                className="text-zinc-300 transition-colors hover:text-white"
                            >
                                All Facilities
                            </Link>

                            {user ? (
                                <>
                                    <Link
                                        href="/myBookings"
                                        onClick={() => setMenuOpen(false)}
                                        className="text-zinc-300 transition-colors hover:text-white"
                                    >
                                        My Bookings
                                    </Link>

                                    <Link
                                        href="/addFacility"
                                        onClick={() => setMenuOpen(false)}
                                        className="text-zinc-300 transition-colors hover:text-white"
                                    >
                                        Add Facility
                                    </Link>

                                    <Link
                                        href="/profile"
                                        onClick={() => setMenuOpen(false)}
                                        className="text-zinc-300 transition-colors hover:text-white"
                                    >
                                        Profile
                                    </Link>

                                    <Link
                                        href="/ManageMyFacilities"
                                        onClick={() => setMenuOpen(false)}
                                        className="text-zinc-300 transition-colors hover:text-white"
                                    >
                                        Manage My Facilities
                                    </Link>

                                    <button
                                        onClick={() => {
                                            logout();
                                            setMenuOpen(false);
                                        }}
                                        className="text-left text-red-400"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <div className="flex flex-col gap-3 pt-3 border-t border-white/10">
                                    <Link
                                        href="/signin"
                                        className="text-indigo-400"
                                    >
                                        Sign In
                                    </Link>

                                    <Link
                                        href="/signUp"
                                        className="flex items-center justify-center rounded-xl bg-sky-500 px-4 py-3 font-medium text-white hover:bg-sky-500"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                )} */}
            </div>
        </nav>
    );
};

export default NavbarPage;
