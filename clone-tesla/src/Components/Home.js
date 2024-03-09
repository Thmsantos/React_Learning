import React from 'react';
import styled from 'styled-components';
import Models from './Home/Models';

import bgImg1 from './images/tesla-car-1.jpg';
import bgImg2 from './images/tesla-car-2.jpg';
import bgImg3 from './images/tesla-car-3.jpg';
import bgImg4 from './images/tesla-car-4.jpg';
import bgImg5 from './images/solar-panels.jpg';
import bgImg6 from './images/solar-roof.jpg';
import bgImg7 from './images/Desktop-Accessories.jpg';
import downArrow  from './images/down-arrow.svg';

const Home = () => {
    return ( <
        div >
        <
        Main >
        <
        Models title = "Model S"
        text = "Order Online for Touchless Delivery"
        leftBtn = "Custom Order"
        rightBtn = "Existing Inventory"
        backgroundImg = { bgImg1 }
        dropdown = { downArrow }
        /* ifblackColorExits */
        />

        <
        Models title = "Model Y"
        text = "Order Online for Touchless Delivery"
        leftBtn = "Custom Order"
        rightBtn = "Existing Inventory"
        backgroundImg = { bgImg2 }
        /* ifblackColorExits */
        />

        <
        Models title = "Model 3"
        text = "Order Online for Touchless Delivery"
        leftBtn = "Custom Order"
        rightBtn = "Existing Inventory"
        backgroundImg = { bgImg3 }
        /* ifblackColorExits */
        />

        <
        Models title = "Model X"
        text = "Order Online for Touchless Delivery"
        leftBtn = "Custom Order"
        rightBtn = "Existing Inventory"
        backgroundImg = { bgImg4 }
        /* ifblackColorExits   */
        />

        <
        Models title = "Lowest Solar Panels in America"
        text = "Order Online for Touchless Delivery"
        leftBtn = "Custom Order"
        rightBtn = "Existing Inventory"
        backgroundImg = { bgImg5 }
        ifblackColorExits
        />

        <
        Models title = "Solar for New Roofs"
        text = "Order Online for Touchless Delivery"
        leftBtn = "Custom Order"
        rightBtn = "Existing Inventory"
        backgroundImg = { bgImg6 }
        ifblackColorExits
        />

        <
        Models title = "Accessories"
        text = ""
        leftBtn = "Custom Order"
        /* rightBtn = "Existing Inventory" */
        backgroundImg = { bgImg7 }
        ifblackColorExits
        />

        <
        /Main>  < /
        div >
    );
};

const Main = styled.main `
    width: auto;
    height: auto;
    overflow; auto;
    scroll-behavior: smooth;
    scroll-snap-align: initial;
    scroll-snap-type: mandatory;
`;

export default Home;