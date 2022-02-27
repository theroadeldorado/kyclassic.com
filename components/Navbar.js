import Link from 'next/link';
import FireLogo from '../public/logo.svg';
// import { useRouter } from 'next/router';

const NavBar = () => {
  // const router = useRouter();
  // const navLinks = [
  //   {
  //     href: '/',
  //     text: 'Home',
  //   },
  //   {
  //     href: '/about',
  //     text: 'About',
  //   },
  //   {
  //     href: '/test',
  //     text: 'Test',
  //   },
  // ];
  return (
    <div>
      <nav className="bg-white shadow">
        <div className="container">
          <div className="flex justify-between h-20">
            <div className="flex">
              <Link href="/">
                <a className="flex items-center justify-center w-18 h-full shrink-0 text-[#1caf90]">
                  <FireLogo />
                  <span className="sr-only">Home</span>
                </a>
              </Link>
              <div className="flex ml-6 space-x-8">
                {/* {navLinks.map((link) => {
                  return (
                    <Link href={link.href} key={link.text}>
                      <a
                        className={`${
                          router.pathname === link.href ? 'border-[#1caf90]' : 'border-gray-300'
                        } inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 hover:border-[#1caf90]`}
                      >
                        {link.text}
                      </a>
                    </Link>
                  );
                })} */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
