import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import CartSection from '../components/CartSection';

const MyCart = () => {
  return (
   <Container className="flex-grow">
    <BreadCrumb currentPageTitle="My Cart"/>
    <CartSection/>
   </Container>
  );
}

export default MyCart;
