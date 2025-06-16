import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './vitest.setup.ts',
        include: ['src/**/*.test.tsx'],
        alias: {
            '@': path.resolve(__dirname, './src'),
        },

        coverage: {
            reporter: ['text', 'html', 'json-summary'], // você pode trocar/combinar
            reportsDirectory: './coverage',
            include: ['src/**/*.{ts,tsx}'],
            exclude: [
                '**/*.test.*',
                '**/__tests__/**',
                'src/tests/**',
                'src/mocks/**',
                'src/**/page.*',
                'src/**/layout.*',
                'src/app/not-found.*',
            ],
        },
    },
});
