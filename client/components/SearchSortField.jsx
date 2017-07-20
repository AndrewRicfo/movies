import React from 'react';
import './SearchSortField.less';

const SearchSortField = React.createClass({
  
    render() {

        return (
            <div className='SearchSort'>
              <input type="text" className="SearchSort__input" id="name" placeholder="Search by movie name" onChange={this.props.searcher} />
              <input type="text" className="SearchSort__input" id="actor" placeholder="Search by actor's name" onChange={this.props.searcher}/>
              <button className="SearchSort__button">Sort A-Z</button>
              <button className="SearchSort__button">Default order</button>
            </div>
        );
    }
});

export default SearchSortField;
