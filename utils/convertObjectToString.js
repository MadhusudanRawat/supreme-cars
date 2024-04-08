"use client";

export const convertObjectToString = (obj) => {
  let str = "";

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (str !== "") {
        str += "&";
      }
      str += key + "=" + obj[key];
    }
  }
  return str;
};
