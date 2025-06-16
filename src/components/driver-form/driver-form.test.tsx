import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DriverForm } from './';

describe('DriverForm', () => {
    it('valida e envia o formulário corretamente', async () => {
        const user = userEvent.setup();
        render(<DriverForm />);

        // Preenche os campos corretamente
        await user.type(screen.getByLabelText(/motorista/i), 'John Doe');
        await user.type(screen.getByLabelText(/cpf/i), '12345678901');
        await user.type(screen.getByLabelText(/placa/i), 'ABC1234');
        await user.type(screen.getByLabelText(/horário/i), '08:30');

        await user.click(screen.getByRole('button', { name: /enviar/i }));

        expect(screen.queryByTestId('form-field-error')).not.toBeInTheDocument();
    });

    it('mostra erros de validação quando campos estão vazios', async () => {
        const user = userEvent.setup();
        render(<DriverForm />);

        await user.click(screen.getByRole('button', { name: /Enviar/i }));

        expect(await screen.findAllByTestId('form-field-error')).toHaveLength(4);
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
