import React, { Component } from "react";
import { Routes, Route} from 'react-router-dom';
import Home from '.././components/home/Home';
import About from '.././components/home/About';
import Contact from '../components/home/Contact';
import NewLogin from '.././components/home/NewLogin';
import Register from '.././components/home/Register';
import NavBar from '../components/shared/NavBar';
import Admin from "../components/admin/Admin";
import AddBook from "../components/admin/AddBook";

class Router extends Component {
    render() {
        return (
            <div className = "App">
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/login" element={<NewLogin />} />
                    <Route exact path="/register" element={<Register />} /> 
                    <Route exact path="/admin" element = {<Admin />} />
                    <Route exact path="/addbooks" element = {<AddBook />} />
                </Routes>
            </div>
        )
    }
}

export default Router;