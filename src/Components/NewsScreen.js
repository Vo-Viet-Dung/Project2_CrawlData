import React from 'react';
import PropTypes from 'prop-types';

NewsScreen.propTypes = {
    
};

function Random(){
    var index = Math.trunc(Math.random()*16);
    var path = "Images/news-"+ index + ".png";
    return path;
}
function NewsScreen(props) {
    return (
        <div>
        <div className="card" style={{width: '43rem'}}>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">
              Content
            </p>
            <img src = {Random()} alt = " " sizes = '18rem'/> <br></br>
            <a href="/#" className="card-link">Card link</ a>
          </div>
        </div>
        
        </div>
    );
}

export default NewsScreen;