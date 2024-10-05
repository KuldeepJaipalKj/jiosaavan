const package = require("../package.json");

module.exports = async (req, res) => {
  res.json({
    alive: true,
    made_by: "Kuldeep Jaipal",
    version: package.version,
    docs: `${process.env.APP_URL || "http://localhost:3000"}/docs`,
  });
};
