import React from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../Data/Product'

const Pageone = ({add,cart}) => {
    return (
        <>
        <Link to={'/menu'}>
        <button type="button" className="btn btn-danger">Main menu</button>
        </Link>
        <div className="row row-cols-1 row-cols-md-3 g-4">

            {
                Product.slice(4, Product.length).map(data =>
                    <div key={data.id} className="col">
                        <div className="card">
                            <img src={data.img} className="card-img-top" alt="..." height={'200px'} />
                            <div className="card-body">
                                <h5 className="card-title">{data.name}</h5>
                                <h3>Price:{data.price}</h3>
                                <button type="button" className="btn btn-primary" onClick={()=>add(data)}>Add</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </>
    )
}

export default Pageone
