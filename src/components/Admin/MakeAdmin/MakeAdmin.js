import React, { useState } from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const MakeAdmin = () => {
    const [adminInfo, setAdminInfo] = useState({email: ''})
    const handleAdminBlur = (event) => {
        const inputValue = event.target.value
        const inputName = event.target.name
        if(inputName === 'email'){
            const adminEmail = inputValue
            const newAdmin = {...adminInfo}
            newAdmin.email = adminEmail
            setAdminInfo(newAdmin)
        }
    }
    const handleMakeAdminSubmit = (e) => {
        fetch('https://secret-forest-02226.herokuapp.com/addAdmin', {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(adminInfo)
        })
        .then(res => {
            if(res){
                alert('Admin has been added')
            }
        })
        .catch(err => console.log(err))

        e.preventDefault()
    }
    return (
        <div className="row">
            <AdminSideBar></AdminSideBar>
            <div className="col-md-6">
                <h3 className="mt-3">Make Admin</h3>
                <form onSubmit={handleMakeAdminSubmit}>
                    <div className="form-group p-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" onBlur={handleAdminBlur} name="email" className="form-control p-3" placeholder="Email Address" required/>
                        <button type="submit" className="btn btn-primary">Make Admin</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;