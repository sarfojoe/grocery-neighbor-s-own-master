/* import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const Footer = () => {
  return (
    <MDBFooter color="#333" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="/"> Grocery Neighbors </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
 */

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* column1 */}
          <div className="col">
            <h5>Grocery Neighbors</h5>
          </div>
          {/* column2 */}
          <div className="col">
            <h4>DEVELOPERS</h4>
            Joseph Boadi, Paljakka Jonne, Kusnierz Beata, Rönkkö Makiyo,
            Odusanya Olabisi
          </div>
          {/* column3 */}
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Grocery Neighbors| All rights
            reserved | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
