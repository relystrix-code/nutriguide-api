import type { VercelRequest, VercelResponse } from "@vercel/node";

const articles = [
  {
    id: "thWZLx9cg7BIwJ-P",
    category: "Nutrisi",
    date: "2024-12-01",
    title: "Manfaat Vitamin C untuk Kesehatan Tubuh",
    picture: "https://nutriguide-api.vercel.app/images/article-vitamin-c.webp",
    headerText:
      "Vitamin C adalah nutrisi esensial yang sangat berperan dalam menjaga kesehatan tubuh secara keseluruhan. Selain itu, vitamin ini juga berfungsi penting dalam memperkuat sistem kekebalan tubuh, membantu tubuh dalam melawan berbagai infeksi, serta mempercepat proses pemulihan.",
    sectionSubtitle1: "1. Mendukung Sistem Kekebalan",
    sectionText1:
      "Vitamin C memiliki peran besar dalam membantu tubuh melawan berbagai infeksi, salah satunya dengan meningkatkan produksi dan fungsi sel darah putih. Sel darah putih merupakan bagian utama dari sistem kekebalan tubuh yang berfungsi untuk mendeteksi dan menghancurkan mikroorganisme penyebab penyakit. Oleh karena itu, konsumsi vitamin C yang cukup sangat diperlukan agar tubuh dapat berfungsi dengan optimal dalam mempertahankan daya tahan tubuh.",
    sectionSubtitle2: "2. Menjaga Kesehatan Kulit",
    sectionText2:
      "Vitamin C juga berperan penting dalam produksi kolagen, yaitu protein yang memberi elastisitas dan kekuatan pada kulit. Dengan cukupnya kolagen, kulit akan terlihat lebih kencang dan sehat. Selain itu, vitamin C juga membantu melindungi kulit dari kerusakan akibat paparan sinar matahari dan polusi, yang dapat menyebabkan penuaan dini. Dengan demikian, vitamin C memiliki manfaat ganda dalam menjaga kesehatan kulit.",
    sectionSubtitle3: "3. Mengurangi Risiko Penyakit Kronis",
    sectionText3:
      "Sebagai antioksidan yang kuat, vitamin C membantu melawan radikal bebas yang dapat merusak sel-sel tubuh dan berkontribusi pada perkembangan berbagai penyakit kronis, seperti penyakit jantung dan diabetes. Dengan mengonsumsi vitamin C secara teratur, kita dapat mengurangi risiko terkena penyakit-penyakit tersebut, sekaligus menjaga tubuh tetap sehat dan bugar dalam jangka panjang.",
    footerText:
      "Pastikan Anda mengonsumsi vitamin C secara teratur agar tubuh Anda tetap sehat dan terlindungi dari berbagai ancaman kesehatan. Vitamin C dapat ditemukan dalam berbagai sumber makanan, seperti jeruk, kiwi, dan paprika.",
  },
  {
    id: "mnRuVeKfFiOy6tqC",
    category: "Nutrisi",
    date: "2024-12-02",
    title: "Pentingnya Serat dalam Pola Makan Sehari-hari",
    picture: "https://nutriguide-api.vercel.app/images/article-fiber.webp",
    headerText:
      "Serat adalah komponen nutrisi yang sangat penting dalam pola makan yang sehat, karena berperan besar dalam mendukung pencernaan yang lancar dan menjaga kesehatan tubuh secara keseluruhan. Selain itu, serat juga membantu mengatur kadar gula darah dan mengurangi risiko terkena beberapa penyakit kronis.",
    sectionSubtitle1: "1. Meningkatkan Kesehatan Pencernaan",
    sectionText1:
      "Serat sangat bermanfaat untuk meningkatkan kesehatan pencernaan, terutama dengan mencegah sembelit dan menjaga keseimbangan mikroflora usus. Dengan memperlancar proses pencernaan, serat membantu tubuh untuk menyerap nutrisi dengan lebih efisien. Ini juga berperan dalam menjaga kesehatan usus besar, sehingga meminimalkan risiko gangguan pencernaan dan penyakit usus.",
    sectionSubtitle2: "2. Membantu Menurunkan Berat Badan",
    sectionText2:
      "Serat memiliki kemampuan untuk memberikan rasa kenyang lebih lama, sehingga dapat membantu dalam mengontrol nafsu makan. Dengan mengonsumsi makanan yang kaya serat, kita cenderung makan lebih sedikit, yang pada gilirannya dapat mendukung upaya penurunan berat badan. Selain itu, serat juga berperan dalam mengatur proses metabolisme tubuh, yang mendukung program diet yang sehat.",
    sectionSubtitle3: "3. Mengurangi Risiko Penyakit Jantung",
    sectionText3:
      "Konsumsi serat yang cukup dapat membantu menurunkan kadar kolesterol jahat (LDL) dalam tubuh. Kolesterol yang tinggi dapat meningkatkan risiko terkena penyakit jantung dan stroke. Serat larut dalam air bekerja dengan cara mengikat kolesterol dalam pencernaan dan membawanya keluar dari tubuh, sehingga mengurangi beban pada jantung dan pembuluh darah.",
    footerText:
      "Untuk menjaga kesehatan pencernaan dan mengurangi risiko penyakit, pastikan pola makan Anda kaya akan makanan yang tinggi serat seperti buah-buahan, sayur-sayuran, dan biji-bijian. Mengonsumsi serat setiap hari akan memberikan banyak manfaat bagi kesehatan tubuh Anda.",
  },
  {
    id: "E3lUFEjANI8maKCP",
    category: "Nutrisi",
    date: "2024-12-03",
    title: "Rahasia Hidratasi: Manfaat Air untuk Tubuh",
    picture: "https://nutriguide-api.vercel.app/images/article-hydration.webp",
    headerText:
      "Air adalah elemen yang sangat vital bagi tubuh manusia. Tidak hanya penting untuk mengatur suhu tubuh, tetapi air juga berperan dalam mendukung berbagai fungsi organ tubuh yang esensial, seperti ginjal, jantung, dan otak. Tanpa asupan air yang cukup, tubuh kita tidak akan dapat berfungsi dengan optimal.",
    sectionSubtitle1: "1. Menjaga Suhu Tubuh",
    sectionText1:
      "Air membantu tubuh dalam mengatur suhu secara efisien, baik itu saat cuaca panas maupun setelah beraktivitas fisik. Proses berkeringat dan penguapan melalui kulit membantu tubuh untuk tetap sejuk, mencegah terjadinya overheating yang berbahaya. Dengan cukupnya asupan cairan, tubuh akan mampu mempertahankan suhu yang ideal agar berbagai fungsi tubuh berjalan dengan baik.",
    sectionSubtitle2: "2. Mendukung Fungsi Organ",
    sectionText2:
      "Asupan air yang cukup sangat penting untuk menjaga kesehatan organ tubuh utama, seperti ginjal, jantung, dan otak. Air membantu ginjal dalam menyaring racun dan limbah dari darah, sementara otak membutuhkan hidrasi untuk mempertahankan fungsi kognitif dan konsentrasi yang optimal. Selain itu, tubuh yang terhidrasi dengan baik dapat lebih mudah mengatur tekanan darah dan metabolisme tubuh secara keseluruhan.",
    sectionSubtitle3: "3. Meningkatkan Energi dan Konsentrasi",
    sectionText3:
      "Dehidrasi dapat menyebabkan berbagai masalah kesehatan, termasuk kelelahan dan penurunan konsentrasi. Dengan cukupnya cairan dalam tubuh, energi akan terjaga dan kemampuan untuk berkonsentrasi akan meningkat. Oleh karena itu, sangat penting untuk memastikan tubuh terhidrasi dengan baik sepanjang hari agar tetap bugar dan fokus dalam beraktivitas.",
    footerText:
      "Minumlah setidaknya 8 gelas air setiap hari untuk menjaga tubuh tetap sehat, terhidrasi, dan bugar. Jangan tunggu rasa haus, karena itu sudah menjadi tanda tubuh Anda membutuhkan cairan.",
  },
  {
    id: "I0r0I5w_ect0tzWD",
    category: "Kesehatan",
    date: "2024-12-01",
    title: "Pentingnya Tidur Berkualitas untuk Tubuh",
    picture: "https://nutriguide-api.vercel.app/images/article-sleep.webp",
    headerText:
      "Tidur yang cukup dan berkualitas merupakan fondasi penting untuk menjaga kesehatan fisik dan mental kita. Selain memberikan tubuh waktu untuk pemulihan, tidur juga mempengaruhi kemampuan tubuh untuk berfungsi dengan optimal sepanjang hari.",
    sectionSubtitle1: "1. Meningkatkan Sistem Kekebalan Tubuh",
    sectionText1:
      "Tidur yang cukup memberi kesempatan bagi tubuh untuk memproduksi sel-sel kekebalan yang penting dalam melawan infeksi dan penyakit. Ketika kita tidur, tubuh bekerja untuk memperbaiki dan memperbarui sel-sel yang rusak. Dengan tidur yang berkualitas, sistem imun menjadi lebih kuat dan lebih efektif dalam melindungi tubuh dari berbagai ancaman kesehatan.",
    sectionSubtitle2: "2. Mendukung Fungsi Otak",
    sectionText2:
      "Tidur yang cukup sangat berpengaruh terhadap kesehatan otak kita, terutama dalam meningkatkan daya ingat, konsentrasi, dan kemampuan untuk mengambil keputusan. Selama tidur, otak memproses informasi yang diterima sepanjang hari dan mengonsolidasikan memori. Dengan tidur yang cukup, kita dapat merasakan peningkatan produktivitas dan kinerja mental yang lebih baik.",
    sectionSubtitle3: "3. Mengurangi Risiko Penyakit Kronis",
    sectionText3:
      "Kurang tidur dapat memicu sejumlah masalah kesehatan serius, termasuk peningkatan risiko penyakit jantung, diabetes, dan hipertensi. Tidur yang tidak cukup dapat memengaruhi fungsi metabolisme tubuh dan meningkatkan tekanan darah. Oleh karena itu, menjaga kualitas tidur yang baik sangat penting untuk mencegah penyakit-penyakit kronis dan menjaga kesehatan tubuh secara keseluruhan.",
    footerText:
      "Jadikan tidur yang berkualitas sebagai prioritas dalam rutinitas harian Anda untuk memastikan tubuh tetap bugar dan sehat. Tidur yang cukup tidak hanya memperbaiki fisik, tetapi juga berkontribusi pada kesejahteraan mental Anda.",
  },
  {
    id: "tZA_iluTed8W_Ez0",
    category: "Kesehatan",
    date: "2024-12-02",
    title: "Manfaat Olahraga Rutin untuk Hidup Sehat",
    picture: "https://nutriguide-api.vercel.app/images/article-sports.webp",
    headerText:
      "Olahraga adalah aktivitas fisik yang sangat penting untuk menjaga tubuh tetap sehat dan bugar. Selain memberikan manfaat fisik, olahraga juga berdampak positif pada kesehatan mental dan emosional kita, meningkatkan kualitas hidup secara keseluruhan.",
    sectionSubtitle1: "1. Meningkatkan Kesehatan Jantung",
    sectionText1:
      "Olahraga secara rutin membantu meningkatkan sirkulasi darah, mengurangi tekanan darah tinggi, dan memperkuat otot jantung. Dengan berolahraga, jantung akan lebih efisien dalam memompa darah ke seluruh tubuh, yang pada gilirannya dapat mengurangi risiko penyakit kardiovaskular. Aktivitas fisik juga berperan penting dalam menjaga keseimbangan kolesterol dalam tubuh, yang sangat penting untuk kesehatan jantung.",
    sectionSubtitle2: "2. Mengontrol Berat Badan",
    sectionText2:
      "Olahraga teratur membantu membakar kalori yang berlebih, yang berkontribusi pada pengaturan berat badan yang sehat. Aktivitas fisik juga berperan dalam meningkatkan metabolisme tubuh, sehingga memudahkan kita untuk menjaga berat badan ideal. Dengan olahraga yang konsisten, kita dapat mencegah obesitas dan penyakit yang terkait dengan berat badan berlebih, seperti diabetes tipe 2.",
    sectionSubtitle3: "3. Meningkatkan Mood",
    sectionText3:
      "Olahraga merangsang produksi hormon endorfin, yang dikenal sebagai 'hormon kebahagiaan'. Endorfin ini memiliki efek positif terhadap suasana hati, mengurangi kecemasan, stres, dan depresi. Dengan rutin berolahraga, kita dapat merasakan peningkatan mood dan energi yang lebih stabil, yang memungkinkan kita untuk menghadapi tantangan sehari-hari dengan lebih baik.",
    footerText:
      "Luangkan waktu untuk berolahraga setidaknya 30 menit setiap hari, karena ini sangat penting untuk kesehatan tubuh dan pikiran Anda. Mulailah dengan aktivitas yang Anda nikmati untuk merasakan manfaatnya secara maksimal.",
  },
  {
    id: "yKvBo60vxyTqO02v",
    category: "Kesehatan",
    date: "2024-12-03",
    title: "Cara Mengelola Stres dengan Efektif",
    picture: "https://nutriguide-api.vercel.app/images/article-stress.webp",
    headerText:
      "Stres yang tidak dikelola dengan baik dapat berdampak buruk pada kesehatan tubuh dan pikiran kita. Oleh karena itu, penting untuk mempelajari cara-cara yang efektif dalam mengelola stres agar dapat menjaga keseimbangan fisik dan mental.",
    sectionSubtitle1: "1. Pentingnya Relaksasi",
    sectionText1:
      "Relaksasi adalah salah satu cara terbaik untuk mengurangi tingkat stres dalam tubuh. Teknik seperti meditasi, yoga, atau sekadar bernafas dalam-dalam dapat membantu menenangkan sistem saraf dan meredakan ketegangan. Dengan mengatur waktu untuk beristirahat dan melepaskan ketegangan, kita dapat mengurangi dampak negatif stres terhadap kesehatan kita.",
    sectionSubtitle2: "2. Berolahraga Secara Teratur",
    sectionText2:
      "Berolahraga secara teratur dapat menjadi cara yang sangat efektif untuk mengurangi hormon stres dalam tubuh. Aktivitas fisik seperti berjalan, berlari, atau berenang merangsang tubuh untuk melepaskan endorfin, yang dapat meningkatkan mood dan mengurangi perasaan cemas. Dengan menjaga tubuh tetap aktif, kita dapat mengelola stres dengan lebih baik dan merasa lebih tenang.",
    sectionSubtitle3: "3. Mendapatkan Dukungan Sosial",
    sectionText3:
      "Berbicara dengan teman, keluarga, atau seorang profesional dapat membantu meringankan beban pikiran dan memberikan perspektif baru. Dukungan sosial yang baik dapat memberikan rasa nyaman dan mengurangi perasaan kesepian yang sering kali disebabkan oleh stres. Ketika kita merasa didengar dan dipahami, beban mental dapat terasa lebih ringan dan stres pun dapat dikelola dengan lebih baik.",
    footerText:
      "Kelola stres dengan cara-cara yang positif dan sehat untuk menjaga keseimbangan tubuh serta pikiran Anda. Ingat, kesehatan mental yang baik adalah kunci untuk hidup yang lebih bahagia dan produktif.",
  },
  {
    id: "x0JrfQWZqNlilhsQ",
    category: "Lifestyle",
    date: "2024-12-01",
    title: "Tips Mengatur Waktu untuk Kehidupan yang Lebih Produktif",
    picture:
      "https://nutriguide-api.vercel.app/images/article-time-management.webp",
    headerText:
      "Manajemen waktu yang baik sangat penting untuk mencapai kehidupan yang seimbang dan penuh produktivitas. Dengan mengelola waktu secara efektif, Anda dapat menyelesaikan tugas-tugas penting tanpa merasa terburu-buru atau stres.",
    sectionSubtitle1: "1. Buat Daftar Prioritas",
    sectionText1:
      "Untuk memulai hari dengan lebih terorganisir, buatlah daftar tugas yang harus diselesaikan berdasarkan tingkat kepentingannya. Dengan memiliki prioritas yang jelas, Anda dapat fokus pada tugas yang paling mendesak terlebih dahulu. Selain itu, daftar prioritas juga membantu Anda menghindari kebingungan dan memastikan setiap tugas terselesaikan tepat waktu.",
    sectionSubtitle2: "2. Hindari Prokrastinasi",
    sectionText2:
      "Prokrastinasi seringkali menjadi penghalang utama dalam menyelesaikan pekerjaan. Mulailah dengan mengerjakan tugas yang paling sulit atau yang Anda rasa paling tidak menyenangkan untuk menghindari penundaan. Ketika Anda mengatasi tugas yang berat terlebih dahulu, rasa lega dan kepuasan akan memotivasi Anda untuk menyelesaikan tugas lainnya dengan lebih cepat.",
    sectionSubtitle3: "3. Tetapkan Batas Waktu",
    sectionText3:
      "Menetapkan batas waktu untuk setiap tugas adalah cara yang sangat efektif untuk menjaga fokus dan efisiensi. Ketika Anda mengetahui bahwa ada waktu terbatas untuk menyelesaikan suatu pekerjaan, Anda cenderung bekerja lebih cepat dan terorganisir. Batas waktu juga membantu Anda menghindari penyelesaian tugas yang terlalu lambat atau bahkan terabaikan.",
    footerText:
      "Atur waktu Anda dengan bijak dan gunakan setiap detik untuk kegiatan yang bermanfaat. Dengan manajemen waktu yang baik, Anda dapat menciptakan kehidupan yang lebih terorganisir, seimbang, dan penuh kebahagiaan.",
  },
  {
    id: "p-FgdoMW2amNpSDK",
    category: "Lifestyle",
    date: "2024-12-02",
    title: "Keuntungan Menjalani Hidup Minimalis",
    picture: "https://nutriguide-api.vercel.app/images/article-minimalism.webp",
    headerText:
      "Hidup minimalis memberikan kebebasan dari kekacauan fisik maupun mental, memungkinkan Anda untuk hidup lebih tenang dan fokus pada hal-hal yang benar-benar penting. Dengan mengurangi kelebihan barang dan komitmen, Anda dapat menemukan kebahagiaan dan ketenangan batin yang lebih dalam.",
    sectionSubtitle1: "1. Mengurangi Stres",
    sectionText1:
      "Hidup dengan lebih sedikit barang dan gangguan membantu menciptakan lingkungan yang lebih tenang dan bebas dari tekanan. Ketika Anda tidak dikelilingi oleh kekacauan fisik, pikiran Anda pun menjadi lebih jernih dan fokus. Minimalisme memungkinkan Anda untuk melepaskan beban yang tidak perlu, menciptakan ruang untuk kedamaian dalam hidup.",
    sectionSubtitle2: "2. Menghemat Uang",
    sectionText2:
      "Dengan hanya membeli barang-barang yang benar-benar dibutuhkan, Anda dapat menghemat uang yang sebelumnya terbuang untuk barang-barang yang tidak esensial. Ini memberi Anda kesempatan untuk lebih bijaksana dalam mengalokasikan dana, sehingga Anda dapat lebih fokus pada pengalaman dan kegiatan yang lebih bermakna. Hidup minimalis juga memungkinkan Anda untuk lebih sadar akan pengeluaran dan mengelola keuangan dengan lebih bijak.",
    sectionSubtitle3: "3. Fokus pada Hal yang Penting",
    sectionText3:
      "Minimalisme membantu Anda untuk memprioritaskan hal-hal yang lebih bermakna dalam hidup, seperti pengalaman dan hubungan sosial. Dengan mengurangi ketergantungan pada barang-barang material, Anda dapat memberi ruang untuk pengembangan diri dan koneksi yang lebih mendalam dengan orang lain. Hidup yang lebih sederhana memungkinkan Anda untuk menikmati momen-momen penting tanpa distraksi yang tidak perlu.",
    footerText:
      "Cobalah untuk menerapkan gaya hidup minimalis agar Anda dapat merasakan kebahagiaan dan ketenangan batin yang lebih besar. Hidup minimalis bukan tentang kehilangan, tetapi tentang memperoleh lebih banyak makna dalam setiap aspek kehidupan.",
  },
  {
    id: "dfXOFKoouP8mj1nF",
    category: "Lifestyle",
    date: "2024-12-03",
    title: "Pentingnya Me Time dalam Kehidupan Sehari-hari",
    picture: "https://nutriguide-api.vercel.app/images/article-me-time.webp",
    headerText:
      "Me time adalah waktu yang dihabiskan untuk diri sendiri, yang sangat penting untuk merawat kesehatan mental dan emosional. Dalam kehidupan yang sibuk, meluangkan waktu untuk diri sendiri membantu Anda untuk tetap terhubung dengan kebutuhan pribadi dan menjaga keseimbangan hidup.",
    sectionSubtitle1: "1. Memulihkan Energi",
    sectionText1:
      "Luangkan waktu untuk bersantai dan melepaskan kepenatan agar tubuh dan pikiran dapat pulih kembali. Me time memberikan kesempatan untuk beristirahat dari rutinitas sehari-hari yang penuh tekanan, sehingga energi Anda kembali terisi penuh. Dengan memberi diri Anda waktu untuk recharge, Anda dapat menghadapi tantangan hidup dengan energi dan semangat yang lebih tinggi.",
    sectionSubtitle2: "2. Mengenal Diri Sendiri",
    sectionText2:
      "Me time memberi Anda ruang untuk refleksi diri, yang memungkinkan Anda untuk lebih memahami perasaan dan keinginan Anda. Saat Anda fokus pada diri sendiri, Anda dapat mengevaluasi tujuan hidup dan membuat keputusan yang lebih tepat. Hal ini juga membantu Anda untuk mengenal lebih dalam siapa diri Anda sebenarnya, yang berkontribusi pada pertumbuhan pribadi yang positif.",
    sectionSubtitle3: "3. Meningkatkan Kreativitas",
    sectionText3:
      "Ketika Anda memiliki waktu untuk diri sendiri, ide-ide segar dan inspirasi sering kali muncul begitu saja. Me time memungkinkan Anda untuk berpikir lebih bebas tanpa gangguan dari dunia luar. Dengan memberikan waktu untuk diri sendiri, Anda menciptakan ruang bagi kreativitas untuk berkembang dan berinovasi.",
    footerText:
      "Sisihkan waktu untuk me time agar Anda dapat menjalani hidup dengan lebih bahagia, sehat, dan produktif. Ingat, kesejahteraan Anda adalah fondasi utama untuk meraih keberhasilan dalam segala aspek kehidupan.",
  },
  {
    id: "Bt5DWDkhb6EXuxo1",
    category: "Olahraga",
    date: "2024-12-01",
    title: "Manfaat Jogging untuk Kesehatan Tubuh",
    picture: "https://nutriguide-api.vercel.app/images/article-jogging.webp",
    headerText:
      "Jogging adalah olahraga yang sederhana namun memiliki banyak manfaat luar biasa bagi kesehatan tubuh Anda. Melakukan jogging secara rutin dapat memberikan dampak positif bagi kebugaran jantung, mental, dan metabolisme tubuh secara keseluruhan.",
    sectionSubtitle1: "1. Meningkatkan Kesehatan Jantung",
    sectionText1:
      "Jogging secara teratur sangat baik untuk memperkuat otot jantung dan meningkatkan aliran darah ke seluruh tubuh. Olahraga ini membantu menurunkan risiko penyakit jantung dengan cara meningkatkan kesehatan kardiovaskular. Dengan meningkatkan daya tahan jantung, tubuh Anda menjadi lebih efisien dalam memompa darah ke seluruh tubuh, sehingga mendukung kesehatan secara menyeluruh.",
    sectionSubtitle2: "2. Membakar Kalori",
    sectionText2:
      "Jogging juga sangat efektif dalam membakar kalori, yang membantu Anda menjaga berat badan dan meningkatkan metabolisme tubuh. Ketika Anda berlari, tubuh membakar kalori lebih cepat, yang pada gilirannya membantu menurunkan lemak tubuh. Hal ini sangat bermanfaat bagi mereka yang ingin mempertahankan berat badan yang sehat atau mencapai tujuan kebugaran tertentu.",
    sectionSubtitle3: "3. Meningkatkan Kesehatan Mental",
    sectionText3:
      "Jogging juga dapat mengurangi tingkat stres dan meningkatkan suasana hati Anda secara keseluruhan. Aktivitas fisik ini merangsang pelepasan endorfin, yang dikenal sebagai hormon kebahagiaan, yang dapat membuat Anda merasa lebih baik setelah berolahraga. Selain itu, berlari di luar ruangan dapat memberi rasa relaksasi, memberikan kesempatan untuk berpikir jernih, dan mengurangi ketegangan mental.",
    footerText:
      "Luangkan waktu setiap hari untuk jogging dan nikmati manfaatnya yang luar biasa bagi tubuh dan pikiran Anda. Tidak hanya meningkatkan kesehatan fisik, tetapi juga memberikan kebahagiaan dan kedamaian dalam hidup Anda.",
  },
  {
    id: "sdmpTSdSMtIDwKY0",
    category: "Olahraga",
    date: "2024-12-02",
    title: "Panduan Memulai Latihan Angkat Beban untuk Pemula",
    picture:
      "https://nutriguide-api.vercel.app/images/article-weightlifting.webp",
    headerText:
      "Latihan angkat beban adalah salah satu cara terbaik untuk meningkatkan kekuatan dan kebugaran tubuh secara keseluruhan. Dengan latihan yang tepat, Anda dapat meningkatkan massa otot, kekuatan, dan kepadatan tulang, sekaligus menjaga kesehatan tubuh secara menyeluruh.",
    sectionSubtitle1: "1. Mulai dengan Beban Ringan",
    sectionText1:
      "Saat memulai latihan angkat beban, penting untuk menggunakan beban yang ringan agar Anda dapat mempelajari teknik yang benar tanpa risiko cedera. Fokus pada gerakan yang tepat terlebih dahulu sebelum meningkatkan beban yang digunakan. Ini akan membantu Anda membangun dasar yang kuat untuk latihan beban yang lebih intensif di masa depan.",
    sectionSubtitle2: "2. Fokus pada Formasi Tubuh",
    sectionText2:
      "Formasi tubuh yang benar sangat penting dalam latihan angkat beban untuk mencegah cedera dan memastikan latihan yang efektif. Pastikan tubuh Anda berada pada posisi yang benar saat melakukan setiap angkatan, dengan punggung tegak dan kaki yang kuat. Postur yang tepat memungkinkan otot-otot utama bekerja secara maksimal dan memaksimalkan hasil dari setiap repetisi.",
    sectionSubtitle3: "3. Konsistensi adalah Kunci",
    sectionText3:
      "Keberhasilan dalam latihan angkat beban terletak pada konsistensi dan latihan rutin. Lakukan latihan ini secara teratur dan tingkatkan intensitas latihan Anda secara bertahap untuk mendapatkan hasil yang optimal. Semakin konsisten Anda dalam berlatih, semakin besar kemajuan yang akan Anda capai dalam meningkatkan kekuatan dan kesehatan tubuh.",
    footerText:
      "Latihan angkat beban tidak hanya meningkatkan kekuatan tubuh, tetapi juga membantu menjaga kesehatan tulang dan meningkatkan kebugaran secara keseluruhan. Dengan latihan yang tepat dan konsisten, Anda akan merasakan manfaat besar untuk tubuh Anda dalam jangka panjang.",
  },
  {
    id: "HNRlv-Q6vxj7LJHa",
    category: "Olahraga",
    date: "2024-12-03",
    title: "Yoga: Olahraga untuk Relaksasi dan Fleksibilitas",
    picture: "https://nutriguide-api.vercel.app/images/article-yoga.webp",
    headerText:
      "Yoga adalah bentuk olahraga yang tidak hanya bermanfaat bagi kesehatan fisik, tetapi juga kesehatan mental dan emosional. Dengan menggabungkan gerakan fisik, teknik pernapasan, dan meditasi, yoga membantu Anda mencapai keseimbangan tubuh dan pikiran yang lebih baik.",
    sectionSubtitle1: "1. Meningkatkan Fleksibilitas",
    sectionText1:
      "Salah satu manfaat utama dari yoga adalah peningkatan fleksibilitas tubuh. Melalui gerakan yang lembut dan terkontrol, yoga membantu mengurangi kekakuan pada otot dan persendian. Seiring berjalannya waktu, latihan yoga yang teratur dapat meningkatkan rentang gerak tubuh Anda, yang akan memperbaiki postur dan mengurangi rasa sakit atau ketegangan tubuh.",
    sectionSubtitle2: "2. Mengurangi Stres",
    sectionText2:
      "Yoga juga dikenal karena kemampuannya dalam mengurangi stres dan memberikan rasa tenang. Latihan pernapasan dalam yoga memungkinkan Anda untuk fokus pada pernapasan dan menenangkan pikiran. Dengan meditasi yang menyertainya, yoga membantu Anda melepaskan kekhawatiran dan ketegangan mental, memberikan ruang untuk kedamaian dalam hidup Anda.",
    sectionSubtitle3: "3. Meningkatkan Keseimbangan",
    sectionText3:
      "Posisi yoga yang menantang juga dapat membantu meningkatkan keseimbangan tubuh. Dengan mempertahankan berbagai posisi tubuh yang stabil, yoga melatih otot inti dan memperbaiki koordinasi tubuh. Latihan ini juga meningkatkan kesadaran tubuh, yang sangat bermanfaat dalam kegiatan sehari-hari untuk menjaga keseimbangan tubuh dan postur yang baik.",
    footerText:
      "Cobalah untuk melakukan yoga secara rutin dan nikmati manfaatnya yang luar biasa bagi kesehatan fisik dan mental Anda. Dengan latihan yang konsisten, Anda akan merasakan perubahan positif dalam fleksibilitas, keseimbangan, dan ketenangan batin.",
  },
  {
    id: "ptm8w-uxz1ltGSXh",
    category: "Pencegahan",
    date: "2024-12-01",
    title: "Tips Pencegahan Flu di Musim Hujan",
    picture:
      "https://nutriguide-api.vercel.app/images/article-flu-prevention.webp",
    headerText:
      "Flu seringkali menyerang pada musim hujan, ketika kondisi kelembapan tinggi dan daya tahan tubuh lebih rentan terhadap infeksi. Ada berbagai langkah sederhana yang bisa Anda terapkan untuk mencegah terjangkitnya flu, agar tetap sehat selama musim hujan.",
    sectionSubtitle1: "1. Jaga Kebersihan Tangan",
    sectionText1:
      "Mencuci tangan dengan sabun dan air mengalir selama 20 detik adalah langkah pertama yang penting untuk mencegah penyebaran kuman. Lakukan ini terutama sebelum makan atau setelah bersin dan batuk. Dengan menjaga kebersihan tangan, Anda mengurangi risiko bakteri dan virus yang masuk ke dalam tubuh melalui sentuhan.",
    sectionSubtitle2: "2. Perkuat Sistem Imun",
    sectionText2:
      "Sistem imun yang kuat dapat melawan berbagai infeksi, termasuk flu. Pastikan untuk mengonsumsi makanan bergizi seperti buah dan sayuran yang kaya vitamin serta nutrisi yang mendukung daya tahan tubuh. Selain itu, tidur yang cukup juga sangat penting untuk menjaga agar sistem imun tetap optimal.",
    sectionSubtitle3: "3. Hindari Kontak dengan Orang Sakit",
    sectionText3:
      "Untuk meminimalisir penularan, usahakan untuk menjaga jarak dari orang yang sedang menderita flu atau gejala penyakit pernapasan. Jika Anda berada di tempat umum, hindari kontak langsung seperti berjabat tangan. Menjaga jarak dengan orang sakit adalah cara yang efektif untuk mencegah penularan virus.",
    footerText:
      "Dengan menjaga kebersihan diri dan menjalani pola hidup sehat, Anda bisa menghindari flu yang sering melanda di musim hujan. Pastikan tubuh Anda tetap fit dan terlindungi sepanjang musim dengan langkah-langkah pencegahan yang sederhana namun efektif.",
  },
  {
    id: "_QGNZHGDoDmkAFDX",
    category: "Pencegahan",
    date: "2024-12-02",
    title: "Langkah Pencegahan Diabetes Melalui Pola Hidup Sehat",
    picture:
      "https://nutriguide-api.vercel.app/images/article-diabetes-prevention.webp",
    headerText:
      "Diabetes adalah penyakit yang dapat dicegah dengan mengadopsi pola hidup sehat sejak dini. Dengan perubahan gaya hidup yang tepat, Anda dapat menurunkan risiko terkena diabetes di masa depan.",
    sectionSubtitle1: "1. Kurangi Konsumsi Gula",
    sectionText1:
      "Makanan dan minuman manis yang tinggi gula dapat menyebabkan lonjakan kadar gula darah yang berisiko memicu diabetes. Untuk itu, batasi konsumsi gula agar tubuh Anda tetap terjaga keseimbangannya. Sebagai alternatif, pilihlah makanan yang mengandung serat tinggi dan rendah indeks glikemik untuk menjaga kestabilan gula darah.",
    sectionSubtitle2: "2. Aktif Berolahraga",
    sectionText2:
      "Olahraga teratur seperti berjalan kaki, bersepeda, atau berenang dapat meningkatkan sensitivitas tubuh terhadap insulin, yang penting dalam mencegah diabetes. Cobalah untuk berolahraga setidaknya 30 menit setiap hari untuk menjaga berat badan dan kesehatan tubuh secara keseluruhan. Dengan rutin bergerak, tubuh Anda lebih mampu mengatur kadar gula darah dengan baik.",
    sectionSubtitle3: "3. Periksa Kesehatan Secara Berkala",
    sectionText3:
      "Melakukan pemeriksaan kesehatan secara rutin adalah cara terbaik untuk mengetahui kondisi tubuh, terutama kadar gula darah. Jika Anda memiliki riwayat keluarga diabetes, penting untuk lebih sering memeriksakan kadar gula darah. Deteksi dini dapat membantu mencegah diabetes berkembang lebih lanjut dan mengurangi risikonya.",
    footerText:
      "Pencegahan selalu lebih baik daripada pengobatan. Dengan mengubah pola hidup menjadi lebih sehat, Anda dapat mengurangi risiko diabetes dan menikmati kehidupan yang lebih berkualitas dan bebas dari penyakit ini.",
  },
  {
    id: "UOgwJs7HfgeXos7f",
    category: "Pencegahan",
    date: "2024-12-03",
    title: "Cara Melindungi Kulit dari Bahaya Sinar Matahari",
    picture:
      "https://nutriguide-api.vercel.app/images/article-sun-protection.webp",
    headerText:
      "Paparan sinar matahari berlebihan dapat merusak kulit dan menyebabkan penuaan dini, bahkan kanker kulit. Oleh karena itu, penting untuk mengetahui cara-cara melindungi kulit agar tetap sehat meski sering terpapar matahari.",
    sectionSubtitle1: "1. Gunakan Tabir Surya",
    sectionText1:
      "Tabir surya dengan SPF 30 atau lebih adalah perlindungan utama untuk menjaga kulit Anda dari kerusakan akibat sinar UV. Pilih produk dengan spektrum luas untuk melindungi kulit dari kedua jenis sinar UVA dan UVB. Penggunaan tabir surya secara rutin dapat mengurangi risiko terbakar sinar matahari dan penuaan dini.",
    sectionSubtitle2: "2. Kenakan Pakaian Pelindung",
    sectionText2:
      "Selain tabir surya, penggunaan pakaian yang menutupi tubuh juga sangat efektif untuk melindungi kulit dari paparan langsung sinar matahari. Kenakan pakaian berlengan panjang, topi yang lebar, dan kacamata hitam untuk melindungi kulit serta mata Anda. Pakaian pelindung adalah cara praktis dan alami untuk mengurangi paparan sinar matahari yang berbahaya.",
    sectionSubtitle3: "3. Hindari Sinar Matahari Langsung",
    sectionText3:
      "Hindari berada di bawah sinar matahari langsung pada jam-jam puncak, antara pukul 10 pagi hingga 4 sore, ketika sinar UV paling kuat. Jika terpaksa keluar rumah, pastikan Anda sudah memproteksi diri dengan tabir surya dan pakaian pelindung. Menghindari paparan sinar matahari pada jam-jam tertentu dapat mengurangi risiko kerusakan kulit akibat paparan sinar UV.",
    footerText:
      "Melindungi kulit dari sinar matahari adalah investasi jangka panjang untuk kesehatan kulit Anda. Dengan perlindungan yang tepat, Anda dapat mencegah kerusakan kulit dan menjaga kulit tetap sehat dan bercahaya di masa depan.",
  },
  {
    id: "Cj7l8m01gsow1uj1",
    category: "Penyakit",
    date: "2024-12-04",
    title: "Gejala dan Pencegahan Penyakit Jantung",
    picture:
      "https://nutriguide-api.vercel.app/images/article-heart-disease.webp",
    headerText:
      "Penyakit jantung merupakan salah satu penyebab kematian utama di seluruh dunia, dan dapat mengancam siapa saja tanpa mengenal usia. Mengetahui gejala serta cara pencegahan yang tepat sangat penting untuk menjaga kesehatan jantung dan mencegah terjadinya masalah jantung serius di masa depan.",
    sectionSubtitle1: "1. Gejala Penyakit Jantung",
    sectionText1:
      "Gejala yang umum muncul pada penyakit jantung antara lain nyeri dada yang terasa seperti dihimpit, sesak napas yang terjadi mendadak, dan kelelahan yang tidak wajar meski tubuh tidak melakukan aktivitas berat. Jika Anda mengalami salah satu atau beberapa gejala ini, segeralah berkonsultasi dengan dokter. Gejala-gejala ini dapat menjadi tanda awal masalah serius pada jantung Anda yang memerlukan perhatian medis segera.",
    sectionSubtitle2: "2. Faktor Risiko",
    sectionText2:
      "Penyakit jantung seringkali dipicu oleh gaya hidup yang tidak sehat, seperti merokok, obesitas, pola makan yang buruk, serta kurangnya aktivitas fisik. Faktor-faktor risiko ini dapat memicu penumpukan plak pada pembuluh darah, yang pada akhirnya dapat menyebabkan serangan jantung. Mengetahui faktor-faktor ini membantu Anda untuk lebih waspada dan melakukan perubahan gaya hidup yang mendukung kesehatan jantung.",
    sectionSubtitle3: "3. Cara Pencegahan",
    sectionText3:
      "Pencegahan penyakit jantung dapat dilakukan dengan menghindari makanan tinggi lemak jenuh dan garam, serta dengan rutin melakukan aktivitas fisik seperti berjalan kaki atau bersepeda. Selain itu, pastikan untuk memeriksakan kesehatan secara berkala agar dapat mendeteksi masalah sejak dini dan mengobatinya sebelum menjadi parah. Dengan melakukan perubahan kecil pada gaya hidup Anda, kesehatan jantung dapat terjaga dengan baik dan mengurangi risiko penyakit jantung.",
    footerText:
      "Dengan melakukan perubahan kecil pada pola hidup sehari-hari, Anda dapat memberikan dampak besar untuk kesehatan jantung Anda. Jaga jantung Anda dengan langkah-langkah pencegahan yang tepat untuk hidup yang lebih sehat dan panjang.",
  },
  {
    id: "_wGve6kWZEBtby17",
    category: "Penyakit",
    date: "2024-12-05",
    title: "Mengenal Diabetes Tipe 2 dan Cara Mengelolanya",
    picture: "https://nutriguide-api.vercel.app/images/article-diabetes.webp",
    headerText:
      "Diabetes tipe 2 adalah kondisi yang dapat dikelola dengan pengobatan dan perubahan gaya hidup yang tepat. Dengan pemahaman yang baik, penderita diabetes dapat menjalani kehidupan yang sehat dan menghindari komplikasi yang lebih serius.",
    sectionSubtitle1: "1. Apa Itu Diabetes Tipe 2?",
    sectionText1:
      "Diabetes tipe 2 adalah kondisi kronis yang mempengaruhi cara tubuh menggunakan insulin untuk mengatur kadar gula darah. Dalam kondisi ini, tubuh tidak dapat memproduksi cukup insulin atau tidak dapat menggunakannya secara efektif. Tanpa pengelolaan yang tepat, kondisi ini dapat mengarah pada komplikasi serius seperti kerusakan ginjal, gangguan penglihatan, dan masalah jantung.",
    sectionSubtitle2: "2. Tanda dan Gejala",
    sectionText2:
      "Gejala diabetes tipe 2 seringkali tidak terlihat jelas pada tahap awal, tetapi beberapa tanda yang perlu diperhatikan adalah rasa haus yang berlebihan, sering buang air kecil, serta penurunan berat badan yang tidak wajar. Selain itu, rasa lelah yang tidak biasa dan luka yang lambat sembuh juga merupakan tanda-tanda umum. Jika Anda mengalami gejala-gejala tersebut, segera lakukan pemeriksaan kesehatan untuk memastikan kondisi tubuh Anda.",
    sectionSubtitle3: "3. Strategi Pengelolaan",
    sectionText3:
      "Untuk mengelola diabetes tipe 2, penting untuk menjalani pola makan sehat yang rendah gula dan kaya serat, serta melakukan olahraga teratur. Penggunaan obat-obatan yang sesuai dengan resep dokter juga diperlukan untuk membantu mengontrol kadar gula darah. Dengan perubahan gaya hidup yang terencana dan disiplin, diabetes tipe 2 dapat dikelola dengan baik dan penderita dapat menikmati hidup yang sehat dan produktif.",
    footerText:
      "Dengan pengelolaan yang tepat, penderita diabetes tipe 2 tidak hanya dapat mengendalikan kondisi mereka, tetapi juga dapat menjalani hidup yang sehat dan produktif. Mulailah dengan langkah-langkah kecil untuk merawat tubuh Anda dan menghindari komplikasi lebih lanjut.",
  },
  {
    id: "HnDvJg8c8MWVi5Rj",
    category: "Penyakit",
    date: "2024-12-06",
    title: "Semua yang Perlu Anda Ketahui Tentang Hipertensi",
    picture:
      "https://nutriguide-api.vercel.app/images/article-hypertension.webp",
    headerText:
      "Hipertensi atau tekanan darah tinggi adalah kondisi yang sering kali tidak menunjukkan gejala tetapi dapat menyebabkan masalah kesehatan serius jika tidak diobati. Mengenali tanda-tanda dan memahami langkah-langkah pencegahannya sangat penting untuk menjaga kesehatan jantung dan pembuluh darah Anda.",
    sectionSubtitle1: "1. Apa Itu Hipertensi?",
    sectionText1:
      "Hipertensi adalah kondisi medis di mana tekanan darah seseorang terus-menerus berada di angka yang lebih tinggi dari normal, yaitu 140/90 mmHg atau lebih. Jika tidak terkontrol, hipertensi dapat menyebabkan kerusakan pada organ vital seperti jantung, ginjal, dan otak. Oleh karena itu, penting untuk mengidentifikasi hipertensi sejak dini agar dapat segera dilakukan pengobatan yang tepat.",
    sectionSubtitle2: "2. Bahaya Hipertensi",
    sectionText2:
      "Hipertensi yang tidak terkontrol dapat menyebabkan berbagai komplikasi serius, seperti stroke, gagal ginjal, dan serangan jantung. Penyakit ini sering kali disebut sebagai 'silent killer' karena sering tidak menimbulkan gejala sampai komplikasi terjadi. Oleh karena itu, penting untuk rutin memeriksakan tekanan darah untuk mendeteksi hipertensi sejak dini dan mencegah kerusakan lebih lanjut pada tubuh.",
    sectionSubtitle3: "3. Langkah Pencegahan dan Pengobatan",
    sectionText3:
      "Pencegahan hipertensi dapat dilakukan dengan menjaga pola makan sehat rendah garam dan lemak, serta rutin berolahraga. Mengelola stres juga merupakan faktor penting dalam menjaga tekanan darah tetap stabil. Selain itu, jika Anda sudah terdiagnosis hipertensi, konsumsi obat sesuai anjuran dokter dan lakukan pemeriksaan rutin untuk mengontrol tekanan darah Anda dengan baik.",
    footerText:
      "Pencegahan hipertensi lebih baik dilakukan sejak dini untuk menghindari komplikasi serius. Mulailah mengontrol tekanan darah Anda dengan cara yang sehat dan tepat agar dapat menjalani hidup yang lebih panjang dan berkualitas.",
  },
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const { id } = req.query;

  const article = articles.find((a) => a.id === id);

  if (!article) {
    return res.status(404).json({
      status: "error",
      message: "Article not found",
    });
  }

  return res.status(200).json({
    status: "success",
    data: { article },
  });
}
