'use client';

import { useState } from 'react';
const Text = () => {
  const [show, setShow] = useState(true);

  function handleShow() {
    setShow(!show);
  }

  return (
    <div>
      <button onClick={handleShow}>{show ? 'Ocultar' : 'Mostrar'}</button>
      {show && <h2>No se</h2>}
    </div>
  );
};

export default Text;
