import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import React from 'react';

export const HomePage = () => {
    return (
        <section className='container'>
            <Header />
            <Hero />
        </section>
    );
}
