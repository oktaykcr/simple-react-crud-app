import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../../store/actions/userActions';

export default function AddUser({ user, setUser }) {

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user.id) {
            const id = user.id;
            const updatedUser = {
                firstName: user.firstName,
                lastName: user.lastName,
                age: user.age,
            }

            dispatch(updateUser(updatedUser, id));

        } else {
            const newUser = {
                ...user,
                date: new Date()
            }

            dispatch(addUser(newUser));
        }
        setUser({ firstName: '', lastName: '', age: 0 });
    }

    return (
        <>
            <div class="p-10 card bg-base-200">
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <div class="flex space-x-4">
                        <div class="flex-1 form-control">
                            <label class="label">
                                <span class="label-text">First name</span>
                            </label>
                            <input value={user.firstName} onChange={(e) => setUser({...user, firstName: e.target.value})} type="text" placeholder="First name" class="input input-bordered" />
                        </div>
                        <div class="flex-1 form-control">
                            <label class="label">
                                <span class="label-text">Last name</span>
                            </label>
                            <input value={user.lastName} onChange={(e) => setUser({...user, lastName: e.target.value})} type="text" placeholder="Last name" class="input input-bordered" />
                        </div>
                        <div class="flex-1 form-control">
                            <label class="label">
                                <span class="label-text">Age</span>
                            </label>
                            <input value={user.age} onChange={(e) => setUser({...user, age: e.target.value})} type="number" placeholder="Age" class="input input-bordered" />
                        </div>

                    </div>
                    <div class="flex justify-end mt-4">
                        <button class="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"></path>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}