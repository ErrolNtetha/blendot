'use client'

// import Link from 'next/link';
import React from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';

export const Hero = () => {
    const form = useForm();
    
    return (
        <section className='flex justify-center items-center h-screen text-background relative'>
            <span className='w-full'>
                <span className='max-w-lg'>
                    <h1 className='max-w-lg font-extrabold text-3xl md:text-5xl'> Find people to swap seeds with around you </h1>
                    <p className='max-w-lg mt-2'> Got seeds more than you need? Find gardeners near your area that you can swap your seeds or veges with. </p>
                </span>
                <section className='flex items-center gap-4 mt-4'>
                    <Form {...form}>
                        <form className='flex flex-col'>
                            <FormControl>
                                <FormField
                                    control={form.control}
                                    name='email'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel> Email </FormLabel>
                                            <input {...field} placeholder='Email address' className='w-full' />
                                        </FormItem>
                                    )}
                                />
                            </FormControl>
                            <Button className='w-full'>
                                Subscribe
                            </Button>
                        </form>
                    </Form>
                </section>
                <picture className='absolute bottom-0 translate-y-[50%] shadow-lg w-80 h-80 object-fill rounded-md'>
                    {/* @ts-ignore */}
                    <img alt='tomatoes' src='/assets/tomatoes.jpg' className='object-cover' />
                </picture>
            </span>
        </section>
    );
}
