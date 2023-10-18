// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Route directly

import About from './Components/about/About';
import Classes from './Components/classes/Classes';
import Home from './Components/home/Home';
import Feature from './Components/feature/Feature';
import Contact from './Components/contact/Contact';
import Login from './Components/login/Login';
import Signup from './Components/signup/Signup';
import Listcustomer from './Components/customer/Listcustomer';
import Updatecustomer from './Components/customer/Updatecustomer';
import Listtrainer from './Components/trainer/Listtrainer';
import Addtrainer from './Components/trainer/Addtrainer';
import Updatetrainer from './Components/trainer/Updatetrainer';
import ListOffers from './Components/offers/ListOffers';
import Addoffers from './Components/offers/Addoffers';
import Updateoffers from './Components/offers/Updateoffers';
import Listcourse from './Components/course/Listcourse';
import Addcourse from './Components/course/Addcourse';
import Updatecourse from './Components/course/Updatecourse';
import SubscriptionForm from './Components/subscription/SubscriptionForm';

function App() {
  return (
    <BrowserRouter> {/* Use BrowserRouter here */}
      {/* <Navbar /> */}
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* Use Route inside Routes */}
        <Route path="/classes" element={<Classes />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/customer" element={<Listcustomer />} />
        <Route path="/updatecustomer" element={<Updatecustomer />} />
        <Route path="/trainer" element={<Listtrainer />} />
        <Route path="/addtrainer" element={<Addtrainer />} />
        <Route path="/updatetrainer" element={<Updatetrainer />} />
        <Route path="/listoffers" element={<ListOffers />} />
        <Route path="/addoffers" element={<Addoffers />} />
        <Route path="/updateoffers" element={<Updateoffers />} />
        <Route path="/listcourse" element={<Listcourse />} />
        <Route path="/addcourse" element={<Addcourse />} />
        <Route path="/updatecourse" element={<Updatecourse />} />
        <Route path="/subscription" element={<SubscriptionForm />} />
        {/* <Route path="/home" element={<Home />} /> Use Route inside Routes */}

      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
