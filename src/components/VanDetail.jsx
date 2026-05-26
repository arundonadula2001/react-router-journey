import React from "react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import "./VanDetails.css"

export default function VanDetail() {

    const { id } = useParams()

    const [van, setVan] = useState(null)

    useEffect(() => {

        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))

    }, [id])

    return (
    <div className="van-detail-container">
        {van && (
            <div>
                <img alt={van.name} src={van.imageUrl} />
                <h2>{van.name}</h2>
                <p>${van.price}<span>/day</span></p>
                <p>{van.description}</p>
                <p className={`van-detail-type ${van.type}`}>
                    {van.type}
                </p>
            </div>
        )}
    </div>
)
}