import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

    const handleChange = (e) => {
      setText(e.target.value);
    }

    const countWords = () => {
    const words = text.split(' '); // Split the text using a space as the delimiter.
    const filteredWords = words.filter(word => word !== ''); // Remove any empty strings.
    return filteredWords.length;
    }

  return (
    <div className="App">
      <h1>Word Counter</h1>
      <textarea
        placeholder="Type your paragraph here..."
        value={text}
        onChange={handleChange}
      />
      <p>
        Word Count: {countWords()}
      </p>
    </div>
  );
}

export default App;
