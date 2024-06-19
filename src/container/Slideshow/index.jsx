import React from 'react';
// src/index.js or src/index.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const CarouselComponent = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide  " data-bs-ride="carousel">
            <div className="container client-section">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active " aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>

            </div>
            <div className="carousel-inner">
                <div className="carousel-item active text-center">
                    <img src="person_1.jpg" className=" client rounded-circle py-4" alt="First slide" />
                     <p className='fs-4'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Quisquam necessitatibus <br /> incidunt ut officiis
                            explicabo inventore.</p>
                        <h6>— Jean Hicks</h6>
                    <div className="carousel-caption d-none d-md-block text-black">
                       

                    </div>
                </div>
                <div className="carousel-item text-center">
                    <img src="person_2.jpg" className=" client rounded-circle py-4   " alt="Second slide" />
                    <p className='fs-4'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Quisquam necessitatibus <br /> incidunt ut officiis
                            explicabo inventore.</p>
                        <h6>— Chris Stanworth</h6>
                    <div className="carousel-caption d-none d-md-block text-black">
                       
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default CarouselComponent;
