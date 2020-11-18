import React from 'react';
import '../Component/olxAd.css';

class OlxAd extends React.Component{
    render() {
        return (
            <div className="adsContainer">
                <div className="firstAd">
                    <img src="https://statics.olx.com.pk/external/base/img/hero_bg_pk.jpg" width="100%" height="100%" className="adsImage__firstImage" />
                </div>
                <div className="secondAd">
                    <img src="https://tpc.googlesyndication.com/simgad/1123053959195589078" width="100%" className="adstImage__secondImage" />
                </div>
            </div>
        )
    }
    
}



export default OlxAd;