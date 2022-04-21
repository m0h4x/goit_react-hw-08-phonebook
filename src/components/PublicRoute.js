import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "../redux/selectors";

export default function PublicRoute({ children, restricted = false }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/contacts" /> : children;
}

// import { useSelector } from 'react-redux';
// import { Route, Redirect } from 'react-router-dom';
// import { authSelectors } from '../redux/auth';

// /**
//  * - Если маршрут ограниченный, и юзер залогинен, рендерит редирект на redirectTo
//  * - В противном случае рендерит компонент
//  *
//  */

// export default function PublicRoute({
//     children,
//     restricted = false,
//     redirectTo = '/',
//     ...routeProps
// }) {
//     const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//     const shouldRedirect = isLoggedIn && restricted;
//     return (
//         <Route {...routeProps}>
//             {shouldRedirect ? <Redirect to={redirectTo} /> : children}
//         </Route>
//     );
// }
