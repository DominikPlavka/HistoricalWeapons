import "./Home.scss"
import Timeline from "../components/Timeline";

const Home = () => {

    return (
        <div className="main-container bright">
            <h1>Historické zbrane</h1>
            <h2>Chladné zbrane</h2>
            <h3>Podnadpis</h3>
            <p>Text</p>
            <Timeline width={"25%"}/>
        </div>
    )
};

export default Home;