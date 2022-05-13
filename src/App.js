import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./component/Pages/Home";
import UserRegistration from "./component/User/UserRegistration";
import About from "./component/Pages/About";
import UserLogin from "./component/User/UserLogin";
import ShowAllDataTable from "./component/Table/ShowAllDataTable";
import Layout from "./component/Navbar/Layout";

// function PrivateRoute({ children, ...rest }) {
//   // let auth = useAuth();
//   return (
//     <Route
//       {...rest}
//       // render={() => (auth ? children : <Navigate to="/login" />)}
//     />
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<UserRegistration />} />

        <Route path="/login" element={<UserLogin />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/showtable" element={<ShowAllDataTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
