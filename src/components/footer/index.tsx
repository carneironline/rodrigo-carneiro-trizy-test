import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className=''>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex md:flex-row justify-between gap-8 py-8'>
                    Logo
                    <nav className='flex flex-col md:flex-row items-center gap-4 text-sm'>
                        <Link className='' href='/termos-de-uso'>
                            Termos de uso
                        </Link>
                        <Link className='' href='/politica-de-privacidade'>
                            Política de privacidade
                        </Link>
                        <Link className='' href='/feedback'>
                            Feedback
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
