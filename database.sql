CREATE DATABASE  IF NOT EXISTS `booking_movie_tickets` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `booking_movie_tickets`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: booking_movie_tickets
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authority`
--

DROP TABLE IF EXISTS `authority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authority` (
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authority`
--

LOCK TABLES `authority` WRITE;
/*!40000 ALTER TABLE `authority` DISABLE KEYS */;
INSERT INTO `authority` VALUES ('ROLE_ADMIN'),('ROLE_USER');
/*!40000 ALTER TABLE `authority` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdBy` varchar(255) DEFAULT 'Anonymous',
  `createdDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `lastModifiedBy` varchar(255) DEFAULT 'Anonymous',
  `lastModifiedDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Anonymous','2022-01-05 11:07:23','Anonymous','2022-01-05 11:07:23','Hành Động'),(2,'Anonymous','2022-01-05 11:07:23','Anonymous','2022-01-05 11:07:23','Phiêu Lưu'),(3,'Anonymous','2022-01-05 11:07:23','Anonymous','2022-01-05 11:07:23','Viễn Tưởng'),(4,'Anonymous','2022-01-05 11:08:17','Anonymous','2022-01-05 11:08:17','Tâm Lý'),(5,'Anonymous','2022-01-05 11:08:17','Anonymous','2022-01-05 11:08:17','Kinh Dị'),(6,'Anonymous','2022-01-05 20:05:30','Anonymous','2022-01-05 20:05:30','Hài'),(7,'Anonymous','2022-01-05 20:05:30','Anonymous','2022-01-05 20:05:30','Hồi Hộp'),(8,'Anonymous','2022-01-05 20:26:45','Anonymous','2022-01-05 20:26:45','Hoạt Hình'),(9,'Anonymous','2022-01-05 20:27:11','Anonymous','2022-01-05 20:27:11','Nhạc Kịch'),(10,'Anonymous','2022-01-05 20:27:11','Anonymous','2022-01-05 20:27:11','Tình Cảm');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `timestamp` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,1570200270081,'CreateTables1570200270081'),(2,1570200490072,'SeedUsersRoles1570200490072');
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdBy` varchar(255) DEFAULT 'Anonymous',
  `createdDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `lastModifiedBy` varchar(255) DEFAULT 'Anonymous',
  `lastModifiedDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(255) DEFAULT NULL,
  `trailer` longtext,
  `poster` longtext,
  `status` varchar(255) DEFAULT NULL,
  `premiere` datetime DEFAULT NULL,
  `description` longtext,
  `actors` longtext,
  `directors` varchar(255) DEFAULT NULL,
  `rated` varchar(255) DEFAULT NULL,
  `language` varchar(255) DEFAULT NULL,
  `timeLimit` int DEFAULT NULL,
  `backgroundIntroUrl` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` VALUES (1,'Anonymous','2022-01-05 11:13:15','Anonymous','2022-01-05 11:13:15','SPIDER MAN: NO WAY HOME','rt-2cxAiPJk','https://res.cloudinary.com/fpt-food/image/upload/v1641181861/Website%20Booking%20Movie%20Tickets/movie/no-way-home_zygcjd.png','Now Showing','2021-12-17 00:00:00','Trailer \"Spider-Man: No Way Home\" bắt đầu bằng cảnh cuộc sống của Peter Parker hoàn toàn đảo lộn. Cậu bị thẩm vấn vì là kẻ tình nghi sát hại Mysterio (Jake Gyllenhaal), chịu sự săn đuổi của báo giới và tẩy chay từ dư luận… Đáng buồn hơn cả, không chỉ siêu anh hùng trẻ gặp rắc rối, người thân của cậu cũng bị cuốn vào vòng lao lý. Bế tắc, Parker tìm đến Doctor Strange (Benedict Cumberbatch) và Wong (Benedict Wong) với hy vọng khiến thế giới quên đi danh tính siêu anh hùng của mình. Tuy nhiên, sự hợp tác thiếu ăn ý giữa Strange và Parker đã khiến trận pháp bị phá vỡ, đặt đa vũ trụ trước bờ vực nguy hiểm.','Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon','Jon Watts','C16 - PHIM CẤM KHÁN GIẢ DƯỚI 16 TUỔI','Tiếng Anh - Phụ đề Tiếng Việt',149,'https://res.cloudinary.com/fpt-food/image/upload/v1641419569/Website%20Booking%20Movie%20Tickets/movie/bg_detail/no-way-home-bg-trailer_hfhyrt.png'),(2,'Anonymous','2022-01-05 11:17:49','Anonymous','2022-01-05 11:17:49','KHÔNG PHẢI LÚC CHẾT','BIhNsAtPbPI','https://res.cloudinary.com/fpt-food/image/upload/v1641181738/Website%20Booking%20Movie%20Tickets/movie/no-time-die_mq2deq.png','Now Showing','2021-12-31 00:00:00','Phần 25 của bộ phim điệp viên huyền thoại 007 sẽ tiếp nối câu chuyện về James Bond cùng những pha hành động táo bạo và hoành tráng hơn bao giờ hết. Sau sự kiện đầy ám ảnh trong Spectre, Bond lui về ở ẩn tại đất nước Jamaica, sống một cuộc đời cô độc nhưng bình lặng. Bỗng một người bạn cũ từ CIA xuất hiện, cầu xin anh giúp đỡ. Bond bất đắc dĩ phải tái xuất, nhưng không hề biết mình sẽ đối đầu với thế lực nào. Chi tiết đáng chú ý nhất là chiếc mặt nạ trắng vỡ nửa, đánh dấu sự xuất hiện của tên ác nhân kì quái bậc nhất trong cả series 007. Màn chạm trán giữa Bond và kẻ thù nguy hiểm này sẽ vén màn những bí ẩn còn để ngỏ và tiếp theo đó, có thể là một cuộc đối đầu “sinh tử”.','Daniel Craig, Rami Malek, Léa Seydoux','Cary Joji Fukunaga','C16 - PHIM CẤM KHÁN GIẢ DƯỚI 16 TUỔI','Tiếng Anh - Phụ đề Tiếng Việt, Phụ đề Tiếng Hàn',164,'https://res.cloudinary.com/fpt-food/image/upload/v1641419568/Website%20Booking%20Movie%20Tickets/movie/bg_detail/no-time-die_p2gnyy.png'),(3,'Anonymous','2022-01-05 11:22:23','Anonymous','2022-01-05 11:22:23','RESIDENT EVIL: QUỶ DỮ TRỖI DẬY','jr6YqjVtdKs','https://res.cloudinary.com/fpt-food/image/upload/v1641184019/Website%20Booking%20Movie%20Tickets/movie/resident-evil_cr4ehf.jpg','Now Showing','2021-12-31 00:00:00','Trở lại với khởi nguồn của loạt phim Resident Evil đình đám, người hâm mộ và nhà làm phim Johannes Roberts mang trò chơi trở nên sống động hơn đến tất cả người hâm mộ. Trong RESIDENT EVIL: WELCOME TO RACCOON CITY, nơi từng là trụ sở tiên tiến của tập đoàn khổng lồ Unbrella, thành phố Raccoon giờ đây đang chết dần. Việc di dời tập đoàn đã để lại vùng đất hoang... cùng loài quỷ dữ ẩn mình bên dưới lòng đất. Khi quỷ dữ được giải phóng, một nhóm người sống sót phải cùng nhau sống sót và khám phá sự thật phía sau Umbrella.','Kaya Scodelario, Hannah John-Kamen, Robbie Amell, Tom Hopper','Johannes Roberts','C18 - PHIM CẤM KHÁN GIẢ DƯỚI 18 TUỔI','Tiếng Anh - Phụ đề Tiếng Việt',107,'https://res.cloudinary.com/fpt-food/image/upload/v1641419569/Website%20Booking%20Movie%20Tickets/movie/bg_detail/quy-du-doi-bg-trailer_grgatd.jpg'),(5,'Anonymous','2022-01-05 20:01:13','Anonymous','2022-01-05 20:01:13','HỐ SỤT TỬ THẦN','zxYt_anfppg','https://res.cloudinary.com/fpt-food/image/upload/v1641184106/Website%20Booking%20Movie%20Tickets/movie/ho-sut-tu-than_x3ivpo.jpg','Now Showing','2021-12-25 00:00:00','Trong lúc Park Dong Won tổ chức tiệc tân gia, một chiếc hố sụt khổng lồ đã bất ngờ nuốt chửng anh cùng căn hộ mới mua xuống độ sâu 500 mét. Tuy may mắn sống sót, nhưng Park Dong Won cần phải nhanh chóng hợp lực với các vị khách và những cư dân khác để thoát khỏi tòa chung cư đổ nát, trước khi chiếc hố bị nước mưa nhấn chìm.','Cha Seung Won, Kim Sung Kyun, Lee Kwang Soo, Kim Hye Jun','Kim Ji Hoon','C13 - PHIM CẤM KHÁN GIẢ DƯỚI 13 TUỔI','Tiếng Hàn - Phụ đề tiếng Việt',117,'https://res.cloudinary.com/fpt-food/image/upload/v1641419568/Website%20Booking%20Movie%20Tickets/movie/bg_detail/ho-sut-tu-than-bg-trailer_bcezag.png'),(6,'Anonymous','2022-01-05 19:54:04','Anonymous','2022-01-05 19:54:04','MA TRẬN: HỒI SINH','4s8plIwRKq8','https://res.cloudinary.com/fpt-food/image/upload/v1641412633/Website%20Booking%20Movie%20Tickets/ma-tran_ijvdpe.jpg','Now Showing','2021-12-24 00:00:00','Ma Trận: Hồi Sinh là phần phim tiếp theo rất được trông đợi của loạt phim “Ma Trận” đình đám, đã góp phần tái định nghĩa thể loại phim khoa học viễn tưởng. Phần phim mới nhất này đón chào sự trở lại của cặp đôi Keanu Reeves và Carrie-Anne Moss với vai diễn biểu tượng đã làm nên tên tuổi của họ, Neo và Trinity. Ngoài ra, phim còn có sự góp mặt của dàn diễn viên đầy tài năng gồm Yahya Abdul-Mateen II, Jessica Henwick, Jonathan Groff, Neil Patrick Harris, Priyanka Chopra Jonas và Christina Ricci.','Keanu Reeves, Carrie-Anne Moss, Yahya Abdul-Mateen II, Jessica Henwick','Lana Wachowski','C18 - PHIM CẤM KHÁN GIẢ DƯỚI 18 TUỔI','Tiếng Anh - Phụ đề Tiếng Việt, Phụ đề Tiếng Hàn',148,'https://res.cloudinary.com/fpt-food/image/upload/v1641419568/Website%20Booking%20Movie%20Tickets/movie/bg_detail/bg_ma_tran_tsemcq.png'),(8,'Anonymous','2022-01-05 20:09:56','Anonymous','2022-01-05 20:09:56','RỪNG THẾ MẠNG','lq6a-KBGFtI','https://res.cloudinary.com/fpt-food/image/upload/v1641413454/Website%20Booking%20Movie%20Tickets/movie/rung-the-mang_bnsueq.png','Now Showing','2021-12-31 00:00:00','Tà Năng - Phan Dũng, cung đường trekking đẹp nhất Việt Nam với những câu chuyện tâm linh kỳ bí chưa có lời giải đáp. Dù được cảnh báo sự nguy hiểm và \"mỗi năm sẽ có người thế mạng\", nhưng một phượt thủ trẻ vẫn quyết định tách đoàn để tìm người bạn thân đi lạc. Hơn 10 ngày đêm kiệt quệ, anh không chỉ rơi vào cuộc chiến sinh tồn chốn rừng thiêng nước độc, mà còn đối mặt với những ám ảnh rùng rợn như ai đó từng nói \"ma đưa lối, quỷ dẫn đường”…','Huỳnh Thanh Trực, Trần Phong, Thùy Anh, Thùy Dương, Lê Quang Vinh','Trần Hữu Tấn','C16 - PHIM CẤM KHÁN GIẢ DƯỚI 16 TUỔI','Tiếng Việt - Phụ đề Tiếng Anh',94,'https://res.cloudinary.com/fpt-food/image/upload/v1641419569/Website%20Booking%20Movie%20Tickets/movie/bg_detail/rung-the-mang-bg-trailer_oy1x7w.png'),(9,'Anonymous','2022-01-05 20:13:02','Anonymous','2022-01-05 20:13:02','CLIFFORD CHÚ CHÓ ĐỎ KHỔNG LỒ','1AZDVKFjh2Q','https://res.cloudinary.com/fpt-food/image/upload/v1641413868/Website%20Booking%20Movie%20Tickets/movie/chu-cho-do_esjw2b.jpg','Now Showing','2021-12-31 00:00:00','Một cô bé nhỏ đã dành thật nhiều tình yêu cho chú cún màu đỏ đặc biệt của mình và sau một đêm chú cún đã hóa khổng lồ. Cuộc hành trình vui nhộn cùng chú chó đỏ khổng lồ bắt đầu từ đây.','Darby Camp, Jack Whitehall, Izaac Wang, John Cleese','Walt Becker','P00 - PHIM DÀNH CHO MỌI ĐỐI TƯỢNG','Tiếng Anh - Phụ đề Tiếng Việt;',97,'https://res.cloudinary.com/fpt-food/image/upload/v1641419568/Website%20Booking%20Movie%20Tickets/movie/bg_detail/bg_chu_cho_do_jtnjxa.png'),(10,'Anonymous','2022-01-05 20:21:41','Anonymous','2022-01-05 20:21:41','HAPPY NEW YEAR: CHÚC MỪNG NĂM MỚI','oFxVEYjP0PM','https://res.cloudinary.com/fpt-food/image/upload/v1641414132/Website%20Booking%20Movie%20Tickets/movie/happy-new-year_vacoaf.jpg','Now Showing','2021-12-31 00:00:00','HAPPY NEW YEAR là bức tranh gồm những mảnh ghép đầy thú vị về những vị khách tới với khách sạn Emross dịp cuối năm. Mỗi người một câu chuyện riêng, cảm xúc riêng, góc nhìn riêng và mong cầu riêng đối với tình yêu và cuộc sống. “Đây là nơi mà người ta ở lại, rời đi, gặp gỡ, rồi chia tay. Liệu chúng ta cũng sẽ tìm thấy ai đó đặc biệt cho riêng mình chứ?” – câu hỏi không chỉ dành cho các nhân vật, mà còn là nỗi niềm của mỗi người trong chúng ta sau một năm khó khăn vừa qua. Lời giải đáp sẽ đến cùng Happy New Year vào ngày 31.12.2021.','Han Ji Min, Lee Dong Wook, Kang Ha Neul, Lim Yoona, Won Jin Ah','Kwak Jae Young','C13 - PHIM CẤM KHÁN GIẢ DƯỚI 13 TUỔI','Tiếng Hàn - Phụ đề tiếng Việt',137,'https://res.cloudinary.com/fpt-food/image/upload/v1641419568/Website%20Booking%20Movie%20Tickets/movie/bg_detail/bg_intro_happy_new_year_cy9mw5.jpg'),(11,'Anonymous','2022-01-05 20:24:12','Anonymous','2022-01-05 20:24:12','NHÓC TRÙM: NỐI NGHIỆP GIA ĐÌNH','RAM4K7RnUmQ','https://res.cloudinary.com/fpt-food/image/upload/v1641414304/Website%20Booking%20Movie%20Tickets/movie/nhoc-trum_hjbvix.jpg','Now Showing','2021-12-24 00:00:00','Nhóc trùm Ted giờ đây đã trở thành một triệu phú nổi tiếng trong khi Tim lại có một cuộc sống đơn giản bên vợ anh Carol và hai cô con gái nhỏ yêu dấu. Mỗi mùa Giáng sinh tới, cả Tina và Tabitha đều mong được gặp chú Ted nhưng dường như hai anh em nhà Templeton nay đã không còn gần gũi như xưa. Nhưng bất ngờ thay khi Ted lại có màn tái xuất không thể hoành tráng hơn khi đáp thẳng máy bay trực thăng tới nhà Tim trước sự ngỡ ngàng của cả gia đình.','Amy Sedaris, Jeff Goldblum, James Marsden','Tom McGrath','P00 - PHIM DÀNH CHO MỌI ĐỐI TƯỢNG','Tiếng Anh với phụ đề tiếng Việt và lồng tiếng Việt',105,'https://res.cloudinary.com/fpt-food/image/upload/v1641419803/Website%20Booking%20Movie%20Tickets/movie/bg_detail/nhoc-trum_ywskmg.png'),(13,'Anonymous','2022-01-05 20:34:25','Anonymous','2022-01-05 20:34:25','CON TIN: NGÔI SAO MẤT TÍCH','aJRnbEtG_RI','https://res.cloudinary.com/fpt-food/image/upload/v1641414927/Website%20Booking%20Movie%20Tickets/movie/con-tin_xoewvv.png','Now Showing','2022-01-07 00:00:00','Ngôi sao “bảo chứng phòng vé” Hwang Jung Min bị nhóm người lạ mặt bắt cóc sau khi tham dự buổi ra mắt phim. Nghĩ rằng đó là một trò đùa, anh ta tỏ ra vô cùng thoải mái cho đến khi bị chúng tra tấn dã man. Nhận ra tính mạng đang gặp nguy hiểm, nam tài tử này cố gắng vận dụng mọi kỹ năng hòng tìm đường trốn thoát','Daniel Craig, Rami Malek, Léa Seydoux','Cary Joji Fukunaga','C18 - PHIM CẤM KHÁN GIẢ DƯỚI 18 TUỔI','Tiếng Hàn - Phụ đề tiếng Việt',94,'https://res.cloudinary.com/fpt-food/image/upload/v1641419794/Website%20Booking%20Movie%20Tickets/movie/bg_detail/bg_contin_qxzgd4.jpg'),(14,'Anonymous','2022-01-05 20:46:12','Anonymous','2022-01-05 20:46:12','VENOM: ĐỐI MẶT TỬ THÙ','xg059y46gOI','https://res.cloudinary.com/fpt-food/image/upload/v1641415540/Website%20Booking%20Movie%20Tickets/movie/venom_ty84s0.jpg','Now Showing','2022-01-06 00:00:00','\"Venom: Đối Mặt Tử Thù \" là phần hậu truyện tiếp theo của Venom. Sau chiến thắng trước ác nhân Riot, Eddie Brock (Tom Hardy đóng) và thể cộng sinh ngoài hành tinh Venom sống chung trong yên bình. Ngày nọ, tên sát nhân tâm thần Cletus Kasady (Woody Harrelson) hợp thể cùng một thể cộng sinh khác, đổi tên Carnage, gieo rắc kinh hoàng cho nhân loại. Bộ đôi Eddie - Venom quyết định đối đầu Carnage, trước khi hắn hủy diệt thế giới.','Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon','Normal sound','C13 - PHIM CẤM KHÁN GIẢ DƯỚI 13 TUỔI','Tiếng Anh - Phụ đề Tiếng Việt, Phụ đề Tiếng Hàn',97,'https://res.cloudinary.com/fpt-food/image/upload/v1641419568/Website%20Booking%20Movie%20Tickets/movie/bg_detail/bg_vendom_nu0fju.png');
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie_category`
--

DROP TABLE IF EXISTS `movie_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie_category` (
  `categoryId` int NOT NULL,
  `movieId` int NOT NULL,
  PRIMARY KEY (`categoryId`,`movieId`),
  KEY `IDX_ff836b71f06b959e60e1d0bbf6` (`categoryId`),
  KEY `IDX_aaf969744da05188d79735042b` (`movieId`),
  CONSTRAINT `FK_aaf969744da05188d79735042bf` FOREIGN KEY (`movieId`) REFERENCES `movie` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_ff836b71f06b959e60e1d0bbf6a` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie_category`
--

LOCK TABLES `movie_category` WRITE;
/*!40000 ALTER TABLE `movie_category` DISABLE KEYS */;
INSERT INTO `movie_category` VALUES (1,1),(1,2),(1,3),(1,6),(1,13),(2,1),(2,9),(2,11),(3,6),(4,10),(5,3),(5,8),(6,5),(6,9),(6,10),(7,5),(7,8),(8,11),(10,10),(10,13);
/*!40000 ALTER TABLE `movie_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdBy` varchar(255) DEFAULT 'Anonymous',
  `createdDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `lastModifiedBy` varchar(255) DEFAULT 'Anonymous',
  `lastModifiedDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `login` varchar(255) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `activated` tinyint NOT NULL DEFAULT '0',
  `langKey` varchar(255) NOT NULL DEFAULT 'en',
  `password` varchar(255) NOT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `activationKey` varchar(255) DEFAULT NULL,
  `resetKey` varchar(255) DEFAULT NULL,
  `resetDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_a62473490b3e4578fd683235c5` (`login`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'system','2022-01-05 11:06:31','system','2022-01-05 11:06:31','system','System','System','system@localhost.it',1,'en','$2b$10$1VXOtF6lVafWEZ63bD23puhkY2B7Xf3Ij7d7h.YsOoddzCbf/Vldi','',NULL,NULL,NULL),(2,'system','2022-01-05 11:06:31','system','2022-01-05 11:06:31','anonymoususer','Anonymous','User','anonymoususer@localhost.it',1,'en','$2b$10$aoMAna8vi9EaljJMVFPkRuGky99I3kJFYXIXw/X6TXBk7NezpClW.','',NULL,NULL,NULL),(3,'system','2022-01-05 11:06:31','system','2022-01-05 11:06:31','admin','Administrator','Administrator','admin@localhost.it',1,'en','$2b$10$IYHCUXTu72AX/mdxwGEaHOuebdUT6gBI9AP8oWl.POe4bgtB5dZMa','',NULL,NULL,NULL),(4,'system','2022-01-05 11:06:31','system','2022-01-05 11:06:31','user','User','User','user@localhost.it',1,'en','$2b$10$jHk3TQt94liwX7I1zZ2EqeTEW4CkfVGf13IMS468Kg4iJl62SpVLi','',NULL,NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_authorities_authority`
--

DROP TABLE IF EXISTS `user_authorities_authority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_authorities_authority` (
  `userId` int NOT NULL,
  `authorityName` varchar(255) NOT NULL,
  PRIMARY KEY (`userId`,`authorityName`),
  KEY `IDX_8f62ba8a50a3947a03daea3a91` (`userId`),
  KEY `IDX_3ecebbac586afdb652249ef826` (`authorityName`),
  CONSTRAINT `FK_3ecebbac586afdb652249ef8263` FOREIGN KEY (`authorityName`) REFERENCES `authority` (`name`) ON DELETE CASCADE,
  CONSTRAINT `FK_8f62ba8a50a3947a03daea3a918` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_authorities_authority`
--

LOCK TABLES `user_authorities_authority` WRITE;
/*!40000 ALTER TABLE `user_authorities_authority` DISABLE KEYS */;
INSERT INTO `user_authorities_authority` VALUES (1,'ROLE_ADMIN'),(1,'ROLE_USER'),(3,'ROLE_ADMIN'),(3,'ROLE_USER'),(4,'ROLE_USER');
/*!40000 ALTER TABLE `user_authorities_authority` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'booking_movie_tickets'
--

--
-- Dumping routines for database 'booking_movie_tickets'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-06  5:26:05
