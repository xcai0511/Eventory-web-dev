import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const UserReviewsComponent = () => {
    return (
        <div className="container">
            {/* title */}
            <div className="border-bottom pb-2">
                <FontAwesomeIcon
                    icon={icon({ name: 'comment-dots', style: 'solid' })}
                    className="icon-20px"
                />
                <span className="h4 fw-bold ms-2">Reviews</span>
            </div>
            {/* content */}
            <div className="mt-4">No reviews yet</div>
        </div>
    );
};

export default UserReviewsComponent;
