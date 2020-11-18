import React from 'react';
import '../Component/MiddleFooter.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { IconButton } from '@material-ui/core';


class MiddleFooter extends React.Component {
    render() {
        return (
            <div className="mainBox">
                <div className="mainBox__CategorieSection">
                    <div className="mainBox__CategorieSection--modifier">
                        <div className="categorieTittle">
                            <h4>POPULAR CATEGORIES</h4>
                        </div>
                        <div>
                            <ul>
                                <li>Cars</li>
                                <li>Flats for rent</li>
                                <li>Jobs</li>
                                <li>Mobile Phones</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mainBox__CategorieSection--modifier">
                        <div className="categorieTittle">
                            <h4>TRENDING SEARCHES</h4>
                        </div>
                        <div>
                            <ul>
                                <li>Bikes</li>
                                <li>Watches</li>
                                <li>Books</li>
                                <li>Dogs</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mainBox__CategorieSection--modifier">
                        <div className="categorieTittle">
                            <h4>ABOUT US</h4>
                        </div>
                        <div>
                            <ul>
                                <li>About OLX Group</li>
                                <li>OLX Blog</li>
                                <li>Contact Us</li>
                                <li>OLX for Businesses</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mainBox__CategorieSection--modifier">
                        <div className="categorieTittle">
                            <h4>OLX</h4>
                        </div>
                        <div>
                            <ul>
                                <li>Help</li>
                                <li>Sitemap</li>
                                <li>Legal & Privacy information</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mainBox__CategorieSection--Mediamodifier">
                        <div className="follow_us">
                            <div className="categorieTittle__followUs">
                                <h4>FOLLOW US</h4>
                            </div>
                        </div>
                        <div className="mediaSource">
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton>
                                <TwitterIcon />
                            </IconButton>
                            <IconButton>
                                <YouTubeIcon />
                            </IconButton>
                            <IconButton>
                                <InstagramIcon />
                            </IconButton>
                        </div>
                        <div className="appSource">
                            <a href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home">
                                <img src="https://statics.olx.com.pk/external/base/img/appstore_2x.png" alt="app-store" width="90px" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home">
                                <img src="https://statics.olx.com.pk/external/base/img/playstore_2x.png" alt="google store" width="90px" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MiddleFooter;
