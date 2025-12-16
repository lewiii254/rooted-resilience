import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import JourneySection from '@/components/JourneySection';
import MissionSection from '@/components/MissionSection';
import RecordsSection from '@/components/RecordsSection';
import GetInvolvedSection from '@/components/GetInvolvedSection';
import Footer from '@/components/Footer';
import RainEffect from '@/components/RainEffect';
import FloatingLeaves from '@/components/FloatingLeaves';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Atmospheric Effects */}
      <RainEffect />
      <FloatingLeaves />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Sections */}
      <HeroSection />
      <JourneySection />
      <MissionSection />
      <RecordsSection />
      <GetInvolvedSection />
      <Footer />
    </main>
  );
};

export default Index;
