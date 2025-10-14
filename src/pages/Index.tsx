import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Campaign from "@/components/Campaign";
import HowItWorks from "@/components/HowItWorks";
import FormSection from "@/components/FormSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Campaign />
      <HowItWorks />
      <FormSection />
      <Footer />
    </div>
  );
};

export default Index;
