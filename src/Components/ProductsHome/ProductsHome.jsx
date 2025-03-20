import React, { useRef, useEffect } from 'react';
import './ProductsHome.css';
import ourProduct01 from '../../assets/our-product-1.jpg';
import ourProduct02 from '../../assets/our-product-2.jpg';
import ourProduct03 from '../../assets/our-product-3.jpg';
import ourProduct04 from '../../assets/our-product-4.jpg';
import ourProduct05 from '../../assets/our-product-5.jpg';
import ourProduct06 from '../../assets/our-product-6.jpg';
import ourProduct07 from '../../assets/our-product-7.jpg';
import ourProduct08 from '../../assets/our-product-08.jpg';
import ourProduct09 from '../../assets/our-product-09.jpg';

function ProductsHome() {
    const gridColumnRef1 = useRef(null);
    const gridColumnRef2 = useRef(null);
    const gridColumnRef3 = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const columns = [gridColumnRef1, gridColumnRef2, gridColumnRef3];
        columns.forEach((columnRef) => {
            if (columnRef.current) {
                observer.observe(columnRef.current);
            }
        });

        return () => {
            columns.forEach((columnRef) => {
                if (columnRef.current) {
                    observer.unobserve(columnRef.current);
                }
            });
        };
    }, []);

    return (
        <div className="products-home">
            <div className="header">
                <h1>Our Products</h1>
                <p>
                    Explore our wide range of high-quality dental equipment and instruments
                    designed to meet the needs of modern dental practices.
                </p>
            </div>
            <div className="grid-container">
                <div className="grid-column" ref={gridColumnRef1}>
                    <img src={ourProduct01} alt="Product 1" />
                    <img src={ourProduct04} alt="Product 4" />
                    <img src={ourProduct07} alt="Product 7" />
                </div>
                <div className="grid-column" ref={gridColumnRef2}>
                    <img src={ourProduct02} alt="Product 2" />
                    <img src={ourProduct05} alt="Product 5" />
                    <img src={ourProduct08} alt="Product 8" />
                </div>
                <div className="grid-column" ref={gridColumnRef3}>
                    <img src={ourProduct03} alt="Product 3" />
                    <img src={ourProduct06} alt="Product 6" />
                    <img src={ourProduct09} alt="Product 9" />
                </div>
            </div>
        </div>
    );
}

export default ProductsHome;
