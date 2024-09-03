import SingleProduct from "@/app/components/SingleProduct";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <SingleProduct params={{id: "",}}
      />
    </div>
  );
};

export default page;
