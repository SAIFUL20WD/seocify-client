import React, { useState } from 'react';
import DashBoardSideBar from '../DashBoardSideBar/DashBoardSideBar';

const Review = () => {
    const [review,  setReview] = useState({
        name: '',
        company: '',
        quote: ''
    })

    const handleReviewBlur = (event) => {
        const newReview = {...review}
        newReview[event.target.name] = event.target.value
        setReview(newReview)
    }

    const handleReviewSubmit = (e) => {
        fetch('https://secret-forest-02226.herokuapp.com/addReview', {
        method: "POST",
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(review)
        })
        .then(res => {
            if(res){
                alert('Review has been Submitted')
            }
        })
        .catch(err => console.log(err))

        e.preventDefault()
    }
    return (
        <div className="row">
            <DashBoardSideBar></DashBoardSideBar>
            <div className="col-md-6">
                <h2 className="mt-4">Review</h2>
                <div className="">
                    <form onSubmit={handleReviewSubmit}>
                        <div className="form-group p-2">
                            <input type="text" onBlur={handleReviewBlur} name="name" className="form-control p-3" placeholder="Your Name" required />
                        </div>
                        <div className="form-group p-2">
                            <input type="text" onBlur={handleReviewBlur} name="company" className="form-control p-3" placeholder="Company's Name" required/>
                        </div>
                        <div className="form-group p-2">
                            <textarea onBlur={handleReviewBlur} name="quote" className="form-control p-3" id="" cols="20" rows="5" placeholder="Description"></textarea>
                        </div>
                        <div className="form-group text-start p-2">
                            <button type="submit" className="btn btn-primary px-5">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;