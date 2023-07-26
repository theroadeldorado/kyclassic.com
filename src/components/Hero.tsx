/* This Hero requires Tailwind CSS v3.0+ */
'use client';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Logo from './Logo';

const navigation = [
  { name: 'Teams', href: '#teams' },
  { name: 'Courses', href: '#courses' },
  { name: 'Rules', href: '#rules' },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black isolate">
      <Image src="/hero2.jpg" alt="" fill className="absolute inset-0 object-cover w-full h-full -z-10 opacity-90" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black opacity-70 lg:opacity-50 to-transparent" aria-hidden="true"></div>
      <div className="px-6 lg:px-8">
        <nav className="flex items-center justify-between pt-6" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Kentucky Classic</span>
              <div className="w-20 h-20">
                <Logo />
              </div>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400" onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-0 z-10 px-6 py-6 overflow-y-auto bg-gray-900 lg:hidden">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">The Kentucky Classic</span>
                <div className="w-20 h-20">
                  <Logo />
                </div>
              </a>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-400" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="py-6 space-y-2">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:bg-gray-400/10">
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a href="#" className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-white hover:bg-gray-400/10">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        <div className="grow">
          <div className="max-w-2xl pt-20 pb-40 md:py-32 lg:pt-56 ">
            <div className="text-left">
              <h1 className="text-4xl text-6xl font-bold tracking-tight text-white">The Kentucky Classic</h1>
              <p className="mt-6 text-lg leading-8 text-white">
                The battle lines have been drawn in Kentucky this summer, as the 12-man Ryder Cup golf tournament returns with a vengeance. The Americans, reigning champions for the last two years,
                will face off against a determined Internationals team. With tensions high and the pressure to win at an all-time high, this years tournament is set to be an explosive showdown. The
                Internationals, fueled by their burning desire for victory, are poised to end the Americans reign and claim glory for themselves. Who will come out on top in this dramatic showdown of
                skill and sportsmanship? The stage is set, the players are ready, and the tournament is about to begin.
              </p>
              <div className="flex items-center justify-start mt-10 gap-x-6">
                <a
                  href="#teams"
                  className="rounded-full bg-white px-5 py-1.5 text-base font-bold leading-7 text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200"
                >
                  Meet the teams
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full shadow-lg bottom-8" aria-hidden="true">
        <div className="flex justify-center gap-4">
          <div className="flex items-center text-white bg-usa-primary">
            <div className="w-[80px]">
              <Image src="/flag-usa.svg" alt="" width={200} height={100} className="w-20 h-auto" />
            </div>
            <p className="px-4 text-2xl font-bold">2</p>
          </div>
          <div className="flex items-center text-white bg-int-primary">
            <div className="w-[90px] flex justify-center bg-black">
              <Image src="/flag-int.svg" alt="" width={200} height={100} className="w-20 h-auto" />
            </div>
            <p className="px-4 text-2xl font-bold text-black">1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
