import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const UserFavoritesComponent = () => {
    return (
        <div className="container">
            {/* title */}
            <div className="border-bottom pb-2">
                <FontAwesomeIcon
                    icon={icon({ name: 'heart', style: 'solid' })}
                    className="icon-20px"
                />
                <span className="h4 fw-bold ms-2">Favorites</span>
            </div>
            {/* content */}
            <div className="mt-4">No favorites yet</div>
        </div>
    );
};

export default UserFavoritesComponent;
