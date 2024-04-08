export const convertStringToObject = (str) => {
  const obj = {};
  const keyValuePairs = str.split("&");

  keyValuePairs.forEach((pair) => {
    const [key, value] = pair.split("=");
    obj[key] = value;
  });

  return obj;
};
