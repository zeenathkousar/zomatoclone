import React from 'react'

function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:'contain !important'}}>
                <div className="carousel-inner">
                    <div className="carousel-caption d-none d-md-block" style={{zIndex:"10"}}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success  text-white" type="submit">Search</button>
                        </form>

                    </div>

                    <div className="carousel-item active">
                        <img src="/img1.jpg" className="d-block w-100" alt="image1" style={{filter: "brightness(40%)", height:"70vh"}} />

                    </div>
                    <div className="carousel-item">
                        <img src="/img2.jpg" className="d-block w-100" alt="image2" style={{filter: "brightness(40%)" , height:"70vh"}}/>
                    </div>
                    <div className="carousel-item">
                        <img src="/img3.jpg" className="d-block w-100" alt="image3" style={{filter: "brightness(40%)" , height:"70vh"}}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
