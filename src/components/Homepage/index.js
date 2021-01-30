import { Carousel } from 'bootstrap';
import React from 'react';

import Hero from '../../components/Hero/index';

function HomePage(props) {

    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel />
        </div>
    );
}

export default HomePage;