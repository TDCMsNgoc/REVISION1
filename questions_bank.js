/**
 * NGAN HANG CAU HOI TRAC NGHIEM TIENG ANH - 80 CAU (REVISION 1)
 * Tong hop tu 4 chu de:
 * 1. Present Tenses (20 cau)
 * 2. Past Tenses (20 cau)
 * 3. Future Tenses (20 cau)
 * 4. Verb Patterns (20 cau)
 */

const PRESENT_TENSES_RAW = [
  {
    id: 1,
    question: "Every morning, my sister _____ her bed before she goes to school.",
    options: [
      { key: "A", text: "is making" },
      { key: "B", text: "makes" },
      { key: "C", text: "has made" },
      { key: "D", text: "has been making" }
    ],
    correctAnswer: "B",
    tense: "Present Simple (Hiện tại đơn)",
    explanation: "📌 Dấu hiệu nhận biết: 'Every morning' (mỗi buổi sáng) và 'before she goes' diễn tả một thói quen hoặc hành động lặp đi lặp lại hàng ngày.\n👉 Cấu trúc: S (ngôi 3 số ít) + V-s/es -> 'my sister' đi với 'makes'.\n\n💬 Dịch nghĩa: Mỗi buổi sáng, chị tôi đều dọn giường trước khi đi học."
  },
  {
    id: 2,
    question: "Please be quiet because the baby _____ in the bedroom right now.",
    options: [
      { key: "A", text: "sleeps" },
      { key: "B", text: "has been sleeping" },
      { key: "C", text: "is sleeping" },
      { key: "D", text: "has slept" }
    ],
    correctAnswer: "C",
    tense: "Present Continuous (Hiện tại tiếp diễn)",
    explanation: "📌 Dấu hiệu nhận biết: 'Please be quiet' (Hãy giữ trật tự) và 'right now' (ngay lúc này) báo hiệu hành động đang diễn ra tại thời điểm nói.\n👉 Cấu trúc: S + is/am/are + V-ing -> 'the baby' là số ít nên dùng 'is sleeping'.\n\n💬 Dịch nghĩa: Xin hãy yên lặng vì em bé đang ngủ trong phòng ngủ ngay lúc này."
  },
  {
    id: 3,
    question: "We _____ in this neighborhood for more than ten years.",
    options: [
      { key: "A", text: "live" },
      { key: "B", text: "are living" },
      { key: "C", text: "have lived" },
      { key: "D", text: "have been lived" }
    ],
    correctAnswer: "C",
    tense: "Present Perfect (Hiện tại hoàn thành)",
    explanation: "📌 Dấu hiệu nhận biết: 'for more than ten years' (trong hơn 10 năm) diễn tả hành động bắt đầu trong quá khứ và vẫn còn tiếp diễn ở hiện tại.\n👉 Cấu trúc chủ động: S + have/has + V3/ed -> 'We have lived'. Phương án D 'have been lived' là thể bị động nên sai.\n\n💬 Dịch nghĩa: Chúng tôi đã sống ở khu phố này hơn mười năm rồi."
  },
  {
    id: 4,
    question: "Tom looks tired because he _____ football with his friends for two hours.",
    options: [
      { key: "A", text: "plays" },
      { key: "B", text: "is playing" },
      { key: "C", text: "has played" },
      { key: "D", text: "has been playing" }
    ],
    correctAnswer: "D",
    tense: "Present Perfect Continuous (Hiện tại hoàn thành tiếp diễn)",
    explanation: "📌 Dấu hiệu nhận biết: Hành động chơi bóng đá diễn ra liên tục suốt 2 giờ ('for two hours') và để lại kết quả rõ rệt ở hiện tại ('Tom looks tired').\n👉 Thì Hiện tại hoàn thành tiếp diễn nhấn mạnh sự liên tục và quá trình của hành động: S + have/has + been + V-ing -> 'has been playing'.\n\n💬 Dịch nghĩa: Tom trông có vẻ mệt mỏi vì cậu ấy đã chơi bóng đá liên tục với các bạn suốt hai tiếng đồng hồ."
  },
  {
    id: 5,
    question: "My father usually _____ the newspaper after dinner every evening.",
    options: [
      { key: "A", text: "is reading" },
      { key: "B", text: "reads" },
      { key: "C", text: "has read" },
      { key: "D", text: "has been reading" }
    ],
    correctAnswer: "B",
    tense: "Present Simple (Hiện tại đơn)",
    explanation: "📌 Dấu hiệu nhận biết: Trạng từ chỉ tần suất 'usually' (thường xuyên) và 'every evening' (mỗi tối) diễn tả một thói quen thường nhật.\n👉 Cấu trúc: Chủ ngữ 'My father' (ngôi thứ 3 số ít) đi với động từ thêm 's': 'reads'.\n\n💬 Dịch nghĩa: Bố tôi thường đọc báo sau bữa tối mỗi buổi tối."
  },
  {
    id: 6,
    question: "At the moment, the students _____ a science project in the classroom.",
    options: [
      { key: "A", text: "have been doing" },
      { key: "B", text: "have done" },
      { key: "C", text: "do" },
      { key: "D", text: "are doing" }
    ],
    correctAnswer: "D",
    tense: "Present Continuous (Hiện tại tiếp diễn)",
    explanation: "📌 Dấu hiệu nhận biết: Cụm từ 'At the moment' (lúc này / ngay thời điểm này) là dấu hiệu kinh điển của thì Hiện tại tiếp diễn.\n👉 Cấu trúc: S + is/am/are + V-ing. Chủ ngữ 'the students' là danh từ số nhiều nên dùng 'are doing'.\n\n💬 Dịch nghĩa: Ngay lúc này, các em học sinh đang thực hiện một dự án khoa học trong phòng học."
  },
  {
    id: 7,
    question: "I _____ my homework already, so I can go out and play now.",
    options: [
      { key: "A", text: "do" },
      { key: "B", text: "am doing" },
      { key: "C", text: "have done" },
      { key: "D", text: "have been doing" }
    ],
    correctAnswer: "C",
    tense: "Present Perfect (Hiện tại hoàn thành)",
    explanation: "📌 Dấu hiệu nhận biết: Trạng từ 'already' (đã ... rồi) và hệ quả ở hiện tại 'so I can go out and play now' chỉ hành động vừa mới hoàn tất và có kết quả tác động đến hiện tại.\n👉 Cấu trúc: S + have/has + V3/ed -> 'I have done'.\n\n💬 Dịch nghĩa: Tôi đã làm xong bài tập về nhà rồi, vì vậy bây giờ tôi có thể ra ngoài chơi."
  },
  {
    id: 8,
    question: "She _____ for the school singing competition since early this morning.",
    options: [
      { key: "A", text: "practices" },
      { key: "B", text: "is practicing" },
      { key: "C", text: "has practiced" },
      { key: "D", text: "has been practicing" }
    ],
    correctAnswer: "D",
    tense: "Present Perfect Continuous (Hiện tại hoàn thành tiếp diễn)",
    explanation: "📌 Dấu hiệu nhận biết: 'since early this morning' (từ sáng sớm nay) kết hợp với hành động luyện tập kéo dài liên tục không ngừng nghỉ từ sáng đến thời điểm hiện tại.\n👉 Nhấn mạnh tính liên tục của hành động: S + has + been + V-ing -> 'has been practicing'.\n\n💬 Dịch nghĩa: Cô ấy đã luyện tập cho hội thi ca hát của trường liên tục từ sáng sớm nay."
  },
  {
    id: 9,
    question: "The sun _____ in the east every morning.",
    options: [
      { key: "A", text: "rises" },
      { key: "B", text: "is rising" },
      { key: "C", text: "has risen" },
      { key: "D", text: "has been rising" }
    ],
    correctAnswer: "A",
    tense: "Present Simple (Hiện tại đơn)",
    explanation: "📌 Dấu hiệu nhận biết: Diễn tả một chân lý khoa học, quy luật tự nhiên bất biến (Mặt trời mọc ở đằng đông) và 'every morning'.\n👉 Cấu trúc: 'The sun' là danh từ số ít (ngôi 3 số ít) -> động từ 'rise' thêm 's' thành 'rises'.\n\n💬 Dịch nghĩa: Mặt trời mọc ở hướng đông vào mỗi buổi sáng."
  },
  {
    id: 10,
    question: "Look! The boys _____ in the rain even though their clothes are getting wet.",
    options: [
      { key: "A", text: "play" },
      { key: "B", text: "are playing" },
      { key: "C", text: "have played" },
      { key: "D", text: "have been played" }
    ],
    correctAnswer: "B",
    tense: "Present Continuous (Hiện tại tiếp diễn)",
    explanation: "📌 Dấu hiệu nhận biết: Câu cảm thán 'Look!' (Hãy nhìn kìa!) gây sự chú ý đối với một hành động đang trực tiếp diễn ra trước mắt người nói.\n👉 Cấu trúc: S + is/am/are + V-ing -> 'The boys' là danh từ số nhiều đi với 'are playing'.\n\n💬 Dịch nghĩa: Nhìn kìa! Những cậu bé đang chơi đùa dưới mưa mặc dù quần áo đang ướt sũng."
  },
  {
    id: 11,
    question: "They _____ for the teacher for nearly twenty minutes, and she still has not arrived.",
    options: [
      { key: "A", text: "wait" },
      { key: "B", text: "are waiting" },
      { key: "C", text: "have waited" },
      { key: "D", text: "have been waiting" }
    ],
    correctAnswer: "D",
    tense: "Present Perfect Continuous (Hiện tại hoàn thành tiếp diễn)",
    explanation: "📌 Dấu hiệu nhận biết: 'for nearly twenty minutes' (gần 20 phút) và mệnh đề 'and she still has not arrived' (và cô ấy vẫn chưa đến) nhấn mạnh sự chờ đợi liên tục và kéo dài đến tận hiện tại.\n👉 Cấu trúc: S + have/has + been + V-ing -> 'have been waiting'.\n\n💬 Dịch nghĩa: Họ đã chờ giáo viên gần hai mươi phút rồi, và cô ấy vẫn chưa đến."
  },
  {
    id: 12,
    question: "My uncle sometimes _____ mathematics at a secondary school in our town.",
    options: [
      { key: "A", text: "is teaching" },
      { key: "B", text: "teaches" },
      { key: "C", text: "has taught at the moment" },
      { key: "D", text: "have been teaching" }
    ],
    correctAnswer: "B",
    tense: "Present Simple (Hiện tại đơn)",
    explanation: "📌 Dấu hiệu nhận biết: Trạng từ chỉ tần suất 'sometimes' (thỉnh thoảng, đôi khi) diễn tả một nghề nghiệp, hoạt động lặp lại theo thói quen.\n👉 Cấu trúc: 'My uncle' là ngôi 3 số ít -> động từ kết thúc bằng 'ch' thêm 'es': 'teaches'.\n\n💬 Dịch nghĩa: Chú của tôi thỉnh thoảng dạy môn toán tại một trường cấp hai trong thị trấn."
  },
  {
    id: 13,
    question: "The children _____ quietly in the library because they have a test tomorrow.",
    options: [
      { key: "A", text: "study" },
      { key: "B", text: "are studying" },
      { key: "C", text: "have studied" },
      { key: "D", text: "have been studied" }
    ],
    correctAnswer: "B",
    tense: "Present Continuous (Hiện tại tiếp diễn)",
    explanation: "📌 Dấu hiệu nhận biết: Ngữ cảnh miêu tả hành động bọn trẻ đang tập trung học yên lặng trong thư viện ngay lúc này để chuẩn bị cho bài kiểm tra ngày mai.\n👉 Cấu trúc: 'The children' (số nhiều) đi với 'are studying'.\n\n💬 Dịch nghĩa: Bọn trẻ đang chăm chú học yên tĩnh trong thư viện vì ngày mai chúng có bài kiểm tra."
  },
  {
    id: 14,
    question: "We _____ our art project yet, so we need more time to finish it.",
    options: [
      { key: "A", text: "do not finish" },
      { key: "B", text: "are not finishing" },
      { key: "C", text: "have not finished" },
      { key: "D", text: "have not been finished" }
    ],
    correctAnswer: "C",
    tense: "Present Perfect (Hiện tại hoàn thành)",
    explanation: "📌 Dấu hiệu nhận biết: Trạng từ 'yet' (chưa) là dấu hiệu điển hình đứng cuối câu phủ định của thì Hiện tại hoàn thành.\n👉 Cấu trúc: S + have/has + not + V3/ed -> 'We have not finished'.\n\n💬 Dịch nghĩa: Chúng tôi vẫn chưa hoàn thành dự án mỹ thuật của mình, vì vậy chúng tôi cần thêm thời gian để hoàn tất nó."
  },
  {
    id: 15,
    question: "My brother _____ English since he was in primary school.",
    options: [
      { key: "A", text: "learns" },
      { key: "B", text: "is learning" },
      { key: "C", text: "have learned" },
      { key: "D", text: "has been learning" }
    ],
    correctAnswer: "D",
    tense: "Present Perfect Continuous (Hiện tại hoàn thành tiếp diễn)",
    explanation: "📌 Dấu hiệu nhận biết: 'since he was in primary school' (kể từ khi còn học tiểu học) biểu thị sự bắt đầu trong quá khứ và kéo dài liên tục tới hiện tại. Chủ ngữ 'My brother' là số ít nên phương án C 'have learned' sai ngữ pháp -> dùng 'has been learning'.\n\n💬 Dịch nghĩa: Em trai tôi đã học tiếng Anh liên tục kể từ khi em còn học trường tiểu học."
  },
  {
    id: 16,
    question: "She _____ on her school report all afternoon, and she still has not finished.",
    options: [
      { key: "A", text: "works" },
      { key: "B", text: "is working" },
      { key: "C", text: "has been working" },
      { key: "D", text: "has worked" }
    ],
    correctAnswer: "C",
    tense: "Present Perfect Continuous (Hiện tại hoàn thành tiếp diễn)",
    explanation: "📌 Dấu hiệu nhận biết: 'all afternoon' (suốt cả buổi chiều) và 'still has not finished' (vẫn chưa hoàn thành) nhấn mạnh sự liên tục và mất nhiều thời gian của hành động làm bài báo cáo.\n👉 Cấu trúc: S + has + been + V-ing -> 'has been working'.\n\n💬 Dịch nghĩa: Cô ấy đã làm bài báo cáo cho trường suốt cả buổi chiều nay và cô ấy vẫn chưa hoàn thành xong."
  },
  {
    id: 17,
    question: "The school bus _____ at seven o’clock every morning.",
    options: [
      { key: "A", text: "arrives" },
      { key: "B", text: "is arriving" },
      { key: "C", text: "has arrived" },
      { key: "D", text: "has been arriving" }
    ],
    correctAnswer: "A",
    tense: "Present Simple (Hiện tại đơn)",
    explanation: "📌 Dấu hiệu nhận biết: 'at seven o’clock every morning' diễn tả một lịch trình thời gian biểu cố định (lịch xe buýt trường đón học sinh) -> dùng thì Hiện tại đơn.\n👉 Cấu trúc: 'The school bus' là danh từ số ít -> động từ 'arrive' thêm 's' thành 'arrives'.\n\n💬 Dịch nghĩa: Xe buýt của trường đến vào đúng 7 giờ mỗi sáng."
  },
  {
    id: 18,
    question: "Why _____ you _____ so loudly while the teacher is explaining the lesson?",
    options: [
      { key: "A", text: "do, talk" },
      { key: "B", text: "are, talking" },
      { key: "C", text: "have, talked" },
      { key: "D", text: "have been, talk" }
    ],
    correctAnswer: "B",
    tense: "Present Continuous (Hiện tại tiếp diễn)",
    explanation: "📌 Dấu hiệu nhận biết: Liên từ 'while' (trong khi) kết hợp mệnh đề 'while the teacher is explaining the lesson' chỉ hai hành động đang xảy ra đồng thời tại thời điểm hiện tại.\n👉 Cấu trúc câu hỏi: Why + are + you + talking...?\n\n💬 Dịch nghĩa: Tại sao bạn lại đang nói chuyện lớn tiếng như vậy trong khi cô giáo đang giảng bài?"
  },
  {
    id: 19,
    question: "I _____ my pen, so I cannot write my answers in the test.",
    options: [
      { key: "A", text: "lose" },
      { key: "B", text: "am losing" },
      { key: "C", text: "have lost" },
      { key: "D", text: "had lost" }
    ],
    correctAnswer: "C",
    tense: "Present Perfect (Hiện tại hoàn thành)",
    explanation: "📌 Dấu hiệu nhận biết: Hành động làm mất bút đã xảy ra không xác định rõ thời điểm, nhưng để lại kết quả trực tiếp ở hiện tại: 'so I cannot write my answers'.\n👉 Cấu trúc: S + have/has + V3/ed -> 'I have lost'.\n\n💬 Dịch nghĩa: Tôi đã làm mất bút rồi, vì vậy tôi không thể viết câu trả lời vào bài thi."
  },
  {
    id: 20,
    question: "We _____ this movie twice, so we know the ending very well.",
    options: [
      { key: "A", text: "have watched" },
      { key: "B", text: "are watching" },
      { key: "C", text: "have been watching" },
      { key: "D", text: "watch" }
    ],
    correctAnswer: "A",
    tense: "Present Perfect (Hiện tại hoàn thành)",
    explanation: "📌 Dấu hiệu nhận biết: Cụm từ 'twice' (hai lần) diễn tả số lần đã trải nghiệm một việc tính đến thời điểm hiện tại. Không dùng thì tiếp diễn với các từ chỉ số lần như once, twice, three times.\n👉 Cấu trúc: S + have + V3/ed -> 'We have watched'.\n\n💬 Dịch nghĩa: Chúng tôi đã xem bộ phim này hai lần rồi, vì thế chúng tôi biết rất rõ đoạn kết."
  }
];

const PAST_TENSES_RAW = [
  {
    id: 1,
    question: "Yesterday morning, I _____ my school bag carefully, and then I _____ home for class.",
    options: [
      { key: "A", text: "am checking, leave" },
      { key: "B", text: "had been checking, left" },
      { key: "C", text: "had checked, was leaving" },
      { key: "D", text: "checked, left" }
    ],
    correct: "D",
    explanation: {
      rule: "Thì Quá khứ đơn (Past Simple)",
      signal: "Yesterday morning, liên từ 'and then'",
      detail: "Diễn tả một chuỗi các hành động ngắn xảy ra liên tiếp nhau trong quá khứ. Cả hai hành động 'kiểm tra cặp sách' và 'rời nhà' đều xảy ra và kết thúc sáng hôm qua nên dùng Quá khứ đơn cho cả hai vế (checked, left)."
    }
  },
  {
    id: 2,
    question: "Lisa’s hands were dirty because she _____ in the garden with her little brother all afternoon before dinner.",
    options: [
      { key: "A", text: "worked" },
      { key: "B", text: "was working" },
      { key: "C", text: "had been working" },
      { key: "D", text: "had worked" }
    ],
    correct: "C",
    explanation: {
      rule: "Thì Quá khứ hoàn thành tiếp diễn (Past Perfect Continuous)",
      signal: "were dirty (kết quả ở QK), all afternoon (khoảng thời gian kéo dài), before dinner (trước mốc QK)",
      detail: "Diễn tả một hành động đã diễn ra liên tục trong một khoảng thời gian ('all afternoon') trước một hành động/thời điểm khác trong quá khứ ('before dinner') và để lại kết quả trong quá khứ ('hands were dirty'). Cấu trúc: S + had been + V-ing."
    }
  },
  {
    id: 3,
    question: "The ground was very wet because it _____ heavily for several hours before the sun came out.",
    options: [
      { key: "A", text: "rained" },
      { key: "B", text: "was raining" },
      { key: "C", text: "had rained" },
      { key: "D", text: "had been raining" }
    ],
    correct: "D",
    explanation: {
      rule: "Thì Quá khứ hoàn thành tiếp diễn (Past Perfect Continuous)",
      signal: "was very wet (kết quả QK), for several hours (khoảng thời gian), before the sun came out",
      detail: "Nhấn mạnh tính liên tục của hành động mưa lớn kéo dài nhiều giờ liền trước khi mặt trời ló rạng và để lại kết quả mặt đất rất ướt. Cấu trúc: had been raining."
    }
  },
  {
    id: 4,
    question: "The boys _____ the classroom before the teacher arrived, so she was very pleased when she saw it.",
    options: [
      { key: "A", text: "cleaned" },
      { key: "B", text: "were cleaning" },
      { key: "C", text: "had cleaned" },
      { key: "D", text: "had been cleaning" }
    ],
    correct: "C",
    explanation: {
      rule: "Thì Quá khứ hoàn thành (Past Perfect)",
      signal: "before the teacher arrived (trước hành động QK đơn)",
      detail: "Diễn tả hành động dọn dẹp lớp học đã hoàn tất trước khi cô giáo bước vào lớp (nhấn mạnh kết quả hoàn thành). Cấu trúc: S + had + V3/ed (had cleaned)."
    }
  },
  {
    id: 5,
    question: "My sister _____ her favorite storybook again last night, and then she went to bed.",
    options: [
      { key: "A", text: "reads" },
      { key: "B", text: "was reading" },
      { key: "C", text: "read" },
      { key: "D", text: "had been reading" }
    ],
    correct: "C",
    explanation: {
      rule: "Thì Quá khứ đơn (Past Simple)",
      signal: "last night, and then she went to bed",
      detail: "Diễn tả chuỗi hành động nối tiếp nhau trong quá khứ: đọc sách xong rồi đi ngủ. Động từ 'read' ở dạng quá khứ viết giống nguyên mẫu nhưng phát âm là /red/."
    }
  },
  {
    id: 6,
    question: "At 8 o’clock last night, my brother _____ his homework while my mother _____ dinner in the kitchen.",
    options: [
      { key: "A", did: "did, made", text: "did, made" },
      { key: "B", text: "was doing, was making" },
      { key: "C", text: "had done, was made" },
      { key: "D", text: "had been doing, makes" }
    ],
    correct: "B",
    explanation: {
      rule: "Thì Quá khứ tiếp diễn (Past Continuous)",
      signal: "At 8 o’clock last night (thời điểm xác định trong QK), liên từ 'while'",
      detail: "Diễn tả hai hành động diễn ra song song cùng một lúc tại thời điểm xác định trong quá khứ: anh trai đang làm bài tập trong khi mẹ đang nấu ăn. Cấu trúc: was/were + V-ing."
    }
  },
  {
    id: 7,
    question: "Tom was very tired because he _____ football with his friends for more than two hours before he came home.",
    options: [
      { key: "A", text: "played" },
      { key: "B", text: "was playing" },
      { key: "C", text: "had played" },
      { key: "D", text: "had been playing" }
    ],
    correct: "D",
    explanation: {
      rule: "Thì Quá khứ hoàn thành tiếp diễn (Past Perfect Continuous)",
      signal: "was very tired, for more than two hours, before he came home",
      detail: "Nhấn mạnh quá trình chơi bóng đá kéo dài liên tục hơn 2 tiếng trước khi Tom về nhà, để lại kết quả Tom rất mệt mỏi. Cấu trúc: had been playing."
    }
  },
  {
    id: 8,
    question: "When I _____ Anna yesterday afternoon, she _____ a library book at the front desk.",
    options: [
      { key: "A", text: "saw, returned" },
      { key: "B", text: "saw, was returning" },
      { key: "C", text: "was seeing, had returned" },
      { key: "D", text: "had seen, had been returning" }
    ],
    correct: "B",
    explanation: {
      rule: "Sự kết hợp giữa Quá khứ đơn & Quá khứ tiếp diễn",
      signal: "When, yesterday afternoon",
      detail: "Một hành động đang diễn ra trong quá khứ (Anna đang trả sách - was returning) thì một hành động ngắn khác xen vào (tôi nhìn thấy - saw). Động từ 'see' là động từ tri giác không chia tiếp diễn."
    }
  },
  {
    id: 9,
    question: "They were tired because they _____ for the school bus for nearly forty minutes before it finally arrived.",
    options: [
      { key: "A", text: "waited" },
      { key: "B", text: "were waiting" },
      { key: "C", text: "had waited" },
      { key: "D", text: "had been waiting" }
    ],
    correct: "D",
    explanation: {
      rule: "Thì Quá khứ hoàn thành tiếp diễn (Past Perfect Continuous)",
      signal: "were tired, for nearly forty minutes, before it finally arrived",
      detail: "Hành động chờ đợi xe buýt kéo dài liên tục gần 40 phút trước khi xe đến, gây ra kết quả là họ bị mệt -> had been waiting."
    }
  },
  {
    id: 10,
    question: "While the children _____ in the yard, their father _____ the broken window in the kitchen.",
    options: [
      { key: "A", text: "played, was repairing" },
      { key: "B", text: "were playing, was repairing" },
      { key: "C", text: "were playing, repaired" },
      { key: "D", text: "had played, repaired" }
    ],
    correct: "B",
    explanation: {
      rule: "Thì Quá khứ tiếp diễn (Past Continuous)",
      signal: "While",
      detail: "Hai hành động diễn ra song song cùng một lúc trong quá khứ: lũ trẻ đang chơi ngoài sân trong khi người bố đang sửa cửa sổ. Cả 2 vế đều dùng Quá khứ tiếp diễn (were playing, was repairing)."
    }
  },
  {
    id: 11,
    question: "By the time the teacher entered the classroom, the students _____ all the chairs into neat rows.",
    options: [
      { key: "A", text: "had arranged" },
      { key: "B", text: "were arranging" },
      { key: "C", text: "arranged" },
      { key: "D", text: "had been arranging" }
    ],
    correct: "A",
    explanation: {
      rule: "Thì Quá khứ hoàn thành (Past Perfect)",
      signal: "By the time + S + V(quá khứ đơn)",
      detail: "Công thức: By the time + QK đơn, QK hoàn thành (had + V3/ed). Hành động xếp ghế đã hoàn tất trước thời điểm giáo viên bước vào phòng học -> had arranged."
    }
  },
  {
    id: 12,
    question: "Yesterday, my father _____ home late because he had an important meeting at the office.",
    options: [
      { key: "A", text: "comes" },
      { key: "B", text: "came" },
      { key: "C", text: "had come" },
      { key: "D", text: "had been coming" }
    ],
    correct: "B",
    explanation: {
      rule: "Thì Quá khứ đơn (Past Simple)",
      signal: "Yesterday",
      detail: "Diễn tả một sự việc đã xảy ra và kết thúc trong quá khứ với thời gian xác định (hôm qua bố về nhà muộn). Quá khứ của 'come' là 'came'."
    }
  },
  {
    id: 13,
    question: "While we _____ to school yesterday morning, we _____ a rainbow in the sky after the rain stopped.",
    options: [
      { key: "A", text: "walked, was seeing" },
      { key: "B", text: "were walking, saw" },
      { key: "C", text: "had walked, saw" },
      { key: "D", text: "had been walking, was seeing" }
    ],
    correct: "B",
    explanation: {
      rule: "Sự kết hợp giữa Quá khứ tiếp diễn & Quá khứ đơn",
      signal: "While, yesterday morning",
      detail: "Hành động đang diễn ra (chúng tôi đang đi bộ đến trường - were walking) thì có một hành động bất chợt xen vào (chúng tôi nhìn thấy cầu vồng - saw)."
    }
  },
  {
    id: 14,
    question: "James looked tired in class because he _____ for the math test since early morning before the lesson began.",
    options: [
      { key: "A", text: "studied" },
      { key: "B", text: "was studying" },
      { key: "C", text: "had studied" },
      { key: "D", text: "had been studying" }
    ],
    correct: "D",
    explanation: {
      rule: "Thì Quá khứ hoàn thành tiếp diễn (Past Perfect Continuous)",
      signal: "looked tired, since early morning, before the lesson began",
      detail: "Nhấn mạnh tính liên tục của hành động học bài từ sáng sớm trước khi tiết học bắt đầu, để lại kết quả James trông rất mệt mỏi trong lớp -> had been studying."
    }
  },
  {
    id: 15,
    question: "Last month, our class _____ a science museum and _____ many interesting facts about space.",
    options: [
      { key: "A", text: "visits, had learned" },
      { key: "B", text: "visited, learned" },
      { key: "C", text: "had visited, learn" },
      { key: "D", text: "had been visiting, am learning" }
    ],
    correct: "B",
    explanation: {
      rule: "Thì Quá khứ đơn (Past Simple)",
      signal: "Last month, liên từ 'and'",
      detail: "Diễn tả các hành động nối tiếp nhau đã diễn ra và kết thúc hoàn toàn trong quá khứ (tháng trước lớp chúng tôi đã đến thăm bảo tàng và học được nhiều điều thú vị) -> visited, learned."
    }
  },
  {
    id: 16,
    question: "Last weekend, we _____ our grandparents and helped them clean the garden behind their house.",
    options: [
      { key: "A", text: "visit" },
      { key: "B", text: "visited" },
      { key: "C", text: "had visited" },
      { key: "D", text: "had been visiting" }
    ],
    correct: "B",
    explanation: {
      rule: "Thì Quá khứ đơn (Past Simple)",
      signal: "Last weekend, and helped",
      detail: "Sự việc xảy ra vào cuối tuần trước, đi liền với động từ quá khứ 'helped' -> chia Quá khứ đơn: visited."
    }
  },
  {
    id: 17,
    question: "The teacher _____ the lesson before the principal came into the classroom to speak to us.",
    options: [
      { key: "A", text: "started" },
      { key: "B", text: "was starting" },
      { key: "C", text: "had started" },
      { key: "D", text: "had been starting" }
    ],
    correct: "C",
    explanation: {
      rule: "Thì Quá khứ hoàn thành (Past Perfect)",
      signal: "before the principal came (trước một hành động QK đơn)",
      detail: "Hành động giáo viên bắt đầu bài học đã xảy ra và hoàn tất trước khi thầy hiệu trưởng bước vào lớp -> Dùng Quá khứ hoàn thành: had started."
    }
  },
  {
    id: 18,
    question: "She was nervous because she _____ a presentation in front of the whole class before that day.",
    options: [
      { key: "A", text: "never gave" },
      { key: "B", text: "was never giving" },
      { key: "C", text: "had never given" },
      { key: "D", text: "had never been giving" }
    ],
    correct: "C",
    explanation: {
      rule: "Thì Quá khứ hoàn thành (Past Perfect)",
      signal: "never, before that day (trước ngày hôm đó)",
      detail: "Diễn tả một kinh nghiệm, trải nghiệm chưa từng xảy ra tính đến một thời điểm trong quá khứ. Cấu trúc: S + had never + V3/ed (had never given)."
    }
  },
  {
    id: 19,
    question: "Yesterday morning, the students _____ quietly in the exam room while the teacher _____ around and _____ them.",
    options: [
      { key: "A", text: "wrote, walked, watched" },
      { key: "B", text: "were writing, was walking, watching" },
      { key: "C", text: "had written, walked, was watching" },
      { key: "D", text: "had been writing, walked, watching" }
    ],
    correct: "B",
    explanation: {
      rule: "Thì Quá khứ tiếp diễn (Past Continuous)",
      signal: "Yesterday morning, while",
      detail: "Diễn tả các hành động đang cùng lúc diễn ra trong phòng thi: học sinh đang cặm cụi viết bài (were writing), trong khi giáo viên đang đi lại và quan sát các em (was walking and watching - rút gọn 'was' ở động từ thứ 2 nối bởi 'and')."
    }
  },
  {
    id: 20,
    question: "By the time we _____ the station, the train _____ already, so we had to wait for the next one.",
    options: [
      { key: "A", text: "reached, left" },
      { key: "B", text: "were reaching, was leaving" },
      { key: "C", text: "reached, had left" },
      { key: "D", text: "reach, had been leaving" }
    ],
    correct: "C",
    explanation: {
      rule: "Sự phối hợp thì: By the time + QK đơn, QK hoàn thành",
      signal: "By the time, already, so we had to wait",
      detail: "Hành động chúng tôi đến ga chia ở Quá khứ đơn (reached), còn hành động tàu đã rời đi xảy ra trước đó chia ở Quá khứ hoàn thành (had left)."
    }
  }
];

const FUTURE_TENSES_RAW = [
  {
    id: 1,
    question: "I think people _____ more electric cars in the future.",
    options: [
      { key: "A", text: "are going to use" },
      { key: "B", text: "will use" },
      { key: "C", text: "will have used" },
      { key: "D", text: "use" }
    ],
    correct: "B",
    explanation: {
      rule: "Thì Tương lai đơn (Future Simple: S + will + V-bare)",
      signal: "Cụm từ 'I think' và trạng từ thời gian 'in the future'",
      detail: "Thì tương lai đơn được dùng để diễn tả một dự đoán mang tính quan điểm, suy nghĩ chủ quan của người nói (thường đi kèm 'I think', 'I believe', 'in my opinion') chứ không có bằng chứng hiển hiện ở hiện tại. Do đó, 'will use' là đáp án chính xác."
    }
  },
  {
    id: 2,
    question: "We are late, but do not worry; I _____ the teacher and explain why we are coming after the bell.",
    options: [
      { key: "A", text: "will call" },
      { key: "B", text: "am going to call" },
      { key: "C", text: "will have called" },
      { key: "D", text: "call" }
    ],
    correct: "A",
    explanation: {
      rule: "Thì Tương lai đơn (Future Simple: S + will + V-bare)",
      signal: "Ngữ cảnh quyết định tức thời: 'We are late, but do not worry; I...'",
      detail: "Hành động gọi điện cho giáo viên là quyết định được đưa ra ngay tại thời điểm nói (on-the-spot decision) để giải quyết tình huống phát sinh đột xuất, không hề có kế hoạch từ trước. Do đó dùng 'will call'."
    }
  },
  {
    id: 3,
    question: "The art club _____ on Friday after school, so we need to finish our posters before then.",
    options: [
      { key: "A", text: "will meet" },
      { key: "B", text: "is going to meet" },
      { key: "C", text: "will have met" },
      { key: "D", text: "meets" }
    ],
    correct: "D",
    explanation: {
      rule: "Thì Hiện tại đơn mang ý nghĩa tương lai (Present Simple for timetables/schedules)",
      signal: "Lịch hoạt động cố định: 'on Friday after school'",
      detail: "Thì hiện tại đơn được dùng để diễn tả các sự kiện, hoạt động diễn ra theo lịch trình, thời khóa biểu, chương trình cố định (timetables/schedules). Chủ ngữ 'The art club' là danh từ số ít nên chia động từ 'meets'."
    }
  },
  {
    id: 4,
    question: "Look at the dark clouds over the playground; it _____ very soon, so the match may be canceled.",
    options: [
      { key: "A", text: "will rain" },
      { key: "B", text: "is going to rain" },
      { key: "C", text: "will have rained" },
      { key: "D", text: "rains" }
    ],
    correct: "B",
    explanation: {
      rule: "Thì Tương lai gần (Be going to + V-bare)",
      signal: "Bằng chứng ở hiện tại: 'Look at the dark clouds over the playground'",
      detail: "Cấu trúc 'be going to' được sử dụng để đưa ra dự đoán về một sự việc chắc chắn sẽ xảy ra trong tương lai gần dựa trên bằng chứng, dấu hiệu rõ ràng ở hiện tại (mây đen vần vũ trên bầu trời). Do đó chọn 'is going to rain'."
    }
  },
  {
    id: 5,
    question: "By 10 o’clock tomorrow morning, the workers _____ the road for six hours.",
    options: [
      { key: "A", text: "will repair" },
      { key: "B", text: "are going to repair" },
      { key: "C", text: "will have repaired" },
      { key: "D", text: "will have been repairing" }
    ],
    correct: "D",
    explanation: {
      rule: "Thì Tương lai hoàn thành tiếp diễn (Future Perfect Continuous: S + will have been + V-ing)",
      signal: "Mốc thời gian tương lai 'By 10 o’clock tomorrow morning' kết hợp khoảng thời gian kéo dài 'for six hours'",
      detail: "Thì tương lai hoàn thành tiếp diễn nhấn mạnh khoảng thời gian kéo dài liên tục của một hành động tính tới một thời điểm xác định trong tương lai. Đến 10h sáng mai thì hành động sửa đường đã diễn ra liên tục được 6 tiếng đồng hồ. Cấu trúc: 'will have been repairing'."
    }
  },
  {
    id: 6,
    question: "Watch out! That boy _____ fall off his bicycle if he does not slow down.",
    options: [
      { key: "A", text: "will" },
      { key: "B", text: "is going to" },
      { key: "C", text: "will have" },
      { key: "D", text: "falls" }
    ],
    correct: "B",
    explanation: {
      rule: "Thì Tương lai gần (Be going to + V-bare)",
      signal: "Lời cảnh báo tình huống khẩn cấp trước mắt: 'Watch out!'",
      detail: "Dùng 'be going to' khi dự đoán một tai nạn/sự cố sắp sửa xảy ra ngay trước mắt dựa trên tình huống hiện tại (cậu bé đang chạy xe quá nhanh). Câu đã có sẵn động từ nguyên mẫu 'fall' nên chỗ trống cần điền 'is going to'."
    }
  },
  {
    id: 7,
    question: "By next June, our English teacher _____ at this school for fifteen years.",
    options: [
      { key: "A", text: "will have been working" },
      { key: "B", text: "is going to work" },
      { key: "C", text: "will have worked" },
      { key: "D", text: "will work" }
    ],
    correct: "A",
    explanation: {
      rule: "Thì Tương lai hoàn thành tiếp diễn (Future Perfect Continuous)",
      signal: "Mốc tương lai 'By next June' kết hợp thời lượng 'for fifteen years'",
      detail: "Nhấn mạnh quá trình công tác, giảng dạy liên tục suốt 15 năm tính đến tháng 6 tới và hành động có thể vẫn còn tiếp diễn. Cấu trúc: 'will have been working'. (Lưu ý: 'will have worked' cũng có thể được chấp nhận trong văn cảnh nhấn mạnh vào cột mốc hoàn thành, nhưng dạng tiếp diễn 'will have been working' là lựa chọn tối ưu nhấn mạnh tính liên tục của quá trình)."
    }
  },
  {
    id: 8,
    question: "By the time the teacher _____ our papers tomorrow, I _____ all the questions.",
    options: [
      { key: "A", text: "is going to collect, am going to answer" },
      { key: "B", text: "will collect, will answer" },
      { key: "C", text: "collects, will have answered" },
      { key: "D", text: "will collect, answer" }
    ],
    correct: "C",
    explanation: {
      rule: "Sự phối hợp thì: By the time + S + V(Hiện tại đơn), S + will have + V3/ed (Tương lai hoàn thành)",
      signal: "Mệnh đề trạng ngữ chỉ thời gian với 'By the time ... tomorrow'",
      detail: "Trong mệnh đề thời gian tương lai với 'By the time', ta không dùng 'will' mà dùng thì Hiện tại đơn ('collects'). Mệnh đề chính diễn tả hành động sẽ được hoàn tất trước thời điểm đó nên dùng Tương lai hoàn thành ('will have answered')."
    }
  },
  {
    id: 9,
    question: "By next week, she _____ piano lessons for exactly three years.",
    options: [
      { key: "A", text: "will have been learning" },
      { key: "B", text: "is going to learn" },
      { key: "C", text: "will have learned" },
      { key: "D", text: "will learn" }
    ],
    correct: "A",
    explanation: {
      rule: "Thì Tương lai hoàn thành tiếp diễn (Future Perfect Continuous)",
      signal: "Mốc thời gian 'By next week' kết hợp 'for exactly three years'",
      detail: "Diễn tả hành động học đàn piano đã và đang diễn ra liên tục, tính đến tuần sau là tròn đúng 3 năm. Thì tương lai hoàn thành tiếp diễn 'will have been learning' được dùng để nhấn mạnh tính liên tục của hành động học tập."
    }
  },
  {
    id: 10,
    question: "By the end of this school year, we _____ six novels in English class.",
    options: [
      { key: "A", text: "are going to read" },
      { key: "B", text: "read" },
      { key: "C", text: "will have read" },
      { key: "D", text: "will have been reading" }
    ],
    correct: "C",
    explanation: {
      rule: "Thì Tương lai hoàn thành (Future Perfect: S + will have + V3/ed)",
      signal: "'By the end of this school year' + số lượng kết quả hoàn thành: 'six novels'",
      detail: "Khi nói về kết quả hoàn thành của một số lượng tác phẩm, thành phẩm cụ thể (đã đọc xong 6 cuốn tiểu thuyết) trước một thời điểm trong tương lai, ta dùng Tương lai hoàn thành ('will have read'), không dùng thì tiếp diễn."
    }
  },
  {
    id: 11,
    question: "I am sure Lisa _____ the spelling competition because she has prepared very carefully for it.",
    options: [
      { key: "A", text: "is going to win" },
      { key: "B", text: "wins" },
      { key: "C", text: "will win" },
      { key: "D", text: "will have been winning" }
    ],
    correct: "C",
    explanation: {
      rule: "Thì Tương lai đơn (Future Simple: S + will + V-bare)",
      signal: "Cụm từ chỉ niềm tin/sự tin tưởng cá nhân: 'I am sure'",
      detail: "Dùng thì tương lai đơn 'will win' sau các cụm từ diễn tả niềm tin, dự đoán chủ quan như 'I am sure', 'I believe', 'I hope'. Mặc dù có vế giải thích sự chuẩn bị kỹ càng, nhận định ai chiến thắng trong một cuộc thi vẫn mang tính dự đoán và niềm tin của người nói."
    }
  },
  {
    id: 12,
    question: "We have already bought the paint and brushes, so we _____ our classroom this Saturday morning.",
    options: [
      { key: "A", text: "will decorate" },
      { key: "B", text: "decorate" },
      { key: "C", text: "will have decorated" },
      { key: "D", text: "are going to decorate" }
    ],
    correct: "D",
    explanation: {
      rule: "Thì Tương lai gần (Be going to + V-bare)",
      signal: "Hành động đã được chuẩn bị, lên kế hoạch từ trước: 'have already bought the paint and brushes'",
      detail: "Hành động sơn trang trí lớp học đã có ý định và đã được chuẩn bị vật dụng (mua sơn và cọ quét) từ trước khi nói, do đó dùng 'are going to decorate' để chỉ kế hoạch/dự định đã định sẵn."
    }
  },
  {
    id: 13,
    question: "By 8 o’clock tonight, my father _____ for five hours to finish the report.",
    options: [
      { key: "A", text: "will work" },
      { key: "B", text: "is going to work" },
      { key: "C", text: "will have worked" },
      { key: "D", text: "will have been working" }
    ],
    correct: "D",
    explanation: {
      rule: "Thì Tương lai hoàn thành tiếp diễn (Future Perfect Continuous)",
      signal: "Mốc thời gian 'By 8 o’clock tonight' + khoảng thời gian 'for five hours'",
      detail: "Nhấn mạnh hành động làm việc kéo dài liên tục suốt 5 tiếng đồng hồ tính tới mốc 8 giờ tối nay. Cấu trúc chuẩn: 'will have been working'."
    }
  },
  {
    id: 14,
    question: "By the end of this month, my brother _____ all the pages of his history project.",
    options: [
      { key: "A", text: "is going to finish" },
      { key: "B", text: "finishes" },
      { key: "C", text: "will have finished" },
      { key: "D", text: "have been finishing" }
    ],
    correct: "C",
    explanation: {
      rule: "Thì Tương lai hoàn thành (Future Perfect: S + will have + V3/ed)",
      signal: "'By the end of this month' + kết quả trọn vẹn 'all the pages'",
      detail: "Thì Tương lai hoàn thành được dùng để diễn tả một hành động sẽ hoàn tất trước một thời điểm xác định trong tương lai (cuối tháng này anh tôi sẽ hoàn thành xong tất cả các trang của dự án lịch sử). Đáp án: 'will have finished'."
    }
  },
  {
    id: 15,
    question: "The school bus _____ at 6:30 tomorrow morning, so please be ready on time.",
    options: [
      { key: "A", text: "will leave" },
      { key: "B", text: "is going to leave" },
      { key: "C", text: "will have left" },
      { key: "D", text: "leaves" }
    ],
    correct: "D",
    explanation: {
      rule: "Thì Hiện tại đơn mang ý nghĩa tương lai (Present Simple for timetables)",
      signal: "Lịch trình phương tiện giao thông công cộng: 'The school bus ... at 6:30 tomorrow morning'",
      detail: "Lịch trình chạy của xe buýt trường học là giờ giấc cố định theo thời gian biểu công cộng. Với lịch trình tàu xe máy bay xe buýt cố định, tiếng Anh luôn dùng thì Hiện tại đơn ('leaves')."
    }
  },
  {
    id: 16,
    question: "I promise I _____ your secret to anyone in the class.",
    options: [
      { key: "A", text: "am not going to tell" },
      { key: "B", text: "do not tell" },
      { key: "C", text: "will not have told" },
      { key: "D", text: "will not tell" }
    ],
    correct: "D",
    explanation: {
      rule: "Thì Tương lai đơn (Future Simple: will / will not + V-bare)",
      signal: "Lời hứa: 'I promise'",
      detail: "Thì tương lai đơn 'will / will not' là cấu trúc chuẩn ngữ pháp đi kèm lời hứa hẹn (promises). Do đó 'I promise I will not tell your secret...' là phương án chính xác."
    }
  },
  {
    id: 17,
    question: "I think I _____ you with your science homework after I finish my own work.",
    options: [
      { key: "A", text: "will help" },
      { key: "B", text: "am going to help" },
      { key: "C", text: "will have helped" },
      { key: "D", text: "help" }
    ],
    correct: "A",
    explanation: {
      rule: "Thì Tương lai đơn (Future Simple: will + V-bare)",
      signal: "Lời đề nghị giúp đỡ + 'I think'",
      detail: "Dùng 'will help' vừa thể hiện suy nghĩ chủ quan ('I think'), vừa là lời đề nghị/ý định giúp đỡ được nảy ra tức thời khi nói, sau khi bản thân làm xong bài tập."
    }
  },
  {
    id: 18,
    question: "Be careful with that glass bowl; you _____ it if you run so fast.",
    options: [
      { key: "A", text: "are going to break" },
      { key: "B", text: "will break" },
      { key: "C", text: "will have broken" },
      { key: "D", text: "break" }
    ],
    correct: "A",
    explanation: {
      rule: "Thì Tương lai gần (Be going to + V-bare)",
      signal: "Cảnh báo trước hành vi nguy hiểm hiển hiện: 'Be careful with that glass bowl ... if you run so fast'",
      detail: "Lời cảnh báo trước một nguy cơ đổ vỡ sắp sửa xảy ra do hành động chạy quá nhanh đang diễn ra trước mắt dùng 'are going to break' để nhấn mạnh hậu quả tức thì dựa trên bằng chứng thực tế. (Lưu ý: Trong câu điều kiện loại 1 thuần lý thuyết, 'will break' cũng có thể được dùng, nhưng trong tình huống cảnh báo trực tiếp với mệnh lệnh 'Be careful!', 'are going to break' thể hiện đúng nhất sắc thái ngôn ngữ thực tế)."
    }
  },
  {
    id: 19,
    question: "The train to the city center _____ at 9:15 tomorrow morning according to the timetable.",
    options: [
      { key: "A", text: "will leave" },
      { key: "B", text: "is going to leave" },
      { key: "C", text: "will have left" },
      { key: "D", text: "leaves" }
    ],
    correct: "D",
    explanation: {
      rule: "Thì Hiện tại đơn mang ý nghĩa tương lai (Present Simple for scheduled events)",
      signal: "Dấu hiệu rõ ràng: 'according to the timetable' (theo lịch trình/thời gian biểu)",
      detail: "Các sự kiện diễn ra theo thời khóa biểu hoặc lịch trình chính thức đã in sẵn (chuyến tàu, chuyến bay, lịch họp) luôn dùng thì Hiện tại đơn. Chủ ngữ 'The train' ngôi thứ ba số ít nên động từ thêm 's': 'leaves'."
    }
  },
  {
    id: 20,
    question: "They have saved enough money, so they _____ a new computer for their son next week.",
    options: [
      { key: "A", buy: "buy", text: "buy" },
      { key: "B", text: "will buy" },
      { key: "C", text: "will have bought" },
      { key: "D", text: "are going to buy" }
    ],
    correct: "D",
    explanation: {
      rule: "Thì Tương lai gần (Be going to + V-bare)",
      signal: "Sự chuẩn bị tài chính và kế hoạch từ trước: 'They have saved enough money ... next week'",
      detail: "Họ đã tiết kiệm đủ tiền nhằm phục vụ cho mục đích mua máy tính cho con trai vào tuần tới. Đây là một kế hoạch/dự định đã được tính toán và chuẩn bị từ trước, do đó sử dụng cấu trúc 'are going to buy'."
    }
  }
];

const VERB_PATTERNS_RAW = [
    {
        id: 1,
        question: "I remember _____ this book when I was in primary school.",
        options: [
            { key: "A", text: "to read" },
            { key: "B", text: "read" },
            { key: "C", text: "reading" },
            { key: "D", text: "reads" }
        ],
        answer: "C",
        pattern: "remember + V-ing",
        category: "Remember / Forget / Regret",
        explanation: "Cấu trúc <strong>remember + V-ing</strong>: nhớ đã làm gì trong quá khứ. Trong câu có mốc thời gian <em>'when I was in primary school'</em> (khi tôi còn học tiểu học) là việc đã xảy ra, nên dùng danh động từ <strong>reading</strong>.<br><small>• Phân biệt: <strong>remember + to-V</strong>: nhớ phải làm gì (nhiệm vụ, bổn phận chưa làm hoặc sắp làm).</small>",
        translation: "Tôi nhớ là mình đã đọc cuốn sách này khi còn học tiểu học."
    },
    {
        id: 2,
        question: "After explaining the rules, the teacher went on _____ the first activity.",
        options: [
            { key: "A", text: "to introduce" },
            { key: "B", text: "introducing" },
            { key: "C", text: "introduce" },
            { key: "D", text: "introduced" }
        ],
        answer: "A",
        pattern: "go on + to-V",
        category: "Go on to-V vs V-ing",
        explanation: "Cấu trúc <strong>go on + to-V</strong>: tiếp tục làm một việc mới / chuyển sang hành động tiếp theo sau khi hoàn thành hành động trước. Giáo viên giải thích luật xong rồi chuyển sang giới thiệu hoạt động đầu tiên -> chọn <strong>to introduce</strong>.<br><small>• Phân biệt: <strong>go on + V-ing</strong>: tiếp tục duy trì công việc/hành động đang làm dở.</small>",
        translation: "Sau khi giải thích luật xong, giáo viên tiếp tục giới thiệu hoạt động đầu tiên."
    },
    {
        id: 3,
        question: "This old chair needs _____ before anyone sits on it.",
        options: [
            { key: "A", text: "repair" },
            { key: "B", text: "to repairing" },
            { key: "C", text: "repaired" },
            { key: "D", text: "repairing" }
        ],
        answer: "D",
        pattern: "need + V-ing (Bị động)",
        category: "Need + V-ing / to be V3",
        explanation: "Khi chủ ngữ là vật (<em>This old chair</em> - chiếc ghế cũ), cấu trúc <strong>need + V-ing</strong> mang ý nghĩa bị động: 'cần được làm gì' (= <em>need to be repaired</em>). Do đó đáp án chính xác là <strong>repairing</strong>.",
        translation: "Chiếc ghế cũ này cần được sửa chữa trước khi có ai ngồi lên nó."
    },
    {
        id: 4,
        question: "They decided _____ a new apartment near the university.",
        options: [
            { key: "A", text: "move" },
            { key: "B", text: "moving" },
            { key: "C", text: "to move" },
            { key: "D", text: "have moved" }
        ],
        answer: "C",
        pattern: "decide + to-V",
        category: "Verb + to-Infinitive",
        explanation: "Động từ <strong>decide</strong> luôn đi kèm với động từ nguyên mẫu có 'to' (To-infinitive): <strong>decide + to-V</strong> (quyết định làm gì). Vì vậy đáp án đúng là <strong>to move</strong>.",
        translation: "Họ quyết định chuyển đến một căn hộ mới gần trường đại học."
    },
    {
        id: 5,
        question: "Please remind me _____ the report before Friday.",
        options: [
            { key: "A", text: "to send" },
            { key: "B", text: "sending" },
            { key: "C", text: "will send" },
            { key: "D", text: "sent" }
        ],
        answer: "A",
        pattern: "remind sb + to-V",
        category: "Verb + Object + to-V",
        explanation: "Cấu trúc: <strong>remind someone + to-V</strong>: nhắc nhở ai đó làm việc gì. Trong câu này có tân ngữ <em>'me'</em> -> chọn <strong>to send</strong>.",
        translation: "Làm ơn nhắc tôi gửi báo cáo trước thứ Sáu nhé."
    },
    {
        id: 6,
        question: "The police warned the drivers _____ too fast in the rain.",
        options: [
            { key: "A", text: "not driving" },
            { key: "B", text: "not to drive" },
            { key: "C", text: "do not drive" },
            { key: "D", text: "not drive" }
        ],
        answer: "B",
        pattern: "warn sb + (not) to-V",
        category: "Verb + Object + to-V",
        explanation: "Cấu trúc cảnh báo: <strong>warn someone + (not) to-V</strong> (cảnh báo ai không được làm gì). Do đó dạng phủ định chính xác là <strong>not to drive</strong>.",
        translation: "Cảnh sát đã cảnh báo các tài xế không được lái xe quá nhanh dưới trời mưa."
    },
    {
        id: 7,
        question: "I prefer _____ at home rather than go out tonight.",
        options: [
            { key: "A", text: "stay" },
            { key: "B", text: "staying" },
            { key: "C", text: "to stay" },
            { key: "D", text: "stayed" }
        ],
        answer: "C",
        pattern: "prefer + to-V rather than",
        category: "Prefer / Would rather",
        explanation: "Cấu trúc so sánh sở thích: <strong>prefer + to-V + rather than + (bare-V)</strong> (thích làm gì hơn làm gì). Vế sau có <em>'rather than go out'</em> nên vế trước bắt buộc phải dùng <strong>to stay</strong>.<br><small>• So sánh với cấu trúc: <strong>prefer V-ing to V-ing</strong> (ví dụ: prefer staying to going out).</small>",
        translation: "Tối nay tôi thích ở nhà hơn là đi ra ngoài chơi."
    },
    {
        id: 8,
        question: "I can’t stand _____ to loud music while I’m studying.",
        options: [
            { key: "A", text: "listen" },
            { key: "B", text: "listened" },
            { key: "C", text: "listening" },
            { key: "D", text: "to listen" }
        ],
        answer: "C",
        pattern: "can't stand + V-ing",
        category: "Verb + Gerund",
        explanation: "Thành ngữ biểu đạt cảm xúc: <strong>can't stand / can't bear + V-ing</strong>: không thể chịu đựng được việc gì. Do đó sau <em>'can’t stand'</em> ta dùng danh động từ <strong>listening</strong>.",
        translation: "Tôi không thể chịu nổi việc nghe nhạc quá to trong lúc đang học bài."
    },
    {
        id: 9,
        question: "He stopped _____ his phone when the teacher entered the room.",
        options: [
            { key: "A", text: "using" },
            { key: "B", text: "to use" },
            { key: "C", text: "used" },
            { key: "D", text: "use" }
        ],
        answer: "A",
        pattern: "stop + V-ing",
        category: "Stop to-V vs V-ing",
        explanation: "Cấu trúc <strong>stop + V-ing</strong>: dừng hẳn hành động đang diễn ra. Khi giáo viên bước vào phòng, bạn ấy dừng hẳn việc bấm điện thoại lại -> dùng <strong>using</strong>.<br><small>• Phân biệt: <strong>stop + to-V</strong>: dừng lại để làm một việc khác (ví dụ: stop to talk: dừng lại để nói chuyện).</small>",
        translation: "Cậu ấy đã ngừng sử dụng điện thoại khi giáo viên bước vào lớp."
    },
    {
        id: 10,
        question: "You should avoid _____ too much coffee before bedtime.",
        options: [
            { key: "A", text: "drinking" },
            { key: "B", text: "drink" },
            { key: "C", text: "to drink" },
            { key: "D", text: "drunk" }
        ],
        answer: "A",
        pattern: "avoid + V-ing",
        category: "Verb + Gerund",
        explanation: "Động từ <strong>avoid</strong> (tránh, né tránh) luôn luôn theo sau bởi danh động từ: <strong>avoid + V-ing</strong>. Do đó đáp án đúng là <strong>drinking</strong>.",
        translation: "Bạn nên tránh uống quá nhiều cà phê trước giờ đi ngủ."
    },
    {
        id: 11,
        question: "Her parents expect her _____ good results in the final exam.",
        options: [
            { key: "A", text: "gets" },
            { key: "B", text: "getting" },
            { key: "C", text: "to get" },
            { key: "D", text: "got" }
        ],
        answer: "C",
        pattern: "expect sb + to-V",
        category: "Verb + Object + to-V",
        explanation: "Cấu trúc mong đợi: <strong>expect someone + to-V</strong>: mong đợi/kỳ vọng ai làm điều gì. Với tân ngữ <em>'her'</em>, ta chọn <strong>to get</strong>.",
        translation: "Bố mẹ cô ấy kỳ vọng cô ấy sẽ đạt kết quả tốt trong kỳ thi cuối kỳ."
    },
    {
        id: 12,
        question: "He insisted on _____ for everyone’s dinner after the graduation ceremony.",
        options: [
            { key: "A", text: "pay" },
            { key: "B", text: "paid" },
            { key: "C", text: "to pay" },
            { key: "D", text: "paying" }
        ],
        answer: "D",
        pattern: "insist on + V-ing",
        category: "Preposition + V-ing",
        explanation: "Sau giới từ (ở đây là giới từ <strong>on</strong>), động từ bắt buộc phải ở dạng Danh động từ (<strong>V-ing</strong>). Cụm động từ: <strong>insist on + V-ing</strong> (khăng khăng, nằng nặc đòi làm gì) -> chọn <strong>paying</strong>.",
        translation: "Anh ấy khăng khăng đòi trả tiền bữa tối cho mọi người sau lễ tốt nghiệp."
    },
    {
        id: 13,
        question: "She tried _____ the heavy classroom window, but it was completely stuck.",
        options: [
            { key: "A", text: "to open" },
            { key: "B", text: "open" },
            { key: "C", text: "opening" },
            { key: "D", text: "opened" }
        ],
        answer: "A",
        pattern: "try + to-V",
        category: "Try to-V vs V-ing",
        explanation: "Cấu trúc <strong>try + to-V</strong>: nỗ lực, cố gắng làm việc khó khăn. Ngữ cảnh câu: <em>'the heavy classroom window, but it was completely stuck'</em> (cửa sổ nặng và bị kẹt hoàn toàn) thể hiện sự nỗ lực mở trong hoàn cảnh khó khăn -> chọn <strong>to open</strong>.<br><small>• Phân biệt: <strong>try + V-ing</strong>: thử làm một phương pháp/thử nghiệm xem có hiệu quả không.</small>",
        translation: "Cô ấy đã cố gắng mở chiếc cửa sổ lớp học nặng nề, nhưng nó đã bị kẹt cứng hoàn toàn."
    },
    {
        id: 14,
        question: "I dislike _____ what to do without any reason.",
        options: [
            { key: "A", text: "telling" },
            { key: "B", text: "to tell" },
            { key: "C", text: "told" },
            { key: "D", text: "being told" }
        ],
        answer: "D",
        pattern: "dislike + being V3/ed (Bị động)",
        category: "Passive Gerund",
        explanation: "Động từ <strong>dislike + V-ing</strong> (ghét làm gì). Tuy nhiên, về mặt ý nghĩa, người nói 'ghét <em>bị/được</em> người khác sai bảo phải làm gì' (thể bị động). Bị động của V-ing là <strong>being + V3/ed</strong> -> chọn <strong>being told</strong>.",
        translation: "Tôi ghét bị sai bảo phải làm gì mà không có bất kỳ lý do nào."
    },
    {
        id: 15,
        question: "They like _____ for their hard work and achievements.",
        options: [
            { key: "A", text: "recognized" },
            { key: "B", text: "to recognize" },
            { key: "C", text: "being recognized" },
            { key: "D", text: "recognizing" }
        ],
        answer: "C",
        pattern: "like + being V3/ed (Bị động)",
        category: "Passive Gerund",
        explanation: "Chủ ngữ <em>'They'</em> muốn được người khác công nhận (ý bị động: được ghi nhận/khen thưởng). Cấu trúc bị động danh động từ: <strong>like + being + V3/ed</strong> -> chọn <strong>being recognized</strong>.",
        translation: "Họ thích được công nhận vì sự chăm chỉ và những thành tích của mình."
    },
    {
        id: 16,
        question: "The sudden loud noise made the frightened baby _____ loudly for several minutes.",
        options: [
            { key: "A", text: "cried" },
            { key: "B", text: "cry" },
            { key: "C", text: "to cry" },
            { key: "D", text: "crying" }
        ],
        answer: "B",
        pattern: "make sb + bare-V",
        category: "Causative Verbs",
        explanation: "Cấu trúc sai khiến / nguyên nhân: <strong>make someone + V (nguyên mẫu không 'to')</strong>: khiến ai đó làm gì. Do đó sau <em>'the frightened baby'</em> ta điền động từ nguyên thể <strong>cry</strong>.",
        translation: "Tiếng ồn lớn đột ngột đã khiến em bé sợ hãi khóc thét lên trong vài phút."
    },
    {
        id: 17,
        question: "I expect ______ to the meeting by the manager soon.",
        options: [
            { key: "A", text: "inviting" },
            { key: "B", text: "to invite" },
            { key: "C", text: "invited" },
            { key: "D", text: "to be invited" }
        ],
        answer: "D",
        pattern: "expect + to be V3/ed (Bị động)",
        category: "Passive Infinitive",
        explanation: "Cấu trúc thông thường: <strong>expect + to-V</strong>. Tuy nhiên trong câu có tác nhân <em>'by the manager'</em> (bởi người quản lý) chỉ thể bị động ('được mời'). Bị động của To-infinitive là <strong>to be + V3/ed</strong> -> chọn <strong>to be invited</strong>.",
        translation: "Tôi hy vọng sẽ sớm được người quản lý mời tham dự cuộc họp."
    },
    {
        id: 18,
        question: "He can't stand _____ for something he didn't do.",
        options: [
            { key: "A", text: "blaming" },
            { key: "B", text: "to blame" },
            { key: "C", text: "being blamed" },
            { key: "D", text: "blamed" }
        ],
        answer: "C",
        pattern: "can't stand + being V3/ed (Bị động)",
        category: "Passive Gerund",
        explanation: "Cấu trúc: <strong>can't stand + V-ing</strong> (không chịu nổi điều gì). Về ngữ nghĩa, anh ấy 'không chịu nổi việc <em>bị đổ lỗi</em>' (bị động). Dạng bị động của V-ing là <strong>being + V3/ed</strong> -> chọn <strong>being blamed</strong>.",
        translation: "Anh ấy không thể chịu nổi việc bị đổ lỗi cho điều mà mình không hề làm."
    },
    {
        id: 19,
        question: "They avoid ______ by the staff while working in the office.",
        options: [
            { key: "A", text: "disturb" },
            { key: "B", text: "disturbing" },
            { key: "C", text: "being disturbed" },
            { key: "D", text: "to disturb" }
        ],
        answer: "C",
        pattern: "avoid + being V3/ed (Bị động)",
        category: "Passive Gerund",
        explanation: "Cấu trúc: <strong>avoid + V-ing</strong> (tránh điều gì). Trong câu có cụm <em>'by the staff'</em> chỉ nghĩa bị động: 'tránh bị làm phiền' -> chuyển V-ing sang dạng bị động <strong>being + V3/ed</strong> -> chọn <strong>being disturbed</strong>.",
        translation: "Họ tránh bị nhân viên làm phiền khi đang làm việc trong văn phòng."
    },
    {
        id: 20,
        question: "I can't stand _____ during important tasks or meetings.",
        options: [
            { key: "A", text: "being interrupted" },
            { key: "B", text: "interrupting" },
            { key: "C", text: "to be interrupted" },
            { key: "D", text: "to interrupt" }
        ],
        answer: "A",
        pattern: "can't stand + being V3/ed (Bị động)",
        category: "Passive Gerund",
        explanation: "Cấu trúc: <strong>can't stand + V-ing</strong>. Ý của câu là 'không thể chịu nổi khi <em>bị ngắt lời / làm gián đoạn</em>' (thể bị động) trong lúc làm nhiệm vụ hay họp hành -> sử dụng <strong>being interrupted</strong>.",
        translation: "Tôi không thể chịu nổi việc bị cắt ngang/làm phiền trong các cuộc họp hoặc công việc quan trọng."
    }
];


// Chuan hoa cau hoi ve cung mot schema
function normalizeItem(q, topicId, topicName, topicNameVi, globalId) {
  var correctAns = q.correct || q.correctAnswer || q.answer;
  var explanationText = "";
  var ruleText = "";
  var signalText = "";
  var translationText = q.translation || "";

  if (typeof q.explanation === "string") {
    explanationText = q.explanation;
  } else if (q.explanation && typeof q.explanation === "object") {
    ruleText = q.explanation.rule || "";
    signalText = q.explanation.signal || "";
    explanationText = q.explanation.detail || "";
  }
  
  if (q.pattern) {
    ruleText = ruleText ? (ruleText + " | " + q.pattern) : q.pattern;
  }
  if (q.tense) {
    ruleText = ruleText ? (ruleText + " | " + q.tense) : q.tense;
  }
  if (q.category && !ruleText) {
    ruleText = q.category;
  }

  // Chuan hoa options thanh mang 4 phan tu { key: 'A', text: '...' }
  var formattedOptions = [];
  if (Array.isArray(q.options)) {
    formattedOptions = q.options.map(function(opt) {
      return {
        key: opt.key,
        text: (opt.text !== undefined ? opt.text : (opt.buy !== undefined ? opt.buy : "")).trim()
      };
    });
  } else if (typeof q.options === "object") {
    ['A', 'B', 'C', 'D'].forEach(function(k) {
      if (q.options[k] !== undefined) {
        formattedOptions.push({ key: k, text: String(q.options[k]).trim() });
      }
    });
  }

  return {
    id: globalId,
    originalId: q.id,
    topicId: topicId,
    topicName: topicName,
    topicNameVi: topicNameVi,
    question: q.question,
    options: formattedOptions,
    correct: correctAns ? correctAns.trim().toUpperCase() : "A",
    rule: ruleText,
    signal: signalText,
    explanation: explanationText,
    translation: translationText
  };
}

// 80 cau hoi tong hop duoc chuan hoa
const ALL_QUESTIONS_BANK = [
  ...PRESENT_TENSES_RAW.map((q, idx) => normalizeItem(q, 'present', 'Present Tenses', 'ThÃ¬ Hiá»‡n táº¡i', idx + 1)),
  ...PAST_TENSES_RAW.map((q, idx) => normalizeItem(q, 'past', 'Past Tenses', 'ThÃ¬ QuÃ¡ khá»©', idx + 21)),
  ...FUTURE_TENSES_RAW.map((q, idx) => normalizeItem(q, 'future', 'Future Tenses', 'ThÃ¬ TÆ°Æ¡ng lai', idx + 41)),
  ...VERB_PATTERNS_RAW.map((q, idx) => normalizeItem(q, 'verb_pattern', 'Verb Patterns', 'Dáº¡ng Ä‘á»™ng tá»«', idx + 61))
];

// Nhom theo chu de de de dang chon ngau nhien can bang 10 cau moi chu de (10 x 4 = 40 cau)
const QUESTIONS_BY_TOPIC = {
  present: ALL_QUESTIONS_BANK.filter(q => q.topicId === 'present'),
  past: ALL_QUESTIONS_BANK.filter(q => q.topicId === 'past'),
  future: ALL_QUESTIONS_BANK.filter(q => q.topicId === 'future'),
  verb_pattern: ALL_QUESTIONS_BANK.filter(q => q.topicId === 'verb_pattern')
};

/**
 * Ham tao bo de 40 cau hoi ngau nhien:
 * - Lay 10 cau tu Present Tenses (trong 20 cau)
 * - Lay 10 cau tu Past Tenses (trong 20 cau)
 * - Lay 10 cau tu Future Tenses (trong 20 cau)
 * - Lay 10 cau tu Verb Patterns (trong 20 cau)
 * - Xao tron thu tu ngau nhien (Fisher-Yates Shuffle)
 * - Danh lai so thu tu 1 den 40
 */
function generateRandom40Quiz() {
  function sampleRandom(arr, count) {
    const copy = [...arr];
    // Fisher-Yates shuffle
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, count);
  }

  const selectedPresent = sampleRandom(QUESTIONS_BY_TOPIC.present, 10);
  const selectedPast = sampleRandom(QUESTIONS_BY_TOPIC.past, 10);
  const selectedFuture = sampleRandom(QUESTIONS_BY_TOPIC.future, 10);
  const selectedVerb = sampleRandom(QUESTIONS_BY_TOPIC.verb_pattern, 10);

  const combined = [...selectedPresent, ...selectedPast, ...selectedFuture, ...selectedVerb];
  
  // Xao tron toan bo 40 cau
  const shuffled40 = sampleRandom(combined, combined.length);

  // Gan stt 1..40 cho bai thi
  return shuffled40.map((q, index) => {
    return {
      ...q,
      quizNumber: index + 1
    };
  });
}