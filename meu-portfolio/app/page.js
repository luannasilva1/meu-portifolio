'use client';

import React, { useState, useEffect } from 'react';

export default function Portfolio() {
  const [page, setPage] = useState('home');
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (page === 'home') {
      fetchQuote();
    }
  }, [page]);

  const fetchQuote = async () => {
  setLoading(true);
  try {
    // detecta ambiente (local, navegador ou Vercel SSR)
    const baseUrl =
      typeof window === "undefined"
        ? process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000"
        : "";

    const res = await fetch(`${baseUrl}/api/quote`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`Erro HTTP: ${res.status}`);
    }

    const data = await res.json();
    setQuote(data);
  } catch (err) {
    console.error("❌ Erro ao buscar citação:", err);
  } finally {
    setLoading(false);
  }
};


  const renderHome = () => (
    <div style={styles.homeContainer}>
      <div style={styles.homeContent}>
        <div style={styles.homeCenter}>
          <div style={styles.avatar}>
            <img 
              src="/perfil.jpg" 
              alt="Foto de Perfil" 
              style={styles.profileImage}
            />
          </div>
          <h1 style={styles.mainTitle}>Luanna Silva</h1>
          <p style={styles.subtitle}>Analista Desevolvedora</p>
          <p style={styles.tagline}>Transformando ideias em código</p>
        </div>

        {quote && (
          <div style={styles.quoteCard}>
            <p style={styles.quoteText}>"{quote.content}"</p>
            <p style={styles.quoteAuthor}>— {quote.author}</p>
          </div>
        )}

        <div style={styles.socialLinks}>
          <a href="mailto:luannaevellyn2020@gmail.com?subject=Tenho+Interesse+no+seu+trabalho&body=Ol%C3%A1,+me+chamo..." style={styles.socialIcon}>
            <span style={styles.iconText}>📧</span>
          </a>
          <a href="https://www.linkedin.com/in/luanna-silva-bs/" style={styles.socialIcon}>
            <span style={styles.iconText}>💼</span>
          </a>
          <a href="https://github.com/luannasilva1" style={styles.socialIcon}>
            <span style={styles.iconText}>🔗</span>
          </a>
        </div>

        <div style={styles.ctaContainer}>
          <button onClick={() => setPage('about')} style={styles.ctaButton}>
            Conheça meu trabalho →
          </button>
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div style={styles.pageContainer}>
      <h2 style={styles.pageTitle}>Sobre</h2>
      
      <div style={styles.cardCreme}>
        <h3 style={styles.cardTitleYellow}> Me conhecendo</h3>
        <p style={styles.paragraph}> Me chamo Luanna, sou natural de Recife-pe, tenho 19 anos e minhas cores preferidas são preto e roxo.
          Sou Analista desenvolvedora apaixonado por criar soluções inovadoras e eficientes. 
          Com experiência em desenvolvimento backend e salesforce, busco sempre aprender novas tecnologias e aplicar as melhores práticas de programação.
        </p>
        
      </div>
    </div>
  );

  const renderAcademic = () => (
    <div style={styles.pageContainer}>
      <h2 style={styles.pageTitle}> Experiência Acadêmica</h2>
      
      <div style={styles.academicList}>
        <div style={styles.academicCard1}>
          <div style={styles.academicHeader}>
            <div style={styles.iconBoxYellow}>

            </div>
            <div style={styles.academicContent}>
              <h3 style={styles.academicTitle}>Tecnológo em Sistemas para Internet</h3>
              <p style={styles.academicSubtitle}>Universidade Federal | 2024 - 2026</p>
            </div>
          </div>
        </div>

        

        <div style={styles.academicCard3}>
          <div style={styles.academicHeader}>
            <div style={styles.iconBoxBrown}>
              
            </div>
            <div style={styles.academicContent}>
              <h3 style={styles.academicTitle}>Cursos complementares</h3>
              <ul style={styles.certList}>
                <li style={styles.academicText}>• ReactJs - Rockeatset -2024</li>
                <li style={styles.academicText}>• Lógica de programação JavaScript - Alura - 2024</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProfessional = () => (
    <div style={styles.pageContainer}>
      <h2 style={styles.pageTitle}>💼 Experiência Profissional</h2>
      
      <div style={styles.timeline}>
        <div style={styles.timelineLine}></div>
        
        <div style={styles.timelineItem}>
          <div style={styles.timelineDot}></div>
          <div style={styles.timelineCard1}>
            <p style={styles.timelineDate}>📅 2025 - Presente</p>
            <h3 style={styles.timelineTitle}>Analista Desevolvedor Jr I</h3>
            <p style={styles.timelineCompany}> DreamXp</p>
            <p style={styles.timelineText}> Desevolvedor Salesforce.</p>
          </div>
        </div>

        <div style={styles.timelineItem}>
          <div style={styles.timelineDot}></div>
          <div style={styles.timelineCard2}>
            <p style={styles.timelineDate}> 2024 - 2025</p>
            <h3 style={styles.timelineTitle}>Jovem Aprendiz</h3>
            <p style={styles.timelineCompany}>Imdepa</p>
            <p style={styles.timelineText}>Suporte administrativo.</p>
          </div>
        </div>

       
      </div>
    </div>
  );

  const renderProjects = () => (
    <div style={styles.pageContainer}>
      <h2 style={styles.pageTitle}>🚀 Projetos Desenvolvidos</h2>
      
      <div style={styles.projectsGrid}>
        <div style={styles.projectCard1}>
          <div style={styles.projectHeader}>
            <h3 style={styles.projectTitle}> Jogo da forca</h3>
            <a href="https://jogo-da-forca-12yk.vercel.app/" style={styles.projeto1}>
          
            <span style={styles.externalIcon}>🔗</span>
          </a>
          </div>
          <p style={styles.projectText}>Plataforma completa de e-commerce com carrinho de compras, pagamento integrado e painel administrativo.</p>
          <div style={styles.tagContainer}>
            <span style={styles.tagYellow}>Next.js</span>
            <span style={styles.tagYellow}>Node.js</span>
  
          </div>
        </div>

      </div>
    </div>
  );

  return (
    <div style={styles.app}>
      {page !== 'home' && (
        <nav style={styles.nav}>
          <div style={styles.navContainer}>
            <h1 style={styles.navTitle}>💼 Meu Portfólio</h1>
            <div style={styles.navLinks}>
              <button onClick={() => setPage('home')} style={{...styles.navLink, color: page === 'home' ? '#FFD166' : '#F7E4C6'}}>
                <span style={styles.navIcon}>🏠</span>
                <span>Home</span>
              </button>
              <button onClick={() => setPage('about')} style={{...styles.navLink, color: page === 'about' ? '#FFD166' : '#F7E4C6'}}>
                <span style={styles.navIcon}>👤</span>
                <span>Sobre</span>
              </button>
              <button onClick={() => setPage('academic')} style={{...styles.navLink, color: page === 'academic' ? '#FFD166' : '#F7E4C6'}}>
                <span style={styles.navIcon}>🎓</span>
                <span>Acadêmico</span>
              </button>
              <button onClick={() => setPage('professional')} style={{...styles.navLink, color: page === 'professional' ? '#FFD166' : '#F7E4C6'}}>
                <span style={styles.navIcon}>💼</span>
                <span>Profissional</span>
              </button>
              <button onClick={() => setPage('projects')} style={{...styles.navLink, color: page === 'projects' ? '#FFD166' : '#F7E4C6'}}>
                <span style={styles.navIcon}>🚀</span>
                <span>Projetos</span>
              </button>
            </div>
          </div>
        </nav>
      )}

      {page === 'home' && renderHome()}
      {page === 'about' && renderAbout()}
      {page === 'academic' && renderAcademic()}
      {page === 'professional' && renderProfessional()}
      {page === 'projects' && renderProjects()}

      {page !== 'home' && (
        <footer style={styles.footer}>
          <div style={styles.footerContainer}>
            <p style={styles.footerText}>© 2025 Seu Nome. Todos os direitos reservados.</p>
          </div>
        </footer>
      )}
    </div>
  );
}

const styles = {
  app: {
    backgroundColor: '#2C1A0E',
    minHeight: '100vh',
    color: '#F7E4C6',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    backgroundColor: 'rgba(44, 26, 14, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid #6B3E1D',
  },
  navContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '1rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  navTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#FFD166',
    margin: 0,
  },
  navLinks: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
    fontSize: '1rem',
    padding: '0.5rem',
  },
  navIcon: {
    fontSize: '1.2rem',
  },
  homeContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1.5rem',
    background: 'linear-gradient(135deg, #2C1A0E 0%, #6B3E1D 100%)',
  },
  homeContent: {
    maxWidth: '1024px',
    width: '100%',
  },
  homeCenter: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  avatar: {
    width: '128px',
    height: '128px',
    margin: '0 auto 1.5rem',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #FFD166 0%, #AF7026 100%)',
    boxShadow: '0 10px 40px rgba(255, 209, 102, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
  },
  mainTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#FFD166',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    color: '#F7E4C6',
  },
  tagline: {
    fontSize: '1.125rem',
    color: '#BB6F58',
  },
  quoteCard: {
    padding: '2rem',
    borderRadius: '1rem',
    marginBottom: '2rem',
    backgroundColor: 'rgba(247, 228, 198, 0.1)',
    border: '2px solid #AF7026',
  },
  quoteText: {
    fontSize: '1.125rem',
    fontStyle: 'italic',
    marginBottom: '1rem',
    color: '#F7E4C6',
  },
  quoteAuthor: {
    textAlign: 'right',
    color: '#FFD166',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginBottom: '3rem',
    flexWrap: 'wrap',
  },
  socialIcon: {
    padding: '1rem',
    borderRadius: '50%',
    backgroundColor: '#AF7026',
    transition: 'transform 0.2s',
    cursor: 'pointer',
    display: 'flex',
    textDecoration: 'none',
  },
  iconText: {
    fontSize: '1.5rem',
  },
  ctaContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  ctaButton: {
    padding: '1rem 2rem',
    borderRadius: '9999px',
    fontWeight: '600',
    fontSize: '1.125rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    backgroundColor: '#FFD166',
    color: '#2C1A0E',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    boxShadow: '0 8px 20px rgba(255, 209, 102, 0.4)',
  },
  pageContainer: {
    maxWidth: '1152px',
    margin: '0 auto',
    padding: '3rem 1.5rem',
  },
  pageTitle: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    color: '#FFD166',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem',
  },
  cardTerracota: {
    padding: '1.5rem',
    borderRadius: '0.75rem',
    backgroundColor: 'rgba(187, 111, 88, 0.1)',
    border: '2px solid #BB6F58',
  },
  cardMel: {
    padding: '1.5rem',
    borderRadius: '0.75rem',
    backgroundColor: 'rgba(175, 112, 38, 0.1)',
    border: '2px solid #AF7026',
  },
  cardCreme: {
    padding: '2rem',
    borderRadius: '0.75rem',
    backgroundColor: 'rgba(247, 228, 198, 0.1)',
    border: '2px solid #F7E4C6',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#AF7026',
  },
  cardTitleYellow: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#FFD166',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '0.5rem',
    color: '#F7E4C6',
  },
  bulletYellow: {
    color: '#FFD166',
    fontSize: '0.8rem',
  },
  paragraph: {
    fontSize: '1.125rem',
    lineHeight: '1.75',
    marginBottom: '1rem',
    color: '#F7E4C6',
  },
  academicList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  academicCard1: {
    padding: '1.5rem',
    borderRadius: '0.75rem',
    backgroundColor: 'rgba(175, 112, 38, 0.1)',
    border: '2px solid #AF7026',
    transition: 'transform 0.2s',
  },
  academicCard2: {
    padding: '1.5rem',
    borderRadius: '0.75rem',
    backgroundColor: 'rgba(187, 111, 88, 0.1)',
    border: '2px solid #BB6F58',
    transition: 'transform 0.2s',
  },
  academicCard3: {
    padding: '1.5rem',
    borderRadius: '0.75rem',
    backgroundColor: 'rgba(247, 228, 198, 0.1)',
    border: '2px solid #F7E4C6',
    transition: 'transform 0.2s',
  },
  academicHeader: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  iconBoxYellow: {
    padding: '0.75rem',
    borderRadius: '0.5rem',
    backgroundColor: '#FFD166',
    height: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBoxMel: {
    padding: '0.75rem',
    borderRadius: '0.5rem',
    backgroundColor: '#AF7026',
    height: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBoxBrown: {
    padding: '0.75rem',
    borderRadius: '0.5rem',
    backgroundColor: '#6B3E1D',
    height: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigIcon: {
    fontSize: '2rem',
  },
  academicContent: {
    flex: 1,
  },
  academicTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#FFD166',
  },
  academicSubtitle: {
    fontSize: '1.125rem',
    marginBottom: '0.5rem',
    color: '#BB6F58',
  },
  academicText: {
    color: '#F7E4C6',
    marginBottom: '0.25rem',
  },
  certList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  timeline: {
    position: 'relative',
  },
  timelineLine: {
    position: 'absolute',
    left: '32px',
    top: 0,
    bottom: 0,
    width: '4px',
    backgroundColor: '#AF7026',
  },
  timelineItem: {
    position: 'relative',
    marginBottom: '2rem',
  },
  timelineDot: {
    position: 'absolute',
    left: '24px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#FFD166',
    border: '3px solid #2C1A0E',
  },
  timelineCard1: {
    marginLeft: '80px',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    backgroundColor: 'rgba(175, 112, 38, 0.1)',
    border: '2px solid #AF7026',
  },
  timelineCard2: {
    marginLeft: '80px',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    backgroundColor: 'rgba(187, 111, 88, 0.1)',
    border: '2px solid #BB6F58',
  },
  timelineCard3: {
    marginLeft: '80px',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    backgroundColor: 'rgba(247, 228, 198, 0.1)',
    border: '2px solid #F7E4C6',
  },
  timelineDate: {
    fontSize: '0.875rem',
    marginBottom: '0.5rem',
    color: '#BB6F58',
  },
  timelineTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#FFD166',
  },
  timelineCompany: {
    fontSize: '1.125rem',
    marginBottom: '0.75rem',
    color: '#AF7026',
  },
  timelineText: {
    color: '#F7E4C6',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  projectCard1: {
    padding: '1.5rem',
    borderRadius: '0.75rem',
    backgroundColor: 'rgba(175, 112, 38, 0.1)',
    border: '2px solid #AF7026',
    transition: 'transform 0.2s',
  },
  projectCard2: {
    padding: '1.5rem',
    borderRadius: '0.75rem',
    backgroundColor: 'rgba(187, 111, 88, 0.1)',
    border: '2px solid #BB6F58',
    transition: 'transform 0.2s',
  },
  projectCard3: {
    padding: '1.5rem',
    borderRadius: '0.75rem',
    backgroundColor: 'rgba(247, 228, 198, 0.1)',
    border: '2px solid #F7E4C6',
    transition: 'transform 0.2s',
  },
  projectCard4: {
    padding: '1.5rem',
    borderRadius: '0.75rem',
    backgroundColor: 'rgba(175, 112, 38, 0.1)',
    border: '2px solid #AF7026',
    transition: 'transform 0.2s',
  },
  projectHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  projectTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#FFD166',
    margin: 0,
  },
  externalIcon: {
    fontSize: '1.5rem',
  },
  projectText: {
    marginBottom: '1rem',
    color: '#F7E4C6',
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  tagYellow: {
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    backgroundColor: '#FFD166',
    color: '#2C1A0E',
  },
  tagMel: {
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    backgroundColor: '#AF7026',
    color: '#F7E4C6',
  },
  tagBrown: {
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    backgroundColor: '#6B3E1D',
    color: '#FFD166',
  },
  footer: {
    borderTop: '1px solid #6B3E1D',
    marginTop: '5rem',
  },
  footerContainer: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '2rem 1.5rem',
    textAlign: 'center',
  },
  footerText: {
    color: '#BB6F58',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
  },
};