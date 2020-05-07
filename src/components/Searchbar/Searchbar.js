import React, { Component } from 'react';

import './Searchbar.css';

class Searchbar extends Component {

    state = {
        term: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="SearchBar">
                <form onSubmit={this.onFormSubmit}>
                    <input
                        value={this.state.term}
                        onChange={
                            (e) => this.setState({ term: e.target.value })
                        }
                        className="SearchBarInput"
                        type="text"
                        placeholder="Search"
                    />
                </form>
            </div>
        );
    }
}

export default Searchbar;