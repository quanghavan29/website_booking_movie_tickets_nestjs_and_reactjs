import React from 'react'
import { useSelector } from 'react-redux'
import Movies from '../../components/Movies/Movies';
import { Select } from 'antd';
import CarouselLayout from '../../templates/HomeTemplate/Layout/CarouselLayout/CarouselLayout';

const { Option } = Select;

export default function Home(props) {

    const { movies } = useSelector(state => state.MovieReducer);

    const renderMovies = () => {
        return movies.map((movie, index) => {
            return (
                <Movies key={index} movie={movie} />
            )
        })
    }

    return (
        <div style={{ backgroundColor: "#FDFCF0", paddingBottom: 30 }}>
            <CarouselLayout />

            <div className="container px-full py-10 mx-auto">
                <Select defaultValue="Now Showing" style={{ backgroundColor: 'red' }}>
                    <Option value="Now Showing">Phim Đang Chiếu</Option>
                    <Option value="Coming Soon">Phim Sắp Chiếu</Option>
                </Select>
                <Select defaultValue="All" style={{ marginLeft: 20 }}>
                    <Option value="All">Chọn Thể Loại</Option>
                    <Option value="Now Showing">Hành Động</Option>
                    <Option value="Coming Soon">Phiêu Lưu</Option>
                    <Option value="Coming Soon">Viễn Tưởng</Option>
                </Select>
            </div>

            <section className="text-gray-600 body-font">
                <div className="container px-full mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {renderMovies()}
                    </div>
                </div>
            </section>

            <div className="flex justify-center space-x-1 text-coolGray-800">
                <button type="button"
                    className="px-8 py-3 font-semibold rounded-full bg-coolGray-800 text-coolGray-100"
                    style={{ backgroundColor: "#1F2937", color: "#F3F4F6", fontWeight: "bold", marginTop: 30 }}>XEM THÊM</button>
            </div>

            {/* <div className="container">
                <MenuHome />
            </div> */}

        </div >
    )
}
