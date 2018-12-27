import React, { Component } from 'react';
import {API_URL} from '../../config';
import { handleResponce } from '../../helpers';
import Loading from '../Loading';

import './search.css';

 class Search extends Component {
     constructor(){
         super();
         this.state = {
             searchQuery: '',
             loading: false,
         };
         this.handlChange = this.handlChange.bind(this);
     }
     handlChange(event) {
         const searchQuery = event.target.value;

         this.setState({searchQuery });

         if(!searchQuery) {
             return '';
         }

         this.setState({loading:true});

         fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`)
         .then(handleResponce)
         .then((result) => {
             console.log(result)

             this.setState({loading:false});


         });
     }


  render() {

    const {loading } = this.state;

    return (
      <div className="Search">
        <span className="Search-icon">

        </span>

            <input
            className="Search-input"
            type="text"
            placeholder="Currency-name"
            onChange={this.handlChange} 
            />

            {loading &&
        <div className="Search-loading">
            <Loading 
            height='12px'
            width='12px'
            
            />
        </div>}
      </div>
    )
  }
}

export default Search;