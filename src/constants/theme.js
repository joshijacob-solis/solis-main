import { useState } from "react";

export const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  return theme?{
    fontColor:"#fff",
    cardBgColor:"#3c3c3c",
    bgColor:"rgba(0,0,0,0.8)"
  }:{
    fontColor:"#3c3c3c",
    cardBgColor:"#fff",
    bgColor:"fff"
  }
};
