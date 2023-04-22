
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import "./public-user-profile.css"

// TODO: XH -> XC this parameter should not be called currentUser. It is public profile for anonymous user.
const PublicUserProfileComponent = ({ currentUser }) => {
    console.log("PublicUserProfileComponent");
    console.log(JSON.stringify(currentUser));

    if (!currentUser) {
        return (
            <div className="container">
                NO USER FOUND. CATCH FOR EDGE CASE.
            </div>
        )
    }

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
                        className="position-absolute rounded-circle public-user-profile-avatar public-user-profile-avatar-location"
                        alt="profile"
                    />
                </div>
            </div>
            <div className="mx-auto">
                <div className="d-flex justify-content-between mt-3">
                    <div className="h3 fw-bold">
                        {currentUser.firstName} {currentUser.lastName}
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
            </div>
        </div>
    );
}
export default PublicUserProfileComponent;