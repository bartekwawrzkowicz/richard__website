import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ArticlePage from '../pages/ArticlePage';
import ContactPage from '../pages/ContactPage';
import RichardPage from '../pages/RichardPage';
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/article" component={ArticlePage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/richard" component={RichardPage} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    )
}

export default Page;