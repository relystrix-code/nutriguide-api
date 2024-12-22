import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const articles = [
    {
      "id": "thWZLx9cg7BIwJ-P",
      "category": "Nutrisi",
      "date": "2024-12-01",
      "title": "Manfaat Vitamin C untuk Kesehatan Tubuh",
      "picture": "/images/article-vitamin-c.webp"
    },
    {
      "id": "mnRuVeKfFiOy6tqC",
      "category": "Nutrisi",
      "date": "2024-12-02",
      "title": "Pentingnya Serat dalam Pola Makan Sehari-hari",
      "picture": "/images/article-fiber.webp"
    },
    {
      "id": "E3lUFEjANI8maKCP",
      "category": "Nutrisi",
      "date": "2024-12-03",
      "title": "Rahasia Hidratasi: Manfaat Air untuk Tubuh",
      "picture": "/images/article-hydration.webp"
    },
    {
      "id": "I0r0I5w_ect0tzWD",
      "category": "Kesehatan",
      "date": "2024-12-01",
      "title": "Pentingnya Tidur Berkualitas untuk Tubuh",
      "picture": "/images/article-sleep.webp"
    },
    {
      "id": "tZA_iluTed8W_Ez0",
      "category": "Kesehatan",
      "date": "2024-12-02",
      "title": "Manfaat Olahraga Rutin untuk Hidup Sehat",
      "picture": "/images/article-sports.webp"
    },
    {
      "id": "yKvBo60vxyTqO02v",
      "category": "Kesehatan",
      "date": "2024-12-03",
      "title": "Cara Mengelola Stres dengan Efektif",
      "picture": "/images/article-stress.webp"
    },
    {
      "id": "x0JrfQWZqNlilhsQ",
      "category": "Lifestyle",
      "date": "2024-12-01",
      "title": "Tips Mengatur Waktu untuk Kehidupan yang Lebih Produktif",
      "picture": "/images/article-time-management.webp"
    },
    {
      "id": "p-FgdoMW2amNpSDK",
      "category": "Lifestyle",
      "date": "2024-12-02",
      "title": "Keuntungan Menjalani Hidup Minimalis",
      "picture": "/images/article-minimalism.webp"
    },
    {
      "id": "dfXOFKoouP8mj1nF",
      "category": "Lifestyle",
      "date": "2024-12-03",
      "title": "Pentingnya Me Time dalam Kehidupan Sehari-hari",
      "picture": "/images/article-me-time.webp"
    },
    {
      "id": "Bt5DWDkhb6EXuxo1",
      "category": "Olahraga",
      "date": "2024-12-01",
      "title": "Manfaat Jogging untuk Kesehatan Tubuh",
      "picture": "/images/article-jogging.webp"
    },
    {
      "id": "sdmpTSdSMtIDwKY0",
      "category": "Olahraga",
      "date": "2024-12-02",
      "title": "Panduan Memulai Latihan Angkat Beban untuk Pemula",
      "picture": "/images/article-weightlifting.webp"
    },
    {
      "id": "HNRlv-Q6vxj7LJHa",
      "category": "Olahraga",
      "date": "2024-12-03",
      "title": "Yoga: Olahraga untuk Relaksasi dan Fleksibilitas",
      "picture": "/images/article-yoga.webp"
    },
    {
      "id": "ptm8w-uxz1ltGSXh",
      "category": "Pencegahan",
      "date": "2024-12-01",
      "title": "Tips Pencegahan Flu di Musim Hujan",
      "picture": "/images/article-flu-prevention.webp"
    },
    {
      "id": "_QGNZHGDoDmkAFDX",
      "category": "Pencegahan",
      "date": "2024-12-02",
      "title": "Langkah Pencegahan Diabetes Melalui Pola Hidup Sehat",
      "picture": "/images/article-diabetes-prevention.webp"
    },
    {
      "id": "UOgwJs7HfgeXos7f",
      "category": "Pencegahan",
      "date": "2024-12-03",
      "title": "Cara Melindungi Kulit dari Bahaya Sinar Matahari",
      "picture": "/images/article-sun-protection.webp"
    },
    {
      "id": "Cj7l8m01gsow1uj1",
      "category": "Penyakit",
      "date": "2024-12-04",
      "title": "Gejala dan Pencegahan Penyakit Jantung",
      "picture": "/images/article-heart-disease.webp"
    },
    {
      "id": "_wGve6kWZEBtby17",
      "category": "Penyakit",
      "date": "2024-12-05",
      "title": "Mengenal Diabetes Tipe 2 dan Cara Mengelolanya",
      "picture": "/images/article-diabetes.webp"
    },
    {
      "id": "HnDvJg8c8MWVi5Rj",
      "category": "Penyakit",
      "date": "2024-12-06",
      "title": "Semua yang Perlu Anda Ketahui Tentang Hipertensi",
      "picture": "/images/article-hypertension.webp"
    },
  ];

  res.status(200).json({
    status: "success",
    data: {
      articles,
    },
  });
}
