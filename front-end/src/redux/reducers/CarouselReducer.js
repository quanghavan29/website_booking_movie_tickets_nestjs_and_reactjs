const initialState = {
    carousels: [
        {
            "bannerId": 1,
            "movieId": 1225,
            "imageUrl": "https://res.cloudinary.com/fpt-food/image/upload/v1641164071/Website%20Booking%20Movie%20Tickets/spiderman-no-way-home_tk62iq.jpg",
        },
        {
            "bannerId": 1,
            "movieId": 1225,
            "imageUrl": "https://res.cloudinary.com/fpt-food/image/upload/v1641167993/Website%20Booking%20Movie%20Tickets/nhoc-trum_mlewea.png",
        },
        {
            "bannerId": 1,
            "movieId": 1225,
            "imageUrl": "https://res.cloudinary.com/fpt-food/image/upload/v1641164578/Website%20Booking%20Movie%20Tickets/happy-new-year_o9kgbs.jpg",
        },
    ]
}

const CarouselReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export default CarouselReducer;
