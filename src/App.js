import Calculator from "./components/Calculator"

function App() {
  const styles ={
    textAlign: "center",
    fontFamily: "Lucida Console",

  }
  return (
    <div>
    <Calculator />
    <h4 style={styles}>Made with 💗 |&#169; 2021 </h4>
    </div>
  );
}

export default App;
