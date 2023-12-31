import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
        });
        const json = await response.json();
        console.log(json);
        // console.log(json.success)

        if (!json.success) {
            
            alert('enter valid credentials')
        }

    }
    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit} method='post'>
                    <div className="mb-3">
                        <label htmlFor="Name" className="Form-label">Name</label>
                        <input type="text" className="Form-control" name='name' value={credentials.name} onChange={onChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="Form-label">Email address</label>
                        <input type="email" className="Form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} />
                        <div id="emailHelp" className="Form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="Form-label">Password</label>
                        <input type="password" className="Form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputAddress" className="Form-label">Address</label>
                        <input type="text" className="Form-control" id="exampleInputAddress" name='geolocation' value={credentials.address} onChange={onChange} />
                    </div>

                    <button type="submit" className="m-3 btn btn-primary">Submit</button>
                    <Link to='/login' className='m-3 btn btn-danger' >Already a User </Link>
                </form>
            </div>
        </>
    )
}

export default Signup
