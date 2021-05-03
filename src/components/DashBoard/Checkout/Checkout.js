import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../../App';
import DashBoardSideBar from '../DashBoardSideBar/DashBoardSideBar';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [shipmentDetail, setShipmentDetail] = useState({ 
        address: '',
        mobile: '',
        payment: 'Cash on delivery' 
    })
    const {id} = useParams()
    const history = useHistory()

    const [checkoutService, setCheckoutService] = useState({})
    useEffect( () => {
        fetch(`https://secret-forest-02226.herokuapp.com/service/${id}`)
        .then(res => res.json())
        .then(data => {
            setCheckoutService(data)
        })
    }, [id])

    const handlePlaceOrder = (e) => {
        const orderDetails = {...loggedInUser, service: checkoutService, shipment: shipmentDetail, orderTime: new Date()}
        fetch('https://secret-forest-02226.herokuapp.com/placeOrder', {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(orderDetails)    
        })
        .then(res => {
            if(res){
                alert("Order Placed")
                history.push('/')
            }
        })
        .catch(err => console.log(err))    
        e.preventDefault()
    }

    const handleShipment = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        if(inputName === 'address'){
            const newShipmentDetail = {...shipmentDetail}
            newShipmentDetail.address = inputValue;
            setShipmentDetail(newShipmentDetail)
        }
        if(inputName === 'mobile'){
            const newShipmentDetail = {...shipmentDetail}
            newShipmentDetail.mobile = inputValue;
            setShipmentDetail(newShipmentDetail)
        }
    }
    return (
        <div className="row">
            <DashBoardSideBar></DashBoardSideBar>
            <div className="col-md-6">
                <h2 className="mt-4">Checkout</h2>
                <div className="checkout-form-container">
                    <form onSubmit={handlePlaceOrder}>
                        <div className="form-group p-2">
                            <label htmlFor="service">Service</label>
                            <input type="text" name="service" className="form-control p-3" value={checkoutService.title} placeholder="Service" required readOnly />
                        </div>
                        <div className="form-group p-2">
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" onBlur={handleShipment} className="form-control p-3" placeholder="Address" required/>
                        </div>
                        <div className="form-group p-2">
                            <label htmlFor="mobile">Mobile</label>
                            <input type="text" name="mobile" onBlur={handleShipment} className="form-control p-3" placeholder="Mobile" required/>
                        </div>
                        <label htmlFor="payment">Cash on Service Delivery</label>
                        <input type="checkbox" name="payment" />
                        <div className="form-group text-end p-2">
                            <button type="submit" className="btn btn-success">Order</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;