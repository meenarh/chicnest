import { render, screen } from '@testing-library/react';
import RelatedProduct from './RelatedProduct';

test('renders related products section', () => {
  render(<RelatedProduct productId="1" />);
  const headingElement = screen.getByText(/Related Products/i);
  expect(headingElement).toBeInTheDocument();
});
