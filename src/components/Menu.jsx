import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Context";

function Menu() {
    const { gameState, setGameState, userName, setUserName } = useContext(
        GameStateContext
    );
    return (
        <div className="Menu">
            <label>Enter Your Name:</label>
            <input
                type="text"
                onChange={(event) => {
                    setUserName(event.target.value);
                }}
            />
            {userName.length > 0 ? <button id="startQuiz"
                onClick={() => {
                    setGameState("playing");
                }}
            >
                Start Quiz
            </button> : null}

        </div>
    );
}

export default Menu;