import React, { Component } from 'react'
import { handleResponce } from '../../helpers';
import {API_URL} from '../../config';
import Loading from '../Loading';

import Table from './Table';
import Pagination from './Pagination';

// import './Table.css';

class index extends Component {
  constructor(){
    super();

    this.state = {
      loading: false,
      currencies: [],
      error: null,
      totalPages: 0,
      page: 1,
      // error: "Something has gone wrong",
    };
  }
  componentDidMount() {
    this.fetchCurrencies(); 
  }
  fetchCurrencies() {
    this.setState({ loading: true });

    const { page } = this.state;

    fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
    .then(handleResponce)
    .then((data) => {

      const { currencies, totalPages } = data;

      this.setState({ 
        currencies: currencies,
        totalPages: totalPages,
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

 

  handlePaginationClick = (direction) => {
    let nextPage = this.state.page;
    
    if(direction === 'next') {
      nextPage++;
    } else {
      nextPage--;
    }
    this.setState({ page : nextPage }, () =>{
      this.fetchCurrencies();
    });
  }

  render() {
    const {loading, error, currencies, page, totalPages } = this.state;

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
      <div>
      <Table 
      currencies={currencies}
     
      />
      <Pagination 
      page={page}
      totalPages= {totalPages}
      handlePaginationClick={this.handlePaginationClick}
      />
      </div>
    )
  }
}

export default index;