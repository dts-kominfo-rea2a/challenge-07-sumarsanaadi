const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let dataTheaterIXX = await promiseTheaterIXX();
  let dataTheaterVGC = await promiseTheaterVGC();
  let dataCombine = dataTheaterIXX.concat(dataTheaterVGC);
  let totalEmotion = 0;
  dataCombine.map(data => data.hasil === emosi && (totalEmotion += 1));
  return totalEmotion;
};

module.exports = {
  promiseOutput,
};
