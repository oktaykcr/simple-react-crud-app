import { toast } from "react-toastify";

const userReducer = (users = [], action) => {
    switch (action.type) {
        case "GET_USERS":
            return action.users.data;
        case "ADD_USER":
            toast.success("A user was added...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return [action.user.data, ...users];
        case "UPDATE_USER":
            toast.success("A user was updated...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return users.map((user) =>
                user.id === action.user.data.id ? action.user.data : user
            );
        case "DELETE_USER":
            toast.success("A user was deleted...", {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return users.filter((user) => user.id !== action.id);
        case "CLEAR_USERS":
            return [];
        default:
            return users;
    }
}

export default userReducer