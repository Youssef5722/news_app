import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Bussiness() {
  const [bussiness, setBussiness] = useState([])

  async function getNwes() {

      let { data } = await axios.get(`https://newsapi.org/v2/top-headlines?bussiness=us&category=general&apiKey=0214a76383904cf08ba21d179202bf3b`)
      setBussiness(data.articles)
  }

  useEffect(() => {
      getNwes()
  }, [])


  return (
    <>
    <div className="row gy-5 mt-5">
                {bussiness.map((bussines) => <div className='col-md-3 mb-3 text-center'>

                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src={bussines.urlToImage} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{bussines.title}</h5>
                            <p className="card-text">{bussines.description}</p>
                            <p className="card-text">{bussines.publishedAt}</p>
                            <a href={bussines.url} className="btn btn-primary">Link of new</a>
                        </div>
                    </div>
                </div>)}
            </div>
    </>
  )
}

export default Bussiness