'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod/v4';
import { Button } from '../ui/button';
import { useDriverStore } from '@/store/useDriver';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/routes/constants';

const schema = z.object({
    motorista: z.string().nonempty('Nome do motorista é obrigatório'),
    cpf: z.string().regex(/^\d{11}$/, 'CPF deve conter 11 dígitos numéricos'),
    placa: z.string().regex(/^[A-Z]{3}\d{4}$/, 'Placa deve estar no formato ABC1234'),
    horario: z.string().nonempty('Horário é obrigatório'),
});

type FormData = z.infer<typeof schema>;

export function DriverForm() {
    const router = useRouter();
    const { addDriver } = useDriverStore();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    function onSubmit(data: FormData) {
        addDriver(data);
        router.push(ROUTES.SCHEDULE_LIST);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='max-w-md mx-auto p-4 space-y-4 rounded shadow'>
            <div>
                <label htmlFor='motorista'>Motorista</label>
                <input {...register('motorista')} id='motorista' className='w-full p-2 border rounded' />
                {errors.motorista && (
                    <p className='text-red-500' data-testid='form-field-error'>
                        {errors.motorista.message}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor='cpf'>CPF</label>
                <input {...register('cpf')} id='cpf' className='w-full p-2 border rounded' />
                {errors.cpf && (
                    <p className='text-red-500' data-testid='form-field-error'>
                        {errors.cpf.message}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor='placa'>Placa</label>
                <input
                    {...register('placa')}
                    id='placa'
                    className='w-full p-2 border rounded'
                    placeholder='ABC1234'
                />
                {errors.placa && (
                    <p className='text-red-500' data-testid='form-field-error'>
                        {errors.placa.message}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor='horario'>Horário</label>
                <input
                    {...register('horario')}
                    id='horario'
                    type='time'
                    className='w-full p-2 border rounded'
                />
                {errors.horario && (
                    <p className='text-red-500' data-testid='form-field-error'>
                        {errors.horario.message}
                    </p>
                )}
            </div>

            <Button type='submit' className='mt-6'>
                Enviar
            </Button>
        </form>
    );
}
