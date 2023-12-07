import React from 'react'

const Card = () => {
    return (
        <div>
            <div className="card mt-3 p-1" style={{ "width": "19rem", "maxHeight": '360px' }}>
                <img src="/img1.jpg" className="card-img-top " alt="cardimg" style={{"height" : "12rem" , "padding":'1rem'}} />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is some important text.</p>
                    <div className="container w-100">
                        <select name="" id="" className='d-inline m-2 h-100  bg-success rounded'>
                            {
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option value={i + 1} key={i + 1}>{i + 1}</option>
                                    )
                                })
                            }
                        </select>
                        <select name="" id="" className='d-inline m-2 h-100  bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>

                        </select>
                        <div className='d-inline h-100 fs-5'>
                            Total Price
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card
