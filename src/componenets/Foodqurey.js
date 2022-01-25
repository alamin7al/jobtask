import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useHistory } from 'react-router-dom';

const Foodqurey = () => {
    const { id } = useParams()
    const history = useHistory()

    const [data, setData] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/formdata/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [id])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/single', {
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
    }
    AOS.init();
    return (
        <div className='bg-dark p-3'>
            <form
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"

                onSubmit={handleSubmit(onSubmit)}>
                <div className="w-50 h-50 mx-auto">
                    <div class="my-3">
                        <input readOnly defaultValue={data.food} class="form-control" />

                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label text-white"> {data.name} </label>
                        <input {...register("na", { required: true })} class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label text-white"> {data.amount} </label>
                        <input type='num' {...register("am", { required: true })} class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label text-white"> {data.made} </label>
                        <input type='date' {...register("ma", { required: true })} class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label text-white"> {data.about} </label>
                        <textarea
                            {...register("ab")}
                            class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

                    </div>
                    <input className='btn btn-outline-primary ' type="submit" />

                </div>

            </form>
        </div>
    );
};

export default Foodqurey;