import React from 'react'

const Footer = () => {
    return (
        <div className=' container d-flex justify-content-between  py-5 pt-5 '>

            <div className=' d-flex justify-content-around '>
                <p>© Copyright MyPortfolio. All Rights Reserved <br />

                    Designed by BootstrapMade</p>
            </div>
            <div className='icons '>
                <i class="fa-brands fa-twitter px-3"></i>
                <i class="fa-brands fa-facebook px-3"></i>
                <i class="fa-brands fa-instagram px-3"></i>
                <i class="fa-brands fa-linkedin px-3"></i>
            </div>
        </div>
    )
}

export default Footer