import React from 'react';

const LoginPage = () => {
    return (
        <div className="admin-login">
            <label htmlFor="">Podaj login<input type="text" /></label>
            <label htmlFor="">Podaj hasło<input type="password" /></label>
            <button>Zaloguj</button>
        </div>
    );
}

export default LoginPage;