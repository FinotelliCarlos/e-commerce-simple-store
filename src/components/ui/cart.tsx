import { computeProductTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { ShoppingCartIcon } from "lucide-react";
import { useContext } from "react";
import { Badge } from "./badge";
import CartItem from "./cart-item";
import { Separator } from "./separator";

const Cart = () => {
  const { products, subTotal, total, totalDiscount } = useContext(CartContext);

  return (
    <div className="flex flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="flex flex-col gap-5">
        {products.length > 0 && (
          <>
            {products.map((product) => (
              <CartItem
                key={product.id}
                product={computeProductTotalPrice(product as any) as any}
              />
            ))}
          </>
        )}

        {products.length === 0 && (
          <p className="">Seu carrinho esta vazio! 🥲 </p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p className="">Subtotal:</p>
          <p className="text-zinc-400">R$ {subTotal.toFixed(2)}</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p className="">Entrega:</p>
          <p className="">Grátis</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-xs">
          <p className="">Descontos:</p>
          <p className="text-zinc-400">- R$ {totalDiscount.toFixed(2)}</p>
        </div>

        <Separator />

        <div className="flex items-center justify-between text-sm font-bold">
          <p className="">Total:</p>
          <p className="">- R$ {total.toFixed(2)}</p>
        </div>

        <Separator />
      </div>
    </div>
  );
};

export default Cart;
