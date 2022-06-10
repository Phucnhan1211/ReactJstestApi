import '../pages/Home.scss';
import { useEffect, useState, forwardRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const List = (props, handleFocus) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function getAllUsers() {
            try {
                const users = await axios.get('https://62a044c5202ceef708693cce.mockapi.io/user');
                // console.log(students.data);
                setUsers(users.data);
            } catch (error) {
                console.log('Something is Wrong');
            }
        }
        getAllUsers();
    }, []);
    const handleDelete = async (id) => {
        await axios.delete(`https://62a044c5202ceef708693cce.mockapi.io/user/${id}`);
        var newuser = users.filter((item) => {
            // console.log(item);
            return item.id !== id;
        });
        setUsers(newuser);
        handleFocus();
    };

    return (
        <>
            <table className="table table-bordered">
                <thead>
                    <tr className="success">
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((users, i) => {
                        return (
                            <tr className="disabled" key={i}>
                                <td>{i + 1}</td>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <td>
                                    <Link to={`/view/${users.id}`}>
                                        <button type="button" className="btn btn-info">
                                            Info
                                        </button>
                                    </Link>
                                    <Link to={`/edit/${users.id}`}>
                                        <button type="button" className="btn btn-warning">
                                            Update
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(users.id)}
                                        type="button"
                                        className="btn btn-danger"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default forwardRef(List);
