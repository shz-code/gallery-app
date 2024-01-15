import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Auth from "./components/Auth/Auth";
import { Home } from "./components/Home/Home";
import Layout from "./components/Layout";
import { userLoggedIn } from "./features/auth/authSlice";

function App() {
  const { email } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      const auth = JSON.parse(localStorage.getItem("auth"));
      dispatch(
        userLoggedIn({
          name: auth.name,
          email: auth.email,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let content = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
  if (email) {
    content = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }
  return (
    <Router>
      <Layout>{content}</Layout>
    </Router>
  );
}

export default App;
