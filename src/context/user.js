import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(() => {
    // Initialize authData with token and user from localStorage if available
    const storedToken = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("user");
    return storedToken && storedUser
      ? { token: storedToken, user: JSON.parse(storedUser) }
      : { token: null, user: null };
  });

  const [donarData, setDonarData] = useState(() => {
    const storedDonarData = localStorage.getItem("donarData");
    return storedDonarData ? JSON.parse(storedDonarData) : [];
  });

  const [donarCausesData, setDonarCausesData] = useState(() => {
    const storedCausesData = localStorage.getItem("donarCausesData");
    return storedCausesData ? JSON.parse(storedCausesData) : [];
  });

  // Function to update and persist donor data
  const updateDonarData = (data) => {
    setDonarData(data);
    localStorage.setItem("donarData", JSON.stringify(data));
  };

  // Function to update and persist donor causes data
  const updateDonarCausesData = (data) => {
    setDonarCausesData(data);
    localStorage.setItem("donarCausesData", JSON.stringify(data));
  };

  // Function to handle user login
  const login = (token, user) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("user", JSON.stringify(user));
    setAuthData({ token, user });
  };

  // Function to handle user logout
  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    localStorage.removeItem("donarData");
    localStorage.removeItem("donarCausesData");
    setAuthData({ token: null, user: null });
    setDonarData([]);
    setDonarCausesData([]);
  };

  return (
    <AuthContext.Provider
      value={{
        authData,
        login,
        logout,
        donarData,
        updateDonarData, // Use this instead of setDonarData directly
        donarCausesData,
        updateDonarCausesData, // Use this instead of setCausesDonarData directly
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
