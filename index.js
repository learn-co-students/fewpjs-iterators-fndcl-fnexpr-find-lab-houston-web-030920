superbowlWin = (games) => {
  let result = games.find((games) => games.result === "W");
  return result ? result.year : undefined;
};
