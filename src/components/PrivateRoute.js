import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children, restricted = false }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? children : <Navigate to="/login" />;
}

// import { useSelector } from 'react-redux';
// import { Route, Redirect } from 'react-router-dom';
// import { authSelectors } from '../redux/auth';

// /**
//  * 1. Он должен повторять API Route
//  *  2. Он должен рендерить Route
//  * - Если маршрут приватный и пользователь залогинен, рендерит компонент
//  * - В противном случае рендерит Redirect на redirectTo
//  */

// export default function PrivateRoute({
//     children,
//     redirectTo = '/',
//     ...routeProps
// }) {
//     const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//     return (
//         <Route {...routeProps}>
//             {isLoggedIn ? children : <Redirect to={redirectTo} />}
//         </Route>
//     );
// }
