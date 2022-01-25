import React, { useState } from 'react';
import './Home.css'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const GenarateForm = () => {
    const [firstbutton, setfirstbutton] = useState(false)
    const [secondbutton, setsecondbutton] = useState(false)
    const [thirdbutton, setthirdbutton] = useState(false)
    const [fourbutton, setfourbutton] = useState(false)
    const history = useHistory()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/formdata', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                history.push('/home')
            })
    };


    AOS.init();
    return (
        <div className=' bg-dark p-4'>
            <div className="row">
                <div className="col-md-6">
                    <form
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label text-white">Form Name</label>
                            <input  {...register("food")} class="form-control" />
                        </div>


                        {
                            firstbutton ?
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" class="form-label text-white">Text</label>
                                    <input placeholder='Name' {...register("name")} class="form-control" />
                                </div>
                                : null
                        }
                        {
                            secondbutton ?
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" class="form-label text-white">Number</label>
                                    <input placeholder='Number' {...register("amount")} class="form-control" />
                                </div>
                                : null
                        }
                        {
                            thirdbutton ?
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" class="form-label text-white">Date</label>
                                    <input placeholder='Date' {...register("made")} class="form-control" />
                                </div>
                                : null
                        }
                        {
                            fourbutton ?
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" class="form-label text-white">Text Area</label>
                                    <input placeholder='Text Area' {...register("about")} class="form-control" />
                                </div>
                                : null
                        }

                        {
                            firstbutton ?

                                <input className='btn btn-outline-primary' type="submit" /> : null

                        }
                    </form>

                </div>
                <div className="col-md-6">
                    <div className="buttonstyle ">
                        <div
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"

                            className="justify-content-center align-items-center">


                            <button onClick={() => setfirstbutton(true)} className='btn btn-outline-primary mb-3'>Text</button>
                            <br />
                            <button onClick={() => setsecondbutton(true)} className='btn btn-outline-primary  '>Number</button>
                            <br />

                            <button onClick={() => setthirdbutton(true)} className='btn btn-outline-primary my-3'>Date</button>
                            <br />

                            <button onClick={() => setfourbutton(true)} className='  btn btn-outline-primary'>Text Area</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default GenarateForm;