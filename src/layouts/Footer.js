import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/Footer.scss';
import codeodrive from '../images/codeodrive - logo.png';

const Footer = props => {
    return (
        <>
            <div className="footer">
                <aside className="footer-aside">
                    <img src={codeodrive} alt="codeodrive-logo" />
                </aside>
                <div className="footer-header__text">
                    <h2 className="footer-header">© 2021 codeodrive. All rights reserved.</h2>
                    <h2 className="footer-header">Graphic & web desing by Bartosz Wawrzkowicz.</h2>

                    <Route path="/" exact render={(props) => (
                        <p className="footer-paragraph">jesteś na stronie <span className="footer-span">głównej</span></p>
                    )
                    } />

                    <Route path="/:page" exact render={(props) => (
                        <p className="footer-paragraph">jesteś na podstronie <span className="footer-span">{props.match.params.page}</span></p>
                    )
                    } />
                </div>
            </div>
        </>
    )
}

export default Footer;