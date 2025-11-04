// import { BaseDirectory, create, mkdir } from "@tauri-apps/plugin-fs";
// import { useState } from "react";

export default () => {
  // const [text, setText] = useState("");
  // const [status, setStatus] = useState<string | null>(null);
  // const saveToDocuments = async () => {
  //   try {
  //     setStatus("Saving...");
  //     const fileName = "tmp/hms_text.txt";
  //     await mkdir("tmp", { baseDir: BaseDirectory.Document, recursive: true });
  //     const file = await create(fileName, {
  //       baseDir: BaseDirectory.Document,
  //     });
  //     await file.write(new TextEncoder().encode(text));
  //     await file.close();
  //     setStatus(`Saved to Documents/${fileName}`);
  //   } catch (err) {
  //     console.error(err);
  //     setStatus(`Error: ${err}`);
  //   }
  // };
  // return (
  //   <div style={{ padding: 16 }}>
  //     <input
  //       type="text"
  //       value={text}
  //       onChange={(e) => setText(e.target.value)}
  //       placeholder="Enter text to save"
  //       style={{ width: "60%", marginRight: 8 }}
  //     />
  //     <button onClick={saveToDocuments}>Save to Documents</button>
  //     {status && <div style={{ marginTop: 8 }}>{status}</div>}
  //   </div>
  // );
};
