import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Motorista } from '@/mocks/motoristas';
import { Trash } from 'lucide-react';
import { useDriverStore } from '@/store/useDriver';

type DialogDriverProps = {
    driver: Motorista;
};

export function DialogDriverTrash({ driver }: DialogDriverProps) {
    const { removeDriver } = useDriverStore();

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant='ghost' size='icon' className='cursor-pointer'>
                        <Trash className='h-4' />
                    </Button>
                </DialogTrigger>
                <DialogContent className='sm:max-w-[425px]'>
                    <DialogHeader>
                        <DialogTitle>Remover motorista?</DialogTitle>
                        <DialogDescription>
                            Está ação removerá <strong>{driver.motorista}</strong> e não poderá ser desfeita.
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant='outline'>Cancelar</Button>
                        </DialogClose>
                        <Button type='button' onClick={() => driver.id && removeDriver(driver.id)}>
                            Remover
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    );
}
