import React from 'react'
import { useEffect, useState } from "react"

const ProdCat = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        fetch("http://localhost:300/products/allCategories")
            .then(response => response.json())
            .then(json => {

                console.log(json.data);
                setCategories(json.data)

            })
            .catch(err => {
                console.log(`Error ${err}`);
            })

    }, [])
    let img;
    return (
        <>
            <section id="bestseller-productlist">
                <div>
                    {categories.map(category => {
                        if (category === "toys")
                            img =
                                "https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80";
                        else if (category === "test")
                            img =
                                "https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80";

                        return (
                            <>

                                <figure class="figure">
                                    <img src={img} class="figure-img img-fluid rounded" alt="" />
                                    <figcaption class="figure-caption">
                                        <p>Category Name: {category}</p>
                                    </figcaption>
                                </figure>

                            </>
                        )
                    })}
                </div>
            </section>
        </>)
}

export default ProdCat