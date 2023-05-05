import Login from "./containers/login";

const routes = [
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signin',
    element: <Login />
  }
];

export default routes;