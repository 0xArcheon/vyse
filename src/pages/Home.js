import React from 'react';
import Banner from '../components/Banner/banner';
import Featured from '../components/Featured/featured';
function home() {
    return (
        <div className='home'>
            <Banner />
            <Featured type="featured" />
        </div>
    );
}

export default home;