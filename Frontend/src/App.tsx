import React from 'react';
import './App.css';
import InvoiceForm from './Components/InvoiceForm/InvoiceForm';
import UploadFile from './Components/UploadFile/UploadFile';

function App() {
  return (
    <div>
      <InvoiceForm />
      <UploadFile />
    </div>
  );
}

export default App;
