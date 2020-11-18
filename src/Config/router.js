import  React from 'react'
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Home from '../Containers/Home'
import About from '../Containers/About'
import ProductDescription from '../Containers/productDescription';
import Description from '../Containers/description'
import PostHeader from '../Component/PostPageComponents/postHeader';

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Home} />
                <Route  path='/about' component={About} />
                <Route  path='/productDescription' component={ProductDescription} />
                <Route path='/postheader' component={PostHeader} />
                




            </Router>
        )
    }
}
  
export default AppRouter;