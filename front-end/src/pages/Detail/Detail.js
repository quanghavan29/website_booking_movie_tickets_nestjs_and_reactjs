import React, { useEffect } from 'react'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import { useDispatch, useSelector } from 'react-redux'
import CinemaTabs from './CinemaTabs/CinemaTabs';
import dateFormat from "dateformat";
import { getMovieDetail } from '../../redux/actions/MovieActions';

export default function Detail(props) {

    let movieId = props.match.params.movieId;
    const { movieDetail } = useSelector(state => state.MovieReducer)
    const dispatch = useDispatch();


    useEffect(() => {
        const action = getMovieDetail(movieId);
        dispatch(action)
    }, [])

    return (
        <div style={{ backgroundColor: "#FDFCF0", minHeight: "100vh", paddingTop: 200, paddingBottom: 30 }}>
            <div className="grid grid-cols-12">
                <div className="grid col-span-8 col-start-3">
                    <div>
                        <div style={{ float: "left", marginRight: 30, marginBottom: 30 }}>
                            <img src={movieDetail?.poster} alt="poster.jpg"
                                className="w-full h-full" style={{ maxHeight: 360, maxWidth: 270 }} />
                            <div style={{ marginTop: 30 }}>
                                <button style={{ backgroundColor: "#1F2937", color: "#F3F4F6", fontWeight: "bold", maxWidth: 270 }} type="button" className="w-full p-3">
                                    ĐẶT VÉ
                                </button>
                            </div>
                        </div>

                        <div style={{ color: "#1A1919" }}>
                            <span style={{ fontSize: 24, fontWeight: "bold" }}>
                                {movieDetail?.name}
                                <hr />
                            </span>

                            <div style={{ marginTop: 20 }}>
                                <p style={{ fontSize: 16 }}>
                                    <span style={{ fontWeight: "bold" }}>Đạo diễn: </span>
                                    <span>{movieDetail?.directors}</span>
                                </p>
                                <p style={{ fontSize: 16 }}>
                                    <span style={{ fontWeight: "bold" }}>Diễn viên: </span>
                                    <span>{movieDetail?.actors}</span>
                                </p>
                                <p style={{ fontSize: 16 }}>
                                    <span style={{ fontWeight: "bold" }}>Thể loại: </span>
                                    {movieDetail?.categories?.map(((category, index) => (
                                        <span key={index}>
                                            {index < movieDetail?.categories?.length - 1 ? category?.name + ", " : category?.name}
                                        </span>
                                    )))}
                                </p>
                                <p style={{ fontSize: 16 }}>
                                    <span style={{ fontWeight: "bold" }}>Khởi chiếu: </span>
                                    <span>{movieDetail.premiere ? dateFormat(new Date(movieDetail?.premiere), "dd/mm/yyyy") : dateFormat(new Date(), "dd/mm/yyyy")}</span>
                                </p>
                                <p style={{ fontSize: 16 }}>
                                    <span style={{ fontWeight: "bold" }}>Thời lượng: </span>
                                    <span>{movieDetail?.timeLimit} phút</span>
                                </p>
                                <p style={{ fontSize: 16 }}>
                                    <span style={{ fontWeight: "bold" }}>Ngôn Ngữ: </span>
                                    <span>{movieDetail?.language}</span>
                                </p>
                                <p style={{ fontSize: 16 }}>
                                    <span style={{ fontWeight: "bold" }}>Rated: {movieDetail?.rated}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-8 col-start-3" style={{ fontSize: 16, marginBottom: 30 }}>
                    <p>
                        <span style={{ fontWeight: "bold" }}>Tóm Tắt: </span>
                        <span>{movieDetail?.description}</span>
                    </p>
                </div>
                <div className="col-span-8 col-start-3">
                    <CinemaTabs movieDetail={movieDetail}/>
                </div>
            </div>
        </div>
    )
}
