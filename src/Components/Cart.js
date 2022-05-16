import React, { useState, useEffect } from "react";

const Cart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
    };

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.price));
        setPrice(ans);
    };

    useEffect(() => {
        handlePrice();
    });

    return (
        <>
            <div className="alert alert-primary" role="alert">
                <h2>Total price is</h2> <h1>{price}</h1>
            </div>



            <div className="card mb-3" style={{ maxWidth: '540px' }}>

                {cart.map((item) => (
                    <div key={item.id} className="row g-0">
                        <div className="col-md-4">
                            <img src={item.img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <button className="btn btn-primary" type="submit" onClick={() => handleChange(item, -1)}>-</button>
                                <button type="button" className="btn btn-outline-success" disabled>{item.amount}</button>
                                <button className="btn btn-primary" type="submit" onClick={() => handleChange(item, 1)}>+</button>
                                <h3>{item.price}</h3>
                                <button type="button" className="btn btn-danger" onClick={() => handleRemove(item.id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          
        </>
    );
};

export default Cart;