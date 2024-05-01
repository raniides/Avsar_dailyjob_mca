import { Routes, Route } from "react-router-dom";

import Register from "./login/Components/RegisterYup";
import ForgotPassword from "./login/Components/ForgotPassword";
import Mdashboard from "./login/Components/Mdashboard";
import Media from "./login/Components/Media";
import ContactUs from "./login/Components/contactus";
import AboutUs from "./login/Components/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Mdashboard />} />

      <Route path="/Login" element={<Mdashboard />} />

      <Route path="/Reset" element={<ForgotPassword />} />

      <Route path="/Register" element={<Register />} />

      <Route path="/Media" element={<Media />} />

      <Route path="/Contactus" element={<ContactUs />} />

      <Route path="/Aboutus" element={<AboutUs />} />


      {/* <Route path="*" element={<Navigate to="/Login" />} /> */}
    </Routes>
  );
}
export default App;
