import { Navbar } from './component/class/Navbar';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from './component/pages/Home';
import Faq from './component/pages/kebijakan/Faq';
import Overview from './component/pages/kebijakan/Overview';
import Term from './component/pages/kebijakan/Term';
import Footer from './component/pages/Footer';
import Join from './component/pages/Auth/Join';
import Register from './component/pages/Auth/Register';
import Benefit from './component/pages/kebijakan/Benefit';
import Police from './component/pages/kebijakan/Police';
import About from "./component/pages/company/About";
import Payment from "./component/pages/plan/payment";
import Contactus from "./component/pages/plan/Contactus";
import Reedem from "./component/pages/plan/Reedem";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className='min-h-screen w-screen overflow-x-hidden'>
    <PageCcontent/>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}
function PageCcontent() {
  return(
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/faq' element={<Faq/>}></Route>
      <Route path='/overview' element={<Overview/>}></Route>
      <Route path='/termandcondition' element={<Term/>}></Route>
      <Route path='/benefit' element={<Benefit/>}></Route>
      <Route path='/join' element={<Join/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/policy' element={<Police/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/payment' element={<Payment/>}></Route>
      <Route path='/helpdesk' element={<Contactus/>}></Route>
      <Route path='/reedem' element={<Reedem/>}></Route>
      <Route path='*' element={<Navigate to="/"/>}></Route>
    </Routes>
  )
  
}

export default App;
