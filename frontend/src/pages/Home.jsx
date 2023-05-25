import "./Home.scss";
import { ArrowRightIcon, FaceIcon, ImageIcon, SizeIcon, SunIcon } from '@radix-ui/react-icons';

const Home = () => {

    return (
        <div className="main-container bright">
            <div className="background-container">
                <div className="header-container">
                    <div>
                        <h1>Historické zbrane</h1>
                        <hr />
                        <h2>Blablabla</h2>
                    </div>
                    <div className="menu-wrapper">
                        <div className="menu">
                            <div>
                                <h2>Stopy histórie</h2>
                                <p>Zbrane z rôznych období a </p>
                            </div>
                            <div className="icon-wrapper">
                                <ArrowRightIcon
                                    className="icon"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div><ArrowRightIcon /></div>
            <div className="content-container">
                <div className="header-container">
                    <div>
                        <h1>Historické zbrane</h1>
                        <hr />
                        <h2>Blablabla</h2>
                    </div>
                    <div className="menu-wrapper">
                        <div className="menu">
                            <h2>Chladné zbrane</h2>
                            <h2>Palné zbrane</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;