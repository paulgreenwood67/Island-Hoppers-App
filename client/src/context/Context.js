import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";


//defines initial states for user and admin
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
  isAdmin: false,
};

// creates context setting intial state as default
export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  //user and admin details saved to local storage to retain sign in
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    if (state.user && state.user.admin) {
      dispatch({ type: "SET_IS_ADMIN", payload: true });
    } else {
      dispatch({ type: "SET_IS_ADMIN", payload: false });
    }
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        isAdmin: state.isAdmin,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};