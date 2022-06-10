import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [users, setUsers] = useState({
        name: '',
        email: '',
    });
    useEffect(() => {
        async function getStudent() {
            try {
                const users = await axios.get(`https://62a044c5202ceef708693cce.mockapi.io/user/${id}`);
                // console.log(student.data);
                setUsers(users.data);
            } catch (error) {
                console.log('Something is Wrong');
            }
        }
        getStudent();
    }, [id]);

    function onInputChange(e) {
        setUsers({
            ...users,
            [e.target.name]: e.target.value,
        });
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        try {
            await axios.put(`https://62a044c5202ceef708693cce.mockapi.io/user/${id}`, users);
            navigate('/');
        } catch (error) {
            console.log('Something is Wrong');
        }
    }
    const handleClick = () => {
        navigate('/');
    };
    return (
        <>
            <h2> Update User</h2>
            <form className="ui-form">
                <div className="field">
                    <label>Name: </label>
                    <input
                        type="text"
                        className="input"
                        name="name"
                        value={users.name}
                        onChange={(e) => onInputChange(e)}
                    ></input>
                </div>
                <div className="field">
                    <label>Email: </label>
                    <input
                        type="text"
                        className="input"
                        name="email"
                        value={users.email}
                        onChange={(e) => onInputChange(e)}
                    ></input>
                </div>
            </form>
            <div className="btn-back">
                <button type="button" onClick={(e) => onFormSubmit(e)} className="btn btn-primary">
                    Update
                </button>
                <button type="button" onClick={handleClick} className="btn btn">
                    Back
                </button>
            </div>
        </>
    );
};
export default Edit;
