
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Sample data - this would typically come from an API
const researchProjects = [
  {
    id: 1,
    title: 'Pendaftaran Program Doktor (S3) UNHAS',
    image: '/artikel3.jpeg',
    category: 'Pengumuman Akademik',
    description: 'Universitas Hasanuddin membuka pendaftaran Program Doktor (S3) tahap 3 untuk Semester Awal Tahun Akademik 2025/2026. Pendaftaran dilakukan secara online melalui laman resmi RegPMB Unhas.',
    featured: true,
    author: 'Admin',
    date: 'July 14, 2025',
    content: `
      <p>Universitas Hasanuddin membuka pendaftaran Program Doktor (S3) Tahap 3 untuk Semester Awal 2025/2026. Program studi yang dibuka dapat dilihat melalui laman resmi <a href="https://regpmb.unhas.ac.id" target="_blank" class="text-blue-600 underline">regpmb.unhas.ac.id</a>.</p><br>
      
      <p>Biaya pendaftaran sebesar Rp750.000,- dibayarkan melalui bank yang ditunjuk mulai tanggal <strong>14 s.d. 23 Juli 2025 pukul 16.00 WITA</strong>.</p><br>
  
      <p>Berikut adalah tahapan dan jadwal lengkap:</p>
      <ul class="list-disc list-inside">
        <li>Pengisian formulir online: <strong>14 – 23 Juli 2025 (pukul 23.59 WITA)</strong></li>
        <li>Verifikasi berkas: <strong>15 – 24 Juli 2025</strong></li>
        <li>Pencetakan kartu ujian: <strong>25 Juli 2025</strong></li>
        <li>Sosialisasi koneksi jaringan: <strong>26 Juli 2025 (1 jam sebelum ujian)</strong></li>
        <li>Pelaksanaan ujian online: <strong>26 – 27 Juli 2025</strong></li>
      </ul><br>
  
      <p><strong>Materi ujian:</strong></p>
      <ul class="list-disc list-inside">
        <li>Tes Potensi Akademik (TPA)</li>
        <li>English Proficiency Test (EPT)</li>
        <li>Wawancara</li>
      </ul><br>
  
      <p>Hasil ujian akan diumumkan secara online pada <strong>30 Juli 2025</strong>.</p>
      <p>Registrasi ulang dan pembayaran SPP Semester I dilakukan mulai <strong>1 – 8 Agustus 2025</strong>.</p>
      <p><strong>Letter of Acceptance (LoA)</strong> dapat diunduh melalui akun masing-masing peserta pada menu <em>Download LoA</em>.</p><br>
    `,
  },
  
  {
    id: 2,
    title: 'Pengurus Himadie FEB Unhas Resmi Dilantik',
    image: 'https://asset-2.tstatic.net/makassar/foto/bank/images/dekan-fakultas-ekonomi-dan-bisnis-feb-unhas-prof-dr-abd-rahman-kadir.jpg',
    category: 'Berita Himadie',
    description: 'Researching renewable energy technologies that reduce environmental impact and increase energy efficiency.',
    featured: true,
    author: 'Admin',
    date: '28 April , 2020',
    content: `
  <p>Dekan Fakultas Ekonomi dan Bisnis (FEB) Unhas, Prof Dr Abd Rahman Kadir, SE, MSi melantik Pengurus Himpunan Mahasiswa Doktor Ilmu Ekonomi (Himadie) FEB-Unhas, di Hotel MaxOne Makassar Jumat (28/02/2020).</p></br>
  <p>Ketua Program Studi Dr Anas Iswanto Anwar Makatutu melaporkan bahwa organisasi HIMADIE FEB-Unhas ini sebagai wadah mahasiswa.</p></br>
       <img src="https://asset-2.tstatic.net/makassar/foto/bank/images/dekan-fakultas-ekonomi-dan-bisnis-feb-unhas-prof-dr-abd-rahman-kadir.jpg" alt="Mubes HimaDie Unhas 2024-2025" class="w-full h-auto rounded-lg my-2" />
  <p>"Tujuan untuk menampung seluruh aspirasi mahasiswa tentang informasi yang berkaitan dengan akademik," katanya dalam rilis yang diterima Tribun Timur.</p></br>
  <p>Pengurus yang dilantik adalah hasil dari Musyawarah Anggota II yang telah dilaksanakan pada 6 Februari 2020 di Gedung Pascasarjana FEB-Unhas dengan susunan pengurus terdiri dari:</p></br>
  <ul>
    <li>Ketua: Mustakim Muchlis</li>
    <li>Wakil Ketua: Wadzhiba Nas</li>
    <li>Sekretaris: Abdul Rahman</li>
    <li>Bendahara: Andry</li>
    <li>Wakil Bendahara: Sri Prilmayanti</li>
  </ul></br>
  <p>Kepengurusan ini dilengkapi beberapa bidang, yakni Bidang Umum, Bidang Keilmuan, dan Bidang Humas.</p>
  <p>Prof Dr Abd Rahman Kadir, SE, MSi mengatakan pembentukan himpunan ini menjadi penting untuk meningkatkan kepedulian mahasiswa terhadap kemajuan program studi.</p></br>
  <p>"Juga membantu program studi dalam memperbaiki mutu akademik, sehingga 'Check dan Balances' berjalan dengan baik," katanya.</p></br>
  <p>Setelah dilakukan pelantikan, dilanjutkan dengan Rapat Kerja Pengurus Himadie FEB-Unhas Periode 2020–2021 untuk menyusun program kerja yang direncanakan guna dilaksanakan selama masa periode kepengurusan himpunan ini.</p>

    `,
  },
    {
      id: 3,
      title: 'Mubes HimaDie Unhas',
      image: '/public/artikel1.jpeg',
      category: 'Berita HimaDie',
      description: 'Himpunan Mahasiswa Doktor Ilmu Ekonomi, Fakultas Ekonomi dan Bisnis, Universitas Hasanuddin,  (HIMADIE FEB UNHAS) periode 2024-2025 menggelar Musyawarah Besar (Mubes). .',
      featured: true,
      author: 'Admin',
      date: 'May 15, 2025',
      content: `
        <p>Himpunan Mahasiswa Doktor Ilmu Ekonomi, Fakultas Ekonomi dan Bisnis, Universitas Hasanuddin,  (HIMADIE FEB UNHAS) periode 2024-2025 menggelar Musyawarah Besar (Mubes). Kegiatan itu dilaksanakan pada Rabu (7/5/2025) di Ruangan Pascasarjana FEB Unhas.</p><br>
         <p>Mubes tersebut dihadiri oleh Ketua Program Studi Doktor Ilmu Ekonomi FEB-UNHAS, Dr. Madris, DPS., S.E., M.Si.</p><br>
         <p>Dalam Mubes tersebut, Mahasiswa S3 angkatan 2024 periode I Syamsu Alam terpilih secara aklamasi oleh pengurus dan mahasiwa Doktor Ilmu Ekonomi yang hadir. Ketua terpilih berharap dapat membangun sinergi yang solid dengan Civitas Kampus dan Alumni S3 Ilmu Ekonomi FEB Unhas.</p><br>
         <img src="/artikel2.jpeg" alt="Mubes HimaDie Unhas 2024-2025" class="w-full h-auto rounded-lg my-2" />
            <img src="/artikel1.jpeg" alt="Mubes HimaDie Unhas 2024-2025" class="w-full h-auto rounded-lg my-2" />
      `,
    },
];

const ResearchItemPage = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any | null>(null);
  
  useEffect(() => {
    // In a real app, this would fetch from an API
    const projectId = parseInt(id || '0', 10);
    const foundProject = researchProjects.find(p => p.id === projectId);
    
    if (foundProject) {
      setProject(foundProject);
      document.title = `${foundProject.title} | Research Institute`;
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Research project not found</h1>
            <Button asChild>
              <Link to="/research">Return to Research</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero section */}
        <div 
          className="relative h-[40vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40"></div>
          <div className="container mx-auto px-4 h-full flex items-end pb-12 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center text-blue-100 mb-4">
                <span className="bg-blue-600 text-white text-xs py-1 px-2 rounded mr-3">
                  {project.category}
                </span>
                <div className="flex items-center text-sm mr-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  {project.date}
                </div>
                <div className="flex items-center text-sm">
                  <User className="w-4 h-4 mr-1" />
                  {project.author}
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
                {project.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-wrap">
            {/* Main content */}
            <div className="w-full lg:w-2/3 lg:pr-12">
              <Button variant="ghost" asChild className="mb-8 text-blue-600 hover:text-blue-700">
                <Link to="/research" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to All Research Projects
                </Link>
              </Button>
              
              <div className="prose prose-blue max-w-none"
                dangerouslySetInnerHTML={{ __html: project.content }}
              />
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3 mt-12 lg:mt-0">
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold">Project Details</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">RESEARCH AREA</h4>
                      <p className="flex items-center mt-1">
                        <Tag className="w-4 h-4 mr-2 text-blue-600" />
                        {project.category}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">LEAD RESEARCHER</h4>
                      <p className="flex items-center mt-1">
                        <User className="w-4 h-4 mr-2 text-blue-600" />
                        {project.author}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">PUBLISHED DATE</h4>
                      <p className="flex items-center mt-1">
                        <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                        {project.date}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8">
  
                <div className="space-y-4">
                  {researchProjects
                    .filter(p => p.id !== project.id && p.category === project.category)
                    .slice(0, 2)
                    .map(relatedProject => (
                      <Link 
                        key={relatedProject.id}
                        to={`/research/${relatedProject.id}`}
                        className="flex group items-start hover:bg-blue-50 p-3 rounded-lg transition-colors"
                      >
                        <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                          <img 
                            src={relatedProject.image} 
                            alt={relatedProject.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-sm group-hover:text-blue-600 transition-colors">
                            {relatedProject.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{relatedProject.author}</p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResearchItemPage;
