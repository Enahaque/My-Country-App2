import React, { useEffect, useState } from 'react';
import CountryDetail from '../CountryDetail/CountryDetail';


const MyRestCountries = () => {
    const[countries,setCountries] = useState([]);
    console.log(countries);
    useEffect( ()=>{
        const url = `https://restcountries.com/v3.1/all`;
        // console.log(url);
        fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data));
        .then(data => setCountries(data));
    },[])
    return (
        <div className='countries'>
            <h2>My Rest Countries</h2>
            {
                countries.map(country =><CountryDetail
                    key={country.id}
                    country={country}
                ></CountryDetail>)
            }
        </div>
    );
};

export default MyRestCountries;