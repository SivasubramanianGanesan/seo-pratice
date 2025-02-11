import React from 'react';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>SEO Practice with React</h1>
      </header>
      
      <div className="section">
        <h2>What is SEO?</h2>
        <p>
          SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in search engine results pages (SERPs).
        </p>
      </div>

      <div className="section">
        <h2>Why is SEO important?</h2>
        <p>
          SEO is crucial because it helps increase the visibility of your website, driving more organic traffic and increasing conversions.
        </p>
      </div>

      <div className="section">
        <h2>How can React be SEO-friendly?</h2>
        <p>
          React can be SEO-friendly by using server-side rendering (SSR) or static site generation (SSG), which pre-renders content before it reaches the browser.
        </p>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

