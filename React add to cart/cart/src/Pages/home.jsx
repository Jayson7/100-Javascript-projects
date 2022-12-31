import React from "react";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <div className="container mt-5">
      <div className="jumbotron text-white">
        <h1 className="display-4">We sell What You Desire. SPEED!</h1>
        <p className="lead">
          We offer a trusted, reliable and cost-effective online marketplace for
          the widest range of quality vehicles around the world. Make 97%
          remaining payment on vehicle delivery at your doorstep.
        </p>
        <hr className="my-4" />
        <p>
          End to End Assistance from Listing till Selling with a Dedicated
          Mindset.
        </p>
        <Link className="btn  btn-info btn-lg" to="#" role="button">
          Learn more
        </Link>

        <Link className="btn mx-5 btn-primary btn-lg" to="#" role="button">
          Order now
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
