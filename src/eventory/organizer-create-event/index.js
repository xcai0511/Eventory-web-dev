import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createEventThunk } from '../../services/createEvent-thunks';
import {Link, useNavigate} from "react-router-dom";

const CreateEventForm = () => {

    const currentUser = useSelector((state) => state.auth.currentUser);

    let [nameInput, setNameInput] = useState("");
    let [dateInput , setDateInput] = useState("");
    let [timeInput, setTimeInput] = useState("");
    let [addressInput, setAddressInput] = useState("");
    let [cityInput, setCityInput] = useState("");
    let [zipCodeInput, setZipCodeInput] = useState("");
    let [descriptionInput, setDescriptionInput] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createEventClickHandler = async (event) => {
        event.preventDefault();

        const newEvent = {
        name: nameInput,
        date: dateInput,
        time: timeInput,
        address: addressInput,
        city: cityInput,
        postalCode: zipCodeInput,
        description: descriptionInput,
        };
        await dispatch(createEventThunk(newEvent));
        navigate("/home")
    };

    const isFormFilled = nameInput && dateInput && timeInput && addressInput && cityInput && zipCodeInput && descriptionInput;

    return (
        <div>
            {(currentUser.role !== "organizer") ? <h3 className="mt-4 ms-4">Unauthorized.</h3> :
            <div className="container mt-3">
                <div className="mb-3">
                    <h4>Create Eventory Exclusive Event</h4>
                    <p className="text-muted">Please fill out the information below regarding your event.</p>
                </div>
                <form onSubmit={createEventClickHandler}>
                    <div className="form-group mb-3">
                        <label htmlFor="name" className="mb-1">Name
                            <span className="text-danger"> *</span>
                        </label>
                        <input type="text" className="form-control" id="name"
                               value={nameInput}
                               onChange={(event) =>
                                   setNameInput(event.target.value)}
                               required/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="date" className="mb-1">Date
                            <span className="text-danger"> *</span>
                        </label>
                        <input type="date" className="form-control" id="date"
                               value={dateInput}
                               onChange={(event) =>
                                   setDateInput(event.target.value)}
                               required/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="time" className="mb-1">Time
                            <span className="text-danger"> *</span>
                        </label>
                        <input type="time" className="form-control" id="time"
                               value={timeInput}
                               onChange={(event) =>
                                   setTimeInput(event.target.value)}
                               required/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="address" className="mb-1">Address
                            <span className="text-danger"> *</span>
                        </label>
                        <input type="text" className="form-control" id="address"
                               value={addressInput}
                               onChange={(event) =>
                                   setAddressInput(event.target.value)}
                               required/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="city" className="mb-1">City
                            <span className="text-danger"> *</span>
                        </label>
                        <input type="text" className="form-control" id="city"
                               value={cityInput}
                               onChange={(event) =>
                                   setCityInput(event.target.value)}
                               required/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="zipCode" className="mb-1">Zip Code
                            <span className="text-danger"> *</span>
                        </label>
                        <input type="text" className="form-control" id="zipCode"
                               pattern="[0-9]*"
                               maxLength="5"
                               value={zipCodeInput}
                               onChange={(event) =>
                                   setZipCodeInput(event.target.value)
                               }
                               onKeyPress={(event) => {
                                   if (!/[0-9]/.test(event.key)) {
                                       event.preventDefault();
                                   }
                               }}
                               required/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="description" className="mb-1">Description
                            <span className="text-danger"> *</span>
                        </label>
                        <textarea className="form-control" id="description" rows="3"
                                  value={descriptionInput}
                                  onChange={(event) =>
                                      setDescriptionInput(event.target.value)}
                                  required></textarea>
                    </div>
                    <div className="button-container">
                        <button className="btn btn-primary" type="submit" disabled={!isFormFilled}>
                            Submit
                        </button>
                        <Link to="/home" className="text-decoration-none ms-3">
                            <span className="text-danger">Cancel</span>
                        </Link>
                    </div>
                </form>
            </div>
            }
        </div>
    );
}

export default CreateEventForm;