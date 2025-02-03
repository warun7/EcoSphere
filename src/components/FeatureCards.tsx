import { CardSpotlight } from "./ui/CardSpotlight";

export default function FeatureCards() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-24 px-4">
      <CardSpotlight className="min-h-[220px]">
        <div className="w-full flex flex-col">
          <h3 className="text-[24px] md:text-[28px] font-medium tracking-tight mb-2 text-zinc-300 relative z-20">
            Tokenized Content
          </h3>
          <p className="text-[#666666] text-[14px] md:text-[15px] leading-relaxed mt-10 relative z-20">
            Create and trade NFTs with minimal environmental impact using
            Stellar
          </p>
          <div className="grid grid-cols-3 gap-4 md:gap-6 w-fit mt-6 relative z-20">
            <img
              src="/stellar.png"
              alt="Stellar"
              className="h-12 w-12 md:h-14 md:w-14 rotate-12 brightness-125 animate-float-1"
            />
            <img
              src="/nft-icon.svg"
              alt="NFT"
              className="h-12 w-12 md:h-14 md:w-14 -rotate-12 brightness-125 animate-float-2"
            />
            <img
              src="/eco-token.svg"
              alt="Eco Token"
              className="h-12 w-12 md:h-14 md:w-14 rotate-12 brightness-125 animate-float-3"
            />
          </div>
        </div>
      </CardSpotlight>

      <CardSpotlight className="min-h-[220px]">
        <div className="w-full flex flex-col">
          <h3 className="text-[24px] md:text-[28px] font-medium tracking-tight mb-2 text-zinc-300 relative z-20">
            Creator Economy
          </h3>
          <p className="text-[#666666] text-[14px] md:text-[15px] leading-relaxed relative z-20">
            Empower creators with sustainable monetization and fan engagement
          </p>
          <div className="flex -space-x-4 md:-space-x-8">
            {[
              { src: "/creator1.avif", name: "Artist" },
              { src: "/creator2.avif", name: "Educator" },
              { src: "/creator3.avif", name: "Influencer" },
            ].map((profile, index) => (
              <div key={index} className="group relative">
                <div
                  className={`
                  w-16 h-16 md:w-20 md:h-20 
                  rounded-full bg-white 
                  shadow-lg transform translate-z-0 
                  relative ${
                    index === 0 ? "z-30" : index === 1 ? "z-20" : "z-10"
                  }
                  ${index === 2 ? "opacity-20" : ""}
                `}
                >
                  <div className="absolute inset-[3px] rounded-full bg-black"></div>
                  <div className="absolute inset-[7px] rounded-full overflow-hidden">
                    <img
                      src={profile.src}
                      className="w-full h-full object-cover"
                      alt={`${profile.name} Creator`}
                    />
                  </div>
                </div>

                <div
                  className="
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-200
                  absolute -bottom-8 left-1/2 -translate-x-1/2
                  bg-[#838383] text-white
                  px-2 py-1 rounded-md text-sm
                  whitespace-nowrap
                "
                >
                  {profile.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardSpotlight>
    </div>
  );
}
