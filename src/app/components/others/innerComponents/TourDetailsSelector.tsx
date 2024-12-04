import React from "react";
import "../../../css/TourDetailsSelector.css";

export default function TourDetailsSelector() {
    return (
        <div className="TourDetailsSelector_main">
            {/* Navigation Links */}
            <div className="TourDetailsSelector_nav">
                <a href="#" className="active">Flights</a>
                <a href="#">Bus</a>
                <a href="#">Trains</a>
                <a href="#">Packages</a>
            </div>

            {/* Form Section */}
            <div className="TourDetailsSelector_form">
                {/* Trip Type */}
                <div className="TourDetailsSelector_tripType">
                    <label>
                        <input type="radio" name="tripType" defaultChecked />
                        &nbsp;
                        One Way
                    </label>
                    <label>
                        <input type="radio" name="tripType" />
                        &nbsp;
                        Round Trip
                    </label>
                </div>

                {/* Travel Inputs */}
                <div className="TourDetailsSelector_inputs">
                    <div className="TourDetailsSelector_input">
                        <h4>From</h4>
                        <strong>DEL</strong>
                        <span>Delhi</span>
                    </div>
                    <div className="TourDetailsSelector_swapIcon">⇌</div>
                    <div className="TourDetailsSelector_input">
                        <h4>To</h4>
                        <strong>vara</strong>
                        <span>Mumbai, Maharashtra</span>
                    </div>
                    <div className="TourDetailsSelector_input">
                        <span>Departure Date</span>
                        <strong>23 Nov 24</strong>
                        <span>Monday</span>
                    </div>
                    <div className="TourDetailsSelector_input">
                        <a href="#" className="TourDetailsSelector_addReturn">+ Add Return</a>
                        <span>Save More</span>
                    </div>
                    <div className="TourDetailsSelector_input">
                        <span>1 Traveller</span>
                        <span>Economy</span>
                    </div>
                </div>

                {/* Special Fares */}
                <div className="TourDetailsSelector_specialFares">
                    <button type="button">Armed Forces</button>
                    <button type="button">Student</button>
                    <button type="button">Senior Citizen</button>
                </div>

                {/* Search Button */}
                <div className="TourDetailsSelector_searchButton">
                    <button type="button" className="button-86">Search Flights</button>
                </div>
            </div>
        </div>
    );
}
