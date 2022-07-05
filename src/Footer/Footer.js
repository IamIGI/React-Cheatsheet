import React from 'react';
// import { Wrapper } from './Footer.style';

const Footer = ({ length }) => {
    const today = new Date();

    return (
        <>
            {/* <Wrapper> */}
            <footer>
                <p>
                    {' '}
                    {length} List {length === 1 ? 'item' : 'items'}
                    <br />
                    Copyright &copy; {today.getFullYear()}
                </p>
            </footer>
            {/* </Wrapper> */}
        </>
    );
};

export default Footer;
