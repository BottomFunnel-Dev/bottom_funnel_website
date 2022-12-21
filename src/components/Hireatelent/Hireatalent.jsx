import React, { useEffect } from 'react'
import { Hireatalentstepwise } from './Hireatalentstepwise'
import { useDispatch } from 'react-redux';
import { ChnageNavbarColor } from '../../Redux/Navbar/NavbarAction';
import "./Hireatalentstepwise.css"


export const Hireatalent = () => {

  const dispatch = useDispatch();
  useEffect(function () {
    dispatch(ChnageNavbarColor({ color: "black", logo: false }));
  }, []);

  return (
    <div>
    <Hireatalentstepwise />
    
    </div>
  )
}
