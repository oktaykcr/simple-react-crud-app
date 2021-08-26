import { useState } from 'react';
import AddUser from './AddUser';
import ListUsers from './ListUsers';

export default function Users() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        age: 0
    });

    return (
        <>
            <AddUser user={user} setUser={setUser}/>
            <ListUsers user={user} setUser={setUser}/>
        </>
    );
}