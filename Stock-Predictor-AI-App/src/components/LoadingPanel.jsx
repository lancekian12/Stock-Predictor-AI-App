// LoadingPanel.jsx
export default function LoadingPanel({ message }) {
    return (
        <section
            className="loading-panel"
            style={{ display: 'flex' }}    // force it visible
        >
            <img src="images/loader.svg" alt="loading" />
            <div id="api-message">{message}</div>
        </section>
    );
}
