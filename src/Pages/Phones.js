import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Phones = () => {

    const [phones, setPhones] = useState([])

    const fetchPhones = () => {
        axios
        .get("http://localhost:5006/api/phones")
        .then((res) => {
            console.log(res.data)
                setPhones(res.data)
            })
            .catch((e) => console.log(e))
    }

    useEffect(() => {
        fetchPhones()
    }, [])
    return <>
        {phones &&
            <div>
                {phones?.map(element => {
                    return <div>
                        <img src={`/images/${element.imageFileName}`}  alt="mobile phone"/>
                        <p>{element.manufacturer}</p>
                        <p>{element.description}</p>
                        <p>{element.color}</p>
                        <Link to={`api/phones/${element.id}`}><button>Details</button></Link> 
                    </div>
                })}
            </div>
        }
    </>

}

export default Phones