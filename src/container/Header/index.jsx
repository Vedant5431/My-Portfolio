import React from 'react'

const Header = () => {
    return (
        <div>
            <div className='portfolio d-flex justify-content-around py-3 text-white'>
                <div> <h3>MyPortfolio.</h3></div>
                <div>
                    <ul className='list-unstyled d-flex gap-5 '>
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Services</li>
                        <li>Works</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header