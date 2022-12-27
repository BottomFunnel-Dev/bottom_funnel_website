import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { ChnageNavbarColor } from '../../Redux/Navbar/NavbarAction';
import { SalesHomeBanner } from './SalesHomeBanner'

export const SalesHome = () => {

    
  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);
  return (
    <div>
    <SalesHomeBanner />
    
    
    </div>
  )
}
