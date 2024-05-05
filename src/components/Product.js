export default function Product() {
    const products = [
       
        {
            imageUrl: 'https://res.cloudinary.com/dj0pasgzk/image/upload/v1714843737/bg-1_hdseqn.png',
            name: 'Organic Skinny High Waist Jeans',
            price: '€33.95'
        },
        {
            imageUrl: 'https://res.cloudinary.com/dj0pasgzk/image/upload/v1714843737/bg-1-1_jod490.png',
            name: 'Organic Skinny High Waist Jeans',
            price: '€33.95'
        }, {
            imageUrl: 'https://res.cloudinary.com/dj0pasgzk/image/upload/v1714843738/bg-1-2_ohnttm.png',
            name: '365 Signature Hoodie',
            price: '€33.95'
        }
    ];

    return (
        <div className="flex max-sm:ml-6">
            {products.map((product, index) => (
                <div key={index} className={index === 0 ? "w-[230px] h-[430px] max-sm:w-[150px] " : "ml-12 max-sm:ml-3  w-[230px] max-sm:w-[150px] h-[430px]  "}>
                    <img src={product.imageUrl} alt={`Product ${index + 1}`} />
                    <div className="flex flex-col font-light  text-[12.8px] leading-[20.48px] pt-3  ">
                        {product.name}
                    </div> 
                    <div className="flex flex-row max-sm:flex-col max-md:flex-col  items-center max-sm:items-start max-md:items-start justify-between text-[12.8px] leading-[20.48px]  font-bold pt-2  ">
                             <div>
                              {product.price}
                             </div>
                             <div className="flex max-sm:mt-2 max-md:mt-2">
                                <div className="rounded-full w-3 h-3 mr-2 bg-product-color-1 border border-black"></div>
                                <div className=" rounded-full w-3 h-3 mr-2 bg-product-color-2" ></div>
                                <div className=" rounded-full w-3 h-3 mr-2 bg-product-color-3"></div>
                                <div className=" rounded-full w-3 h-3  bg-product-color-4"></div>
                             </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
