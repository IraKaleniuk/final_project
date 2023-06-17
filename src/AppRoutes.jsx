
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import Header from "./components/header";
import TopItemsSlider from "./components/TopItemsSlider/TopItemsSlider";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <div className="container">
      <TopItemsSlider/>
        <Routes>
          <Route path="/" element={<h1>mainpage</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </div>
    </>

  );
};


export default AppRoutes;
