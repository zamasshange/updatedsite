import { Suspense } from 'react';
import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar';
import { ProjectsWork } from '@/components/projects-work';
import { Services } from '@/components/services';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <ProjectsWork />
      <Services />
      <About />
      <Suspense fallback={<div className="py-20 text-center text-sm text-muted-foreground">Loading contact section...</div>}>
        <Contact />
      </Suspense>
      <Footer />
    </main>
  );
}
