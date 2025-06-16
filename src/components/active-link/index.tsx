'use client';

import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

type ActiveLinkProps = {
    children: React.ReactNode;
} & LinkProps;

export function ActiveLink({ children, href, ...rest }: ActiveLinkProps) {
    const pathname = usePathname();
    const isCurrentPath = pathname === href || pathname === rest.as;

    return (
        <Link href={href} className={cn(' transition-colors ', isCurrentPath ? 'text-amber-600' : '')}>
            {children}
        </Link>
    );
}
