import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import {Home} from "./components/Home";
import {Login} from "./components/Login";
import {Header} from "./components/Header";
import {ContactUs} from "./components/ContactUs";
import {useDispatch, useSelector} from "react-redux";

export default function App() {
    const userState = useSelector(state => state.user)
    const dispatch = useDispatch();


    return (
        <div className="container">
            <Router>
                <Header/>
                <Routes>
                    <Route path='/' element={<Navigate to="/home"/>}/>
                    <Route path='/auth' element={<Login/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/contact-us' element={<ContactUs/>}/>
                </Routes>
            </Router>
        </div>
    )
};