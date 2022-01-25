import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const FormList = () => {
    const [datafind, setDataFind] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/formdata')
            .then(res => res.json())
            .then(data => setDataFind(data))
    }, [datafind])
    // console.log(datafind);
    AOS.init();
    return (
        <div className=' bg-dark text-white p-4'>
            <div class="my-3">
                <input placeholder='Form List' disabled type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            {
                datafind.length === 0 ? <div className='align-items-center '>
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    
                </div> :

                    <div className="row">

                        {
                            datafind.map((d, i) =>
                                <div className="col-md-6">
                                    <Card
                                        className='mt-3'
                                        data-aos="fade-down"
                                        data-aos-easing="linear"
                                        data-aos-duration="1000"
                                        style={{ width: '100%' }}>

                                        <Card.Body>
                                            <Card.Title className='fs-4 text-dark'> {d.name} </Card.Title>
                                            <Card.Text>
                                                <Link to={`/foodquery/${d?._id}`}>
                                                    <button className='btn btn-white fs-5'>
                                                        <p className='text-decoration-underline'>
                                                            {d.food}
                                                        </p>

                                                    </button>
                                                </Link>   
                                                <hr />

                                            </Card.Text>
                                            <Card.Text>
                                                {
                                                    d.na && <Link to={`/foodquerytwo/${d?._id}`}>
                                                        <button className='btn btn-outline-dark'>Reports</button>

                                                    </Link>

                                                }     
                                                <hr />

                                            </Card.Text>
                                        </Card.Body>

                                    </Card>
                                </div>
                            )
                        }
                    </div>
            }



        </div >
    );
};

export default FormList;