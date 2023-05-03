import Login from "./containers/login";

const routes = [
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: '/login',
    element: <Login />
  }
];

export default routes;