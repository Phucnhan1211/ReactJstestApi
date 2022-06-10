import '../pages/Home.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
const View = () => {
    const { id } = useParams();
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
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

    const handleClick = () => {
        navigate('/');
    };
    return (
        <>
            <h2> Detail User</h2>
            <table class="table table-bordered">
                <thead>
                    <tr className="danger">
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="disabled">
                        <td>{users.id}</td>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                    </tr>
                </tbody>
            </table>
            <div className="btn-back">
                <button onClick={handleClick} type="button" className="btn btn">
                    Back
                </button>
            </div>
        </>
    );
};

export default View;
