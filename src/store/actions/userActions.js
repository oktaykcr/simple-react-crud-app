import axios from "axios";
import { url, setHeaders } from "../../api";
import { toast } from "react-toastify";

export const getUsers = () => {
    return (dispatch) => {
        axios
            .get(`${url}/my-users`, setHeaders())
            .then((users) => {
                dispatch({
                    type: "GET_USERS",
                    users
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const addUser = (newUser) => {
    return (dispatch) => {
        axios
            .post(`${url}/my-users`, { ...newUser }, setHeaders())
            .then((user) => {
                dispatch({
                    type: "ADD_USER",
                    user
                });
            })
            .catch((error) => {
                console.log(error.response);

                toast.error(error.response?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            });
    };
};

export const updateUser = (updatedUser, id) => {
    return (dispatch) => {
        axios
            .put(`${url}/my-users/${id}`, updatedUser, setHeaders())
            .then((user) => {
                dispatch({
                    type: "UPDATE_USER",
                    user
                });
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.response?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            });
    };
};

export const deleteUser = (id) => {
    return (dispatch) => {
        axios
            .delete(`${url}/my-users/${id}`, setHeaders())
            .then(() => {
                dispatch({
                    type: "DELETE_USER",
                    id
                });
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.response?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            });
    };
};