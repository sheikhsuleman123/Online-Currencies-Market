import React, { Component } from 'react'
import { API_URL } from '../../config';
import Loading from '../Loading';
import { handleResponce, changePercent } from '../../helpers';
import './Detail.css';

 class Detail extends Component {
     constructor() {
         super();

         this.state = {
             currency: {},
             loading: false,
             error: null,
         };
     }
 
    componentDidMount(){
        const currencyId = this.props.match.params.id;
       
        this.setState({loading: true});

        fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
        .then(handleResponce)
        .then((currency) => {
            this.setState({
                loading: false,
                error: null,
                currency,
            });
        })
        .catch((error) =>{
            this.setState({
                loading: false,
                error: error.errorMessage,
            });
        });
    }
 
 
 
 
    render() {

        const { Loading,error,currency } = this.state;
        if( Loading ) {
            return <div className="loading-container"><Loading /> </div>
        }
        if(error) {
            return <div className="error">{error}</div>
        }

    return (
      <div className="Detail"> 
      <h1 className="Detail-heading">
        {currency.name} ({currency.symbol})
      </h1>
        <div className="Detail-container">
            <div className="Detail-item">
            Price <span className="Detail-value">${currency.price} </span>
            </div>
            <div className="Detail-item">
            Rank <span className="Detail-value">{currency.rank} </span>
            </div>
            <div className="Detail-item">
            24H Change <span className="Detail-value">{changePercent(currency.percentChange24h)} </span>
            </div>
            <div className="Detail-item">
                <span className="Detail-title">Market Cap</span>
                <span className="Detail-dollar">$</span>
                {currency.marketCap}
            </div>
            <div className="Detail-item">
                <span className="Detail-title">24H Volume</span>
                <span className="Detail-dollar">$</span>
                {currency.volume24h}
            </div>
            <div className="Detail-item">
                <span className="Detail-title">Total Supply</span>
                
                {currency.totalSupply}
            </div>
        </div>



      </div>
    );
  }
}

export default Detail;