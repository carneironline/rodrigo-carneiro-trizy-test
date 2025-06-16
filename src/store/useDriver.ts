import { create } from 'zustand';
import { Motorista, MOTORISTAS } from '@/mocks/motoristas';
import { v4 as uuidv4 } from 'uuid';

interface DriverState {
    drivers: Motorista[];
    totalDrivers: number;
    addDriver: (driver: Motorista) => void;
    removeDriver: (id: string) => void;
}

export const useDriverStore = create<DriverState>((set) => ({
    drivers: MOTORISTAS.reverse(),
    totalDrivers: MOTORISTAS.length,
    addDriver: (driver: Motorista) =>
        set((state) => ({
            drivers: [{ id: uuidv4(), ...driver }, ...state.drivers],
            totalDrivers: state.drivers.length + 1,
        })),
    removeDriver: (id: string) =>
        set((state) => ({
            drivers: state.drivers.filter((driver) => driver.id !== id),
            totalDrivers: state.drivers.length - 1,
        })),
}));
