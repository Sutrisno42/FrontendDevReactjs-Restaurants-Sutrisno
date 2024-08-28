
import  Details  from './pages/Details';
import  Home  from './pages/Home';
import { useRoutes } from "react-router";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/detail/:id", element: <Details /> },
];
function App() {
  const element = useRoutes(routes);
  return element;
}

export default App;