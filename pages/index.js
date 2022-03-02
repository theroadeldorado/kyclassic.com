import Head from 'next/head';
import Image from 'next/image';
import PersonCard from '../components/PersonCard';
import TheRules from '../components/TheRules';
import TheSchedule from '../components/TheSchedule';
import { useState } from 'react';

const dataTeams = [
  {
    name: 'The Europeans',
    primaryColor: 'eutpc',
    secondaryColor: 'eutsc',
    tertiaryColor: 'euttc',
    logo: '🇪🇺',
    wins: 0,
    members: [
      {
        firstName: 'Nick',
        lastName: 'Young',
        captain: true,
        image: 'nick.jpg',
        status: 'active',
        participation: ['2021'],
      },
      {
        firstName: 'Bryan',
        lastName: 'Gregory',
        captain: false,
        image: 'bryan.jpg',
        status: 'active',
        participation: ['2021'],
      },
      {
        firstName: 'Darin',
        lastName: 'Jennings',
        captain: false,
        image: 'darin.jpg',
        status: 'active',
        participation: ['2021'],
      },
      {
        firstName: 'Jon',
        lastName: 'Sias',
        captain: false,
        image: 'jon.jpg',
        status: 'active',
        participation: ['2021'],
      },
      {
        firstName: 'Joe',
        lastName: 'Voros',
        captain: false,
        image: 'joe.jpg',
        status: 'active',
        participation: ['2021'],
      },
      {
        firstName: 'John',
        lastName: 'Young',
        captain: false,
        image: 'john.jpg',
        status: 'active',
        participation: ['2021'],
      },
    ],
  },
  {
    name: 'The Americans',
    primaryColor: 'ustpc',
    secondaryColor: 'ustsc',
    tertiaryColor: 'usttc',
    logo: '🇺🇸',
    wins: 1,
    members: [
      {
        firstName: 'Jeff',
        lastName: 'Hansen',
        captain: true,
        image: 'jeff.jpg',
        status: 'active',
        participation: ['2021'],
      },
      {
        firstName: 'Tim',
        lastName: 'Bates',
        captain: false,
        image: 'tim.jpg',
        status: 'active',
        participation: ['2021'],
      },
      {
        firstName: 'Mark',
        lastName: 'Gauer',
        captain: false,
        image: 'mark.jpg',
        status: 'active',
        participation: ['2021'],
      },
      {
        firstName: 'Garrett',
        lastName: 'Ormsb',
        captain: false,
        image: 'garrett.jpg',
        status: 'active',
        participation: ['2021'],
      },
      {
        firstName: 'Nate',
        lastName: 'Stair',
        captain: false,
        image: 'nate.jpg',
        status: 'active',
        participation: ['2021'],
      },
      {
        firstName: 'Matt',
        lastName: 'Young',
        captain: false,
        image: 'matt.jpg',
        status: 'active',
        participation: ['2021'],
      },
    ],
  },
];

const dataCourses = [
  {
    name: 'Oak Shadows',
    day: 'Thursday Practice',
    teeTime: '<strong>Tee Times:</strong> 1:00, 1:08 and 1:16',
    image: 'oak-shadows.jpg',
    par: '72',
    length: '6384',
    rating: '70.2',
    slope: '125',
  },
  {
    name: 'Stonecrest',
    day: 'Friday Practice',
    teeTime: '<strong>Tee Times:</strong> 12:00pm, 12:10pm and 12:20pm',
    image: 'stonecrest.jpg',
    par: '72',
    length: '6469',
    rating: '70.5',
    slope: '129',
  },
  {
    name: 'Hidden Cove Golf Course',
    day: 'Day One',
    teeTime: '<strong>Tee Times:</strong> 9:00am and 1:30pm',
    image: 'yatesville.jpg',
    par: '72',
    length: '6469',
    rating: '70.5',
    slope: '129',
    eventOne: 'Two Man Alternate Shot - 1 point each',
    eventTwo: 'Two Man Best Ball - 1 point each',
  },
  {
    name: 'Eagle Ridge',
    day: 'Final Day',
    teeTime: '<strong>Tee Times:</strong> 8:30am and 1:15pm',
    image: 'eagles-ridge.jpg',
    par: '71',
    length: '6177',
    rating: '68.5',
    slope: '124',
    eventOne: 'Two Man Scramble - 1 point each',
    eventTwo: 'Singles - 1.5 points each',
  },
];

const Home = () => {
  const [teams] = useState(dataTeams);
  const [courses] = useState(dataCourses);
  return (
    <div>
      <Head>
        <title>KY Classic</title>
        <meta name="description" content="The Kentucky Classic Golf Tournament" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="relative w-full py-28">
          <Image src="/images/bg.jpg" alt="Picture of the author" layout="fill" priority />
          <div className="absolute inset-0 w-full h-full bg-gray-900 opacity-30"></div>
          <div className="absolute inset-0 w-full h-64 opacity-40 bg-gradient-to-b from-black to-transparent"></div>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br to-eutsc via-white from-ustsc mix-blend-multiply opacity-80"></div>

          <div className="relative z-10 ">
            <div className="container">
              <div className="flex flex-col w-full h-full max-w-[580px] items-start">
                <p className="inline-block w-auto px-3 pt-1 pb-[3px] mb-8 text-xs font-bold tracking-wider text-white uppercase bg-gray-900 rounded-full">The First Annual</p>
                <h1 className="mb-8 font-thin tracking-tight text-left text-white text-7xl">Kentucky Classic</h1>
                <p className="pr-12 text-xl leading-8 text-white">
                  The Kentucky Classic is played every year in Kentucky between two 6-member teams from Akron, {teams[0].name} and {teams[1].name}. It consists of four match-play sessions played over
                  two days.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex my-12 w-[500px] bottom-8 border-r-[6px] border-l-[6px] text-[30px] md:text-[60px] border-l-eutpc border-r-ustpc">
                  {teams.map((team) => {
                    return (
                      <div key={team.name} className={`w-1/2 py-6 bg-${team.secondaryColor} text-center text-white`}>
                        {team.logo} {team.wins}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid w-full grid-cols-2">
            {teams.map((team) => {
              return (
                <div key={team.name} className={`grid grid-cols-1 py-12 md:py-20 gap-8 px-4 lg:grid-cols-2 lg:px-8 bg-${team.secondaryColor}`}>
                  <h3 className={`text-[30px] md:text-[40px] lg:col-span-2 my-4 leading-8 lg:text-[50px] uppercase font-bold text-center text-${team.primaryColor}`}>{team.name}</h3>
                  {team.members.map((person) => {
                    return (
                      <PersonCard
                        person={person}
                        primaryColor={team.primaryColor}
                        secondaryColor={team.secondaryColor}
                        tertiaryColor={team.tertiaryColor}
                        logo={team.logo}
                        key={`${person.firstName}-${person.lastName}`}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </section>
        <section>
          <TheRules />
        </section>
        <section>
          <TheSchedule courses={courses} />
        </section>
      </main>
    </div>
  );
};

export default Home;
