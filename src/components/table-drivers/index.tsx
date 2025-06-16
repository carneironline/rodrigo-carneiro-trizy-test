import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PaginationComponent } from '../pagination';
import { DialogDriverTrash } from '../dialog/dialog-driver-trash';
import { useDriverStore } from '@/store/useDriver';
import { paginateArray } from '@/utils/array';
import { useState } from 'react';

export function TableDrivers() {
    const { drivers, totalDrivers } = useDriverStore();
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;
    const currentPageItems = paginateArray(drivers, page, itemsPerPage);

    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Motorista</TableHead>
                        <TableHead>Cpf</TableHead>
                        <TableHead>Placa</TableHead>
                        <TableHead>Horário</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {currentPageItems.map((driver) => (
                        <TableRow key={driver.id}>
                            <TableCell>{driver.motorista}</TableCell>
                            <TableCell>{driver.cpf}</TableCell>
                            <TableCell>{driver.placa}</TableCell>
                            <TableCell>{driver.horario}</TableCell>
                            <TableCell>
                                <DialogDriverTrash driver={driver} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <PaginationComponent
                className='pt-10'
                itemsPerPage={itemsPerPage}
                totalItems={totalDrivers}
                data={drivers}
                onPageChange={(newPage) => setPage(newPage)}
            />
        </>
    );
}
