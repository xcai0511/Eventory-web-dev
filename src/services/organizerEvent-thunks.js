import { createAsyncThunk } from "@reduxjs/toolkit";
import {fetchOrganizerById, fetchEventsByOrganizerId, updateEventById} from "./organizerEvent-service";

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

export const updateEventByEventIdThunk = createAsyncThunk(
    "events/updateEventByEventId",
    async ( eventId, { rejectWithValue }) => {
        try {
            const updateEventResult = await updateEventById(eventId);
            console.log(eventId);
            return updateEventResult;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue('Something went wrong.');
            }
            return rejectWithValue(error.response.data);
        }
    }
);