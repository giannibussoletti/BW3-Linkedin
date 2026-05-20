import { SET_COVER_IMAGE, SET_PROFILE_IMAGE } from "../actions/editorPicture";

const initialState = {
  content: [],
  currentCover:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Place_de_la_Bourse%2C_Bordeaux%2C_France.jpg/1920px-Place_de_la_Bourse%2C_Bordeaux%2C_France.jpg",
  currentProfile:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Place_de_la_Bourse%2C_Bordeaux%2C_France.jpg/1920px-Place_de_la_Bourse%2C_Bordeaux%2C_France.jpg",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COVER_IMAGE:
      return {
        ...state,
        currentCover: action.payload,
      };
    case SET_PROFILE_IMAGE:
      return {
        ...state,
        currentProfile: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
