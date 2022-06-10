import List from '../users/List';
import axios from 'axios';
import { useState, useRef } from 'react';
import './Home.scss';
const Home = () => {
    const [users, setUsers] = useState({
        name: '',
        email: '',
    });
    const fref = useRef();
    const [status, setStatus] = useState();
    function onInputChange(e) {
        setUsers({
            ...users,
            [e.target.name]: e.target.value,
        });
    }
    const handleFocus = () => {
        fref.current.focus();
    };
    async function onFormSubmit(e) {
        e.preventDefault();
        try {
            await axios.post(`https://62a044c5202ceef708693cce.mockapi.io/user`, users);
            setStatus(true);
        } catch (error) {
            console.log('Something is Wrong');
        }
    }
    if (status) {
        return <Home />;
    }
    return (
        <>
            <h2> Test Api Users</h2>
            <form className="ui-form">
                <div className="field">
                    <label>Name: </label>
                    <input
                        className="input"
                        onChange={(e) => onInputChange(e)}
                        type="text"
                        name="name"
                        placeholder="Name"
                        ref={fref}
                        autoFocus
                    ></input>
                </div>
                <div className="field">
                    <label>Email:</label>
                    <input
                        className="input"
                        onChange={(e) => onInputChange(e)}
                        type="text"
                        name="email"
                        placeholder="Email"
                    ></input>
                </div>
                <div className="btn-add">
                    <button onClick={(e) => onFormSubmit(e)} type="buttonaction" className="btn btn-success">
                        +Add
                    </button>
                </div>
            </form>
            <div>
                <List ref={handleFocus} />
            </div>
        </>
    );
};

export default Home;
