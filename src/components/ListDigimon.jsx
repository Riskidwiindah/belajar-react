import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"

function ListDigimon() {
    const [isLoading, setisLoading] = useState(true)
    const [digimon, setDigimons] = useState([])

    useEffect(() => {
        // console.log("List digimon mount");
        axios("https://digimon-api.vercel.app/api/digimon").then((res) => {
            setDigimons(res.data)
            setisLoading(false)
        })
    }, [])

    if (isLoading) {
        return(
            <span>loading ...</span>
        )
    }
    return(
        <>
        <h1>Hallo</h1>

        {digimon.map = ((item, index) => (
            <div key={index}>
                <img src= {item.img} alt="" width={200}/>
                <h2>{item.name}</h2>
            </div>
        ))}
        </>
    )
}

export default ListDigimon