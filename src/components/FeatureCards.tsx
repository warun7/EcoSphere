import { CardSpotlight } from "./ui/CardSpotlight";

export default function FeatureCards() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-24 px-4">
      <CardSpotlight className="min-h-[220px]">
        <div className="w-full flex flex-col">
          <h3 className="text-[24px] md:text-[28px] font-medium tracking-tight mb-2 text-zinc-300 relative z-20">
            Creator Challenges
          </h3>
          <p className="text-[#666666] text-[14px] md:text-[15px] leading-relaxed mt-2 relative z-20">
            77% of creators worry about platform dependency, while 63%
            experienced burnout in the last year. 46% find achieving success
            challenging, with income instability being a major concern.
          </p>
        </div>
      </CardSpotlight>

      <CardSpotlight className="min-h-[220px]">
        <div className="w-full flex flex-col">
          <h3 className="text-[24px] md:text-[28px] font-medium tracking-tight mb-2 text-zinc-300 relative z-20">
            NFT Market Growth
          </h3>
          <p className="text-[#666666] text-[14px] md:text-[15px] leading-relaxed relative z-20">
            Projected to surge from $51.4B (2024) to $407.7B by 2034 at 23%
            CAGR, NFTs are reshaping digital ownership and creator economies.
          </p>
        </div>
      </CardSpotlight>

      <CardSpotlight className="min-h-[220px]">
        <div className="w-full flex flex-col">
          <h3 className="text-[24px] md:text-[28px] font-medium tracking-tight mb-2 text-zinc-300 relative z-20">
            Algorithm Risks
          </h3>
          <p className="text-[#666666] text-[14px] md:text-[15px] leading-relaxed relative z-20">
            70% of creators fear platform algorithm changes could devastate
            their livelihoods, highlighting centralized platform
            vulnerabilities.
          </p>
        </div>
      </CardSpotlight>

      <CardSpotlight className="min-h-[220px]">
        <div className="w-full flex flex-col">
          <h3 className="text-[24px] md:text-[28px] font-medium tracking-tight mb-2 text-zinc-300 relative z-20">
            NFT Revenue Potential
          </h3>
          <p className="text-[#666666] text-[14px] md:text-[15px] leading-relaxed relative z-20">
            With expected revenue of $608.6M in 2025, NFTs offer creators new
            ways to monetize while maintaining content ownership.
          </p>
        </div>
      </CardSpotlight>
    </div>
  );
}
