// TODO: Assignment: ANYONE. Change the look of this organizer public profile page.

const PublicOrganizerProfileComponent = ({organizerProfile}) => {
    // TODO: XH - Check for null scenario.
    console.log("PublicOrganizerProfileComponent organizerProfile");
    console.log(organizerProfile);

    if (!organizerProfile) {
        return (
            <div className="container">
                No organizer found.
            </div>
        )
    }

    return (
        <div className="container">
            <div>Name: {organizerProfile.name}</div>
            <div>Bio: {organizerProfile.bio}</div>
            <div>Contact: {organizerProfile.username}</div>
            <div>Events: {JSON.stringify(organizerProfile.events)}</div>
        </div>
    )
};

export default PublicOrganizerProfileComponent;