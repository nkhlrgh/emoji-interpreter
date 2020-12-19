import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "👋": "Waving",
  "✋": "Raised Hand(Front)",
  "🤚": "Raised Hand(Back)",
  "🖐️": "Hand with Fingers Splayed",
  "🖖": "Vulcan Salute",
  "👌": "Perfect",
  "🤏": "Pinching",
  "✌️": "Victory",
  "🤞": "Fingers Crossed",
  "🤙": "Call Me",
  "✊": "Raised Fist",
  "👊": "Oncoming Fist",
  "👏": "Clapping",
  "🙌": "Raising Hands",
  "👐": "Open Hands",
  "🤲": "Palms Up",
  "🤝": "Handshake",
  "🙏": "Folded Hands",
  "👍": "Thumbs Up"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setmeaning] = useState("");

  function onchangehandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We do not this in our dictionary";
    }
    setmeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>The Hand Emoji Interpreter</h1>
      <input onChange={onchangehandler} placeholder="Search"></input>
      <h3>Your output will appear here</h3>
      <div className="output">{meaning}</div>
      <div>
        <h3>Or select one from the list below</h3>
        {emojisWeKnow.map((emoji) => {
          return (
            <span
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
