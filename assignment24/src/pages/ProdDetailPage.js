import React from 'react'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const ProdDetailPage = (props) => {
    let id = window.location.pathname.split("/")[2]
    console.log("id: " + id)

    const [product, setProduct] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:300/products/${id}`)
            .then(response => response.json())
            .then(json => {

                console.log(json.data);
                setProduct(json.data)

            })
            .catch(err => {
                console.log(`Error ${err}`);
            })

    }, [id])

    return (
        <div>
            <h3>{product.productName} costs {product.price}</h3>
        </div>
    )
}

export default ProdDetailPage
