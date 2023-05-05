import Login from "./containers/login";

const routes = [
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: '/login',
    element: <Login isLogin={true} />
  },
  {
    path: '/signin',
    element: <Login isLogin={false} />
  }
];

export default routes;