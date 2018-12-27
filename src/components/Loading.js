import React from 'react';

import PropTypes from 'prop-types';

import './Loading.css';

const Loading = (props) => {
   
   const {width, height } = props;
   
   return <div className="Loading" style={{width, height}}>

    </div>
}

Loading.defaultProps = {
    width: '28px',
    height: '28px',
};
Loading.PropTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
}



export default Loading;