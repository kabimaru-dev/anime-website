import "./styles/App.css";

function App() {
  let age = 18;
  let array = [18, 14, 26];

  return (
    <div className="App">
      <div className="start">
        {array.map((age, index) => {
          if (age >= 18) {
            console.log(" ");
            console.log("good");
            return <div key={index++}>good</div>;
          } else {
            console.log(" ");
            console.log("bad");
            return <div key={index++}>bad</div>;
          }
        })}
      </div>
    </div>
  );
}

export default App;
