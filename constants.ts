import { TravelPackage, DailyTrip, Activity, WhyChooseItem, Testimonial } from './types';

export const WHATSAPP_NUMBER = "6287765936377";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Admin,%20saya%20ingin%20tanya%20tentang%20paket%20wisata.`;

export const PACKAGES: TravelPackage[] = [
  {
    id: 'p1',
    title: 'Paket Lombok Eksotis',
    duration: '4 Hari 3 Malam',
    price: 'Rp 1.250.000/orang',
    image: 'https://picsum.photos/seed/lombok1/800/600',
    category: 'General',
    description: 'Jelajahi keindahan alam dan budaya Lombok yang memukau dalam 4 hari. Paket ini mencakup kunjungan ke desa adat Sasak, pantai-pantai eksotis di Mandalika, hingga keindahan bawah laut Gili Trawangan.',
    itinerary: [
      {
        day: 1,
        title: 'Kedatangan & Sasak Tour',
        activities: ['Penjemputan di Bandara', 'Desa Sade/Ende (Rumah Adat Sasak)', 'Pantai Kuta Mandalika', 'Bukit Merese (Sunset)', 'Check-in Hotel']
      },
      {
        day: 2,
        title: 'Eksplorasi Gili Trawangan',
        activities: ['Bukit Malimbu (Spot Foto)', 'Menyeberang ke Gili Trawangan', 'Acara Bebas (Snorkeling/Sepeda)', 'Kembali ke Lombok', 'Singgah di Toko Mutiara']
      },
      {
        day: 3,
        title: 'Wisata Alam & Air Terjun',
        activities: ['Hutan Wisata Pusuk (Monkey Forest)', 'Air Terjun Benang Stokel', 'Air Terjun Benang Kelambu', 'Makan Siang Lokal', 'Pura Lingsar']
      },
      {
        day: 4,
        title: 'City Tour & Keberangkatan',
        activities: ['Pusat Oleh-oleh Khas Lombok', 'Islamic Center NTB', 'Banyumulek (Desa Gerabah)', 'Transfer ke Bandara']
      }
    ],
    inclusions: ['Transportasi AC Private', 'Akomodasi Hotel Bintang 3 (Twin Share)', 'Sarapan & Makan Siang', 'Private Boat ke Gili', 'Tiket Masuk Wisata', 'Guide Profesional', 'Air Mineral'],
    exclusions: ['Tiket Pesawat', 'Makan Malam', 'Pengeluaran Pribadi', 'Tipping Guide/Driver', 'Watersport']
  },
  {
    id: 'p2',
    title: 'Pesona Gili Trawangan',
    duration: '3 Hari 2 Malam',
    price: 'Rp 875.000/orang',
    image: 'https://picsum.photos/seed/gili1/800/600',
    category: 'Adventure',
    description: 'Fokus menikmati suasana pulau tropis di Gili Trawangan. Paket ini cocok bagi Anda yang ingin bersantai, menikmati pesta pantai, atau snorkeling sepuasnya.',
    itinerary: [
      {
        day: 1,
        title: 'Tiba & Transfer Gili',
        activities: ['Penjemputan Bandara', 'Pelabuhan Teluk Nare', 'Speedboat ke Gili Trawangan', 'Check-in Hotel di Gili', 'Sunset di Ombak Sunset']
      },
      {
        day: 2,
        title: 'Snorkeling 3 Gili',
        activities: ['Snorkeling Trip (Gili Air, Meno, Trawangan)', 'Melihat Penyu & Patung Bawah Laut', 'Makan Siang di Gili Air', 'Kembali ke Trawangan', 'Night Life Gili']
      },
      {
        day: 3,
        title: 'Check-out & Transfer',
        activities: ['Check-out Hotel', 'Speedboat ke Lombok', 'Bukit Malimbu', 'Belanja Oleh-oleh', 'Transfer Bandara']
      }
    ],
    inclusions: ['Transportasi Darat & Laut', 'Hotel di Gili Trawangan', 'Snorkeling Equipment', 'Makan Pagi & Siang', 'Dokumentasi Underwater'],
    exclusions: ['Tiket Pesawat', 'Makan Malam', 'Sepeda/Cidomo di Gili', 'Tipping']
  },
  {
    id: 'p3',
    title: 'Complete Lombok Experience',
    duration: '5 Hari 4 Malam',
    price: 'Rp 1.685.000/orang',
    image: 'https://picsum.photos/seed/rinjani1/800/600',
    category: 'Adventure',
    description: 'Paket terlengkap untuk Anda yang ingin melihat semua sisi Lombok: Pegunungan, Budaya, dan Pulau. Mengunjungi Sembalun (Kaki Rinjani) hingga Gili.',
    itinerary: [
      { day: 1, title: 'Sasak Cultural Tour', activities: ['Desa Sukarara (Tenun)', 'Desa Sade', 'Pantai Tanjung Aan'] },
      { day: 2, title: 'Sembalun Highland', activities: ['Pusuk Sembalun', 'Bukit Selong', 'Petik Strawberry', 'Taman Narmada'] },
      { day: 3, title: 'Gili Trawangan Tour', activities: ['Malimbu', 'Gili Trawangan', 'Snorkeling', 'Villa Hantu'] },
      { day: 4, title: 'Pink Beach Eksotis', activities: ['Pelabuhan Tanjung Luar', 'Pulau Pasir', 'Pantai Pink', 'Tanjung Ringgit'] },
      { day: 5, title: 'Departure', activities: ['City Tour Mataram', 'Transfer Bandara'] }
    ],
    inclusions: ['Transport Private', 'Hotel 4 Malam', 'Makan 3x Sehari (B/L/D)', 'Boat Pink Beach & Gili', 'Guide', 'Dokumentasi'],
    exclusions: ['Tiket Pesawat', 'Laundry', 'Mini Bar', 'Tipping']
  },
  {
    id: 'p4',
    title: 'Romantic Gateway',
    duration: '4 Hari 3 Malam',
    price: 'Rp 1.280.000/orang',
    image: 'https://picsum.photos/seed/beach1/800/600',
    category: 'Honeymoon',
    description: 'Ciptakan kenangan manis bersama pasangan. Paket Honeymoon dengan sentuhan romantis, makan malam di tepi pantai, dan hotel dengan suasana privat.',
    itinerary: [
      { day: 1, title: 'Arrival & Romantic Sunset', activities: ['Penjemputan Private', 'Pantai Kuta', 'Romantic Dinner di Senggigi'] },
      { day: 2, title: 'Private Gili Tour', activities: ['Private Boat ke Gili Nanggu (Lebih sepi)', 'Gili Sudak (Makan Siang)', 'Gili Kedis (Foto Couple)'] },
      { day: 3, title: 'Spa & Relax', activities: ['Sasak Tour', 'Traditional Massage & Spa (2 Jam)', 'Candle Light Dinner'] },
      { day: 4, title: 'Farewell', activities: ['Acara Bebas', 'Transfer Bandara'] }
    ],
    inclusions: ['Transport Private', 'Hotel Honeymoon Setup', '1x Romantic Dinner', '1x Spa Treatment', 'Private Boat Gili Nanggu', 'Dokumentasi Fotografer'],
    exclusions: ['Tiket Pesawat', 'Pengeluaran Pribadi']
  },
  {
    id: 'p5',
    title: 'Short Escape',
    duration: '2 Hari 1 Malam',
    price: 'Rp 685.000/orang',
    image: 'https://picsum.photos/seed/waterfall/800/600',
    category: 'Family',
    description: 'Liburan singkat namun padat. Cocok untuk weekend gateway bersama keluarga atau teman.',
    itinerary: [
      { day: 1, title: 'Mandalika Tour', activities: ['Sirkuit Mandalika (Foto Stop)', 'Bukit Seger', 'Pantai Tanjung Aan', 'Check-in Hotel'] },
      { day: 2, title: 'City & Departure', activities: ['Pusat Mutiara & Kaos Lombok', 'Kuliner Ayam Taliwang', 'Transfer Bandara'] }
    ],
    inclusions: ['Transport Full AC', 'Hotel 1 Malam', 'Makan 4x', 'Tiket Masuk'],
    exclusions: ['Tiket Pesawat', 'Pengeluaran Pribadi']
  },
  {
    id: 'p6',
    title: 'Cultural Heritage',
    duration: '3 Hari 2 Malam',
    price: 'Rp 1.280.000/orang',
    image: 'https://picsum.photos/seed/culture/800/600',
    category: 'General',
    description: 'Mengenal lebih dekat kearifan lokal Lombok. Belajar menenun, membuat gerabah, dan mengunjungi masjid-masjid bersejarah.',
    itinerary: [
      { day: 1, title: 'Handicraft Tour', activities: ['Desa Banyumulek (Gerabah)', 'Desa Sukarara (Tenun)', 'Desa Sade (Rumah Adat)'] },
      { day: 2, title: 'Historical Tour', activities: ['Taman Narmada (Air Awet Muda)', 'Pura Lingsar (Simbol Toleransi)', 'Islamic Center'] },
      { day: 3, title: 'Departure', activities: ['Belanja Oleh-oleh', 'Transfer Bandara'] }
    ],
    inclusions: ['Transport', 'Hotel', 'Makan Sesuai Program', 'Guide Berlisensi'],
    exclusions: ['Tiket Pesawat', 'Tipping']
  },
  {
    id: 'p7',
    title: 'Secret Gili Camping',
    duration: '3 Hari 2 Malam',
    price: 'Rp 1.450.000/orang',
    image: 'https://picsum.photos/seed/camping/800/600',
    category: 'Adventure',
    description: 'Rasakan sensasi menginap di pulau tak berpenghuni di Gili Kedis dan Gili Sudak. Camping mewah dengan fasilitas lengkap dan api unggun.',
    itinerary: [
      { day: 1, title: 'Camping Prep', activities: ['Penjemputan', 'Menuju Pelabuhan Tawun', 'Pasang Tenda di Gili Kedis', 'BBQ Dinner'] },
      { day: 2, title: 'Island Survival', activities: ['Snorkeling pagi', 'Memancing', 'Pindah ke Gili Sudak', 'Sunset Hunting'] },
      { day: 3, title: 'Back to Civilization', activities: ['Bongkar Tenda', 'Makan Siang', 'Transfer Bandara'] }
    ],
    inclusions: ['Tenda Dome', 'Matras & Sleeping Bag', 'Alat Masak', 'Guide', 'Perahu Private'],
    exclusions: ['Tiket Pesawat', 'Kebutuhan Pribadi']
  },
  {
    id: 'p8',
    title: 'Sembalun Soft Trekking',
    duration: '2 Hari 1 Malam',
    price: 'Rp 950.000/orang',
    image: 'https://picsum.photos/seed/trekking/800/600',
    category: 'Adventure',
    description: 'Mendaki Bukit Pergasingan untuk melihat pemandangan Rinjani dan petak sawah Sembalun yang ikonik tanpa harus mendaki gunung ekstrem.',
    itinerary: [
      { day: 1, title: 'Hiking Up', activities: ['Menuju Sembalun', 'Mulai Trekking (3 Jam)', 'Camping di Puncak Pergasingan', 'Sunset View'] },
      { day: 2, title: 'Sunrise & Down', activities: ['Sunrise Rinjani', 'Turun Bukit', 'Petik Strawberry', 'Transfer Bandara'] }
    ],
    inclusions: ['Guide Trekking', 'Porter', 'Tenda & Logistik', 'Tiket Masuk'],
    exclusions: ['Tiket Pesawat', 'Jaket Pribadi']
  },
  {
    id: 'p9',
    title: 'Mandalika MotoGP Trip',
    duration: '4 Hari 3 Malam',
    price: 'Rp 2.100.000/orang',
    image: 'https://picsum.photos/seed/racing/800/600',
    category: 'General',
    description: 'Paket khusus untuk penggemar balap. Mengunjungi Sirkuit Mandalika (Track Walk jika tersedia), Pantai Kuta, dan spot-spot hits di sekitar sirkuit.',
    itinerary: [
      { day: 1, title: 'Circuit Tour', activities: ['Tiba di Bandara', 'Sirkuit Mandalika', 'Bukit 360', 'Pantai Seger'] },
      { day: 2, title: 'Beach Day', activities: ['Pantai Tanjung Aan', 'Bukit Merese', 'Pantai Mawun', 'Goa Bangkang'] },
      { day: 3, title: 'Culture & Shop', activities: ['Desa Ende', 'Desa Sukarara', 'Sentra Mutiara', 'Kuliner Malam'] },
      { day: 4, title: 'Departure', activities: ['Transfer Bandara'] }
    ],
    inclusions: ['Transport Premium', 'Hotel area Kuta', 'Makan Fullboard', 'Tiket Wisata'],
    exclusions: ['Tiket Event MotoGP', 'Tiket Pesawat']
  }
];

export const DAILY_TRIPS: DailyTrip[] = [
  {
    id: 'd1',
    title: 'Island Hopping 3 Gili',
    destinations: 'Gili Trawangan, Meno, Air',
    price: 'Rp 380.000/pax',
    image: 'https://picsum.photos/seed/gilitrip/600/400',
    description: 'Nikmati keindahan bawah laut 3 Gili dalam satu hari! Snorkeling di spot terbaik bersama ikan warna-warni dan penyu, serta bersantai di pantai pasir putih.',
    duration: 'Full Day (8 Jam)',
    category: 'Daily Trip',
    itinerary: [
      {
        day: 1,
        title: 'Snorkeling Adventure',
        activities: [
          '08:30 - Penjemputan di Hotel (Senggigi/Mataram)',
          '09:30 - Tiba di Pelabuhan Teluk Nare',
          '10:00 - Spot Gili Air (Garden Fish)',
          '11:30 - Spot Gili Meno (Turtle Point & Patung)',
          '13:00 - Makan Siang & Explore Gili Trawangan',
          '15:30 - Kembali ke Lombok',
          '16:30 - Foto Stop di Bukit Malimbu (Sunset View)',
          '17:30 - Kembali ke Hotel'
        ]
      }
    ],
    inclusions: ['Transportasi Jemputan (Mobil AC)', 'Private Glass Bottom Boat', 'Alat Snorkeling (Masker & Fin)', 'Guide Snorkeling', 'Air Mineral', 'Dokumentasi GoPro'],
    exclusions: ['Makan Siang', 'Pengeluaran Pribadi', 'Tipping Boatman/Driver']
  },
  {
    id: 'd2',
    title: 'Nature & Waterfall Tour',
    destinations: 'Benang Stokel, Kelambu, Sukarara',
    price: 'Rp 265.000/pax',
    image: 'https://picsum.photos/seed/waterfall2/600/400',
    description: 'Rasakan kesegaran alam Lombok di kaki Gunung Rinjani. Mengunjungi dua air terjun memukau dan belajar menenun kain tradisional Sasak.',
    duration: 'Full Day (8 Jam)',
    category: 'Daily Trip',
    itinerary: [
      {
        day: 1,
        title: 'Waterfall Adventure',
        activities: [
          '09:00 - Penjemputan di Hotel',
          '10:00 - Desa Sukarara (Belajar Tenun & Foto Baju Adat)',
          '12:00 - Makan Siang Lokal (Nasi Puyung)',
          '13:30 - Tiba di Area Air Terjun',
          '14:00 - Soft Trekking ke Benang Stokel',
          '15:00 - Mandi & Foto di Benang Kelambu',
          '16:30 - Taman Narmada (Air Awet Muda)',
          '17:30 - Kembali ke Hotel'
        ]
      }
    ],
    inclusions: ['Transportasi Mobil AC + BBM', 'Driver/Guide Berpengalaman', 'Tiket Masuk Wisata', 'Lokal Guide Air Terjun', 'Air Mineral'],
    exclusions: ['Makan Siang', 'Ojek Air Terjun (Opsional)', 'Pengeluaran Pribadi']
  },
  {
    id: 'd3',
    title: 'Pink Beach & Pulau Pasir',
    destinations: 'Lombok Timur',
    price: 'Rp 450.000/pax',
    image: 'https://picsum.photos/seed/pinkbeach/600/400',
    description: 'Eksplorasi pantai unik dengan pasir berwarna merah muda. Mengunjungi pulau pasir timbul di tengah laut dan tebing-tebing eksotis Tanjung Ringgit.',
    duration: 'Full Day (9 Jam)',
    category: 'Daily Trip',
    itinerary: [
      {
        day: 1,
        title: 'Pink Beach Exploration',
        activities: [
          '08:00 - Penjemputan',
          '10:00 - Tiba di Pelabuhan Tanjung Luar',
          '10:30 - Pulau Pasir (Hanya saat surut)',
          '11:30 - Pantai Pink 1 & Bukit Tangsi',
          '13:00 - Makan Siang Seafood Bakar (Picnic Style)',
          '14:30 - Snorkeling di Gili Petelu',
          '16:00 - Kembali ke Pelabuhan & Hotel'
        ]
      }
    ],
    inclusions: ['Transportasi AC', 'Private Boat ke Pink Beach', 'Makan Siang Seafood', 'Alat Snorkeling', 'Tiket Masuk', 'Dokumentasi'],
    exclusions: ['Pengeluaran Pribadi', 'Tipping']
  }
];

export const ACTIVITIES: Activity[] = [
  { id: 'a1', title: 'Romantic Dinner', description: 'Gili Trawangan Sunset', image: 'https://picsum.photos/seed/dinner/400/500' },
  { id: 'a2', title: 'Snorkeling', description: '3 Gili Exploration', image: 'https://picsum.photos/seed/snorkel/400/500' },
  { id: 'a3', title: 'Horse Riding', description: 'Beach Sunset Ride', image: 'https://picsum.photos/seed/horse/400/500' },
  { id: 'a4', title: 'Paddle Board', description: 'With Drone Documentation', image: 'https://picsum.photos/seed/paddle/400/500' },
  { 
    id: 'a5', 
    title: 'Best Trip Moments', 
    description: 'Galeri kenangan tamu kami', 
    image: 'https://picsum.photos/seed/moment_cover/400/500',
    gallery: [
      'https://picsum.photos/seed/moment1/800/600',
      'https://picsum.photos/seed/moment2/800/600',
      'https://picsum.photos/seed/moment3/800/600',
      'https://picsum.photos/seed/moment4/800/600',
      'https://picsum.photos/seed/moment5/800/600',
    ]
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'w1',
    title: 'Agen Resmi',
    description: 'Legal, berizin, dan berpengalaman sejak 2015.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'w2',
    title: 'Tim Berpengalaman',
    description: 'Guide profesional dengan wawasan lokal mendalam.',
    iconName: 'Users'
  },
  {
    id: 'w3',
    title: 'Gratis Dokumentasi',
    description: 'Foto & video berkualitas (GoPro/Drone).',
    iconName: 'Camera'
  },
  {
    id: 'w4',
    title: 'Photographer',
    description: 'Ditemani fotografer untuk momen terbaik.',
    iconName: 'Award' // Approximate for photographer skill/quality
  },
  {
    id: 'w5',
    title: 'Tanpa Hidden Cost',
    description: 'Harga all-in, transparan tanpa biaya mendadak.',
    iconName: 'DollarSign'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 't1', name: 'Sarah W.', quote: "Perjalanan yang luar biasa! Guide sangat ramah dan fotonya bagus-bagus.", rating: 5 },
  { id: 't2', name: 'Budi Santoso', quote: "Lombok Pure Travel memang terbaik. Sangat merekomendasikan paket honeymoon-nya.", rating: 5 },
  { id: 't3', name: 'Jessica L.', quote: "Dokumentasi dronenya keren banget! Worth every penny.", rating: 5 },
];