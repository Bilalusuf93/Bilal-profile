import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import Hero from "./Hero";
const LayoutWrapper = ({ children }) => {
    return (
        <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
                
            </div>
            <>{children}</>
        </div>

    )
}

LayoutWrapper.propTypes = {}

export default LayoutWrapper