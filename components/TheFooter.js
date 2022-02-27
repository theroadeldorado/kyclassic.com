import FireLogo from '../public/fire.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-700 bg-white body-font">
        <div className="container flex flex-col items-center px-8 py-8 sm:flex-row">
          <Link href="/">
            <a className="text-xl font-black leading-none text-gray-900 select-none logo">
              The Kentucky Classic<span className="text-indigo-600">.</span>
            </a>
          </Link>
          <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">© {new Date().getFullYear()} The Kentucky Classic</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
