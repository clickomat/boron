import React from "react";
import "./Home.css";


const Home = () => {
  return (
  <main>
  <div className="parallax"></div>
  <div className="homedescription">
    <h1 className="maintitle brand-logo">ACCESSIBLE TRAVEL</h1>
    <h5 className="maintag">SAFE, SENSORY FRIENDLY, CERTIFIED TRAVEL OPTIONS FOR PARENTS
      AND INDIVIDUALS ON THE SPECTRUM.
    </h5>
  </div>
  <div className="parallaxsection">
    <div className="row">
      <div className="col s9">
        <h2 id="hotels">HOTELS</h2>
        <p className="hotelstext">Taking a vacation together, as a family, can be one of the
          biggest challenges of having a family member who has sensory
          processing complications.</p>
        <p className="hotelstext">Search through certified and recommended hotels for your trip
          and find the right fit for you.</p>
        <a href="/Hotels"> FIND YOUR HOTEL > </a>
      </div>
      <div className="col s3">
        <img id="hotelicon" src="https://i.imgur.com/4BySknV.png" />
      </div>
    </div>
  </div>
  <div id ="mid1" className="parallax"></div>
  <div className="parallaxsection">
    <div className="row">
      <div className="col s3">
        <img id="hotelicon" src="https://i.imgur.com/8WgBfAD.png" />
      </div>
      <div className="col s9">
        <h2 id="activities">ACTIVITIES</h2>
        <p className="activitiestext">Our site provides parents with a
          community to share ideas, plan trips with other families, review 
          destinations, and explore travel options at some of the most 
          beautiful places in the world.</p>
        <p className="activitiestext">Find something to do that your whole 
        family will enjoy.</p>
        <a id="activitylink" href="/Activities"> SEARCH FOR AN ACTIVITY > </a>
      </div>
    </div>
  </div>
  <div id ="mid1" className="parallax"></div>
  <div className="parallaxsection">
    <div className="row">
      <div className="col s9">
        <h2 id="hotels">REVIEWS</h2>
        <p className="hotelstext">As a parent of an individual on the spectrum you can be
          assured that the destinations featured on Accessible Travel
          have been certified or highly recommended by those in the
          Autism Community.</p>
        <p className="hotelstext">Be assured that your vacation has been tried
        and tested by other families like yours.</p>
        <a href="/Reviews"> READ REVIEWS > </a>
      </div>
      <div className="col s3">
        <img id="hotelicon" src="https://i.imgur.com/zn0nLi1.png" />
      </div>
    </div>
  </div>
  <div id="mid2" className="parallax"></div>
  </main>
  );
};
export default Home;
