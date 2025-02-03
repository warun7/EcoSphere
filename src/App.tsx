import Header from "./components/Header";
import WaitlistForm from "./components/WaitlistForm";
import FeatureCards from "./components/FeatureCards";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="min-h-screen bg-black/10 text-white px-4 py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <Header />
        <WaitlistForm />
        <FeatureCards />
        <FAQ />
        <div className="text-center text-zinc-400 text-sm">© 2025 EcoSphere</div>
      </div>
    </div>
  );
}

export default App;
