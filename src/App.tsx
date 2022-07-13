import { Footer, InputBox } from "./components";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h1 style={{ textAlign: "center" }}>Text to PDF</h1>
        <InputBox />
      </div>
      <Footer />
    </div>
  );
}

export default App;
