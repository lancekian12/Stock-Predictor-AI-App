// src/components/OutputPanel.jsx
import React from 'react';

export default function OutputPanel({ report }) {
    return (
        <section className="output-panel">
            <h2>Your Report 😜</h2>
            <p>{report}</p>
        </section>
    );
}