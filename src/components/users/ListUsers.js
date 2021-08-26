import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import User from "./User";
import { getUsers } from '../../store/actions/userActions';

export default function ListUsers({ user, setUser }) {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [user.id, dispatch]);

    return (
        <div class="mt-2 p-10 card bg-base-200">
            {
                users.length === 0 ?
                    (
                        <h1>There are no users.</h1>
                    )
                    :
                    (
                        <>
                            <h1>Users</h1>
                            <div class="overflow-x-auto">
                                <table class="table w-full table-zebra">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Age</th>
                                            <th>Created At</th>
                                            <th>Updated At</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users && users.map((user => {
                                            return (
                                                <User user={user}
                                                    key={user.id}
                                                    setUser={setUser}
                                                    users={users} />
                                            );
                                        }))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )
            }
        </div>
    );
}