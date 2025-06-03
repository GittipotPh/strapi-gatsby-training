import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../components/layout.css';

import '../assets/css/main.css';
import 'normalize.css';
const Layout = (props) => {
  console.log(props);
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
