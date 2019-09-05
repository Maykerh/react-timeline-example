import React, { Component } from 'react';
import './styles/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="header-content header-logo">{'DevBook'}</div>
                <div className="header-content header-my-profile">
                    <span>{'Meu perfil'}</span>
                    <i class="far fa-user-circle"></i>
                </div>
            </div>
        );
    }
}

export default Header;
