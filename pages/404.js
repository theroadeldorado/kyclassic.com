import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="container py-16">
        <div className="text-center">
          <p className="text-sm font-medium tracking-wide text-[#1caf90] uppercase">404 error</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">Page not found.</h1>
          <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-6">
            <Link href="/">
              <a className="text-base font-medium text-[#1caf90] hover:text-[#6a55a3]">
                Go back home<span aria-hidden="true"> &rarr;</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
