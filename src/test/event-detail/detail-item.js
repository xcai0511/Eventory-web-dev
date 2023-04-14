import React from "react";
import "./detail.css";

const DetailItem = ({detail}) => {
    return(
        <div className="wd-detail-page mt-3">
            <div className="wd-poster-container">
                <img className="wd-poster-frame" src={`/images/${detail.image}`}/>
                <img className="wd-poster d-none d-sm-block" src={`/images/${detail.image}`}/>
                <img className="wd-poster-sm d-sm-none" src={`/images/${detail.image}`}/>
            </div>
            <div className="row mt-2">
                <div className="col-9">
                    <h1 className="fw-bold">{detail.name}</h1>
                </div>
                <div className="col-3 border rounded">
                    <div>buy ticket</div>
                </div>
            </div>


        </div>
    );
};

export default DetailItem;