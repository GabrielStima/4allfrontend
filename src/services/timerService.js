export const timerCoutdown = (date) => {
  const dateNow = new Date();
  const dateTimer = new Date(date);
  const diff = Math.abs(dateNow - dateTimer);
  const min = Math.floor(diff / 1000 / 60);
  let result;

  if (min >= 15) {
    result = true;
  } else {
    result = false;
  }

  return result;
};
