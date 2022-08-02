import React from "react";
import Image from "next/image";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
  MDBView,
} from "mdbreact";
import { priceFormatted } from "./helpers";

const PropertyVip = ({ properties }) => {
  console.log(properties);
  return (
    <>
      <h2 className="h2-responsive font-weight-bold text-center my-4">
        Biens Sponsorisé
      </h2>
      <MDBRow>
        {properties &&
          properties.map((propertie) => (
            <MDBCol key={propertie._id} className="md-4">
              <MDBView zoom>
                <img
                  src={propertie.pictures[0]}
                  width="100%"
                  height="100%"
                  alt={propertie.title}
                />
              </MDBView>
              <MDBCardBody>
                <MDBCardTitle>{propertie.title}</MDBCardTitle>
                <MDBCardText>{priceFormatted(propertie.price)}</MDBCardText>
              </MDBCardBody>
            </MDBCol>
          ))}
      </MDBRow>
    </>
  );
};

export default PropertyVip;
