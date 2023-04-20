import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router";
import {fetchEventByEventIdThunk, updateEventByEventIdThunk,} from "../../services/organizerEvent-thunks";

const EditEventForm = () => {
    // let [eventData, setEventData] = useState(null);
    let eventData = useSelector(state => state.events.events);
    console.log("edit-event " + JSON.stringify(eventData));
    let [event, setEvent] = useState(eventData);
    console.log("event" + event);
    let [nameInput, setNameInput] = useState(event.name);
    let [dateInput, setDateInput] = useState(event.date);
    // TODO: this needs to be changed to EST when display.
    let [timeInput, setTimeInput] = useState(event.time);
    let [addressInput, setAddressInput] = useState(event.address);
    let [cityInput, setCityInput] = useState(event.city);
    let [postalCodeInput, setPostalCodeInput] = useState(event.postalCode);
    let [descriptionInput, setDescriptionInput] = useState(event.description);

    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const eventId = (paths[2]) ? paths[2] : '';
    console.log("edit-event" + eventId);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect( async () => {
        const {events} = await dispatch(fetchEventByEventIdThunk(eventId));
        console.log(JSON.stringify(events));
        setEvent(events);
    }, [eventId, dispatch]);

    // useEffect(() => {
    //     if (eventData) {
    //         setName(eventData.name);
    //         const eventDate = new Date(eventData.date);
    //         setDate(eventDate.toLocaleDateString('en-CA'));
    //
    //         const eventTime = new Date(eventData.time);
    //         const estD = new Date(eventTime.toLocaleString('en-US', { timeZone: 'EST' }));
    //         const estTime = estD.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false});
    //
    //         setTime(estTime);
    //         setAddress(eventData.address);
    //         setCity(eventData.city);
    //         setPostalCode(eventData.postalCode);
    //         setDescription(eventData.description);
    //     }
    // }, [eventData]);

    const saveEventClickHandler = (event) => {
        event.preventDefault();

        const updatedEvent = {
            name: nameInput,
            date: dateInput,
            time: timeInput,
            address: addressInput,
            city: cityInput,
            postalCode: postalCodeInput,
            description: descriptionInput,
        }
        console.log(JSON.stringify(updatedEvent));
        console.log(eventId);
        dispatch(updateEventByEventIdThunk({eventId, updatedEvent}));
        navigate("/home");
    };

    // const cancelEventUpdateHandler = () => {
    //     navigate(-1);
    // }

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
            <>
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
            </>
        </div>
    );
};

export default EditEventForm;
