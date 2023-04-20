import { createAsyncThunk } from "@reduxjs/toolkit";
import {fetchOrganizerById, fetchEventsByOrganizerId, updateEventById, fetchEventById} from "./organizerEvent-service";

export const fetchOrganizerByIdThunk = createAsyncThunk(
    "events/fetchOrganizerById",
    async (organizerId, { rejectWithValue }) => {
        try {
            const organizer = await fetchOrganizerById(organizerId);
            return organizer;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue('Something went wrong.');
            }
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchEventsByOrganizerIdThunk = createAsyncThunk(
    "events/fetchEventsByOrganizerId",
    async (organizerId, { rejectWithValue }) => {
        try {
            const organizer = await fetchOrganizerById(organizerId);
            const events = organizer.events;
            if (!events) {
                console.log("No events found.");
            }
            return events;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue('Something went wrong.');
            }
            return rejectWithValue(error.response.data);
        }
    }
);
// TODO: Testing needed
export const fetchEventByEventIdThunk = createAsyncThunk(
    "eventory/fetchEvent",
    async({eventId},{rejectWithValue}) => {
        try {
            const fetchedEvent = await fetchEventById(eventId);
            return fetchedEvent;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue('Something went wrong.');
            }
            return rejectWithValue(error.response.data);
        }
    }
);
// TODO: Testing needed
export const updateEventByEventIdThunk = createAsyncThunk(
    "eventory/updateEvent",
    async ( {eventId, updatedEvent}, { rejectWithValue }) => {
        try {
            console.log("organizerEvent-thunk" + eventId);
            console.log("organizerEvent-thunk" + JSON.stringify(updatedEvent));
            const updateEventResult = await updateEventById(eventId, updatedEvent);
            console.log("updateEventResult" + JSON.stringify(updateEventResult));
            return updateEventResult;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue('Something went wrong.');
            }
            return rejectWithValue(error.response.data);
        }
    }
);