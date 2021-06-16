import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

NewsScreen.propTypes = {
    
};

function Random(){
    var index = Math.trunc(Math.random()*16);
    var path = "news/news-"+ index + ".png";
    return path;
}
function NewsScreen({data}) {
  
  
    return (
        <div>
        <div className="card" style={{width: '637px', height: '850px'}}>
          <div className="card-body">
            <h5 className="card-title"> {data.title} </h5>
            <h6 className="card-subtitle mb-2 text-muted">{data.abstract}</h6>
            
            <div style = {{backgroundImage: `url(${data.image})`, backgroundSize : 'cover', width: '100%', height: '400px', backgroundRepeat: 'none' }}>
            </div>
            {/* <img src = {data.image} alt = " " /> <br></br> */}
            <p className="card-text">
              {data.content}
            </p>
            <a href= {data.link} className="card-link"> Link: {data.link}</ a>
          </div>
        </div>
        
        </div>
    );
}

export default NewsScreen;