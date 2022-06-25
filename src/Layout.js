import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderMenu from './components/HeaderMenu.js';
import ImageSlider from './components/ImageSlider.js';
import PageBreadcrumb from './components/PageBreadcrumb.js';
import Footer from './components/Footer.js';
import { Outlet, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';


function Layout(props) {
  
  const location = useLocation();
  
  return (
    <div className="app-container">
      <HeaderMenu menuItems={props.homeJson.menuItems} />
      {
        location.pathname === "/" && 
        <ImageSlider sliderImages={props.homeJson.sliderImages} />
      }
    
      <Container className="body-container">
        <PageBreadcrumb/>
        
        {/* Load Dynamic Body Component */}
        <Outlet />

      </Container>

      <Footer />
    </div>
  );
}

export default Layout;
