import { SparklesCore } from "./SparklesCore";

export default function Header() {
  return (
    <div className="text-center mb-10">
      <div className="flex justify-center mb-4">
      <h1
        className="text-5xl mt-10 font-semibold bg-clip-text text-transparent text-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(243 244 246) 0%, rgb(199 203 209) 55%, rgb(30 30 30) 90%)",
        }}
      >
        EcoSphere
      </h1>
      </div>

      <div className="inline-block bg-zinc-900/50 text-sm text-gray-300 px-2 rounded-full mb-6 border border-zinc-800">
        <span className="inline-block w-2 h-2 rounded-full font-bold bg-red-700 mr-2 animate-glow" />
        LAUNCHING EARLY 2025
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <h1 className="text-5xl font-medium text-stone-100 relative z-20">
            Sustainable Creator Economy
          </h1>
          {/* Metallic gradient layers under text */}
          <div className="absolute -bottom-1 inset-x-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute -bottom-1 inset-x-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute -bottom-1 inset-x-80 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute -bottom-1 inset-x-80 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>

        <div className="w-[1000px] h-20 relative mt-4">
          {/* Sparkles container */}
          <div className="w-full h-full relative">
            <SparklesCore
              id="tsparticles"
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleColor="#4169e1"
              particleDensity={1200}
              speed={0.5}
              className="w-full h-full"
            />

            {/* Radial mask */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>

        <p className="text-zinc-500 text-l relative z-10">
          Empower creators ensuring their hard earned money goes to them
        </p>
      </div>
    </div>
  );
}
