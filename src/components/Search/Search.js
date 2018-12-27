import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {API_URL} from '../../config';
import { handleResponce } from '../../helpers';
import Loading from '../Loading';

import './search.css';

 class Search extends Component {
     constructor(){
         super();  
         this.state = {
             searchResult: [],
             searchQuery: '',
             loading: false,
         };
         this.handlChange = this.handlChange.bind(this);
         this.handleRedirect = this.handleRedirect.bind(this);
     
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

             this.setState({
                 loading:false,
                searchResult:result,
                });
            });
     }

     handleRedirect(currencyId) {
        this.setState({
            //Clear input and close auto complete text bar 
            searchQuery: '',
            searchResult: [],
        });

        this.props.history.push(`/currency/${currencyId}`);
     }
     renderSearchResult() {
         const {searchResult, searchQuery,loading} = this.state;

         if(!searchQuery){
            return '';
        }

         if(searchResult.length > 0) {
         return(
             <div className="Search-result-container">
                {searchResult.map(result => (
                <div
                key={result.id}
                className="Search-result"
                onClick={() => this.handleRedirect(result.id)}
                >
                {result.name} ({result.symbol})
                </div>                    
         ))}
             </div>
         );
                }

                if(!loading){
                return(
                    <div className="Search-result-container">
                        <div className="Search-no-result">
                        No Result Found
                        </div>
                    </div>
                );
            }
    }

  render() {

    const {loading,searchQuery } = this.state;

    return (
      <div className="Search">
        <span className="Search-icon">

        </span>

            <input
            className="Search-input"
            type="text"
            placeholder="Currency-name"
            onChange={this.handlChange} 
            value={searchQuery}
            />

            {loading &&
        <div className="Search-loading">
            <Loading 
            height='12px'
            width='12px'
            
            />
        </div>
    }
    {this.renderSearchResult()}
      </div>
    )
  }
}

export default withRouter(Search);