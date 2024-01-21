const getHomepage = (req, res) => {
    //process data
    //call model
  res.send("Hello Word vs Hoi Dan IT & Eric ! & nodemon");
};

const getABC = (req, res) => {
  res.send("Check ABC");
};

const getHoiDanIT = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomepage,
  getABC,
  getHoiDanIT,
};
