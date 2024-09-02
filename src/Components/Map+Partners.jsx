import React from 'react'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const Map_section = () => {
  return (
    <>
      <div className="map-img"></div>

      <section className='partners'>
        <div className="top-partners">
          <h1>Наши партнеры</h1>
            <button><FaChevronLeft /></button>
            <button><FaChevronRight /></button>
        </div>
        <div className="grid-partners">
          <div className="partner">
            <p>Log area</p>
          </div>
          <div className="partner">
            <p>Log area</p>
          </div>
          <div className="partner">
            <p>Log area</p>
          </div>
          <div className="partner">
            <p>Log area</p>
          </div>
          <div className="partner">
            <p>Log area</p>
          </div>
          <div className="partner">
            <p>Log area</p>
          </div>
        </div>      
      </section>
    </>
  )
}

export default Map_section