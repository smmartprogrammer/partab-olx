import React from 'react';
import '../PostPageComponents/postHeader.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ReactDOM from 'react-dom';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import addphotos from '../images/addphotos.png';



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
                            <br />

                        </div>
                    </div>

                </div>
                <div className="include_some_detail">
                    <div className="include_some_detail__selectedcatogory_heading">
                        <p className="selectedcatogory_heading_selected">INCLUDE SOME DETAILS</p>
                        <br />
                        <div className="include_some_detail__category">
                            <p>Condition *  </p>
                        </div>
                        <div className="new-used-button">
                            <Button variant="outlined">New</Button> &nbsp;
                            <Button variant="outlined">Used</Button>
                            <br />
                            <br />
                            <div className="include_some_detail__category">
                                <p>Type *  </p>
                            </div>
                            <Button variant="outlined">Apple</Button> &nbsp;
                            <Button variant="outlined">Danny Tabs</Button>&nbsp;
                            <Button variant="outlined">Q Tabs</Button> &nbsp;
                            <Button variant="outlined">Samsung</Button> &nbsp;
                            <br />
                            <br />
                            <Button variant="outlined">Other Tablets</Button> &nbsp;
                            <br />
                            <br />
                            <div className="include_some_detail__category">
                                <p> Ad title *  </p>
                                <br />
                                <div>
                                    <TextField
                                        error
                                        id="outlined-error-helper-text"
                                        // label="Error"
                                        defaultValue=""
                                        helperText="A minimum length of 5 characters is required. Please edit the field. &nbsp;&nbsp;&nbsp; 0 / 70"
                                        variant="outlined"
                                    />
                                </div>
                                <br />
                                <p> Description *  </p>
                                <br />
                                <div>
                                    <TextField
                                        error
                                        id="outlined-multiline-static"
                                        label=""
                                        multiline
                                        rows={4}
                                        defaultValue=""
                                        helperText="A minimum length of 20 characters is required. Please edit the field. &nbsp;&nbsp;&nbsp; 0 / 4096"
                                        variant="outlined"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="selectedcatogory">
                        <div className="selectedcatogory_heading_setaprice">
                            <p className="selectedcatogory_heading_selected">SET A PRICE</p>
                            <br />
                            <div className="include_some_detail__category">
                                <p> Price*  </p>
                                <br />
                                <div>
                                    <TextField
                                        error
                                        id="outlined-error-helper-text"
                                        // label="Error"
                                        defaultValue=""
                                        variant="outlined"
                                    />
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>


                    <div className="selectedcatogory">
                        <div className="selectedcatogory_heading_setaprice">
                            <p className="selectedcatogory_heading_selected">UPLOAD UPTO 12 PHOTOS</p>
                            <br />
                            <div className="include_some_detail__category">
                                <div>
                                    <input type="file" id="file" />
                                    <AddAPhotoIcon   input type="file" id="file" />
                                    <img src={addphotos} alt="addphotos" width="50" height="50" />;
                                    <img src={addphotos} alt="addphotos" width="50" height="50" />;
                                    <img src={addphotos} alt="addphotos" width="50" height="50" />;
                                    <img src={addphotos} alt="addphotos" width="50" height="50" />; <br />
                                    <img src={addphotos} alt="addphotos" width="50" height="50" />;
                                    <img src={addphotos} alt="addphotos" width="50" height="50" />;
                                    <img src={addphotos} alt="addphotos" width="50" height="50" />;
                                    <img src={addphotos} alt="addphotos" width="50" height="50" />;<br />
                                    <img src={addphotos} alt="addphotos" width="50" height="50" />;
                                    <img src={addphotos} alt="addphotos" width="50" height="50" />;
                                    <img src={addphotos} alt="addphotos" width="50" height="50" />;
                                    <img src={addphotos} alt="addphotos" width="50" height="50" />; <br />





                                </div>
                                <br />
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}

export default PostHeader;