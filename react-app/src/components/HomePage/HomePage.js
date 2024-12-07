import React, { useState, useEffect } from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <div className="home-page-container">
        <div>
          <h1>Welcome to Date Maybe</h1>
          <h3>What is Date Maybe?</h3>
          <p>
            Date Maybe is a dating app that has the unique feature of accepting
            incentive payments. On the premium plan of Date Maybe user's have
            the opportunity to be matched together and sent on a date that is
            entirely paid for by their subscription payments. Date Maybe's
            matchmakers will find who is most compatible for you, and send you on
            a tailor made first date.
          </p>
        </div>
        <div className="home-list-container">
          <h3>Steps to begin your dating journey:</h3>
          <div className="home-list">
            <ul>
              <li>Sign up as a user for the website!</li>
              <li>Fill out your profile and list your interests</li>
              <li>
                Subscribe to the premium version if you want to actually go on
                dates.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
