import { computeHeadingLevel } from '@testing-library/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Add() {
    const [loading, setloading] = useState(false)
    const [userData, setUserData] = useState([])
    const [userSelected, setUserSelected] = useState([])
    const [itemsData, setItemsData] = useState([])

    useEffect(() => {
        axios.get('http://5.189.180.8:8010/header')
            .then((response) => {
                setUserData(response.data)
            })
        axios.get('http://5.189.180.8:8010/item')
            .then((response) => {
                setItemsData(response.data)
            })
    }, [])



    setTimeout(() => {
        setloading(true)

    }, 1000);

    const filterUserData = (e) => {
        let vrno = e.target.value
        const newData = userData.filter((data) => vrno == Number(data.vr_no))
        setUserSelected(newData)

    }
    const filterItemData = (e) => {
        let itemCode = e.target.value
        console.log(itemCode)
        const newData = itemsData.filter((data) => data.item_code === itemCode)
        console.log(newData)

    }


    if (loading) {
        return (
            <div className='my-3 container  shadow '>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Select Vr_No</label>
                        <select class="form-select form-select-sm" aria-label="Small select example" onChange={filterUserData}>
                            {
                                userData.map((data) => {
                                    return (
                                        <option value={data.vr_no} > {data.vr_no}</option>
                                    );

                                })

                            }
                        </select>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Select Item Code</label>
                        <select class="form-select form-select-sm" aria-label="Small select example" onChange={filterItemData}>
                            {
                                itemsData.map((data) => {
                                    return (
                                        <option value={data.item_code} > {data.item_code}</option>
                                    );

                                })
                            }
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3 form-check">
                        <button type="submit" className="btn btn-primary m-3 ">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
