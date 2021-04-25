import axios from 'axios';
//const OFFER_API_BASE_URL ="http://localhost:3456/getalloffer";
//const OFFER_API_BASE_URL1 ="http://localhost:3456/addoffer";

class OfferService{
    getOffers(){
        return axios.get("http://localhost:3456/getalloffer");


    }
    addOffer(Offer){
        console.log(Offer)
        return axios.post("http://localhost:3456/addoffer",Offer);
    }
    getOffer(offerId){
        return axios.get("http://localhost:3456/getofferbyid/", offerId);
    
}
//getAllOffer(Offer){
//return axios.post("http://localhost:3456/getalloffer",Offer);
  //  }
}

export default new OfferService()