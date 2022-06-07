import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'

function Fetchnews() {
    const [news, setNews] = useState([])
    const lis=[]
    function Fetching() {

        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=1f1a7540d7f2437f87407a08c92675d2").then((response) => {
            setNews(response.data.articles)
        })

    }

    return (
        <>
            <div>
                <h1>Fetchnews page</h1>
                <button type="button" onClick={Fetching} className="btn btn-outline-warning my-3">GET NEWS</button>
            </div>
            <div className="container">
                <div className="row">
                    {
                        news.map((value, id) => {
                            return (
                                <>                                
                                    <hr />
                                    <div className="container adiv my-3 shadow-lg  rounded">
                                        <div className="row arow">
                                            <div className="col-lg-2 acol">
                                                <div className="amedia">
                                                    <img src={value.urlToImage} className="simages" alt="..." />

                                                </div>
                                            </div>
                                            <div className="col-lg-10">
                                                <div className="row brow">
                                                    <div className="col-lg-12 ccol">
                                                        <h5 className="text-start mt-2">{id} {value.title}</h5>
                                                    </div>
                                                    <div className="col-lg-12 dcol text-start">
                                                        <p>{value.content}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Fetchnews