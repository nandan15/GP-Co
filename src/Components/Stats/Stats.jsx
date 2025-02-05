import React, { useState, useEffect, } from 'react';
import { useInView } from 'react-intersection-observer';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';
import './Stats.css'
    export default function Stats() {
        const { ref, inView } = useInView({
            triggerOnce: true, // Ensures the callback only triggers once
            threshold: 0.1,
          });
        
          const [products, setProducts] = useState(0);
          const [shades, setShades] = useState(0);
          const [employees, setEmployees] = useState(0);
          const [clients, setClients] = useState(0);
          console.log("hello");
        
          useEffect(() => {
            if (inView) {
                console.log("triggered")
              // Stagger the animations with setTimeout
              setTimeout(() => setProducts(100), 500);
              setTimeout(() => setShades(8), 1000);
              setTimeout(() => setEmployees(30), 1500);
              setTimeout(() => setClients(150), 2000);
            }
          }, [inView]);

  return (
    <div ref={ref} className='container'>
      <div className='statBox'>
        <div className="odometerWithPlus">
            <Odometer value={products} format="d" duration={2000} />
            <span className="plusSign">+</span>
        </div>
        <p>Our Products</p>
      </div>
      <div className='statBox'>
      <div className="odometerWithPlus">
        <Odometer value={shades} format="d" duration={2000} />
        <span className="plusSign">+</span>
        </div>
        <p>Color Shades</p>
      </div>
      <div className='statBox'>
      <div className="odometerWithPlus">
        <Odometer value={employees} format="d" duration={2000} />
        <span className="plusSign">+</span>
        </div>
        <p>Employees</p>
      </div>
      <div className='statBox'>
      <div className="odometerWithPlus">
        <Odometer value={clients} format="d" duration={2000} />
        <span className="plusSign">+</span>
        </div>
        <p>Happy Coustumers</p>
        </div>
    </div>
  );
}

