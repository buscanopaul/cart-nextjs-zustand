import Image from "next/image";
import { Product } from "../lib/slices/createProductSlice";
import { useAppStore } from "../lib/store";

export const ProductCard = (product: Product) => {
  const { addToCart } = useAppStore();

  return (
    <div className="rounded-md-bg-[#22252D]">
      <div className="w-full h-60 relative">
        <Image
          src={product?.images[0]}
          alt={product?.title}
          fill
          className="rounded-md shadow-lg"
        />
        <span className="bg-black rounded-full py-0.5 px-3 text-white text-xs absolute top-1 left-1 font-light">
          {product?.category?.name}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold text-white">${product?.price}</p>
        <button
          type="button"
          className="text-white py-1.5 px-3 rounded-md bg-[#161A1E] hover:ring-1 hover:ring-[#161A1E]"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
