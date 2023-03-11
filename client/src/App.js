//importing reguired pages and components
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Test from "./pages/test/Test";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NotFound404 from "./pages/notFound404/NotFound404";
import { useContext } from "react";
import { Context } from "./context/Context";

//function to manage the authentication of sign in
function App() {
  const { user, isAdmin } = useContext(Context);
  console.log("admin", isAdmin);
  let adminUser;
  if (user === null) {
    adminUser = false;
  } else {
    adminUser = user.isAdmin;
  }

  // routes of the pages
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={user ? <Home /> : <Login />} />
        <Route
          exact
          path="/register"
          element={user ? <Home /> : <Register />}
        />
        <Route exact path="/post/:postId" element={<Single />} />
        <Route
          exact
          path="/settings"
          element={user ? <Settings /> : <Register />}
        />
        <Route exact path="/write" element={user ? <Write /> : <Login />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/test" element={<Test />} />
      
        <Route exact path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
}

export default App;
