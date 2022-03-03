// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {


    render() {
        return(
            <div>
                <button
                onCLick={this.onReceiveCoordinates()}
                >

                </button>
            </div>
        )
    } 
}