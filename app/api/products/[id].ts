import type { NextApiRequest, NextApiResponse } from 'next';

const products: any[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    const index = products.findIndex((product) => product.id === parseInt(id as string, 10));
    if (index > -1) {
      products.splice(index, 1);
      res.status(200).json({ message: 'Product deleted' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
