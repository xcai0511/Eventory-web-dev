import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const AccountSecurityComponent = () => {
    const currentUser = useSelector((state) => state.auth.currentUser);

    return (
        <div className="container">
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
                        htmlFor="new password"
                        className="form-label profile-label-font">
                        Current Password
                    </label>
                    <textarea
                        className="form-control border-0 p-0 profile-textarea"
                        id="new password"
                        rows="2"
                        placeholder="enter current password"
                        style={{ boxShadow: 'none' }}></textarea>
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
                    <textarea
                        className="form-control border-0 p-0 profile-textarea"
                        id="new password"
                        rows="2"
                        placeholder="enter new password"
                        style={{ boxShadow: 'none' }}></textarea>
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
                    <textarea
                        className="form-control border-0 p-0 profile-textarea"
                        id="bio"
                        rows="2"
                        placeholder="confirm new password"
                        style={{ boxShadow: 'none' }}></textarea>
                </div>
            </div>
            {/* add more input fields here as needed */}
            <div className="row mt-3 mx-auto d-flex justify-content-between">
                <button className="btn col-3">
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
