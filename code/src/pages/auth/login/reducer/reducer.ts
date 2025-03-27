export type LoginAction =
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS" }
  | { type: "LOGIN_FAILURE" };

export type LoginState = {
  email: string;
  password: string;
  loading: boolean;
  error: string | null;
};

export const initialLoginState: LoginState = {
    email: "",
    password: "",
}

export const loginReducer = (state: LoginState, action: LoginAction) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
