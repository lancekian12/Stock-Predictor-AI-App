import React, { useState } from "react";
import { dates } from "../utils/dates";
import ActionPanel from './ActionPanel';
import LoadingPanel from './LoadingPanel';
import OutputPanel from './OutputPanel';


const StockPredictor = () => {
    const apiKey = import.meta.env.VITE_POLYGON_API_KEY;

    const [tickers, setTickers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [apiMessage, setApiMessage] = useState('Querying Stocks API...');
    const [report, setReport] = useState(null);

    const addTicker = (ticker) => {
        if (ticker.length >= 3 && tickers.length < 3) {
            setTickers([...tickers, ticker.toUpperCase()]);
        }
    };

    const fetchStockData = async () => {
        setLoading(true);
        setApiMessage('Querying Stocks API...');
        try {
            const results = await Promise.all(
                tickers.map(async (ticker) => {
                    const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${dates.startDate}/${dates.endDate}?apiKey=${apiKey}`;
                    const res = await fetch(url);
                    if (res.ok) {
                        setApiMessage('Creating report...');
                        return res.text();
                    } else {
                        throw new Error(`API error for ${ticker}`);
                    }
                })
            );
            // TODO: replace with AI report logic
            const combined = results.join('');
            setReport(`Report data: ${combined}`);
        } catch (err) {
            setApiMessage('There was an error fetching stock data.');
            console.error(err);
        }
        setLoading(false);
    };



    return (
        <div className="app-container">
            <header>
                <img src="" alt="Dodgy Dave's Stock Predictions" />
            </header>
            <main>
                {!loading && report == null && (
                    <ActionPanel
                        tickers={tickers}
                        addTicker={addTicker}
                        onGenerate={fetchStockData}
                    />
                )}
                {loading && <LoadingPanel message={apiMessage} />}
                {report && <OutputPanel report={report} />}
            </main>
            <footer>&copy; This is not real financial advice!</footer>
        </div>
    );
};

export default StockPredictor;
