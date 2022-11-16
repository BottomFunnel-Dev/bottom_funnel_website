import React from 'react'
import './bottomButton.css'
const buttonText = {
  buttonContent:"Get Started",
  buttonBack: "#ef4c23"
}
export const BottomButton = ({buttonText}) => {
  return (
    <div className='bottomButton' style={buttonText.buttonBack}>{buttonText.buttonContent}</div>
  )
}
