import { fetchProducts, addProduct, updateProduct, deleteProduct } from './products';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks(); 

beforeEach(() => {
  fetchMock.resetMocks(); 
});

test('fetchProducts should fetch the list of products', async () => {
  const mockProducts = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
  
  fetchMock.mockResponseOnce(JSON.stringify(mockProducts));

  const products = await fetchProducts();

  expect(fetchMock).toHaveBeenCalledWith('https://api.escuelajs.co/api/v1/products');
  
  expect(products).toEqual(mockProducts);
});

it('addProduct should send a POST request to add a new product', async () => {
  const newProduct = { name: 'New Product', price: 100 };
  const mockResponse = { id: 1, ...newProduct };

  fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

  const addedProduct = await addProduct(newProduct);

  expect(fetchMock).toHaveBeenCalledWith('https://api.escuelajs.co/api/v1/products/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newProduct),
  });
  
  expect(addedProduct).toEqual(mockResponse);
});

it('updateProduct should send a PUT request to update an existing product', async () => {
  const updatedProduct = { name: 'Updated Product', price: 200 };
  const mockResponse = { id: 1, ...updatedProduct };

  fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

  const result = await updateProduct(1, updatedProduct);

  expect(fetchMock).toHaveBeenCalledWith('https://api.escuelajs.co/api/v1/products/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedProduct),
  });
  
  expect(result).toEqual(mockResponse);
});

it('deleteProduct should send a DELETE request to remove a product', async () => {
  const mockResponse = { message: 'Product deleted' };

  fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

  const result = await deleteProduct(1);

  expect(fetchMock).toHaveBeenCalledWith('https://api.escuelajs.co/api/v1/products/1', {
    method: 'DELETE',
  });
  
  expect(result).toEqual(mockResponse);
});