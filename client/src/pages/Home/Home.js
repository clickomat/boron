import React from "react";
import Hotel from "./../../components/hotel";
import Reviews from "./../../components/review";




const Home = () => {
  return (
    <div>
      <main>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="card-panel mission">
                <h1 className="brand-logo" id="mstitle">
                  Accessible<span id="travel">Travel</span>
                </h1>
                <p className="statement">
                  Our goal with Accessible Travel is to create safe, sensory-friendly, 
                  certified travel options for parents and individuals
                  on the Spectrum.
                </p>
                <p className="statement">
                  Taking a vacation together, as a family, can be one of the
                  biggest challenges of having a family member who has sensory
                  processing complications. 
                  </p>
                  <p className="statement">
                  Our site provides parents with a
                  community to share ideas, plan trips with other families,
                  review destinations, and explore travel options at some of the
                  most beautiful places in the world.
                </p>
                <p className="statement">
                  As a parent of an individual on the spectrum you can be
                  assured that the destinations featured on Accesible Travel
                  have been certified or highly recommended by those in the
                  Autism Community.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
      <div className="card-panel col s6 mission"><span class="flow-text"> <Reviews /></span></div>
      <div className="card-panel col s6 mission"><span class="flow-text"><Hotel /></span></div>
    </div> */}
      </main>
    </div>
  );
};
export default Home;
