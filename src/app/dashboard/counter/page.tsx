//prc

import { CartCounter } from "@/shopping-cart";



export const metadata={
  title: 'shopping cart',
description:'un simple contador'
}

export default function CounterPage() {



  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <span> productos del carrito</span>
  <CartCounter value={20}/>

    </div>
  );
}