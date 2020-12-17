const express = require("express");
const morgan = require("morgan");

const info = require("./info");
const processAudioData = require("./lib/process-audio-data");
const responseJSON = require("./lib/response-json");

const PORT = 5000;

// allowing flexibility with logging
const log = function (...items) {
  console.log(...items);
};

const app = express();
// request logging
app.use(morgan("tiny"));

// quick, dirty data cache
let data;

app.get("/", (req, res) => {
  if (!data) {
    info((error, _data) => {
      if (error) {
        log(`Error: ${error}`);
        res.status(500).json(responseJSON({ errors: [error] }));
        return;
      }
      data = processAudioData(_data);
      res.status(200).json(responseJSON({ data }));
    });
    return;
  }

  res.status(200).json({ data });
});

app.listen(PORT, () => {
  log(`App listening on port ${PORT}`);
});
