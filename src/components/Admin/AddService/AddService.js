import React, { useState } from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import './AddService.css';
import axios from 'axios';

const AddService = () => {
    const [serviceDetails, setServiceDetails] = useState({
        title: '',
        description: '',
        price: '',
        img: '', 
        status: 'Pending'
    })

    const handleBlur = (event) => {
        const inputValue = event.target.value
        const inputName = event.target.name
        if(inputName === 'service-name'){
            const serviceName = inputValue
            const newServiceDetails = {...serviceDetails}
            newServiceDetails.title = serviceName
            setServiceDetails(newServiceDetails)
        }
        if(inputName === 'description'){
            const description = inputValue
            const newServiceDetails = {...serviceDetails}
            newServiceDetails.description = description
            setServiceDetails(newServiceDetails)
        }
        if(inputName === 'add-price'){
            const servicePrice = inputValue
            const newServiceDetails = {...serviceDetails}
            newServiceDetails.price = servicePrice
            setServiceDetails(newServiceDetails)
        }
    }

    const handleImageUpload = (event) => {
        const imageData = new FormData()
        imageData.set('key', '65cbf3f653fd546438eae3f8e373fb61')
        imageData.append('image', event.target.files[0])
        
        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then( (response) => {
            const newServiceDetails = {...serviceDetails}
            newServiceDetails.img = response.data.data.display_url
            setServiceDetails(newServiceDetails)
        })
        .catch( (error) => {
            console.log(error);
        });
    }

    const handleAddServiceSubmit = (e) => {
        fetch('https://secret-forest-02226.herokuapp.com/addService', {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(serviceDetails)
        })
        .then(res => {
            if(res){
                alert('Service has been added')
            }
        })
        .catch(err => console.log(err))

        e.preventDefault()
    }
    return (
        <div className="row">
            <AdminSideBar></AdminSideBar>
            <div className="col-md-9">
                <div className="add-service-container">
                    <h3 className="mt-3">Add Service</h3>
                    <div className="add-service-form-container"> 
                        <form onSubmit={handleAddServiceSubmit}>
                            <div className="input-group-container">
                                <div>
                                    <label htmlFor="service-name">Service Title</label><br/>
                                    <input type="text" onBlur={handleBlur} name="service-name" placeholder="Enter Title" required/><br/>
                                </div>
                                <div>
                                    <label htmlFor="add-price">Add Price</label><br/>
                                    <input type="number" onBlur={handleBlur} name="add-price" placeholder="Enter Price" required/><br/>
                                </div>
                            </div>
                            <div className="input-group-container">
                                <div>
                                    <label htmlFor="description">Description</label><br/>
                                    <textarea name="description" onBlur={handleBlur} className="form-control p-3" id="" cols="37" rows="5" placeholder="Enter Description" required></textarea>
                                </div>
                                <div>
                                    <label htmlFor="cover-photo">Add Service Photo</label><br/>
                                    <input type="file" name="cover-photo" onChange={handleImageUpload} required/><br/>
                                </div>
                            </div>
                            <div className="text-end">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default AddService;