import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const SearchBar = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value
        if (keyword.length === 0 || keyword.length < 3) {
            toast.error("Please write something.")
        } else {
            e.currentTarget.keyword.value = '';
            navigate(`/results?keyword=${keyword}`)
        }
    }

    return (
        <div className='d-flex justify-content-center'>
            <form onSubmit={handleSubmit} className='d-flex align-items-center'>
                <label className='form-label mb-0 mx-2'>
                    <input type="text" placeholder='A Movie...' name='keyword'/>
                </label>
                <button type='submit' className='btn btn-secondary'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar