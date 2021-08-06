import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/Header.scss';
import img1 from '../images/img1.jpeg';
import img2 from '../images/img2.jpeg';
import img3 from '../images/img3.jpeg';
import img4 from '../images/img4.jpeg';
import img5 from '../images/img5.jpeg';

const Header = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact render={() => (
                    <img src={img1} alt="dachshund" />
                )} />

                <Route path="/article" render={() => (
                    <img src={img2} alt="dachshund" />
                )} />

                <Route path="/contact" render={() => (
                    <img src={img3} alt="dachshund" />
                )} />

                <Route path="/richard" render={() => (
                    <img src={img4} alt="dachshund" />
                )} />

                <Route render={() => (
                    <img src={img5} alt="dachshund" />
                )} />
            </Switch>
        </>
    )
}

export default Header;