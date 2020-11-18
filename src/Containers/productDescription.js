import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../Component/Header-1'
import Menu from '../Component/menuBar';
import Last_footer from '../Component/last_footer';
import OlxAd from '../Component/olxAd';
import FooterAd from '../Component/FooterAd';
import MiddleFooter from '../Component/MiddleFooter';
import MoreProduct from '../Component/moreProducts';
import SecondRound from '../Component/secondRound';
import AppRouter from '../Config/router'
import  Description from './description';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <OlxAd />
                <br />
                <br />

                <Description />


                <br />

                <FooterAd />
                <MiddleFooter />
                <Last_footer />


            </div>
        )
    }

}

export default Home;

