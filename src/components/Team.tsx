import { PeopleT } from '@/types';
import Image from 'next/image';

type Props = {
  people: PeopleT[];
  title?: string;
  intro?: string;
  team?: string;
};

export default function Team({ people, title, intro, team }: Props) {
  // filter people by captain then by wins
  const sortedPeople = people.sort((a, b) => {
    if (a.captain && !b.captain) {
      return -1;
    }
    if (!a.captain && b.captain) {
      return 1;
    }
    if (a.points > b.points) {
      return -1;
    }
    if (a.points < b.points) {
      return 1;
    }
    return 0;
  });

  return (
    <div className={`bg-${team}-secondary`}>
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4 text-center lg:text-left">
            <Image src={`flag-${team}.svg`} className="mx-auto" alt="" width={400} height={300} />
            <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl">{title}</h2>
            <p className="text-xl font-light text-gray-100">{intro}</p>
          </div>
          <div className="lg:col-span-2">
            <ul role="list" className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
              {sortedPeople.map((person) => (
                <li key={person.name}>
                  <div className={`flex items-center space-x-4 lg:space-x-6 overflow-clip rounded-3xl p-2 relative bg-white/10`}>
                    <div className="h-40 w-40 rounded-2xl overflow-clip relative z-[1]">
                      <Image className="object-cover w-full h-full" src={person.image} alt="" width={200} height={200} />
                    </div>
                    <div className="space-y-1 text-lg font-medium leading-6 relative z-[1]">
                      <h3 className="text-white text-xl font-bold mb-5 inline-flex gap-2 items-center justify-start">
                        {person.captain && (
                          <span className={`text-${team}-primary`}>
                            {' '}
                            <svg viewBox="0 0 576 512" className="w-6 h-6" fill="currentColor">
                              <path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z" />
                            </svg>
                          </span>
                        )}
                        {person.name}
                      </h3>
                      <p className={`text-${team}-primary font-bold`}>
                        <span className="text-white font-light">Since:</span> {person.memberSince}
                      </p>
                      <p className={`text-${team}-primary font-bold`}>
                        <span className="text-white font-light">Points:</span> {person.points}
                      </p>
                    </div>
                    <div className="absolute inset-0 opacity-20 translate-x-1/3">
                      <Image src={`flag-${team}-logo.svg`} alt="" width={600} height={600} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
