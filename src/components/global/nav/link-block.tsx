import { navData } from "../../../lib/data";
import Link from "next/link";
import React from "react";

interface LinkBlockProps {
    label: string;
    url: string;
}

const LinkItem = ({ label, url }: LinkBlockProps) => {
    return (
        <li>
            <Link href={url} legacyBehavior>
                <a>
                    {label}
                </a>
            </Link>
        </li>
    )
}

export default function LinkBlock() {
    return (
        <nav>
            <ul className="flex flex-wrap  !gap-6">
                {navData.map((item, index) => (
                    <LinkItem key={index} label={item.label} url={item.url} />
                ))}
            </ul>
        </nav>
    );
}