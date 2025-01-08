import React, { useState } from "react";

const CalcButton = ({ label, onClick }) => {
  return (
    <button onClick={() => onClick(label)}>{label}</button>
  );
};



export default CalcButton;
