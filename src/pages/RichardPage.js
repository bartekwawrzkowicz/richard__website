import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const permission = false;

const RichardPage = () => {
    return (
        <Route render={() => (
            permission ? (
                <h3 className="admin-header">Panel admina - Ryszard mówi: Dzień dobry!</h3>
            ) : (
                    <Redirect to="/login" />
                )
        )} />
    );
}

export default RichardPage;