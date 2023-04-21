import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { resetUserPasswordThunk } from '../../../services/users-thunk';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';

const AccountSecurityComponent = () => {
    // const currentUser = useSelector((state) => state.auth.currentUser);
    const updateStatus = useSelector((state) => state.user.userStatus);
    const userData = useSelector((state) => state.user.userData);

    // const updatedError = useSelector((state) => state.user.error);
    const [pwUpdateStatus, setPwUpdateStatus] = useState('');
    const location = useLocation();
    const [successToastShown, setSuccessToastShown] = useState(null);
    const [currentPasswordInput, setCurrentPassword] = useState('');
    const [newPasswordInput, setNewPassword] = useState('');
    const [confirmNewPasswordInput, setConfirmNewPassword] = useState('');

    const dispatch = useDispatch();

    const currentPasswordChangeHandler = (event) => {
        setCurrentPassword(event.target.value);
    };

    const newPasswordChangeHandler = (event) => {
        setNewPassword(event.target.value);
    };

    const confirmPasswordChangeHandler = (event) => {
        setConfirmNewPassword(event.target.value);
    };

    const showErrorToast = (message) => {
        toast.error(message, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    const showSuccessToast = (message) => {
        toast.success(message, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    useEffect(() => {
        if (updateStatus === 'updated' && !successToastShown) {
            showSuccessToast('Password has been updated');
            // setSuccessToastShown(true);
            // console.log(successToastShown);
        } else if (updateStatus === 'rejected') {
            showErrorToast('Invalid password');
        }
    }, [updateStatus, successToastShown]);

    useEffect(() => {
        setPwUpdateStatus(updateStatus);
    }, [location, updateStatus]);

    const saveHandler = async (event) => {
        event.preventDefault();
        if (newPasswordInput !== confirmNewPasswordInput) {
            showErrorToast('Unmatched new password. Please try again.');
            return;
        } else if (currentPasswordInput === newPasswordInput) {
            showErrorToast('New password cannot be the same as current password.');
            return;
        }
        try {
            await dispatch(
                resetUserPasswordThunk({
                    oldPassword: currentPasswordInput,
                    newPassword: newPasswordInput,
                })
            ).then(() => {
                // console.log(userData);
                // showSuccessToast(userData);
                dispatch({ type: 'RESET_USER_STATUS' }); // reset updateStatus
                // console.log('update status: ' + updateStatus);
                // if (updateStatus === 'updated') {
                //     showSuccessToast('Password has been updated');
                // }
                // if (updateStatus === 'rejected') {
                //     showErrorToast(updatedError.message);
                // }
            });
        } catch (error) {
            showErrorToast(error.message);
        }
    };

    return (
        <div className="container">
            <p>Update Status: {pwUpdateStatus}</p>
            <div className="border-bottom pb-2">
                <FontAwesomeIcon
                    icon={icon({ name: 'shield-halved', style: 'solid' })}
                    className="icon-20px"
                />
                <span className="h4 fw-bold ms-2">Account Security</span>
            </div>

            {/* enter current password */}
            <div className="card mt-4 border">
                <div className="card-body">
                    <label
                        htmlFor="current password"
                        className="form-label profile-label-font">
                        Current Password
                    </label>
                    <input
                        // type="password"
                        className="form-control border-0 p-0 profile-textarea"
                        id="current password"
                        rows="2"
                        placeholder="enter current password"
                        onChange={currentPasswordChangeHandler}
                        style={{ boxShadow: 'none' }}></input>
                </div>
            </div>
            {/* enter new password */}
            <div className="card mt-4 border">
                <div className="card-body">
                    <label
                        htmlFor="new password"
                        className="form-label profile-label-font">
                        New Password
                    </label>
                    <input
                        className="form-control border-0 p-0 profile-textarea"
                        id="new password"
                        rows="2"
                        placeholder="enter new password"
                        onChange={newPasswordChangeHandler}
                        style={{ boxShadow: 'none' }}></input>
                </div>
            </div>
            {/* <!-- change bio --> */}
            <div className="card mt-4 border">
                <div className="card-body">
                    <label
                        htmlFor="confirm new password"
                        className="form-label profile-label-font">
                        Confirm New Password
                    </label>
                    <input
                        className="form-control border-0 p-0 profile-textarea"
                        id="bio"
                        rows="2"
                        placeholder="confirm new password"
                        onChange={confirmPasswordChangeHandler}
                        style={{ boxShadow: 'none' }}></input>
                </div>
            </div>
            <div className="row mt-3 mx-auto d-flex justify-content-between">
                <button className="btn col-3" onClick={saveHandler}>
                    <span className="mx-3">Save</span>
                </button>
                <button className="btn col-3">
                    <span className="mx-3">Cancel</span>
                </button>
            </div>
        </div>
    );
};

export default AccountSecurityComponent;