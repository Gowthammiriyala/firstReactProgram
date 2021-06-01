import logo from "./logo.svg";
import "./App.css";

import { Component, useState } from "react";

export default App;

function App() {
  return (
    <div>
      <EightComponent></EightComponent>
    </div>
  );
}

const FirstComponent = () => {
  return (
    <div>
      <h1>keerthi miriyala</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae qui
        tenetur maxime molestias magni aliquam molestiae quasi, voluptate quas
        perspiciatis!
      </div>
    </div>
  );
};

const SecondComponent = () => {
  let [counter, setCounter] = useState(100);

  const updateCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Component - click/set</h1>
      <input type="button" value="click" onClick={updateCounter} />
      <div>counter - {counter}</div>
    </div>
  );
};

function ThirdComponent() {
  const [like, setLike] = useState(1);

  const updateComponent = () => {
    setLike(like + 1);
  };
  return (
    <div>
      <h1>Instagram</h1>
      <input type="button" value="like" onClick={updateComponent} />
      <div>like - {like}</div>
    </div>
  );
}

function ListComponent() {
  const [counter] = useState(100);
  const [userName] = useState("Gowtham");
  const [list] = useState(["Hyderabad", "Mumbai", "chennai", "pune"]);
  return (
    <div>
      <h1>Some Components</h1>
      <h3>{counter}</h3>
      <h3>{userName}</h3>
      <h3>{list}</h3>

      {list.map((item, index) => (
        <h2>{item}</h2>
      ))}
    </div>
  );
}

const FifthComponent = () => {
  const [list, setList] = useState([1, 2, Math.random()]);

  const updateComponent = () => {
    const newList = [...list];
    newList.unshift(Math.random());
    setList(newList);
  };

  return (
    <div>
      <h1> Fifth Component</h1>

      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

const SixComponent = () => {
  const [list, setlist] = useState([1, Math.random()]);

  const updateComponent = () => {
    setlist([...list, Math.random()]);
  };
  return (
    <div>
      <h1>Twitter</h1>
      <input type="button" value="list" onClick={() => updateComponent()} />
      {list.map((item, index) => (
        <div className="beauty">{item}</div>
      ))}
    </div>
  );
};

const SevenComponent = () => {
  return (
    <div>
      <h1 className="Beauty2">Charan Rekhapalli</h1>
    </div>
  );
};

const EightComponent = () => {
  const [list, setlist] = useState([]);
  const [thoughts, setThoughts] = useState("");

  const printInput = (e) => {
    setThoughts(e.target.value);
  };

  const Component1 = () => {
    setlist([thoughts, ...list]);
    setThoughts("");
  };
  return (
    <div>
      <h1>Twitter</h1>
      <input
        type="text"
        value={thoughts}
        onChange={(e) => printInput(e)}
        placeholder="tweet...."
      />
      <input type="button" value="tweet" onClick={() => Component1()} />

      <div>
        {list.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};
