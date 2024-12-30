import React from 'react';
import Hero from './hero';
import Massage from './message';
function HomePage() {
    return (
        <div className="continer">
            <Hero />
            <Massage/>
        </div>
    );
}

export default HomePage;