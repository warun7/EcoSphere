import { useState } from "react";
import AnimatedCounter from "./AnimatedCounter";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async () => {
    setStatus("loading");
    setErrorMessage("");

    if (!email) {
      setStatus("error");
      setErrorMessage("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch(
        "https://0y2px3zjnf.execute-api.eu-north-1.amazonaws.com/prod/waitlist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
          mode: "no-cors",
        }
      );

      setStatus("success");
      setEmail("");
    } catch (error: any) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage(
        "Unable to join waitlist at this time. Please try again later."
      );
    }
  };

  return (
    <div className="text-center mb-24">
      <div className="max-w-xl mx-auto">
        <div className="animate-border-light">
          <div className="input-container flex flex-col sm:flex-row gap-2 p-2">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent rounded-md px-4 py-3 focus:outline-none text-zinc-300 
                placeholder:text-zinc-500 placeholder:text-base min-w-0"
              disabled={status === "loading"}
            />
            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md 
              border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
              bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors 
              focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 
              focus:ring-offset-slate-50 disabled:opacity-50 disabled:cursor-not-allowed 
              disabled:hover:scale-100 disabled:hover:rotate-0 disabled:hover:translate-y-0
              ${
                status === "success"
                  ? "!bg-green-500 hover:!bg-green-600 !text-white"
                  : ""
              }`}
            >
              {status === "loading"
                ? "Joining..."
                : status === "success"
                ? "Joined!"
                : "Join waitlist"}
            </button>
          </div>
        </div>

        {status === "error" && (
          <div className="mt-2 text-red-500 text-sm">{errorMessage}</div>
        )}

        {status === "success" && (
          <div className="mt-2 text-green-500 text-sm">
            Successfully joined the waitlist! You're now part of the EcoSphere
            community.
          </div>
        )}
      </div>

      <p className="text-zinc-500 mt-6 text-m">
        Join{" "}
        <span className="font-bold">
          <AnimatedCounter />
        </span>
        + others on the waitlist
      </p>
    </div>
  );
}
