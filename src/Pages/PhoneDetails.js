import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const PhoneDetails = () => {
    const [foundPhone, setFoundPhone] = useState([])
    const { id } = useParams()
    const fetchPhone = () => {
    axios.get(`http://localhost:5006/api/phones/${id}`)
        .then(res => {
            setFoundPhone(res.data)
            console.log(foundPhone)
        })
        .catch(e => console.log(e))
    }
    useEffect(() => {
        fetchPhone()
    }, [])

    return <>
        {foundPhone.length > 0 &&
            <div>
                {console.log(foundPhone?.name)}
                <img src="image" alt={foundPhone[0].name} />
                <p>{foundPhone[0].name}</p>
                <p>{foundPhone[0].description}</p>
                <p>{foundPhone[0].color}</p>
                <p>{foundPhone[0].manufacturer}</p>
                <p>{foundPhone[0].price}</p>
            </div>
        }
    </>

}

export default PhoneDetails