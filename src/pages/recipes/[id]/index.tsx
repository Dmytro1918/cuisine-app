import { idRequest } from "@/app/api";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Image from 'next/image'
import generateUniqueId from "@/app/helpers/uniqueId";


const DetailPage = () => {
    const [dishInfo, setDishInfo] = useState(null)
    const router = useRouter()
    const id = router.query.id;
    
    useEffect(()=>{
        const getData = async () => {
        const {information, error, } = await idRequest(id)             
            if(!error) setDishInfo(information) 
        }
        if(id) getData()
    }, [id])
    

    return (
        <>
            <div className="flex flex-col items-center justify-center bg-white text-gray-800 p-6 rounded-lg shadow-md max-w-lg mx-auto">
                <h1 className="text-3xl font-bold text-blue-600 mb-2 text-center">
                    More Specific Information About {dishInfo?.title}
                </h1>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    {dishInfo?.type}
                </h2>
                {dishInfo?.image && (
                    <Image
                        src={dishInfo?.image}
                        alt={"Dish image"}
                        height={400}
                        width={500}
                        className="rounded-lg mb-4"
                    />
                )}
                <div className="w-full">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Ingredients:</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        {dishes?.includeIngridients.map((item) => (
                            <li key={generateUniqueId()} className="bg-blue-100 p-4 rounded transition duration-300 hover:bg-blue-200">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default DetailPage;