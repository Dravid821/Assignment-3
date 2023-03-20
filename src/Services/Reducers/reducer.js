import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_COME,
  FETCH_DATA_ERROR,
  FETCH_DATA_DELETE,
  FETCH_DATA_EDIT,
} from "../Constant";
const initialState = {
  user: [],
  loading: false,
  err: null,
};

export const datareducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_COME:
      return {
        ...state,
        loading: true,
      };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case FETCH_DATA_ERROR:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    case FETCH_DATA_DELETE:
      return {
        ...state,
        loading: false,
        user: state.user.filter((data) => data.id !== action.payload),
      };
    case FETCH_DATA_EDIT:
      return {
        ...state,
        loading: false,
        user: state.user.map((data) => {
          if (data.id === action.payload.id) {
            return {
              ...data,
              name: action.payload.name,
              email: action.payload.email,
              phone: action.payload.phone,
              website: action.payload.website,
            };
          }
          return data;
        }),
      };
    default:
      return {
        ...state,
      };
  }
};
