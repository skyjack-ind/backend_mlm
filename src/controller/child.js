const { getAllChild, getUser } = require("../model/child");
const helper = require("../helper");
const looper = require("../helper/childLooper");

module.exports = {
  getAllChild: async (req, res) => {
    try {
      let id = req.params.id;
      let arr = [];
      //Level 1
      let result = await getAllChild(id);
      const user = await getUser(id);
      const parent = await getUser(user[0].reff);
      //Level 2
      // looper.looper(result).then(response => {
      //   response.forEach(item => {
      //     result = [...result, ...item];
      //   });
      //   console.log(response);
      //   return helper.response(res, 200, { child: result, user, parent });
      // });

      Promise.all(
        result.map(async item => {
          const arrRes = await getAllChild(item.id);
          return arrRes;
        })
      ).then(response => {
        response.forEach(item => {
          result = [...result, ...item];
          // if (!arr.includes(item[0].id)) {
          //   arr.push(item[0].id);
          // }
        });

        return helper.response(res, 200, { child: result, user, parent });
      });
      //Level 3
    } catch (error) {
      throw error;
      // return helper.response(res, 400, { message: "error" });
    }
  }
};
