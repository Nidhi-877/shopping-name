import react from "react";
import Image from 'next/image';
const Teatimonial =()=>{
    return(
        <>
        
        <div className="container pt-16 pb-16 grid-cols-2">
            <h2 className="font-medium text-2xl pb-4 ">Testimonial</h2>
            <div className="grid lg:grid-cols-[300px,1fr] gap-4">
                <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
                    <div className="text-center flex flex-col items-center gap-1">
                    <Image 
                className="rounded-full inline-block"
                src="/images/person.jpg"
                width={80}
                height={80}
                alt="dp"
                /> 
                <h2 className="text-gray-500 font-black text-[20px]">Nidhi Kurmi</h2>
                <p>Web developer</p>
                    <Image 
                className="inline-block py-2"
                src="/images/comma.jpg"
                width={30}
                height={30}
                alt="dp"
                /> 
                <p className=" max-w-[200px] text-gray-500">
                If you have any questions related to web development, coding, languages, frameworks, or best practices, feel free to ask, and I will do my best to assist you!
                </p>
                    </div>
                </div>   
                <div className="bg-red-600 bg-[url(/images/slider1.jpg)] bg-cover h-[500px] rounded-2xl grid place -items-center">
                    <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-1">
                        <button className="bg-blackish text-white p-2 rounded-md">25% DisCount</button>
                        <h2 className="font-extrabold text-2xl text-[#272727]">Summer COllection</h2>
                        <p className="text-gray-500 text-[20px]">Starting @ $20 <b> Shop Now</b></p>
                    </div>
                    </div>          
                    </div>
        </div>
            
            </>
    )
}

export default Teatimonial;