import React, { useState, useEffect, Suspense, lazy } from 'react';
import './App.css';
import SEO from './components/SEO';

const Loader = lazy(() => import('./components/Loader/Loader'));
const Navbar = lazy(() => import('./components/Nav/Navbar'));
const Profile = lazy(() => import('./components/Profile/Profile'));
const About = lazy(() => import('./components/About/About'));
const BentoGrid = lazy(() => import('./components/Bento/BentoGrid'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Education = lazy(() => import('./components/Education/Education'));
const Testimonials = lazy(() => import('./components/Testimonials/Testimonials'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const Projects = lazy(() => import('./components/ProjectCard/Projects'));
const MyApproaches = lazy(() => import('./components/MyApproaches/MyApproaches'));
const Footer = lazy(() => import('./components/Footer/Footer'));

const sectionSuspense = (
  <div className="section-skeleton" aria-hidden="true">
    <div className="skeleton-pulse" />
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <SEO />
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      {loading ? (
        <Suspense fallback={null}>
          <Loader />
        </Suspense>
      ) : (
        <div className="app-content">
          <Suspense fallback={sectionSuspense}>
            <Profile />
          </Suspense>
          <Suspense fallback={sectionSuspense}>
            <About />
          </Suspense>
          <Suspense fallback={sectionSuspense}>
            <BentoGrid />
          </Suspense>
          <Suspense fallback={sectionSuspense}>
            <Skills />
          </Suspense>
          <Suspense fallback={sectionSuspense}>
            <Education />
          </Suspense>
          <Suspense fallback={sectionSuspense}>
            <Testimonials />
          </Suspense>
          <Suspense fallback={sectionSuspense}>
            <Experience />
          </Suspense>
          <Suspense fallback={sectionSuspense}>
            <Projects />
          </Suspense>
          <Suspense fallback={sectionSuspense}>
            <MyApproaches />
          </Suspense>
          <Suspense fallback={sectionSuspense}>
            <Footer />
          </Suspense>
        </div>
      )}
    </div>
  );
}

export default App;