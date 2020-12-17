import { useEffect, useState } from "react";
import "./App.css";

function DataLine({ name, data }) {
  return (
    <p>
      <strong>{name}:</strong> {data}
    </p>
  );
}

function AudioData({ data }) {
  const { fileType, fileSize, codecType, duration, channelCount } = data;
  return (
    <>
      <DataLine name="File Type" data={fileType} />
      <DataLine name="File Size" data={fileSize} />
      <DataLine name="Codec Type" data={codecType} />
      <DataLine name="Duration" data={duration} />
      <DataLine name="Channel Count" data={channelCount} />
    </>
  );
}

function Loading() {
  return <p>Loading...</p>;
}

function Error() {
  return <p>An error occurred.</p>;
}

function App() {
  const [audioData, updateAudioData] = useState(null);
  const [errorOccurred, updateErrorOccurred] = useState(false);

  useEffect(() => {
    if (!audioData) {
      fetch("http://localhost:5000")
        .then((res) => res.json())
        .then((json) => {
          updateAudioData(json.data);
        });
    }
  });

  let content;
  if (errorOccurred) {
    content = <Error />;
  } else if (audioData) {
    content = <AudioData data={audioData} />;
  } else {
    content = <Loading />;
  }

  return (
    <div className="audio-data-container">
      <h1 className="title">Audio Data</h1>
      {content}
    </div>
  );
}

export default App;
