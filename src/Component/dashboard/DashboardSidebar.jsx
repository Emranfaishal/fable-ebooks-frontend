import { LayoutSideContentLeft, Bell, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";

export function DashboardSidebar() {
    const navItems = [
        { icon: House, href: '/dashboard/writerDashboard', label: "Home" },
        { icon: Magnifier, href: '/dashboard/books', label: "Books" },
        { icon: Bell, href: '/dashboard/writerDashboard/ebook/addBooks', label: "Create a Book" },
        { icon: Envelope, href: '/dashboard/writerDashboard/ebook', label: "Messages" },
        { icon: Person, href: '/dashboard/profile', label: "Profile" },
        { icon: Gear, href: '/dashboard/settings', label: "Settings" },
    ];

    const navContent = (
        <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
                <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                >
                    <item.icon className="size-5 text-muted" />
                    {item.label}
                </Link>
            ))}
        </nav>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
                {navContent}
            </aside>

            {/* Mobile Drawer Trigger & Content */}
            <Drawer>
                <Button className="lg:hidden" variant="secondary">
                    <LayoutSideContentLeft />
                    SideBar
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                {navContent}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>
    );
}