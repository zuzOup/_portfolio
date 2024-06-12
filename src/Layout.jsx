import { PropTypes } from "prop-types";

import Nav from "./Nav";
import MainContent from "./MainContent";
import Footer from "./Footer";

function Layout({ acc }) {
  return (
    <>
      <Nav acc={acc} />
      <MainContent acc={acc} />
      <Footer />
    </>
  );
}

Layout.propTypes = {
  acc: PropTypes.bool,
};

export default Layout;
