import { createAsyncThunk } from "@reduxjs/toolkit";

const TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBkNzY0MzNhMDNhODAwMTUwZDkzY2MiLCJpYXQiOjE3NzkyNjcxMzksImV4cCI6MTc4MDQ3NjczOX0.DM4Hs5Nuy-5MmEDBTw_usjpOdbtCE6Y7X26noLrfTLE";
const BASE_URL = "https://striveschool-api.herokuapp.com/api/profile";

export const fetchExperiences = createAsyncThunk(
  "experiences/fetchAll",
  (userId, thunkAPI) => {
    return fetch(`${BASE_URL}/${userId}/experiences`, {
      method: "GET",
      headers: {
        Authorization: TOKEN,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel caricamento delle esperienze");
        }
        return response.json(); 
      })
      .then((data) => {
        return data; 
      })
      .catch((error) => {
        return thunkAPI.rejectWithValue(error.message); 
      });
  }
);


export const createExperience = createAsyncThunk(
  "experiences/create",
  ({ userId, experienceData }, thunkAPI) => {
    return fetch(`${BASE_URL}/${userId}/experiences`, {
      method: "POST",
      headers: {
        Authorization: TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(experienceData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore durante la creazione dell'esperienza");
        }
        return response.json();
      })
      .then((data) => {
        return data; 
      })
      .catch((error) => {
        return thunkAPI.rejectWithValue(error.message);
      });
  }
);

export const updateExperience = createAsyncThunk(
  "experiences/update",
  ({ userId, expId, experienceData }, thunkAPI) => {
    return fetch(`${BASE_URL}/${userId}/experiences/${expId}`, {
      method: "PUT",
      headers: {
        Authorization: TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(experienceData),
    })
      .then((res) => { if (!res.ok) throw new Error("Errore PUT"); return res.json(); })
      .catch((err) => thunkAPI.rejectWithValue(err.message));
  }
);


export const deleteExperience = createAsyncThunk(
  "experiences/delete",
  ({ userId, expId }, thunkAPI) => {
    return fetch(`${BASE_URL}/${userId}/experiences/${expId}`, {
      method: "DELETE",
      headers: { Authorization: TOKEN },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Errore DELETE");
        return expId; 
      })
      .catch((err) => thunkAPI.rejectWithValue(err.message));
  }
);