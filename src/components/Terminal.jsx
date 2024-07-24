import React, { useState } from 'react';
import './Terminal.css';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    'Welcome to my website! Get started by typing `help` command below',
    '$ tanyasingh-dev >> help'
  ]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      processCommand(input);
      setInput('');
    }
  };

  const processCommand = (command) => {
    let newOutput = [...output, `$ tanyasingh-dev >> ${command}`];

    switch (command.toLowerCase()) {
      case 'help':
        newOutput = newOutput.concat([
          'Available Commands:',
          '',
          'whoami: Tells you who are you',
          'search:You can search anything you want',
          'get-location: Gets your current location',
          'clear: clears out everything on screen!',
          'github:github repository',
          'home:go to home-page',
        ]);
        break;
      case 'whoami':
        newOutput.push('You are a guest user.');
        break;
      case 'search':
        window.location.href = 'https://www.google.com/';  // Redirect to Navbar components page
        break;

        case 'github':
          window.location.href='https://github.com/tanyasingh0909';
          break;

        
      case 'get-location':
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setOutput((prevOutput) =>
              prevOutput.concat(`Latitude: ${latitude}, Longitude: ${longitude}`)
            );
          });
        } else {
          newOutput.push('Geolocation is not supported by this browser.');
        }
        break;
      case 'clear':
        newOutput = [];
        break;
      default:
        newOutput.push(`Command not found: ${command}`);
    }

    setOutput(newOutput);
  };

  return (
    <div>
        <div class='box-t'>  <div class='line-t'></div>
        <div> <h1 class='terminal-head'>Terminal</h1></div></div>
     
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="button red"></span>
            <span className="button yellow"></span>
            <span className="button green"></span>
          </div>
          <div className="terminal-title">Terminal</div>
        </div>
        <div className="terminal-content">
          {output.map((line, index) => (
            <div key={index} className="terminal-line">{line}</div>
          ))}
          <div className="terminal-input">
            <span className="prompt">{'>'}</span>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleInputSubmit}
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
