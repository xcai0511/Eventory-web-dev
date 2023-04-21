import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { logOutThunk } from '../../../services/auth-thunks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function ProfileContentComponent({ setIsEditingProfile, currentUser }) {
    // console.log('Profile Content: ------ ' + JSON.stringify(currentUser));

    // console.log(JSON.stringify(currentUser));

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // get only the current year, month and day
    const dateOfBirth = currentUser.dateOfBirth.slice(0, 10);

    const editProfileHandler = () => {
        setIsEditingProfile(true);
    };

    const logOutHandler = () => {
        localStorage.removeItem('currentUser');
        dispatch(logOutThunk());
        navigate('/home');
        window.location.reload();
    };

    return (
        <div className="container">
            {/* Upper banner and avatar  */}
            <div className="position-relative">
                <div className="d-flex justify-content-center">
                    <img
                        // TODO: change the image
                        src={require(`../../images/background.jpg`)}
                        className="img-fluid profile-banner"
                        alt="banner"
                    />
                    <img
                        // TODO: change the image
                        src={require(`../../images/default-profile-photo.jpg`)}
                        className="position-absolute rounded-circle profile-avatar profile-avatar-location"
                        alt="profile"
                    />
                </div>
            </div>
            <div className="mx-auto">
                <div className="d-flex justify-content-between mt-3">
                    <div className="h3 fw-bold">
                        {currentUser.firstName} {currentUser.lastName}
                    </div>
                    <div>
                        <button className="btn" onClick={editProfileHandler}>
                            Edit Profile
                        </button>
                    </div>
                </div>
                <div className="me-3 mt-2">
                    <div>
                        <FontAwesomeIcon
                            icon={icon({ name: 'location-dot', style: 'solid' })}
                        />
                        <span className="ms-2 fw-bold">Location: </span>
                        {currentUser.location ? (
                            <span>{currentUser.location}</span>
                        ) : (
                            <span className="ms-2">unknown</span>
                        )}
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon={icon({ name: 'cake-candles', style: 'solid' })}
                        />
                        <span className="ms-2 fw-bold">Birthday: </span>
                        <span className="ms-2"> Born {dateOfBirth}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon={icon({
                                name: 'calendar-days',
                                style: 'regular',
                            })}
                        />
                        <span className="ms-2 fw-bold">Joined at: </span>
                        <span className="ms-2">April 2009</span>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon={icon({ name: 'circle-info', style: 'solid' })}
                        />
                        <span className="ms-2 fw-bold">Bio: </span>
                        {currentUser.bio ? (
                            <span className="ms-2">{currentUser.bio}</span>
                        ) : (
                            <span className="ms-2">No bio</span>
                        )}
                    </div>
                </div>
                <button className="btn d-grid col-6 mx-auto mt-5" onClick={logOutHandler}>
                    Logout
                </button>
            </div>
        </div>
    );
}
export default ProfileContentComponent;
