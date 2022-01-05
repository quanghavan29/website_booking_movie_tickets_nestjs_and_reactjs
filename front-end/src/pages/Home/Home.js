import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Movies from '../../components/Movies/Movies';
import { Select } from 'antd';
import CarouselLayout from '../../templates/HomeTemplate/Layout/CarouselLayout/CarouselLayout';
import { getAllMoviesByStatusAndCategory } from '../../redux/actions/MovieActions';

const { Option } = Select;

export default function Home(props) {

    const [status, setStatus] = useState('Now Showing');
    const [categoryId, setCategoryId] = useState(-1);
    const [count, setCount] = useState(1);
    const pageSize = 10;

    const { movies } = useSelector(state => state.MovieReducer);
    const dispatch = useDispatch();

    const renderMovies = () => {
        return movies.map((movie, index) => {
            if (index < count * pageSize) {
                return (
                    <Movies key={index} movie={movie} />
                )
            }
            return null;
        })
    }

    useEffect(() => {
        const action = getAllMoviesByStatusAndCategory(status, categoryId);
        dispatch(action)
    }, [status, categoryId])

    return (
        <div style={{ backgroundColor: "#FDFCF0", paddingBottom: 30 }}>
            <CarouselLayout />

            <div className="container px-full py-10 mx-auto">
                <Select value={status} style={{ backgroundColor: 'red', width: 155 }} onChange={(value) => { setStatus(value) }}>
                    <Option value="Now Showing">Phim Đang Chiếu</Option>
                    <Option value="Coming Soon">Phim Sắp Chiếu</Option>
                </Select>
                <Select value={categoryId} style={{ marginLeft: 20, width: 150 }} onChange={(value) => setCategoryId(value)}>
                    <Option value={-1}>Chọn Thể Loại</Option>
                    <Option value={1}>Hành Động</Option>
                    <Option value={2}>Phiêu Lưu</Option>
                    <Option value={3}>Viễn Tưởng</Option>
                    <Option value={4}>Tâm Lý</Option>
                    <Option value={5}>Kinh Dị</Option>
                    <Option value={6}>Hài</Option>
                    <Option value={7}>Hồi Hộp</Option>
                    <Option value={8}>Hoạt Hình</Option>
                    <Option value={9}>Nhạc Kịch</Option>
                    <Option value={10}>Tình Cảm</Option>
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
                {movies.length < count * pageSize ? null : <button type="button"
                    className="px-8 py-3 font-semibold rounded-full bg-coolGray-800 text-coolGray-100"
                    style={{ backgroundColor: "#1F2937", color: "#F3F4F6", fontWeight: "bold", marginTop: 30 }}
                    onClick={() => { setCount(count + 1) }}>
                    XEM THÊM
                </button>}
            </div>

            {/* <div className="container">
                <MenuHome />
            </div> */}

        </div >
    )
}
