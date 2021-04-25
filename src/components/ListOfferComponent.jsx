import React, { Component } from 'react';
import OfferService from '../services/OfferService';


class ListOfferComponent extends Component {
    constructor(props){
        super(props)

        this.state ={
            offers:[]
        }
        this.addOffer =this.addOffer.bind(this);
        this.viewOffer =this.viewOffer.bind(this);


    }
    viewOffer(id){
        this.props.history.push(`/view-offer/${id}`);
    }

    componentDidMount(){
        OfferService.getOffers().then((res) => {
            console.log(res.data)
            this.setState({offers: res.data});
        });
   


    }
    addOffer(){
        this.props.history.push('/addoffer');
    }


    


    


    render() {
        return (
            <div>
              <h2 className="text-center">OfferList</h2>
              <div className="row">
                  <button className="btn btn-primary" onClick={this.addOffer}>Add Offer</button>
                  </div> 
                  <div className="row">
                      <table className="table table-striped table-bordered">
                          <thead>
                              <tr>
                                  <th>Offer Id</th>
                                  <th>Available Upto</th>
                                  <th>Is Available</th>
                                  <th>Price</th>
                                  <th>Resource Id</th>
                                  <th> Actions </th>
                              </tr>



                          </thead>

                          <tbody>
                          {
                                    this.state.offers.map(
                                        offer => 
                              <tr key={offer.offerId}>
                                  <td>{offer.offerId}</td>
                                  <td>{offer.availableUpto}</td>
                                  <td>{offer.isAvailable}</td>
                                  <td>{offer.price}</td>
                                  <td>{offer.resourceId}</td>
                                  
                                  <td>
                                  <button style={{marginLeft: "10px"}} onClick={ () => this.viewOffer(offer.offerId)} className="btn btn-warning"> View </button>


                                  </td>
                              
                            
                              </tr>


                                    )}
                          </tbody>
                      
                      </table>
                </div> 
            </div>
        );
    }
}

export default ListOfferComponent;