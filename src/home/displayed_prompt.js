import React, { Component } from 'react';

export const DisplayedPrompt = ({ prompt }) => {
  return (
    <div>
      <h1 className="displayedPrompt">{prompt.prompt}</h1>
      <code className="source">Source: {prompt.source}</code>
    </div>
  )
}
