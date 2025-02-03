import { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What makes EcoSphere's subscriptions different?",
    answer:
      "Fans subscribe through purchasable NFTs that can be resold or traded, creating lasting value for both creators and supporters.",
  },
  {
    question: "How do EcoSphere's fees compare to other platforms?",
    answer:
      "With only 2-3% fees, EcoSphere is significantly better than traditional platforms like OnlyFans (20%) or YouTube (45% of ad revenue).",
  },
  {
    question: "How do creators benefit from secondary sales?",
    answer:
      "Automatic royalties from every NFT resale ensure creators earn passive income long after initial transactions.",
  },
  {
    question: "Is EcoSphere accessible worldwide?",
    answer:
      "Built on Stellar blockchain, we enable low-cost global access including unbanked users through fast, affordable transactions.",
  },
  {
    question: "How does community governance work?",
    answer:
      "Token holders collectively decide platform evolution through decentralized voting, preventing unilateral policy changes.",
  },
  {
    question: "What monetization options exist beyond subscriptions?",
    answer:
      "Creators can tokenize exclusive events, premium content bundles, and unique fan experiences as tradeable NFTs.",
  },
  {
    question: "How do fans get special benefits?",
    answer:
      "NFT ownership unlocks tiered rewards including early access, voting privileges, and personalized creator interactions.",
  },
  {
    question: "Can fitness professionals use EcoSphere effectively?",
    answer:
      "Yes! Trainers offer workout program NFTs that fans can resell, generating perpetual royalties with each transfer.",
  },
  {
    question: "How do musicians benefit from the platform?",
    answer:
      "Artists tokenize exclusive content and experiences while earning from both initial sales and secondary market activity.",
  },
  {
    question: "What advantages do educators have?",
    answer:
      "Course creators earn when students resell educational NFTs after completion, creating sustainable income cycles.",
  },
  {
    question: "How can gamers leverage EcoSphere?",
    answer:
      "Streamers offer in-game asset NFTs and premium content access that fans collect and trade within communities.",
  },
  {
    question: "How does EcoSphere prevent censorship?",
    answer:
      "Our decentralized model eliminates centralized control, ensuring creators maintain direct fan relationships and revenue streams.",
  },
  {
    question: "What are the main creator benefits?",
    answer:
      "Higher earnings, algorithmic independence, and continuous royalties from vibrant secondary NFT markets.",
  },
  {
    question: "Why should fans care about NFT subscriptions?",
    answer:
      "True content ownership, potential value appreciation, and exclusive community access through digital collectibles.",
  },
  {
    question: "How does EcoSphere improve the creator economy?",
    answer:
      "By combining blockchain transparency with sustainable monetization models that benefit all participants equally.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const faqRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const hasScrolledDown = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        hasScrolledDown.current = true;

        if (faqRef.current && isElementInViewport(faqRef.current)) {
          setIsVisible(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    const isElementInViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasScrolledDown.current) {
          setIsVisible(true);
          observer.unobserve(entry.target);
          window.removeEventListener("scroll", handleScroll);
        }
      },
      {
        threshold: 0.1,
      }
    );

    window.addEventListener("scroll", handleScroll, { passive: true });

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={faqRef}
      className={`max-w-3xl mx-auto mb-24 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2
        className="text-4xl mb-12 font-semibold bg-clip-text text-transparent text-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(243 244 246) 0%, rgb(199 203 209) 55%, rgb(30 30 30) 90%)",
        }}
      >
        We've Got The Answers
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-3xl transition-colors duration-200 ease-in-out ${
              openIndex === index ? "bg-[#1d1c1ca8]" : ""
            }`}
          >
            <button
              className="w-full px-6 py-4 flex justify-between items-center text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-light text-lg text-zinc-300">
                {faq.question}
              </span>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-gray-400 transition-transform duration-200" />
              ) : (
                <Plus className="w-5 h-5 text-gray-400 transition-transform duration-200" />
              )}
            </button>

            <div
              className={`grid overflow-hidden transition-all duration-200 ease-in-out ${
                openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-4 text-zinc-500">{faq.answer}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
