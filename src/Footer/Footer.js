import React from 'react';
// import { Wrapper } from './Footer.style';

const Footer = () => {
    const today = new Date();

    return (
        <>
            {/* <Wrapper> */}
            <footer>
                <p>Copyright &copy; {today.getFullYear()}</p>
            </footer>
            {/* </Wrapper> */}
        </>
    );
};

export default Footer;
