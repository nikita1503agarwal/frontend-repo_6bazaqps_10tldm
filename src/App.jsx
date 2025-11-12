import { useState, useEffect } from 'react'
import Spline from '@splinetool/react-spline'
import { Github, Linkedin, Mail, ArrowDown, ExternalLink, Download, Code2, Star } from 'lucide-react'

function Nav() {
  const [open, setOpen] = useState(false)
  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold tracking-wide">Beginner Dev</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <button onClick={() => handleScroll('about')} className="hover:text-white transition">Tentang</button>
          <button onClick={() => handleScroll('skills')} className="hover:text-white transition">Keahlian</button>
          <button onClick={() => handleScroll('projects')} className="hover:text-white transition">Proyek</button>
          <button onClick={() => handleScroll('contact')} className="hover:text-white transition">Kontak</button>
          <a href="/cv.pdf" download className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-md transition">
            <Download size={16} /> CV
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-200" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2 text-gray-200">
            <button onClick={() => handleScroll('about')} className="text-left py-2">Tentang</button>
            <button onClick={() => handleScroll('skills')} className="text-left py-2">Keahlian</button>
            <button onClick={() => handleScroll('projects')} className="text-left py-2">Proyek</button>
            <button onClick={() => handleScroll('contact')} className="text-left py-2">Kontak</button>
            <a href="/cv.pdf" download className="inline-flex items-center gap-2 py-2">
              <Download size={16} /> Unduh CV
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  useEffect(() => {
    // Prefetch CV
    const link = document.createElement('link')
    link.rel = 'prefetch'
    link.href = '/cv.pdf'
    document.head.appendChild(link)
  }, [])

  return (
    <section className="relative min-h-[90vh] w-full bg-[#0a0a0a] text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-36 pb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-emerald-300/90 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full mb-4">
            <Star size={16} /> Portofolio Pemrogram Pemula
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
            Gaya klasik. Mode gelap. Sentuhan kreatif.
          </h1>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Halo! Saya seorang programmer pemula yang suka membangun proyek web sederhana namun rapi. Di sini Anda bisa melihat ringkasan diri, keahlian, dan beberapa proyek latihan saya.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="/cv.pdf" download className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-md font-medium hover:bg-gray-200 transition">
              <Download size={18} /> Unduh CV
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-5 py-2.5 rounded-md transition">
              <ArrowDown size={18} /> Lihat Proyek
            </a>
            <div className="flex items-center gap-3 ml-2">
              <a className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition" href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition" href="mailto:hello@example.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="inline-flex items-center gap-2 text-amber-300/90 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
        <Code2 size={16} /> {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">{title}</h2>
      {subtitle && <p className="mt-2 text-gray-300">{subtitle}</p>}
    </div>
  )
}

function About() {
  return (
    <section id="about" className="relative bg-[#0b0b0b] text-gray-200 py-20 border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-emerald-500/10 blur-3xl rounded-full" />
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle
          eyebrow="Tentang Saya"
          title="Belajar langkah demi langkah"
          subtitle="Fokus pada fondasi: HTML, CSS, JavaScript, dan React. Suka menulis kode yang bersih dan mudah dipahami."
        />
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Misi</h3>
            <p className="text-gray-300 leading-relaxed">Membangun portofolio projek kecil yang nyata, meningkatkan kemampuan problem solving, dan berkontribusi ke komunitas open-source.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Teknologi favorit</h3>
            <p className="text-gray-300 leading-relaxed">React + Tailwind untuk frontend, FastAPI untuk backend, dan GitHub untuk kolaborasi.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const skills = [
  { name: 'HTML & CSS', level: 'Dasar' },
  { name: 'JavaScript', level: 'Dasar' },
  { name: 'React', level: 'Pemula' },
  { name: 'Tailwind CSS', level: 'Pemula' },
  { name: 'Git & GitHub', level: 'Pemula' },
]

function Skills() {
  return (
    <section id="skills" className="bg-[#0a0a0a] text-gray-200 py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle eyebrow="Keahlian" title="Alat yang sedang saya pelajari" />
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((s) => (
            <div key={s.name} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 transition">
              <div className="text-white font-medium">{s.name}</div>
              <div className="text-sm text-gray-400 mt-1">{s.level}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const projects = [
  {
    title: 'Aplikasi To-Do Sederhana',
    desc: 'Membuat daftar tugas dengan React + Tailwind. Fitur tambah, centang, dan hapus.',
    link: 'https://example.com',
    tags: ['React', 'Tailwind'],
  },
  {
    title: 'Landing Page Gelap Klasik',
    desc: 'Eksperimen desain mode gelap dengan tipografi klasik dan elemen retro.',
    link: 'https://example.com',
    tags: ['HTML', 'CSS'],
  },
  {
    title: 'REST API Pemula',
    desc: 'Belajar dasar backend dengan FastAPI: endpoint CRUD sederhana.',
    link: 'https://example.com',
    tags: ['FastAPI'],
  },
]

function Projects() {
  return (
    <section id="projects" className="bg-[#0b0b0b] text-gray-200 py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle eyebrow="Proyek" title="Beberapa karya latihan" />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 transition flex flex-col">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 mb-4" />
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="text-gray-300 text-sm mt-1 flex-1">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs text-amber-300/90 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">{t}</span>
                ))}
              </div>
              <a href={p.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200">
                Lihat proyek <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="bg-[#0a0a0a] text-gray-200 py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle eyebrow="Kontak" title="Mari terhubung" subtitle="Terbuka untuk diskusi, kolaborasi, atau masukan!" />
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-3">Email</h3>
            <a className="text-emerald-300 hover:text-emerald-200" href="mailto:hello@example.com">hello@example.com</a>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-3">Media Sosial</h3>
            <div className="flex items-center gap-3">
              <a className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition" href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-gray-500">© {new Date().getFullYear()} Beginner Dev. Dibuat dengan cinta menggunakan React & Tailwind.</p>
      </div>
    </section>
  )
}

export default function App() {
  useEffect(() => {
    // Smooth scroll for hash links
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (a) {
        const id = a.getAttribute('href').slice(1)
        const el = document.getElementById(id)
        if (el) {
          e.preventDefault()
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
