import React, { Component } from 'react';

const ResultComponent = ( {result} ) => {
    return (
        <div className="result">
            <p>{ result }</p>
        </div>
    );
}

export default ResultComponent;