import React, { useState } from 'react';
import { createParticipants, selectParticipant, getAllParticipants } from './api/teaApi';
import './App.css';

function App() {
  const [nameInput, setNameInput] = useState('');
  const [participants, setParticipants] = useState<string[]>([]);
  const [selectedTeaMaker, setSelectedTeaMaker] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const addParticipants = async () => {
    if (!nameInput.trim()) {
      setError('Please enter at least one name');
      return;
    }
    setError('');

    try {
      const names = nameInput.split(',').map(name => name.trim()).filter(name => name);
      await createParticipants(names);
      setNameInput('');
      setSelectedTeaMaker(''); 
    } catch (err) {
      setError('Names must be unique. Please try again.');
    }
  };

  const getParticipants = async () => {
    try {
      const participantList = await getAllParticipants();
      setParticipants(participantList);
    } catch (err) {
      setError('Failed to fetch participants. Please try again.');
    } 
  }

  const selectTeaMaker = async () => {
    setLoading(true);
    setError('');

    try {
      const teaMaker = await selectParticipant();
      setSelectedTeaMaker(teaMaker);
    } catch (err) {
      setError('Failed to select tea maker. Please add some names first.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="main-card">
        <div className="header">
          <h1 className="title">☕ Who makes wins...</h1>
          <p className="subtitle">...unless you've got loads to do</p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <div className="form-section">
          <div className="input-group">
            <label className="input-label">
              Enter the contestants... (comma separated, unique names please)
            </label>
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="Alice, Bob, Charlie..."
              disabled={loading}
              className="name-input"
            />
          </div>

          <button
            onClick={addParticipants}
            disabled={loading || !nameInput.trim()}
            className="btn btn-primary"
          >
            Add Participants
          </button>

          <div className="divider">
            <button
              onClick={selectTeaMaker}
              disabled={loading}
              className="btn btn-secondary"
            >
              Choose Tea Maker
            </button>
          </div>
        </div>

          <div className="result-section">
            <h2 className="result-title">Mr/Mrs/Mx T</h2>
            <p className="selected-name">{selectedTeaMaker}</p>
            <p className="celebration">You are the chosen</p>
          </div>
      </div>
      <div className="main-card">
      <h3 className="participants-title">Participants:</h3>
            <ul className="participants-list">
              {participants.map((participant, index) => (
                <li key={index} className="participant-item">
                  {participant}
                </li>
              ))}
            </ul>
          <button
                onClick={getParticipants}
                className="btn btn-secondary"
              >
                Show Participants
              </button>
          </div>
    </div>
  );
}

export default App;