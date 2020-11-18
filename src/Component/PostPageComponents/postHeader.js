import React from 'react';
import '../PostPageComponents/postHeader.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';


class PostHeader extends React.Component {
    render() {
        return (
            <div className="PostHeadPage">

                <div className="PostHeaderClx">
                    <div className="PostHeaderClx__firstParent" >
                        <div className="PostHeaderClx__Header">
                            <div className="    arrowAndlogo">
                                <div className="arrow">
                                    <Link to='/'>
                                        <ArrowBackIcon />
                                    </Link>
                                </div>
                                <div className="logo">
                                    <img src="https://fleks.bookmark.com/assets/public/images/22_OLX-512.png" alt="/" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="Postyourad">
                    <p className="postyourad-heading">POST YOUR AD</p>
                </div>
                <div className="selectedcatogory">
                    <div className="selectedcatogory_heading">
                        <p className="selectedcatogory_heading_selected">SELECTED CATEGORY</p>
                        <br />
                        <div className="category">
                            <p>Mobiles / Tablets  &nbsp;</p> 
                            <p className="bold"><u>change</u> </p>

                        </div>
                        <br />

                    </div>

                </div>
                <div className="include_some_detail">
                    <div className="selectedcatogory_heading">
                        <p className="selectedcatogory_heading_selected">SELECTED CATEGORY</p>
                        <br />
                        <div className="category">
                            <p>Mobiles / Tablets  &nbsp;</p> 
                            <p className="bold"><u>change</u> </p>

                        </div>
                        <br />

                    </div>

                </div>


            </div>



        )
    }
}

export default PostHeader;