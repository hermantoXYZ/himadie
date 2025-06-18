
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
    title: 'Neurological Development Studies',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80',
    category: 'Neuroscience',
    description: 'Investigating brain development and neural pathways to better understand cognitive processes.',
    featured: false,
    author: 'Dr. Emily Rodriguez',
    date: 'March 22, 2025',
    content: `
      <h2>Research Summary</h2>
      <p>This project focuses on mapping neural pathways during critical developmental periods to enhance our understanding of cognitive processes. By combining advanced imaging techniques with computational modeling, we are creating a more comprehensive picture of how the brain develops and functions.</p>
      
      <h2>Methodologies</h2>
      <ul>
        <li>High-resolution functional magnetic resonance imaging (fMRI)</li>
        <li>Longitudinal studies tracking neural development over time</li>
        <li>Computational models that simulate neural pathway formation</li>
        <li>Non-invasive brain stimulation techniques to assess plasticity</li>
      </ul>
      
      <h2>Significant Findings</h2>
      <p>Our research has identified previously unknown patterns of connectivity that emerge during adolescence, which may explain certain cognitive and behavioral changes during this period. We've also developed new algorithms that can predict developmental trajectories based on early neural markers.</p>
      
      <h2>Implications</h2>
      <p>These findings have significant implications for understanding and potentially treating neurodevelopmental disorders. Our work may lead to earlier intervention strategies and more targeted therapeutic approaches for conditions like autism spectrum disorder and ADHD.</p>
    `,
  },
  {
    id: 4,
    title: 'Quantum Computing Advancements',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
    category: 'Quantum Physics',
    description: 'Exploring quantum algorithms and computing architectures to solve previously intractable problems.',
    featured: false,
    author: 'Dr. Alan Muir',
    date: 'February 8, 2025',
    content: `
      <h2>Project Overview</h2>
      <p>This research initiative explores quantum computing architectures and algorithms that can tackle problems previously deemed intractable with classical computing methods. Our interdisciplinary team combines expertise in quantum physics, computer science, and mathematics to push the boundaries of quantum information processing.</p>
      
      <h2>Research Areas</h2>
      <ul>
        <li>Error correction techniques for quantum computing systems</li>
        <li>Development of quantum algorithms for optimization problems</li>
        <li>Quantum machine learning approaches</li>
        <li>Scalable quantum computing architecture design</li>
      </ul>
      
      <h2>Achievements</h2>
      <p>We have successfully implemented a novel error correction protocol that increases qubit coherence time by 40%. Our team has also developed quantum algorithms that demonstrate quadratic speedup over classical methods for specific classes of optimization problems relevant to logistics and supply chain management.</p>
      
      <h2>Future Directions</h2>
      <p>The next phase of our research will focus on developing hybrid quantum-classical systems that can be deployed in enterprise environments. We are also exploring quantum encryption methods that could revolutionize secure communications in the post-quantum era.</p>
    `,
  },
  {
    id: 5,
    title: 'Urban Planning Innovations',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80',
    category: 'Urban Studies',
    description: 'Developing new approaches to urban design that prioritize sustainability and community wellbeing.',
    featured: false,
    author: 'Prof. Natasha Wong',
    date: 'January 17, 2025',
    content: `
      <h2>Research Summary</h2>
      <p>This project develops innovative approaches to urban planning that prioritize environmental sustainability and community wellbeing. Our multidisciplinary team integrates insights from architecture, environmental science, sociology, and public health to create comprehensive urban design frameworks.</p>
      
      <h2>Core Focus Areas</h2>
      <ul>
        <li>Green infrastructure integration in high-density urban environments</li>
        <li>Smart city technologies that enhance resource efficiency</li>
        <li>Community-centered design approaches that promote social cohesion</li>
        <li>Climate resilience strategies for urban areas</li>
      </ul>
      
      <h2>Key Innovations</h2>
      <p>We have developed a computational modeling system that can simulate how various urban design choices impact air quality, temperature regulation, and water management. Our participatory design toolkit has been successfully implemented in three cities, leading to urban renewal projects with 90% community approval rates.</p>
      
      <h2>Practical Applications</h2>
      <p>Our research is directly informing urban redevelopment projects in several metropolitan areas. The biophilic design principles we've developed are being incorporated into municipal building codes, and our community engagement methods are being adopted by urban planning departments worldwide.</p>
    `,
  },
  {
    id: 6,
    title: 'Biomedical Imaging Techniques',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    category: 'Medical Research',
    description: 'Creating advanced imaging technologies to improve medical diagnostics and treatment planning.',
    featured: false,
    author: 'Dr. Robert Kim',
    date: 'December 5, 2024',
    content: `
      <h2>Project Overview</h2>
      <p>This research focuses on developing next-generation biomedical imaging technologies that provide higher resolution, greater tissue differentiation, and reduced radiation exposure. These advancements aim to significantly improve diagnostic accuracy and treatment planning across multiple medical specialties.</p>
      
      <h2>Research Directions</h2>
      <ul>
        <li>Photoacoustic imaging systems for non-invasive tissue characterization</li>
        <li>AI-enhanced image reconstruction for lower radiation dose imaging</li>
        <li>Molecular imaging approaches for early disease detection</li>
        <li>Multimodal imaging techniques that combine structural and functional information</li>
      </ul>
      
      <h2>Breakthrough Results</h2>
      <p>Our lab has developed a novel photoacoustic imaging system that can detect vascular changes associated with early-stage tumors that are undetectable with conventional imaging. We've also created deep learning algorithms that can reduce CT radiation exposure by 60% while maintaining diagnostic image quality.</p>
      
      <h2>Clinical Impact</h2>
      <p>These technologies are currently being tested in clinical trials at three major medical centers, with preliminary results showing a 30% increase in early-stage cancer detection rates. Our radiation dose reduction techniques are being implemented in pediatric imaging protocols, significantly reducing exposure in this vulnerable population.</p>
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
