import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState([]);
    const fetchData = async () => {
        try {
            const resp = await axios.get('http://localhost:3000/users');
            // console.log(resp)
            setUsers(resp.data)
        } catch (error) {
            console.log(error)
        }
    }
    //this effect will execute only one when the component load
    //Write Logic for delete User and trigger API
    const deleteUser=async (id)=>{
        try {
            const resp= await axios.delete(`http://localhost:3000/users/${id}`);
            if(resp.status===200){
                alert('user deleted successfully');
                setUsers(users.filter(user=>user.id!==id)); //this line will update state here, no need to trigger API
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return ( 
        <div>
            <h3>User's List</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Id</th><th>Name</th><th>Email</th><th>Address</th><th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user=>(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=>deleteUser(user.id)}>X</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
     );
}

export default Users;