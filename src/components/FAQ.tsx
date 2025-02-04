import { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is EchoSphere?",
    answer:
      "EchoSphere is a creator-focused, blockchain-powered subscription platform that allows content creators to monetize their work through subscriptions and NFT-based memberships (for top-tier creators). We provide lower fees, censorship resistance, and true ownership over content.",
  },
  {
    question:
      "How is EchoSphere different from platforms like OnlyFans or YouTube?",
    answer:
      "Unlike traditional platforms that take high fees (up to 30%) and control creator revenue, EchoSphere offers: • Lower fees powered by Stellar blockchain. • Creator-owned content with no fear of demonetization. • NFT access (for top creators) to enable resale royalties. • Fiat & crypto payments for global accessibility.",
  },
  {
    question: "How do creators make money on EchoSphere?",
    answer:
      "Creators can earn through: 1. Subscription-based revenue (Monthly/Yearly Memberships). 2. One-time content unlocks. 3. NFT-based access (For high-tier creators), allowing fans to buy/sell memberships while creators earn royalties.",
  },
  {
    question: "Can I pay using fiat (USD, EUR) or just crypto?",
    answer:
      "Yes! We support both fiat (credit/debit cards, Apple Pay, Google Pay) and crypto payments (XLM, USDC, etc.) via a secure on-ramp/off-ramp system.",
  },
  {
    question: "Who can create content on EchoSphere?",
    answer:
      "Any creator can join, but NFT-based memberships are reserved for creators who surpass a certain subscriber threshold to ensure exclusivity and demand.",
  },
  {
    question: "Is EchoSphere decentralized?",
    answer:
      "Yes! EchoSphere uses Stellar's blockchain to enable fast, low-cost transactions while ensuring creator content remains owned by them, not the platform.",
  },
  {
    question: "What are the fees on EchoSphere?",
    answer:
      "We charge a much lower platform fee than traditional platforms (which take 20-30%). Exact fee structures will be announced soon, but they will be one of the lowest in the industry.",
  },
  {
    question: "How can I join the waitlist?",
    answer:
      'You can sign up for early access by clicking the "Join the Waitlist" button on our homepage. Early users will get exclusive perks and first access to the platform.',
  },
  {
    question: "When will EchoSphere officially launch?",
    answer:
      "We are currently in the development phase, and the first beta version will be launched later this year. Stay tuned for updates by joining the waitlist!",
  },
  {
    question: "Is EchoSphere safe and secure?",
    answer:
      "Yes! We use blockchain security, encrypted payments, and Stellar's robust network to ensure secure transactions and privacy for both creators and fans.",
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
