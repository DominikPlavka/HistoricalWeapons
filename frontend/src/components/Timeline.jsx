import "./Timeline.scss"

const Timeline = ({ width }) => {



    return (
        <div className="timeline-container">
            <div className="horizontal-line-top">
                <div className="vertical-line-up" style={{ width: `${width}` }}>
                    <p>18. stor.</p>
                </div>
                <div className="vertical-line-up" style={{ width: `${width}` }}>
                    <p>18 th century</p>
                </div>
                <div className="vertical-line-up" style={{ width: `${width}` }}>
                    <p>18 th century</p>
                </div>
                <div className="vertical-line-up" style={{ width: `${width}` }}>
                    <p>18 th century</p>
                </div>
            </div>
            <div className="horizontal-line-bottom">

                <div className="vertical-line-down" style={{ width: `${width}` }}>
                    <p>Renesancia</p>
                </div>
                <div className="vertical-line-down" style={{ width: `${width}` }}>
                    <p>Baroko</p>
                </div><div className="vertical-line-down" style={{ width: `${width}` }}>
                    <p>Rokoko</p>
                </div><div className="vertical-line-down" style={{ width: `${width}` }}>
                    <p>Novšie</p>
                </div>
            </div>


        </div>


    )
};

export default Timeline;