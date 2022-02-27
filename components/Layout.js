import TheFooter from './TheFooter';
import NavBar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <NavBar /> */}
      <div className="grow">{children}</div>
      <TheFooter />
    </div>
  );
};

export default Layout;
