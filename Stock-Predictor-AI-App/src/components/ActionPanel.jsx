import React, { useState } from 'react';

export default function ActionPanel({ tickers, addTicker, onGenerate }) {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.length >= 3) {
            setError('');
            addTicker(input);
            setInput('');
        } else {
            setError(
                'You must add at least one ticker. A ticker is a 3 letter or more code for a stock. E.g TSLA for Tesla.'
            );
        }
    };

    return (
        <section className="action-panel">
            <form id="ticker-input-form" onSubmit={handleSubmit}>
                <label htmlFor="ticker-input">
                    Add up to 3 stock tickers below to get a super accurate stock
                    predictions report👇
                </label>
                {error && <p className="error">{error}</p>}
                <div className="form-input-control">
                    <input
                        type="text"
                        id="ticker-input"
                        placeholder="MSFT"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button className="add-ticker-btn">
                        <img
                            src="images/add.svg"
                            className="add-ticker-svg"
                            alt="add"
                        />
                    </button>
                </div>
            </form>
            <p className="ticker-choice-display">
                {tickers.length > 0
                    ? tickers.map((t) => <span key={t} className="ticker">{t}</span>)
                    : 'Your tickers will appear here...'}
            </p>
            <button
                className="generate-report-btn"
                type="button"
                disabled={tickers.length === 0}
                onClick={onGenerate}
            >
                Generate Report
            </button>
            <p className="tag-line">Always correct 15% of the time!</p>
        </section>
    );
}