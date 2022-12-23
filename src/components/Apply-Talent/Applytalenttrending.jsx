import React from 'react';
import "./Applytalenttrending.css"

export const Applytalenttrending = () => {

    const filter = [
        {
            fun:"Filter by",
        },

        {
            fun:"Function",
        },

        {
            fun:"Location",
        },

        {
            fun:"Experience",
        },

    ]

    
   

    const seachingvacancy = [
        {
            xtt:"SSE-BLOCKCHAIN DEVELOPER"
        },

        {
            xtt:" Business Development/Business Manage"
        },

        {
            xtt:"CONTENT WRITER"
        },

        {
            xtt:"Node JS LEAD"
        },

        {
            xtt:"REACT JS"
        },

        {
            xtt:"FLUTTER DEVELOPMENT"
        },

        {
            xtt:"iOS LEAD"
        },

        {
            xtt:"SR DEVOPS ENGINEER"
        },

        {
            xtt:"REACT NATIVE"
        },

        {
            xtt:"SOLUTION ARCHITECTURE(BACKEN)"
        },

        {
            xtt:"SR JAVA DEVELOPER"
        },
    ]


  return (
    <div className='applytalenttrendingmnainboxes'>
    <div className='applytalenttrendingleftbox'>
    <div className='applytalentflexleftingboxing'>{filter.map((e)=>{
        return (
            <div className='applylefttalentmapperbox'><h4>{e.fun}</h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
          </svg>
            </div>
        )
    })}</div>
    </div>

    <div className='applytalenttrendingrightbox'>
    <div className='applytalenttrndingsomeuppertextandserachbox'>
    <h1>Trending Opportunities</h1>
    <p>We promise you an inclusive work environment where you will fall in love with challenging as well as getting challenged</p>
   <div className='applytalentsearchboxtrending'> <input placeholder='find your role ?' />
    
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
    </div>
    </div>
    </div>
    
    </div>
  )
}
