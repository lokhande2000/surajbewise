import BenefitsSection from '@/components/common/Home/BenefitsSection';
import ContactSection from '@/components/common/Home/ContactSection';
import FeaturedPartners from '@/components/common/Home/FeaturedPartners';
import FeaturesShowcase from '@/components/common/Home/FeaturesShowcase';
import HeroSection from '@/components/common/Home/HeroSection/HeroSection';

export default function Home() {
  return (
    <div className='min-h-screen scroll-smooth flex flex-col items-center gap-20 pb-24'>
      <HeroSection />
      <BenefitsSection />
      <FeaturesShowcase />
      <FeaturedPartners />
      <ContactSection />
    </div>
  );
}
