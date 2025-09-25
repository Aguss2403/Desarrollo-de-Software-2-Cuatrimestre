# Dsw2025Ej21

Este proyecto requiere que implementes la funcionalidad para abrir el menú de navegación (`nav`) desde el botón correspondiente cuando la página está en modo móvil.

**Instrucciones:**
- Utiliza JavaScript para detectar el clic en el botón de menú.
- Al hacer clic, muestra u oculta el menú de navegación.
- Asegúrate de que la funcionalidad solo se active en resoluciones móviles.

Puedes usar `classList.toggle` para mostrar/ocultar el menú.

Ejemplo básico:

```js
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});
```

No olvides agregar los estilos CSS necesarios para que el menú se oculte y se muestre correctamente en modo móvil.