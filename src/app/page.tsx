import Hero from '../components/Hero';
import Team from '../components/Team';

const americans = [
  {
    name: 'Leslie Alexander',
    wins: 1,
    caption: true,
    image: '/images/leslie-alexander.jpg',
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <Team people={americans} />
    </main>
  );
}
