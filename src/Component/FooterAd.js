import React from 'react';
import '../Component/FooterAd.css';

class FooterAd extends React.Component{
    render(){
        return(
            <div className="footerBox">
                <div className="advertiseImage">
                    <div className="advertiseImage__imageContainer">
                        <img src="https://statics.olx.com.pk/external/base/img/phone-app.png" />
                    </div>
                </div>
                <div className="Approchment">
                    <div className="ApprochHeading">
                        <h1>TRY THE OLX APP</h1>
                    </div>
                    <div className="AppBenefitLine">
                        <p>Buy, Sell and find just about anything using<br /> the app on your mobile.</p>
                    </div>
                </div>
                <div className="Resource">
                    <div className="separatorLine"></div>
                    <div className="resourceConvince">
                        <div className="resourceConvince__headingLine">
                            <h4>GET YOUR APP TODAY</h4>
                        </div>
                        <div className="path">
                            <div className="path__appStore">
                                <a href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home">
                                    <img src="https://statics.olx.com.pk/external/base/img/appstore_2x.png" width="120px" />
                                </a>
                            </div>
                            <div className="path__googlePlay">
                                <a href="https://play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home">
                                    <img src="https://statics.olx.com.pk/external/base/img/playstore_2x.png" width="120px" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default FooterAd;