import React from 'react'
import { history } from '../../App';
import dateFormat from "dateformat";

export default function Movies(props) {

    const { movie } = props;

    return (

        <div className="p-4 lg:w-1/5" style={{ cursor: 'pointer' }}
            onClick={() => {
                history.push(`/detail/${movie?.id}`)
            }}>
            <div className="max-w-xs rounded-md shadow-md bg-coolGray-50 text-coolGray-800">
                <img src={movie?.poster} alt="poster.jpg" className="object-cover object-center w-full rounded-t-md h-full bg-coolGray-500" />
                <div className="flex flex-col justify-between p-3 space-y-8 text-center">
                    <div>
                        <h3 style={{ fontWeight: 'bold', color: "#231F20" }}>{movie?.name.length > 23 ? movie?.name.substr(0, 23) + ". . ." : movie?.name}</h3>
                        <p style={{ color: "#777777", fontSize: 14 }} className="text-coolGray-800">{movie?.timeLimit} Phút - {dateFormat(new Date(movie?.premiere), "dd/mm/yyyy")}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}
