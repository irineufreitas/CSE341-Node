const hellWorld = (req, res) => {
    res.send("Hello World!");
  };

const wifeFunction = (req, res) => {
    res.send("Wife Monica World!");
  };

module.exports = {hellWorld, wifeFunction};