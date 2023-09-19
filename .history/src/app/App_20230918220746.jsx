import BackgroundImages from "../features/backgroundImages/BackgroundImages";
import HomePage from "../components/HomePage/HomePage";

import "./App.css";

function App() {
    return (
        <>
            <BackgroundImages>
                <HomePage />
            </BackgroundImages>
        </>
    );
}

export default App;