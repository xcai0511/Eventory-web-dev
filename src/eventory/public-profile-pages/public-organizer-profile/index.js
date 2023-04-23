import PublicOrganizerProfileComponent from "./public-organizer-profile-component";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {findOrganizerByIdThunk} from "../../../services/anonymous-thunks";

const PublicOrganizerProfile = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const organizerData = useSelector((state) => state.anonymous.data);
    console.log("PublicOrganizerProfile organizerData");
    console.log(organizerData);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const organizerId = queryParams.get("id");
        console.log("PublicOrganizerProfile useEffect organizerId " + organizerId);
        dispatch(findOrganizerByIdThunk(organizerId));
    }, []);

    return (
        <>
            <PublicOrganizerProfileComponent organizerProfile={organizerData}/>
        </>

    );
};

export default PublicOrganizerProfile;