export type RegisterAction =
  | { type: "SET_USERNAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_FAMILY_NAME"; payload: string }
  | { type: "SET_GIVEN_NAME"; payload: string }
  | { type: "SET_GENDER"; payload: string };

export type RegisterState = {
  username: string;
  email: string;
  password: string;
  familyName: string;
  givenName: string;
  gender: string;
  loading: boolean;
  error: string | null;
};

export const initialRegisterState: RegisterState = {
  username: "",
  email: "",
  password: "",
  familyName: "",
  givenName: "",
  gender: "",
  loading: false,
  error: null,
};

export const registerReducer = (
  state: RegisterState,
  action: RegisterAction
) => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_FAMILY_NAME":
      return { ...state, familyName: action.payload };
    case "SET_GIVEN_NAME":
      return { ...state, givenName: action.payload };
    case "SET_GENDER":
      return { ...state, gender: action.payload };
    default:
      return state;
  }
};
