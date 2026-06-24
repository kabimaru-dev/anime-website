import "./styles/App.css";

function App() {
  let age = 18;

  let array = [18, 14, 26];

  return (
    <div className="App">
      <div className="start">
        {array.map((age, index) => {
          if (age >= 18) {
            <div key={index}>good</div>;
            console.log(" ");
            console.log("good");
            index++;
          } else {
            <div key={index}>bad</div>;
            console.log(" ");
            console.log("bad");
            index++;
          }
        })}
      </div>
    </div>
  );
}

export default App;
