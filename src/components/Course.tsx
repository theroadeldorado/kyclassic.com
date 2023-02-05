import React from 'react';
import Image from 'next/image';

type Props = {
  image: string;
  position: string;
  title: string;
  intro: string;
  par: string;
  yards: string;
  slope: string;
  rating: string;
};

export default function Course({ image, position, title, intro, par, yards, slope, rating }: Props) {
  return (
    <div className="bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`h-56 bg-gray-900 sm:h-72 lg:absolute lg:h-full lg:w-1/2 ${position === 'left' ? 'lg:left-0' : 'lg:right-0'}`}>
          <Image className="h-full w-full object-cover" src={image} alt={title} width={800} height={600} />
        </div>
        <div className="relative mx-auto max-w-7xl py-8 px-6 sm:py-12 lg:py-16">
          <div className={`lg:w-1/2 ${position === 'left' ? 'mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:max-w-none lg:pl-10' : 'lg:pr-10'}`}>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
            <p className="mt-6 text-lg text-gray-500">{intro}</p>
            <div className="mt-8 overflow-hidden">
              <dl className="-mx-8 -mt-8 flex flex-wrap">
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base font-medium text-gray-500">Par</dt>
                  <dd className="order-1 text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">{par}</dd>
                </div>
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base font-medium text-gray-500">Yards</dt>
                  <dd className="order-1 text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">{yards}</dd>
                </div>
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base font-medium text-gray-500">Slope</dt>
                  <dd className="order-1 text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">{slope}</dd>
                </div>
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 text-base font-medium text-gray-500">Rating</dt>
                  <dd className="order-1 text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">{rating}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
