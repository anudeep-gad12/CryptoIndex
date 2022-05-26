export const wait = (waitTime) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Request took too long to respond! Please try again!");
    }, waitTime * 1000);
  });
};

export const timeOut = (wait, f1) => {
  Promise.race([wait, f1])
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
