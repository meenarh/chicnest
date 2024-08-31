export async function fetchProducts() {
   const response = await fetch('https://api.escuelajs.co/api/v1/products');
   return response.json();
 }
 
 export async function addProduct(product: any) {
   const response = await fetch('https://api.escuelajs.co/api/v1/products/', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(product),
   });
   return response.json();
 }
 
 export async function updateProduct(id: number, product: any) {
   const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
     method: 'PUT',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(product),
   });
   return response.json();
 }
 
 export async function deleteProduct(id: number) {
   const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
     method: 'DELETE',
   });
   return response.json();
 }
 