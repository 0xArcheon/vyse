import React from 'react'
import "./categories.css"
import { Link } from "react-router-dom"

function categories() {
    return (
        <div className="container">
            <div className="title" >Top Categories</div>
            <div className="categories">
                <div className="col">
                    <div className="row">
                        <img
                            src="/images/categories/cars.jpg"
                            alt=""
                        />
                        <button>
                            <Link className="link" to="/products/1">
                                Cars
                            </Link>
                        </button>
                    </div>
                    <div className="row">
                        <img
                            src="/images/categories/bikes.jpg" alt=""
                        />
                        <button>
                            <Link to="/products/1" className="link">
                                Bikes
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        {" "}
                        <img
                            src="/images/categories/furniture.jpg"
                            alt=""
                        />
                        <button>
                            <Link to="/products/1" className="link">
                                Furniture
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="col col-l">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <img
                                    src="/images/categories/phones.jpg"
                                    alt=""
                                />
                                <button>
                                    <Link to="/products/1" className="link">
                                        Phones
                                    </Link>
                                </button>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                {" "}
                                <img
                                    src="/images/categories/gadgets.jpg"
                                    alt=""
                                />
                                <button>
                                    <Link to="/products/1" className="link">
                                        Accessories
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <img
                            src="/images/categories/properties.jpg"
                            alt=""
                        />
                        <button>
                            <Link to="/products/1" className="link">
                                Properties
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default categories