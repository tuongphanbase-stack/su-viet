// Chi tiết bổ sung cho Sử Việt: dòng thời gian, nhà nước, kinh tế, văn hóa,
// đối ngoại của từng thời kỳ, hồ sơ nhân vật mở rộng và nhân vật mới.
//
// Chỉ là dữ liệu. Muốn bổ sung, thêm vào đây — không cần sửa app.js:
//   eras[i]       : i là số thứ tự thời kỳ trong P (0 = Hồng Bàng ... 30 = hiện đại)
//     timeline    : [[mốc thời gian, sự kiện], ...]   (mốc là chữ, ví dụ "938", "TK III TCN")
//     politics, economy, culture, war : đoạn văn ngắn
//     note        : lưu ý về độ chắc chắn của nguồn (nếu có)
//   people[id]    : hồ sơ mở rộng cho nhân vật có sẵn
//     story       : câu chuyện dài hơn
//     events      : [[năm, sự kiện], ...]
//   newPeople     : nhân vật mới, cùng cấu trúc với PEOPLE trong app.js,
//                   cộng thêm periods: [các thời kỳ sẽ hiện nhân vật này]
(function (root) {
  'use strict';

  var D = { eras: {}, people: {}, newPeople: [] };

  /* ======================= THỜI KỲ ======================= */

  D.eras[0] = {
    note: 'Niên đại 2879 TCN và 18 đời Hùng Vương là truyền thống sử học (Đại Việt sử ký toàn thư), không phải niên biểu đã được khảo cổ chứng minh. Các mốc khảo cổ dưới đây đáng tin cậy hơn.',
    timeline: [
      ['2879 TCN', 'Mốc truyền thống: Kinh Dương Vương lập nước Xích Quỷ (theo Toàn thư).'],
      ['~2000–1500 TCN', 'Văn hóa Phùng Nguyên: cư dân nông nghiệp lúa nước sớm ở trung du và đồng bằng Bắc Bộ.'],
      ['~1500–1000 TCN', 'Văn hóa Đồng Đậu và Gò Mun: kỹ thuật đúc đồng phát triển dần.'],
      ['~TK VII TCN', 'Mốc thường dùng cho sự hình thành nhà nước Văn Lang của các vua Hùng, đóng ở Phong Châu.'],
      ['~TK VII TCN – TK I', 'Văn hóa Đông Sơn: trống đồng, rìu, giáo, thạp đồng; đỉnh cao kỹ thuật đồng thau.'],
      ['258 TCN', 'Mốc truyền thống kết thúc Văn Lang, khi Thục Phán lập nước Âu Lạc.'],
    ],
    politics: 'Truyền thống chép nước Văn Lang có vua Hùng đứng đầu, giúp việc là Lạc hầu, Lạc tướng; dưới là các bộ do Lạc tướng cai quản, cơ sở là làng (chiềng, chạ). Đây là mô tả từ sử liệu muộn, phản ánh một xã hội tù trưởng liên minh hơn là một nhà nước tập quyền.',
    economy: 'Trồng lúa nước ở đồng bằng sông Hồng, sông Mã, sông Cả; chăn nuôi, đánh cá, săn bắt. Nghề đúc đồng đạt trình độ cao, làm ra công cụ, vũ khí và trống đồng.',
    culture: 'Trống đồng Đông Sơn (nổi tiếng nhất là trống Ngọc Lũ) với hoa văn người giã gạo, thuyền, chim Lạc. Các truyền thuyết Lạc Long Quân – Âu Cơ, Sơn Tinh – Thủy Tinh, Thánh Gióng, bánh chưng bánh giầy hình thành trong ký ức về thời kỳ này.',
    war: 'Truyền thuyết Thánh Gióng kể việc đánh giặc Ân; Sơn Tinh – Thủy Tinh phản ánh cuộc chống lũ lụt. Đây là truyền thuyết, không phải ghi chép chiến sự.'
  };

  D.eras[1] = {
    note: 'Niên đại Âu Lạc (257–208 TCN) theo truyền thống; một số nhà nghiên cứu đặt mốc kết thúc vào khoảng 179 TCN.',
    timeline: [
      ['257 TCN', 'Thục Phán hợp nhất Âu Việt và Lạc Việt, xưng An Dương Vương, lập nước Âu Lạc.'],
      ['TK III TCN', 'Xây thành Cổ Loa: ba vòng thành đất hình xoáy ốc, hào nước bao quanh.'],
      ['Cuối TK III TCN', 'Âu Lạc chống lại các cuộc tấn công từ phương Bắc.'],
      ['208 TCN (truyền thống)', 'Triệu Đà chiếm Âu Lạc; truyền thuyết Mỵ Châu – Trọng Thủy và nỏ thần.'],
    ],
    politics: 'Âu Lạc kế thừa tổ chức Văn Lang nhưng có trung tâm quyền lực rõ hơn ở Cổ Loa, nơi quy tụ quân đội và thủ công.',
    economy: 'Nông nghiệp lúa nước tiếp tục phát triển; kho mũi tên đồng hàng vạn chiếc tìm thấy ở Cổ Loa cho thấy sản xuất vũ khí quy mô lớn.',
    culture: 'Thành Cổ Loa là công trình phòng thủ lớn nhất Đông Nam Á thời đó. Truyền thuyết Rùa Vàng, nỏ thần, Mỵ Châu – Trọng Thủy gắn với thời kỳ này.',
    war: 'Âu Lạc giỏi dùng nỏ. Truyền thuyết kể nhờ nỏ thần mà nhiều lần đẩy lui quân Triệu Đà, đến khi mất nỏ thì mất nước.'
  };

  D.eras[2] = {
    timeline: [
      ['204 TCN', 'Triệu Đà lập nước Nam Việt, đóng đô ở Phiên Ngung (Quảng Châu ngày nay).'],
      ['~179 TCN', 'Mốc nhiều nhà nghiên cứu dùng cho việc Nam Việt chiếm Âu Lạc, đặt quận Giao Chỉ và Cửu Chân.'],
      ['137 TCN', 'Triệu Đà mất, Triệu Văn Vương kế vị.'],
      ['112 TCN', 'Thừa tướng Lữ Gia chống lại việc nội thuộc nhà Hán.'],
      ['111 TCN', 'Nhà Hán đánh chiếm Nam Việt, mở đầu thời Bắc thuộc lần thứ nhất.'],
    ],
    politics: 'Nam Việt cai quản Giao Chỉ, Cửu Chân qua các quan Điển sứ nhưng vẫn để Lạc tướng cai quản dân như cũ — một kiểu "ràng buộc lỏng".',
    economy: 'Nông nghiệp bản địa giữ nguyên; trao đổi với vùng Lĩnh Nam tăng.',
    culture: 'Sử Việt thời phong kiến (Toàn thư) từng xếp nhà Triệu là một triều đại chính thống của nước Việt; nhiều sử gia từ Ngô Thì Sĩ trở đi phản bác quan điểm này.',
    war: 'Quan hệ với nhà Hán lúc hòa lúc căng; cuộc chiến 111 TCN chấm dứt nước Nam Việt.'
  };

  D.eras[3] = {
    timeline: [
      ['111 TCN', 'Nhà Hán đặt các quận Giao Chỉ, Cửu Chân, Nhật Nam trong bộ Giao Chỉ.'],
      ['TK I TCN', 'Quan lại Hán đặt ách thu thuế và cống nạp; Lạc tướng vẫn giữ quyền ở địa phương.'],
      ['Đầu Công nguyên', 'Thái thú Tích Quang (Giao Chỉ) và Nhâm Diên (Cửu Chân) đẩy mạnh việc truyền bá lễ nghi Hán.'],
      ['34', 'Tô Định làm Thái thú Giao Chỉ, cai trị hà khắc.'],
      ['39', 'Mâu thuẫn với chính quyền Hán lên cao, dẫn tới khởi nghĩa năm 40.'],
    ],
    politics: 'Lần đầu tiên vùng đất Việt bị chia thành quận huyện theo kiểu Hán, đứng đầu là Thái thú do triều đình cử sang.',
    economy: 'Chính quyền thu thuế, bắt cống ngọc trai, ngà voi, sừng tê; Luy Lâu trở thành trung tâm buôn bán lớn.',
    culture: 'Chữ Hán và lễ giáo Hán bắt đầu du nhập nhưng chủ yếu trong tầng lớp quan lại; làng xã giữ phong tục bản địa.',
    war: 'Không có cuộc khởi nghĩa lớn được ghi lại cho đến khi Hai Bà Trưng nổi dậy năm 40.'
  };

  D.eras[4] = {
    timeline: [
      ['40', 'Trưng Trắc và Trưng Nhị khởi nghĩa ở Mê Linh, đánh đuổi Thái thú Tô Định.'],
      ['40', 'Khởi nghĩa lan ra Cửu Chân, Nhật Nam, Hợp Phố; khoảng 65 thành được giải phóng. Trưng Trắc xưng vương.'],
      ['42', 'Nhà Hán sai Mã Viện đem quân sang đàn áp.'],
      ['43', 'Hai Bà thua ở Lãng Bạc, rút về Cấm Khê và hy sinh (theo truyền thống, tự trầm ở sông Hát).'],
    ],
    politics: 'Trưng Vương đóng đô ở Mê Linh, miễn thuế hai năm cho dân. Chính quyền tồn tại khoảng ba năm.',
    economy: 'Cuộc khởi nghĩa nổ ra từ sự căm ghét chế độ thu thuế, cống nạp nặng nề.',
    culture: 'Nhiều nữ tướng tham gia (như Lê Chân, Thánh Thiên). Hai Bà Trưng được thờ ở nhiều đền, nổi bật là đền Hai Bà Trưng ở Hà Nội và Mê Linh.',
    war: 'Sau khi thắng, Mã Viện cho dựng cột đồng và cải tổ luật lệ, thay Lạc tướng bằng quan lại Hán để siết chặt cai trị.'
  };

  D.eras[5] = {
    timeline: [
      ['44', 'Mã Viện rút về; nhà Hán xóa bỏ quyền của Lạc tướng, cai trị trực tiếp đến huyện.'],
      ['187–226', 'Sĩ Nhiếp làm Thái thú Giao Chỉ; Luy Lâu thành trung tâm Phật giáo và Nho học.'],
      ['248', 'Bà Triệu (Triệu Thị Trinh) khởi nghĩa ở Cửu Chân chống nhà Ngô (Đông Ngô).'],
      ['TK III–V', 'Giao Châu lần lượt thuộc Ngô, Tấn, Tống, Tề, Lương.'],
      ['542', 'Lý Bí khởi nghĩa chống nhà Lương.'],
    ],
    politics: 'Giao Châu là một châu của các triều Trung Hoa, quan lại thường tham nhũng; quyền lực địa phương dần chuyển sang các hào trưởng bản địa.',
    economy: 'Luy Lâu và Long Biên là trung tâm buôn bán đường biển với Ấn Độ và Đông Nam Á.',
    culture: 'Phật giáo theo đường biển vào Luy Lâu từ rất sớm (trung tâm Phật giáo Luy Lâu, tác phẩm Lý hoặc luận của Mâu Bác). Nho học được Sĩ Nhiếp đề cao.',
    war: 'Các cuộc nổi dậy tiếp nối: Bà Triệu (248), Lý Trường Nhân, Lý Thúc Hiến (TK V), và cuối cùng là Lý Bí (542).'
  };

  D.eras[6] = {
    timeline: [
      ['542', 'Lý Bí khởi nghĩa, đánh đuổi Thứ sử Tiêu Tư.'],
      ['544', 'Lý Bí xưng Lý Nam Đế, đặt quốc hiệu Vạn Xuân, dựng chùa Khai Quốc (nay là chùa Trấn Quốc).'],
      ['545–546', 'Nhà Lương sai Trần Bá Tiên sang đánh; Lý Nam Đế lui về động Khuất Lão và mất năm 548.'],
      ['550', 'Triệu Quang Phục đánh thắng từ đầm Dạ Trạch, xưng Triệu Việt Vương.'],
      ['571', 'Lý Phật Tử đánh úp Triệu Việt Vương, nắm quyền.'],
      ['602', 'Nhà Tùy sai Lưu Phương sang đánh; Lý Phật Tử ra hàng, Vạn Xuân kết thúc.'],
    ],
    politics: 'Lần đầu tiên một người Việt xưng đế và đặt quốc hiệu riêng (Vạn Xuân — mong đất nước bền vững muôn đời).',
    economy: 'Nông nghiệp vùng đồng bằng tiếp tục là nền tảng; chiến tranh kéo dài gây nhiều xáo trộn.',
    culture: 'Chùa Khai Quốc (sau là Trấn Quốc) ở Thăng Long được coi là ngôi chùa cổ nhất Hà Nội. Truyền thuyết Chử Đồng Tử ban móng rồng cho Triệu Quang Phục.',
    war: 'Chiến thuật du kích ở đầm Dạ Trạch (Hưng Yên) của Triệu Quang Phục là ví dụ sớm về lối đánh dựa vào địa hình.'
  };

  D.eras[7] = {
    timeline: [
      ['603', 'Nhà Tùy đặt lại Giao Châu.'],
      ['679', 'Nhà Đường lập An Nam đô hộ phủ, trị sở ở Tống Bình (Hà Nội).'],
      ['713–722', 'Mai Thúc Loan khởi nghĩa ở Hoan Châu, xưng Mai Hắc Đế.'],
      ['767', 'Đắp thành Đại La (La Thành) quanh Tống Bình.'],
      ['~791', 'Phùng Hưng chiếm phủ thành Tống Bình; dân tôn là Bố Cái Đại Vương.'],
      ['819–820', 'Dương Thanh khởi nghĩa.'],
      ['866', 'Cao Biền đắp lại thành Đại La; An Nam được nâng thành Tĩnh Hải quân.'],
    ],
    politics: 'Chính quyền đô hộ nhà Đường có hệ thống phủ, châu, huyện chặt chẽ, đứng đầu là Đô hộ, sau là Tiết độ sứ Tĩnh Hải quân.',
    economy: 'Thuế khóa nặng (tô, dung, điệu); Giao Châu là điểm trung chuyển thương mại biển quan trọng của nhà Đường.',
    culture: 'Phật giáo Thiền tông phát triển (phái Tỳ-ni-đa-lưu-chi, Vô Ngôn Thông). Một số người Việt đỗ đạt và làm quan ở Trung Hoa, như Khương Công Phụ.',
    war: 'Nam Chiếu (Vân Nam) nhiều lần tấn công An Nam, đáng kể nhất là 860–866, trước khi Cao Biền đánh lui.'
  };

  D.eras[8] = {
    timeline: [
      ['905', 'Khúc Thừa Dụ nắm quyền Tiết độ sứ Tĩnh Hải quân khi nhà Đường suy yếu.'],
      ['907', 'Khúc Thừa Dụ mất; con là Khúc Hạo tiếp tục cải cách hành chính, thuế khóa.'],
      ['930', 'Nam Hán đánh chiếm Đại La, bắt Khúc Thừa Mỹ.'],
      ['931', 'Dương Đình Nghệ từ Ái Châu đánh đuổi quân Nam Hán, xưng Tiết độ sứ.'],
      ['937', 'Kiều Công Tiễn giết Dương Đình Nghệ để đoạt quyền.'],
      ['937–938', 'Kiều Công Tiễn cầu cứu Nam Hán; Ngô Quyền đem quân từ Ái Châu ra giết Kiều Công Tiễn.'],
    ],
    politics: 'Danh nghĩa vẫn là chức Tiết độ sứ của nhà Đường, nhưng quyền lực thực tế đã nằm trong tay người Việt.',
    economy: 'Khúc Hạo được ghi nhận đã "bình quân thuế ruộng, tha bỏ lực dịch, lập sổ hộ khẩu".',
    culture: 'Giai đoạn chuyển tiếp: tầng lớp hào trưởng bản địa trở thành lực lượng lãnh đạo.',
    war: 'Cuộc đấu tranh với Nam Hán ở phía Bắc kéo dài, dẫn đến trận Bạch Đằng năm 938.'
  };

  D.eras[9] = {
    timeline: [
      ['938', 'Ngô Quyền cắm cọc gỗ trên sông Bạch Đằng, đánh tan quân Nam Hán do Lưu Hoằng Tháo chỉ huy.'],
      ['939', 'Ngô Quyền xưng vương, đóng đô ở Cổ Loa, đặt triều nghi.'],
      ['944', 'Ngô Quyền mất; Dương Tam Kha cướp ngôi.'],
      ['950', 'Ngô Xương Văn lật đổ Dương Tam Kha, giành lại ngôi.'],
      ['965', 'Ngô Xương Văn mất; đất nước rơi vào loạn 12 sứ quân.'],
    ],
    politics: 'Ngô Quyền đặt trăm quan, chế định triều nghi, phẩm phục — bước đầu xây nhà nước độc lập. Sau khi ông mất, quyền lực trung ương suy yếu nhanh.',
    economy: 'Kinh tế nông nghiệp tự chủ, không còn phải cống nạp cho phương Bắc.',
    culture: 'Chiến thắng Bạch Đằng được coi là mốc chấm dứt hơn một nghìn năm Bắc thuộc.',
    war: 'Chiến thuật cọc gỗ dưới lòng sông lợi dụng thủy triều sau này được Lê Hoàn (981) và Trần Hưng Đạo (1288) dùng lại trên cùng con sông.'
  };

  D.eras[10] = {
    timeline: [
      ['966–967', 'Đinh Bộ Lĩnh dẹp loạn 12 sứ quân.'],
      ['968', 'Đinh Bộ Lĩnh lên ngôi Hoàng đế (Đinh Tiên Hoàng), đặt quốc hiệu Đại Cồ Việt, đóng đô ở Hoa Lư.'],
      ['970', 'Đặt niên hiệu Thái Bình — lần đầu dùng niên hiệu riêng.'],
      ['973', 'Nhà Tống phong Đinh Bộ Lĩnh làm Giao Chỉ quận vương: quan hệ bang giao được thiết lập.'],
      ['979', 'Đinh Tiên Hoàng và Đinh Liễn bị Đỗ Thích giết; Đinh Toàn 6 tuổi lên ngôi.'],
    ],
    politics: 'Lần đầu một người Việt xưng Hoàng đế của một nước thống nhất, ngang hàng với hoàng đế phương Bắc. Đặt quân đội theo đạo, quân, lữ, tốt, ngũ.',
    economy: 'Đúc tiền Thái Bình hưng bảo — đồng tiền đầu tiên của nước Việt.',
    culture: 'Kinh đô Hoa Lư dựa vào núi đá vôi hiểm trở. Phật giáo được tôn trọng; nhà sư Ngô Chân Lưu được phong Khuông Việt đại sư.',
    war: 'Pháp luật nghiêm khắc: đặt vạc dầu, chuồng hổ ở sân triều để răn đe.'
  };

  D.eras[11] = {
    timeline: [
      ['980', 'Nhà Tống chuẩn bị xâm lược; Thái hậu Dương Vân Nga trao áo long cổn cho Lê Hoàn.'],
      ['981', 'Lê Hoàn (Lê Đại Hành) đánh tan quân Tống ở Chi Lăng và Bạch Đằng.'],
      ['982', 'Lê Hoàn đánh Chiêm Thành, phá kinh đô Indrapura.'],
      ['~983', 'Đào kênh Đa Cái — công trình thủy lợi lớn đầu tiên được sử ghi lại.'],
      ['987', 'Lê Hoàn tổ chức lễ cày tịch điền ở Đọi Sơn.'],
      ['1005', 'Lê Hoàn mất; các con tranh ngôi, Lê Long Đĩnh lên ngôi.'],
      ['1009', 'Lê Long Đĩnh mất; triều thần tôn Lý Công Uẩn lên ngôi.'],
    ],
    politics: 'Lê Hoàn chia con cái trấn giữ các vùng; củng cố bang giao với nhà Tống sau chiến thắng.',
    economy: 'Lễ cày tịch điền khuyến khích nông nghiệp; đúc tiền Thiên Phúc trấn bảo.',
    culture: 'Các nhà sư Đỗ Pháp Thuận, Khuông Việt tham gia việc ngoại giao. Bài thơ "Quốc tộ" của Pháp Thuận là một trong những thi phẩm sớm nhất còn lại.',
    war: 'Chiến thắng năm 981 ngăn chặn cuộc xâm lược đầu tiên của nhà Tống.'
  };

  D.eras[12] = {
    timeline: [
      ['1009', 'Lý Công Uẩn lên ngôi, lập nhà Lý.'],
      ['1010', 'Ban Chiếu dời đô, chuyển kinh đô từ Hoa Lư ra Đại La, đổi tên là Thăng Long.'],
      ['1042', 'Ban hành bộ luật Hình thư.'],
      ['1049', 'Dựng chùa Một Cột (Diên Hựu).'],
      ['1054', 'Lý Thánh Tông đổi quốc hiệu thành Đại Việt.'],
      ['1070', 'Lập Văn Miếu thờ Khổng Tử.'],
      ['1075', 'Mở khoa thi đầu tiên (Minh kinh bác học).'],
      ['1075–1077', 'Lý Thường Kiệt đánh sang Ung, Khâm, Liêm rồi chặn quân Tống trên sông Như Nguyệt.'],
      ['1076', 'Lập Quốc Tử Giám.'],
      ['1225', 'Lý Chiêu Hoàng nhường ngôi cho Trần Cảnh: nhà Lý kết thúc.'],
    ],
    politics: 'Nhà nước quân chủ tập quyền được củng cố; Thăng Long thành trung tâm chính trị suốt nhiều thế kỷ. Vua Lý thân thiện với Phật giáo và chăm lo việc dân.',
    economy: 'Khuyến khích nông nghiệp, cấm giết trâu bò, đắp đê Cơ Xá (1108) bảo vệ kinh thành.',
    culture: 'Phật giáo cực thịnh (thiền phái Thảo Đường do Lý Thánh Tông lập). Văn Miếu, Quốc Tử Giám mở đầu nền giáo dục khoa cử. Bài thơ "Nam quốc sơn hà" gắn với trận Như Nguyệt.',
    war: 'Chiến tranh với Tống 1075–1077 kết thúc bằng hòa ước; Đại Việt cũng nhiều lần đánh Chiêm Thành, năm 1069 Chiêm dâng ba châu Địa Lý, Ma Linh, Bố Chính.'
  };

  D.eras[13] = {
    timeline: [
      ['1226', 'Trần Thái Tông lên ngôi; Trần Thủ Độ nắm thực quyền.'],
      ['1247', 'Đặt lệ lấy Tam khôi (Trạng nguyên, Bảng nhãn, Thám hoa).'],
      ['1258', 'Kháng chiến chống Mông Cổ lần thứ nhất; thắng ở Đông Bộ Đầu.'],
      ['1285', 'Kháng chiến chống Nguyên lần thứ hai; thắng ở Hàm Tử, Chương Dương, Tây Kết, Vạn Kiếp.'],
      ['1288', 'Trần Hưng Đạo đánh tan thủy quân Nguyên trên sông Bạch Đằng.'],
      ['1299', 'Trần Nhân Tông xuất gia, lập Thiền phái Trúc Lâm Yên Tử.'],
      ['1306', 'Công chúa Huyền Trân lấy vua Chiêm, Đại Việt nhận châu Ô, châu Lý.'],
      ['1400', 'Hồ Quý Ly phế vua Trần, lập nhà Hồ.'],
    ],
    politics: 'Chế độ Thái thượng hoàng: vua cha nhường ngôi sớm để cùng con trị nước. Quý tộc họ Trần nắm các chức vụ chủ chốt.',
    economy: 'Thái ấp, điền trang của quý tộc phát triển; đặt chức Hà đê sứ trông coi đê điều.',
    culture: 'Chữ Nôm được dùng trong văn chương (Hàn Thuyên). Bộ "Đại Việt sử ký" của Lê Văn Hưu (1272) — bộ quốc sử đầu tiên. Hịch tướng sĩ của Trần Hưng Đạo.',
    war: 'Ba lần đánh thắng quân Mông – Nguyên, đội quân mạnh nhất thế giới lúc bấy giờ, với chiến lược "vườn không nhà trống".'
  };

  D.eras[14] = {
    timeline: [
      ['1397', 'Hồ Quý Ly cho xây thành Tây Đô (thành nhà Hồ) ở Thanh Hóa.'],
      ['1400', 'Hồ Quý Ly lên ngôi, đặt quốc hiệu Đại Ngu.'],
      ['1401', 'Hồ Quý Ly nhường ngôi cho con là Hồ Hán Thương, làm Thái thượng hoàng.'],
      ['1396–1405', 'Cải cách: phát hành tiền giấy, hạn điền, hạn nô, cải cách giáo dục.'],
      ['1406', 'Nhà Minh lấy cớ "phù Trần diệt Hồ" đem quân xâm lược.'],
      ['1407', 'Cha con Hồ Quý Ly bị bắt; nhà Hồ sụp đổ.'],
    ],
    politics: 'Một trong những cuộc cải cách toàn diện nhất thời trung đại, nhưng không được lòng quý tộc cũ và dân chúng.',
    economy: 'Tiền giấy "Thông bảo hội sao" thay tiền đồng; chính sách hạn điền giới hạn ruộng tư của quý tộc.',
    culture: 'Đề cao chữ Nôm; thành Tây Đô được UNESCO công nhận Di sản Thế giới năm 2011.',
    war: 'Nhà Hồ xây phòng tuyến Đa Bang nhưng thất bại. Câu nói của Hồ Nguyên Trừng: "Thần không sợ đánh, chỉ sợ lòng dân không theo".'
  };

  D.eras[15] = {
    timeline: [
      ['1407', 'Nhà Minh đặt quận Giao Chỉ, trị sở ở Đông Quan (Thăng Long).'],
      ['1407–1414', 'Khởi nghĩa của nhà Hậu Trần (Giản Định Đế, Trùng Quang Đế).'],
      ['1416', 'Hội thề Lũng Nhai của Lê Lợi và các tướng.'],
      ['1418', 'Lê Lợi dựng cờ khởi nghĩa ở Lam Sơn, xưng Bình Định Vương.'],
      ['1419', 'Lê Lai liều mình cứu chúa.'],
      ['1424', 'Nghĩa quân chuyển vào Nghệ An theo kế của Nguyễn Chích.'],
      ['1426', 'Chiến thắng Tốt Động – Chúc Động.'],
      ['1427', 'Chiến thắng Chi Lăng – Xương Giang; quân Minh rút về nước.'],
    ],
    politics: 'Nhà Minh cai trị trực tiếp, đặt quan lại và cố gắng đồng hóa.',
    economy: 'Bóc lột nặng nề: bắt dân khai mỏ, mò ngọc trai, nộp nhiều loại thuế.',
    culture: 'Nhà Minh tịch thu, đốt phá nhiều sách vở và văn bia của Đại Việt — một tổn thất lớn cho di sản văn hóa.',
    war: 'Khởi nghĩa Lam Sơn kéo dài 10 năm (1418–1427), với chiến lược "đánh vào lòng người" của Nguyễn Trãi.'
  };

  D.eras[16] = {
    timeline: [
      ['1428', 'Lê Lợi lên ngôi (Lê Thái Tổ); Nguyễn Trãi viết Bình Ngô đại cáo.'],
      ['1442', 'Vụ án Lệ Chi Viên; Nguyễn Trãi bị tru di tam tộc (được minh oan năm 1464).'],
      ['1460–1497', 'Lê Thánh Tông trị vì — thời kỳ thịnh trị nhất của nhà Lê.'],
      ['1471', 'Lê Thánh Tông đánh Chiêm Thành, lập thừa tuyên Quảng Nam.'],
      ['1483', 'Hoàn thiện bộ luật Hồng Đức (Quốc triều hình luật).'],
      ['1484', 'Bắt đầu dựng bia tiến sĩ ở Văn Miếu.'],
      ['1479', 'Ngô Sĩ Liên soạn xong Đại Việt sử ký toàn thư.'],
      ['1527', 'Mạc Đăng Dung cướp ngôi nhà Lê.'],
    ],
    politics: 'Nhà nước quân chủ quan liêu đạt đỉnh cao, chia nước thành 13 đạo thừa tuyên, đề cao Nho giáo.',
    economy: 'Chính sách quân điền chia ruộng công; khai hoang, lập đồn điền.',
    culture: 'Nho giáo trở thành hệ tư tưởng chính; khoa cử thịnh vượng. Hội Tao Đàn do Lê Thánh Tông lập. Luật Hồng Đức có nhiều điều bảo vệ quyền phụ nữ.',
    war: 'Đối ngoại mở rộng về phía nam (1471) và giữ quan hệ triều cống ổn định với nhà Minh.'
  };

  D.eras[17] = {
    timeline: [
      ['1527', 'Mạc Đăng Dung lập nhà Mạc.'],
      ['1533', 'Nguyễn Kim tôn Lê Trang Tông ở Thanh Hóa: bắt đầu Nam – Bắc triều.'],
      ['1540', 'Nhà Mạc dâng đất, xin hàng nhà Minh để tránh chiến tranh.'],
      ['1545', 'Nguyễn Kim mất; quyền về tay con rể Trịnh Kiểm.'],
      ['1558', 'Nguyễn Hoàng xin vào trấn thủ Thuận Hóa.'],
      ['1592', 'Trịnh Tùng chiếm Thăng Long; nhà Mạc rút lên Cao Bằng.'],
    ],
    politics: 'Hai triều đình song song: nhà Mạc ở Thăng Long (Bắc triều), nhà Lê do họ Nguyễn rồi họ Trịnh phò tá ở Thanh Hóa (Nam triều).',
    economy: 'Nhà Mạc khuyến khích buôn bán, thủ công; gốm Chu Đậu, Bát Tràng phát triển và xuất khẩu.',
    culture: 'Nhà Mạc vẫn tổ chức thi cử đều đặn. Nguyễn Bỉnh Khiêm là nhà nho nổi tiếng thời kỳ này.',
    war: 'Chiến tranh Lê – Mạc kéo dài hơn 50 năm, chủ yếu ở Thanh Hóa, Ninh Bình.'
  };

  D.eras[18] = {
    timeline: [
      ['1599', 'Trịnh Tùng xưng vương: mở đầu thời vua Lê – chúa Trịnh ở Đàng Ngoài.'],
      ['1627–1672', 'Chiến tranh Trịnh – Nguyễn, bảy lần giao tranh lớn; lấy sông Gianh làm ranh giới.'],
      ['1651', 'Alexandre de Rhodes xuất bản từ điển Việt – Bồ – La ở Roma.'],
      ['1698', 'Nguyễn Hữu Cảnh lập phủ Gia Định.'],
      ['1757', 'Chúa Nguyễn hoàn tất việc làm chủ vùng đồng bằng sông Cửu Long.'],
      ['1771', 'Anh em Tây Sơn khởi nghĩa ở Bình Định.'],
      ['1777', 'Tây Sơn giết chúa Nguyễn Phúc Thuần; chỉ Nguyễn Ánh thoát.'],
    ],
    politics: 'Đất nước chia đôi: Đàng Ngoài (vua Lê – chúa Trịnh) và Đàng Trong (chúa Nguyễn). Vua Lê chỉ còn danh nghĩa.',
    economy: 'Ngoại thương phát triển: Phố Hiến ở Đàng Ngoài, Hội An ở Đàng Trong là thương cảng quốc tế.',
    culture: 'Chữ Quốc ngữ được các giáo sĩ phương Tây hình thành. Lê Quý Đôn là nhà bác học tiêu biểu; văn học chữ Nôm phát triển (Chinh phụ ngâm).',
    war: 'Chúa Nguyễn mở rộng lãnh thổ về phía Nam đến Hà Tiên và mũi Cà Mau.'
  };

  D.eras[19] = {
    timeline: [
      ['1785', 'Nguyễn Huệ đánh tan quân Xiêm ở Rạch Gầm – Xoài Mút.'],
      ['1786', 'Nguyễn Huệ ra Bắc lấy danh nghĩa "phù Lê diệt Trịnh"; chúa Trịnh sụp đổ.'],
      ['1788', 'Quân Thanh vào Thăng Long; Nguyễn Huệ lên ngôi Hoàng đế (Quang Trung).'],
      ['1789', 'Tết Kỷ Dậu: Quang Trung đánh tan quân Thanh ở Ngọc Hồi – Đống Đa.'],
      ['1792', 'Quang Trung mất đột ngột; con là Quang Toản lên ngôi.'],
      ['1802', 'Nguyễn Ánh chiếm Phú Xuân rồi Thăng Long; nhà Tây Sơn sụp đổ.'],
    ],
    politics: 'Nhà Tây Sơn xóa bỏ ranh giới Đàng Trong – Đàng Ngoài, chấm dứt chế độ vua Lê – chúa Trịnh và chúa Nguyễn.',
    economy: 'Quang Trung ban chiếu khuyến nông, mở cửa buôn bán với nhà Thanh.',
    culture: 'Chiếu lập học; dùng chữ Nôm trong văn bản hành chính và thi cử. Lập Sùng chính viện để dịch sách chữ Hán ra chữ Nôm.',
    war: 'Nguyễn Huệ chưa thua trận nào trong các chiến dịch lớn; cuộc hành quân thần tốc ra Bắc năm 1789 là một chiến dịch nổi tiếng.'
  };

  D.eras[20] = {
    timeline: [
      ['1802', 'Nguyễn Ánh lên ngôi (Gia Long), đóng đô ở Phú Xuân (Huế).'],
      ['1804', 'Đặt quốc hiệu Việt Nam.'],
      ['1815', 'Ban hành Hoàng Việt luật lệ (luật Gia Long).'],
      ['1838', 'Minh Mạng đổi quốc hiệu thành Đại Nam.'],
      ['1831–1832', 'Cải cách hành chính của Minh Mạng: chia cả nước thành 31 tỉnh.'],
      ['1858', 'Liên quân Pháp – Tây Ban Nha nổ súng tấn công Đà Nẵng.'],
      ['1862', 'Hòa ước Nhâm Tuất: nhượng ba tỉnh miền Đông Nam Kỳ cho Pháp.'],
      ['1867', 'Pháp chiếm nốt ba tỉnh miền Tây Nam Kỳ.'],
      ['1883', 'Hòa ước Harmand (Quý Mùi): Việt Nam chịu sự bảo hộ của Pháp.'],
    ],
    politics: 'Nhà nước quân chủ tập quyền cao độ; kinh đô Huế với hệ thống cung điện, lăng tẩm.',
    economy: 'Chính sách "bế quan tỏa cảng" hạn chế giao thương với phương Tây; khai hoang ở Nam Kỳ (Nguyễn Công Trứ lập huyện Kim Sơn, Tiền Hải).',
    culture: 'Nguyễn Du viết Truyện Kiều. Bộ Đại Nam thực lục, Đại Nam nhất thống chí được biên soạn. Quần thể di tích Cố đô Huế được UNESCO công nhận năm 1993.',
    war: 'Từ 1858, Pháp từng bước xâm chiếm; triều đình chia rẽ giữa chủ chiến và chủ hòa. Nhiều cuộc kháng chiến tự phát ở Nam Kỳ (Trương Định, Nguyễn Trung Trực).'
  };

  D.eras[21] = {
    timeline: [
      ['1884', 'Hòa ước Patenôtre (Giáp Thân): Pháp hoàn tất chế độ bảo hộ.'],
      ['1885', 'Vua Hàm Nghi và Tôn Thất Thuyết ra chiếu Cần Vương.'],
      ['1887', 'Pháp lập Liên bang Đông Dương.'],
      ['1905–1909', 'Phong trào Đông Du của Phan Bội Châu.'],
      ['1907', 'Đông Kinh Nghĩa Thục mở ở Hà Nội.'],
      ['1930', 'Khởi nghĩa Yên Bái của Việt Nam Quốc dân đảng; Đảng Cộng sản Việt Nam ra đời; phong trào Xô viết Nghệ Tĩnh.'],
      ['1940', 'Nhật Bản vào Đông Dương.'],
      ['1941', 'Mặt trận Việt Minh thành lập.'],
    ],
    politics: 'Việt Nam bị chia làm ba kỳ: Nam Kỳ thuộc địa, Trung Kỳ và Bắc Kỳ bảo hộ; triều Nguyễn chỉ còn hình thức.',
    economy: 'Khai thác thuộc địa: đồn điền cao su, mỏ than, đường sắt xuyên Đông Dương (hoàn thành 1936); thuế nặng, độc quyền muối, rượu, thuốc phiện.',
    culture: 'Chữ Quốc ngữ phổ biến rộng rãi; báo chí, Thơ mới, Tự lực văn đoàn phát triển; trường Viễn Đông Bác cổ, Đại học Đông Dương thành lập.',
    war: 'Từ phong trào Cần Vương (Phan Đình Phùng, Hoàng Hoa Thám) đến các phong trào dân tộc mới đầu thế kỷ XX.'
  };

  D.eras[22] = {
    timeline: [
      ['9/3/1945', 'Nhật đảo chính Pháp trên toàn Đông Dương.'],
      ['4/1945', 'Chính phủ Trần Trọng Kim thành lập dưới sự bảo trợ của Nhật.'],
      ['1944–1945', 'Nạn đói Ất Dậu ở miền Bắc, hàng trăm nghìn đến khoảng hai triệu người chết.'],
      ['19/8/1945', 'Việt Minh giành chính quyền ở Hà Nội.'],
      ['30/8/1945', 'Vua Bảo Đại thoái vị.'],
      ['2/9/1945', 'Hồ Chí Minh đọc Tuyên ngôn độc lập, khai sinh Việt Nam Dân chủ Cộng hòa.'],
    ],
    politics: 'Chế độ quân chủ chấm dứt sau gần 1.000 năm; nước Việt Nam Dân chủ Cộng hòa ra đời.',
    economy: 'Nạn đói năm Ất Dậu là bối cảnh quan trọng của cuộc tổng khởi nghĩa.',
    culture: 'Chính phủ mới phát động phong trào Bình dân học vụ xóa nạn mù chữ.',
    war: 'Theo thỏa thuận Đồng minh, quân Trung Hoa Dân quốc vào phía bắc vĩ tuyến 16, quân Anh vào phía nam để giải giáp quân Nhật; Pháp quay lại Nam Bộ ngay sau đó.'
  };

  D.eras[23] = {
    timeline: [
      ['6/3/1946', 'Hiệp định sơ bộ Việt – Pháp.'],
      ['19/12/1946', 'Toàn quốc kháng chiến chống Pháp bùng nổ.'],
      ['1947', 'Chiến dịch Việt Bắc thu – đông.'],
      ['1949', 'Pháp lập Quốc gia Việt Nam do Bảo Đại đứng đầu.'],
      ['1950', 'Chiến dịch Biên giới; Trung Quốc và Liên Xô công nhận Việt Nam Dân chủ Cộng hòa.'],
      ['1953', 'Bắt đầu cải cách ruộng đất ở vùng do Việt Minh kiểm soát; Pháp đưa ra kế hoạch Navarre.'],
    ],
    politics: 'Hai chính quyền song song: Việt Nam Dân chủ Cộng hòa (kháng chiến ở Việt Bắc) và Quốc gia Việt Nam (do Pháp hậu thuẫn).',
    economy: 'Kinh tế kháng chiến tự cấp tự túc ở vùng tự do; các đô thị do Pháp kiểm soát.',
    culture: 'Văn nghệ kháng chiến phát triển; chiến tranh trở thành một phần của Chiến tranh Lạnh.',
    war: 'Chiến tranh Đông Dương lần thứ nhất, với Mỹ ngày càng viện trợ nhiều cho Pháp.'
  };

  D.eras[24] = {
    timeline: [
      ['13/3–7/5/1954', 'Chiến dịch Điện Biên Phủ: quân đội Việt Nam Dân chủ Cộng hòa do Võ Nguyên Giáp chỉ huy giành thắng lợi.'],
      ['21/7/1954', 'Hiệp định Geneva: tạm chia Việt Nam tại vĩ tuyến 17, dự kiến tổng tuyển cử năm 1956.'],
      ['1954', 'Khoảng gần một triệu người di cư từ Bắc vào Nam.'],
    ],
    politics: 'Việt Nam tạm thời chia hai miền với hai chính quyền khác nhau.',
    economy: 'Cuộc di cư lớn và việc chuyển giao vùng tập kết làm thay đổi dân cư cả hai miền.',
    culture: 'Điện Biên Phủ là chiến thắng có tiếng vang lớn đối với phong trào giải phóng dân tộc trên thế giới.',
    war: 'Kết thúc gần 9 năm chiến tranh với Pháp.'
  };

  D.eras[25] = {
    timeline: [
      ['1955', 'Ngô Đình Diệm phế truất Bảo Đại, lập Việt Nam Cộng hòa.'],
      ['1956', 'Cuộc tổng tuyển cử theo Hiệp định Geneva không được tổ chức.'],
      ['1960', 'Mặt trận Dân tộc Giải phóng miền Nam Việt Nam thành lập.'],
      ['1963', 'Khủng hoảng Phật giáo; đảo chính lật đổ Ngô Đình Diệm.'],
      ['1964–1965', 'Sự kiện Vịnh Bắc Bộ; Mỹ đưa quân chiến đấu vào miền Nam và ném bom miền Bắc.'],
      ['1968', 'Tổng tiến công Tết Mậu Thân.'],
      ['1969', 'Chủ tịch Hồ Chí Minh qua đời.'],
      ['1972', 'Mỹ ném bom Hà Nội, Hải Phòng bằng B-52 cuối năm.'],
      ['27/1/1973', 'Hiệp định Paris; quân Mỹ rút khỏi Việt Nam.'],
    ],
    politics: 'Miền Bắc theo mô hình xã hội chủ nghĩa; miền Nam là Việt Nam Cộng hòa với nhiều biến động chính trị.',
    economy: 'Miền Bắc tập thể hóa nông nghiệp; miền Nam kinh tế thị trường phụ thuộc nhiều vào viện trợ Mỹ.',
    culture: 'Đường mòn Hồ Chí Minh; văn học, âm nhạc ở cả hai miền phản ánh chiến tranh.',
    war: 'Chiến tranh Việt Nam (Chiến tranh Đông Dương lần thứ hai) — một trong những cuộc chiến lớn nhất thời Chiến tranh Lạnh.'
  };

  D.eras[26] = {
    timeline: [
      ['3/1975', 'Chiến dịch Tây Nguyên; Buôn Ma Thuột thất thủ.'],
      ['3–4/1975', 'Huế, Đà Nẵng lần lượt được tiếp quản.'],
      ['21/4/1975', 'Tổng thống Nguyễn Văn Thiệu từ chức.'],
      ['30/4/1975', 'Quân Giải phóng vào Sài Gòn; Tổng thống Dương Văn Minh tuyên bố đầu hàng.'],
    ],
    politics: 'Chính quyền Việt Nam Cộng hòa chấm dứt; miền Nam do Chính phủ Cách mạng lâm thời quản lý.',
    economy: 'Bắt đầu quá trình cải tạo kinh tế miền Nam theo mô hình miền Bắc.',
    culture: 'Một làn sóng lớn người Việt rời đất nước, hình thành cộng đồng người Việt ở nước ngoài.',
    war: 'Chiến dịch Tây Nguyên (3/1975) mở màn; Buôn Ma Thuột thất thủ, Huế và Đà Nẵng được giải phóng cuối tháng 3, rồi Chiến dịch Hồ Chí Minh (26–30/4/1975) kết thúc chiến tranh Việt Nam.'
  };

  D.eras[27] = {
    timeline: [
      ['2/7/1976', 'Thống nhất đất nước, lấy tên Cộng hòa Xã hội chủ nghĩa Việt Nam.'],
      ['1977', 'Việt Nam gia nhập Liên Hợp Quốc.'],
      ['1978–1979', 'Chiến tranh biên giới Tây Nam; quân Việt Nam tiến vào Phnôm Pênh (1/1979).'],
      ['2–3/1979', 'Chiến tranh biên giới phía Bắc với Trung Quốc.'],
      ['1981', 'Chỉ thị 100 (khoán sản phẩm trong nông nghiệp).'],
      ['1985', 'Cuộc đổi tiền và cải cách giá – lương – tiền thất bại, lạm phát rất cao.'],
    ],
    politics: 'Nhà nước thống nhất theo mô hình kinh tế kế hoạch hóa tập trung.',
    economy: 'Kinh tế bao cấp gặp khủng hoảng; tem phiếu, thiếu lương thực; bị cấm vận.',
    culture: 'Thời kỳ "bao cấp" để lại nhiều ký ức xã hội đặc trưng.',
    war: 'Hai cuộc chiến biên giới và sự hiện diện quân sự ở Campuchia đến năm 1989.'
  };

  D.eras[28] = {
    timeline: [
      ['12/1986', 'Đại hội VI khởi xướng công cuộc Đổi Mới.'],
      ['1988', 'Khoán 10 trong nông nghiệp; Luật Đầu tư nước ngoài có hiệu lực.'],
      ['1989', 'Việt Nam trở thành nước xuất khẩu gạo lớn; rút quân khỏi Campuchia.'],
      ['1991', 'Bình thường hóa quan hệ với Trung Quốc.'],
      ['1994', 'Mỹ dỡ bỏ cấm vận.'],
      ['1995', 'Bình thường hóa quan hệ với Mỹ; gia nhập ASEAN.'],
    ],
    politics: 'Giữ vai trò lãnh đạo của Đảng Cộng sản, đồng thời chuyển sang "kinh tế thị trường định hướng xã hội chủ nghĩa".',
    economy: 'Xóa bỏ bao cấp, công nhận kinh tế tư nhân, mở cửa thu hút đầu tư; lạm phát giảm, tăng trưởng nhanh.',
    culture: 'Văn học, nghệ thuật cởi mở hơn ("đổi mới tư duy").',
    war: 'Chuyển từ đối đầu sang hội nhập: bình thường hóa quan hệ với các nước láng giềng và phương Tây.'
  };

  D.eras[29] = {
    timeline: [
      ['2000', 'Hiệp định Thương mại Việt – Mỹ ký kết; Sở Giao dịch Chứng khoán TP.HCM đi vào hoạt động.'],
      ['2006', 'Việt Nam tổ chức Hội nghị cấp cao APEC.'],
      ['2007', 'Việt Nam trở thành thành viên thứ 150 của WTO.'],
      ['2008–2009', 'Việt Nam là ủy viên không thường trực Hội đồng Bảo an Liên Hợp Quốc.'],
      ['2010', 'Đại lễ 1000 năm Thăng Long – Hà Nội.'],
      ['2015', 'Cộng đồng ASEAN chính thức hình thành.'],
    ],
    politics: 'Hội nhập quốc tế sâu rộng: mở rộng quan hệ đối tác chiến lược với nhiều nước.',
    economy: 'Tăng trưởng nhanh, thu hút vốn FDI lớn; Việt Nam trở thành nước có thu nhập trung bình (thấp) từ khoảng năm 2010.',
    culture: 'Internet và điện thoại di động phổ biến; nhiều di sản được UNESCO công nhận (Hoàng thành Thăng Long 2010, Thành nhà Hồ 2011, Tràng An 2014).',
    war: 'Tranh chấp chủ quyền trên Biển Đông nổi lên, ví dụ sự kiện giàn khoan Hải Dương 981 năm 2014.'
  };

  D.eras[30] = {
    timeline: [
      ['2016', 'Mỹ dỡ bỏ hoàn toàn lệnh cấm vận vũ khí với Việt Nam.'],
      ['2019', 'Hiệp định CPTPP có hiệu lực với Việt Nam; Hội nghị thượng đỉnh Mỹ – Triều tổ chức ở Hà Nội.'],
      ['2020', 'Hiệp định EVFTA với Liên minh châu Âu có hiệu lực; Việt Nam là Chủ tịch ASEAN.'],
      ['2020–2021', 'Đại dịch COVID-19.'],
      ['2023', 'Nâng cấp quan hệ lên Đối tác chiến lược toàn diện với Mỹ.'],
      ['2025', 'Sắp xếp lại đơn vị hành chính: hợp nhất các tỉnh, còn 34 tỉnh, thành phố.'],
    ],
    politics: 'Tiếp tục hội nhập; nâng cấp quan hệ đối tác với nhiều nước lớn.',
    economy: 'Trở thành trung tâm sản xuất điện tử lớn; xuất khẩu tăng mạnh nhờ các hiệp định thương mại tự do thế hệ mới.',
    culture: 'Kinh tế số, mạng xã hội và du lịch phát triển mạnh.',
    war: 'Hợp tác quốc tế trong khuôn khổ ASEAN và Liên Hợp Quốc, như tham gia lực lượng gìn giữ hòa bình.'
  };

  /* ======================= NHÂN VẬT CÓ SẴN ======================= */

  D.people['an-duong-vuong'] = {
    story: 'Theo truyền thống, Thục Phán là thủ lĩnh người Âu Việt, hợp nhất với người Lạc Việt lập nước Âu Lạc. Ông cho xây thành Cổ Loa, một công trình phòng thủ đồ sộ còn dấu tích đến nay. Truyền thuyết kể ông được Rùa Vàng cho móng làm lẫy nỏ thần; khi Trọng Thủy, con Triệu Đà, đánh tráo lẫy nỏ, Âu Lạc mất nước.',
    events: [['257 TCN', 'Lập nước Âu Lạc (theo truyền thống)'], ['TK III TCN', 'Xây thành Cổ Loa'], ['208 TCN', 'Mất nước vào tay Triệu Đà (theo truyền thống)']]
  };
  D.people['trung-trac'] = {
    story: 'Trưng Trắc là con gái Lạc tướng huyện Mê Linh, vợ Thi Sách. Năm 40, bà cùng em là Trưng Nhị khởi nghĩa, đánh đuổi Thái thú Tô Định. Khởi nghĩa lan khắp Giao Chỉ, Cửu Chân, Nhật Nam, Hợp Phố; bà xưng vương ở Mê Linh. Năm 43, trước đội quân của Mã Viện, Hai Bà thất trận và hy sinh.',
    events: [['40', 'Khởi nghĩa ở Mê Linh, xưng vương'], ['42', 'Chống quân Mã Viện'], ['43', 'Thất trận ở Lãng Bạc, Cấm Khê và hy sinh']]
  };
  D.people['lady-trieu'] = {
    story: 'Triệu Thị Trinh (Bà Triệu) khởi nghĩa năm 248 ở vùng núi Nưa, Cửu Chân (Thanh Hóa) chống nhà Ngô. Câu nói nổi tiếng được lưu truyền: "Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá kình ở biển Đông…". Cuộc khởi nghĩa bị dập tắt sau vài tháng.',
    events: [['248', 'Khởi nghĩa chống nhà Ngô ở Cửu Chân'], ['248', 'Hy sinh ở núi Tùng (Hậu Lộc, Thanh Hóa)']]
  };
  D.people['ly-bi'] = {
    story: 'Lý Bí (Lý Bôn) xuất thân hào trưởng ở Thái Bình (nay thuộc Hà Nội), từng làm quan cho nhà Lương rồi bỏ về quê. Năm 542, ông khởi nghĩa, đuổi Thứ sử Tiêu Tư; năm 544 xưng Lý Nam Đế, đặt quốc hiệu Vạn Xuân — người Việt đầu tiên xưng đế. Năm 545, nhà Lương sai Trần Bá Tiên sang đánh; ông lui về động Khuất Lão và mất năm 548.',
    events: [['542', 'Khởi nghĩa chống nhà Lương'], ['544', 'Xưng Lý Nam Đế, lập nước Vạn Xuân'], ['548', 'Mất ở động Khuất Lão']]
  };
  D.people['ngo-quyen'] = {
    story: 'Ngô Quyền quê ở Đường Lâm (Sơn Tây, Hà Nội), là bộ tướng và con rể Dương Đình Nghệ. Khi Kiều Công Tiễn giết Dương Đình Nghệ và cầu viện Nam Hán, ông kéo quân ra giết Tiễn, rồi bố trí trận địa cọc gỗ đầu bịt sắt trên sông Bạch Đằng, nhử thuyền giặc vào lúc triều lên và đánh khi triều rút. Thắng lợi năm 938 chấm dứt thời Bắc thuộc. Năm 939, ông xưng vương, đóng đô ở Cổ Loa.',
    events: [['938', 'Chiến thắng Bạch Đằng'], ['939', 'Xưng vương, đóng đô ở Cổ Loa'], ['944', 'Mất']]
  };
  D.people['dinh-bo-linh'] = {
    story: 'Đinh Bộ Lĩnh quê ở Hoa Lư (Ninh Bình); truyền thuyết kể thuở nhỏ ông lấy bông lau làm cờ tập trận. Ông dẹp yên 12 sứ quân, năm 968 lên ngôi hoàng đế, đặt quốc hiệu Đại Cồ Việt, đóng đô ở Hoa Lư. Ông cho đúc tiền Thái Bình hưng bảo và đặt quan hệ bang giao với nhà Tống. Năm 979, ông bị ám hại.',
    events: [['966–967', 'Dẹp loạn 12 sứ quân'], ['968', 'Lên ngôi, lập nước Đại Cồ Việt'], ['970', 'Đặt niên hiệu Thái Bình'], ['979', 'Bị ám sát']]
  };
  D.people['le-hoan'] = {
    story: 'Lê Hoàn là Thập đạo tướng quân nhà Đinh. Năm 980, khi nhà Tống chuẩn bị xâm lược, Thái hậu Dương Vân Nga trao áo long cổn cho ông. Năm 981, ông đánh tan quân Tống ở Chi Lăng và Bạch Đằng, sau đó đánh Chiêm Thành (982). Ông là vị vua đầu tiên làm lễ cày tịch điền.',
    events: [['980', 'Lên ngôi, lập nhà Tiền Lê'], ['981', 'Đánh thắng quân Tống'], ['982', 'Đánh Chiêm Thành'], ['987', 'Cày tịch điền ở Đọi Sơn'], ['1005', 'Mất']]
  };
  D.people['ly-cong-uan'] = {
    story: 'Lý Công Uẩn được nuôi dạy ở chùa, làm quan dưới triều Tiền Lê. Năm 1009, ông được triều thần tôn lên ngôi. Năm 1010, ông ban Chiếu dời đô, chuyển kinh đô từ Hoa Lư ra thành Đại La, đặt tên là Thăng Long — kinh đô của các triều đại suốt tám thế kỷ sau đó.',
    events: [['1009', 'Lên ngôi, lập nhà Lý'], ['1010', 'Chiếu dời đô, lập kinh đô Thăng Long'], ['1028', 'Mất']]
  };
  D.people['ly-thuong-kiet'] = {
    story: 'Lý Thường Kiệt là danh tướng phục vụ ba đời vua Lý. Năm 1075, ông chủ động tiến công các căn cứ Ung Châu, Khâm Châu, Liêm Châu để phá thế chuẩn bị xâm lược của nhà Tống. Năm 1077, ông lập phòng tuyến sông Như Nguyệt chặn quân Tống. Bài thơ "Nam quốc sơn hà" thường được gắn với trận này.',
    events: [['1069', 'Đánh Chiêm Thành'], ['1075–1076', 'Đánh sang Ung, Khâm, Liêm'], ['1077', 'Phòng tuyến sông Như Nguyệt'], ['1105', 'Mất']]
  };
  D.people['tran-quoc-tuan'] = {
    story: 'Trần Quốc Tuấn (Hưng Đạo Đại Vương) là Quốc công Tiết chế chỉ huy quân đội Đại Việt trong hai cuộc kháng chiến chống Nguyên (1285, 1288). Ông viết Hịch tướng sĩ và các binh thư Binh thư yếu lược, Vạn Kiếp tông bí truyền thư. Năm 1288, ông bố trí bãi cọc trên sông Bạch Đằng, tiêu diệt thủy quân Nguyên.',
    events: [['1285', 'Chỉ huy kháng chiến chống Nguyên lần hai'], ['1288', 'Chiến thắng Bạch Đằng'], ['1300', 'Mất']]
  };
  D.people['tran-nhan-tong'] = {
    story: 'Trần Nhân Tông lãnh đạo đất nước trong hai cuộc kháng chiến chống Nguyên. Ông triệu tập Hội nghị Diên Hồng (1284) hỏi ý kiến các bô lão. Năm 1299, ông xuất gia ở Yên Tử, lập Thiền phái Trúc Lâm — dòng thiền mang bản sắc Việt.',
    events: [['1278', 'Lên ngôi'], ['1284', 'Hội nghị Diên Hồng'], ['1293', 'Nhường ngôi, làm Thái thượng hoàng'], ['1299', 'Xuất gia, lập Thiền phái Trúc Lâm'], ['1308', 'Mất']]
  };
  D.people['ho-quy-ly'] = {
    story: 'Hồ Quý Ly là quyền thần cuối thời Trần, phế vua Trần năm 1400 và lập nhà Hồ. Ông thực hiện nhiều cải cách táo bạo: tiền giấy, hạn điền, hạn nô, đề cao chữ Nôm, xây thành Tây Đô. Cải cách chưa kịp đi vào cuộc sống thì nhà Minh xâm lược; năm 1407 ông bị bắt đưa sang Trung Quốc.',
    events: [['1397', 'Xây thành Tây Đô'], ['1400', 'Lập nhà Hồ, quốc hiệu Đại Ngu'], ['1407', 'Bị quân Minh bắt']]
  };
  D.people['le-loi'] = {
    story: 'Lê Lợi là hào trưởng ở Lam Sơn (Thanh Hóa). Năm 1418, ông dựng cờ khởi nghĩa chống nhà Minh, xưng Bình Định Vương. Sau 10 năm, nghĩa quân giành thắng lợi ở Tốt Động – Chúc Động (1426), Chi Lăng – Xương Giang (1427). Năm 1428, ông lên ngôi, lập nhà Hậu Lê. Truyền thuyết Hồ Gươm kể ông trả lại gươm thần cho Rùa Vàng.',
    events: [['1416', 'Hội thề Lũng Nhai'], ['1418', 'Khởi nghĩa Lam Sơn'], ['1427', 'Chiến thắng Chi Lăng – Xương Giang'], ['1428', 'Lên ngôi Hoàng đế'], ['1433', 'Mất']]
  };
  D.people['nguyen-trai'] = {
    story: 'Nguyễn Trãi đỗ Thái học sinh năm 1400 dưới triều Hồ. Ông tham gia khởi nghĩa Lam Sơn, dâng Bình Ngô sách, soạn thư dụ hàng các thành của quân Minh, và viết Bình Ngô đại cáo (1428). Ông còn để lại Quốc âm thi tập — tập thơ Nôm sớm nhất còn lại — và Dư địa chí. Năm 1442, ông bị khép tội trong vụ án Lệ Chi Viên; đến năm 1464 được Lê Thánh Tông minh oan.',
    events: [['1400', 'Đỗ Thái học sinh'], ['1428', 'Viết Bình Ngô đại cáo'], ['1442', 'Vụ án Lệ Chi Viên'], ['1464', 'Được minh oan']]
  };
  D.people['le-thanh-tong'] = {
    story: 'Lê Thánh Tông trị vì 38 năm (1460–1497), thời kỳ thịnh trị nhất của nhà Hậu Lê. Ông cải cách hành chính, ban hành bộ luật Hồng Đức, cho vẽ bản đồ Hồng Đức, dựng bia tiến sĩ ở Văn Miếu, lập hội Tao Đàn và mở rộng lãnh thổ vào phía nam năm 1471.',
    events: [['1460', 'Lên ngôi'], ['1471', 'Đánh Chiêm Thành, lập thừa tuyên Quảng Nam'], ['1483', 'Hoàn thiện luật Hồng Đức'], ['1484', 'Dựng bia tiến sĩ'], ['1497', 'Mất']]
  };
  D.people['nguyen-hue'] = {
    story: 'Nguyễn Huệ là em Nguyễn Nhạc, một trong ba anh em khởi nghĩa Tây Sơn. Ông đánh tan quân Xiêm ở Rạch Gầm – Xoài Mút (1785), lật đổ chúa Trịnh (1786). Năm 1788, ông lên ngôi lấy niên hiệu Quang Trung, rồi hành quân thần tốc ra Bắc, đánh tan quân Thanh trong dịp Tết Kỷ Dậu 1789. Ông thực hiện nhiều cải cách nhưng mất sớm năm 1792.',
    events: [['1771', 'Cùng anh em khởi nghĩa ở Tây Sơn'], ['1785', 'Rạch Gầm – Xoài Mút'], ['1786', 'Lật đổ chúa Trịnh'], ['1788', 'Lên ngôi Hoàng đế Quang Trung'], ['1789', 'Đại thắng quân Thanh'], ['1792', 'Mất']]
  };
  D.people['nguyen-anh'] = {
    story: 'Nguyễn Ánh là cháu chúa Nguyễn, người duy nhất của dòng chúa thoát khỏi cuộc truy sát của Tây Sơn năm 1777. Sau hơn 20 năm chiến đấu, có lúc phải lánh sang Xiêm, ông lấy lại Gia Định rồi đánh bại Tây Sơn. Năm 1802, ông lên ngôi lấy niên hiệu Gia Long, thống nhất đất nước từ Nam Quan đến Cà Mau; năm 1804 đặt quốc hiệu Việt Nam.',
    events: [['1777', 'Thoát khỏi cuộc truy sát của Tây Sơn'], ['1788', 'Chiếm lại Gia Định'], ['1802', 'Lên ngôi Gia Long'], ['1804', 'Đặt quốc hiệu Việt Nam'], ['1820', 'Mất']]
  };
  D.people['minh-mang'] = {
    story: 'Minh Mạng là vua thứ hai nhà Nguyễn, nổi tiếng với cải cách hành chính năm 1831–1832 chia cả nước thành các tỉnh, đặt Cơ mật viện, và đổi quốc hiệu thành Đại Nam (1838). Ông theo đuổi chính sách hạn chế giao thương và cấm đạo Thiên Chúa.',
    events: [['1820', 'Lên ngôi'], ['1831–1832', 'Cải cách hành chính'], ['1838', 'Đổi quốc hiệu Đại Nam'], ['1841', 'Mất']]
  };
  D.people['phan-boi-chau'] = {
    story: 'Phan Bội Châu đỗ Giải nguyên năm 1900. Năm 1904, ông lập Duy Tân hội; năm 1905 sang Nhật, phát động phong trào Đông Du đưa thanh niên sang Nhật học. Năm 1912, ông lập Việt Nam Quang phục hội ở Trung Quốc. Năm 1925, ông bị Pháp bắt ở Thượng Hải, sau đó bị giam lỏng ở Huế đến khi mất năm 1940.',
    events: [['1904', 'Lập Duy Tân hội'], ['1905', 'Phát động phong trào Đông Du'], ['1912', 'Lập Việt Nam Quang phục hội'], ['1925', 'Bị bắt ở Thượng Hải'], ['1940', 'Mất ở Huế']]
  };
  D.people['phan-chau-trinh'] = {
    story: 'Phan Châu Trinh chủ trương cải cách bằng con đường ôn hòa: "khai dân trí, chấn dân khí, hậu dân sinh". Ông vận động phong trào Duy Tân, ủng hộ Đông Kinh Nghĩa Thục. Năm 1908, ông bị bắt và đày ra Côn Đảo, sau đó sống nhiều năm ở Pháp. Đám tang của ông năm 1926 trở thành một sự kiện chính trị lớn.',
    events: [['1906', 'Gửi thư cho Toàn quyền Beau đòi cải cách'], ['1908', 'Bị đày ra Côn Đảo'], ['1911–1925', 'Sống ở Pháp'], ['1926', 'Mất ở Sài Gòn']]
  };

  /* ======================= NHÂN VẬT MỚI ======================= */

  function person(o) {
    return Object.assign({
      alt: [], birth: null, death: null, birthLabel: 'Không rõ', deathLabel: 'Không rõ',
      region: 'Việt Nam', relevance: 'direct', relations: [], places: [], confidence: 'Khá chắc'
    }, o, { story: o.story || o.summary, sourceQuery: o.sourceQuery || o.name });
  }

  D.newPeople.push(
    person({ id: 'thi-sach', name: 'Thi Sách', polity: 'Lạc tướng Chu Diên', roles: ['Lạc tướng'], eraHints: [3, 4], periods: [3, 4], deathLabel: '~40',
      summary: 'Lạc tướng huyện Chu Diên, chồng của Trưng Trắc.',
      story: 'Thi Sách là Lạc tướng huyện Chu Diên, chồng của Trưng Trắc. Theo nhiều nguồn chép, việc ông bị Thái thú Tô Định giết hại là một trong những nguyên nhân dẫn tới cuộc khởi nghĩa năm 40; một số nghiên cứu cho rằng ông còn sống và cùng tham gia khởi nghĩa.',
      vietnamLink: 'Liên quan trực tiếp đến khởi nghĩa Hai Bà Trưng.', events: ['Khởi nghĩa năm 40'], confidence: 'Còn tranh luận',
      relations: [{ id: 'trung-trac', type: 'vợ' }] }),
    person({ id: 'lu-gia', name: 'Lữ Gia', polity: 'Nam Việt', roles: ['Thừa tướng'], eraHints: [2], periods: [2], death: -111, deathLabel: '111 TCN',
      summary: 'Thừa tướng nước Nam Việt, chống lại việc nội thuộc nhà Hán.',
      story: 'Lữ Gia làm Thừa tướng qua ba đời vua Nam Việt. Năm 112 TCN, khi Cù thái hậu và vua Triệu Ai Vương muốn xin nội thuộc nhà Hán, ông chống lại, giết vua và thái hậu, lập Triệu Dương Vương. Nhà Hán đem quân sang đánh; năm 111 TCN Nam Việt mất, Lữ Gia bị giết. Nhiều nơi ở Bắc Bộ thờ ông.',
      vietnamLink: 'Được thờ ở nhiều làng Bắc Bộ như một người chống phương Bắc.', events: ['112 TCN: chống việc nội thuộc nhà Hán', '111 TCN: Nam Việt mất'] }),
    person({ id: 'si-nhiep', name: 'Sĩ Nhiếp', polity: 'Giao Chỉ (Đông Hán – Đông Ngô)', roles: ['Thái thú'], eraHints: [5], periods: [5], birth: 137, death: 226, birthLabel: '137', deathLabel: '226',
      summary: 'Thái thú Giao Chỉ, đề cao Nho học và để Giao Chỉ yên ổn suốt 40 năm.',
      story: 'Sĩ Nhiếp làm Thái thú Giao Chỉ khoảng 40 năm (187–226), giữ cho vùng đất này yên ổn trong lúc Trung Hoa loạn lạc cuối thời Đông Hán. Ông khuyến khích Nho học, thu hút nhiều học giả lánh nạn; sử phong kiến tôn ông là "Nam Giao học tổ". Luy Lâu dưới thời ông là trung tâm văn hóa, Phật giáo quan trọng.',
      vietnamLink: 'Nhân vật gây tranh luận: được sử phong kiến tôn vinh nhưng là quan cai trị của phương Bắc.', events: ['187: làm Thái thú Giao Chỉ', '226: mất'],
      places: [{ name: 'Luy Lâu', lat: 21.04, lon: 106.04, note: 'Trị sở Giao Chỉ' }] }),
    person({ id: 'ly-phat-tu', name: 'Lý Phật Tử', polity: 'Vạn Xuân', roles: ['Vua'], eraHints: [6], periods: [6], deathLabel: 'Sau 602',
      summary: 'Vị vua cuối cùng của nước Vạn Xuân (Hậu Lý Nam Đế).',
      story: 'Lý Phật Tử là người họ Lý, tiếp tục lực lượng của Lý Thiên Bảo. Năm 571, ông đánh úp Triệu Việt Vương và nắm toàn bộ quyền lực, xưng Hậu Lý Nam Đế. Năm 602, nhà Tùy sai Lưu Phương đem quân sang; ông ra hàng, nước Vạn Xuân chấm dứt.',
      vietnamLink: 'Vị vua cuối cùng của Vạn Xuân.', events: ['571: đánh úp Triệu Việt Vương', '602: ra hàng nhà Tùy'],
      relations: [{ id: 'trieu-quang-phuc', type: 'đối thủ' }] }),
    person({ id: 'khuc-hao', name: 'Khúc Hạo', polity: 'Tĩnh Hải quân', roles: ['Tiết độ sứ'], eraHints: [8], periods: [8], death: 917, deathLabel: '917',
      summary: 'Con Khúc Thừa Dụ, cải cách hành chính và thuế khóa đầu thế kỷ X.',
      story: 'Khúc Hạo kế nghiệp cha là Khúc Thừa Dụ năm 907. Ông đặt lại các khu vực hành chính đến tận cấp xã, "bình quân thuế ruộng, tha bỏ lực dịch, lập sổ hộ khẩu", với chủ trương chính sự "cốt chuộng khoan dung, giản dị". Nhiều nhà sử học coi đây là những bước đầu của một nhà nước tự chủ.',
      vietnamLink: 'Người đặt nền tảng quản trị cho thời tự chủ.', events: ['907: kế nghiệp Khúc Thừa Dụ', 'Cải cách hành chính, thuế khóa'],
      relations: [{ id: 'khuc-thua-du', type: 'cha' }] }),
    person({ id: 'duong-tam-kha', name: 'Dương Tam Kha', polity: 'Nhà Ngô', roles: ['Vua (tiếm ngôi)'], eraHints: [9], periods: [9], deathLabel: 'Không rõ',
      summary: 'Em vợ Ngô Quyền, cướp ngôi năm 944, xưng Dương Bình Vương.',
      story: 'Dương Tam Kha là em vợ Ngô Quyền (con Dương Đình Nghệ). Khi Ngô Quyền mất năm 944, ông được giao phò tá con Ngô Quyền nhưng đã cướp ngôi, xưng Dương Bình Vương. Năm 950, Ngô Xương Văn lật đổ ông nhưng tha chết, phong làm Chương Dương công.',
      vietnamLink: 'Sự tiếm ngôi của ông làm suy yếu nhà Ngô.', events: ['944: cướp ngôi', '950: bị Ngô Xương Văn lật đổ'],
      relations: [{ id: 'ngo-quyen', type: 'anh rể' }, { id: 'duong-dinh-nghe', type: 'cha' }] }),
    person({ id: 'nguyen-bac', name: 'Nguyễn Bặc', polity: 'Nhà Đinh', roles: ['Định quốc công', 'Tướng'], eraHints: [10], periods: [10], birth: 924, death: 979, birthLabel: '924', deathLabel: '979',
      summary: 'Khai quốc công thần nhà Đinh, Định quốc công.',
      story: 'Nguyễn Bặc là bạn thuở nhỏ của Đinh Bộ Lĩnh, giúp ông dẹp loạn 12 sứ quân và được phong Định quốc công. Sau khi Đinh Tiên Hoàng bị ám hại năm 979, ông giết Đỗ Thích, rồi cùng Đinh Điền khởi binh chống Lê Hoàn và tử trận.',
      vietnamLink: 'Ông được coi là thủy tổ họ Nguyễn ở Việt Nam theo nhiều gia phả.', events: ['966–967: dẹp loạn 12 sứ quân', '979: chống Lê Hoàn và mất'],
      relations: [{ id: 'dinh-bo-linh', type: 'vua, bạn thuở nhỏ' }, { id: 'le-hoan', type: 'đối thủ' }] }),
    person({ id: 'ly-thanh-tong', name: 'Lý Thánh Tông', polity: 'Nhà Lý', roles: ['Hoàng đế'], eraHints: [12], periods: [12], birth: 1023, death: 1072, birthLabel: '1023', deathLabel: '1072',
      summary: 'Vua thứ ba nhà Lý, đổi quốc hiệu thành Đại Việt năm 1054.',
      story: 'Lý Thánh Tông lên ngôi năm 1054 và đổi quốc hiệu thành Đại Việt. Ông lập Văn Miếu (1070), sáng lập thiền phái Thảo Đường, và năm 1069 đánh Chiêm Thành, thu ba châu Địa Lý, Ma Linh, Bố Chính. Sử chép ông thương dân, từng nói về những phạm nhân chịu rét trong ngục.',
      vietnamLink: 'Người đặt quốc hiệu Đại Việt, dùng suốt nhiều thế kỷ.', events: ['1054: lên ngôi, đặt quốc hiệu Đại Việt', '1069: đánh Chiêm Thành', '1070: lập Văn Miếu', '1072: mất'],
      places: [{ name: 'Văn Miếu', lat: 21.0285, lon: 105.8355, note: 'Lập năm 1070' }] }),
    person({ id: 'to-hien-thanh', name: 'Tô Hiến Thành', polity: 'Nhà Lý', roles: ['Thái úy', 'Quan đại thần'], eraHints: [12], periods: [12], birth: 1102, death: 1179, birthLabel: '1102', deathLabel: '1179',
      summary: 'Đại thần thanh liêm nổi tiếng cuối thời Lý.',
      story: 'Tô Hiến Thành là Thái úy, phụ chính cho vua Lý Cao Tông còn nhỏ. Ông nổi tiếng chính trực: khi ông ốm nặng, Thái hậu hỏi ai thay thế, ông tiến cử Trần Trung Tá — người có tài — chứ không phải Vũ Tán Đường là người ngày đêm chăm sóc ông.',
      vietnamLink: 'Hình mẫu về sự công tâm trong dùng người.', events: ['1175: phụ chính cho Lý Cao Tông', '1179: mất'] }),
    person({ id: 'ly-chieu-hoang', name: 'Lý Chiêu Hoàng', polity: 'Nhà Lý', roles: ['Nữ hoàng'], eraHints: [12, 13], periods: [12], birth: 1218, death: 1278, birthLabel: '1218', deathLabel: '1278',
      summary: 'Nữ hoàng duy nhất trong lịch sử Việt Nam.',
      story: 'Lý Chiêu Hoàng lên ngôi năm 1224 khi mới 6 tuổi. Dưới sự sắp đặt của Trần Thủ Độ, bà lấy Trần Cảnh và năm 1225 nhường ngôi cho chồng, chấm dứt nhà Lý và mở đầu nhà Trần.',
      vietnamLink: 'Nữ hoàng duy nhất của Việt Nam; sự chuyển giao từ Lý sang Trần.', events: ['1224: lên ngôi', '1225: nhường ngôi cho Trần Cảnh'],
      relations: [{ id: 'tran-thai-tong', type: 'chồng' }, { id: 'tran-thu-do', type: 'người sắp đặt cuộc chuyển giao' }] }),
    person({ id: 'tran-quang-khai', name: 'Trần Quang Khải', polity: 'Nhà Trần', roles: ['Thượng tướng', 'Thái sư'], eraHints: [13], periods: [13], birth: 1241, death: 1294, birthLabel: '1241', deathLabel: '1294',
      summary: 'Thượng tướng thái sư, chỉ huy trận Chương Dương năm 1285.',
      story: 'Trần Quang Khải là con vua Trần Thái Tông, giữ chức Thượng tướng thái sư. Trong kháng chiến chống Nguyên lần hai, ông chỉ huy trận Chương Dương (1285), góp phần giải phóng Thăng Long. Bài thơ "Tụng giá hoàn kinh sư" của ông có câu "Đoạt sáo Chương Dương độ".',
      vietnamLink: 'Danh tướng và nhà thơ thời Trần.', events: ['1285: chiến thắng Chương Dương'],
      relations: [{ id: 'tran-thai-tong', type: 'cha' }, { id: 'tran-quoc-tuan', type: 'đồng chỉ huy' }] }),
    person({ id: 'tran-nhat-duat', name: 'Trần Nhật Duật', polity: 'Nhà Trần', roles: ['Tướng', 'Nhà ngoại giao'], eraHints: [13], periods: [13], birth: 1255, death: 1330, birthLabel: '1255', deathLabel: '1330',
      summary: 'Danh tướng thắng trận Hàm Tử năm 1285, giỏi nhiều ngôn ngữ.',
      story: 'Trần Nhật Duật là con vua Trần Thái Tông, nổi tiếng thông thạo ngôn ngữ và phong tục của nhiều dân tộc. Năm 1285, ông chỉ huy trận Hàm Tử đánh bại quân Toa Đô.',
      vietnamLink: 'Danh tướng chống Nguyên.', events: ['1285: chiến thắng Hàm Tử'],
      relations: [{ id: 'tran-thai-tong', type: 'cha' }] }),
    person({ id: 'chu-van-an', name: 'Chu Văn An', polity: 'Nhà Trần', roles: ['Nhà giáo'], eraHints: [13], periods: [13], birth: 1292, death: 1370, birthLabel: '1292', deathLabel: '1370',
      summary: 'Nhà giáo lớn thời Trần, dâng "Thất trảm sớ".',
      story: 'Chu Văn An mở trường dạy học ở Huỳnh Cung, rồi làm Tư nghiệp Quốc Tử Giám. Khi triều chính suy đồi dưới thời Trần Dụ Tông, ông dâng "Thất trảm sớ" xin chém bảy nịnh thần; vua không nghe, ông treo mũ từ quan về ẩn ở Chí Linh. Ông được thờ ở Văn Miếu.',
      vietnamLink: 'Biểu tượng của người thầy và khí tiết kẻ sĩ.', events: ['Dâng Thất trảm sớ', 'Từ quan về Chí Linh'] }),
    person({ id: 'luong-the-vinh', name: 'Lương Thế Vinh', polity: 'Lê sơ', roles: ['Trạng nguyên', 'Nhà toán học'], eraHints: [16], periods: [16], birth: 1441, death: 1496, birthLabel: '1441', deathLabel: '1496',
      summary: 'Trạng nguyên năm 1463, tác giả "Đại thành toán pháp".',
      story: 'Lương Thế Vinh đỗ Trạng nguyên năm 1463 dưới triều Lê Thánh Tông, được gọi là "Trạng Lường" vì giỏi tính toán. Ông được truyền là tác giả "Đại thành toán pháp" — sách toán dùng lâu dài trong khoa cử — và tham gia hội Tao Đàn.',
      vietnamLink: 'Nhà khoa học tiêu biểu thời Lê sơ.', events: ['1463: đỗ Trạng nguyên'] }),
    person({ id: 'nguyen-binh-khiem', name: 'Nguyễn Bỉnh Khiêm', alt: ['Trạng Trình'], polity: 'Nhà Mạc', roles: ['Trạng nguyên', 'Nhà thơ'], eraHints: [17], periods: [17], birth: 1491, death: 1585, birthLabel: '1491', deathLabel: '1585',
      summary: 'Trạng nguyên nhà Mạc, nhà thơ, được gọi là Trạng Trình.',
      story: 'Nguyễn Bỉnh Khiêm đỗ Trạng nguyên năm 1535 dưới triều Mạc, làm quan 8 năm rồi về quê ở Vĩnh Lại (Hải Phòng) mở trường dạy học, lập am Bạch Vân. Ông để lại Bạch Vân am thi tập và Bạch Vân quốc ngữ thi tập. Dân gian lưu truyền nhiều "sấm Trạng Trình" và lời khuyên ông dành cho các thế lực đương thời.',
      vietnamLink: 'Nhà tư tưởng lớn thế kỷ XVI.', events: ['1535: đỗ Trạng nguyên', 'Về quê mở trường, lập am Bạch Vân'] }),
    person({ id: 'le-quy-don', name: 'Lê Quý Đôn', polity: 'Lê trung hưng', roles: ['Nhà bác học', 'Quan'], eraHints: [18], periods: [18], birth: 1726, death: 1784, birthLabel: '1726', deathLabel: '1784',
      summary: 'Nhà bác học lớn nhất thời trung đại Việt Nam.',
      story: 'Lê Quý Đôn đỗ Bảng nhãn năm 1752. Ông để lại khối lượng trước tác đồ sộ về sử học, địa lý, triết học, văn học: Đại Việt thông sử, Phủ biên tạp lục (về Đàng Trong), Kiến văn tiểu lục, Vân đài loại ngữ, Toàn Việt thi lục.',
      vietnamLink: 'Nhà bác học tiêu biểu thế kỷ XVIII.', events: ['1752: đỗ Bảng nhãn', '1776: viết Phủ biên tạp lục'] }),
    person({ id: 'doan-thi-diem', name: 'Đoàn Thị Điểm', polity: 'Lê trung hưng', roles: ['Nữ sĩ'], eraHints: [18], periods: [18], birth: 1705, death: 1748, birthLabel: '1705', deathLabel: '1748',
      summary: 'Nữ sĩ, theo truyền thống là người dịch Chinh phụ ngâm sang chữ Nôm.',
      story: 'Đoàn Thị Điểm (hiệu Hồng Hà nữ sĩ) nổi tiếng văn tài. Truyền thống cho rằng bà diễn Nôm tác phẩm Chinh phụ ngâm của Đặng Trần Côn; cũng có ý kiến cho rằng bản phổ biến là của Phan Huy Ích. Bà còn là tác giả Truyền kỳ tân phả.',
      vietnamLink: 'Gắn với Chinh phụ ngâm — xem trang Chinh Phụ Ngâm.', events: ['Diễn Nôm Chinh phụ ngâm (theo truyền thống)', 'Viết Truyền kỳ tân phả'], confidence: 'Còn tranh luận' }),
    person({ id: 'nguyen-du', name: 'Nguyễn Du', polity: 'Nhà Nguyễn', roles: ['Đại thi hào', 'Quan'], eraHints: [19, 20], periods: [19, 20], birth: 1765, death: 1820, birthLabel: '1765', deathLabel: '1820',
      summary: 'Đại thi hào, tác giả Truyện Kiều (Đoạn trường tân thanh).',
      story: 'Nguyễn Du sinh ra trong một gia đình đại quý tộc ở Tiên Điền (Hà Tĩnh). Ông sống qua thời loạn Tây Sơn rồi làm quan triều Nguyễn, từng đi sứ sang nhà Thanh (1813). Truyện Kiều — 3.254 câu lục bát — là kiệt tác của văn học Việt Nam; ông còn để lại thơ chữ Hán (Thanh Hiên thi tập, Bắc hành tạp lục) và Văn tế thập loại chúng sinh.',
      vietnamLink: 'Tác giả Truyện Kiều — xem trang Truyện Kiều.', events: ['1802: làm quan triều Nguyễn', '1813: đi sứ nhà Thanh', '1820: mất ở Huế'],
      places: [{ name: 'Tiên Điền', lat: 18.65, lon: 105.75, note: 'Quê hương' }] }),
    person({ id: 'le-van-duyet', name: 'Lê Văn Duyệt', polity: 'Nhà Nguyễn', roles: ['Tổng trấn Gia Định', 'Tướng'], eraHints: [20], periods: [20], death: 1832, birthLabel: '1763 hoặc 1764', deathLabel: '1832',
      summary: 'Danh tướng giúp Nguyễn Ánh, Tổng trấn Gia Định thành.',
      story: 'Lê Văn Duyệt theo Nguyễn Ánh từ trẻ và là một trong những danh tướng góp công lập nhà Nguyễn. Ông hai lần làm Tổng trấn Gia Định thành, có uy tín lớn ở Nam Kỳ. Sau khi ông mất, mâu thuẫn với vua Minh Mạng khiến mộ ông bị san phẳng; con nuôi ông là Lê Văn Khôi nổi dậy (1833). Vua Thiệu Trị sau đó minh oan cho ông.',
      vietnamLink: 'Nhân vật quan trọng trong lịch sử Nam Bộ.', events: ['1802: góp công lập nhà Nguyễn', 'Tổng trấn Gia Định', '1832: mất'],
      relations: [{ id: 'nguyen-anh', type: 'vua' }, { id: 'minh-mang', type: 'mâu thuẫn' }] }),
    person({ id: 'nguyen-dinh-chieu', name: 'Nguyễn Đình Chiểu', polity: 'Nhà Nguyễn / Nam Kỳ', roles: ['Nhà thơ', 'Nhà giáo'], eraHints: [20, 21], periods: [20], birth: 1822, death: 1888, birthLabel: '1822', deathLabel: '1888',
      summary: 'Nhà thơ mù yêu nước, tác giả Lục Vân Tiên.',
      story: 'Nguyễn Đình Chiểu bị mù năm 1849 nhưng vẫn dạy học, bốc thuốc và sáng tác. Truyện thơ Lục Vân Tiên của ông rất phổ biến ở Nam Bộ. Khi Pháp xâm lược, ông viết Văn tế nghĩa sĩ Cần Giuộc, khước từ mọi sự mua chuộc của chính quyền thực dân.',
      vietnamLink: 'Ngọn cờ đầu của văn học yêu nước Nam Bộ.', events: ['1849: bị mù', 'Viết Lục Vân Tiên', '1861: Văn tế nghĩa sĩ Cần Giuộc', '1888: mất'] }),
    person({ id: 'huynh-thuc-khang', name: 'Huỳnh Thúc Kháng', polity: 'Thời Pháp thuộc', roles: ['Nhà chí sĩ', 'Nhà báo'], eraHints: [21, 22, 23], periods: [21, 23], birth: 1876, death: 1947, birthLabel: '1876', deathLabel: '1947',
      summary: 'Chí sĩ phong trào Duy Tân, chủ nhiệm báo Tiếng Dân.',
      story: 'Huỳnh Thúc Kháng đỗ Hoàng giáp năm 1904 nhưng không ra làm quan, cùng Phan Châu Trinh vận động Duy Tân. Ông bị đày Côn Đảo 13 năm (1908–1921). Năm 1927, ông sáng lập báo Tiếng Dân ở Huế. Năm 1946, ông là Bộ trưởng Bộ Nội vụ và từng giữ quyền Chủ tịch nước khi Hồ Chí Minh sang Pháp.',
      vietnamLink: 'Gắn với phong trào Duy Tân và chính phủ năm 1946.', events: ['1904: đỗ Hoàng giáp', '1908–1921: bị đày Côn Đảo', '1927: lập báo Tiếng Dân', '1946: quyền Chủ tịch nước'],
      relations: [{ id: 'phan-chau-trinh', type: 'đồng chí Duy Tân' }] }),
    person({ id: 'nguyen-thi-minh-khai', name: 'Nguyễn Thị Minh Khai', polity: 'Thời Pháp thuộc', roles: ['Nhà cách mạng'], eraHints: [21], periods: [21], birth: 1910, death: 1941, birthLabel: '1910', deathLabel: '1941',
      summary: 'Nữ chiến sĩ cách mạng, Bí thư Thành ủy Sài Gòn.',
      story: 'Nguyễn Thị Minh Khai hoạt động cách mạng từ trẻ, năm 1935 dự Đại hội Quốc tế Cộng sản ở Moskva. Về nước, bà làm Bí thư Thành ủy Sài Gòn – Chợ Lớn. Năm 1940, bà bị Pháp bắt trước cuộc Khởi nghĩa Nam Kỳ và bị xử bắn năm 1941.',
      vietnamLink: 'Nữ chiến sĩ tiêu biểu thời Pháp thuộc.', events: ['1935: dự Đại hội Quốc tế Cộng sản', '1940: bị bắt', '1941: bị xử bắn'] }),
    person({ id: 'vo-thi-sau', name: 'Võ Thị Sáu', polity: 'Kháng chiến chống Pháp', roles: ['Chiến sĩ'], eraHints: [23], periods: [23], birth: 1933, death: 1952, birthLabel: '1933', deathLabel: '1952',
      summary: 'Nữ chiến sĩ trẻ tuổi bị Pháp xử bắn ở Côn Đảo.',
      story: 'Võ Thị Sáu tham gia kháng chiến ở Đất Đỏ (Bà Rịa) từ khi còn nhỏ. Năm 1950, bà bị bắt sau một vụ tấn công, bị kết án tử hình và xử bắn ở Côn Đảo năm 1952 khi khoảng 19 tuổi. Mộ bà ở nghĩa trang Hàng Dương là nơi nhiều người đến viếng.',
      vietnamLink: 'Biểu tượng tuổi trẻ trong kháng chiến chống Pháp.', events: ['1950: bị bắt', '1952: bị xử bắn ở Côn Đảo'],
      places: [{ name: 'Côn Đảo', lat: 8.68, lon: 106.61, note: 'Nơi bà hy sinh' }] })
  );

  root.SUVIET_DETAILS = D;

  // Called by app.js right after PEOPLE and PERIOD_PEOPLE are defined, so new
  // figures appear everywhere (people list, search, quiz, era readers).
  root.SuVietExtend = function (PEOPLE, PERIOD_PEOPLE) {
    D.newPeople.forEach(function (p) {
      var existing = PEOPLE.find(function (x) { return x.id === p.id; });
      if (existing) {
        // Already in app.js: only fill in the richer story, events and links.
        if ((p.story || '').length > (existing.story || '').length) existing.story = p.story;
        if (p.events && p.events.length && !(existing.events || []).length) existing.events = p.events;
        var known = (existing.relations || []).map(function (r) { return r.id; });
        existing.relations = (existing.relations || []).concat((p.relations || []).filter(function (r) { return known.indexOf(r.id) < 0; }));
      } else {
        var copy = Object.assign({}, p);
        delete copy.periods;
        PEOPLE.push(copy);
      }
      (p.periods || p.eraHints || []).forEach(function (i) {
        if (!PERIOD_PEOPLE[i]) PERIOD_PEOPLE[i] = [];
        if (PERIOD_PEOPLE[i].indexOf(p.id) < 0) PERIOD_PEOPLE[i].push(p.id);
      });
    });
    Object.keys(D.people).forEach(function (id) {
      var p = PEOPLE.find(function (x) { return x.id === id; });
      var extra = D.people[id];
      if (!p || !extra) return;
      if (extra.story) p.story = extra.story;
      if (extra.events) {
        p.datedEvents = extra.events;
        p.events = extra.events.map(function (e) { return e[1]; });
      }
    });
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = D;
})(typeof window !== 'undefined' ? window : globalThis);
