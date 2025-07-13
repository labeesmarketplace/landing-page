import Hero from '@/components/sections/Hero';
import Vision from '@/components/sections/Vision';
import HowItWorks from '@/components/sections/HowItWorks';
import FeatureMatrix from '@/components/sections/FeatureMatrix';
import Showcase from '@/components/sections/Showcase';
import PressStrip from '@/components/sections/PressStrip';
import Newsletter from '@/components/sections/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <Vision />
      <HowItWorks />
      <FeatureMatrix />
      <Showcase />
      <PressStrip />
      <Newsletter />
    </>
  );
}