import React, { Component } from 'react'
import { handleResponce } from '../../helpers';
import {API_URL} from '../../config';
import Loading from '../Loading';

import './Table.css';

class index extends Component {
  constructor(){
    super();

    this.state = {
      loading: false,
      currencies: [],
      error: null,
      // error: "Something has gone wrong",
    };
  }
  componentDidMount() {
    this.setState({ loading: true });

    fetch(API_URL + '/cryptocurrencies?page=1&perPage=20')
    .then(handleResponce)
    .then((data) => {
      
      this.setState({ 
        currencies: data.currencies,
        loading:false
       });

    })
    .catch((error) => {
      this.setState({ 
        error: error.errorMessage, 
        loading:false 
      });
    });
  }

  changePercent(percent) {
    if(percent > 0){
      return <span className="percent-raised">{percent}% &uarr;</span>
    } else if(percent < 0){
      return <span className="percent-fallen">{percent}% &darr;</span>   
    } else{
      return <span>{percent}</span>
    }
  }

  render() {
    const {loading, error, currencies } = this.state;

    // render only loading component if loading state is set to true    
  if(loading){
      return <div className="loading-container">
    <Loading />
      </div>
    }
  //  render only if the fetching api is getting error for detching the data 
    if (error) {
      return <div className="error">
      {error}
      </div>
    }
    return (
      <div className="Table-container">
      
      <table className="Table">
        <thead className="Table-head">
          <tr>
          <th>Cryptocurrency</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>24h Change</th>
          </tr>
        </thead>
        
        <tbody className="Table-body">
        {currencies.map((currency) => (
        <tr key={currency.id}>
         <td>
           <span className="Table-rank">
            {currency.rank}
           </span>
           {currency.name}
         </td>
        <td>
          <span className="Table-dollar">$ {currency.price}</span>
        </td>
        
        <td>
          <span className="Table-dollar">$ {currency.marketCap}</span>
        </td>  
        <td>
          {this.changePercent(currency.percentChange24h)}
        </td>
        </tr>
      ))}
        </tbody>
      </table>
      </div>
    )
  }
}

export default index;