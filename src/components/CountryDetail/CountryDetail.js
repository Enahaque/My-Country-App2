import React from 'react';


const CountryDetail = (props) => {
    const{name,flags} = props.country;
    return (
        <div className='country'>
            <h2>{name.common} </h2>
            <img src={flags.png} alt=""></img>
        </div>
    );
};

export default CountryDetail;