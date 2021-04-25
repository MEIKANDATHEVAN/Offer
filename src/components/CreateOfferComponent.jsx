import React, { Component } from 'react';
import OfferService from '../services/OfferService';


class CreateOfferComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            offerId:'',
            availableUpto:'',
            isAvailable:'',
            price:'',
            resourceId:''
        
        }


        this.changeOfferIdHandler = this.changeOfferIdHandler.bind(this);
        this.changeAvailableUptoHandler = this.changeAvailableUptoHandler.bind(this);
        this.changeIsAvailableHandler = this.changeIsAvailableHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeResourceIdHandler = this.changeResourceIdHandler.bind(this);
        this.saveOffer=this.saveOffer.bind(this);
    }

    // step 3
   

    saveOffer = (e) => {
        e.preventDefault();
        let Offer = {
            offerId: this.state.offerId, availableUpto: this.state.availableUpto, isAvailable: this.state.isAvailable,
            price: this.state.price, resourceId: this.state.resourceId
        };
         console.log('offer => ' + JSON.stringify(Offer));

        OfferService.addOffer(Offer).then(res => {
            this.props.history.push('/getofferbyid/');
        });
        window.alert("Added Successfully");
    }

    changeOfferIdHandler = (event) => {
        this.setState({ offerId: event.target.value });

    }

    changeAvailableUptoHandler = (event) => {
        this.setState({ availableUpto: event.target.value });
    }

    changeIsAvailableHandler = (event) => {
        this.setState({ isAvailable: event.target.value });
    }

    changePriceHandler = (event) => {
        this.setState({ price: event.target.value });
    }

    changeResourceIdHandler = (event) => {
        this.setState({ resourceId: event.target.value });
    }

    cancel() {
        this.props.history.push('/offers');
    }

    getOfferId() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Offer</h3>
        } else {
            return <h3 className="text-center">Update Offer</h3>
        }
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Add Offer </h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Enter Offer Id: </label>
                                        <input placeholder="OfferId" name="offerId" className="form-control"
                                            value={this.state.offerId} onChange={this.changeOfferIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> AvailableUpto:  </label>
                                        <input placeholder="Information about the Availablity" name="availableUpto" className="form-control"
                                            value={this.state.availableUpto} onChange={this.changeAvailableUptoHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> IsAvailable:  </label>
                                        <input placeholder="Available" name="isAvailable" className="form-control"
                                            value={this.state.isAvailable} onChange={this.changeIsAvailableHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Price:  </label>
                                        <input placeholder="Enter a price" name="price" className="form-control"
                                            value={this.state.price} onChange={this.changePriceHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> ResourceId:  </label>
                                        <input placeholder="Enter 1" name="resourceId" className="form-control"
                                            value={this.state.resourceId} onChange={this.changeResourceIdHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOffer}> Save </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ margin: "10px" }}> Cancel </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CreateOfferComponent;
