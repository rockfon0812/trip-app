
import { TripData, DayType, ActivityCategory } from './types';

// This file simulates a backend API response
const MOCK_DATA: TripData = {
  tripDates: "2025.12.30 - 2026.01.06",
  passCost: 85000,
  totalValue: 165000,
  
  // New: Exchange Rate (1 KRW = ~0.024 TWD)
  exchangeRate: {
    rate: 0.0245,
    lastUpdated: '2025-05-15'
  },

  // New: Weather Forecast (Winter in Busan)
  weatherForecast: [
    { date: '12/30', dayOfWeek: '週二', condition: 'sunny', tempHigh: 6, tempLow: -1 },
    { date: '12/31', dayOfWeek: '週三', condition: 'cloudy', tempHigh: 5, tempLow: -2 },
    { date: '01/01', dayOfWeek: '週四', condition: 'sunny', tempHigh: 4, tempLow: -3 }, // Sunrise
    { date: '01/02', dayOfWeek: '週五', condition: 'sunny', tempHigh: 7, tempLow: 0 },
    { date: '01/03', dayOfWeek: '週六', condition: 'cloudy', tempHigh: 8, tempLow: 1 },
    { date: '01/04', dayOfWeek: '週日', condition: 'rain', tempHigh: 9, tempLow: 3 }, // Slightly warmer but rain
    { date: '01/05', dayOfWeek: '週一', condition: 'sunny', tempHigh: 5, tempLow: -2 },
    { date: '01/06', dayOfWeek: '週二', condition: 'sunny', tempHigh: 6, tempLow: -1 },
  ],

  // New: Budget Estimate
  budgetEstimate: {
    totalKRW: 1250000, // Approx TWD 30,000 (excluding flight/hotel depending on user)
    categories: [
      { category: '機票', amountKRW: 450000, description: '傳統航空來回 (預估)' },
      { category: '住宿', amountKRW: 420000, description: '7晚雙人房人均 (西面三星級)' },
      { category: '交通', amountKRW: 50000, description: '包含機場快線、地鐵、計程車' },
      { category: '票券', amountKRW: 100000, description: 'VBP + 膠囊列車 + 其他' },
      { category: '餐飲', amountKRW: 230000, description: '每日約 3萬韓元' },
    ]
  },

  savingsData: [
    { category: '使用 Pass', cost: 85000, fill: '#4F46E5' },
    { category: '不使用 Pass', cost: 165000, fill: '#94A3B8' },
  ],
  bookingItems: [
    {
      id: 'vbp',
      title: 'Visit Busan Pass (48H)',
      description: '省錢核心！包含 Luge、X the Sky、Spa Land 等入場券。',
      link: 'https://www.visitbusanpass.com/',
      linkText: '官網 / Klook / KKday',
      recommendedTime: '出發前 1 週',
      isEssential: true
    },
    {
      id: 'blueline',
      title: '海雲台海岸列車/膠囊列車',
      description: '熱門時段（尤其是膠囊列車）非常容易客滿，務必提前預約。',
      link: 'https://www.bluelinepark.com/eng/',
      linkText: 'Blue Line Park 官網預約',
      recommendedTime: '開放預約即搶 (約2週前)',
      isEssential: true
    },
    {
      id: 'flight',
      title: '釜山來回機票 (PUS)',
      description: '跨年期間機票價格高，建議盡早鎖定。',
      link: 'https://www.skyscanner.com.tw/',
      linkText: 'Skyscanner 比價',
      recommendedTime: '出發前 3-6 個月',
      isEssential: true
    },
    {
      id: 'hotel',
      title: '住宿 (西面/南浦洞)',
      description: '建議住在西面站 (交通樞紐) 或 南浦洞 (逛街方便)。',
      link: 'https://www.agoda.com/',
      linkText: 'Agoda 訂房',
      recommendedTime: '出發前 3 個月',
      isEssential: true
    },
    {
      id: 'luge',
      title: 'Skyline Luge (斜坡滑車)',
      description: '雖包含在 Pass 內，但可先上官網確認營業時間與人潮。',
      link: 'https://www.skylineluge.kr/busan/',
      linkText: '官方網站',
      recommendedTime: '出發前確認',
      isEssential: false
    }
  ],
  itinerary: [
    {
      id: 1,
      date: '12/30',
      dayOfWeek: '週二',
      title: '抵達與西面購物',
      type: DayType.ARRIVAL,
      highlight: '西面商圈戰利品 🛍️',
      activities: [
        { 
          time: '14:00', 
          title: '抵達金海機場 (PUS)', 
          description: '搭乘輕軌+地鐵前往西面站飯店 Check-in。',
          details: '從金海國際機場 (PUS) 抵達後，建議搭乘「釜山金海輕軌」至「沙上站」，再轉乘「釜山地鐵2號線」前往西面站。全程約需 40-50 分鐘。若行李較多，機場巴士也是不錯的選擇。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Gimhae+International+Airport',
          category: ActivityCategory.TRANSPORT 
        },
        { 
          time: '16:30', 
          title: '西面地下街 & NC百貨', 
          description: '釜山交通樞紐，地下街買襪子/衣服，NC百貨買鞋與生活雜貨。', 
          details: '西面地下街分為「西面地下商街」與「大賢PRIMALL」，這裡聚集了數百間平價服飾、美妝與飾品店。NC百貨西面店則有許多韓國平價品牌（如Shoopen鞋店）與生活雜貨（Butter），是小資族必逛之地。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Seomyeon+Underground+Shopping+Center',
          category: ActivityCategory.SHOPPING,
          isSavedSpot: true
        },
        { 
          time: '18:30', 
          title: 'Musinsa Standard 西面', 
          description: '韓國必逛！最新潮牌旗艦店，版型適合亞洲人。', 
          details: 'Musinsa Standard 是目前韓國最紅的時尚電商實體店，以極簡風格、高品質與親民價格著稱。西面旗艦店規模很大，從休閒西裝到日常T恤應有盡有，試穿體驗也非常好。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Musinsa+Standard+Seomyeon',
          category: ActivityCategory.SHOPPING,
          isSavedSpot: true
        },
        { 
          time: '20:00', 
          title: '味贊王鹽烤肉', 
          description: '西面必吃烤肉名店（或前往豬肉湯飯街）。', 
          details: '味贊王 (Matchandeul) 以厚切3.5公分的熟成豬五花聞名，會有專人幫忙代烤至金黃酥脆。如果不想排隊，西面的一條街全是豬肉湯飯餐廳，也是暖胃的好選擇。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Matchandeul+Wang+Salt+Grill+Seomyeon',
          category: ActivityCategory.FOOD 
        },
      ]
    },
    {
      id: 2,
      date: '12/31',
      dayOfWeek: '週三',
      title: '懷舊釜山與南浦洞',
      type: DayType.SIGHTSEEING,
      highlight: '跨年倒數 🎆',
      activities: [
        { 
          time: '09:30', 
          title: '甘川洞文化村', 
          description: '釜山的馬丘比丘，尋找小王子與狐狸。', 
          details: '這裡曾是韓戰難民的避難所，後來透過藝術改造變身為著名的觀光景點。必拍景點包括「小王子與沙漠狐狸」雕像，可以俯瞰整個彩色村莊與釜山港。建議購買集章地圖，邊走邊玩。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Gamcheon+Culture+Village',
          category: ActivityCategory.SIGHTSEEING,
          isSavedSpot: true
        },
        { 
          time: '13:30', 
          title: '扎嘎其市場 & BIFF 廣場', 
          description: '午餐吃海鮮，下午吃元祖黑糖餅。', 
          details: '扎嘎其是韓國最大的水產市場，一樓選購活海鮮，二樓直接料理享用。飯後步行至對面的 BIFF 廣場，這裡曾是釜山影展發源地，地板上有手印，且一定要排隊買堅果黑糖餅。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Jagalchi+Market',
          category: ActivityCategory.FOOD 
        },
        { 
          time: '15:30', 
          title: '光復路時尚街 & Vintage 區', 
          description: '南浦洞核心商圈，運動品牌旗艦店與古著店集中地。', 
          details: '光復路聚集了各大運動品牌（Nike, Adidas, ABC Mart）的旗艦店。如果喜歡古著，可以深入巷弄尋寶。這裡的聖誕燈飾通常會持續到一月初，氣氛非常熱鬧。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Gwangbok-ro+Fashion+Street',
          category: ActivityCategory.SHOPPING,
          isSavedSpot: true
        },
        { 
          time: '17:30', 
          title: '樂天百貨光復店', 
          description: '室內觀看全世界最大水舞秀(Aqua Mall)，頂樓看海景。', 
          details: '樂天百貨光復店不僅好逛，其室內的巨型音樂噴泉秀（定時演出）非常震撼。別忘了上頂樓的空中花園，可以免費眺望釜山港與影島大橋的全景。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Lotte+Department+Store+Gwangbok',
          category: ActivityCategory.SHOPPING 
        },
        { 
          time: '23:00', 
          title: '跨年倒數 (廣安里/龍頭山)', 
          description: '前往廣安里海灘看無人機秀，或留守龍頭山公園敲鐘。', 
          details: '釜山兩大跨年熱點：年輕人通常聚集在廣安里海水浴場，有無人機燈光秀與倒數活動；傳統派則會去龍頭山公園參加除夜鐘聲儀式。請注意回程交通人潮擁擠。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Gwangalli+Beach',
          category: ActivityCategory.SIGHTSEEING 
        },
      ]
    },
    {
      id: 3,
      date: '01/01',
      dayOfWeek: '週四',
      title: '新年日出與祈福',
      type: DayType.SIGHTSEEING,
      highlight: '2026 第一道曙光 🌅',
      activities: [
        { 
          time: '06:30', 
          title: '迎接日出', 
          description: '海雲台或廣安里。人潮眾多，請注意保暖！', 
          details: '韓國有新年看日出的習俗，各大海灘會擠滿人潮。建議在日出前 1 小時抵達佔位。海雲台通常會有新年慶典活動。看完日出後可以回飯店補眠。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Haeundae+Beach',
          category: ActivityCategory.SIGHTSEEING 
        },
        { 
          time: '11:00', 
          title: '新年午餐', 
          description: '享用傳統年糕湯。', 
          details: '韓國習俗吃了年糕湯才算長了一歲。市區許多韓食餐廳都有販售，湯頭通常是牛骨熬製，配上切片年糕與蛋絲。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Seomyeon+Food+Alley',
          category: ActivityCategory.FOOD 
        },
        { 
          time: '14:00', 
          title: '海東龍宮寺', 
          description: '建在岩石上的寺廟，新年祈福聖地。', 
          details: '韓國唯一建在海邊的寺廟，風景極為壯觀。新年第一天這裡香火鼎盛，大家都會來此祈求新的一年平安順利。入口處有十二生肖石像，記得找自己的生肖合照。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Haedong+Yonggungsa',
          category: ActivityCategory.SIGHTSEEING,
          isSavedSpot: true
        },
        { 
          time: '19:00', 
          title: 'The Bay 101', 
          description: '拍攝摩天樓倒影絕美夜景（必存打卡點）。', 
          details: '位於海雲台海邊的複合式休閒設施。最知名的玩法是到旁邊的停車場空地，利用地上的積水（或自己帶水倒）拍攝對面摩天大樓群的倒影，能拍出如電影般的場景。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=The+Bay+101',
          category: ActivityCategory.SIGHTSEEING,
          isSavedSpot: true
        },
      ]
    },
    {
      id: 4,
      date: '01/02',
      dayOfWeek: '週五',
      title: 'VBP Day 1: 海雲台與百貨',
      type: DayType.PASS_ACTIVE,
      highlight: '世界最大百貨公司 🛍️',
      activities: [
        { 
          time: '09:30', 
          title: '海雲台海岸列車', 
          description: 'Blue Line Park (Pass含2次)，建議搭到青沙浦站拍照。', 
          details: '利用廢棄鐵道改建的觀光列車。建議從尾浦站搭乘至青沙浦站，下車拍攝著名的「灌籃高手平交道」場景。若預算足夠，可另外預約天空膠囊列車（需自費），風景更美。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Blue+Line+Park+Mipo+Station',
          category: ActivityCategory.SIGHTSEEING,
          isPassIncluded: true, 
          originalPrice: 12000,
          isSavedSpot: true
        },
        { 
          time: '11:30', 
          title: 'BUSAN X the Sky', 
          description: 'LCT 地標塔透明觀景台，俯瞰海雲台沙灘。', 
          details: '位於 LCT Landmark Tower 的 98-100 層，是韓國第二高樓。擁有全韓最高的星巴克。透明的地板走廊「Shocking Bridge」非常刺激，能直視下方的海灘。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=BUSAN+X+the+Sky',
          category: ActivityCategory.SIGHTSEEING,
          isPassIncluded: true, 
          originalPrice: 27000 
        },
        { 
          time: '14:00', 
          title: '新世界百貨 Centum City', 
          description: '金氏世界紀錄最大百貨。必逛免稅店、Tamburins、Gentle Monster。', 
          details: '這裡大到會迷路！除了國際精品，B2 的 Hyper Ground 聚集了所有韓國潮牌。必逛香氛品牌 Tamburins 與墨鏡 Gentle Monster。百貨內還有滑冰場。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Shinsegae+Centum+City',
          category: ActivityCategory.SHOPPING,
          isSavedSpot: true
        },
        { 
          time: '17:00', 
          title: '新世界 Spa Land', 
          description: '就在百貨公司內，五星級汗蒸幕 (Pass含4小時) 休息舒壓。', 
          details: '被譽為五星級的汗蒸幕，設施非常豪華，包含多種溫度的汗蒸房、戶外足湯、視聽室與餐廳。逛街累了來這裡躺著休息是絕佳享受。記得 Pass 僅限 4 小時。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Spa+Land+Centum+City',
          category: ActivityCategory.SIGHTSEEING,
          isPassIncluded: true, 
          originalPrice: 23000 
        },
        { 
          time: '20:30', 
          title: '鑽石灣遊艇', 
          description: '出海欣賞廣安大橋夜景。', 
          details: '使用 Pass 可以免費搭乘夜景遊艇（需預約）。從海上看廣安大橋的燈光秀別有一番風味，船上通常會提供簡單的煙火施放與拍照服務。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Diamond+Bay+Yacht',
          category: ActivityCategory.SIGHTSEEING,
          isPassIncluded: true, 
          originalPrice: 30000 
        },
      ]
    },
    {
      id: 5,
      date: '01/03',
      dayOfWeek: '週六',
      title: 'VBP Day 2: 樂園與Outlet',
      type: DayType.PASS_ACTIVE,
      highlight: 'Outlet 挖寶日 🛍️',
      activities: [
        { 
          time: '10:00', 
          title: 'Skyline Luge 斜坡滑車', 
          description: '東釜山必玩，刺激好玩 (Pass含兩次搭乘)。', 
          details: '搭乘吊椅纜車上山，再駕駛無動力滑車沿著蜿蜒跑道滑下，非常好玩！Visit Busan Pass 包含兩次搭乘券，可以體驗不同的賽道。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Skyline+Luge+Busan',
          category: ActivityCategory.SIGHTSEEING,
          isPassIncluded: true, 
          originalPrice: 27000 
        },
        { 
          time: '12:00', 
          title: '樂天 Premium Outlets 東釜山', 
          description: '希臘風情建築，集結各大運動品牌與精品，非常好買！', 
          details: '這座 Outlet 以聖托里尼島為設計靈感，佔地廣大。Nike、Adidas 常有驚人折扣。還有 Lego 專賣店與各種美食餐廳，非常適合家庭或情侶逛上一整個下午。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Lotte+Premium+Outlets+Dongbusan',
          category: ActivityCategory.SHOPPING,
          isSavedSpot: true
        },
        { 
          time: '15:00', 
          title: '樂天世界 Adventure', 
          description: '戶外樂園，穿校服拍照是熱門行程。', 
          details: '雖然規模比首爾的小，但「童話王國」的氛圍很棒。最著名的是「Giant Digger」與「Giant Splash」兩個刺激設施。如果不玩設施，下午進場看遊行與拍照也很划算。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Lotte+World+Adventure+Busan',
          category: ActivityCategory.SIGHTSEEING,
          isPassIncluded: true, 
          originalPrice: 47000 
        },
        { 
          time: '18:00', 
          title: '松島海上纜車', 
          description: '趕在 Pass 結束前前往松島看夜景。', 
          details: '橫跨海洋的纜車，最高處距離海面 86 公尺。建議搭乘「水晶車廂」（透明地板）增加刺激感。抵達對岸後可逛逛松島龍宮雲橋與恐龍公園。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Songdo+Marine+Cable+Car',
          category: ActivityCategory.SIGHTSEEING,
          isPassIncluded: true, 
          originalPrice: 17000 
        },
      ]
    },
    {
      id: 6,
      date: '01/04',
      dayOfWeek: '週日',
      title: '影島文青與咖啡',
      type: DayType.FREE_TIME,
      highlight: '海景咖啡廳 ☕',
      activities: [
        { 
          time: '10:30', 
          title: '白淺灘文化村', 
          description: '沿著海岸線的白色村莊，有多家海景咖啡廳。', 
          details: '因電影《辯護人》拍攝而聞名。沿著絕壁而建的白色房子配上藍色大海，有韓國聖托里尼之稱。這裡有數十家特色咖啡廳（如 Aether, Huinnyeoul Beach），隨便進一家都能拍出人生美照。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Huinnyeoul+Culture+Village',
          category: ActivityCategory.SIGHTSEEING,
          isSavedSpot: true
        },
        { 
          time: '13:00', 
          title: '海女村 (海膽紫菜包飯)', 
          description: '影島必吃的海邊帳篷馬車午餐。', 
          details: '坐在海邊的岩石或矮桌旁，品嚐現切的海鮮（章魚、海菠蘿）與著名的海膽紫菜包飯。非常有釜山在地風味的體驗。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Yeongdo+Haenyeo+Village',
          category: ActivityCategory.FOOD 
        },
        { 
          time: '15:00', 
          title: 'P.ARK 或 Momos Coffee', 
          description: '釜山著名的超大型複合式咖啡廳。', 
          details: 'P.ARK 是一個巨大的複合文化空間，擁有無敵港口景觀與展覽空間；Momos Coffee 則是世界咖啡師冠軍的店，其影島店由舊倉庫改建，充滿工業風與咖啡香。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=P.ARK+Busan',
          category: ActivityCategory.FOOD,
          isSavedSpot: true
        },
        { 
          time: '18:00', 
          title: '田浦咖啡街 (Jeonpo)', 
          description: '西面旁的文青聖地，很多選物店與獨立咖啡館。', 
          details: '過去是五金工具街，現在變身為文青咖啡街。這裡巷弄內藏著許多販售文創小物、貼紙、飾品的設計師小店，非常好逛。晚餐也可在此尋找特色異國料理。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Jeonpo+Cafe+Street',
          category: ActivityCategory.SHOPPING 
        },
      ]
    },
    {
      id: 7,
      date: '01/05',
      dayOfWeek: '週一',
      title: '大學商圈挖寶',
      type: DayType.FREE_TIME,
      highlight: '釜山大平價購物 🛍️',
      activities: [
        { 
          time: '10:30', 
          title: '樂天超市 (Lotte Mart)', 
          description: '最後採買海苔、泡麵、零食當伴手禮。', 
          details: '推薦前往釜山站店或光復店。必買清單：HBAF 杏仁果、零卡果凍、泡麵、海苔脆片、KANU 咖啡。記得準備大購物袋，並在此辦理退稅。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Lotte+Mart+Busan',
          category: ActivityCategory.SHOPPING 
        },
        { 
          time: '14:00', 
          title: '釜山大學商圈 (PNU)', 
          description: '大學生價位！年輕服飾、襪子、飾品最便宜的地方。', 
          details: '釜山大學周邊是釜山物價相對較低的商圈。主街上有各大美妝品牌，巷弄內則充滿了平價女裝店與男裝店。這裡也是買便宜襪子與手機殼的好地方。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Pusan+National+University+Shopping+Street',
          category: ActivityCategory.SHOPPING,
          isSavedSpot: true
        },
        { 
          time: '17:00', 
          title: 'NC 百貨 (釜山大店)', 
          description: 'Outlet等級的折扣，適合買過季品牌服飾。', 
          details: '雖然是百貨，但常有特賣會。如果想買打折的運動鞋或休閒服飾，這裡是挖寶的好去處。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=NC+Department+Store+Pusan+National+University',
          category: ActivityCategory.SHOPPING 
        },
        { 
          time: '19:30', 
          title: '告別晚餐', 
          description: '推薦烤盲鰻或釜山烤肋排。', 
          details: '最後一晚，不妨挑戰釜山特色的「烤盲鰻」（口感Q彈，通常做成辣味），或是美味的烤豬肋排，為旅程畫下完美句點。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Seomyeon+Grilled+Eel',
          category: ActivityCategory.FOOD 
        },
      ]
    },
    {
      id: 8,
      date: '01/06',
      dayOfWeek: '週二',
      title: '回程',
      type: DayType.DEPARTURE,
      highlight: '退稅與返家',
      activities: [
        { 
          time: '09:00', 
          title: '退房前往機場', 
          description: '搭乘計程車或地鐵前往金海機場 (PUS)。', 
          details: '請預留至少 3 小時抵達機場。如果是搭乘早班機，建議提早預約計程車。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Gimhae+International+Airport',
          category: ActivityCategory.TRANSPORT 
        },
        { 
          time: '11:00', 
          title: '機場退稅 & 免稅店', 
          description: '記得在海關處辦理退稅，並逛最後的免稅店。', 
          details: '金海機場雖然不大，但免稅店仍有菸酒、化妝品與正官庄人蔘。退稅機器位於出境大廳，請先掃描護照與退稅單，入關後再領取現金或退至信用卡。',
          mapLink: 'https://www.google.com/maps/search/?api=1&query=Gimhae+Airport+Tax+Refund',
          category: ActivityCategory.SHOPPING 
        },
      ]
    }
  ]
};

export const fetchTripData = (): Promise<TripData> => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve(MOCK_DATA);
    }, 800);
  });
};
