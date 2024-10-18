import Link from 'next/link';
import React from 'react';

export const Hero = () => {
    return (
        <section className='flex justify-center items-center h-screen bg-gradient-to-r'>
            <span className='w-full'>
                <span className='max-w-lg'>
                    <h1 className='max-w-lg font-extrabold text-3xl md:text-5xl'> Exchange seeds and veges with fellow gardeners. </h1>
                    <p className='max-w-lg mt-2'> Got seeds or veges more than you need? Find gardeners near that you to swap your seeds or veges with. </p>
                </span>
                <section className='flex items-center gap-4 mt-4'>
                    <span className='flex items-center gap-3 border border-gray-400 rounded-md md:inline-block py-2 hover:cursor-pointer px-5 hover:bg-gray-100'>
                        <Link href='/register' className='font-bold'> Get Started </Link>
                    </span>
                    <Link href='/login' className='font-bold'> Login </Link>
                </section>
                <span />
            </span>
        </section>
    );
}
