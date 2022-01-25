import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const FoodQueryTwo = () => {
    const { id } = useParams()

    const [data, setData] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/single/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [id])

    AOS.init();
    return (
        <div className=' bg-dark p-5'>
            <div class="my-3">
                <input placeholder='Form List' disabled class="form-control" id="exampleInputPassword1" />
            </div>


            <Card style={{ width: '100%' }}>
                <table 
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                class="table">
                    <thead>
                        <tr>
                            <th className='fs-4' scope="col">Name</th>
                            <th className='fs-4' scope="col">Amount</th>
                            <th className='fs-4' scope="col">Made At</th>
                            <th className='fs-4' scope="col">About</th>

                        </tr>

                       
                        <tr>
                            <td className='fs-5 fw-normal'>{data.na }</td>
                            <td className='fs-5 fw-normal'>{data.am }</td>
                            <td className='fs-5 fw-normal'>{data.ma }</td>
                            <td className='fs-5 fw-normal'>{data.ab }</td>
                        </tr>
                    </thead>

                </table>
            </Card>



        </div >
    );
};

export default FoodQueryTwo;