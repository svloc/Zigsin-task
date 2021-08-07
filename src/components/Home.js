import React from "react";
import "../styles/Home.css";
export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-row">
          <div className="col">
            <div className="card-item"> 
              <h1>Ready for autumn collection</h1>
              <p>
                Treat yourself to someone of our brand new autumn collection -
                all with the wonderful colors surrounding you{" "}
              </p>
              <button className="btn-home">purchase now</button>
            </div>

            <img src="../bag.png" alt="bag" width="100%" />
          </div>
          <div className="col-6">
          <div className="card-item"> 
              <h1>Ready for autumn collection</h1>
              <p>
                Treat yourself to someone of our brand new autumn collection -
                all with the wonderful colors surrounding you{" "}
              </p>
              <button className="btn-home">purchase now</button>
            </div>
            <img src="../women.png" alt="women" width="100%" />
          </div>
        </div>
      </div>
    </>
  );
}
