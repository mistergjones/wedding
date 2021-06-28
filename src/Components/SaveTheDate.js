import React, { useState } from "react";
import Logo from "./screenshot.png";
import "./SaveTheDate.css";
import EmailJSForm from "./EmailJSForm";
import RSVPModal from "./RSVPModal";

const SaveTheDate = () => {
    return (
        <div className="container">
            <div className="rsvp">
                <img src="rsvp2.png" alt="" />
                <h3>By November 6th, 2021</h3>
            </div>

            <div className="wedding">
                <div className="form-alignment">
                    <EmailJSForm />
                </div>
            </div>
        </div>
    );
};

export default SaveTheDate;
