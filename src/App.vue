<template>
  <div id="app-container">
    <!-- Navigation -->
    <nav class="navbar" :class="{ 'nav-scrolled': scrolly > 50 }">
      <div class="nav-content container">
        <div class="logo">APEX<span>ARCH</span></div>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Archive</a></li>
          <li><a href="#contact" class="nav-cta">Inquire</a></li>
        </ul>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="hero">
      <div class="hero-image-placeholder"></div>
      <div class="hero-content container animate-up">
        <h1>Sculpting Space.<br>Defining Life.</h1>
        <p>Award-winning Perth architectural studio focused on minimalist, sustainable, and human-centric design.</p>
        <a href="#projects" class="btn">View Archive</a>
      </div>
    </header>

    <!-- About Section -->
    <section id="about" class="about">
      <div class="container grid-2">
        <div class="about-text animate-up">
          <h2 class="section-title">Philosophy</h2>
          <p>Founded in 2012, Apex Architecture believes that every structure should be a dialogue between the unique Western Australian environment and its inhabitants. We don't just build walls; we curate experiences through the interplay of harsh sunlight, coastal breezes, and local materials.</p>
          <p>Our approach is grounded in the principle of "Essentialism" — stripping away the superfluous to reveal the soul of a space while responding to the specific rhythms of the Perth landscape.</p>
        </div>
        <div class="about-stats">
          <div class="stat-item">
            <span class="stat-num">120+</span>
            <span class="stat-label">Projects Completed</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">15</span>
            <span class="stat-label">Design Awards</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">03</span>
            <span class="stat-label">States</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Spatial Concept Section -->
    <section id="spatial-concept" class="spatial-section">
      <div class="container">
        <div class="section-header centered">
          <h2 class="section-title">Spatial Concept</h2>
          <p>An interactive exploration of our core geometric principles.</p>
        </div>
        <ModelViewer />
      </div>
    </section>

    <!-- Difference Section -->
    <section id="difference" class="difference-section">
      <div class="container">
        <div class="grid-2">
          <div class="diff-content animate-up">
            <h2 class="section-title dark-bg">What Makes Us Different</h2>
            <div class="diff-items">
              <div class="diff-item">
                <h4>Beyond the Aesthetic</h4>
                <p>We don't just design for the camera. We design for the experience of living, focusing on how a space feels at 6 AM, during the Fremantle Doctor, or in a moment of Perth's quiet midday heat.</p>
              </div>
              <div class="diff-item">
                <h4>Contextual Intelligence</h4>
                <p>Our buildings are born from their surroundings. We spend weeks studying the local light, coastal wind patterns, and the rich history of Noongar Whadjuk Boodja before drawing a single line.</p>
              </div>
              <div class="diff-item">
                <h4>Sustainable Future</h4>
                <p>In our climate, sustainability is paramount. We utilize passive solar design and advanced materials to ensure your home remains a sanctuary even through the longest Perth summer.</p>
              </div>
            </div>
          </div>
          <div class="diff-visual animate-up">
            <div class="abstract-geometry">
              <div class="geo-box box-1"></div>
              <div class="geo-box box-2"></div>
              <div class="geo-box box-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services-section">
      <div class="container">
        <div class="section-header centered">
          <h2 class="section-title">How We Can Help You</h2>
          <p>Comprehensive architectural solutions tailored to Western Australia's unique coastal and urban environments.</p>
        </div>
        <div class="services-grid">
          <div class="service-card animate-up">
            <div class="service-icon">01</div>
            <h3>Architectural Design</h3>
            <p>From conceptual sketches to detailed blueprints, we create innovative spaces that blend form and function for the Perth lifestyle.</p>
          </div>
          <div class="service-card animate-up">
            <div class="service-icon">02</div>
            <h3>Interior Architecture</h3>
            <p>We design the soul of the building, focusing on lighting, materials, and spatial flow to enhance your daily living in our beautiful climate.</p>
          </div>
          <div class="service-card animate-up">
            <div class="service-icon">03</div>
            <h3>Sustainable Planning</h3>
            <p>Integrating eco-friendly technologies and passive solar design principles to ensure your project is ready for the future of WA.</p>
          </div>
          <div class="service-card animate-up">
            <div class="service-icon">04</div>
            <h3>Project Management</h3>
            <p>We oversee every stage of construction, ensuring your vision is realized on time, within budget, and to the highest standards.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Selected Works</h2>
          <p>A collection of our most impactful architectural interventions across Western Australia.</p>
        </div>
        <div class="projects-grid">
          <ProjectCard 
            v-for="(project, index) in projects" 
            :key="index"
            :title="project.title"
            :category="project.category"
            :background-gradient="project.gradient"
          />
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="testimonials-section">
      <div class="container">
        <div class="section-header centered">
          <h2 class="section-title">Client Perspectives</h2>
          <p>The true measure of our success is the experience of those who inhabit our spaces.</p>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card animate-up">
            <div class="quote-icon">“</div>
            <p class="quote-text">Apex Architecture transformed our Cottesloe vision into a reality that exceeded all expectations. Their attention to light and natural materials created a sanctuary we never want to leave.</p>
            <div class="client-info">
              <span class="client-name">Eleanor Vance</span>
              <span class="client-project">The Cottesloe Pavilion</span>
            </div>
          </div>
          <div class="testimonial-card animate-up">
            <div class="quote-icon">“</div>
            <p class="quote-text">Working with the team was a masterclass in collaboration. They listened deeply to our needs while pushing the boundaries of what we thought was possible for a Subiaco commercial space.</p>
            <div class="client-info">
              <span class="client-name">Julian Thorne</span>
              <span class="client-project">Subiaco Creative Hub</span>
            </div>
          </div>
          <div class="testimonial-card animate-up">
            <div class="quote-icon">“</div>
            <p class="quote-text">Minimalist, functional, and breathtakingly beautiful. Our Margaret River retreat feels perfectly integrated with the landscape, as if it was always meant to be there.</p>
            <div class="client-info">
              <span class="client-name">Sophia Chen</span>
              <span class="client-project">Margaret River Estate</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="section-header centered">
          <h2 class="section-title">Start a Dialogue</h2>
          <p>Have a vision? Let's discuss how we can bring it to life.</p>
        </div>
        <ContactForm />
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">APEX<span>ARCH</span></div>
          <div class="footer-info">
            <p>© 2026 Apex Architecture Studio</p>
            <p>Suite 12, 50 St Georges Terrace, Perth WA 6000</p>
          </div>
          <div class="social-links">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ProjectCard from './components/ProjectCard.vue'
import ContactForm from './components/ContactForm.vue'
import ModelViewer from './components/ModelViewer.vue'

const baseUrl = import.meta.env.BASE_URL
const scrolly = ref(0)
const handleScroll = () => {
  scrolly.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const projects = [
  { 
    title: 'Cottesloe Residence', 
    category: 'Residential', 
    gradient: 'linear-gradient(45deg, #2c3e50, #bdc3c7)' 
  },
  { 
    title: 'Kings Park Pavilion', 
    category: 'Public Space', 
    gradient: 'linear-gradient(135deg, #1a1a1a, #4a4a4a)' 
  },
  { 
    title: 'Subiaco Studio', 
    category: 'Commercial', 
    gradient: 'linear-gradient(to right, #ece9e6, #ffffff)' 
  },
  { 
    title: 'Applecross Modern', 
    category: 'Residential', 
    gradient: 'linear-gradient(to bottom, #232526, #414345)' 
  },
  { 
    title: 'Fremantle Loft', 
    category: 'Interior', 
    gradient: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' 
  },
  { 
    title: 'Margaret River Estate', 
    category: 'Hospitality', 
    gradient: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' 
  }
]
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 0;
  z-index: 1000;
  transition: all 0.4s ease;
}

.nav-scrolled {
  padding: 15px 0;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  letter-spacing: 3px;
  font-weight: 700;
}

.logo span {
  font-weight: 300;
  color: var(--accent-color);
}

.nav-links {
  display: flex;
  gap: 40px;
  align-items: center;
}

.nav-links a {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.nav-links a:hover {
  color: var(--accent-color);
}

.nav-cta {
  border-bottom: 2px solid var(--accent-color);
  padding-bottom: 4px;
}

/* Hero */
.hero {
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
}
.hero-content {
  color: white;
}

.hero h1 {
  font-size: clamp(3rem, 8vw, 6rem);
  line-height: 1.1;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 40px;
  opacity: 0.9;
}

.hero .btn {
  background-color: white;
  color: var(--text-color);
}

/* Sections */
.section-title {
  margin-bottom: 30px;
  font-size: 2rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 50px;
  height: 2px;
  background-color: var(--accent-color);
}

.section-header {
  margin-bottom: 60px;
}

.section-header.centered {
  text-align: center;
}

.section-header.centered .section-title::after {
  left: 50%;
  transform: translateX(-50%);
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

@media (max-width: 768px) {
  .grid-2 {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

/* About Stats */
.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.stat-item {
  text-align: center;
}

.stat-num {
  display: block;
  font-family: var(--font-serif);
  font-size: 2.5rem;
  color: var(--accent-color);
}

.stat-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Spatial Concept Section */
.spatial-section {
  padding: 120px 5%;
  background-color: white;
}

/* Difference Section */
.difference-section {
  background-color: white;
  color: var(--text-color);
  padding: 120px 5%;
}

.section-title.dark-bg {
  color: var(--text-color);
}

.diff-items {
  margin-top: 50px;
}

.diff-item {
  margin-bottom: 40px;
  border-left: 2px solid var(--accent-color);
  padding-left: 30px;
}

.diff-item h4 {
  font-family: var(--font-serif);
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: var(--text-color);
}

.diff-item p {
  font-size: 0.95rem;
  opacity: 0.8;
  max-width: 500px;
}

.diff-visual {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.abstract-geometry {
  position: relative;
  width: 300px;
  height: 400px;
}

.geo-box {
  position: absolute;
  border: 1px solid var(--border-color);
  transition: all 0.5s ease;
}

.box-1 {
  width: 250px;
  height: 350px;
  top: 0;
  left: 0;
  background: var(--secondary-bg);
}

.box-2 {
  width: 200px;
  height: 300px;
  bottom: -20px;
  right: -20px;
  background: var(--accent-color);
  opacity: 0.05;
}

.box-3 {
  width: 150px;
  height: 250px;
  top: 50px;
  left: 50px;
  border: 1px solid var(--accent-color);
}

/* Services Section */
.services-section {
  background-color: var(--secondary-bg);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.service-card {
  padding: 40px;
  background: white;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  border-color: var(--accent-color);
}

.service-icon {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  color: var(--accent-color);
  opacity: 0.3;
  margin-bottom: 20px;
}

.service-card h3 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  letter-spacing: 1px;
}

.service-card p {
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Testimonials Section */
.testimonials-section {
  background-color: white;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.testimonial-card {
  padding: 40px;
  position: relative;
  border-bottom: 1px solid var(--border-color);
}

.quote-icon {
  font-family: var(--font-serif);
  font-size: 4rem;
  color: var(--accent-color);
  opacity: 0.2;
  position: absolute;
  top: 10px;
  left: 20px;
}

.quote-text {
  font-style: italic;
  font-size: 1.1rem;
  margin-bottom: 25px;
  position: relative;
  z-index: 1;
}

.client-info {
  display: flex;
  flex-direction: column;
}

.client-name {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

.client-project {
  font-size: 0.75rem;
  color: var(--accent-color);
  text-transform: uppercase;
}

/* Projects */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.contact-section {
  background-color: var(--secondary-bg);
}

/* Footer */
.footer {
  padding: 60px 0;
  border-top: 1px solid var(--border-color);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }
}

.footer-logo {
  font-family: var(--font-serif);
  font-size: 1.2rem;
  letter-spacing: 2px;
}

.footer-info p {
  font-size: 0.8rem;
  opacity: 0.6;
}

.social-links {
  display: flex;
  gap: 20px;
}

.social-links a {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.8;
}

.social-links a:hover {
  color: var(--accent-color);
  opacity: 1;
}

@media (max-width: 576px) {
  .nav-content {
    flex-direction: column;
    gap: 15px;
  }
  
  .nav-links {
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .about-stats {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .projects-grid,
  .services-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  section, .spatial-section, .difference-section, .footer {
    padding: 60px 5%;
  }
}
</style>
