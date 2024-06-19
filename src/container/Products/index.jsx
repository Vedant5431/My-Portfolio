import React from 'react'

const Products = () => {
    return (
        <div>
            <div className='products d-flex justify-content-around py-3 '>
                <div>
                    <h2>Hey, I'm Johan Stanworth</h2>
                    <p>Freelance Creative & Professional Graphics Designer</p>
                </div>
                <div>
                    <ul className='list-unstyled d-flex gap-5 '>
                        <li><ins>All</ins></li>
                        <li>Web</li>
                        <li>Design</li>
                        <li>Branding</li>
                        <li>Photography</li>
                    </ul>
                </div>
            </div>

            <div className='product-menu'>
                <div pro-1 className= 'justify-content-center gap-4 py-4 d-flex'>
                    <img src="../img_1.jpg" alt="" className='w-25' />
                    <img src="../img_2.jpg" alt="" className='w-25' />
                    <img src="../img_3.jpg" alt="" className='w-25' />
                </div>
                <div pro-1 className= 'justify-content-center gap-4 d-flex'>
                    <img src="../img_4.jpg" alt="" className='w-25' />
                    <img src="../img_5.jpg" alt="" className='w-25' />
                    <img src="../img_6.jpg" alt="" className='w-25' />
                </div>


            </div>


            

        </div>
    )
}

export default Products