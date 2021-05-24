import "./App.css";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import styled from "styled-components";

const BtnDiv = styled.div`
    position: relative;
    margin-top: 30px;
    display: flex;
    justify-content: space-evenly;
    background: cyan;
`;

const ContentDiv = styled.div`
    background: tan;
`;

function App() {
    return (
        <div>
            <BtnDiv>
                <button>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        HOME
                    </Link>
                </button>
                <button>
                    <Link to="/about" style={{ textDecoration: "none" }}>
                        ABOUT
                    </Link>
                </button>
                <button>
                    <Link to="/project" style={{ textDecoration: "none" }}>
                        PROJECT
                    </Link>
                </button>
                <button>
                    <Link to="/contact" style={{ textDecoration: "none" }}>
                        CONTACT ME
                    </Link>
                </button>
            </BtnDiv>
            <ContentDiv>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/project" component={Project} />
                <Route path="/contact" component={Contact} />
            </ContentDiv>
        </div>
    );
}

export default App;
