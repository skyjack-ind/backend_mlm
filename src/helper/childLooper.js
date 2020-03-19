const { getAllChild } = require("../model/child");

module.exports = {
  looper: data => {
    return Promise.all(
      data.map(async item => {
        const arrRes = await getAllChild(item.id);
        return arrRes;
      })
    );
  }
};
