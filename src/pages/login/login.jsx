import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { USER_INFO_KEY } from '../../constants/common';
import { loginAPI } from '../../services/user';
import { setUserInfoAction } from '../../store/actions/user.reducer';

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [state, setState] = useState({
        taiKhoan: '',
        matKhau: '',
    })

    const handleInputChange = (evt) => {
        const { value, name } = evt.target;

        setState({ ...state, [name]: value });
    }

    const login = async (evt) => {
        evt.preventDefault();
        
        try {
            const result = await loginAPI(state);

            localStorage.setItem(USER_INFO_KEY, JSON.stringify(result.data.content));
            dispatch(setUserInfoAction(result.data.content));
            navigate('/');
        } catch (error) {
            alert("Sai thông tin đăng nhập")
        }

    }

    return (
        <div className="card w-25 mx-auto my-5">
            <div className="card-header bg-primary text-white">
                <h4>ĐĂNG NHẬP</h4>
            </div>
            <div className="card-body">
                <form onSubmit={login}>
                    <div action="" className="form-group">
                        <label>Username</label>
                        <input onChange={handleInputChange} name="taiKhoan" type="text" className='form-control' />
                    </div>
                    <div action="" className="form-group">
                        <label>Password</label>
                        <input onChange={handleInputChange} name="matKhau" type="text" className='form-control' />
                    </div>
                    <button className="btn btn-success w-100">Login</button>
                </form>
            </div>
        </div>
    )
}
