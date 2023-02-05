/* This Hero requires Tailwind CSS v3.0+ */
'use client';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Logo from './Logo';

const navigation = [
  { name: 'Teams', href: '#teams' },
  { name: 'Match', href: '#match' },
  { name: 'Rules', href: '#rules' },
  { name: 'Past Results', href: '#results' },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative isolate overflow-hidden bg-black min-h-screen">
      <Image src="/hero2.jpg" alt="" fill className="absolute inset-0 -z-10 h-full w-full object-cover opacity-90" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black opacity-50 to-transparent" aria-hidden="true"></div>
      <div className="px-6 lg:px-8">
        <nav className="flex items-center justify-between pt-6" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Kentucky Classic</span>
              <div className="h-20 w-20">
                <Logo />
              </div>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400" onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
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
          <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-gray-900 px-6 py-6 lg:hidden">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">The Kentucky Classic</span>
                <div className="h-20 w-20">
                  <Logo />
                </div>
              </a>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-400" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10">
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
          <div className="max-w-2xl py-32 pt-48 lg:pt-56 pb-10 ">
            <div className="text-left">
              <h1 className="text-4xl font-bold tracking-tight text-white text-6xl">The Kentucky Classic</h1>
              <p className="mt-6 text-lg leading-8 text-white">
                The battle lines have been drawn in Kentucky this summer, as the 12-man Ryder Cup golf tournament returns with a vengeance. The Americans, reigning champions for the last two years,
                will face off against a determined Internationals team. With tensions high and the pressure to win at an all-time high, this year's tournament is set to be an explosive showdown. The
                Internationals, fueled by their burning desire for victory, are poised to end the Americans' reign and claim glory for themselves. Who will come out on top in this dramatic showdown of
                skill and sportsmanship? The stage is set, the players are ready, and the tournament is about to begin.
              </p>
              <div className="mt-10 flex items-center justify-start gap-x-6">
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
      <div className="absolute bottom-8 shadow-lg w-full" aria-hidden="true">
        <div className="flex justify-center gap-4">
          <div className="bg-usa-primary text-white flex items-center">
            <div className="w-[80px]">
              <Image src="/flag-usa.svg" alt="" width={200} height={100} className="w-20 h-auto" />
            </div>
            <p className="px-4 font-bold text-2xl">2</p>
          </div>
          <div className="bg-int-primary text-white flex items-center">
            <div className="w-[90px] flex justify-center bg-black">
              <Image src="/flag-int.svg" alt="" width={200} height={100} className="w-20 h-auto" />
            </div>
            <p className="px-4 font-bold text-black text-2xl">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
