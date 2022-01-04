import React from 'react'
import { Carousel } from 'antd';
import { useSelector } from 'react-redux';

const contentStyle = {
    height: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
};


export default function CarouselLayout() {

    const { carousels } = useSelector(state => state.CarouselReducer);

    const renderCarousels = () => {

        return carousels.map((carousel, index) => {
            return <div key={index}>
                <div style={{ ...contentStyle }}>
                    <img style={{ margin: 'auto' }} src={carousel.imageUrl} alt="img.jpg" />
                </div>
            </div>
        })
    }

    return (
        <div style={{
            backgroundImage: `url(https://res.cloudinary.com/fpt-food/image/upload/v1641167514/Website%20Booking%20Movie%20Tickets/wallpaper-preview_zr0l2t.jpg)`,
            // backgroundPosition: 'center',
            // backgroundSize: '100%',
            // backgroundRepeat: 'no-repeat'
        }}>
            <div style={{ margin: 'auto' }}>
                <Carousel effect="fade" autoplay={true} style={{ margin: 'auto' }}>
                    {renderCarousels()}
                </Carousel>
            </div>
        </div >

    )
}
