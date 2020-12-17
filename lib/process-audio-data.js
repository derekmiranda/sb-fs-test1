const { raw } = require("express");

function processAudioData(rawData) {
  const { format_name, size, duration } = rawData.properties.format;
  const { codec_type, channels } = rawData.properties.stream;
  return {
    fileType: format_name,
    fileSize: size, // bytes
    codecType: codec_type,
    duration: duration, // seconds
    channelCount: channels,
  };
}

module.exports = processAudioData;
