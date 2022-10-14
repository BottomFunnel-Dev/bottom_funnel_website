import React from 'react'
import Brand from './Brand'
import Educationcontainer from './Educationcontainer'
import Educationquotes from './Educationquotes'
import Featuresection from './Featuresection'
import Solutionsection from './Solutionsection'
import Whychoose from './Whychoose'

export default function Educationpage() {
  return (
    <div> 
    <Educationcontainer/>
    <Featuresection/>
    <Educationquotes/>
    <Solutionsection/>
    <Whychoose/>
    <Brand/>
    </div>
  )
}
