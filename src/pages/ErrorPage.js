import React from 'react';
import gif2 from '../images/gif2.gif';
import '../styles/ErrorPage.scss';

const ErrorPage = () => {
    return (
        <>
            <div className="error-main">
                <div className="error-text__primary">podana podstrona nie istnieje</div>
                <div className="error-text__secondary">
                    jamnik czeka...
            </div>
                <img src={gif2} alt="error-dachshund" />
            </div>
        </>
    )
}

export default ErrorPage;