import React, { Component } from 'react';


class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = { term: '' };
    }
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="search-bar">
                <h2 className="header"> Search for Videos</h2>
                <input
                    value={this.state.term} //input is a controlled component
                    onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        )
    }
}
export default SearchBar;