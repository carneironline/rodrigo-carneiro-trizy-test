'use client';

import { TableDrivers } from '@/components/table-drivers';
import { useDriverStore } from '@/store/useDriver';
import { paginateArray } from '@/utils/array';

export default function ScheduleListPage() {
    const { drivers, totalDrivers } = useDriverStore();
    const page = 1;
    const itemsPerPage = 10;
    const currentItems = paginateArray(drivers, page, itemsPerPage);

    return (
        <div>
            <TableDrivers data={currentItems} totalItems={totalDrivers} itemsPerPage={itemsPerPage} />
        </div>
    );
}
