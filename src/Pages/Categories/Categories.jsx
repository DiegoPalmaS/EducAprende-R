import React from 'react'
import { Link } from "react-router";
import './Categories.css'

import imgIngles from '../../assets/img/english.png'
import imgHistoria from '../../assets/img/history.png'
import imgMates from '../../assets/img/maths.png'
import imgCiencias from '../../assets/img/science.png'
import imgLenguaje from '../../assets/img/spanish.png'

const Categories = () => {
    const categorias = [
        { nombre: "Inglés",      img: imgIngles,   color: "#FEF4BB", class: "ingles"      },
        { nombre: "Historia",    img: imgHistoria,  color: "#FEEAC0", class: "historia"    },
        { nombre: "Matemáticas", img: imgMates,     color: "#C0E9FE", class: "matematicas" },
        { nombre: "Ciencias",    img: imgCiencias,  color: "#E5FEC0", class: "ciencias"    },
        { nombre: "Lenguaje",    img: imgLenguaje,  color: "#E9CAFE", class: "lenguaje"    },
    ]

    return (
        <div className="container myCategories py-3">
            <h1 className="section-title display-5">Nuestras categorías</h1>
            <div className="row row-cols-2 mt-2 row-cols-lg-3 text-center gx-lg-4">
                {categorias.map((category) => (
                    <div className="col" key={category.class}>
                        <Link to={`/categorias/${category.class}`} className="card-title text-decoration-none">
                            <div className={`card mycard ${category.class}`}>
                                <img src={category.img} className="card-img-top mx-auto" alt={category.nombre} />
                                <div className="card-body">
                                    <h5 className="card-title">{category.nombre}</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories