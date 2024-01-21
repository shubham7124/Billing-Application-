import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Tablelist.css"
import Pirnting from './Pirnting'
import { Link } from 'react-router-dom'

export default function Tablelist({ data, products }) {

    const [toalAmount, setTotalamount] = useState(0)
    const [filterData, setFilterDatta] = useState([])
    const [loading,setloading]=useState(false)
    const filterData1 = products.filter((product) => product.vr_no === data.vr_no)
            
    const calculateAmount = (quantity, rate) => {
        return quantity * rate;
    };

    const updateTotalAmount = () => {
        const newTotal = filterData.reduce(
            (accumulator, product) =>
                accumulator + calculateAmount(Number(product.qty), Number(product.rate)),
            0
        );

        setTotalamount(newTotal);
    };
    useEffect(() => {
        setFilterDatta(filterData1)
    }, [])

    useEffect(() => {
        updateTotalAmount();
    },)

    const removeButton = (sr_no) => {
        const removedData = filterData.filter((item) => item.sr_no !== sr_no)
        setFilterDatta(removedData)

    }



    const dateString = data.vr_date;
    const dateObject = new Date(dateString);

    // Options for formatting the date
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };

   setTimeout(() => {
       setloading(true)
   }, 1000);

    // Format the date using toLocaleDateString
    const formattedDate = dateObject.toLocaleDateString('en-US', options);


   
     if(loading){
        return (
            <div>
                <table className={toalAmount > 0 ? " table table-striped  my-lg-3 green-shadow rounded my-5   " : "table table-striped  my-lg-5 red-shadow rounded my-5   "}>
                    <thead>
                        <tr className='border text-center mx-4 my-2 py-3   '>
                            <td colSpan={6}>
                                <div className="container">
    
                                    <div className='row  ' >
                                        <div className="col-4 ">
                                            <label htmlFor="varno" style={{ fontWeight: "bold" }}>Vr No:</label> <label htmlFor="" id="vrNo"  >{data.vr_no}</label>
                                        </div>
                                        <div className="col-4">
                                            <label htmlFor="vardate" style={{ fontWeight: "bold" }}>Vr Date:</label> <label htmlFor="">{formattedDate}</label>
                                        </div>
                                        <div className="col-4">
                                            <label htmlFor="status" style={{ fontWeight: "bold" }}>Status:</label> <label htmlFor="">{data.status}</label>
                                        </div>
                                    </div>
    
                                    <div className='row  ' >
                                        <div className="col-6">
                                            <label htmlFor="Accno" style={{ fontWeight: "bold" }}>Acc No:</label> <label htmlFor="">{data.ac_name}</label>
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="Acamt" style={{ fontWeight: "bold" }}>Ac Amt:</label> <label htmlFor="">{data.ac_amt}</label>
                                        </div>
    
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr >
                            <th style={{ backgroundColor: "#635E5D", color: "white" }}>Sr.No</th>
                            <th style={{ backgroundColor: "#635E5D", color: "white" }}>Item Code</th>
                            <th style={{ backgroundColor: "#635E5D", color: "white" }}>Item Name</th>
                            <th style={{ backgroundColor: "#635E5D", color: "white" }}>Qty</th>
                            <th style={{ backgroundColor: "#635E5D", color: "white" }}>Rate</th>
                            <th style={{ backgroundColor: "#635E5D", color: "white" }}>Amount</th>
                            <th style={{ backgroundColor: "#635E5D", color: "white" }}>Remove</th>
    
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterData.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.sr_no}</td>
                                        <td>{item.item_code}</td>
                                        <td>{item.item_name}</td>
                                        <td>{item.qty}</td>
                                        <td>{item.rate}</td>
                                        <td >{calculateAmount(Number(item.qty), Number(item.rate))}</td>
                                        <td>
                                            {
                                           
                                            toalAmount>0 ? <button className='btn btn-danger ' onClick={() => removeButton(item.sr_no)} style={{ width: "100px" }}>Remove</button>
                                                          :"No Item Buy"
                                            }
                                        </td>
    
                                    </tr>
                                );
                            })
                        }
                        <tr>
                            <th colSpan={5} className='text-end ' >Total :  </th>
                            <th>{toalAmount}/-</th>
                            {/* <td>
                                { toalAmount>0 ? <button className='btn btn-primary ' style={{ width: "100px" }} >print</button>:"" }
                               
                                
                            </td> */}
                        </tr>
    
                    </tbody>
    
                </table>
            </div>
        )
     }
}
