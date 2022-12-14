import './textBox.css';
import React, { useEffect, useState } from "react";
export const TextBox = ({ id, label, value }) => {
  return (
    <div className="textBox">
    <label htmlFor={id}>{label}</label>
      <input type='text'/>
    </div>
  );
};
