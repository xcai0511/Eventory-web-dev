import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {fetchEventById} from "../../services/organizerEvent-service";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router";
import {updateEventByEventIdThunk} from "../../services/organizerEvent-thunks";
import {updateEvent} from "../../reducers/organizerEvent-reducer";

const EditEventForm = () => {
    let [eventData, setEventData] = useState(null);
    let [name, setName] = useState('');
    let [date, setDate] = useState('');
    let [time, setTime] = useState('');
    let [address, setAddress] = useState('');
    let [city, setCity] = useState('');
    let [postalCode, setPostalCode] = useState('');
    let [description, setDescription] = useState('');

    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const eventId = (paths[2]) ? paths[2] : '';

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const getEventById = async () => {
            if (eventId) {
                const event = await fetchEventById(eventId);
                console.log(JSON.stringify(event));
                setEventData(event);
            }
        };
        getEventById();
    }, [eventId]);

    useEffect(() => {
        if (eventData) {
            setName(eventData.name);
            const eventDate = new Date(eventData.date);
            setDate(eventDate.toLocaleDateString('en-CA'));

            const eventTime = new Date(eventData.time);
            const estD = new Date(eventTime.toLocaleString('en-US', { timeZone: 'EST' }));
            const estTime = estD.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false});

            setTime(estTime);
            setAddress(eventData.address);
            setCity(eventData.city);
            setPostalCode(eventData.postalCode);
            setDescription(eventData.description);
        }
    }, [eventData]);

    const saveEventClickHandler = (event) => {
        event.preventDefault();

        const updatedEvent = {
            name: name,
            date: date,
            time: time,
            address: address,
            city: city,
            postalCode: postalCode,
            description: description,
        }
        console.log(updatedEvent);
        console.log(eventId);
        dispatch(updateEventByEventIdThunk(eventId, updatedEvent)); // TODO: FIX
        navigate("/home");
    };

    // const cancelEventUpdateHandler = () => {
    //     navigate(-1);
    // }

    const nameChangeHandler = (event) => {
        const updatedName = event.target.value;
        setName(updatedName);
    }

    const dateChangeHandler = (event) => {
        const updatedDate = event.target.value;
        setName(updatedDate);
    }

    const timeChangeHandler = (event) => {
        const updatedTime = event.target.value;
        setName(updatedTime);
    }

    const addressChangeHandler = (event) => {
        const updatedAddress = event.target.value;
        setName(updatedAddress);
    }

    const cityChangeHandler = (event) => {
        const updatedCity = event.target.value;
        setName(updatedCity);
    }

    const postalCodeChangeHandler = (event) => {
        const updatedPostalCode = event.target.value;
        setName(updatedPostalCode);
    }

    const descriptionChangeHandler = (event) => {
        const updatedDescription = event.target.value;
        setName(updatedDescription);
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
                               value={name}
                               onChange={nameChangeHandler}
                               required/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="date" className="mb-1">Date
                            <span className="text-danger"> *</span>
                        </label>
                        <input type="date" className="form-control" id="date"
                               value={date}
                               onChange={dateChangeHandler}
                               required/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="time" className="mb-1">Time
                            <span className="text-danger"> *</span>
                        </label>
                        <input type="time" className="form-control" id="time"
                               value={time}
                               onChange={timeChangeHandler}
                               required/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="address" className="mb-1">Address
                            <span className="text-danger"> *</span>
                        </label>
                        <input type="text" className="form-control" id="address"
                               value={address}
                               onChange={addressChangeHandler}
                               required/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="city" className="mb-1">City
                            <span className="text-danger"> *</span>
                        </label>
                        <input type="text" className="form-control" id="city"
                               value={city}
                               onChange={cityChangeHandler}
                               required/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="zipCode" className="mb-1">Zip Code
                            <span className="text-danger"> *</span>
                        </label>
                        <input type="text" className="form-control" id="zipCode"
                               value={postalCode}
                               onChange={postalCodeChangeHandler}
                               required/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="description" className="mb-1">Description
                            <span className="text-danger"> *</span>
                        </label>
                        <textarea className="form-control" id="description" rows="3"
                                  value={description}
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
