import { ActiveLink } from '../active-link';
import { ROUTES } from '@/routes/constants';

export function Header() {
    return (
        <header className='w-full text-stone-100 bg-stone-900 backdrop-blur supports-[backdrop-filter]:bg-stone-900'>
            <div className='mx-auto max-w-7xl flex flex-row h-16 items-center justify-between px-4 sm:px-6 lg:px-8'>
                <div>Logo</div>
                <nav className='flex items-center gap-6'>
                    <ActiveLink href={ROUTES.HOME}>Início</ActiveLink>
                    <ActiveLink href={ROUTES.SCHEDULE_LIST}>Agendamentos</ActiveLink>
                    <ActiveLink href={ROUTES.SCHEDULE_NEW}>Novo agendamento</ActiveLink>
                </nav>
            </div>
        </header>
    );
}
