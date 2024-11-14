import React from 'react';
import { Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

// You can change this to your name
const firstName = "";

function App() {
  return (
    <Container className="d-flex flex-column align-items-center py-5">
      <Card className="product-card shadow-lg" style={{ maxWidth: '400px' }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      
      <div className="mt-4 text-center">
        <h3>{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</h3>
        {firstName && (
          <img 
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Welcome"
            style={{ maxWidth: '200px', borderRadius: '10px', marginTop: '20px' }}
          />
        )}
      </div>
    </Container>
  );
}

export default App;
