import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">Hello customer</h5>
                    <p className="card-text">Enjoy the best food</p>
                    <Link to={'/menu'}>
                    <button type='button' className="btn btn-primary">Explore Menu</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
