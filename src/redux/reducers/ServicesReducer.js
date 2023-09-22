import { PUSH_DATA_FAILED, PUSH_DATA_RESET, PUSH_DATA_SUCCESS } from "../actions/actionType";

const initialState = {
  purchased_services: [], // Initially no purchased_services
  addition_services: [],
};

const ServicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_DATA_RESET:
      return {
        ...state,
        purchased_services: [],
        addition_services: [],
      };
    case PUSH_DATA_SUCCESS:
      return {
        ...state,
        purchased_services: action.payload?.purchased_services, // Push Purchased Service Data after filtering
        addition_services: action.payload?.addition_services, // Push Additional Service Data after filtering
      };
    case PUSH_DATA_FAILED:
      return {
        ...state,
        purchased_services: action.payload?.purchased_services,
        addition_services: action.payload?.addition_services,
      };
    default:
      return state;
  }
};

export default ServicesReducer;
