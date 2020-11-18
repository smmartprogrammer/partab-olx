import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../Component/menuBar.css';

class Menu extends React.Component {
    render() {
        return  (
            <div className="menubar">
                <div className="menubar__sections">
                    <button className="categorieBtn" >
                        <p>ALL CATEGORIES</p>
                        <span><ExpandMoreIcon id="arrowIcon" /></span>
                    </button>
                    <span className="menubar__section--menubarItem">Mobile Phones</span>
                    <span className="menubar__section--menubarItem">Cars</span>
                    <span className="menubar__section--menubarItem">Motorcycles</span>
                    <span className="menubar__section--menubarItem">House</span>
                    <span className="menubar__section--menubarItem">TV-Video-Audio</span>
                    <span className="menubar__section--menubarItem">Tablets</span>
                    <span className="menubar__section--menubarItem">Lands&Plots</span>
                </div>
            </div>
        )
    }
}



export  default Menu;