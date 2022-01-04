const initialState = {
    cinemas: [
        {
            id: "BHDStar",
            name: "BHD Star Cineplex",
            alias: "bhd-star-cineplex",
            logoUrl: "https://res.cloudinary.com/fpt-food/image/upload/v1641308541/Website%20Booking%20Movie%20Tickets/cinema%20logo/bhd-star-cineplex_g9b3n7.png"
        },
        {
            id: "CGV",
            name: "cgv",
            alias: "cgv",
            logoUrl: "https://res.cloudinary.com/fpt-food/image/upload/v1641308541/Website%20Booking%20Movie%20Tickets/cinema%20logo/cgv_gn7ohm.png"
        },
        {
            id: "CineStar",
            name: "CineStar",
            alias: "cinestar",
            logoUrl: "https://res.cloudinary.com/fpt-food/image/upload/v1641308541/Website%20Booking%20Movie%20Tickets/cinema%20logo/cinestar_qhkqzj.png"
        },
        {
            id: "Galaxy",
            name: "Galaxy Cinema",
            alias: "galaxy-cinema",
            logoUrl: "https://res.cloudinary.com/fpt-food/image/upload/v1641308541/Website%20Booking%20Movie%20Tickets/cinema%20logo/galaxy-cinema_dyxi73.png"
        },
        {
            id: "LotteCinima",
            name: "Lotte Cinema",
            alias: "lotte-cinema",
            logoUrl: "https://res.cloudinary.com/fpt-food/image/upload/v1641308541/Website%20Booking%20Movie%20Tickets/cinema%20logo/lotte-cinema_hgrapz.png"
        },
        {
            id: "MegaGS",
            name: "MegaGS",
            alias: "megags",
            logoUrl: "https://res.cloudinary.com/fpt-food/image/upload/v1641308541/Website%20Booking%20Movie%20Tickets/cinema%20logo/megags_xs6mlg.png"
        }
    ]
}

const CinemaReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export default CinemaReducer;