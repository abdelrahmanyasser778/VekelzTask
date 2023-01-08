import { BrowserRouter,Routes, Route} from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import NavBar from "./Components/NavBar";
import BookingPage from "./Pages/BookingPage";
import DashboardPage from "./Pages/DashboardPage";
function App() {
  return (
    <div className="App">
        <NavBar/>
       
        <BrowserRouter>
          <Routes>
          <Route index element={<BookingPage/>}/>
          <Route path="/Dashboard" element={<DashboardPage/>}/>
        </Routes>
        </BrowserRouter>
       
    </div>
  );
}

export default App;
