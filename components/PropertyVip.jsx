import React from "react";
import Image from "next/image";
import styles from "../styles/property_vip.module.css";
import { priceFormatted } from "./helpers";

const PropertyVip = ({ properties }) => {
  console.log(properties);
  return (
    <section className={styles.propertyVipContainer}>
      <h2 className={styles.propertyVipTitle}>Biens Sponsorisé</h2>
      <div className={styles.cardsContainer}>
        {properties &&
          properties.map((property) => (
            <div className={styles.sponsoContainer} key={property.title}>
              <div className={styles.imgContainer}>
                <img
                  src={property.pictures[0]}
                  alt={property.title}
                  className={styles.img}
                />
              </div>
              <div className={styles.propertyInfoContainer}>
                <h3 className={styles.propertyTitle}>{property.title}</h3>
                <h5 className={styles.propertyPrice}>
                  {priceFormatted(property.price)}
                </h5>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default PropertyVip;
