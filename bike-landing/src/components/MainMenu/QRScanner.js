import React, { useState } from "react";
import styles from "./CSSModule/QRScanner.module.css";
import { QrReader } from "react-qr-reader";
export const QRScanner = (props) => {
  const [camEnable, setCamEnable] = useState(false);
  const handleCamera = () => {
    setCamEnable(!camEnable);
  };
  return (
    <div className={styles.teste}>
      <button onClick={handleCamera}>Pedale Agora</button>
      {camEnable && (
        <QrReader
          containerStyle={{ width: "500px", heigth: "500px" }}
          onResult={(result, error) => {
            if (!!result) {
              document.location.replace(result?.text);
            }
            if (!!error) {
              console.info(error);
            }
          }}
          style={{ width: "200px", heigth: "100px" }}
        />
      )}
    </div>
  );
};
