import "../index.css";
import { useEffect, useState } from "react";

const Index = () => {
  const baseUrl = "https://linkthem.net/aff_c?offer_id=4129&aff_id=150406";

  const [showPopup, setShowPopup] = useState(false);

  const handleClaimClick = () => {
    setShowPopup(true);
  };

  const handlePopupClaim = () => {
    window.location.href = `${baseUrl}&source=dm`;
  };

  const notifications = [ <>Olivia claimed <span className="text-green-500 font-semibold">$750</span> for completing 6 deals</>,
                         <>Charlotte received <span className="text-green-500 font-semibold">$650</span> for doing 5 deals</>,
                         <>Amelia received <span className="text-green-500 font-semibold">$500</span> for completing 4 deals</>,
                         <>Isla claimed <span className="text-green-500 font-semibold">$750</span> for doing 6 deals</>,
                         <>Ava claimed <span className="text-green-500 font-semibold">$750</span> for doing 6 deals</>,
                         <>Noah received <span className="text-green-500 font-semibold">$500</span> for completing 4 deals</>,
                         <>Grace claimed <span className="text-green-500 font-semibold">$650</span> for doing 5 deals</>,
                         <>Willow received <span className="text-green-500 font-semibold">$750</span> for completing 6 deals</>,
                         <>Harper claimed <span className="text-green-500 font-semibold">$650</span> for completing 5 deals</>,
                         <>Chloe claimed <span className="text-green-500 font-semibold">$500</span> for doing 4 deals</>, ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  const shuffledNotifications = notifications;

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 1500);

    const cycleTimer = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % shuffledNotifications.length);
        setVisible(true);
      }, 350);
    }, 9000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(cycleTimer);
    };
  }, [shuffledNotifications.length]);

  const faqs = [
    {
      q: "How long do the deals take?",
      a: "Most deals take just a few minutes to complete. You can finish them at your own pace with no time limit once you've registered.",
    },
    {
      q: "What are deals?",
      a: "Deals are sponsored offers from our partner brands like free trials, sign-ups, or sample requests. They're how the coupon is funded.",
    },
    {
      q: "How many deals do I have to do?",
      a: "We recommend completing 4 to 5 deals to qualify. The more you complete, the higher your coupon value climbs - up to $750.",
    },
    {
      q: "When will I receive my coupon?",
      a: "Once your deals are verified, your JB Hifi coupon code will be delivered to your email within 24-48 hours.",
    },
  ];

  function FAQSection() {
    return (
      <section className="mt-10 rounded-2xl bg-white border border-gray-200 p-5 md:p-7 shadow-sm w-full max-w-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-black text-center">
          Common Questions
        </h2>

        <div className="mt-5 space-y-3">
          {faqs.map((item, i) => (
            <details
              key={i}
              className="group rounded-xl bg-black/80 border border-black/20 px-4 py-3"
            >
              <summary className="cursor-pointer list-none text-white font-semibold flex items-center justify-between">
                <span>{item.q}</span>
                <span className="text-white/60 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    );
  }

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl text-center">
            <p className="text-lg font-bold text-black mb-5">
              Set your age to at least 18 years to get the coupon.
            </p>
            <button
              onClick={handlePopupClaim}
              className="w-full bg-[#FFF200] hover:bg-[#e6d800] text-black font-bold py-4 px-6 rounded-full shadow-lg"
            >
              Claim Now
            </button>
          </div>
        </div>
      )}

      <div className="w-full bg-[#FFF200] text-black text-center text-sm font-semibold py-2 px-4 fixed top-0 left-0 z-40">
        5,500+ People Already Claimed
      </div>

      <div className="min-h-screen halloween-gradient flex flex-col items-center justify-center px-4 py-4 fade-in-up mt-8">
        <div className="mb-4">
          <img
            src="/images/jb logo.jpg"
            alt="JB Hi-Fi"
            className="h-14 md:h-16 object-contain"
          />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-black max-w-lg leading-snug">
          $750 JB Hifi Coupon
        </h1>

        <div className="w-full max-w-lg rounded-2xl border border-gray-200 p-6 mb-6 bg-white">
          <div className="space-y-6">
            {[1, 2, 3, 4].map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#FFF200] text-black rounded-full flex items-center justify-center font-bold flex-shrink-0 step-number">
                  {step}
                </div>
                <h3 className="font-semibold text-black">
                  {[
                    'Click "Claim Now"',
                    "Enter your email and basic info",
                    "Complete 4-6 sponsored deals",
                    "Enjoy your $750 coupon!",
                  ][i]}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleClaimClick}
          className="w-full max-w-md bg-[#FFF200] hover:bg-[#e6d800] text-black font-semibold py-5 px-6 rounded-full mb-3 shein-cta-button cta-pump-enhanced flex items-center justify-center gap-3 shadow-lg"
        >
          <div className="text-left">
            <div className="font-bold text-base md:text-lg">Claim Now</div>
          </div>
        </button>

        <p className="text-sm text-gray-600 text-center mb-4">
          Higher value deals = higher payout
        </p>

        <div className="w-full max-w-lg mb-2">
          <div className={`rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-lg transition-all duration-300 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}>
            <div className="flex items-center justify-center gap-2 text-center">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500 flex-shrink-0" />
              <p className="text-sm md:text-base font-semibold text-black leading-snug">
                {shuffledNotifications[currentIndex]}
              </p>
            </div>
          </div>
        </div>

        <FAQSection />
      </div>
    </>
  );
};

export default Index;
