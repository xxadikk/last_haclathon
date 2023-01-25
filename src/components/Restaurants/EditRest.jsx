import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRestaurants } from '../context/restaurantsContext';

const EditRest = () => {
    const { editProduct, getOneRestaurants, oneProduct } = useRestaurants()
    const [autor, setAutor] = useState('')
    const [cuis, setCuis] = useState('')
    const [desc, setDesc] = useState('')
    const [img, setImg] = useState('')
    const [title, setTitle] = useState('')
    const [time, setTime] = useState('')
    const { id } = useParams()
    useEffect(() => {
        getOneRestaurants(id)
        oneProduct && up()
    }, [])
    function up() {
        setAutor(oneProduct.author)
        setCuis(oneProduct.cuisine)
        setDesc(oneProduct.description)
        setImg(oneProduct.image)
        setTitle(oneProduct.title)
        setTime(oneProduct.work_time)
        console.log(oneProduct.author);
    }
    console.log(oneProduct);
    function saveEdit() {
        let obj = {
            address: oneProduct.address,
            author: autor,
            cuisine: cuis,
            description: desc,
            id,
            image: img,
            rating: oneProduct.rating,
            title,
            work_time: time
        }
        editProduct(id, obj)
    }
    const navigate = useNavigate()
    return oneProduct && (
        <div style={{ marginTop: '100px' }}>
            <input type="text" onChange={(e) => setAutor(e.target.value)} value={autor} />
            <input type="text" onChange={(e) => setCuis(e.target.value)} value={cuis
            } />
            <input type="text" onChange={(e) => setDesc(e.target.value)} value={desc
            } />
            <input type="text" onChange={(e) => setImg(e.target.value)} value={img
            } />
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            <input type="text" onChange={(e) => setTime(e.target.value)} value={time} />
            <button onClick={() => { oneProduct && saveEdit(); navigate('/restaurants') }}>edit</button>
        </div>
    );
};

export default EditRest;