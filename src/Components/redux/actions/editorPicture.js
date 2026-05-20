export const SET_COVER_IMAGE = "SET_COVER_IMAGE";
export const SET_PROFILE_IMAGE = "SET_PROFILE_IMAGE";

export const setCoverImage = (base64Image) => {
  return {
    type: SET_COVER_IMAGE,
    payload: base64Image,
  };
};

export const setProfileImage = (base64Image) => {
  return {
    type: SET_PROFILE_IMAGE,
    payload: base64Image,
  };
};
