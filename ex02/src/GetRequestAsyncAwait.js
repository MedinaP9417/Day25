import React, {Component} from 'react';

class GetRequestAsyncAwait extends React.Component {
    constructor(props) {
        super(props);
        this.state = { totalReactPackages: null
        };
    }
    async componentDidMount() {
        const response = await fetch('https://api.npms.io/v2/search?q=react');
        const data = await response.json();
        this.setState({ totalPackages: data.total });
        // fetch('https://api.npms.io/v2/search?q=react')
        // .then(response => response.json())
        // .then(data => this.setState({ totalReactPackages: data.total }));
    }
    render() {
        const { totalReactPackages } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">GET Request with Async/Await</h5>
                <div className="card-body">Total packages: {totalReactPackages}</div>
            </div>
        );
    }
}

export default GetRequestAsyncAwait;
