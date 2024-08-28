import Link from "next/link";
import Product from "../components/Product";

const AdminPage = () => {
  return (
    <div className="font-serif p-10">
      <h1 className="text-4xl font-semibold">Admin Dashboard</h1>
      <Product />

      <Link href='/'>Go back to Shop</Link>
    </div>
  );
};

export default AdminPage;
