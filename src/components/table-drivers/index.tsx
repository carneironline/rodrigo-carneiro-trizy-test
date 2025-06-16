import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Motorista } from '@/mocks/motoristas';
import { PaginationComponent } from '../pagination';
import { Trash } from 'lucide-react';
import { Button } from '../ui/button';
import { useDriverStore } from '@/store/useDriver';

type TableDriversProps = {
    data: Motorista[];
    totalItems?: number;
    itemsPerPage?: number;
};

export function TableDrivers({ data, totalItems = 0, itemsPerPage = 0 }: TableDriversProps) {
    const { removeDriver } = useDriverStore();

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
                    {data.map((driver) => (
                        <TableRow key={driver.id}>
                            <TableCell>{driver.motorista}</TableCell>
                            <TableCell>{driver.cpf}</TableCell>
                            <TableCell>{driver.placa}</TableCell>
                            <TableCell>{driver.horario}</TableCell>
                            <TableCell>
                                <Button
                                    variant='ghost'
                                    size='icon'
                                    className='cursor-pointer'
                                    onClick={() => removeDriver(driver.id)}
                                >
                                    <Trash className='h-4' />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <PaginationComponent
                className='pt-10'
                itemsPerPage={itemsPerPage}
                totalItems={totalItems}
                data={data}
            />
        </>
    );
}
