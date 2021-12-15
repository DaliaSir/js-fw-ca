import Navigation from "./components/layout/Navigation";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./components/home/HomePage";
import ContactPage from "./components/contact/ContactPage";
import LoginPage from "./components/login/LoginPage";
import AdminPage from "./components/admin/AdminPage";
import DetailsPage from "./components/details/DetailsPage";
import "./sass/style.scss";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Container>
          <Routes>
            <Route path="/" exact="true" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" exact="true" element={<AdminPage />} />
            <Route path="/detail/:id" element={<DetailsPage />} />
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
