import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import NewsScreen from '../../Components/NewsScreen';
LawPage.propTypes = {
    
};

function LawPage(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/laws')
    .then(function(res){
      setData(res.data);
    })
    .catch(function(error){
      console.log(error);
    })
    }, [])
    return (
        <div>
            {data.map((item, index) => (
                <NewsScreen data={item} key={index} />
            ))}
        </div>
    );
}

export default LawPage;