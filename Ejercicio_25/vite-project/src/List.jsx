/**
 * Renderiza una lista de items.
 * @param {{ items: any[], onRenderItem: (item: any) => React.ReactNode }} props
 */
function List({ products, onRenderItem }) {
  return (
    <ul>
      {products.map(onRenderItem)}
    </ul>
  );
}

export default List;