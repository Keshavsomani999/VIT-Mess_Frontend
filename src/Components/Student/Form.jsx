import React, { useState } from "react";
import Payment from "./Payment";
import "./Form.css"
import axios from "axios";

export default function Form() {

    

    const [order, setOrder] = useState({
      name:"",
      reg:"",
      block:"",
    })


    const orderChange = (e) =>{
      setOrder({...order,[e.target.name]:e.target.value});
    }

    const orderHandler = async(e) =>{
        e.preventDefault();
        const config = {
          headers: { "Content-Type": "application/json" },
        };
        try {
          await axios.post("https://vit-mess-backend.vercel.app/api/v1", order, config);
          setOrder({
            name: "",
            reg: "",
            block: "",
          });
        } catch (error) {
          console.error("Error posting order:", error);
        }
    }

  return (
    <div className="d-flex">
      <form className="container col-6 mt-3 p-4 " onSubmit={orderHandler}>
        <h1 className="text-center m-5"> Order Now</h1>

        <div className="bg-info-subtle p-4 rounded-2">
          <div className="mb-3 ">
            <label  className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="Name"
              value={order.name}
              aria-describedby="Name"
              onChange={orderChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Registration No :
            </label>
            <input type="text" name="reg" className="form-control" id="registration" value={order.reg} onChange={orderChange}/>
          </div>
          <div className="mb-3">
            <label  className="form-label">
              Block
            </label>
            <select
              className="form-select"
              id="block"
              aria-label="Default select example"
              name="block"
              onChange={orderChange}
            >
              <option value="Block 1" >Block 1</option>
              <option value="Block 2">Block 2</option>
              <option value="Block 3">Block 3</option>
            </select>
          </div>
          <span className="text-warning-emphasis">
            * Order is delivered at Campus
          </span>
          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-primary ">
              PAY - ₹50
            </button>
          </div>
        </div>
      </form>
      
    </div>
  );
}
