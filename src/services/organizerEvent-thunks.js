import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    fetchOrganizerById,
    updateEventById,
    fetchEventById,
    deleteEventById
} from "./organizerEvent-service";

export const fetchEventsByOrganizerIdThunk = createAsyncThunk(
    "events/fetchEventsByOrganizerId",
    async (organizerId, { rejectWithValue }) => {
        try {
            const organizer = await fetchOrganizerById(organizerId);
            const events = organizer.events;
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
            const deleteEventResult = await deleteEventById(eventId);
            return deleteEventResult;
        } catch (error) {
            if (!error.response) {
                return rejectWithValue('Something went wrong.');
            }
            return rejectWithValue(error.response.data);
        }
    }
);