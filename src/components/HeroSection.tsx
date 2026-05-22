import { useEffect, useState } from "react";

const HeroSection = () => {
  const baseUrl = "https://giftclick.org/aff_c?offer_id=3634&aff_id=150406";

  const handleClaimClick = () => {
    window.location.href = baseUrl;
  };

  const notifications = [
    <><span className="font-semibold">Olivia</span> claimed <span className="text-green-600 font-semibold">$750</span> after completing 6 deals</>,
    <><span className="font-semibold">Charlotte</span> received <span className="text-green-600 font-semibold">$650</span> for doing 5 deals</>,
    <><span className="font-semibold">Amelia</span> received <span className="text-green-600 font-semibold">$500</span> for completing 4 deals</>,
    <><span className="font-semibold">Isla</span> claimed <span className="text-green-600 font-semibold">$750</span> for doing 6 deals</>,
    <><span className="font-semibold">Ava</span> claimed <span className="text-green-600 font-semibold">$750</span> for doing 6 deals</>,
    <><span className="font-semibold">Grace</span> claimed <span className="text-green-600 font-semibold">$650</span> for doing 5 deals</>,
    <><span className="font-semibold">Willow</span> received <span className="text-green-600 font-semibold">$750</span> for completing 6 deals</>,
    <><span className="font-semibold">Harper</span> claimed <span className="text-green-600 font-semibold">$650</span> for completing 5 deals</>,
    <><span className="font-semibold">Chloe</span> claimed <span className="text-green-600 font-semibold">$500</span> for doing 4 deals</>,
    <><span className="font-semibold">Zoe</span> received <span className="text-green-600 font-semibold">$750</span> for completing 6 deals</>,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 1500);

    const cycleTimer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setVisible(true);
      }, 350);
    }, 9000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(cycleTimer);
    };
  }, [notifications.length]);

  const faqs = [
    {
      q: "How long does it take?",
      a: "Most members complete the process in just a few minutes. Offer completion times vary depending on what you choose.",
    },
    {
      q: "What are deals?",
      a: "Deals are simple offers from our partners — things like trying a free trial, signing up for a service, or downloading an app.",
    },
    {
      q: "How many deals do I have to do?",
      a: "Typically 4–5 deals are required to fully unlock your reward.",
    },
    {
      q: "When will I receive my reward?",
      a: "Rewards are issued after the required offers are confirmed as completed. Delivery details are shown after registration.",
    },
  ];

  function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
      <div
        className="border border-gray-200 rounded-xl overflow-hidden"
        style={{ background: "#fff" }}
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-5 py-4 text-left"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <span className="font-semibold text-black text-sm md:text-base">{q}</span>
          <span
            className="text-gray-400 text-lg font-light ml-3 flex-shrink-0 transition-transform duration-200"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            +
          </span>
        </button>
        {open && (
          <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
            <p className="pt-3">{a}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      {/* Top Banner */}
      <div
        className="w-full text-center text-sm font-semibold py-2 px-4 fixed top-0 left-0 z-40"
        style={{ background: "#f5f5f5", color: "#111", borderBottom: "1px solid #e5e5e5" }}
      >
        4,200+ people have already claimed
      </div>

      {/* Main Page */}
      <div
        className="min-h-screen flex flex-col items-center px-4 py-10"
        style={{ background: "#fff", paddingTop: "40px" }}
      >
        {/* Hero Value */}
        <div className="text-center mb-2 mt-1">
          <p
            className="font-bold leading-none"
            style={{ fontSize: "clamp(2.5rem, 8vw, 4rem)", fontFamily: "Georgia, serif" }}
          >
            $750
          </p>
          <p className="text-xl md:text-2xl font-semibold text-black mt-1" style={{ fontFamily: "Georgia, serif" }}>
            Exclusive Member Reward
          </p>

        </div>

        {/* How To Claim Steps */}
        <div
          className="w-full max-w-lg rounded-2xl border border-gray-200 p-6 mt-2 mb-2"
          style={{ background: "#fff" }}
        >
          <p className="text-xs uppercase tracking-widest text-gray-400 text-center mb-5">
            How to Claim
          </p>
          <div className="space-y-0 divide-y divide-gray-100">
            {[
              "Click the button below",
              "Enter your basic info",
              { title: "Complete required offers", sub: "Finish 4-5 simple deals to unlock your full reward." },
              "Claim your $750 Coach gift card",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-0.5"
                  style={{ background: "#f5f5f5", color: "#111" }}
                >
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-black text-sm md:text-base">
                    {typeof step === "string" ? step : step.title}
                  </p>
                  {typeof step !== "string" && step.sub && (
                    <p className="text-gray-500 text-xs mt-0.5">{step.sub}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleClaimClick}
          className="w-full max-w-lg font-bold py-5 px-6 rounded-full mt-5 shadow-md text-base md:text-lg tracking-wide transition-opacity hover:opacity-90"
          style={{ background: "#111", color: "#fff", border: "none", cursor: "pointer" }}
        >
          Claim Your Reward
        </button>

        {/* Trust line */}
        <p className="text-xs text-gray-400 mt-3 text-center tracking-wide">
          Free to join &nbsp;•&nbsp; No upfront fees &nbsp;•&nbsp; Takes only a few minutes
        </p>

        {/* Live Notification */}
        <div className="w-full max-w-lg mt-5">
          <div
            className="rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition-all duration-300"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(6px)",
            }}
          >
            <div className="flex items-center justify-center gap-2 text-center">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500 flex-shrink-0" />
              <p className="text-sm md:text-base font-medium text-black leading-snug">
                {notifications[currentIndex]}
              </p>
            </div>
          </div>
        </div>

        {/* Availability */}
        <div className="w-full max-w-lg mt-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 text-center mb-4">
            Availability
          </p>
          <div className="grid grid-cols-2 gap-3">
            {["United States", "Canada", "United Kingdom", "Australia"].map((country) => (
              <div
                key={country}
                className="rounded-full border border-gray-200 py-2.5 px-4 text-center text-sm font-medium text-black"
                style={{ background: "#fafafa" }}
              >
                {country}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="w-full max-w-lg mt-10">
          <h2
            className="text-2xl md:text-3xl font-bold text-black text-center mb-5"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 mb-4 text-center">
          <p className="text-xs text-gray-400">This is a promotional program. Results and availability may vary.</p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <a href="/privacy" className="text-xs text-gray-500 underline">Privacy Policy</a>
            <a href="/terms" className="text-xs text-gray-500 underline">Terms</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
