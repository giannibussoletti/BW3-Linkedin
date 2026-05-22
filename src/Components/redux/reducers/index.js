import {
  fetchExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
} from "../actions/actions"
import {
  GET_JOBS,
  OPEN_PROFILE_MODAL,
  CLOSE_PROFILE_MODAL,
  OPEN_EDIT_MODAL,
  CLOSE_EDIT_MODAL,
  OPEN_COVER_MODAL,
  CLOSE_COVER_MODAL,
} from "../actions/actions"
import { SET_COVER_IMAGE, SET_PROFILE_IMAGE } from "../actions/editorPicture"

const initialState = {
  content: [],
  isLoading: false,
  error: null,
  currentCover:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Place_de_la_Bourse%2C_Bordeaux%2C_France.jpg/1920px-Place_de_la_Bourse%2C_Bordeaux%2C_France.jpg",
  currentProfile:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Place_de_la_Bourse%2C_Bordeaux%2C_France.jpg/1920px-Place_de_la_Bourse%2C_Bordeaux%2C_France.jpg",
  isProfileModalOpen: false,
  isEditorPicModalOpen: false,
  isCoverModalOpen: false,
  jobsArray: [],
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchExperiences.pending.type:
    case createExperience.pending.type:
    case updateExperience.pending.type:
    case deleteExperience.pending.type:
      return { ...state, isLoading: true, error: null }

    case fetchExperiences.rejected.type:
    case createExperience.rejected.type:
    case updateExperience.rejected.type:
    case deleteExperience.rejected.type:
      return { ...state, isLoading: false, error: action.payload }

    case fetchExperiences.fulfilled.type:
      return { ...state, isLoading: false, content: action.payload }

    case createExperience.fulfilled.type:
      return {
        ...state,
        isLoading: false,
        content: [...state.content, action.payload],
      }

    case updateExperience.fulfilled.type:
      return {
        ...state,
        isLoading: false,
        content: state.content.map((exp) =>
          exp._id === action.payload._id ? action.payload : exp,
        ),
      }

    case deleteExperience.fulfilled.type:
      return {
        ...state,
        isLoading: false,
        content: state.content.filter((exp) => exp._id !== action.payload),
      }
    case SET_COVER_IMAGE:
      return {
        ...state,
        currentCover: action.payload,
      }
    case SET_PROFILE_IMAGE:
      return {
        ...state,
        currentProfile: action.payload,
      }

    case OPEN_PROFILE_MODAL:
      return {
        ...state,
        isProfileModalOpen: true,
      }

    case CLOSE_PROFILE_MODAL:
      return {
        ...state,
        isProfileModalOpen: false,
      }

    case OPEN_EDIT_MODAL:
      return {
        ...state,
        isEditorPicModalOpen: true,
      }

    case CLOSE_EDIT_MODAL:
      return {
        ...state,
        isEditorPicModalOpen: false,
      }

    case OPEN_COVER_MODAL:
      return {
        ...state,
        isCoverModalOpen: true,
      }

    case CLOSE_COVER_MODAL:
      return {
        ...state,
        isCoverModalOpen: false,
      }

    case GET_JOBS:
      return {
        ...state,
        jobsArray: action.payload,
      }

    default:
      return state
  }
}

export default mainReducer
