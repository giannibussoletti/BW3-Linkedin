import { fetchExperiences, createExperience, updateExperience, deleteExperience } from "../actions/actions";

const initialState = {
  content: [],      
  isLoading: false, 
  error: null,      
};

const mainReducer = (state = initialState, action) => {
 switch (action.type) {
    case fetchExperiences.pending.type:
    case createExperience.pending.type:
    case updateExperience.pending.type:
    case deleteExperience.pending.type:
      return { ...state, isLoading: true, error: null };

    case fetchExperiences.rejected.type:
    case createExperience.rejected.type:
    case updateExperience.rejected.type:
    case deleteExperience.rejected.type:
      return { ...state, isLoading: false, error: action.payload };

    case fetchExperiences.fulfilled.type:
      return { ...state, isLoading: false, content: action.payload };

    case createExperience.fulfilled.type:
      return { ...state, isLoading: false, content: [...state.content, action.payload] };

    case updateExperience.fulfilled.type:
      return {
        ...state,
        isLoading: false,
        content: state.content.map((exp) =>
          exp._id === action.payload._id ? action.payload : exp
        ),
      };

    case deleteExperience.fulfilled.type:
      return {
        ...state,
        isLoading: false,
        content: state.content.filter((exp) => exp._id !== action.payload),
      };

    default:
      return state;
  }
};

export default mainReducer;