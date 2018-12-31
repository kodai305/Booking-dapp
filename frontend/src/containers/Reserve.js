import React, { Component } from 'react';
import ButtonAppBar from "../components/headerReserver";

class Reserve extends Component {
    render() {
        return (
            <div className="reserve">
                <ButtonAppBar />
                <h2>this is reservation page</h2>
            </div>
        );
    }
}

export default  Reserve;