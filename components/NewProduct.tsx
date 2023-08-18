import React from 'react'
import ProductCard from "./ProductCard";


const NewProduct = () => {
    const NewData = [
        {
            img:"/images/img-2.jpg",
            title:"Sports",
            desc:"Traking & runnunf Shoes",
            rating:"3",
            price:"100.00"
        },
        {
            img:"/images/img-3.jpg",
            title:"Sports",
            desc:"Traking & runnunf Shoes",
            rating:"4",
            price:"100.00"
        },
        {
            img:"/images/img-4.jpg",
            title:"Sports",
            desc:"Traking & runnunf Shoes",
            rating:"3",
            price:"100.00"
        },
        {
            img:"/images/img-5.jpg",
            title:"Sports",
            desc:"Traking & runnunf Shoes",
            rating:"2",
            price:"100.00"
        },
        {
            img:"/images/img-6.jpg",
            title:"Sports",
            desc:"Traking & runnunf Shoes",
            rating:"3",
            price:"100.00"
        },
        {
            img:"/images/img-7.jpg",
            title:"Sports",
            desc:"Traking & runnunf Shoes",
            rating:"3",
            price:"100.00"
        },

        {
            img:"/images/img-8.jpg",
            title:"Sports",
            desc:"Traking & runnunf Shoes",
            rating:"3",
            price:"100.00"
        },
        {
            img:"/images/img-9.jpg",
            title:"Sports",
            desc:"Traking & runnunf Shoes",
            rating:"3",
            price:"100.00"
        },
        {
            img:"/images/img-10.jpg",
            title:"Sports",
            desc:"Traking & runnunf Shoes",
            rating:"3",
            price:"100.00"
        },
        {
            img:"/images/img-11.jpg",
            title:"Sports",
            desc:"Traking & runnunf Shoes",
            rating:"3",
            price:"100.00"
        },
        {
            img:"/images/img-12.jpg",
            title:"Sports",
            desc:"Traking & runnunf Shoes",
            rating:"3",
            price:"100.00"
        }, {
            img:"/images/img-13.jpg",
            title:"Sports",
            desc:"Traking & runnunf Shoes",
            rating:"3",
            price:"100.00"
        },
        {
            img:"/images/img-14.jpg",
            title:"Sports",
            desc:"Traking & runnunf Shoes",
            rating:"3",
            price:"100.00"
        },
        {
            img:"/images/img-15.jpg",
            title:"Sports",
            desc:"Traking & runnunf Shoes",
            rating:"3",
            price:"100.00"
        },
        {
            img:"/images/img-16.jpg",
            title:"Sports",
            desc:"Traking & runnunf Shoes",
            rating:"3",
            price:"100.00"
        },
        {
            img:"/images/img-17.jpg",
            title:"Sports",
            desc:"Traking & runnunf Shoes",
            rating:"3",
            price:"100.00"
        },
        {
            img:"/images/img-18.jpg",
            title:"Sports",
            desc:"Traking & runnunf Shoes",
            rating:"3",
            price:"100.00"
        },
        {
            img:"/images/img-19.jpg",
            title:"Sports",
            desc:"Traking & runnunf Shoes",
            rating:"3",
            price:"100.00"
        },
        {
            img:"/images/img-20.jpg",
            title:"Sports",
            desc:"Traking & runnunf Shoes",
            rating:"3",
            price:"100.00"
        },
        {
            img:"/images/img-21.jpg",
            title:"Sports",
            desc:"Traking & runnunf Shoes",
            rating:"3",
            price:"100.00"
        },
        {
            img:"/images/img-22.jpg",
            title:"Sports",
            desc:"Traking & runnunf Shoes",
            rating:"3",
            price:"100.00"
        },
        {
            img:"/images/img-23.jpg",
            title:"Sports",
            desc:"Traking & runnunf Shoes",
            rating:"3",
            price:"100.00"
        },
        {
            img:"/images/img-24.jpg",
            title:"Sports",
            desc:"Traking & runnunf Shoes",
            rating:"3",
            price:"100.00"
        },
        {
            img:"/images/img-25.jpg",
            title:"Sports",
            desc:"Traking & runnunf Shoes",
            rating:"3",
            price:"100.00"
        },
    ]
    return (
        <div className="container pt-16">
            <h2 className="font-medium text-2xl pb-4">New Products</h2>

            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                {NewData.map((item, index) => (
                    <ProductCard
                        key={index}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        rating={item.rating}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default NewProduct;





