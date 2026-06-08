import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./VanHost.css"

export default function VanHostDetail() { 

    const { id   } = useParams();
    const [currentVan, setCurrentVan] = useState(null);

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
        .then(res => res.json())
        .then(data => setCurrentVan(data.vans[0]))
    }, [id])

    if (!currentVan) {
        return <h2>Loading...</h2>
    }
    return(
        <section>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} alt={`Photo of ${currentVan.name}`} />
                    <div className="host-van-detail-info-text">
                        <i className={`van-type ${currentVan.type}`}>{currentVan.type}</i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}