import React from 'react'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import { useSelector } from 'react-redux'
import CinemaTabs from './CinemaTabs/CinemaTabs';

export default function Detail(props) {

    const { movies } = useSelector(state => state.MovieReducer);

    let movieId = props.match.params.movieId;
    const movieDetail = movies.find(movie => movie.id === movieId);

    return (
        <div style={{ backgroundColor: "#FDFCF0", minHeight: "100vh", paddingTop: 200, paddingBottom: 30 }}>
            <div className="grid grid-cols-12">
                <div className="grid col-span-6 col-start-4">
                    <div>
                        <div style={{ float: "left", marginRight: 30, marginBottom: 30 }}>
                            <img src={movieDetail?.imageUrl} alt="img.jpg"
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
                                    <span>{movieDetail.directors}</span>
                                </p>
                                <p style={{ fontSize: 16 }}>
                                    <span style={{ fontWeight: "bold" }}>Diễn viên: </span>
                                    <span>{movieDetail.actors}</span>
                                </p>
                                <p style={{ fontSize: 16 }}>
                                    <span style={{ fontWeight: "bold" }}>Thê loại: </span>
                                    {movieDetail.category.map(((category, index) => (
                                        <span key={index}>
                                            {index < movieDetail.category.length - 1 ? category.name + ", " : category.name}
                                        </span>
                                    )))}
                                </p>
                                <p style={{ fontSize: 16 }}>
                                    <span style={{ fontWeight: "bold" }}>Khởi chiếu: </span>
                                    <span>{movieDetail.premiere}</span>
                                </p>
                                <p style={{ fontSize: 16 }}>
                                    <span style={{ fontWeight: "bold" }}>Thời lượng: </span>
                                    <span>{movieDetail.timeLimit} phút</span>
                                </p>
                                <p style={{ fontSize: 16 }}>
                                    <span style={{ fontWeight: "bold" }}>Ngôn Ngữ: </span>
                                    <span>{movieDetail.language}</span>
                                </p>
                                <p style={{ fontSize: 16 }}>
                                    <span style={{ fontWeight: "bold" }}>Rated: C16 - {movieDetail.rated}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-6 col-start-4" style={{ fontSize: 16, marginBottom: 30 }}>
                    <p>
                        <span style={{ fontWeight: "bold" }}>Tóm Tắt: </span>
                        <span>{movieDetail.description}</span>
                    </p>
                </div>
                <div className="col-span-6 col-start-4">
                    <CinemaTabs />
                </div>
            </div>
        </div>
    )
}
