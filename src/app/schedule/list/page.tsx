import { TableDrivers } from '@/components/table-drivers';
import { MOTORISTAS } from '@/mocks/motoristas';
import { paginateArray } from '@/utils/array';

export default function ScheduleListPage() {
    const page = 1;
    const itemsPerPage = 10;
    const currentItems = paginateArray(MOTORISTAS, page, itemsPerPage);
    const totalItems = MOTORISTAS.length;

    return (
        <div>
            <TableDrivers data={currentItems} totalItems={totalItems} itemsPerPage={itemsPerPage} />
        </div>
    );
}
