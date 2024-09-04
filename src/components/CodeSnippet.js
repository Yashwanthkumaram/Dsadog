import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippet = ({ language, code }) => {
  return (
    <div style={styles.container}>
      <SyntaxHighlighter language={language} style={darcula} showLineNumbers={true}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

const styles = {
  container: {
    margin: '1rem 0',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
};

export default CodeSnippet;
