import React from "react";
import CaracteristicsCSS from "./Caracteristics.module.css";

interface CaracteristicsProps {
  caracteristic: [string, string][];
}

const Caracteristics: React.FC<CaracteristicsProps> = ({ caracteristic }) => {
  return (
    <div className={CaracteristicsCSS.container}>
      <table className={CaracteristicsCSS.table}>
        <tbody>
          {caracteristic.map(([name, value], index) => (
            <tr key={index}>
              <td>{name}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Caracteristics;
