import React, {useEffect, useState} from "react";
import axios from "axios";

const CreateEventForm = () => {
    const [name, setName] = useState("");
    const [dateAndTime, setDateAndTime] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [organizerId, setOrganizerId] = useState(""); // organizer ID

    useEffect(() => {
        const loggedInUserId = localStorage.getItem("userId");
        setOrganizerId(loggedInUserId);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("dateAndTime", dateAndTime);
        formData.append("address", address);
        formData.append("city", city);
        formData.append("zipCode", zipCode);
        formData.append("description", description);
        if (image) {
            formData.append("image", image);
        }
        formData.append("organizerId", organizerId); // organizer ID

        try {
            const response = await axios.post("/eventory/events", formData);
            console.log(response.data);
            alert("Event created successfully");
        } catch (error) {
            console.log(error);
            alert("Failed to create event");
        }
    };

    return (
        <div className="container mt-3">
            <div className="mb-3">
                <h4>Create Eventory Exclusive Event</h4>
                <p className="text-muted">Please fill out the information below regarding your event.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="name" className="mb-1">Name
                        <span className="text-danger"> *</span>
                    </label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="dateAndTime" className="mb-1">Date and Time
                        <span className="text-danger"> *</span>
                    </label>
                    <input type="datetime-local" className="form-control" id="dateAndTime" value={dateAndTime} onChange={(e) => setDateAndTime(e.target.value)} required />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="address" className="mb-1">Address
                        <span className="text-danger"> *</span>
                    </label>
                    <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="city" className="mb-1">City
                        <span className="text-danger"> *</span>
                    </label>
                    <input type="text" className="form-control" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="zipCode" className="mb-1">Zip Code
                        <span className="text-danger"> *</span>
                    </label>
                    <input type="text" className="form-control" id="zipCode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="description" className="mb-1">Description
                        <span className="text-danger"> *</span>
                    </label>
                    <textarea className="form-control" id="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="file"
                           className="form-control"
                           id="eventImage"
                           accept="image/*"
                           onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default CreateEventForm;