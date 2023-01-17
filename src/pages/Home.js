import React from 'react';
import Banner from '../components/Banner/banner';
import Featured from '../components/Featured/featured';
import Categories from '../components/Categories/categories';
function home() {
    return (
        <div className='home'>
            <Banner />
            <Featured type="featured" />
            <Categories />
        </div>
    );
}

export default home;