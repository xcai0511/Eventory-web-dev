import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    fetchOrganizerById,
    fetchEventsByOrganizerId,
    updateEventById,
    fetchEventById,
    deleteEventById
} from "./organizerEvent-service";

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
export const fetchEventByEventIdThunk = createAsyncThunk(
    "eventory/fetchEvent",
    async(eventId,{rejectWithValue}) => {
        try {
            const fetchedEvent = await fetchEventById(eventId);
            console.log("fetchEventByEventIdThunk");
            console.log(JSON.stringify(fetchedEvent));
            return fetchedEvent;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue('Something went wrong.');
            }
            return rejectWithValue(error.response.data);
        }
    }
);
export const updateEventByEventIdThunk = createAsyncThunk(
    "eventory/updateEvent",
    async ({eventId, updatedEvent}, { rejectWithValue }) => {
        try {
            const updateEventResult = await updateEventById(eventId, updatedEvent);
            return updateEventResult;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue('Something went wrong.');
            }
            return rejectWithValue(error.response.data);
        }
    }
);
export const deleteEventByEventIdThunk = createAsyncThunk(
    "eventory/deleteEvent",
    async (eventId, {rejectWithValue}) => {
        try {
            console.log("deleteEventByEventIdThunk");
            console.log(eventId);
            const deleteEventResult = await deleteEventById(eventId);
            console.log(JSON.stringify(deleteEventResult));
            return deleteEventResult;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue('Something went wrong.');
            }
            return rejectWithValue(error.response.data);
        }
    }
);