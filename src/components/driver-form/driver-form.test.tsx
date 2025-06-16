import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { DriverForm } from './';

// Mocks diretos
const mockPush = vi.fn();
const mockAddDriver = vi.fn();

vi.mock('next/navigation', () => ({
    useRouter: () => ({
        push: mockPush,
    }),
}));

vi.mock('@/store/useDriver', () => ({
    useDriverStore: () => ({
        addDriver: mockAddDriver,
    }),
}));

describe('DriverForm', () => {
    beforeEach(() => {
        mockPush.mockClear();
        mockAddDriver.mockClear();
    });

    it('mostra erros de validação quando campos estão vazios', async () => {
        render(<DriverForm />);

        await userEvent.click(screen.getByRole('button', { name: /enviar/i }));

        const errors = await screen.findAllByTestId('form-field-error');

        expect(errors).toHaveLength(4);
    });

    it('envia dados válidos, chama addDriver e redireciona', async () => {
        render(<DriverForm />);

        await userEvent.type(screen.getByLabelText(/motorista/i), 'John Doe');
        await userEvent.type(screen.getByLabelText(/cpf/i), '12345678901');
        await userEvent.type(screen.getByLabelText(/placa/i), 'ABC1234');
        await userEvent.type(screen.getByLabelText(/horário/i), '08:00');

        await userEvent.click(screen.getByRole('button', { name: /enviar/i }));

        expect(mockAddDriver).toHaveBeenCalledWith({
            motorista: 'John Doe',
            cpf: '12345678901',
            placa: 'ABC1234',
            horario: '08:00',
        });

        expect(mockPush).toHaveBeenCalledWith('/schedule/list'); // Ajuste conforme sua rota real
    });

    it('mostra erro para CPF inválido', async () => {
        const user = userEvent.setup();

        render(<DriverForm />);

        await user.type(screen.getByLabelText(/cpf/i), '123');
        await user.click(screen.getByRole('button', { name: /enviar/i }));

        expect(await screen.findByText(/CPF deve conter 11 dígitos/)).toBeInTheDocument();
    });

    it('mostra erro para placa inválida', async () => {
        const user = userEvent.setup();

        render(<DriverForm />);

        await user.type(screen.getByLabelText(/placa/i), 'XYZ123');
        await user.click(screen.getByRole('button', { name: /enviar/i }));

        expect(await screen.findByText(/Placa deve estar no formato/)).toBeInTheDocument();
    });
});
