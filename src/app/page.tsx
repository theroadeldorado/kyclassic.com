import Hero from '../components/Hero';
import Team from '../components/Team';
import Course from '../components/Course';
import Logo from '../components/Logo';
import Rules from '../components/Rules';
import Image from 'next/image';

const internationals = [
  {
    name: 'John Young',
    points: 8,
    captain: false,
    image: '/people/john.jpg',
    memberSince: 2021,
  },
  {
    name: 'Nick Young',
    points: 4.25,
    captain: false,
    image: '/people/nick.jpg',
    memberSince: 2021,
  },
  {
    name: 'Jon Sias',
    points: 5.5,
    captain: true,
    image: '/people/jon.jpg',
    memberSince: 2021,
  },
  {
    name: 'Dave Duma',
    points: 0,
    captain: false,
    image: '/people/dave.jpg',
    memberSince: 2022,
  },
  {
    name: 'Dave Schaff',
    points: 0,
    captain: false,
    image: '/people/daves.jpg',
    memberSince: 2022,
  },
  {
    name: 'Darin Jennings',
    points: 4.5,
    captain: false,
    image: '/people/darin.jpg',
    memberSince: 2021,
  },
];

const americans = [
  {
    name: 'Matt Young',
    points: 6.5,
    captain: true,
    image: '/people/matt.jpg',
    memberSince: 2021,
  },
  {
    name: 'Jeff Hansen',
    points: 6.75,
    captain: false,
    image: '/people/jeff.jpg',
    memberSince: 2021,
  },
  {
    name: 'Tim Bates',
    points: 3.5,
    captain: false,
    image: '/people/tim.jpg',
    memberSince: 2021,
  },
  {
    name: 'Garrett Ormsb',
    points: 5,
    captain: false,
    image: '/people/garrett.jpg',
    memberSince: 2021,
  },
  {
    name: 'Nate Stair',
    points: 6,
    captain: false,
    image: '/people/nate.jpg',
    memberSince: 2021,
  },
  {
    name: 'Mark Gauer',
    points: 1,
    captain: false,
    image: '/people/mark.jpg',
    memberSince: 2021,
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <div id="teams">
        <Team
          team="usa"
          people={americans}
          title="The Americans"
          intro="The American golf team represents the United States. The team is proud to represent their country and strives to compete at the highest level in the tournament."
        />
        <Team
          team="int"
          people={internationals}
          title="The Internationals"
          intro="The International team, despite its name, is comprised solely of golfers from the United States. The team's name serves as a nod to the international nature of the sport and the inclusive spirit of the players."
        />
        <Course
          image="/eagles-ridge.jpg"
          position="left"
          title="Eagle Ridge"
          intro="Eagle Ridge golf course in Kentucky is a notoriously difficult golf course, renowned for its demanding holes that test even the most skilled golfers. Featuring a rugged terrain, narrow fairways lined with dense rough, and challenging greens, Eagle Ridge demands precision, accuracy, and a mastery of shot-making to score well."
          par="71"
          yards="6177"
          slope="124"
          rating="68.5"
        />
        <Course
          image="/yatesville.jpg"
          position="right"
          title="Hidden Cove"
          intro="Hidden Cove golf course in Yatesville, Kentucky is a serene golf course set among rolling hills and lush greenery. It offers a challenging layout with well-bunkered greens and a variety of hole designs that will test golfers of all skill levels."
          par="72"
          yards="6469"
          slope="129"
          rating="70.5"
        />
        <Rules />

        <div className="bg-black py-12">
          <div className="w-36 h-auto mx-auto">
            <Image src="/gold.png" alt="" width={200} height={200} className="w-[150px] h-auto" />
            <p className="text-white text-center text-sm mt-2"> 2021 - {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
