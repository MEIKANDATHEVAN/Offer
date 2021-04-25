import React, { Component } from 'react'
import OfferService from '../services/OfferService';

class ViewOfferComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            offer: {}
        }
    }
    componentWillMount(){}
    componentDidMount(){
        OfferService.getOfferById(this.state.id).then( res => {
            this.setState({offer: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Offer Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Offer Id: </label>
                            <div> { this.state.offer.offerId }</div>
                        </div>
                        <div className = "row">
                            <label> Available Upto: </label>
                            <div> { this.state.offer.availableUpto }</div>
                        </div>
                        <div className = "row">
                            <label> isAvailable: </label>
                            <div> { this.state.offer.isAvailable }</div>
                        </div>
                        <div className = "row">
                            <label> Price: </label>
                            <div> { this.state.offer.price }</div>
                        </div>
                        <div className = "row">
                            <label> Resource ID: </label>
                            <div> { this.state.offer.resourceId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewOfferComponent;