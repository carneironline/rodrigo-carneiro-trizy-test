import { ROUTES } from '@/routes/constants';
import { redirect } from 'next/navigation';

export default function Page() {
    redirect(ROUTES.HOME);
}
