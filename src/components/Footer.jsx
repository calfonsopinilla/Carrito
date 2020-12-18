import React from 'react';

const Footer = ({fecha,nombre}) => ( 
    <div className="p-3 text-center bg-dark">
        <b className="text-white">{fecha} &copy; {nombre}</b>
    </div>
);
 
export default Footer;