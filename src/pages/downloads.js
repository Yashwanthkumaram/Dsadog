// src/App.js
import React from "react";
import "./download.css";

const pcapFiles = [
  { id: 1, title: "Scenario 1", description: "Network traffic analysis file for Scenario 1.", fileName: "./Scenario1.pcapng" },
  { id: 2, title: "Scenario 2", description: "Network traffic analysis file for Scenario 2.", fileName: "./Scenario2.pcap" },
];

function Download() {
  return (
    <div className="Download">
      <header className="App-header">
        <h1>PCAP File Downloads</h1>
        <div className="card-container">
          {pcapFiles.map((file) => (
            <div key={file.id} className="card">
              <h2>{file.title}</h2>
              <p>{file.description}</p>
              <a href={`/${file.fileName}`} download={file.fileName}>
                <button>Download File</button>
              </a>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Download;
