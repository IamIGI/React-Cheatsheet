import React from 'react';

export const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
};

//Default props used, when prop key don't exists
Header.defaultProps = {
    title: 'Default Title',
};

export default Header;
