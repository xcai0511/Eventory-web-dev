import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { logOutThunk } from '../../../services/auth-thunks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function ProfileContentComponent({ setIsEditingProfile, currentUser }) {

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
                        src={require(`../../images/event2.jpg`)}
                        className="img-fluid profile-banner"
                        alt="banner"
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
                            <span className="ms-2">Set your location</span>
                        )}
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon={icon({ name: 'cake-candles', style: 'solid' })}
                        />
                        <span className="ms-2 fw-bold">Birthday: </span>
                        <span className="">{dateOfBirth}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon={icon({ name: 'circle-info', style: 'solid' })}
                        />
                        <span className="ms-2 fw-bold">Bio: </span>
                        {currentUser.bio ? (
                            <span className="">{currentUser.bio}</span>
                        ) : (
                            <span className="">Set your bio</span>
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
