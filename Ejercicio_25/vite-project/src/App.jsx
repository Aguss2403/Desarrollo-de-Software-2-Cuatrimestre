import { useState } from "react";
import "./App.css";
import List from "./List.jsx";
import Button from "./Button.jsx";

function App() {
  const [show, setShow] = useState(false);
  
  // Función para alternar el valor
  const toggleShow = function() {
    setShow(!show);
  };

  const products = [
    { id: 1, nombre: 'Laptop', precio: 1200 },
    { id: 2, nombre: 'Mouse', precio: 25 },
    { id: 3, nombre: 'Teclado', precio: 45 },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Listado de productos</h1>
      <Button onClick={toggleShow}>
        {show ? "Ocultar productos" : "Mostrar productos"}
      </Button>
      {show && (
        <List
          products={products}
            onRenderItem={(product) => (
              <li key={product.id}>
                {product.nombre} - ${product.precio}
              </li>
            )}
        />
      )}
      </div>
  );
}

export default App;
