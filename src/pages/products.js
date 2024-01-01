import { useEffect } from "react";
import useAsync from "../hooks/useAsync";
import { navbarLinks } from "../libs/constants";
import Skeleton from "../components/skeleton";

function Products() {
  const { loading, data, err, getData } = useAsync("Products", "GET");
  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  if (loading)
    return (
      <div className="flex gap-4 flex-wrap justify-between my-4 mx-7">
        {Array.from(Array(20)).map((item) => (
          <Skeleton key={item} />
        ))}
      </div>
    );
  return <div></div>;
}

export default Products;
