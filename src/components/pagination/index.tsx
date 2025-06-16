'use client';

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { useState } from 'react';

type PaginationProps<T = unknown> = {
    totalItems?: number;
    itemsPerPage?: number;
    currentPage?: number;
    onPageChange?: (page: number) => void;
    className?: string;
    data?: T[];
};

export function PaginationComponent({
    totalItems = 0,
    itemsPerPage = 0,
    className,
    onPageChange,
}: PaginationProps) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    function handleClick(pageNumber: number): void {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
            onPageChange?.(pageNumber);
        }
    }

    return (
        <Pagination className={`flex items-center justify-between px-2 ${className}`}>
            <div className='text-sm text-stone-500 mr-4'>
                Página {currentPage} de {totalPages}
            </div>

            <PaginationContent>
                <PaginationItem className='cursor-pointer' onClick={() => handleClick(currentPage - 1)}>
                    <PaginationPrevious href='#' />
                </PaginationItem>

                {[...Array(totalPages)].map((_, i) => (
                    <PaginationItem className='cursor-pointer' key={i}>
                        <PaginationLink isActive={currentPage === i + 1} onClick={() => handleClick(i + 1)}>
                            {i + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                <PaginationItem className='cursor-pointer' onClick={() => handleClick(currentPage + 1)}>
                    <PaginationNext href='#' />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
