import logo from "../assets/quiz-logo.png";
import { useState } from 'react';

function Header() {
    const [name, setName] = useState("");

    function handleClick(subject) {
        setName(subject);
    }

    return (
        <>
            <header>
                <img src={logo} alt="logo" />
                <h1>{name} Quiz</h1>
                <p>Select A Subject</p>
                <div className="flex">
                    <button onClick={() => handleClick('Java-Script')} className="quiz-button">Java-Script</button>
                    <button onClick={() => handleClick('React')} className="quiz-button">React</button>
                    <button onClick={() => handleClick('HTML')} className="quiz-button">HTML</button>
                    <button onClick={() => handleClick('CSS')} className="quiz-button">CSS</button>
                </div>
            </header>
        </>
    );
}

export default Header;
