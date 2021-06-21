import React from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Board from "./components/Board";

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
                    <li>
                        <Link to="/board">BOARD</Link>
                    </li>
                </ul>
            </div>
            <hr />
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/board" component={Board} />
            </div>
        </div>
    );
}

export default App;
