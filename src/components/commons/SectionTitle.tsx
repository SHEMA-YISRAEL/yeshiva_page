'use client';

import Link from 'next/link';
import React, { FC } from 'react';

import {roboto } from '@/util/fonts';
interface SectionTitleProps {
  title: string;
  size: number;
  linkTo?: string; // ← Enlace opcional
}

const SectionTitle: FC<SectionTitleProps> = ({ title='', size=5, linkTo }) => {
  const Heading = (
    <h1 className={`${roboto.className} md:text-${size-2}xl text-slate-900 sm:text-${size}xl lg:text-${size}xl`}>
      {title}
    </h1>
  );

  return (
    <div className='z-10'>
      <div className="relative  inline-block">
        {linkTo ? (
          <Link href={linkTo} className="group transition-colors duration-200">
            {Heading}
            <div className="absolute left-0 -bottom-1 h-1.5 w-full bg-yellow-500 rounded-4xl transition-all group-hover:bg-yellow-400"></div>
          </Link>
        ) : (
          <>
            {Heading}
            <div className="absolute left-0 -bottom-1 h-1.5 w-full bg-yellow-500 rounded-4xl"></div>
          </>
        )}
      </div>
      <div className="h-0.5 bg-neutral-400 rounded-4xl" />
    </div>
  );
};

export default SectionTitle;
