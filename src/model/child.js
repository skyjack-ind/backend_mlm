const connection = require("../config/mysql");

module.exports = {
  getUser: id => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM user WHERE user.id = ?",
        [id],
        (err, res) => {
          if (!err) {
            resolve(res);
          }
          reject(res);
        }
      );
    });
  },
  getAllChild: id => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM user WHERE user.reff = ?",
        [id],
        (err, res) => {
          if (!err) {
            resolve(res);
          }
          reject(res);
        }
      );
    });
  }
};
