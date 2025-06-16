import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Motorista } from '@/mocks/motoristas';
import { PaginationComponent } from '../pagination';
import { Trash } from 'lucide-react';
import { Button } from '../ui/button';

type TableDriversProps = {
    data: Motorista[];
    totalItems?: number;
    itemsPerPage?: number;
};

export function TableDrivers({ data, totalItems = 0, itemsPerPage = 0 }: TableDriversProps) {
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
                    {data.map((motorista) => (
                        <TableRow key={motorista.motorista}>
                            <TableCell>{motorista.motorista}</TableCell>
                            <TableCell>{motorista.cpf}</TableCell>
                            <TableCell>{motorista.placa}</TableCell>
                            <TableCell>{motorista.horario}</TableCell>
                            <TableCell>
                                <Button variant='ghost' size='icon' className='cursor-pointer'>
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
