import React from "react";
import "../../styles/jumbotron.css";

const Jumbotron = () => {
  return (
    <div className="container-md">
      <div className="row" >
        <div className="img-0 col">
            <img
              src="https://www.reiss.com/nxtcms/resource/blob/4617558/257c5647d38454b19936a05555e21b51/01-02-22-ol-mw-min-2-data.jpg"
              className="card-img-top"
              alt="..."
            />
        </div>
        <div className="img-1 col">
            <img
              src="https://www.reiss.com/nxtcms/resource/blob/4617560/a35398d954f1bfdc012fbf87094c41b4/01-02-22-ol-ww-min-2-data.jpg"
              className="card-img-top"
              alt="..."
            />
        </div>
      </div>

      <div className="row ">
        {/* imagenes hombre */}
        <div className="img-2 col-3  text-center">
          <img
            src="https://xcdn.next.co.uk/common/Items/Default/Default/Publications/3_4Ratio/G28/shotview-366x488/2424/T44-646s.jpg"
            className="card-img-top"
            alt="..."
          />
        </div>
        {/* imagenes hombre */}
        <div className="img-3 col-3 text-center">
          <img
            src="https://xcdn.next.co.uk/COMMON/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/T57760s.jpg"
            className="card-img-top"
            alt="..."
          />
        </div>
        {/* imagenes mujer */}
        <div className="img-4 col-3  text-center">
          <img
            src="https://xcdn.next.co.uk/common/Items/Default/Default/Publications/3_4Ratio/G26/shotview-366x488/8424/T44-866s.jpg"
            className="card-img-top"
            alt="..."
          />
        </div>

        {/* imagenes mujer */}
        <div className="img-5 col-3 text-center">
          <img
            src="https://xcdn.next.co.uk/common/Items/Default/Default/Publications/3_4Ratio/G26/shotview-366x488/1711/A75-219s.jpg"
            className="card-img-top"
            alt="..."
          />
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <div className="card-body">
            <a href="#" className="btn btn-outline-dark">
              SHOP MENS
            </a>
          </div>
        </div>

        <div className="col text-center">
          <div className="card-body">
            <a href="#" className="btn btn-outline-dark">
              SHOP WOMENS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
