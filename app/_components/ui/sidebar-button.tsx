"use client"

import { LayoutGridIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./button";

interface SidebarButtonProps{
    children: React.ReactNode;
    href: string;
}

const SidebarButton = ({href, children}: SidebarButtonProps) => {
    const pathname = usePathname();

    return (
        <Button variant={pathname == `${href}` ? "secondary" : "ghost"} 
        className="justify-start gap-2" 
        asChild>
                    <Link href={href}>
                        {children}
                    </Link>
                </Button>
    );
}


export default SidebarButton