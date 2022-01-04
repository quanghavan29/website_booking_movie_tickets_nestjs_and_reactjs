const initialState = {
    movies: [
        {
            id: "1",
            name: "SPIDER MAN: NO WAY HOME",
            trailer: "https://www.facebook.com/quanghavan29",
            imageUrl: "https://res.cloudinary.com/fpt-food/image/upload/v1641181861/Website%20Booking%20Movie%20Tickets/movie/no-way-home_zygcjd.png",
            status: "Coming Soon",
            // status: "Now Showing",
            premiere: "17/12/2021",
            description: `Trailer "Spider-Man: No Way Home" bắt đầu bằng cảnh cuộc sống của Peter Parker hoàn toàn đảo lộn. Cậu bị thẩm vấn vì là kẻ tình nghi sát hại Mysterio (Jake Gyllenhaal), chịu sự săn đuổi của báo giới và tẩy chay từ dư luận… Đáng buồn hơn cả, không chỉ siêu anh hùng trẻ gặp rắc rối, người thân của cậu cũng bị cuốn vào vòng lao lý. Bế tắc, Parker tìm đến Doctor Strange (Benedict Cumberbatch) và Wong (Benedict Wong) với hy vọng khiến thế giới quên đi danh tính siêu anh hùng của mình. Tuy nhiên, sự hợp tác thiếu ăn ý giữa Strange và Parker đã khiến trận pháp bị phá vỡ, đặt đa vũ trụ trước bờ vực nguy hiểm.`,
            actors: "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau",
            directors: "Jon Watts",
            rated: "C16 - PHIM CẤM KHÁN GIẢ DƯỚI 16 TUỔI",
            language: "Tiếng Anh - Phụ đề Tiếng Việt",
            timeLimit: "149",
            category: [
                {
                    id: 213,
                    name: "Hành Động"
                },
                {
                    id: 213,
                    name: "Phiêu Lưu"
                }
            ]
        },
        {
            id: "2",
            name: "KHÔNG PHẢI LÚC CHẾT",
            trailer: "https://www.facebook.com/quanghavan29",
            imageUrl: "https://res.cloudinary.com/fpt-food/image/upload/v1641181738/Website%20Booking%20Movie%20Tickets/movie/no-time-die_mq2deq.png",
            status: "Coming Soon",
            // status: "Now Showing",
            premiere: "14/12/2021",
            description: `"NO TIME TO DIE- KHÔNG PHẢI LÚC CHẾT " Là phần 25 của bộ phim điệp viên huyền thoại 007 hứa hẹn những pha hành động táo bạo và hoành tráng hơn bao giờ hết. Sau sự kiện đầy ám ảnh trong Spectre, Bond lui về ở ẩn tại đất nước Jamaica, sống một cuộc đời cô độc nhưng bình lặng. Bỗng một người bạn cũ từ CIA xuất hiện, cầu xin anh giúp đỡ. Bond bất đắc dĩ phải tái xuất, nhưng không hề biết mình sẽ đối đầu với thế lực nào. Chi tiết đáng chú ý nhất là chiếc mặt nạ trắng vỡ nửa, đánh dấu sự xuất hiện của tên ác nhân kì quái bậc nhất trong cả series 007. Màn chạm trán giữa Bond và kẻ thù nguy hiểm này sẽ vén màn những bí ẩn còn để ngỏ và tiếp theo đó, có thể là một cuộc đối đầu “sinh tử”.`,
            actors: "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau",
            directors: "Jon Watts",
            rated: "C16 - PHIM CẤM KHÁN GIẢ DƯỚI 16 TUỔI",
            language: "Tiếng Anh - Phụ đề Tiếng Việt",
            timeLimit: "162",
            category: [
                {
                    id: 213,
                    name: "Hành Động"
                },
                {
                    id: 213,
                    name: "Phiêu Lưu"
                }
            ]
        },
        {
            id: "3",
            name: "TRẠNG TÝ",
            trailer: "https://www.facebook.com/quanghavan29",
            imageUrl: "https://res.cloudinary.com/fpt-food/image/upload/v1641181933/Website%20Booking%20Movie%20Tickets/movie/tang-ty_rn4h9n.jpg",
            // status: "Coming Soon",
            status: "Now Showing",
            premiere: "22/01/2022",
            description: `Trạng Tí Phiêu Lưu Kí là chuyến phiêu lưu vượt ngoài trí tưởng tượng của bộ tứ Tí - Sửu - Dần - Mẹo khi phải cùng nhau vượt qua rất nhiều thử thách để khám phá bí ẩn về cha Tí. Truyền thuyết Hai Hậu sinh ra Tí vì tựa vào cục đá nghe thật khó tin, nên Tí trở thành tâm điểm chọc phá và coi thường bởi những người xấu tính trong làng. Trên hành trình, bốn đứa trẻ nhiều lần gặp rắc rối, hiểu lầm, tai nạn. Và bất ngờ, bốn đứa trẻ lại bị sơn tặc bắt cóc và bị ép đối đầu trước một âm mưu không thể lường trước được. Nhưng, nhờ những trải nghiệm và có bạn bè bên cạnh những lúc khó khăn đó, Tí dần hoàn thiện tính cách bản thân, bớt háo thắng và biết quan tâm đến người khác, hiểu rằng, cái lý đôi khi không quan trọng bằng cái tình mà con người ta dành cho nhau.`,
            actors: "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau",
            directors: "Jon Watts",
            rated: "C16 - PHIM CẤM KHÁN GIẢ DƯỚI 16 TUỔI",
            language: "Tiếng Anh - Phụ đề Tiếng Việt",
            timeLimit: "132",
            category: [
                {
                    id: 213,
                    name: "Hành Động"
                },
                {
                    id: 213,
                    name: "Phiêu Lưu"
                }
            ]
        },
        {
            id: "4",
            name: "RESIDENT EVIL: QUỶ DỮ TRỖI DẬY",
            trailer: "https://www.facebook.com/quanghavan29",
            imageUrl: "https://res.cloudinary.com/fpt-food/image/upload/v1641184019/Website%20Booking%20Movie%20Tickets/movie/resident-evil_cr4ehf.jpg",
            status: "Coming Soon",
            // status: "Now Showing",
            premiere: "31/12/2021",
            description: `Resident Evil là một trong những tựa game sinh tồn xác sống ăn khách nhất mọi thời đại. Sau 25 năm và 8 phần game gốc cùng hàng loạt ngoại truyện, tác phẩm ngày càng có đông đảo người hâm mộ. Loạt phim Resident Evil do Paul W.S. Anderson đạo diễn là một thành công về mặt thương mại nhưng bị nhiều fan chỉ trích vì rời quá xa nguyên tác. Do đó mà Sony quyết định tái khởi động thương hiệu với Resident Evil: Welcome to Raccoon City (Resident Evil: Quỷ dữ trỗi dậy) có nội dung lấy từ hai phần game đầu tiên. Qua đoạn trailer, người hâm mộ không khỏi hào hứng khi nhìn thấy những cảnh phim quen thuộc từ hai tựa game Resident Evil (1996) và Resident Evil 2 (1998) như Claire Redfield (Kaya Scodelario) đứng trước tấm biển “Chào mừng đến Raccoon City” vào ngày 30/9/1998 hay cuộc đụng độ giữa đội đặc nhiệm S.T.A.R.S và xác sống trong một biệt thự bỏ hoang. Đến Resident Evil 2, virus thoát khỏi phòng thí nghiệm và biến toàn bộ thành phố Raccoon thành xác sống. Chàng cảnh sát tân binh Leon Kennedy tới nhận nhiệm sở trễ nên may mắn sống sót. Song, anh kẹt giữa hàng trăm nghìn zombie khát máu. Leon cũng làm quen với Claire Redfield khi cô đến Raccoon để tìm anh trai Chris. Cả hai hợp tác cùng nhau để thoát khỏi đàn thây ma.`,
            actors: "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau",
            directors: "Jon Watts",
            rated: "C16 - PHIM CẤM KHÁN GIẢ DƯỚI 16 TUỔI",
            language: "Tiếng Anh - Phụ đề Tiếng Việt",
            timeLimit: "178",
            category: [
                {
                    id: 213,
                    name: "Hành Động"
                },
                {
                    id: 213,
                    name: "Phiêu Lưu"
                }
            ]
        },
        {
            id: "5",
            name: "HỐ SỤT TỬ THẦN",
            trailer: "https://www.facebook.com/quanghavan29",
            imageUrl: "https://res.cloudinary.com/fpt-food/image/upload/v1641184106/Website%20Booking%20Movie%20Tickets/movie/ho-sut-tu-than_x3ivpo.jpg",
            status: "Coming Soon",
            // status: "Now Showing",
            premiere: "24/12/2021",
            description: `"SINKHOLE - HỐ SỤT TỬ THẦN " Nội dung phim xoay quanh một gia đình thuộc tầng lớp lao động, sau hơn 11 năm làm việc chăm chỉ họ cũng đã chuyển đến được căn hộ mới. Trong lúc Park Dong Won tổ chức tiệc tân gia, một chiếc hố sụt khổng lồ đã bất ngờ nuốt chửng anh cùng căn hộ mới mua xuống độ sâu 500 mét. Tuy may mắn sống sót, nhưng Park Dong Won cần phải nhanh chóng hợp lực với các vị khách và những cư dân khác để thoát khỏi tòa chung cư đổ nát, trước khi chiếc hố bị nước mưa nhấn chìm.`,
            actors: "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau",
            directors: "Jon Watts",
            rated: "C16 - PHIM CẤM KHÁN GIẢ DƯỚI 16 TUỔI",
            language: "Tiếng Anh - Phụ đề Tiếng Việt",
            timeLimit: "117",
            category: [
                {
                    id: 213,
                    name: "Hành Động"
                },
                {
                    id: 213,
                    name: "Phiêu Lưu"
                }
            ]
        },
        {
            id: '6',
            name: "SPIDER MAN: NO WAY HOME KHÔNG PHẢI LÚC CHẾT",
            trailer: "https://www.facebook.com/quanghavan29",
            imageUrl: "https://res.cloudinary.com/fpt-food/image/upload/v1641181861/Website%20Booking%20Movie%20Tickets/movie/no-way-home_zygcjd.png",
            status: "Coming Soon",
            // status: "Now Showing",
            premiere: "17/12/2021",
            description: `Trailer "Spider-Man: No Way Home" bắt đầu bằng cảnh cuộc sống của Peter Parker hoàn toàn đảo lộn. Cậu bị thẩm vấn vì là kẻ tình nghi sát hại Mysterio (Jake Gyllenhaal), chịu sự săn đuổi của báo giới và tẩy chay từ dư luận… Đáng buồn hơn cả, không chỉ siêu anh hùng trẻ gặp rắc rối, người thân của cậu cũng bị cuốn vào vòng lao lý. Bế tắc, Parker tìm đến Doctor Strange (Benedict Cumberbatch) và Wong (Benedict Wong) với hy vọng khiến thế giới quên đi danh tính siêu anh hùng của mình. Tuy nhiên, sự hợp tác thiếu ăn ý giữa Strange và Parker đã khiến trận pháp bị phá vỡ, đặt đa vũ trụ trước bờ vực nguy hiểm.`,
            actors: "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau",
            directors: "Jon Watts",
            rated: "C16 - PHIM CẤM KHÁN GIẢ DƯỚI 16 TUỔI",
            language: "Tiếng Anh - Phụ đề Tiếng Việt",
            timeLimit: "149",
            category: [
                {
                    id: 213,
                    name: "Hành Động"
                },
                {
                    id: 213,
                    name: "Phiêu Lưu"
                }
            ]
        },
        {
            id: "7",
            name: "KHÔNG PHẢI LÚC CHẾT",
            trailer: "https://www.facebook.com/quanghavan29",
            imageUrl: "https://res.cloudinary.com/fpt-food/image/upload/v1641181738/Website%20Booking%20Movie%20Tickets/movie/no-time-die_mq2deq.png",
            status: "Coming Soon",
            // status: "Now Showing",
            premiere: "14/12/2021",
            description: `"NO TIME TO DIE- KHÔNG PHẢI LÚC CHẾT " Là phần 25 của bộ phim điệp viên huyền thoại 007 hứa hẹn những pha hành động táo bạo và hoành tráng hơn bao giờ hết. Sau sự kiện đầy ám ảnh trong Spectre, Bond lui về ở ẩn tại đất nước Jamaica, sống một cuộc đời cô độc nhưng bình lặng. Bỗng một người bạn cũ từ CIA xuất hiện, cầu xin anh giúp đỡ. Bond bất đắc dĩ phải tái xuất, nhưng không hề biết mình sẽ đối đầu với thế lực nào. Chi tiết đáng chú ý nhất là chiếc mặt nạ trắng vỡ nửa, đánh dấu sự xuất hiện của tên ác nhân kì quái bậc nhất trong cả series 007. Màn chạm trán giữa Bond và kẻ thù nguy hiểm này sẽ vén màn những bí ẩn còn để ngỏ và tiếp theo đó, có thể là một cuộc đối đầu “sinh tử”.`,
            actors: "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau",
            directors: "Jon Watts",
            rated: "C16 - PHIM CẤM KHÁN GIẢ DƯỚI 16 TUỔI",
            language: "Tiếng Anh - Phụ đề Tiếng Việt",
            timeLimit: "162",
            category: [
                {
                    id: 213,
                    name: "Hành Động"
                },
                {
                    id: 213,
                    name: "Phiêu Lưu"
                }
            ]
        },
        {
            id: "8",
            name: "TRẠNG TÝ",
            trailer: "https://www.facebook.com/quanghavan29",
            imageUrl: "https://res.cloudinary.com/fpt-food/image/upload/v1641181933/Website%20Booking%20Movie%20Tickets/movie/tang-ty_rn4h9n.jpg",
            // status: "Coming Soon",
            status: "Now Showing",
            premiere: "22/01/2022",
            description: `Trạng Tí Phiêu Lưu Kí là chuyến phiêu lưu vượt ngoài trí tưởng tượng của bộ tứ Tí - Sửu - Dần - Mẹo khi phải cùng nhau vượt qua rất nhiều thử thách để khám phá bí ẩn về cha Tí. Truyền thuyết Hai Hậu sinh ra Tí vì tựa vào cục đá nghe thật khó tin, nên Tí trở thành tâm điểm chọc phá và coi thường bởi những người xấu tính trong làng. Trên hành trình, bốn đứa trẻ nhiều lần gặp rắc rối, hiểu lầm, tai nạn. Và bất ngờ, bốn đứa trẻ lại bị sơn tặc bắt cóc và bị ép đối đầu trước một âm mưu không thể lường trước được. Nhưng, nhờ những trải nghiệm và có bạn bè bên cạnh những lúc khó khăn đó, Tí dần hoàn thiện tính cách bản thân, bớt háo thắng và biết quan tâm đến người khác, hiểu rằng, cái lý đôi khi không quan trọng bằng cái tình mà con người ta dành cho nhau.`,
            actors: "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau",
            directors: "Jon Watts",
            rated: "C16 - PHIM CẤM KHÁN GIẢ DƯỚI 16 TUỔI",
            language: "Tiếng Anh - Phụ đề Tiếng Việt",
            timeLimit: "132",
            category: [
                {
                    id: 213,
                    name: "Hành Động"
                },
                {
                    id: 213,
                    name: "Phiêu Lưu"
                }
            ]
        },
        {
            id: "9",
            name: "RESIDENT EVIL: QUỶ DỮ TRỖI DẬY",
            trailer: "https://www.facebook.com/quanghavan29",
            imageUrl: "https://res.cloudinary.com/fpt-food/image/upload/v1641184019/Website%20Booking%20Movie%20Tickets/movie/resident-evil_cr4ehf.jpg",
            status: "Coming Soon",
            // status: "Now Showing",
            premiere: "31/12/2021",
            description: `Resident Evil là một trong những tựa game sinh tồn xác sống ăn khách nhất mọi thời đại. Sau 25 năm và 8 phần game gốc cùng hàng loạt ngoại truyện, tác phẩm ngày càng có đông đảo người hâm mộ. Loạt phim Resident Evil do Paul W.S. Anderson đạo diễn là một thành công về mặt thương mại nhưng bị nhiều fan chỉ trích vì rời quá xa nguyên tác. Do đó mà Sony quyết định tái khởi động thương hiệu với Resident Evil: Welcome to Raccoon City (Resident Evil: Quỷ dữ trỗi dậy) có nội dung lấy từ hai phần game đầu tiên. Qua đoạn trailer, người hâm mộ không khỏi hào hứng khi nhìn thấy những cảnh phim quen thuộc từ hai tựa game Resident Evil (1996) và Resident Evil 2 (1998) như Claire Redfield (Kaya Scodelario) đứng trước tấm biển “Chào mừng đến Raccoon City” vào ngày 30/9/1998 hay cuộc đụng độ giữa đội đặc nhiệm S.T.A.R.S và xác sống trong một biệt thự bỏ hoang. Đến Resident Evil 2, virus thoát khỏi phòng thí nghiệm và biến toàn bộ thành phố Raccoon thành xác sống. Chàng cảnh sát tân binh Leon Kennedy tới nhận nhiệm sở trễ nên may mắn sống sót. Song, anh kẹt giữa hàng trăm nghìn zombie khát máu. Leon cũng làm quen với Claire Redfield khi cô đến Raccoon để tìm anh trai Chris. Cả hai hợp tác cùng nhau để thoát khỏi đàn thây ma.`,
            actors: "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau",
            directors: "Jon Watts",
            rated: "C16 - PHIM CẤM KHÁN GIẢ DƯỚI 16 TUỔI",
            language: "Tiếng Anh - Phụ đề Tiếng Việt",
            timeLimit: "178",
            category: [
                {
                    id: 213,
                    name: "Hành Động"
                },
                {
                    id: 213,
                    name: "Phiêu Lưu"
                }
            ]
        },
        {
            id: "10",
            name: "HỐ SỤT TỬ THẦN",
            trailer: "https://www.facebook.com/quanghavan29",
            imageUrl: "https://res.cloudinary.com/fpt-food/image/upload/v1641184106/Website%20Booking%20Movie%20Tickets/movie/ho-sut-tu-than_x3ivpo.jpg",
            status: "Coming Soon",
            // status: "Now Showing",
            premiere: "24/12/2021",
            description: `"SINKHOLE - HỐ SỤT TỬ THẦN " Nội dung phim xoay quanh một gia đình thuộc tầng lớp lao động, sau hơn 11 năm làm việc chăm chỉ họ cũng đã chuyển đến được căn hộ mới. Trong lúc Park Dong Won tổ chức tiệc tân gia, một chiếc hố sụt khổng lồ đã bất ngờ nuốt chửng anh cùng căn hộ mới mua xuống độ sâu 500 mét. Tuy may mắn sống sót, nhưng Park Dong Won cần phải nhanh chóng hợp lực với các vị khách và những cư dân khác để thoát khỏi tòa chung cư đổ nát, trước khi chiếc hố bị nước mưa nhấn chìm.`,
            actors: "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau",
            directors: "Jon Watts",
            rated: "C16 - PHIM CẤM KHÁN GIẢ DƯỚI 16 TUỔI",
            language: "Tiếng Anh - Phụ đề Tiếng Việt",
            timeLimit: "117",
            category: [
                {
                    id: 213,
                    name: "Hành Động"
                },
                {
                    id: 213,
                    name: "Phiêu Lưu"
                }
            ]
        },
    ]
}

const MovieReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export default MovieReducer;