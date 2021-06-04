import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import NewsScreen from '../../Components/NewsScreen';
import { Col, Container, Row } from 'react-bootstrap';

NewsPage.propTypes = {
    
};

function NewsPage(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/news')
    .then(function(res){
      setData(res.data);
    })
    .catch(function(error){
      console.log(error);
    })
    }, [])
    return (
        <div className = "news_screen">
            {data.map((item, index) => (
                <NewsScreen data={item} key={index} />
            ))}
        </div>
    )
}

export default NewsPage;