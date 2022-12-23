import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { RealEstateBanner } from './RealEstateBanner'
import { ChnageNavbarColor } from '../../Redux/Navbar/NavbarAction';
import { RealEstateNextBanner } from './RealEstateNextBanner';
import { RealEstateSolution } from './RealEstateSolution';

export const RealEstate = () => {

    const dispatch = useDispatch();
    useEffect(function () {
      dispatch(ChnageNavbarColor({ color: "black", logo: false }));
    }, []);

  return (
    <div>
    <RealEstateBanner />
    <RealEstateNextBanner />
    <RealEstateSolution />
    </div>
  )
}
