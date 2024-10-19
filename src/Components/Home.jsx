import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Home() {
    const [countrys, setCountrys] = useState([])

    async function getNwes() {

        let { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=0214a76383904cf08ba21d179202bf3b`)
        setCountrys(data.articles)
    }

    useEffect(() => {
        getNwes()
    }, [])


    return (
        <>

            <div className="row gy-5 mt-5">
                {countrys.map((country) => <div className='col-md-3 mb-3 text-center'>

                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src={country.urlToImage} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{country.title}</h5>
                            <p className="card-text">{country.description}</p>
                            <p className="card-text">{country.publishedAt}</p>
                            <a href={country.url} className="btn btn-primary">Link of new</a>
                        </div>
                    </div>
                </div>)}
            </div>
        </>
    )
}

export default Home