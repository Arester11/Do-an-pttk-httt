const productList = [
{
  id: 1,
  name: "Đắc Nhân Tâm",
  prePrice: 5,
  salePercent: 3,
  desc: "Đắc Nhân Tâm (How to Win Friends and Influence People) được mệnh danh là quyển sách hay nhất, nổi tiếng nhất, bán chạy nhất và nó có tầm ảnh hưởng đi xa nhất mọi thời đại, Đắc Nhân Tâm của soạn giả Dale Carnegie là 1 quyển sách hay nên đọc để bạn biết về nghệ thuật thu phục lòng người và làm tất cả mọi người phải yêu mến mình.Quyển sách này cũng nêu bật lên các nguyên tắc trong việc đối nhân xử thế rất khôn ngoan bắt đầu từ việc thấu hiểu, thành thật với chính bản thân mình cũng như gợi ý cho người đọc cách biết quan tâm đến những người kế bên để cùng hòa nhập, cùng nhau phát triển khả năng của chính mình và mọi người lên 1 tầm cao mới.",
  type: "Classic",
  author:"Dale Carnegie",
  imagePrimary:
    "https://isachhay.net/wp-content/uploads/2017/08/sach-hay-dac-nhan-tam.jpg",
},
{
  id: 2,
  name: "Nhà giả kim",
  prePrice: 10,
  desc: "Nhà giả kim (The Alchemist) của Paulo Coelho là một cuốn sách hay dành cho những người đã đánh mất đi ước mơ hoặc chưa bao giờ có nó. Nếu bạn đang cần tìm những cuốn sách nên đọc để thành công thì Nhà Giả Kim rất xứng đáng. Thành công như thế nào: thành công trong trong suy nghĩ và hành động.",
  type: "Classic",
  author:"Paulo Coelho",
  imagePrimary:
    "https://isachhay.net/wp-content/uploads/2017/08/sach-hay-nha-gia-kim.jpg",
},
{
  id: 3,
  name: "Tội Ác Và Hình Phạt",
  prePrice: 10,
  desc: "Tội Ác Và Hình Phạt – Cuốn sách này nằm trong khá nhiều danh sách “những cuốn sách hàng đầu nên đọc trong suốt cuộc đời của bạn“. Và, sau khi cuốn sách này bị lãng quên trên giá sách của tôi trong một thời gian dài (tôi thực sự sở hữu nó trên Kindle, vì vậy về mặt kỹ thuật, tôi sở hữu hai bản), tôi đã đọc nó.",
  type: "Classic",
  author:"Fyodor Dostoevsky",
  imagePrimary:
    "https://isachhay.net/wp-content/uploads/2017/08/sach-hay-toi-ac-va-hinh-phat.jpg",  
},
{
  id: 4,
  name: " Mỗi lần vấp ngã là một lần Trưởng Thành",
  prePrice: 15,
  desc: "“Mỗi lần vấp ngã là một lần Trưởng Thành” là cuốn sách hay về cuộc sống với nội dung theo kiểu kể chuyện và phân tích. Đây là cuốn sách giúp bạn trưởng thành hơn mà một lần vô tình ghé nhà sách, tôi bắt gặp tựa đề quá hay. Những câu chuyện trong đây như một dẫn chứng cụ thể và sống động trong cuộc sống thường ngày của mỗi chúng ta, trong đó có tôi và bạn đấy.“Mỗi lần vấp ngã là một lần Trưởng Thành” là cuốn sách hay về cuộc sống với nội dung theo kiểu kể chuyện và phân tích. Đây là cuốn sách giúp bạn trưởng thành hơn mà một lần vô tình ghé nhà sách, tôi bắt gặp tựa đề quá hay. Những câu chuyện trong đây như một dẫn chứng cụ thể và sống động trong cuộc sống thường ngày của mỗi chúng ta, trong đó có tôi và bạn đấy.",
  type: "Classic",
  author:"Liêu Trí Phong",
  imagePrimary:
    "https://isachhay.net/wp-content/uploads/2017/08/sach-hay-moi-lan-vap-nga-la-mot-lan-truong-thanh.jpg",
},
{
  id: 5,
  name: "Tuổi Trẻ Đáng Giá Bao Nhiêu?",
  prePrice: 15,
  desc: "Tôi đã đọc quyển sách này một cách thích thú. Có nhiều kiến thức và kinh nghiệm hữu ích, những điều mới mẻ ngay cả với người gần trung niên như tôi.Tuổi trẻ đáng giá bao nhiêu? được tác giả chia làm 3 phần: HỌC, LÀM, ĐI. Nhưng tôi thấy cuốn sách còn thể hiện một phần thứ tư nữa, đó là ĐỌC. Hãy đọc sách, nếu bạn đọc sách một cách bền bỉ, sẽ đến lúc bạn bị thôi thúc không ngừng bởi ý muốn viết nên cuốn sách của riêng mình. Nếu tôi còn ở tuổi đôi mươi, hẳn là tôi sẽ đọc Tuổi trẻ đáng giá bao nhiêu? nhiều hơn một lần.”",
  type: "normal",
  author:"Rosie Nguyễn",
  imagePrimary:
    "https://isachhay.net/wp-content/uploads/2017/08/sach-hay-tuoi-tre-dang-gia-bao-nhieu.jpg",
},
{
  id: 6,
  name: "Đời thay đổi khi chúng ta thay đổi",
  prePrice: 12,
  salePercent: 17,
  desc: "“Đời thay đổi khi chúng ta thay đổi” (Being A Happy Teenager) đem lại cho độc giả những tình huống vô cùng thực tế, thậm chí là các câu chuyện vừa “nhỏ nhặt” lại vừa “quan trọng” với cách ứng xử khôn ngoan, thú vị và hài hước… Đồng thời, độc giả như bắt gặp chính mình trong đó, có những cạnh tranh, thất bại, và có những tình huống giao tiếp vừa chân thật lại vừa bổ ích.",
  type: "normal",
  author:"Andrew Matthews",
  imagePrimary:
    "https://isachhay.net/wp-content/uploads/2017/08/sach-hay-doi-thay-doi-khi-chung-ta-thay-doi.jpg",
},
{
  id: 7,
  name: "Dạy Con Làm Giàu",
  prePrice: 8,
  salePercent: 13,
  desc: "Cuốn sách dạy con: Cách suy nghĩ về đồng tiền sẽ quyết định tương lai và sự giàu có của bạn.Có rất nhiều phương pháp để tôi và bạn cải thiện cuộc sống và thu nhập, nhưng với Dạy Con Làm Giàu của tác giả Robert Kiyosaki, bạn sẽ biết được chìa khóa nền tảng để trở nên giàu có hơn.",
  type: "normal",
  author:"Robert Kiyosaki",
  imagePrimary:
    "https://isachhay.net/wp-content/uploads/2017/08/sach-hay-day-con-lam-giau.jpg",
},
{
  id: 8,
  name: "Những Tấm Lòng Cao Cả",
  prePrice: 9,
  salePercent: 13,
  desc: "Cuốn sách này có có tên tiếng Anh là “Heart” của nhà văn nổi tiếng người Ý – Edmondo De Amicis. Tôi biết tới quyển sách văn học này qua những câu chuyện được trích trong sách giáo khoa tiểu học – những bài học nhỏ nhưng cực kỳ ý nghĩa. Điều này thôi thúc tôi (lúc đã lớn) lại chọn tìm và đọc trọn vẹn nó thêm một lần nữa, cảm nhận rõ ràng những gì mà tác giả Edmondo De Amicis muốn gửi đến đọc giả.",
  type: "normal",
  author:"Edmondo De Amicis",
  imagePrimary:
    "https://isachhay.net/wp-content/uploads/2017/08/sach-hay-nhung-tam-long-cao-ca.jpg",
},
{
  id: 9,
  name: "Nhà Lãnh Đạo không Chức Danh",
  prePrice: 9,
  salePercent: 13,
  desc: "Cho dù bạn làm gì trong tổ chức và cuộc sống hiện nay của bạn như thế nào, một thực tế quan trọng duy nhất là bạn hoàn toàn có khả năng thể hiện năng lực để làm lãnh đạo. Cho dù sự nghiệp hiện nay của bạn đang ở đâu, bạn vẫn luôn cần thể hiện các khả năng tột đỉnh của mình. Cuốn sách này sẽ hướng dẫn bạn làm thế nào để khai thác tối đa khả năng trong chính bạn, cũng như thay đổi cuộc sống và thế giới ở quanh bạn.",
  type: "normal",
  author:"Robin Sharma",
  imagePrimary:
    "https://isachhay.net/wp-content/uploads/2017/08/sach-hay-nha-lanh-dao-khong-chuc-danh.jpg",
},
{
  id: 10,
  name: "Cho tôi xin 1 vé đi tuổi thơ(1)",
  prePrice: 9,
  salePercent: 13,
  desc: "Với cuốn “Cho tôi xin một vé đi tuổi thơ” của Nguyễn Nhật Ánh đã thổi hồn vào những nhân vật xuyên suốt trong câu chuyện của mình. Từ cậu cu Mùi muốn tập tành làm “nhà cách mạng tí hon”, có trí mường tượng phong phú luôn muốn thay đổi tất cả những điều tất yếu và nhàm chán trong cuộc sống thường ngày đến các triết lí nghe có lúc ngô nghê, đôi khi lại đầy sâu sắc của những đứa trẻ chưa đi hết một phần 8 cuộc đời.",
  type: "Classic",
  author:"Nguyễn Nhật Ánh",
  imagePrimary:
    "https://isachhay.net/wp-content/uploads/2017/08/sach-hay-cho-toi-xin-mot-ve-di-tuoi-tho.jpg",
},
{
  id: 11,
  name: "Cho tôi xin 1 vé đi tuổi thơ(2)",
  prePrice: 9,
  salePercent: 13,
  desc: "Với cuốn “Cho tôi xin một vé đi tuổi thơ” của Nguyễn Nhật Ánh đã thổi hồn vào những nhân vật xuyên suốt trong câu chuyện của mình. Từ cậu cu Mùi muốn tập tành làm “nhà cách mạng tí hon”, có trí mường tượng phong phú luôn muốn thay đổi tất cả những điều tất yếu và nhàm chán trong cuộc sống thường ngày đến các triết lí nghe có lúc ngô nghê, đôi khi lại đầy sâu sắc của những đứa trẻ chưa đi hết một phần 8 cuộc đời.",
  type: "normal",
  author:"Nguyễn Nhật Ánh",
  imagePrimary:
    "https://isachhay.net/wp-content/uploads/2017/08/sach-hay-cho-toi-xin-mot-ve-di-tuoi-tho.jpg",
},
{
  id: 12,
  name: "Cho tôi xin 1 vé đi tuổi thơ(3)",
  prePrice: 9,
  salePercent: 13,
  desc: "Với cuốn “Cho tôi xin một vé đi tuổi thơ” của Nguyễn Nhật Ánh đã thổi hồn vào những nhân vật xuyên suốt trong câu chuyện của mình. Từ cậu cu Mùi muốn tập tành làm “nhà cách mạng tí hon”, có trí mường tượng phong phú luôn muốn thay đổi tất cả những điều tất yếu và nhàm chán trong cuộc sống thường ngày đến các triết lí nghe có lúc ngô nghê, đôi khi lại đầy sâu sắc của những đứa trẻ chưa đi hết một phần 8 cuộc đời.",
  type: "normal",
  author:"Nguyễn Nhật Ánh",
  imagePrimary:
    "https://isachhay.net/wp-content/uploads/2017/08/sach-hay-cho-toi-xin-mot-ve-di-tuoi-tho.jpg",
},
{
  id: 13,
  name: "Cho tôi xin 1 vé đi tuổi thơ(4)",
  prePrice: 9,
  salePercent: 13,
  desc: "Với cuốn “Cho tôi xin một vé đi tuổi thơ” của Nguyễn Nhật Ánh đã thổi hồn vào những nhân vật xuyên suốt trong câu chuyện của mình. Từ cậu cu Mùi muốn tập tành làm “nhà cách mạng tí hon”, có trí mường tượng phong phú luôn muốn thay đổi tất cả những điều tất yếu và nhàm chán trong cuộc sống thường ngày đến các triết lí nghe có lúc ngô nghê, đôi khi lại đầy sâu sắc của những đứa trẻ chưa đi hết một phần 8 cuộc đời.",
  type: "normal",
  author:"Nguyễn Nhật Ánh",
  imagePrimary:
    "https://isachhay.net/wp-content/uploads/2017/08/sach-hay-cho-toi-xin-mot-ve-di-tuoi-tho.jpg",
},
];

productList.forEach((product) => {
  if (product.salePercent) {
    product["salePrice"] =
      product.prePrice - (product.prePrice * product.salePercent) / 100;
  }
});

const typeProductList = ["Classic", "Variant", "Accessories"];

const sortList = ["Default", "Price, low to high", "Price, high to low"];

const bannerList = [
  "https://www.inquangcaopcm.com/upload/images/53.jpeg",
  "https://th.bing.com/th/id/OIP.x_A5wGK2dKFlKVofOpKYcAHaDW?rs=1&pid=ImgDetMain",
]
export { productList, typeProductList, sortList, bannerList};