import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router";
import {updateEventByEventIdThunk,} from "../../services/organizerEvent-thunks";

const EditEventForm = () => {
    let eventData = useSelector(state => state.event.event);
    let eventStatus = useSelector(state => state.event.status);
    let eventError = useSelector(state => state.event.error);
    console.log("edit-event " + JSON.stringify(eventData));
    let [event, setEvent] = useState(eventData);

    let [nameInput, setNameInput] = useState(event?.name ?? '');
    const eventDate = new Date(event?.date).toLocaleDateString('en-CA');
    let [dateInput, setDateInput] = useState(eventDate);
    const eventTime = new Date(event?.time).toLocaleTimeString('en-US', {
        timeZone: 'America/New_York', hour12: false,
    });
    let [timeInput, setTimeInput] = useState(eventTime);
    let [addressInput, setAddressInput] = useState(event?.address ?? '');
    let [cityInput, setCityInput] = useState(event?.city ?? '');
    let [postalCodeInput, setPostalCodeInput] = useState(event?.postalCode ?? '');
    let [descriptionInput, setDescriptionInput] = useState(event?.description ?? '');

    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const eventId = (paths[2]) ? paths[2] : '';

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const saveEventClickHandler = async (event) => {
        event.preventDefault();

        const updatedEvent = {
            name: nameInput,
            date: dateInput,
            time: timeInput,
            address: addressInput,
            city: cityInput,
            postalCode: postalCodeInput,
            description: descriptionInput
        }
        console.log(JSON.stringify(updatedEvent));
        console.log(eventId);
        await dispatch(updateEventByEventIdThunk({eventId, updatedEvent}));
        navigate("/home");
    };

    const nameChangeHandler = (event) => {
        const updatedName = event.target.value;
        setNameInput(updatedName);
    }

    const dateChangeHandler = (event) => {
        const updatedDate = event.target.value;
        setDateInput(updatedDate);
    }

    const timeChangeHandler = (event) => {
        const updatedTime = event.target.value;
        setTimeInput(updatedTime);
    }

    const addressChangeHandler = (event) => {
        const updatedAddress = event.target.value;
        setAddressInput(updatedAddress);
    }

    const cityChangeHandler = (event) => {
        const updatedCity = event.target.value;
        setCityInput(updatedCity);
    }

    const postalCodeChangeHandler = (event) => {
        const updatedPostalCode = event.target.value;
        setPostalCodeInput(updatedPostalCode);
    }

    const descriptionChangeHandler = (event) => {
        const updatedDescription = event.target.value;
        setDescriptionInput(updatedDescription);
    }

    return (
        <div className="container mt-3">
            {(!eventData) && (<h4>Something went wrong. Please try again later. Do not refresh while you are on the Edit Event page.</h4>) }
            {(eventStatus === 'pending') && (<h4>Loading</h4>)}
            {(eventStatus === 'fulfilled') && (<>
                <div className="mb-3">
                    <h4>Edit Your Event</h4>
                    <p className="text-muted">Please update any fields below regarding your event.</p>
                </div>
                <form>
                    <div className="form-group mb-3">
                        <label htmlFor="name" className="mb-1">Name
                            <span className="text-danger"> *</span>
                        </label>
                        <input type="text" className="form-control" id="name"
                               value={nameInput}
                               onChange={nameChangeHandler}
                               required/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="date" className="mb-1">Date
                            <span className="text-danger"> *</span>
                        </label>
                        <input type="date" className="form-control" id="date"
                               value={dateInput}
                               onChange={dateChangeHandler}
                               required/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="time" className="mb-1">Time
                            <span className="text-danger"> *</span>
                        </label>
                        <input type="time" className="form-control" id="time"
                               value={timeInput}
                               onChange={timeChangeHandler}
                               required/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="address" className="mb-1">Address
                            <span className="text-danger"> *</span>
                        </label>
                        <input type="text" className="form-control" id="address"
                               value={addressInput}
                               onChange={addressChangeHandler}
                               required/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="city" className="mb-1">City
                            <span className="text-danger"> *</span>
                        </label>
                        <input type="text" className="form-control" id="city"
                               value={cityInput}
                               onChange={cityChangeHandler}
                               required/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="zipCode" className="mb-1">Zip Code
                            <span className="text-danger"> *</span>
                        </label>
                        <input type="text" className="form-control" id="zipCode"
                               value={postalCodeInput}
                               onChange={postalCodeChangeHandler}
                               required/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="description" className="mb-1">Description
                            <span className="text-danger"> *</span>
                        </label>
                        <textarea className="form-control" id="description" rows="3"
                                  value={descriptionInput}
                                  onChange={descriptionChangeHandler}
                                  required></textarea>
                    </div>
                    <div className="button-container">
                        <button className="btn btn-primary" type="button" onClick={saveEventClickHandler}>
                            Submit
                        </button>
                        <Link to="/home" className="text-decoration-none ms-3">
                            <span className="text-danger text-decoration-none ms-3">Cancel</span>
                        </Link>
                    </div>
                </form>
            </>)}
        </div>
    );
};

export default EditEventForm;
