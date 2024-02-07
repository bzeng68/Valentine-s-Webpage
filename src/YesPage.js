import React from "react";
import fugakyu from "./media/fugakyu.jpeg";
import yayBears from "./media/yay-bears.gif";

const YesPage = () => {
    return (
        <div className="page">
            <div className="page-header">
                <img style={{ border: '10px solid #000000', filter: 'brightness(90%)', width: '50%', height: '50%' }} src={yayBears}/>
                <img style={{ border: '10px solid #000000', filter: 'brightness(90%)' }} src={fugakyu}/>
                <div>
                    FuGaKyu Japanese Cuisine, 1280 Beacon St, Brookline, MA 02446
                </div>
                <div>
                    Wednesday February 14th @ 7:15 PM, be there! :D
                </div>
            </div>
        </div>
    );
};

export default YesPage;