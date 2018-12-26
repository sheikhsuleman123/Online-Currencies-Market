import React from 'react';


/** 
@param {object} response

*/
export const handleResponce = (response) => {

    return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
}

/**
 * 
 * @param {string} percent 
 */

export const changePercent = (percent) => {
    if(percent > 0){
      return <span className="percent-raised">{percent}% &uarr;</span>
    } else if(percent < 0){
      return <span className="percent-fallen">{percent}% &darr;</span>   
    } else{
      return <span>{percent}</span>
    }
  }