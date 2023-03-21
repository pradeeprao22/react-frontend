import { Route, Navigate } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
    const token = localStorage.getItem("authToken");

    return (
      <Route
        {...rest}
        render={(props) => {
          return token ? <Component {...props} /> : <Navigate to="/login" />;
        }}
      />
    );
}