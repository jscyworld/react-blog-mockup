import React from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
    return (
        <div>
            <div>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                </ul>
            </div>
            <hr />
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
            </div>
        </div>
    );
}

export default App;
