import Button from "../button/button.component"

const CartDropdown = () => {
  return(
    <div className="absolute w-80 h-[340px] flex flex-col p-5 border border-black bg-white top-[90px] right-10 z-10">
      <div className="text-lg my-12 mx-auto">Your cart is empty</div>
      <div className="h-60 flex flex-col overflow-scroll">cart items</div>
      <Button additionalStyles="mt-auto bg-black text-white hover:opacity-70">GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown