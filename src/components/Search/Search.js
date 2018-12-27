import React, { Component } from 'react'
import './search.css'

 class Search extends Component {
     constructor(){
         super();
         this.state = {
             searchQuery: '',
         };
         this.handlChange = this.handlChange.bind(this);
     }
     handlChange(event) {
         const inputValue = event.target.value;

         this.setState({searchQuery: inputValue});

         console.log(this.state);
     }

  render() {
    return (
      <div>
        <form>
            <input onChange={this.handlChange} />
            
        </form>
      </div>
    )
  }
}

export default Search;