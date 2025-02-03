import { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does EcoSphere empower creators and sustainability?",
    answer:
      "EcoSphere enables creators to tokenize their content while promoting environmental initiatives through NFTs and sustainable practices.",
  },
  {
    question: "What blockchain does EcoSphere use?",
    answer:
      "We use Stellar blockchain for its energy-efficient consensus mechanism and low transaction costs.",
  },
  {
    question: "How do creators earn on EcoSphere?",
    answer:
      "Creators earn through multiple streams: direct subscriptions, NFT sales, royalties from secondary sales, and community engagement.",
  },
  {
    question: "What are the platform fees?",
    answer:
      "EcoSphere takes only 2-3% in fees, significantly lower than traditional platforms, maximizing creator earnings.",
  },
  {
    question: "How does the governance system work?",
    answer:
      "Token holders participate in platform decisions through decentralized governance, ensuring community-driven development.",
  },
  {
    question: "Is EcoSphere available globally?",
    answer:
      "Yes, thanks to Stellar's blockchain, EcoSphere is accessible worldwide with minimal transaction fees.",
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
        We've got the answers
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
