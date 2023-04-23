export const isCurrentUser = (currentUser) => {
    if (!currentUser) {
        return (
            <div>
                <div className="container mt-4">
                    <div>
                        <h3>No current user found.</h3>
                    </div>
                </div>
            </div>
        );
    }
};
export const isCurrentUserRoleUser = (currentUser) => {
    isCurrentUser(currentUser);
    isCurrentUserRole(currentUser.role, 'user');
};
export const isCurrentUserRoleOrganizer = (currentUser) => {
    isCurrentUser(currentUser);
    isCurrentUserRole(currentUser.role, 'organizer');
};
export const isCurrentUserRoleAdmin = (currentUser) => {
    isCurrentUser(currentUser);
    isCurrentUserRole(currentUser.role, 'admin');
};
export const isCurrentUserRole = (currentUserRole, neededRole) => {
    console.log('currentUserRole ' + currentUserRole);
    console.log('neededRole ' + neededRole);
    if (currentUserRole !== neededRole || currentUserRole !== neededRole) {
        console.log("Current user's role: " + currentUserRole);
        return (
            <div>
                <div className="container mt-4">
                    <div>
                        <h3>Unauthorized.</h3>
                    </div>
                </div>
            </div>
        );
    }
};
