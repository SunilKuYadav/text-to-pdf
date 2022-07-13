import jsPDF from "jspdf";
import React, { useState } from "react";

const InputBox = () => {
  const [text, setText] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  const savePdf = () => {
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    // doc.addImage(img, "JPG", 10, 30, 100, 100);
    doc.save(`${fileName === "" ? "omRudra" : fileName}.pdf`);
  };
  return (
    <div>
      <textarea
        rows={20}
        style={{
          width: "90vw",
          margin: "3vw",
        }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label>File Name</label>
        <input
          type="text"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
        <button onClick={savePdf}>Get PDF</button>
      </div>
    </div>
  );
};

export default InputBox;
