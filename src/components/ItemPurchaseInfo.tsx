import BuyItemSection from "./BuyItemSection"

const ItemPurchaseInfo = () => {

    const itemPrice: number = 125

    return (
        <div className="flex flex-col gap-[1.5em] self-center lg:max-w-50/100 lg:min-w-40/100 md:px-0 px-[1.75em]">
            <h3 className="uppercase tracking-widest font-bold text-[14px] text-neutral-500">Sneaker Company</h3>
            <h1 className="font-semibold text-4xl">Fall Limited Edition Sneakers</h1>
            <p className="text-neutral-500">
                These low-profile sneakers are your perfect casual wear companion.
                Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
            </p>
            <div className="flex">
                <div className="flex flex-col pr-[1em]">
                    <span className="font-semibold text-2xl">$125.00</span>
                    <span className="font-semibold text-1xl text-neutral-500 line-through">$250.00</span>
                </div>
                <span className="place-self-start border-1 px-[4px] pb-[4px] rounded-md text-white bg-neutral-950 max-h-[20px] font-semibold">50%</span>
            </div>
            <BuyItemSection price={itemPrice}/>
        </div>
    )
}

export default ItemPurchaseInfo