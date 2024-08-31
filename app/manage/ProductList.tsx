export default function ProductList({ products, onUpdateProduct, onDeleteProduct }: { 
  products: any[], 
  onUpdateProduct: (id: number, product: any) => void, 
  onDeleteProduct: (id: number) => void 
}) {
  return (
    <div className="grid grid-cols-5 gap-4">
      {products.map((product) => (
        <div key={product.id} className="">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          {product.images && product.images.length > 0 && (
            <img src={product.images[0]} alt={product.title} className="product-image" />
          )}
          <button onClick={() => onUpdateProduct(product.id, product)} className="btn btn-secondary">
            Edit
          </button>
          <button onClick={() => onDeleteProduct(product.id)} className="btn btn-danger">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
