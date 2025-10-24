import React from "react";

// 1. Envolvemos el componente con React.forwardRef
// 2. `ref` se convierte en el segundo argumento, después de las props.
const Input = React.forwardRef(({ label, type, error, ...props }, ref) => {

    return(
        <div>
            {/* Usamos el `id` de las props para el `htmlFor` */}
            <label htmlFor={props.id}>{label}:</label>
            <br />
            <input 
                type={type} 
                // 3. Pasamos el ref al input
                ref={ref}
                // 4. Esparcimos el resto de las props (name, onChange, onBlur, placeholder, id, etc.)
                {...props}
            />
            {error && <div style={errorStyle}>{error}</div>}
            <br />
        </div>
    );
});

export default Input;
