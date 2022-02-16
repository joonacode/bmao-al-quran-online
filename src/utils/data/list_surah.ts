const list_surah = [
  {
    number: 1,
    sequence: 5,
    numberOfVerses: 7,
    name: {
      short: 'الفاتحة',
      long: 'سُورَةُ ٱلْفَاتِحَةِ',
      transliteration: { en: 'Al-Faatiha', id: 'Al-Fatihah' },
      translation: { en: 'The Opening', id: 'Pembukaan' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Al Faatihah (Pembukaan) yang diturunkan di Mekah dan terdiri dari 7 ayat adalah surat yang pertama-tama diturunkan dengan lengkap  diantara surat-surat yang ada dalam Al Quran dan termasuk golongan surat Makkiyyah. Surat ini disebut Al Faatihah (Pembukaan), karena dengan surat inilah dibuka dan dimulainya Al Quran. Dinamakan Ummul Quran (induk Al Quran) atau Ummul Kitaab (induk Al Kitaab) karena dia merupakan induk dari semua isi Al Quran, dan karena itu diwajibkan membacanya pada tiap-tiap sembahyang. Dinamakan pula As Sab'ul matsaany (tujuh yang berulang-ulang) karena ayatnya tujuh dan dibaca berulang-ulang dalam sholat.",
    },
  },
  {
    number: 2,
    sequence: 87,
    numberOfVerses: 286,
    name: {
      short: 'البقرة',
      long: 'سورة البقرة',
      transliteration: { en: 'Al-Baqara', id: 'Al-Baqarah' },
      translation: { en: 'The Cow', id: 'Sapi' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: "Surat Al Baqarah yang 286 ayat itu turun di Madinah yang sebahagian besar diturunkan pada permulaan tahun Hijrah, kecuali ayat 281 diturunkan di Mina pada Hajji wadaa' (hajji Nabi Muhammad s.a.w. yang terakhir). Seluruh ayat dari surat Al Baqarah termasuk golongan Madaniyyah, merupakan surat yang terpanjang di antara surat-surat Al Quran yang di dalamnya terdapat pula ayat yang terpancang (ayat 282). Surat ini dinamai Al Baqarah karena di dalamnya disebutkan kisah penyembelihan sapi betina yang diperintahkan Allah kepada Bani Israil (ayat 67 sampai dengan 74), dimana dijelaskan watak orang Yahudi pada umumnya. Dinamai Fusthaatul-Quran (puncak Al Quran) karena memuat beberapa hukum yang tidak disebutkan dalam surat yang lain. Dinamai juga surat  alif-laam-miim karena surat ini dimulai dengan Alif-laam-miim.",
    },
  },
  {
    number: 3,
    sequence: 89,
    numberOfVerses: 200,
    name: {
      short: 'آل عمران',
      long: 'سورة آل عمران',
      transliteration: { en: 'Aal-i-Imraan', id: "Ali 'Imran" },
      translation: { en: 'The Family of Imraan', id: 'Keluarga Imran' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: "Surat Ali 'Imran yang terdiri dari 200 ayat ini adalah surat Madaniyyah.  Dinamakan Ali 'Imran karena memuat kisah keluarga 'Imran yang di dalam kisah itu disebutkan kelahiran Nabi Isa a.s., persamaan kejadiannya dengan Nabi Adam a. s., kenabian dan beberapa mukjizatnya, serta disebut pula kelahiran Maryam puteri 'Imran, ibu dari Nabi Isa a.s. Surat Al Baqarah dan Ali 'Imran ini dinamakan Az Zahrawaani (dua yang cemerlang), karena kedua surat ini menyingkapkan hal-hal yang disembunyikan oleh para Ahli Kitab, seperti kejadian dan kelahiran Nabi Isa a.s., kedatangan Nabi Muhammad s.a.w. dan sebagainya.",
    },
  },
  {
    number: 4,
    sequence: 92,
    numberOfVerses: 176,
    name: {
      short: 'النساء',
      long: 'سورة النساء',
      transliteration: { en: 'An-Nisaa', id: "An-Nisa'" },
      translation: { en: 'The Women', id: 'Wanita' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: "Surat An Nisaa' yang terdiri dari 176 ayat itu, adalah surat Madaniyyah yang terpanjang sesudah surat Al Baqarah. Dinamakan An Nisaa' karena dalam surat ini banyak dibicarakan hal-hal yang berhubungan dengan wanita serta merupakan surat yang paling membicarakan hal itu dibanding dengan surat-surat yang lain. Surat yang lain banyak juga yang membicarakan tentang hal wanita ialah surat Ath Thalaq. Dalam hubungan ini biasa disebut surat An Nisaa' dengan sebutan: Surat An Nisaa' Al Kubraa (surat An Nisaa' yang besar), sedang  surat Ath Thalaq disebut dengan sebutan: Surat An Nisaa' Ash Shughraa (surat An Nisaa' yang kecil).",
    },
  },
  {
    number: 5,
    sequence: 112,
    numberOfVerses: 120,
    name: {
      short: 'المائدة',
      long: 'سورة المائدة',
      transliteration: { en: 'Al-Maaida', id: "Al-Ma'idah" },
      translation: { en: 'The Table', id: 'Hidangan' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: "Surat Al Maa'idah terdiri dari 120 ayat; termasuk golongan surat Madaniyyah. Sekalipun ada ayatnya yang turun di Mekah, namun ayat ini diturunkan sesudah Nabi Muhammad s.a.w. hijrah ke Medinah, yaitu di waktu haji wadaa'. Surat ini dinamakan Al Maa'idah (hidangan) karena memuat kisah pengikut-pengikut setia Nabi Isa a.s. meminta kepada Nabi Isa a.s. agar Allah menurunkan untuk mereka Al Maa'idah (hidangan makanan) dari langit (ayat 112). Dan dinamakan Al Uqud (perjanjian), karena kata itu terdapat pada ayat pertama surat ini, dimana Allah menyuruh agar hamba-hamba-Nya memenuhi janji prasetia terhadap Allah dan perjanjian-perjanjian yang mereka buat sesamanya. Dinamakan juga Al Munqidz (yang menyelamatkan), karena akhir surat ini mengandung kisah tentang Nabi Isa a.s. penyelamat pengikut-pengikut setianya dari azab Allah.",
    },
  },
  {
    number: 6,
    sequence: 55,
    numberOfVerses: 165,
    name: {
      short: 'الأنعام',
      long: 'سورة الأنعام',
      transliteration: { en: "Al-An'aam", id: "Al-An'am" },
      translation: { en: 'The Cattle', id: 'Binatang Ternak' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Al An'aam (binatang ternak: unta, sapi, biri-biri dan kambing) yang terdiri atas 165 ayat, termasuk golongan surat Makkiyah, karena hampur seluruh ayat-ayat-Nya diturunkan di Mekah dekat sebelum hijrah. Dinamakan Al An'aam karena di dalamnya disebut kata An'aam dalam hubungan dengan adat-istiadat kaum musyrikin, yang menurut mereka binatang-binatang ternak itu dapat dipergunakan untuk mendekatkan diri kepada tuhan mereka. Juga dalam surat ini disebutkan hukum-hukum yang berkenaan dengan binatang ternak itu.",
    },
  },
  {
    number: 7,
    sequence: 39,
    numberOfVerses: 206,
    name: {
      short: 'الأعراف',
      long: 'سورة الأعراف',
      transliteration: { en: "Al-A'raaf", id: "Al-A'raf" },
      translation: { en: 'The Heights', id: 'Tempat Tertinggi' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Al A'raaf yang berjumlah 206 ayat termasuk golongan surat Makkiyah, diturunkan sebelum turunnya surat Al An'aam dan termasuk golongan surat Assab 'uththiwaal (tujuh surat yang panjang). Dinamakan Al A'raaf karena perkataan Al A'raaf terdapat dalam ayat 46 yang mengemukakan tentang keadaan orang-orang yang berada di atas Al A'raaf yaitu: tempat yang tertinggi di batas surga dan neraka.",
    },
  },
  {
    number: 8,
    sequence: 88,
    numberOfVerses: 75,
    name: {
      short: 'الأنفال',
      long: 'سورة الأنفال',
      transliteration: { en: 'Al-Anfaal', id: 'Al-Anfal' },
      translation: { en: 'The Spoils of War', id: 'Rampasan Perang' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: 'Surat Al Anfaal terdiri atas 75 ayat dan termasuk golongan surat-surat Madaniyyah, karena seluruh ayat-ayatnya diturunkan di Madinah. Surat ini dinamakan Al Anfaal yang berarti harta rampasan perang berhubung kata Al Anfaal terdapat pada permulaan surat ini dan juga persoalan yang menonjol dalam surat ini ialah tentang harta rampasan perang, hukum perang dan hal-hal yang berhubungan dengan peperangan pada umumnya. Menurut riwayat Ibnu Abbas r.a. surat ini diturunkan berkenaan dengan perang Badar Kubra yang terjadi pada tahun kedua hijrah. Peperangan ini sangat penting artinya, karena dialah yang menentukan jalan sejarah Perkembangan Islam. Pada waktu itu umat Islam dengan berkekuatan kecil untuk pertama kali dapat mengalahkan kaum musyrikin yang berjumlah besar, dan berperlengkapan yang cukup, dan mereka dalam peperangan ini memperoleh harta rampasan perang yang tidak sedikit. Oleh sebab itu timbullah masalah bagaimana membagi harta-harta rampasan perang itu, maka kemudian Allah menurunkan ayat pertama dari surat ini.',
    },
  },
  {
    number: 9,
    sequence: 113,
    numberOfVerses: 129,
    name: {
      short: 'التوبة',
      long: 'سورة التوبة',
      transliteration: { en: 'At-Tawba', id: 'At-Taubah' },
      translation: { en: 'The Repentance', id: 'Pengampunan' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: "Surat At Taubah terdiri atas 129 ayat termasuk golongan surat-surat Madaniyyah. Surat ini dinamakan At Taubah yang berarti pengampunan berhubung kata At Taubah berulang kali disebut dalam surat ini. Dinamakan juga dengan Baraah yang berarti berlepas diri yang di sini maksudnya pernyataan pemutusan perhubungan, disebabkan kebanyakan pokok pembicaraannya tentang pernyataan pemutusan perjanjian damai dengan kaum musyrikin.  Di samping kedua nama yang masyhur itu ada lagi beberapa nama yang lain yang merupakan sifat dari surat ini.  Berlainan dengan surat-surat yang lain, maka pada permulaan surat ini tidak terdapat basmalah, karena surat ini adalah pernyataan perang dengan arti bahwa segenap kaum muslimin dikerahkan untuk memerangi seluruh kaum musyrikin, sedangkan basmalah bernafaskan perdamaian dan cinta kasih Allah.  Surat ini diturunkan sesudah Nabi Muhammad s.a.w. kembali dari peperangan Tabuk yang terjadi pada tahun 9 H. Pengumuman ini disampaikan oleh Saidina 'Ali r.a. pada musim haji tahun itu juga.",
    },
  },
  {
    number: 10,
    sequence: 51,
    numberOfVerses: 109,
    name: {
      short: 'يونس',
      long: 'سورة يونس',
      transliteration: { en: 'Yunus', id: 'Yunus' },
      translation: { en: 'Jonas', id: 'Yunus' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat Yunus terdiri atas 109 ayat, termasuk golongan surat-surat Makkiyyah kecuali ayat 40, 94, 95, yang diturunkan pada masa Nabi Muhmmad s.a.w. berada di Madinah. Surat ini dinamai surat Yunus karena dalam surat ini terutama ditampilkan kisah Nabi Yunus a.s. dan pengikut-pengikutnya yang teguh imannya.',
    },
  },
  {
    number: 11,
    sequence: 52,
    numberOfVerses: 123,
    name: {
      short: 'هود',
      long: 'سورة هود',
      transliteration: { en: 'Hud', id: 'Hud' },
      translation: { en: 'Hud', id: 'Hud' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Huud termasuk golongan surat-surat Makkiyyah, terdiri dari 123 ayat diturunkan sesudah surat Yunus. Surat ini dinamai surat Huud karena ada hubungan dengan terdapatnya kisah Nabi Huud a.s. dan kaumnya dalam surat ini terdapat juga kisah-kisah Nabi yang lain, seperti kisah Nuh a.s., Shaleh a.s., Ibrahim a.s., Luth a.s., Syu'aib a.s. dan Musa a.s.",
    },
  },
  {
    number: 12,
    sequence: 53,
    numberOfVerses: 111,
    name: {
      short: 'يوسف',
      long: 'سورة يوسف',
      transliteration: { en: 'Yusuf', id: 'Yusuf' },
      translation: { en: 'Joseph', id: 'Yusuf' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat Yusuf ini terdiri atas 111 ayat, termasuk golongan surat-surat Makkiyyah karena diturunkan di Mekah sebelum hijrah. Surat ini dinamakan surat Yusuf adalah karena titik berat dari isinya mengenai riwayat Nabi Yusuf a.s.  Riwayat tersebut salah satu di antara cerita-cerita ghaib yang diwahyukan kepada Nabi Muhammad s.a.w. sebagai mukjizat bagi beliau, sedang beliau sebelum diturunkan surat ini tidak mengetahuinya.  Menurut riwayat Al Baihaqi dalam kitab Ad Dalail bahwa segolongan orang Yahudi masuk agama Islam sesudah mereka mendengar cerita Yusuf a.s. ini, karena sesuai dengan cerita-cerita yang mereka ketahui. Dari cerita Yusuf a.s. ini, Nabi Muhammad s.a.w. mengambil pelajaran-pelajaran yang banyak dan merupakan penghibur terhadap beliau dalam menjalankan tugasnya.',
    },
  },
  {
    number: 13,
    sequence: 96,
    numberOfVerses: 43,
    name: {
      short: 'الرعد',
      long: 'سورة الرعد',
      transliteration: { en: "Ar-Ra'd", id: "Ar-Ra'd" },
      translation: { en: 'The Thunder', id: 'Guruh' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: "Surat Ar Ra'd ini terdiri atas 43 ayat termasuk golongan surat-surat Madaniyyah. Surat ini dinamakan Ar Ra'd yang berarti guruh karena dalam ayat 13 Allah berfirman yang artinya Dan guruh itu bertasbih sambil memuji-Nya, menunjukkan sifat kesucian dan kesempurnaan Allah s.w.t.  Dan lagi sesuai dengan sifat Al Quran yang mengandung ancaman dan harapan, maka demikian pulalah halnya bunyi guruh itu menimbulkan kecemasan dan harapan kepada manusia. Isi yang terpenting dari surat ini ialah bahwa bimbingan Allah kepada makhluk-Nya bertalian erat dengan hukum sebab dan akibat. Bagi Allah s.w.t. tidak ada pilih kasih dalam menetapkan hukuman. Balasan atau hukuman adalah akibat dan ketaatan atau keingkaran terhadap hukum Allah.",
    },
  },
  {
    number: 14,
    sequence: 72,
    numberOfVerses: 52,
    name: {
      short: 'ابراهيم',
      long: 'سورة ابراهيم',
      transliteration: { en: 'Ibrahim', id: 'Ibrahim' },
      translation: { en: 'Abraham', id: 'Ibrahim' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Ibrahim ini terdiri atas 52 ayat, termasuk golongan surat-surat Makkiyyah karena diturunkan di Mekah sebelum Hijrah. Dinamakan Ibrahim, karena surat ini mengandung doa Nabi Ibrahim a.s. yaitu ayat 35 sampai dengan 41. Do'a ini isinya antara lain: permohonan agar keturunannya mendirikan shalat, dijauhkan dari menyembah berhala-berhala dan agar Mekah dan daerah sekitarnya menjadi daerah yang aman dan makmur. Doa Nabi Ibrahim a.s. ini telah diperkenankan oleh Allah s.w.t. sebagaimana telah terbukti keamanannya sejak dahulu sampai sekarang. Do'a tersebut dipanjatkan beliau ke hadirat Allah s.w.t. sesudah selesai membina Ka'bah bersama puteranya Ismail a.s., di dataran tanah Mekah yang tandus.",
    },
  },
  {
    number: 15,
    sequence: 54,
    numberOfVerses: 99,
    name: {
      short: 'الحجر',
      long: 'سورة الحجر',
      transliteration: { en: 'Al-Hijr', id: 'Al-Hijr' },
      translation: { en: 'The Rock', id: 'Hijr' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat ini terdiri atas 99 ayat, termasuk golongan surat-surat Makkiyyah,  karena diturunkan di Mekah sebelum hijrah. Al Hijr  adalah nama  sebuah daerah  pegunungan yang didiami zaman dahulu  oleh kaum  Tsamud terletak  di  pinggir  jalan antara Madinah dan Syam (Syria). Nama surat ini diambil dari nama daerah pegunungan itu, berhubung nasib  penduduknya yaitu  kaum Tsamud  diceritakan pada ayat  80 sampai  dengan 84,  mereka  telah  dimusnahkan Allah  s.w.t.,  karena  mendustakan  Nabi  Shaleh  a.s.  dan berpaling   dari ayat-ayat  Allah. Dalam  surat ini terdapat juga kisah-kisah  kaum yang lain yang telah dibinasakan oleh Allah seperti  kaum Luth  a.s. dan kaum Syu'aib a.s. Dari ke semua kisah-kisah  itu dapat  diambil pelajaran bahwa orang-orang  yang  menentang  ajaran  rasul-rasul  akan  mengalami kehancuran.",
    },
  },
  {
    number: 16,
    sequence: 70,
    numberOfVerses: 128,
    name: {
      short: 'النحل',
      long: 'سورة النحل',
      transliteration: { en: 'An-Nahl', id: 'An-Nahl' },
      translation: { en: 'The Bee', id: 'Lebah' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat ini terdiri atas 128 ayat, termasuk golongan surat-surat Makkiyyah. Surat ini dinamakan An Nahl yang berarti lebah karena di dalamnya, terdapat firman Allah s.w.t. ayat 68 yang artinya : "Dan Tuhanmu mewahyukan kepada lebah." Lebah adalah makhluk Allah yang banyak memberi manfaat  dan kenikmatan kepada manusia. Ada persamaan antara madu yang dihasilkan oleh lebah dengan Al Quranul Karim. Madu berasal dari bermacam-macam sari bunga dan dia menjadi obat bagi bermacam-macam penyakit manusia (lihat ayat 69). Sedang Al Quran mengandung inti sari dari kitab-kitab yang telah diturunkan kepada Nabi-nabi zaman dahulu ditambah dengan ajaran-ajaran yang diperlukan oleh semua bangsa sepanjang masa untuk mencapai kebahagiaan dunia dan akhirat. (Lihat surat (10) Yunus ayat 57 dan surat (17) Al Isra\' ayat  82). Surat ini dinamakan pula "An Ni\'am" artinya nikmat-nikmat, karena di dalamnya Allah menyebutkan pelbagai macam nikmat untuk hamba-hamba-Nya.',
    },
  },
  {
    number: 17,
    sequence: 50,
    numberOfVerses: 111,
    name: {
      short: 'الإسراء',
      long: 'سورة الإسراء',
      transliteration: { en: 'Al-Israa', id: "Al-Isra'" },
      translation: {
        en: 'The Night Journey',
        id: 'Memperjalankan Malam Hari',
      },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat ini terdiri atas 111 ayat, termasuk golongan surat-surat Makkiyyah. Dinamakan dengan Al Israa' yang berarti memperjalankan di malam hari, berhubung peristiwa Israa' Nabi Muhammad s.a.w. di Masjidil Haram di Mekah ke Masjidil Aqsha di Baitul Maqdis dicantumkan pada ayat pertama dalam surat ini. Penuturan cerita Israa' pada permulaan surat ini, mengandung isyarat bahwa Nabi Muhammad s.a.w. beserta umatnya kemudian hari akan mencapai martabat yang tinggi dan akan menjadi umat yang besar. Surat ini dinamakan pula dengan Bani Israil artinya keturunan Israil berhubung dengan permulaan surat ini, yakni pada ayat kedua sampai dengan ayat kedelapan dan kemudian dekat akhir surat yakni pada ayat 101 sampai dengan ayat 104, Allah menyebutkan tentang Bani Israil yang setelah menjadi bangsa yang kuat lagi besar lalu menjadi bangsa yang terhina karena menyimpang dari ajaran Allah s.w.t. Dihubungkannya kisah Israa' dengan riwayat Bani Israil pada surat ini, memberikan peringatan bahwa umat Islam akan mengalami keruntuhan, sebagaimana halnya Bani Israil, apabila mereka juga meninggalkan ajaran-ajaran agamanya.",
    },
  },
  {
    number: 18,
    sequence: 69,
    numberOfVerses: 110,
    name: {
      short: 'الكهف',
      long: 'سورة الكهف',
      transliteration: { en: 'Al-Kahf', id: 'Al-Kahf' },
      translation: { en: 'The Cave', id: 'Goa' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat  ini terdiri atas 110 ayat, termasuk  golongan  surat-surat Makkiyyah. Dinamai Al-Kahfi artinya Gua dan Ashhabul Kahfi yang artinya Penghuni-Penghuni Gua. Kedua nama ini diambil dari cerita yang terdapat dalam surat ini pada ayat 9 sampai dengan 26, tentang beberapa orang pemuda yang tidur dalam gua bertahun-tahun lamanya. Selain cerita tersebut, terdapat pula beberapa buah cerita dalam surat ini, yang kesemuanya mengandung i'tibar dan pelajaran-pelajaran yang amat berguna bagi kehidupan manusia. Banyak hadist-hadist Rasulullah s.a.w. yang menyatakan keutamaan membaca surat ini.",
    },
  },
  {
    number: 19,
    sequence: 44,
    numberOfVerses: 98,
    name: {
      short: 'مريم',
      long: 'سورة مريم',
      transliteration: { en: 'Maryam', id: 'Maryam' },
      translation: { en: 'Mary', id: 'Maryam' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Maryam terdiri atas 98 ayat, termasuk golongan surat-surat Makkiyyah, karena hampir seluruh ayatnya diturunkan sebelum Nabi Muhammad s.a.w. hijrah ke Madinah, bahkan sebelum sahabat-sahabat beliau hijrah ke negeri Habsyi. Menurut riwayat Ibnu Mas'ud, Ja'far bin Abi Thalib membacakan permulaan surat Maryam ini kepada raja Najasyi dan pengikut-pengikutnya di waktu ia ikut hijrah bersama-sama sahabat-sahabat yang lain ke negeri Habsyi.Surat ini dinamai Maryam, karena surat ini mengandung kisah Maryam, ibu Nabi Isa a.s. yang serba ajaib, yaitu melahirkan puteranya lsa a.s., sedang ia sebelumnya belum pernah dikawini atau dicampuri oleh seorang laki-laki pun. Kelahiran Isa a.s. tanpa bapa, merupakan suatu bukti kekuasaan Allah s.w.t.  Pengutaraan kisah Maryam sebagai kejadian yang luar biasa dan ajaib dalam surat ini, diawali dengan kisah kejadian yang luar biasa dan ajaib pula, yaitu dikabulkannya doa Zakaria a.s. oleh Allah s.w.t., agar beliau dianugerahi seorang putera sebagai pewaris dan pelanjut cita-cita dan kepercayaan beliau, sedang usia beliau sudah sangat tua dan isteri beliau seorang yang mandul yang menurut ukuran ilmu biologi tidak mungkin akan terjadi.",
    },
  },
  {
    number: 20,
    sequence: 45,
    numberOfVerses: 135,
    name: {
      short: 'طه',
      long: 'سورة طه',
      transliteration: { en: 'Taa-Haa', id: 'Taha' },
      translation: { en: 'Taa-Haa', id: 'Taha' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat Thaahaa terdiri atas 135 ayat, diturunkan sesudah diturunkannya surat Maryam, termasuk golongan surat-surat Makkiyyah. Surat ini dinamai Thaahaa, diambil dari perkataan yang berasal dan ayat pertama surat ini. Sebagaimana yang lazim terdapat pada surat-surat yang memakai huruf-huruf abjad pada permulaannya, di mana huruf tersebut seakan-akan merupakan pemberitahuan Allah kepada orang-orang yang membacanya, bahwa sesudah huruf itu akan dikemukakan hal-hal yang  sangat penting diketahui, maka demikian pula halnya dengan ayat-ayat yang terdapat sesudah huruf thaahaa dalam surat ini. Allah menerangkan bahwa Al Quran merupakan peringatan bagi manusia, wahyu dari Allah, Pencipta semesta alam. Kemudian Allah menerangkan kisah beberapa orang nabi; akibat-akibat yang telah ada akan dialami oleh orang-orang yang percaya kepada Allah dan orang-orang yang mengingkari-Nya, baik di dunia maupun di akhirat. Selain hal-hal tersebut di atas, maka surat ini mengandung pokok-pokok isi sebagai berikut:',
    },
  },
  {
    number: 21,
    sequence: 73,
    numberOfVerses: 112,
    name: {
      short: 'الأنبياء',
      long: 'سورة الأنبياء',
      transliteration: { en: 'Al-Anbiyaa', id: "Al-Anbiya'" },
      translation: { en: 'The Prophets', id: 'Para Nabi' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Al Anbiyaa' yang terdiri atas 112 ayat, termasuk golongan surat Makkiyyah. Dinamai surat ini dengan al anbiyaa'(nabi-nabi), karena surat ini mengutarakan kisah beberapa orang nabi. Permulaan surat Al Anbiyaa' menegaskan bahwa manusia lalai dalam menghadapi hari berhisab, kemudian berhubung adanya pengingkaran kaum musyrik Mekah terhadap wahyu yang dibawa Nabi Muhammad s.a.w. maka ditegaskan Allah, kendatipun nabi-nabi itu manusia biasa, akan tetapi masing-masing mereka adalah manusia yang membawa wahyu yang pokok ajarannya adalah tauhid, dan keharusan manusia menyembah Allah Tuhan Penciptanya. Orang yang tidak mau mengakui kekuasaan Allah dan mengingkari ajaran yang dibawa oleh nabi-nabi itu, akan diazab Allah didunia dan di akhirat nanti. Kemudian dikemukakan kisah beberapa orang nabi dengan umatnya. Akhirnya surat itu ditutup dengan seruan agar kaum musyrik Mekah percaya kepada ajaran yang dibawa Muhammad s.a.w supaya tidak mengalami apa yang telah dialami oleh umat-umat yang dahulu.",
    },
  },
  {
    number: 22,
    sequence: 103,
    numberOfVerses: 78,
    name: {
      short: 'الحج',
      long: 'سورة الحج',
      transliteration: { en: 'Al-Hajj', id: 'Al-Hajj' },
      translation: { en: 'The Pilgrimage', id: 'Haji' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: "Surat Al Hajj, termasuk golongan surat-surat Madaniyyah, terdiri atas 78 ayat, sedang menurut pendapat sebahagian ahli tafsir termasuk golongan surat-surat Makkiyah. Sebab perbedaan ini ialah karena sebahagian ayat-ayat surat ini ada yang diturunkan di Mekah dan sebahagian lagi diturunkan di Madinah. Dinamai surat ini Al Hajj, karena surat ini mengemukakan hal-hal yang berhubungan dengan ibadat haji, seperti ihram, thawaf, sa'i, wuquf di Arafah, mencukur rambut, syi'ar-syi'ar Allah, faedah-faedah dan hikmah-hikmah disyari'atkannya haji. Ditegaskan pula bahwa ibadat haji itu telah disyari'atkan di masa Nabi Ibrahim a.s., dan Ka'bah didirikan oleh Nabi Ibrahim a.s. bersama puteranya Ismail a.s.Menurut Al Ghaznawi, surat Al Hajj termasuk di antara surat- surat yang ajaib, diturunkan di malam dan di siang hari, dalam musafir dan dalam keadaan tidak musafir, ada ayat-ayat yang diturunkan di Mekah dan ada pula yang diturunkan di Madinah, isinya ada yang berhubungan dengan peperangan dan ada pula yang berhubungan dengan perdamaian, ada ayat-ayatnya yang muhkam dan ada pula yang mutasyabihaat.",
    },
  },
  {
    number: 23,
    sequence: 74,
    numberOfVerses: 118,
    name: {
      short: 'المؤمنون',
      long: 'سورة المؤمنون',
      transliteration: { en: 'Al-Muminoon', id: "Al-Mu'minun" },
      translation: { en: 'The Believers', id: 'Orang-Orang Mukmin' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Al Mu'minuun terdiri atas 118 ayat, termasuk golongan surat-surat Makkiyyah. Dinamai Al Mu'minuun, karena permulaan ayat ini manerangkan bagaimana seharusnya sifat-sifat orang mukmin yang menyebabkan keberuntungan mereka di akhirat dan ketenteraman jiwa mereka di dunia. Demikian tingginya sifat-sifat itu, hingga ia telah menjadi akhlak bagi Nabi Muhammad s.a.w.",
    },
  },
  {
    number: 24,
    sequence: 102,
    numberOfVerses: 64,
    name: {
      short: 'النور',
      long: 'سورة النور',
      transliteration: { en: 'An-Noor', id: 'An-Nur' },
      translation: { en: 'The Light', id: 'Cahaya' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: 'Surat An Nuur terdiri atas 64 ayat, dan termasuk golongan surat-surat Madaniyah. Dinamai An Nuur yang berarti Cahaya, diambil dari kata An Nuur yang terdapat pada ayat ke 35. Dalam ayat ini, Allah s.w.t. menjelaskan tentang Nuur Ilahi, yakni Al Quran yang mengandung petunjuk-petunjuk. Petunjuk-petunjuk Allah itu, merupakan cahaya yang terang benderang menerangi alam semesta. Surat ini sebagian besar isinya memuat petunjuk- petunjuk Allah yang berhubungan dengan soal kemasyarakatan dan rumah tangga.',
    },
  },
  {
    number: 25,
    sequence: 42,
    numberOfVerses: 77,
    name: {
      short: 'الفرقان',
      long: 'سورة الفرقان',
      transliteration: { en: 'Al-Furqaan', id: 'Al-Furqan' },
      translation: { en: 'The Criterion', id: 'Pembeda' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat ini terdiri atas 77 ayat, termasuk golongan surat-surat Makkiyah. Dinamai Al Furqaan yang artinya pembeda, diambil dari kata Al Furqaan yang terdapat pada ayat pertama surat ini. Yang dimaksud dengan Al Furqaan dalam ayat ini ialah Al Quran. Al Quran dinamakan Al Furqaan karena dia membedakan antara yang haq dengan yang batil. MAka pada surat ini pun terdapat ayat-ayat yang membedakan antara kebenaran ke-esaan Allah s.w.t. dengan kebatilan kepercayaan syirik.',
    },
  },
  {
    number: 26,
    sequence: 47,
    numberOfVerses: 227,
    name: {
      short: 'الشعراء',
      long: 'سورة الشعراء',
      transliteration: { en: "Ash-Shu'araa", id: "Asy-Syu'ara'" },
      translation: { en: 'The Poets', id: 'Para Penyair' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat ini terdiri dari 227 ayat termasuk golongan surat-surat Makkiyyah. Dinamakan Asy Syu'araa' (kata jamak dari Asy Syaa'ir yang berarti penyair) diambil dari kata Asy Syuaraa' yang terdapat pada ayat 224, yaitu pada bagian terakhir surat ini, di kala Allah s.w.t. secara khusus menyebutkan kedudukan penyair- penyair. Para penyair-penyair itu mempunyai sifat-sifat yang jauh berbeda dengan para rasul-rasul; mereka diikuti oleh orang-orang yang sesat dan mereka suka memutar balikkan lidah dan mereka tidak mempunyai pendirian, perbuatan mereka tidak sesuai dengan tidak mempunyai pendirian, perbuatan mereka tidak sesuai dengan apa yang mereka ucapkan. Sifat-sifat yang demikian tidaklah sekali-kali terdapat pada rasul-rasul. Oleh karena demikian tidak patut bila Nabi Muhammad s.a.w. dituduh sebagai penyair, dan Al Quran dituduh sebagai syair, Al Quran adalah wahyu Allah, bukan buatan manusia.",
    },
  },
  {
    number: 27,
    sequence: 48,
    numberOfVerses: 93,
    name: {
      short: 'النمل',
      long: 'سورة النمل',
      transliteration: { en: 'An-Naml', id: 'An-Naml' },
      translation: { en: 'The Ant', id: 'Semut-semut' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat An Naml terdiri atas 98 ayat, termasuk golongan surat- surat Makkiyyah dan diturunkan sesudah surat Asy Syu'araa'. Dinamai dengan An Naml, karena pada ayat 18 dan 19 terdapat perkataan An Naml (semut), di mana raja semut mengatakan kepada anak buahnya agar masuk sarangnya masing-masing, supaya jangan terpijak oleh Nabi Sulaiman a.s. dan tentaranya yang akan lalu di tempat itu. Mendengar perintah raja semut kepada anak buahnya itu, Nabi Sulaiman tersenyum dan ta'jub atas keteraturan kerajaan semut itu dan beliau mengucapkan syukur kepada Tuhan Yang Maba Kuasa yang telah melimpahkan nikmat kepadanya, berupa kerajaan, kekayaan, memahami ucapan-ucapan binatang, mempunyai tentara yang terdiri atas jin, manusia, burung dan sebagainya. Nabi Sulaiman a.s. yang telah diberi Allah nikmat yang besar itu tidak merasa takabur dan sombong dan sebagai seorang hamba Allah mohon agar Allah memasukkannya ke dalam golongan orang-orang yang saleh. Allah s.w.t. menyebut binatang semut dalam surat ini agar manusia mengambil pelajaran dari kehidupan semut itu. Semut adalah binatang yang hidup berkelompok di dalam tanah, membuat liang dan ruang yang bertingkat-tingkat sebagai rumah dan gudang tempat menyimpan makanan musim dingin. Kerapian dan kedisiplinan yang terdapat dalam kerajaan semut ini, dinyatakan Allah dalam ayat ini dengan bagaimana rakyat semut mencari perlindungan segera agar jangan terpijak oleh Nabi Sulaiman a.s dan tentaranya, setelah menerima peringatan dari rajanya. Secara tidak langsung Allah mengingatkan juga kepada manusia agar dalam berusaha untuk mencukupkan kebutuhan sehari-hari, mementingkan pula kemaslahatan bersama dan sebagainya, rakyat semut mempunyai organisasi dan kerja sama yang baik pula. Dengan mengisahkan kisah Nabi Sulaiman a.s. dalam surat ini Allah mengisyaratkan hari depan dan kebesaran Nabi Muhammad s.a.w. Nabi Sulaiman a.s. sebagai seorang nabi, rasul dan raja yang dianugerahi kekayaan yang melimpah ruah, begitu pula Nabi Muhammad s.a.w. sebagai seorang nabi, rasul dan seoramg kepala negara yang ummi' dan miskin akan berhasil membawa dan memimpin umatnya ke jalan Allah.",
    },
  },
  {
    number: 28,
    sequence: 49,
    numberOfVerses: 88,
    name: {
      short: 'القصص',
      long: 'سورة القصص',
      transliteration: { en: 'Al-Qasas', id: 'Al-Qasas' },
      translation: { en: 'The Stories', id: 'Kisah-Kisah' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Al Qashash terdiri atas 88 ayat termasuk golongan surat-surat Makkiyyah. Dinamai dengan Al Qashash, karena pada ayat 25 surat ini terdapat kata Al Qashash yang berarti cerita. Ayat ini menerangkan bahwa setelah Nabi Musa a.s. bertemu dengan Nabi Syua'ib a.s. ia menceritakan cerita yang berhubungan  dengan dirinya sendiri, yakni pengalamannya dengan Fir'aun, sampai waktu ia diburu oleh Fir'aun karena membunuh seseorang dari bangsa Qibthi tanpa disengaja, Syua'ib a.s. menjawab bahwa Musa a.s. telah selamat dari pengejaran  orang-orang zalim. Turunnya ayat 25 surat ini amat besar artinya bagi Nabi Muhammad s.a.w. dan bagi sahabat-sahabat yang melakukan hijrah ke Madinah, yang menambah keyakinan mereka, bahwa akhirnya orang-orang Islamlah yang menang, sebab ayat ini menunjukkan bahwa barangsiapa yang berhijrah dari tempat musuh untuk mempertahankan keimanan, pasti akan berhasil dalam perjuangannya menghadapi musuh-musuh agama. Kepastian kemenangan bagi kaum muslimin itu, ditegaskan pada bagian akhir surat ini yang mengandung bahwa setelah hijrah ke Madinah kaum muslimin akan kembali ke Mekah sebagai pemenang dan penegak agama Allah. Surat Al Qashash ini adalah surat yang paling lengkap memuat cerita Nabi Musa a.s. sehingga menurut suatu riwayat, surat ini dinamai juga dengan surat Musa.",
    },
  },
  {
    number: 29,
    sequence: 85,
    numberOfVerses: 69,
    name: {
      short: 'العنكبوت',
      long: 'سورة العنكبوت',
      transliteration: { en: 'Al-Ankaboot', id: "Al-'Ankabut" },
      translation: { en: 'The Spider', id: 'Laba-Laba' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Al 'Ankabuut terdiri atas 69 ayat, termasuk golongan surat-surrat Makkiyah. Dinamai Al 'Ankabuut berhubung terdapatnya perkataan Al 'Ankabuut yang berarti laba-laba pada ayat 41 surat ini, dimana Allah mengumpamakan penyembah-penyembah berhala-berhala itu, dengan laba-laba yang percaya kepada kekuatan rumahnya sebagai tempat ia berlindung dan tempat ia menjerat mangsanya, padahal kalau dihembus angin atau ditimpa oleh suatu barang yang kecil saja, rumah itu akan hancur. Begitu pula halnya dengan kaum musyrikin yang percaya kepada kekuatan sembahan-sembahan mereka sebagai tempat berlindung dan tempat meminta sesuatu yang mereka ingini, padahal sembahan-sembahan mereka itu tidak mampu sedikit juga menolong mereka dari azab Allah waktu di dunia, seperti yang terjadi pada kaum Nuh, kaum Ibrahim, kaum Luth, kaum Syu'aib, kaum Saleh, dan lain-lain. Apalagi menghadapi azab Allah di akhirat nanti, sembahan-sembahan mereka itu lebih tidak mampu menghindarkan dan melindungi mereka.",
    },
  },
  {
    number: 30,
    sequence: 84,
    numberOfVerses: 60,
    name: {
      short: 'الروم',
      long: 'سورة الروم',
      transliteration: { en: 'Ar-Room', id: 'Ar-Rum' },
      translation: { en: 'The Romans', id: 'Romawi' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat Ar Ruum terdiri atas 60 ayat, termasuk golongan surat-surat Makkiyah diturunkan sesudah ayat Al Insyiqaq. Dinamakan Ar Ruum karena pada permulaan surat ini, yaitu ayat 2, 3 dan 4 terdapat pemberitaan bangsa Rumawi yang pada mulanya dikalahkan oleh bangsa Persia, tetapi setelah beberapa tahun kemudian kerajaan Ruum dapat menuntut balas dan mengalahkan kerajaan Persia kembali. Ini adalah suatu mukjizat Al Quran, yaitu memberitakan hal-hal yang akan terjadi di masa yang akan datang. Dan juga suatu isyarat bahwa kaum muslimin yang demikian lemahnya di waktu itu akan menang dan dapat menghancurkan kaum musyrikin. Isyarat ini terbukti pertama kali pada perang Badar.',
    },
  },
  {
    number: 31,
    sequence: 57,
    numberOfVerses: 34,
    name: {
      short: 'لقمان',
      long: 'سورة لقمان',
      transliteration: { en: 'Luqman', id: 'Luqman' },
      translation: { en: 'Luqman', id: 'Luqman' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat  Luqman  terdiri   dari   34   ayat,   termasuk   golongan   surat-surat Makkiyyah, diturunkan sesudah surat Ash Shaffaat. Dinamai Luqman karena pada  ayat  12   disebutkan   bahwa   Luqman   telah diberi   oleh   Allah   nikmat   dan   ilmu   pengetahuan,  oleh sebab itu dia bersyukur kepadaNya atas nikmat yang  diberikan  itu.   Dan   pada   ayat   13 sampai 19 terdapat nasihat-nasihat Luqman kepada anaknya.Ini adalah sebagai  isyarat   daripada   Allah   supaya   setiap   ibu   bapak melaksanakan  pula terhadap anak-anak mereka sebagai yang telah dilakukan oleh Luqman.',
    },
  },
  {
    number: 32,
    sequence: 75,
    numberOfVerses: 30,
    name: {
      short: 'السجدة',
      long: 'سورة السجدة',
      transliteration: { en: 'As-Sajda', id: 'As-Sajdah' },
      translation: { en: 'The Prostration', id: 'Sajdah' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat As Sajdah terdiri atas 30 ayat termasuk golongan surat Makkiyah diturunkan sesudah surat Al Mu'minuun. Dinamakan As Sajdah berhubung pada surat ini terdapat ayat sajdah, yaitu ayat yang kelima belas.",
    },
  },
  {
    number: 33,
    sequence: 90,
    numberOfVerses: 73,
    name: {
      short: 'الأحزاب',
      long: 'سورة الأحزاب',
      transliteration: { en: 'Al-Ahzaab', id: 'Al-Ahzab' },
      translation: { en: 'The Clans', id: 'Golongan Yang Bersekutu' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: "Surat Al Ahzab terdiri atas 73 ayat, termasuk golongan surat-surat Madaniyah, diturunkan sesudah surat Ali'Imran. Dinamai Al Ahzab yang berarti golongan-golongan yang bersekutu karena dalam surat ini terdapat beberapa ayat, yaitu ayat 9 sampai dengan ayat 27 yang berhubungan dengan peperangan Al Ahzab, yaitu peperangan yang dilancarkan oleh orang-orang Yahudi, kaum munafik dan orang-orang musyrik terhadap orang-orang mukmin di Medinah. Mereka telah mengepung rapat orang- orang mukmin sehingga sebahagian dari mereka telah berputus asa dan menyangka bahwa mereka akan dihancurkan oleh musuh-musuh mereka itu. Ini adalah suatu ujian yang berat dari Allah untuk menguji sampai dimana teguhnya keimanan mereka. Akhirnya Allah mengirimkan bantuan berupa tentara yang tidak kelihatan dan angin topan, sehingga musuh-musuh itu menjadi kacau balau dan melarikan diri.",
    },
  },
  {
    number: 34,
    sequence: 58,
    numberOfVerses: 54,
    name: {
      short: 'سبإ',
      long: 'سورة سَبَأ',
      transliteration: { en: 'Saba', id: "Saba'" },
      translation: { en: 'Sheba', id: "Saba'" },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Saba' terdiri atas 54 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Luqman. Dinamakan Saba' karena didalamnya terdapat kisah kaum Saba'. Saba' adalah nama suatu kabilah dari kabilah-kabilah Arab yang tinggal di daerah Yaman sekarang ini. Mereka mendirikan kerajaan yang terkenal dengan nama kerajaan Sabaiyyah, ibukotanya Ma'rib; telah dapat membangun suatu bendungan raksasa, yang bernama Bendungan Ma'rib, sehingga negeri meka subur dan makmur. Kemewahan dan kemakmuran ini menyebabkan kaum Saba' lupa dan ingkar kepada Allah yang telah melimpahkan nikmatnya kepada mereka, serta mereka mengingkari pula seruan para rasul. Karena keingkaran mereka ini, Allah menimpahkan kepada mereka azab berupa sailul 'arim (banjir yang besar) yang ditimbulkan oleh bobolnya bendungan Ma'rib. Setelah bendungan ma'rib bobol negeri Saba' menjadi kering dan kerajaan mereka hancur.",
    },
  },
  {
    number: 35,
    sequence: 43,
    numberOfVerses: 45,
    name: {
      short: 'فاطر',
      long: 'سورة فاطر',
      transliteration: { en: 'Faatir', id: 'Fatir' },
      translation: { en: 'The Originator', id: 'Maha Pencipta' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat Faathir terdiri atas 45 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Furqaan dan merupakan surat akhir dari urutan surat-surat dalam Al Quran yang dimulai dengan Alhamdulillah. Dinamakan Faathir (pencipta) ada hubungannya dengan perkataan Faathir yang terdapat pada ayat pertama pada surat ini. Pada ayat tersebut diterangkan bahwa Allah adalah Pencipta langit dan bumi, Pencipta malaikat-malaikat, Pencipta semesta alam yang semuanya itu adalah sebagai bukti atas kekuasaan dan kebesaran-Nya. Surat ini dinamai juga dengan surat Malaikat karena pada ayat pertama disebutkan bahwa Allah telah menjadikan malaikat-malaikat sebagai utusan-Nya  yang mempunyai beberapa sayap.',
    },
  },
  {
    number: 36,
    sequence: 41,
    numberOfVerses: 83,
    name: {
      short: 'يس',
      long: 'سورة يس',
      transliteration: { en: 'Yaseen', id: 'Yasin' },
      translation: { en: 'Yaseen', id: 'Yasin' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat Yaasiin terdiri atas 83 ayat, termasuk golongan surat-surat Makkiyyah,  diturunkan sesudah surat Jin. Dinamai Yaasiin karena dimulai dengan huruf Yaasiin. Sebagaimana halnya arti huruf-huruf abjad yang terletak pada permulaan beberapa surat Al Quran, maka demikian pula arti Yaasiin yang terdapat pada ayat permulaan surat ini, yaitu Allah mengisyaratkan bahwa sesudah huruf tersebut akan dikemukakan hal-hal yang penting antara lain: Allah bersumpah dengan Al Quran bahwa Muhammad s.a.w. benar-benar seorang rasul yang diutus-Nya kepada kaum yang belum pernah diutus kepada mereka rasul-rasul.',
    },
  },
  {
    number: 37,
    sequence: 56,
    numberOfVerses: 182,
    name: {
      short: 'الصافات',
      long: 'سورة الصافات',
      transliteration: { en: 'As-Saaffaat', id: 'As-Saffat' },
      translation: {
        en: 'Those drawn up in Ranks',
        id: 'Barisan-Barisan',
      },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Ash Shaaffaat terdiri atas 182 ayat termasuk golongan surat Makkiyyah diturunkan sesudah surat Al An'aam. Dinamai dengan Ash Shaaffaat (yang bershaf-shaf) ada hubungannya dengan perkataan Ash Shaaffaat yang terletak pada ayat permulaan surat ini yang mengemukakan bagaimana para malaikat yang berbaris di hadapan Tuhannya yang bersih jiwanya, tidak dapat digoda oleh syaitan. Hal ini hendaklah menjadi i'tibar bagi manusia dalam menghambakan dirinya kepada Allah.",
    },
  },
  {
    number: 38,
    sequence: 38,
    numberOfVerses: 88,
    name: {
      short: 'ص',
      long: 'سورة ص',
      transliteration: { en: 'Saad', id: 'Sad' },
      translation: { en: 'The letter Saad', id: 'Sad' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat Shaad  terdiri atas  88 ayat  termasuk golongan  surat Makkiyyah, diturunkan sesudah surat Al Qamar. Dinamai  dengan  Shaad  karena surat  ini  dimulai  dengan Shaad (selanjutnya lihat no. [10)). Dalam surat  ini Allah  bersumpah dengan  Al Quran,   untuk menunjukkan bahwa Al Quran itu suatu  kitab yang  agung dan bahwa siapa saja yang  mengikutinya  akan mendapat  kebahagiaan  dunia  dan akhirat dan untuk menunjukkan bahwa Al Quran ini adalah mukjizat Nabi Muhammad s.a.w. yang  menyatakan kebenarannya dan ketinggian akhlaknya.',
    },
  },
  {
    number: 39,
    sequence: 59,
    numberOfVerses: 75,
    name: {
      short: 'الزمر',
      long: 'سورة الزمر',
      transliteration: { en: 'Az-Zumar', id: 'Az-Zumar' },
      translation: { en: 'The Groups', id: 'Rombongan' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Az Zumar terdiri ataz 75 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Saba'. Dinamakan Az Zumar (Rombongan-rombongan) karena perkataan Az Zumar yang terdapat pada ayat 71 dan 73 ini. Dalam ayat-ayat tersebut diterangkan keadaan manusia di hari kiamat setelah mereka dihisab, di waktu itu mereka terbagi atas dua rombongan; satu rombongan dibawa ke neraka dan satu rombongan lagi dibawa ke syurga. Masing- masing rombongan memperoleh balasan dari apa yang mereka kerjakan di dunia dahulu. Surat ini dinamakan juga Al Ghuraf (kamar-kamar) berhubung perkataan ghuraf yang terdapat pada ayat 20, dimana diterangkan keadaan kamar-kamar dalam syurga yang diperoleh orang-orang yang bertakwa.",
    },
  },
  {
    number: 40,
    sequence: 60,
    numberOfVerses: 85,
    name: {
      short: 'غافر',
      long: 'سورة غافر',
      transliteration: { en: 'Ghafir', id: 'Gafir' },
      translation: { en: 'The Forgiver', id: 'Maha Pengampun' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Al Mu'min terdiri atas 85 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Az Zumar. Dinamai Al Mu'min (Orang yang beriman), berhubung dengan perkataan mukmin yang terdapat pada ayat 28 surat ini. Pada ayat 28 diterangkan bahwa salah seorang dari kaum Fir'aun telah beriman kepada Nabi Musa a.s. dengan menyembunyikan imannya kepada kaumnya, setelah mendengar keterangan dan melihat mukjizat yang dikemukakan oleh Nabi Musa a.s. Hati kecil orang ini mencela Fir'aun dan kaumnya yang tidak mau beriman kepada Nabi Musa a.s., sekalipun telah dikemukakan keterangan dan mukjizat yang diminta mereka.Dinamakan pula Ghafir (yang mengampuni), karena ada hubungannya dengan kalimat Ghafir yang terdapat pada ayat 3 surat ini. Ayat ini mengingatkan bahwa Maha Pengampun dan Maha Penerima Taubat adalah sebagian dari sifat-sifat Allah, karena itu hamba-hamba Allah tidak usah khawatir terhadap  perbuatan-perbuatan dosa yang telah terlanjur mereka lakukan, semuanya itu akan diampuni Allah asal benar-benar memohon ampun dan bertaubat kepada-Nya dan berjanji tidak akan mengerjakan  perbuatan-perbuatan dosa itu lagi. Dan surat ini dinamai Dzit Thaul (Yang Mempunyai Kurnia) karena perkataan tersebut terdapat pada ayat 3.",
    },
  },
  {
    number: 41,
    sequence: 61,
    numberOfVerses: 54,
    name: {
      short: 'فصلت',
      long: 'سورة فصلت',
      transliteration: { en: 'Fussilat', id: 'Fussilat' },
      translation: { en: 'Explained in detail', id: 'Yang Dijelaskan' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Fushshilat terdiri atas 54 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Mu'min. Dinamai Fushshilat (yang dijelaskan) karena ada hubungannya dengan perkataan Fushshilat yang terdapat pada permulaan surat ini yang berarti yang dijelaskan. Maksudnya ayat-ayatnya diperinci dengan jelas tentang hukum-hukum, keimanan, janji dan ancaman, budi pekerti, kisah, dan sebagainya. Dinamai juga dengan Haa Miim dan As Sajdah karena surat ini dimulai dengan Haa Miim dan dalam surat ini terdapat ayat Sajdah.",
    },
  },
  {
    number: 42,
    sequence: 62,
    numberOfVerses: 53,
    name: {
      short: 'الشورى',
      long: 'سورة الشورى',
      transliteration: { en: 'Ash-Shura', id: 'Asy-Syura' },
      translation: { en: 'Consultation', id: 'Musyawarah' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Asy Syuura terdiri atas 53 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Fushshilat. Dinamai dengan Asy Syuura (musyawarat) diambil dari perkataan Syuura yang terdapat pada ayat 38 surat ini. Dalam ayat tersebut diletakkan salah satu dari dasar-dasar pemerintahan Islam ialah musyawarat. Dinamai juga Haa Miim 'Ain Siin Qaaf karena surat ini dimulai dengan huruf-huruf hijaiyah itu.",
    },
  },
  {
    number: 43,
    sequence: 63,
    numberOfVerses: 89,
    name: {
      short: 'الزخرف',
      long: 'سورة الزخرف',
      transliteration: { en: 'Az-Zukhruf', id: 'Az-Zukhruf' },
      translation: { en: 'Ornaments of gold', id: 'Perhiasan' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat Az Zukhruf terdiri atas 89 ayat, termasuk golongan  surat-surat Makkiyyah, diturunkan sesudah surat Asy Syuura. Dinamai Az Zukhruf (Perhiasan) diambil dari perkataan Az Zukhruf yang terdapat pada ayat 35 surat ini.  Orang-orang musyrik mengukur tinggi rendahnya derajat seseorang tergantung kepada perhiasan dan harta benda yang ia punyai, karena Muhammad s.a.w. adalah seorang anak yatim lagi miskin, ia tidak pantas diangkat Allah sebagai seorang rasul dan nabi.  Pangkat rasul dan nabi harus diberikan kepada orang yang kaya.  Ayat ini menegaskan bahwa harta tidak dapat dijadikan dasar untuk mengukur tinggi rendahnya derajat seseorang, karena harta itu merupakan hiasan kehidupan duniawi, bukan berarti kesenangan akhirat.',
    },
  },
  {
    number: 44,
    sequence: 64,
    numberOfVerses: 59,
    name: {
      short: 'الدخان',
      long: 'سورة الدخان',
      transliteration: { en: 'Ad-Dukhaan', id: 'Ad-Dukhan' },
      translation: { en: 'The Smoke', id: 'Kabut' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Ad Dukhaan terdiri atas 59 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah Az Zukhruf. Dinamai Ad Dukhaan (kabut), diambil dari perkataan Dukhaan yang terdapat pada ayat 10 surat ini.Menurut riwayat Bukhari secara ringkas dapat diterangkan sebagai berikut: Orang-orang kafir Mekah dalam menghalang-halangi agama Islam dan menyakiti serta mendurhakai Nabi Muhammad s.a.w. sudah melewati batas, karena itu Nabi mendoa kepada Allah agar diturunkan azab sebagaimana yang telah diturunkan kepada orang-orang yang durhaka kepada Nabi Yusuf yaitu musim kemarau yang panjang.  Do'a Nabi itu dikabulkan Allah sampai orang-orang kafir memakan tulang dan bangkai, karena kelaparan.  Mereka selalu menengadah ke langit mengharap pertolongan Allah.  Tetapi tidak satupun yang mereka lihat kecuali kabut yang menutupi pandangan mereka.Akhirnya mereka datang kepada Nabi agar Nabi memohon kepada Allah supaya hujan diturunkan.  Setelah Allah mengabulkan doa Nabi, dan hujan di turunkan, mereka kembali kafir seperti semula; karena itu Allah menyatakan bahwa nanti mereka akan diazab dengan azab yang pedih.",
    },
  },
  {
    number: 45,
    sequence: 65,
    numberOfVerses: 37,
    name: {
      short: 'الجاثية',
      long: 'سورة الجاثية',
      transliteration: { en: 'Al-Jaathiya', id: 'Al-Jasiyah' },
      translation: { en: 'Crouching', id: 'Berlutut' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Al Jaatsiyah terdiri atas 37 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Ad Dukhaan. Dinamai dengan Al Jaatsiyah (yang berlutut) diambil dari perkataan Jaatsiyah yang terdapat pada ayat 28 surat ini. Ayat tersebut menerangkan tentang keadaan manusia pada hari kiamat, yaitu semua manusia dikumpulkan ke hadapan mahkamah Allah Yang Maha Tinggi yang memberikan keputusan terhadap perbuatan yang telah mereka lakukan di dunia. Pada hari itu semua manusia berlutut di hadapan Allah. Dinamai juga dengan Asy Syari'ah diambil dari perkataan Syari'ah (Syari'at) yang terdapat pada ayat 18 surat ini.",
    },
  },
  {
    number: 46,
    sequence: 66,
    numberOfVerses: 35,
    name: {
      short: 'الأحقاف',
      long: 'سورة الأحقاف',
      transliteration: { en: 'Al-Ahqaf', id: 'Al-Ahqaf' },
      translation: { en: 'The Dunes', id: 'Bukit Pasir' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Al Ahqaaf terdiri dari 35 ayat termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Jaatsiyah. Dinamai Al Ahqaaf  (bukit-bukit pasir) dari perkataan Al Ahqaaf yang terdapat pada ayat 21 surat ini.Dalam ayat tersebut dan ayat-ayat sesudahnya diterangkan bahwa Nabi Hud a.s. telah menyampaikan risalahnya kepada kaumnya di Al Ahqaaf yang sekarang dikenal dengan Ar Rab'ul Khaali, tetapi kaumnya tetap ingkar sekalipun mereka telah diberi peringatan pula oleh rasul-rasul yang sebelumnya.  Akhirnya Allah menghancurkan mereka dengan tiupan angin kencang.  Hal ini adalah sebagai isyarat dari Allah kepada kaum musyrikin Quraisy bahwa mereka akan dihancurkan bila mereka tidak mengindahkan seruan Rasul.",
    },
  },
  {
    number: 47,
    sequence: 95,
    numberOfVerses: 38,
    name: {
      short: 'محمد',
      long: 'سورة محمد',
      transliteration: { en: 'Muhammad', id: 'Muhammad' },
      translation: { en: 'Muhammad', id: 'Muhammad' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: 'Surat Muhammad terdiri atas 38 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Al Hadiid. Nama Muhammad sebagai nama surat ini diambil dari perkataan Muhammad yang terdapat pada ayat 2 surat ini. Pada ayat 1, 2, dan 3 surat ini, Allah membandingkan antara hasil yang diperoleh oleh orang-orang yang tidak percaya kepada apa yang diturunkan kepada Nabi Muhammad s.a.w dan hasil yang diperoleh oleh orang-orang yang tidak percaya kepadanya. Orang-orang yang percaya kepada apa yang dibawa oleh Muhammad s.a.w merekalah orang-orang yang beriman dan mengikuti yang hak, diterima Allah semua amalnya, diampuni segala kesalahannya. Adapun orang-orang yang tidak percaya kepada Muhammad s.a.w adalah orang-orang yang mengikuti kebatilan, amalnya tidak diterima, dosa mereka tidak diampuni, kepada mereka dijanjikan azab di dunia dan di akhirat.Dinamai juga dengan Al Qital (peperangan), karena sebahagian besar surat ini mengutarakan tentang peperangan dan pokok-pokok hukumnya, serta bagaimana seharusnya sikap orang-orang mukmin terhadap orang-orang kafir.',
    },
  },
  {
    number: 48,
    sequence: 111,
    numberOfVerses: 29,
    name: {
      short: 'الفتح',
      long: 'سورة الفتح',
      transliteration: { en: 'Al-Fath', id: 'Al-Fath' },
      translation: { en: 'The Victory', id: 'Kemenangan' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: "Surat Al Fath terdiri atas 29 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Al Jum'ah. Dinamakan Al Fath (kemenangan) diambil dari perkataan Fat-han yang terdapat pada ayat pertama surat ini. Sebagian besar dari ayat-ayat surat ini menerangkan hal-hal yang berhubungan dengan kemenangan yang dicapai Nabi Muhammad s.a.w. dalam peperangan-peperangannya. Nabi Muhammad s.a.w. sangat gembira dengan turunnya ayat pertama surat ini. Kegembiraan ini dinyatakan dalam sabda beliau yang diriwayatkan Bukhari; Sesungguhnya telah diturunkan kepadaku satu surat, yang surat itu benar-benar lebih aku cintai dari seluruh apa yang disinari matahari. Kegembiraan Nabi Muhammad s.a.w. itu ialah karena ayat-ayatnya menerangkan tentang kemenangan yang akan diperoleh Muhammad s.a.w. dalam perjuangannya dan tentang kesempurnaan nikmat Allah kepadanya.",
    },
  },
  {
    number: 49,
    sequence: 106,
    numberOfVerses: 18,
    name: {
      short: 'الحجرات',
      long: 'سورة الحجرات',
      transliteration: { en: 'Al-Hujuraat', id: 'Al-Hujurat' },
      translation: { en: 'The Inner Apartments', id: 'Kamar-Kamar' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: 'Surat Al Hujuraat terdiri atas 18 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Al Mujaadalah. Dinamai Al Hujuraat diambil dari perkataan Al Hujuraat yang terdapat pada ayat 4 surat ini. Ayat tersebut mencela para sahabat yang memanggil Nabi Muhammad SAW yang sedang berada di dalam kamar rumahnya bersama isterinya. Memanggil Nabi Muhammad SAW dengan cara dan dalam keadaan yang demikian menunjukkan sifat kurang hormat kepada beliau dan mengganggu ketenteraman beliau.',
    },
  },
  {
    number: 50,
    sequence: 34,
    numberOfVerses: 45,
    name: {
      short: 'ق',
      long: 'سورة ق',
      transliteration: { en: 'Qaaf', id: 'Qaf' },
      translation: { en: 'The letter Qaaf', id: 'Qaf' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Qaaf terdiri atas 45 ayat, termasuk golongan surat-surat Makkiyah diturunkan sesudah surat Al Murssalaat. Dinamai Qaaf karena surat ini dimulai dengan huruf Qaaf. Menurut hadits yang diriwayatkan Imam Muslim, bahwa Rasulullah SAW senang membaca surat ini pada rakaat pertama sembahyang subuh dan pada shalat hari raya. Sedang menurut riwayat Abu Daud, Al Baihaqy dan Ibnu Majah bahwa Rasulullah SAW membaca surat ini pada tiap-tiap membaca Khutbah pada hari Jum'at. Kedua riwayat ini menunjukkan bahwa surat QAAF sering dibaca Nabi Muhammad SAW di tempat-tempat umum, untuk memperingatkan manusia tentang kejadian mereka dan nikmat-nikmat yang diberikan kepadanya, begitu pula tentang hari berbangkit, hari berhisab, syurga, neraka, pahala, dosa, dsb. Surat ini dinamai juga Al Baasiqaat, diambil dari perkataan Al- Baasiqaat yang terdapat pada ayat 10 surat ini.",
    },
  },
  {
    number: 51,
    sequence: 67,
    numberOfVerses: 60,
    name: {
      short: 'الذاريات',
      long: 'سورة الذاريات',
      transliteration: { en: 'Adh-Dhaariyat', id: 'Az-Zariyat' },
      translation: {
        en: 'The Winnowing Winds',
        id: 'Angin yang Menerbangkan',
      },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat Adz Dzaariyaat terdiri atas 60 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Ahqaaf. Dinamai Adz Dzaariyaat (angin yang menerbangkan), diambil dari perkataan Adz Dzaariyaat yang terdapat pada ayat pertama surat ini. Allah bersumpah dengan angin, mega, bahtera, dan malaikat yang menjadi sumber kesejahteraan dan pembawa kemakmuran. Hal ini meng- isyaratkan inayat Allah kepada hamba-hamba-Nya.',
    },
  },
  {
    number: 52,
    sequence: 76,
    numberOfVerses: 49,
    name: {
      short: 'الطور',
      long: 'سورة الطور',
      transliteration: { en: 'At-Tur', id: 'At-Tur' },
      translation: { en: 'The Mount', id: 'Bukit Tursina' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat Ath Thuur terdiri atas 49 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat As Sajdah. Dinamai Ath Thuur (Bukit) diambil dari perkataan Ath Thuur yang terdapat pada ayat pertama surat ini. Yang dimaksud dengan bukit di sini ialah bukit Thursina yang terletak di semenanjung Sinai, tempat Nabi Musa menerima wahyu dari Tuhannya.',
    },
  },
  {
    number: 53,
    sequence: 23,
    numberOfVerses: 62,
    name: {
      short: 'النجم',
      long: 'سورة النجم',
      transliteration: { en: 'An-Najm', id: 'An-Najm' },
      translation: { en: 'The Star', id: 'Bintang' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat An Najm terdiri atas 62 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Ikhlash. Nama An Najm (bintang), diambil dari perkataan  An Najm yang terdapat pada ayat pertama surat ini. Allah bersumpah dengan An Najm (bintang) adalah karena bintang-bintang yang timbul dan tenggelam, amat besar manfaatnya bagi manusia, sebagai pedoman bagi manusia dalam melakukan pelayaran di lautan, dalam perjalanan di padang pasir, untuk menentukan peredaran musim dan sebagainya.',
    },
  },
  {
    number: 54,
    sequence: 37,
    numberOfVerses: 55,
    name: {
      short: 'القمر',
      long: 'سورة القمر',
      transliteration: { en: 'Al-Qamar', id: 'Al-Qamar' },
      translation: { en: 'The Moon', id: 'Bulan' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat Al Qamar terdiri atas 55 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesedah surat Ath Thaariq. Nama Al Qamar (bulan) diambil dari perkataan Al Qamar yang terdapat pada ayat pertama surat ini. Pada ayat ini diterangkan tentang terbelahnya bulan sebagai mukjizat Nabi Muhammad s.a.w.',
    },
  },
  {
    number: 55,
    sequence: 97,
    numberOfVerses: 78,
    name: {
      short: 'الرحمن',
      long: 'سورة الرحمن',
      transliteration: { en: 'Ar-Rahmaan', id: 'Ar-Rahman' },
      translation: { en: 'The Beneficent', id: 'Maha Pengasih' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: "Surat Ar Rahmaan terdiri atas 78 ayat, termasuk golongan surat- surat Madaniyyah, diturunkan sesudah surat Ar Ra'du. Dinamai Ar Rahmaan (Yang Maha Pemurah), diambil dari perkataan Ar Rahmaan yang terdapat pada ayat pertama surat ini. Ar Rahmaan adalah salah satu dari nama-nama Allah. Sebagian besar dari surat ini menerangkan kepemurahan Allah s.w.t. kepada hamba-hamba-Nya, yaitu dengan memberikan nikmat-nikmat yang tidak terhingga baik di dunia maupun di akhirat nanti.",
    },
  },
  {
    number: 56,
    sequence: 46,
    numberOfVerses: 96,
    name: {
      short: 'الواقعة',
      long: 'سورة الواقعة',
      transliteration: { en: 'Al-Waaqia', id: "Al-Waqi'ah" },
      translation: { en: 'The Inevitable', id: 'Hari Kiamat' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Al Waaqi'ah terdiri atas 96 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Thaa Haa. \tDinamai dengan Al Waaqi'ah (Hari Kiamat), diambil dari perkataan Al Waaqi'ah yang terdapat pada ayat pertama surat ini.",
    },
  },
  {
    number: 57,
    sequence: 94,
    numberOfVerses: 29,
    name: {
      short: 'الحديد',
      long: 'سورة الحديد',
      transliteration: { en: 'Al-Hadid', id: 'Al-Hadid' },
      translation: { en: 'The Iron', id: 'Besi' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: 'Surat Al Hadiid terdiri atas 29 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Az Zalzalah. Dinamai Al Hadiid (Besi), diambil dari perkataan Al Hadiid yang terdapat pada ayat 25 surat ini.',
    },
  },
  {
    number: 58,
    sequence: 105,
    numberOfVerses: 22,
    name: {
      short: 'المجادلة',
      long: 'سورة المجادلة',
      transliteration: { en: 'Al-Mujaadila', id: 'Al-Mujadalah' },
      translation: { en: 'The Pleading Woman', id: 'Gugatan' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: "Surat Al Mujaadilah terdiri atas 22 ayat, termasuk golongan surat Madaniyyah, diturunkan sesudah surat Al Munaafiquun. Surat ini dinamai dengan Al Mujaadilah (wanita yang mengajukan gugatan) karena pada awal surat ini disebutkan bantahan seorang perempuan, menurut riwayat bernama Khaulah binti Tsa'labah terhadap sikap suaminya yang telah menzhiharnya. Hal ini diadukan kepada Rasulullah s.a.w. dan ia menuntut supaya beliau memberikan putusan yang adil dalam persoalan itu. Dinamai juga Al Mujaadalah yang berarti perbantahan.",
    },
  },
  {
    number: 59,
    sequence: 101,
    numberOfVerses: 24,
    name: {
      short: 'الحشر',
      long: 'سورة الحشر',
      transliteration: { en: 'Al-Hashr', id: 'Al-Hasyr' },
      translation: { en: 'The Exile', id: 'Pengusiran' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: 'Surat Al Hasyr terdiri atas 24 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Al Bayyinah. \tDinamai surat Al Hasyr (pengusiran) diambil dari perkataan Al-Hasyr yang terdapat pada ayat 2 surat ini. Di dalam surat ini disebutkan  kisah pengusiran suatu suku Yahudi yang bernama Bani Nadhir yang berdiam  di sekitar kota Madinah.',
    },
  },
  {
    number: 60,
    sequence: 91,
    numberOfVerses: 13,
    name: {
      short: 'الممتحنة',
      long: 'سورة الممتحنة',
      transliteration: { en: 'Al-Mumtahana', id: 'Al-Mumtahanah' },
      translation: {
        en: 'She that is to be examined',
        id: 'Wanita Yang Diuji',
      },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: 'Surat Al Mumtahanah terdiri atas 13 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Al Ahzab. Dinamai Al Mumtahanah (wanita yang diuji), diambil dari kata "Famtahinuuhunna" yang berarti maka ujilah mereka, yang terdapat pada ayat 10 surat ini.',
    },
  },
  {
    number: 61,
    sequence: 109,
    numberOfVerses: 14,
    name: {
      short: 'الصف',
      long: 'سورة الصف',
      transliteration: { en: 'As-Saff', id: 'As-Saff' },
      translation: { en: 'The Ranks', id: 'Barisan' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: 'Surat Ash Shaff terdiri atas 14 ayat termasuk golongan surat-surat Madaniyyah. Dinamai dengan Ash Shaff, karena pada ayat 4 surat ini terdapat kata Shaffan yang berarti satu barisan. Ayat ini menerangkan apa yang diridhai Allah sesudah menerangkan apa yang dimurkai-Nya. Pada ayat 3 diterangkan bahwa Allah murka kepada orang yang hanya pandai berkata saja tetapi tidak melaksanakan apa yang diucapkannya. Dan pada ayat 4 diterangkan bahwa Allah menyukai orang yang mempraktekkan apa yang diucapkannya yaitu orang-orang yang berperang pada jalan Allah dalam satu barisan.',
    },
  },
  {
    number: 62,
    sequence: 110,
    numberOfVerses: 11,
    name: {
      short: 'الجمعة',
      long: 'سورة الجمعة',
      transliteration: { en: "Al-Jumu'a", id: "Al-Jumu'ah" },
      translation: { en: 'Friday', id: 'Jumat' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: "Surat Al Jumu'ah ini terdiri atas 11 ayat, termasuk golongan-golongan surat-surat Madaniyyah dan diturunkan sesudah surat Ash Shaf. Nama surat Al Jumu'ah diambil dari kata Al Jumu'ah yang terdapat pada ayat 9 surat ini yang artinya: hari Jum'at.",
    },
  },
  {
    number: 63,
    sequence: 104,
    numberOfVerses: 11,
    name: {
      short: 'المنافقون',
      long: 'سورة المنافقون',
      transliteration: { en: 'Al-Munaafiqoon', id: 'Al-Munafiqun' },
      translation: { en: 'The Hypocrites', id: 'Orang-Orang Munafik' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: 'Surat ini terdiri atas 11 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Al Hajj. Surat ini dinamai Al-Munaafiquun  yang artinya orang-orang munafik, karena surat ini mengungkapkan  sifat-sifat orang-orang munafik.',
    },
  },
  {
    number: 64,
    sequence: 108,
    numberOfVerses: 18,
    name: {
      short: 'التغابن',
      long: 'سورة التغابن',
      transliteration: { en: 'At-Taghaabun', id: 'At-Tagabun' },
      translation: {
        en: 'Mutual Disillusion',
        id: 'Pengungkapan Kesalahan',
      },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: 'Surat ini terdiri atas 18 ayat, termasuk golongan surat-surat Madaniyyah dan diturunkan sesudah surat At Tahrim. Nama At Taghaabun diambil dari kata At Taghaabun yang terdapat pada ayat ke 9 yang artinya hari dinampakkan kesalahan-kesalahan.',
    },
  },
  {
    number: 65,
    sequence: 99,
    numberOfVerses: 12,
    name: {
      short: 'الطلاق',
      long: 'سورة الطلاق',
      transliteration: { en: 'At-Talaaq', id: 'At-Talaq' },
      translation: { en: 'Divorce', id: 'Talak' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: 'Surat ini terdiri atas 12 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Al Insaan. Dinamai surat Ath Thalaaq karena kebanyakan ayat-ayatnya mengenai masalah talak dan yang berhubungan dengan masalah itu.',
    },
  },
  {
    number: 66,
    sequence: 107,
    numberOfVerses: 12,
    name: {
      short: 'التحريم',
      long: 'سورة التحريم',
      transliteration: { en: 'At-Tahrim', id: 'At-Tahrim' },
      translation: { en: 'The Prohibition', id: 'Pengharaman' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: 'Surat ini terdiri atas 12 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Al Hujuraat. Dinamai surat At Tahrim karena pada awal surat ini terdapat kata tuharrim yang kata asalnya adalah Attahrim yang berarti mengharamkan.',
    },
  },
  {
    number: 67,
    sequence: 77,
    numberOfVerses: 30,
    name: {
      short: 'الملك',
      long: 'سورة الملك',
      transliteration: { en: 'Al-Mulk', id: 'Al-Mulk' },
      translation: { en: 'The Sovereignty', id: 'Kerajaan' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat ini terdiri atas 30 ayat, termasuk golongan surat-surat  Makkiyah, diturunkan sesudah Ath Thuur. Nama Al Mulk diambil dari kata Al Mulk yang terdapat pada ayat pertama surat ini yang artinya kerajaan atau kekuasaan. Dinamai pula surat ini dengan At Tabaarak (Maha Suci).',
    },
  },
  {
    number: 68,
    sequence: 2,
    numberOfVerses: 52,
    name: {
      short: 'القلم',
      long: 'سورة القلم',
      transliteration: { en: 'Al-Qalam', id: 'Al-Qalam' },
      translation: { en: 'The Pen', id: 'Pena' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat ini terdiri atas 52 ayat,termasuk golongan surat-surat Makkiyah,diturunkan sesudah surat Al Alaq. Nama Al Qalam diambil dari kata Al Qalam yang terdapat pada ayat pertama surat iniyang artinya pena. Surat ini dinamai pula dengan surat Nun (huruf nun).',
    },
  },
  {
    number: 69,
    sequence: 78,
    numberOfVerses: 52,
    name: {
      short: 'الحاقة',
      long: 'سورة الحاقة',
      transliteration: { en: 'Al-Haaqqa', id: 'Al-Haqqah' },
      translation: { en: 'The Reality', id: 'Hari Kiamat' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat ini terdiri atas 52 ayat,termasuk golongan surat-surat Makkiyah,diturunkan sesudah surat Al Mulk.  Nama Al Haaqqah diambil dari kata Al Haaqqah yang terdapat pada ayat pertama surat ini yang artinya hari kiamat',
    },
  },
  {
    number: 70,
    sequence: 79,
    numberOfVerses: 44,
    name: {
      short: 'المعارج',
      long: 'سورة المعارج',
      transliteration: { en: "Al-Ma'aarij", id: "Al-Ma'arij" },
      translation: { en: 'The Ascending Stairways', id: 'Tempat Naik' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat ini terdiri atas 44 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Haaqqah.Perkataan Al Ma'arij yang menjadi nama bagi surat ini adalah kata jamak dari Mi'raj, diambil dari perkataan Al Ma'arij yang terdapat pada ayat 3, yang artinya menurut bahasa tempat naik. Sedang para ahli  tafsir memberi arti bermacam-macam, di antaranya langit, nikmat karunia dan derajat atau tingkatan yang diberikan Allah s.w.t kepada ahli surga.",
    },
  },
  {
    number: 71,
    sequence: 71,
    numberOfVerses: 28,
    name: {
      short: 'نوح',
      long: 'سورة نوح',
      transliteration: { en: 'Nooh', id: 'Nuh' },
      translation: { en: 'Noah', id: 'Nuh' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat ini terdiri atas 28 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat An Nahl. Dinamakan dengan surat Nuh karena surat ini seluruhnya menjelaskan da'wah dan doa Nabi Nuh a.s.",
    },
  },
  {
    number: 72,
    sequence: 40,
    numberOfVerses: 28,
    name: {
      short: 'الجن',
      long: 'سورة الجن',
      transliteration: { en: 'Al-Jinn', id: 'Al-Jinn' },
      translation: { en: 'The Jinn', id: 'Jin' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Al Jin terdiri atas 28 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al A'raaf. Dinamai Al Jin diambil dari perkataan Al Jin yang terdapat  pada ayat pertama surat ini. Pada ayat tersebut dan ayat-ayat berikutnya  diterangkan bahwa Jin sebagai makhluk halus telah mendengar pembacaan  Al Quran dan mereka mengikuti ajaran Al Quran tersebut.",
    },
  },
  {
    number: 73,
    sequence: 3,
    numberOfVerses: 20,
    name: {
      short: 'المزمل',
      long: 'سورة المزمل',
      transliteration: { en: 'Al-Muzzammil', id: 'Al-Muzzammil' },
      translation: {
        en: 'The Enshrouded One',
        id: 'Orang Yang Berselimut',
      },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat Al Muzzammil terdiri atas 20 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Qalam.Dinamai Al Muzzammil (orang yang berselimut) diambil dari perkataan Al Muzzammil yang terdapat pada ayat pertama surat ini. Yang dimaksud dengan orang yang berkemul ialah Nabi Muhammad s.a.w.',
    },
  },
  {
    number: 74,
    sequence: 4,
    numberOfVerses: 56,
    name: {
      short: 'المدثر',
      long: 'سورة المدثر',
      transliteration: { en: 'Al-Muddaththir', id: 'Al-Muddassir' },
      translation: { en: 'The Cloaked One', id: 'Orang Yang Berkemul' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat Al Muddatstsir terdiri atas 56 ayat, termasuk golongan  surat-surat Makkiyah, diturunkan sesudah surat Al Muzzammil. \tDinamai Al Muddatstsir (orang yang berkemul) diambil dari perkataan Al Muddatstsir yang terdapat pada ayat pertama surat ini.',
    },
  },
  {
    number: 75,
    sequence: 31,
    numberOfVerses: 40,
    name: {
      short: 'القيامة',
      long: 'سورة القيامة',
      transliteration: { en: 'Al-Qiyaama', id: 'Al-Qiyamah' },
      translation: { en: 'The Resurrection', id: 'Hari Kiamat' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Al Qiyaamah terdiri atas 40 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Qaari'ah. Dinamai Al Qiyaamah (hari kiamat) diambil dari perkataan Al Qiyaamah yang terdapat pada ayat pertama surat ini.",
    },
  },
  {
    number: 76,
    sequence: 98,
    numberOfVerses: 31,
    name: {
      short: 'الانسان',
      long: 'سورة الانسان',
      transliteration: { en: 'Al-Insaan', id: 'Al-Insan' },
      translation: { en: 'Man', id: 'Manusia' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: 'Surat Al Insaan terdiri atas 31 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Ar Rahmaan. Dinamai al Insaan (manusia) diambil dari perkataan Al Insaan yang terdapat pada ayat pertama surat ini.',
    },
  },
  {
    number: 77,
    sequence: 33,
    numberOfVerses: 50,
    name: {
      short: 'المرسلات',
      long: 'سورة المرسلات',
      transliteration: { en: 'Al-Mursalaat', id: 'Al-Mursalat' },
      translation: { en: 'The Emissaries', id: 'Malaikat Yang Diutus' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat Al Mursalaat terdiri atas 50 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Humazah. Dinamai Al Mursalaat (Malaikat-Malaikat yang diutus), diambil dari perkataan Al Mursalaat yang terdapat pada ayat pertama surat ini. Dinamai juga Amma yatasaa aluun diambil dari perkataan Amma yatasaa aluun yang terdapat pada ayat 1 surat ini.',
    },
  },
  {
    number: 78,
    sequence: 80,
    numberOfVerses: 40,
    name: {
      short: 'النبإ',
      long: 'سورة النبأ',
      transliteration: { en: 'An-Naba', id: "An-Naba'" },
      translation: { en: 'The Announcement', id: 'Berita Besar' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat An Naba´ terdiri atas 40 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Ma´aarij. Dinamai An Naba´ (berita besar) diambil dari perkataan An Naba´ yang terdapat pada ayat 2 surat ini. Dinamai juga Amma yatasaa aluun diambil dari perkataan Amma yatasaa aluun yang terdapat pada ayat 1 surat ini.',
    },
  },
  {
    number: 79,
    sequence: 81,
    numberOfVerses: 46,
    name: {
      short: 'النازعات',
      long: 'سورة النازعات',
      transliteration: { en: "An-Naazi'aat", id: "An-Nazi'at" },
      translation: {
        en: 'Those who drag forth',
        id: 'Malaikat Yang Mencabut',
      },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat An Naazi´aat terdiri atas 46 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat An Naba´. Dinamai An Naazi´aat diambil dari perkataan An Naazi´aat yang terdapat pada ayat pertama surat ini. Dinamai pula as Saahirah yang diambil dari ayat 14, dinamai juga Ath Thaammah diambil dari ayat 34.',
    },
  },
  {
    number: 80,
    sequence: 24,
    numberOfVerses: 42,
    name: {
      short: 'عبس',
      long: 'سورة عبس',
      transliteration: { en: 'Abasa', id: "'Abasa" },
      translation: { en: 'He frowned', id: 'Bermuka Masam' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat 'Abasa terdiri atas 42 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat An Najm. Dinamai 'Abasa  diambil dari perkataan 'Abasa yang terdapat pada ayat pertama surat ini. Menurut riwayat, pada suatu ketika Rasulullah s.a.w. menerima dan berbicara dengan pemuka-pemuka Quraisy yang beliau harapkan agar mereka masuk Islam. Dalam pada itu datanglah Ibnu Ummi Maktum, seorang sahabat yang buta yang mengharap agar Rasulullah s.a.w. membacakan kepadanya ayat- ayat Al Quran yang telah diturunkan Allah. tetapi Rasulullah s.a.w. bermuka masam dan memalingkan muka dari Ibnu Ummi Maktum yang buta itu, lalu Allah menurunkan surat ini sebagai teguran atas sikap Rasulullah terhadap ibnu Ummi Maktum itu.",
    },
  },
  {
    number: 81,
    sequence: 7,
    numberOfVerses: 29,
    name: {
      short: 'التكوير',
      long: 'سورة التكوير',
      transliteration: { en: 'At-Takwir', id: 'At-Takwir' },
      translation: { en: 'The Overthrowing', id: 'Penggulungan' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat At Takwir terdiri atas 29 ayat dan termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Masadd. Kata At Takwir (terbelah) yang menjadi nama bagi surat ini adalah dari kata asal (mashdar) dari kata kerja kuwwirat (digulung) yang terdapat pada ayat pertama surat ini.',
    },
  },
  {
    number: 82,
    sequence: 82,
    numberOfVerses: 19,
    name: {
      short: 'الإنفطار',
      long: 'سورة الإنفطار',
      transliteration: { en: 'Al-Infitaar', id: 'Al-Infitar' },
      translation: { en: 'The Cleaving', id: 'Terbelah' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat ini terdiri atas 19 ayat, termasuk golongan surat-surat Makkiyah dan diturunkan sesudah surat An Naazi'aat. Al Infithaar yang dijadikan  nama untuk surat ini adalah kata asal dari kata Infatharat (terbelah)  yang terdapat pada ayat pertama.",
    },
  },
  {
    number: 83,
    sequence: 86,
    numberOfVerses: 36,
    name: {
      short: 'المطففين',
      long: 'سورة المطففين',
      transliteration: { en: 'Al-Mutaffifin', id: 'Al-Mutaffifin' },
      translation: { en: 'Defrauding', id: 'Orang-Orang Curang' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat ini terdiri atas 36 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al 'Ankabuut dan merupakan  surat yang terakhir di Mekkah sebelum hijrah. Al Muthaffifiin  yang dijadikan nama bagi surat ini diambil dari kata  Al Muthaffifiin yang terdapat pada ayat pertama.",
    },
  },
  {
    number: 84,
    sequence: 83,
    numberOfVerses: 25,
    name: {
      short: 'الإنشقاق',
      long: 'سورة الإنشقاق',
      transliteration: { en: 'Al-Inshiqaaq', id: 'Al-Insyiqaq' },
      translation: { en: 'The Splitting Open', id: 'Terbelah' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat Al Insyiqaaq, terdiri atas 25 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Infithaarr. Dinamai Al Insyiqaaq (terbelah), diambil dari perkataan Insyaqqat yang terdapat pada permulaan surat ini, yang pokok katanya ialah insyiqaaq.',
    },
  },
  {
    number: 85,
    sequence: 27,
    numberOfVerses: 22,
    name: {
      short: 'البروج',
      long: 'سورة البروج',
      transliteration: { en: 'Al-Burooj', id: 'Al-Buruj' },
      translation: { en: 'The Constellations', id: 'Gugusan Bintang' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat Al Buruuj terdiri atas 22 ayat, termasuk golongan surat-surat Makkiyyah diturunkan sesudah surat Asy-Syams.Dinamai Al Buruuj (gugusan bintang) diambil dari perkataan Al Buruuj yang terdapat pada ayat 1 surat ini.',
    },
  },
  {
    number: 86,
    sequence: 36,
    numberOfVerses: 17,
    name: {
      short: 'الطارق',
      long: 'سورة الطارق',
      transliteration: { en: 'At-Taariq', id: 'At-Tariq' },
      translation: {
        en: 'The Morning Star',
        id: 'Yang Datang Di Malam Hari',
      },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat Ath Thaariq terdiri atas 17 ayat, termasuk golongan surat-surat Makkiyah,  diturunkan sesudah surat Al Balad.  Dinamai Ath Thaariq (yang datang di malam hari) diambil dari  perkataan Ath Thaariq yang terdapat pada ayat 1 surat ini.',
    },
  },
  {
    number: 87,
    sequence: 8,
    numberOfVerses: 19,
    name: {
      short: 'الأعلى',
      long: 'سورة الأعلى',
      transliteration: { en: "Al-A'laa", id: "Al-A'la" },
      translation: { en: 'The Most High', id: 'Maha Tinggi' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat ini terdiri atas 19 ayat, termasuk golongan surat-surat Makkiyyah, dan diturunkan sesudah surat At Takwiir. Nama Al A´laa diambil dari kata Al A´laa yang terdapat pada ayat pertama, berarti Yang Paling Tinggi. Muslim meriwayatkan dalam kitab Al Jumu'ah, dan diriwayatkan pula oleh Ashhaabus Sunan, dari Nu'man ibnu Basyir bahwa Rasulullah s.a.w. pada shalat dua hari Raya (Fitri dan Adha) dan shalat Jum'at membaca surat Al A´laa pada rakaat pertama, dan surat Al Ghaasyiyah pada rakaat kedua.",
    },
  },
  {
    number: 88,
    sequence: 68,
    numberOfVerses: 26,
    name: {
      short: 'الغاشية',
      long: 'سورة الغاشية',
      transliteration: { en: 'Al-Ghaashiya', id: 'Al-Gasyiyah' },
      translation: { en: 'The Overwhelming', id: 'Hari Kiamat' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat ini terdiri atas 26 ayat, termasuk surat-surat Makkiyah, diturunkan sesudah surat Adz Dzaariat. Nama Ghaasyiyah diambil dari kata Al Ghaasyiyah yang terdapat pada ayat pertama surat ini yang  artinya peristiwa yang dahsyat, tapi yang dimaksud adalah hari kiamat. Surat ini adalah surat yang kerap kali dibaca Nabi pada rakaat kedua  pada shalat hari-hari Raya dan shalat Jum'at",
    },
  },
  {
    number: 89,
    sequence: 10,
    numberOfVerses: 30,
    name: {
      short: 'الفجر',
      long: 'سورة الفجر',
      transliteration: { en: 'Al-Fajr', id: 'Al-Fajr' },
      translation: { en: 'The Dawn', id: 'Fajar' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat ini terdiri atas 30 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Lail. Nama Al Fajr diambil dari kata Al Fajr yang terdapat pada ayat pertama surat ini yang artinya fajar.',
    },
  },
  {
    number: 90,
    sequence: 35,
    numberOfVerses: 20,
    name: {
      short: 'البلد',
      long: 'سورة البلد',
      transliteration: { en: 'Al-Balad', id: 'Al-Balad' },
      translation: { en: 'The City', id: 'Negeri' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat Al Balad terdiri atas 20 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Qaaf. Dinamai Al Balad, diambil dari perkataan Al Balad yang terdapat  pada ayat pertama surat ini. Yang dimaksud dengan kota di sini ialah kota Mekah.',
    },
  },
  {
    number: 91,
    sequence: 26,
    numberOfVerses: 15,
    name: {
      short: 'الشمس',
      long: 'سورة الشمس',
      transliteration: { en: 'Ash-Shams', id: 'Asy-Syams' },
      translation: { en: 'The Sun', id: 'Matahari' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat Asy Syams terdiri atas 15 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Qadar.  Dinamai Asy Syams (matahari) diambil dari perkataan Asy Syams yang terdapat pada ayat permulaan surat ini.',
    },
  },
  {
    number: 92,
    sequence: 9,
    numberOfVerses: 21,
    name: {
      short: 'الليل',
      long: 'سورة الليل',
      transliteration: { en: 'Al-Lail', id: 'Al-Lail' },
      translation: { en: 'The Night', id: 'Malam' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat ini terdiri atas 21 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al A'laa. Surat ini dinamai Al Lail (malam), diambil dari perkataan Al Lail yang terdapat pada ayat pertama surat ini",
    },
  },
  {
    number: 93,
    sequence: 11,
    numberOfVerses: 11,
    name: {
      short: 'الضحى',
      long: 'سورة الضحى',
      transliteration: { en: 'Ad-Dhuhaa', id: 'Ad-Duha' },
      translation: { en: 'The Morning Hours', id: 'Duha' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat ini terdiri atas 11 ayat, termasuk golongan surat Makiyyah dan diturunkan sesudah surat Al Fajr. Nama Adh Dhuhaa diambil dari kata yang terdapat pada ayat pertama, artinya : waktu matahari sepenggalahan naik.',
    },
  },
  {
    number: 94,
    sequence: 12,
    numberOfVerses: 8,
    name: {
      short: 'الشرح',
      long: 'سورة الشرح',
      transliteration: { en: 'Ash-Sharh', id: 'Asy-Syarh' },
      translation: { en: 'The Consolation', id: 'Lapang' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat ini terdiri atas 8 ayat, termasuk golongan surat-surat Makkiyah dan diturunkan sesudah surat Adh Dhuhaa. Nama Alam Nasyrah diambil dari kata Alam Nasyrah yang terdapat pada ayat pertama, yang berarti: bukankah Kami telah melapangkan.',
    },
  },
  {
    number: 95,
    sequence: 28,
    numberOfVerses: 8,
    name: {
      short: 'التين',
      long: 'سورة التين',
      transliteration: { en: 'At-Tin', id: 'At-Tin' },
      translation: { en: 'The Fig', id: 'Buah Tin' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat ini terdiri atas 8 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Buruuj. Nama At Tiin diambil dari kata At Tiin yang terdapat pada ayat pertama surat ini yang artinya buah Tin.',
    },
  },
  {
    number: 96,
    sequence: 1,
    numberOfVerses: 19,
    name: {
      short: 'العلق',
      long: 'سورة العلق',
      transliteration: { en: 'Al-Alaq', id: "Al-'Alaq" },
      translation: { en: 'The Clot', id: 'Segumpal Darah' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Al 'Alaq terdiri atas 19 ayat, termasuk golongan surat-surat Makkiyah. Ayat 1 sampai dengan 5 dari surat ini adalah ayat-ayat Al Quran yang pertama sekali diturunkan, yaitu di waktu Nabi Muhammad s.a.w. berkhalwat di gua Hira'. Surat ini dinamai Al 'Alaq (segumpal darah), diambil dari perkataan Alaq yang terdapat pada ayat 2 surat ini. Surat ini dinamai juga dengan Iqra atau Al Qalam.",
    },
  },
  {
    number: 97,
    sequence: 25,
    numberOfVerses: 5,
    name: {
      short: 'القدر',
      long: 'سورة القدر',
      transliteration: { en: 'Al-Qadr', id: 'Al-Qadr' },
      translation: { en: 'The Power, Fate', id: 'Kemuliaan' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Al Qadr terdiri atas 5 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat 'Abasa. Surat ini dinamai Al Qadr (kemuliaan), diambil dari perkataan Al Qadr yang terdapat pada ayat pertama surat ini.",
    },
  },
  {
    number: 98,
    sequence: 100,
    numberOfVerses: 8,
    name: {
      short: 'البينة',
      long: 'سورة البينة',
      transliteration: { en: 'Al-Bayyina', id: 'Al-Bayyinah' },
      translation: { en: 'The Evidence', id: 'Bukti Nyata' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: 'Surat Al Bayyinah terdiri atas 8 ayat, termasuk golongan surat-surat Madaniyyah, diturunkan sesudah surat Ath Thalaq. Dinamai Al Bayyinah (bukti yang nyata) diambil dari perkataan Al Bayyinah yang terdapat pada ayat pertama surat ini.',
    },
  },
  {
    number: 99,
    sequence: 93,
    numberOfVerses: 8,
    name: {
      short: 'الزلزلة',
      long: 'سورة الزلزلة',
      transliteration: { en: 'Az-Zalzala', id: 'Az-Zalzalah' },
      translation: { en: 'The Earthquake', id: 'Guncangan' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: "Surat ini terdiri atas 8 ayat, termasuk golongan surat-surat Madaniyyah diturunkan sesudah surat An Nisaa'. Nama Al Zalzalah diambil dari kata: Zilzaal yang terdapat pada ayat pertama surat ini yang berarti goncangan.",
    },
  },
  {
    number: 100,
    sequence: 14,
    numberOfVerses: 11,
    name: {
      short: 'العاديات',
      long: 'سورة العاديات',
      transliteration: { en: 'Al-Aadiyaat', id: "Al-'Adiyat" },
      translation: {
        en: 'The Chargers',
        id: 'Kuda Yang Berlari Kencang',
      },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat ini terdiri atas 11 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al'Ashr. Nama Al 'Aadiyaat diambil dari kata Al 'Aadiyaat yang terdapat pada ayat pertama surat ini, artinya yang berlari kencang.",
    },
  },
  {
    number: 101,
    sequence: 30,
    numberOfVerses: 11,
    name: {
      short: 'القارعة',
      long: 'سورة القارعة',
      transliteration: { en: "Al-Qaari'a", id: "Al-Qari'ah" },
      translation: { en: 'The Calamity', id: 'Hari Kiamat' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat ini terdiri atas 11 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Quraisy. Nama Al Qaari'ah diambil dari kata Al Qaari'ah yang terdapat pada ayat pertama, artinya mengetok dengan keras, kemudian kata ini dipakai untuk nama hari kiamat.",
    },
  },
  {
    number: 102,
    sequence: 16,
    numberOfVerses: 8,
    name: {
      short: 'التكاثر',
      long: 'سورة التكاثر',
      transliteration: { en: 'At-Takaathur', id: 'At-Takasur' },
      translation: { en: 'Competition', id: 'Bermegah-Megahan' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat At Takaatsur terdiri atas 8 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Kautsar. Dinamai At Takaatsur (bermegah-megahan) diambil dari perkataan At Takaatsur yang terdapat pada ayat pertama surat ini.',
    },
  },
  {
    number: 103,
    sequence: 13,
    numberOfVerses: 3,
    name: {
      short: 'العصر',
      long: 'سورة العصر',
      transliteration: { en: 'Al-Asr', id: "Al-'Asr" },
      translation: { en: 'The Declining Day, Epoch', id: 'Asar' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Al 'Ashr terdiri atas 3 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Alam Nasyrah. Dinamai Al 'Ashr (masa) diambil dari perkataan Al 'Ashr yang terdapat pada ayat pertama surat ini.",
    },
  },
  {
    number: 104,
    sequence: 32,
    numberOfVerses: 9,
    name: {
      short: 'الهمزة',
      long: 'سورة الهمزة',
      transliteration: { en: 'Al-Humaza', id: 'Al-Humazah' },
      translation: { en: 'The Traducer', id: 'Pengumpat' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat Al Humazah terdiri atas 9 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Qiyaamah. Dinamai Al Humazah (pengumpat) diambil dari perkataan Humazah yang terdapat pada ayat pertama surat ini.',
    },
  },
  {
    number: 105,
    sequence: 19,
    numberOfVerses: 5,
    name: {
      short: 'الفيل',
      long: 'سورة الفيل',
      transliteration: { en: 'Al-Fil', id: 'Al-Fil' },
      translation: { en: 'The Elephant', id: 'Gajah' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat ini terdiri atas 5 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat Al Kaafirun. Nama Al Fiil diambil dari kata Al Fiil yang terdapat pada ayat pertama surat ini, artinya gajah. Surat Al Fiil mengemukakan cerita pasukan bergajah dari Yaman yang dipimpin oleh Abrahah yang ingin meruntuhkan Ka'bah di Mekah. Peristiwa ini terjadi pada tahun Nabi Muhammad s.a.w. dilahirkan.",
    },
  },
  {
    number: 106,
    sequence: 29,
    numberOfVerses: 4,
    name: {
      short: 'قريش',
      long: 'سورة قريش',
      transliteration: { en: 'Quraish', id: 'Quraisy' },
      translation: { en: 'Quraysh', id: 'Quraisy' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat ini terdiri atas 4 ayat, termasuk golongan surat-surat Makkiyyah dan diturunkan sesudah surat At Tiin. Nama Quraisy diambil dari kata Quraisy yang terdapat pada ayat pertama, artinya suku Quraisy. Suku Quraisy adalah suku yang mendapat  kehormatan untuk memelihara Ka'bah.",
    },
  },
  {
    number: 107,
    sequence: 17,
    numberOfVerses: 7,
    name: {
      short: 'الماعون',
      long: 'سورة الماعون',
      transliteration: { en: "Al-Maa'un", id: "Al-Ma'un" },
      translation: { en: 'Almsgiving', id: 'Barang Yang Berguna' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat ini terdiri atas 7 ayat, termasuk golongan surat-surat Makkiyyah, diturunkan sesudah surat At Taakatsur. Nama Al Maa'uun diambil dari kata Al Maa'uun yang terdapat pada ayat 7, artinya barang-barang yang berguna.",
    },
  },
  {
    number: 108,
    sequence: 15,
    numberOfVerses: 3,
    name: {
      short: 'الكوثر',
      long: 'سورة الكوثر',
      transliteration: { en: 'Al-Kawthar', id: 'Al-Kausar' },
      translation: { en: 'Abundance', id: 'Pemberian Yang Banyak' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Al Kautsar terdiri atas 3 ayat, termasuk golongan surat-surat  Makkiyyah diturunkan sesudah surat Al 'Aadiyaat. Dinamai Al Kautsar (nikmat yang banyak) diambil dari perkataan Al Kautsar yang terdapat pada ayat pertama surat ini.Surat ini sebagai penghibur hati Nabi Muhammad s.a.w.",
    },
  },
  {
    number: 109,
    sequence: 18,
    numberOfVerses: 6,
    name: {
      short: 'الكافرون',
      long: 'سورة الكافرون',
      transliteration: { en: 'Al-Kaafiroon', id: 'Al-Kafirun' },
      translation: { en: 'The Disbelievers', id: 'Orang-Orang kafir' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat Al Kaafiruun terdiri atas 6 ayat, termasuk golongan surat-surat  Makkiyyah, diturunkan sesudah surat Al Maa'uun. Dinamai Al Kaafiruun (orang-orang kafir), diambil dari perkataan  Al Kaafiruun yang terdapat pada ayat pertama surat ini.",
    },
  },
  {
    number: 110,
    sequence: 114,
    numberOfVerses: 3,
    name: {
      short: 'النصر',
      long: 'سورة النصر',
      transliteration: { en: 'An-Nasr', id: 'An-Nasr' },
      translation: { en: 'Divine Support', id: 'Pertolongan' },
    },
    revelation: { arab: 'مدينة', en: 'Medinan', id: 'Madaniyyah' },
    tafsir: {
      id: 'Surat An Nashr terdiri atas 3 ayat, termasuk golongan surat-surat  Madaniyyah yang diturunkan di Mekah sesudah surat At Taubah.  Dinamai An Nashr (pertolongan) diambil dari perkataan Nashr yang  terdapat pada ayat pertama surat ini.',
    },
  },
  {
    number: 111,
    sequence: 6,
    numberOfVerses: 5,
    name: {
      short: 'المسد',
      long: 'سورة المسد',
      transliteration: { en: 'Al-Masad', id: 'Al-Lahab' },
      translation: { en: 'The Palm Fibre', id: 'Api Yang Bergejolak' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat ini terdiri atas 5 ayat, termasuk golongan surat-surat Makkiyyah,  diturunkan sesudah surat Al Fath. Nama Al Lahab diambil dari kata  Al Lahab yang terdapat pada ayat ketiga surat ini yang artinya gejolak  api. Surat ini juga dinamakan surat Al Masad.',
    },
  },
  {
    number: 112,
    sequence: 22,
    numberOfVerses: 4,
    name: {
      short: 'الإخلاص',
      long: 'سورة الإخلاص',
      transliteration: { en: 'Al-Ikhlaas', id: 'Al-Ikhlas' },
      translation: { en: 'Sincerity', id: 'Ikhlas' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat ini terdiri atas 4 ayat, termasuk golongan surat-surat  Makkiyyah, diturunkan sesudah sesudah surat An Naas. Dinamakan Al Ikhlas karena surat ini sepenuhnya menegaskan kemurnian keesaan Allah s.w.t.',
    },
  },
  {
    number: 113,
    sequence: 20,
    numberOfVerses: 5,
    name: {
      short: 'الفلق',
      long: 'سورة الفلق',
      transliteration: { en: 'Al-Falaq', id: 'Al-Falaq' },
      translation: { en: 'The Dawn', id: 'Subuh' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: "Surat ini terdiri atas 5 ayat, termasuk golongan surat-surat Makkiyah, diturunkan sesudah surat Al Fiil. Nama Al Falaq diambil dari kata Al Falaq yang terdapat pada ayat pertama surat ini yang artinya waktu subuh. Diriwayatkan oleh Abu Daud, At Tirmizi dan An Nasa-i dari 'Uqbah bin 'Aamir bahwa Rasulullah s.a.w. bersembahyang dengan membaca surat Al Falaq  dan surat An Naas dalam perjalanan.",
    },
  },
  {
    number: 114,
    sequence: 21,
    numberOfVerses: 6,
    name: {
      short: 'الناس',
      long: 'سورة الناس',
      transliteration: { en: 'An-Naas', id: 'An-Nas' },
      translation: { en: 'Mankind', id: 'Manusia' },
    },
    revelation: { arab: 'مكة', en: 'Meccan', id: 'Makkiyyah' },
    tafsir: {
      id: 'Surat ini terdiri atas 6 ayat, termasuk golongan surat-surat Makkiyah,  diturunkan sesudah surat Al Falaq. Nama An Naas diambil dari An Naas yang berulang kali disebut dalam surat ini yang artinya manusia.',
    },
  },
];

export default list_surah;
