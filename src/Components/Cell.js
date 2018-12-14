import React, { Component } from "react";

class Cell extends Component {

    render() {

        let color = 'white';

        return (
            <td>
                <div className="cell" >
                    <div className={color}></div>
                </div>
            </td>
        );
    }
}
export default Cell



