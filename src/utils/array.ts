export function paginateArray<T>(array: T[], currentPage: number, itemsPerPage: number): T[] {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return array.slice(start, end);
}
