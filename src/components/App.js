import React, { Component } from 'react';

import Navbar from './Navbar/Navbar';
import Searchbar from './Searchbar/Searchbar';

class App extends Component {

    state = {
        term: ''
    };

    onSearchSubmit = async (term) => {
        console.log(term);
    };

    render() {
        return (
            <div>
                <Navbar />
                <div className="ui container">
                    <Searchbar onSubmit={this.onSearchSubmit} />
                </div>
            </div>
        );
    }
}

export default App;