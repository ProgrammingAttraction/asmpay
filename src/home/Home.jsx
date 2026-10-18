import React, { useState } from 'react';
import { 
  FiX, 
  FiCode, 
  FiCheck, 
  FiFileText, 
  FiLock, 
  FiShield, 
  FiClock 
} from 'react-icons/fi';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaTelegram 
} from 'react-icons/fa';

import Header from "../components/header/Header";
import nagad from "../assets/ng.png";
import bkash from "../assets/bk.png";
import rocket from "../assets/rk.png";

const Home = () => {
  // --- Docs Modal/Notice State ---
  const [showDocsNotice, setShowDocsNotice] = useState(false);

  // Custom clip-path polygon for theme buttons
  const clipPathStyle = {
    clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)'
  };

  return (
    <div className="font-Chakra antialiased min-h-screen flex flex-col justify-between bg-[#070913] text-white scroll-smooth">

      {/* --- Header --- */}
      <Header />

      {/* --- HERO / LANDING SECTION --- */}
      <section 
        id="home" 
        className="relative w-full overflow-hidden min-h-[100vh] bg-[#070913] pt-[120px] pb-16 border-b-[2px] border-cyan-950/60 flex items-center justify-center flex-1"
      >
        {/* Grid Background Overlay */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(0, 240, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 240, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          }}
        ></div>

        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00F0FF]/10 rounded-full blur-[130px] z-0 pointer-events-none"></div>

        {/* Floating Gateway Badges with Images */}
        <div className="hidden lg:flex absolute z-10 left-6 xl:left-12 top-[220px] items-center gap-3 px-4 py-2 rounded-full backdrop-blur-md float-y-slow">
          <img src={bkash} alt="bKash" className="w-[100px] h-[100px] object-contain shrink-0" />
        </div>

        <div className="hidden lg:flex absolute z-10 right-6 xl:right-12 top-[240px] items-center gap-3  px-4 py-2 rounded-full backdrop-blur-md float-y-slow-reverse">
          <img src={nagad} alt="Nagad" className="w-[100px] h-[100px] object-contain shrink-0" />
        </div>

        <div className="hidden lg:flex absolute z-10 left-1/4 top-[140px] items-center gap-3  px-4 py-2 rounded-full backdrop-blur-md float-x-slow">
          <img src={rocket} alt="Rocket" className="w-[100px] h-[100px] object-contain shrink-0" />
        </div>

        {/* Hero Content (Centered) */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center my-auto">
          {/* Subtitle Accent */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 md:w-12 h-[1px] bg-[#8B5CF6]"></div>
            <p className="text-[10px] md:text-xs text-cyan-300/70 tracking-[0.3em] uppercase font-semibold">
              ASMPAY — Instant & Automated Transactions
            </p>
            <div className="w-8 md:w-12 h-[1px] bg-[#8B5CF6]"></div>
          </div>

          {/* Heading */}
          <h1 className="text-[40px] sm:text-[50px] md:text-[70px] lg:text-[85px] font-black uppercase leading-[1.1] tracking-tight">
            <span className="text-[#8B5CF6] block font-extrabold">Automated Payment</span>
            <span className="text-white">Gateway </span>
            <span className="text-[#00F0FF]">Solution</span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-slate-400 text-sm md:text-lg max-w-2xl leading-relaxed mx-auto">
            Seamlessly integrate automated deposits and instant withdrawals for bKash (including personal methods), Nagad, and Rocket into your web application with real-time webhooks and 24/7 reliability.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5 w-full max-w-2xl mx-auto">
            <button
              onClick={() => setShowDocsNotice(true)}
              className="flex-1 sm:flex-initial bg-[#00F0FF] text-black px-6 py-3.5 font-bold text-xs sm:text-sm tracking-wide uppercase flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] whitespace-nowrap cursor-pointer"
              style={clipPathStyle}
            >
              Developer Docs <FiCode size={16} />
            </button>

            {/* Telegram CTA - Boss 1 */}
            <a
              href="https://t.me/Exchangewallet234"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial bg-[#0088cc] text-white px-6 py-3.5 font-bold text-xs sm:text-sm tracking-wide uppercase flex items-center justify-center gap-2 hover:scale-105 hover:bg-[#0077b5] transition-all duration-300 shadow-lg whitespace-nowrap"
              style={clipPathStyle}
            >
              <FaTelegram size={16} className="shrink-0" />
              <span>@Exchangewallet234</span>
            </a>

            {/* Telegram CTA - Boss 2 */}
            <a
              href="https://t.me/Rolexbstk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial bg-[#0088cc] text-white px-6 py-3.5 font-bold text-xs sm:text-sm tracking-wide uppercase flex items-center justify-center gap-2 hover:scale-105 hover:bg-[#0077b5] transition-all duration-300 shadow-lg whitespace-nowrap"
              style={clipPathStyle}
            >
              <FaTelegram size={16} className="shrink-0" />
              <span>@Rolexbstk</span>
            </a>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-20 bg-[#0B0F19] px-4 sm:px-6 lg:px-8 border-b border-cyan-950/60">
        <div className="container mx-auto max-w-6xl">

          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#8B5CF6]"></div>
              <span className="text-xs text-cyan-400/80 tracking-[0.25em] uppercase font-semibold font-mono">
                WHO WE ARE
              </span>
              <div className="w-8 h-[2px] bg-[#8B5CF6]"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
              About <span className="text-[#00F0FF]">ASMPAY</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Trusted market leader in automated financial transaction integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
                Your Long-Term Partner in <span className="text-[#8B5CF6]">Payment Solutions</span>
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                At <strong className="text-[#00F0FF]">ASMPAY</strong>, we have been operating in this market for a long time, providing seamless, high-performance automated payment gateway integration for businesses of all scales.
              </p>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                We specialize in supporting all major Bangladeshi Mobile Financial Services (MFS) including <strong>bKash</strong>, <strong>Nagad</strong>, and <strong>Rocket</strong>. Beyond standard APIs, we also offer custom <strong>bKash Personal Method Systems</strong> tailored to meet complex merchant demands.
              </p>
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#0E1526] border border-cyan-900/40 flex items-center gap-3">
                  <FiClock className="text-[#00F0FF] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-sm uppercase">24/7 Service</h4>
                    <p className="text-xs text-slate-400">Round-the-clock support</p>
                  </div>
                </div>
                <div className="p-4 bg-[#0E1526] border border-cyan-900/40 flex items-center gap-3">
                  <FiShield className="text-[#8B5CF6] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-sm uppercase">Secure System</h4>
                    <p className="text-xs text-slate-400">Bank-grade encryption</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="relative bg-[#0E1526] p-8 border border-cyan-900/50 space-y-6">
              <div className="absolute -top-1 -left-1 w-4 h-[2px] bg-[#00F0FF] z-10"></div>
              <div className="absolute -top-1 -left-1 w-[2px] h-4 bg-[#00F0FF] z-10"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-[2px] bg-[#8B5CF6] z-10"></div>
              <div className="absolute -bottom-1 -right-1 w-[2px] h-4 bg-[#8B5CF6] z-10"></div>

              <h4 className="text-xl font-bold uppercase tracking-wider text-white border-b border-cyan-900/40 pb-3">
                Why Choose ASMPAY?
              </h4>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FiCheck className="text-[#00F0FF] text-lg mt-1 shrink-0" />
                  <span className="text-sm text-slate-300"><strong>Long-Standing Market Expertise:</strong> Proven track record of high uptime and stability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="text-[#00F0FF] text-lg mt-1 shrink-0" />
                  <span className="text-sm text-slate-300"><strong>bKash Personal Method:</strong> Unique setup for flexible and automated deposit tracking.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="text-[#00F0FF] text-lg mt-1 shrink-0" />
                  <span className="text-sm text-slate-300"><strong>Multi-Gateway Support:</strong> bKash, Nagad, and Rocket integrated into a single interface.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="text-[#00F0FF] text-lg mt-1 shrink-0" />
                  <span className="text-sm text-slate-300"><strong>Instant Real-time Webhooks:</strong> Immediate automated balance updates for your users.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="text-[#00F0FF] text-lg mt-1 shrink-0" />
                  <span className="text-sm text-slate-300"><strong>24 Hours Good Service:</strong> Instant developer and support team assistance at any time.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-20 bg-[#070913] px-4 sm:px-6 lg:px-8 border-b border-cyan-950/60">
        <div className="container mx-auto max-w-6xl">

          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#8B5CF6]"></div>
              <span className="text-xs text-cyan-400/80 tracking-[0.25em] uppercase font-semibold font-mono">
                PLANS & INTEGRATION
              </span>
              <div className="w-8 h-[2px] bg-[#8B5CF6]"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
              Flexible <span className="text-[#00F0FF]">Pricing Plans</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
              Customized rate packages based on your monthly transaction volume and website integration requirements.
            </p>
          </div>

          {/* Notice Banner */}
          <div className="mb-12 p-5 bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-center max-w-3xl mx-auto backdrop-blur-sm">
            <p className="text-sm md:text-base text-[#00F0FF] font-semibold uppercase tracking-wider">
              📢 Notice: Standard public rates are not listed fixed online. Contact the ASMPAY team directly to receive custom discounted rates tailored to your business volume!
            </p>
          </div>


        </div>
      </section>

      {/* --- DEVELOPER DOCS SECTION / NOTICE --- */}
      <section id="docs" className="py-16 bg-[#0B0F19] px-4 sm:px-6 lg:px-8 border-b border-cyan-950/60">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="p-8 bg-[#0E1526] border border-cyan-900/40 relative">
            <div className="w-16 h-16 bg-[#00F0FF]/10 border border-[#00F0FF]/30 mx-auto flex items-center justify-center mb-6">
              <FiCode className="text-[#00F0FF] text-3xl" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black uppercase text-white mb-4">
              Developer & API Documentation
            </h3>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
              To maintain optimal security and protect gateway access keys, full API documentation,and integration credentials are provided directly upon request by our team.
            </p>
            <div className="p-4 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 mb-8 max-w-xl mx-auto">
              <p className="text-xs md:text-sm text-[#8B5CF6] font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                <FiLock /> Contact ASMPAY team to receive official Developer API Documentation & Keys.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setShowDocsNotice(true)}
                className="bg-[#00F0FF] text-black px-6 py-3 font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#00d8e6] transition-colors cursor-pointer shadow-[0_0_15px_rgba(0,240,255,0.3)]"
              >
                <FiFileText size={16} /> Request API Documentation
              </button>
              <a
                href="https://t.me/Rolexbstk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0088cc] text-white px-6 py-3 font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#0077b5] transition-colors"
              >
                <FaTelegram size={16} /> Talk to Admin (@Rolexbstk)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER SECTION --- */}
      <footer className="bg-[#0A0D18] text-white pt-16 pb-8 relative border-t border-cyan-950/60 font-Chakra">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

            {/* --- Brand --- */}
            <div>
              <h3 className="text-xl font-black uppercase tracking-tight text-white mb-3">
                ASM<span className="text-[#00F0FF]">PAY</span>
              </h3>
              <div className="w-8 h-[2px] bg-[#8B5CF6] mb-4"></div>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Automated payment gateway solutions for bKash, Nagad, and Rocket MFS integration. Fast, secure, and reliable 24/7 service.
              </p>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/mohammadalipolas" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 bg-[#070913] border border-cyan-900/40 flex items-center justify-center text-slate-400 hover:text-[#00F0FF] hover:border-cyan-500/50 transition-colors">
                  <FaFacebook size={14} />
                </a>
                <a href="#" aria-label="Twitter" className="w-9 h-9 bg-[#070913] border border-cyan-900/40 flex items-center justify-center text-slate-400 hover:text-[#00F0FF] hover:border-cyan-500/50 transition-colors">
                  <FaTwitter size={14} />
                </a>
                <a href="#" aria-label="Instagram" className="w-9 h-9 bg-[#070913] border border-cyan-900/40 flex items-center justify-center text-slate-400 hover:text-[#00F0FF] hover:border-cyan-500/50 transition-colors">
                  <FaInstagram size={14} />
                </a>
                <a href="#" aria-label="LinkedIn" className="w-9 h-9 bg-[#070913] border border-cyan-900/40 flex items-center justify-center text-slate-400 hover:text-[#00F0FF] hover:border-cyan-500/50 transition-colors">
                  <FaLinkedin size={14} />
                </a>
              </div>
            </div>

            {/* --- Quick Links --- */}
            <div>
              <span className="text-xs text-slate-500 tracking-[0.2em] uppercase font-mono font-semibold block mb-4">
                QUICK LINKS
              </span>
              <ul className="space-y-2.5">
                <li><a href="#home" className="text-slate-400 text-sm hover:text-[#00F0FF] transition-colors duration-200">Home</a></li>
                <li><a href="#about" className="text-slate-400 text-sm hover:text-[#00F0FF] transition-colors duration-200">About Us</a></li>
                <li><a href="#pricing" className="text-slate-400 text-sm hover:text-[#00F0FF] transition-colors duration-200">Pricing & Plans</a></li>
                <li><button onClick={() => setShowDocsNotice(true)} className="text-slate-400 text-sm hover:text-[#00F0FF] transition-colors duration-200 text-left cursor-pointer">API Documentation</button></li>
              </ul>
            </div>

            {/* --- Gateways / Services --- */}
            <div>
              <span className="text-xs text-slate-500 tracking-[0.2em] uppercase font-mono font-semibold block mb-4">
                GATEWAYS
              </span>
              <ul className="space-y-2.5">
                <li><a href="#pricing" className="text-slate-400 text-sm hover:text-[#00F0FF] transition-colors duration-200">bKash Agent</a></li>
                <li><a href="#pricing" className="text-slate-400 text-sm hover:text-[#00F0FF] transition-colors duration-200">bKash Personal</a></li>
                <li><a href="#pricing" className="text-slate-400 text-sm hover:text-[#00F0FF] transition-colors duration-200">Nagad Agent</a></li>
                <li><a href="#pricing" className="text-slate-400 text-sm hover:text-[#00F0FF] transition-colors duration-200">Rocket Agent</a></li>
                <li><a href="#pricing" className="text-slate-400 text-sm hover:text-[#00F0FF] transition-colors duration-200">Instant Payouts / Auto Withdraw</a></li>
              </ul>
            </div>

            {/* --- Newsletter --- */}
            <div>
              <span className="text-xs text-slate-500 tracking-[0.2em] uppercase font-mono font-semibold block mb-4">
                NEWSLETTER
              </span>
              <p className="text-slate-400 text-sm mb-4">
                Subscribe to get updates on gateway developments and API updates.
              </p>
              <form className="relative flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2.5 bg-[#070913] border border-cyan-900/40 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#00F0FF] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#00F0FF] text-black py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-[#00d8e6] transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* --- Bottom Bar --- */}
          <div className="border-t border-cyan-950/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-slate-500 text-xs font-mono tracking-wide">
              © {new Date().getFullYear()} ASMPAY. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em]">
              <div className="w-1.5 h-1.5 bg-[#00F0FF] animate-pulse"></div>
              <span>Systems operational</span>
            </div>
          </div>
        </div>
      </footer>

      {/* --- DEVELOPER DOCS NOTICE MODAL --- */}
      {showDocsNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#0E1526] border-2 border-[#00F0FF] max-w-lg w-full p-6 sm:p-8 relative shadow-[0_0_40px_rgba(0,240,255,0.2)]">
            <button 
              onClick={() => setShowDocsNotice(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <FiX size={24} />
            </button>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#00F0FF]/10 border border-[#00F0FF] mx-auto flex items-center justify-center mb-4">
                <FiLock className="text-[#00F0FF] text-2xl" />
              </div>
              <h3 className="text-2xl font-black uppercase text-white mb-2">Access Developer Documentation</h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Developer Documentation, API credentials, and secret keys for <strong>ASMPAY</strong> are restricted. Please reach out to our team directly via Telegram to receive API access and integration manuals.
              </p>
              
              <div className="space-y-3 mb-6 text-left bg-[#070913] p-4 border border-cyan-900/40 text-xs">
                <p className="text-slate-300"><strong>Direct Telegram Contacts:</strong></p>
                <p className="text-[#0088cc]">👉 <a href="https://t.me/Exchangewallet234" target="_blank" rel="noreferrer" className="underline font-bold">@Exchangewallet234</a></p>
                <p className="text-[#0088cc]">👉 <a href="https://t.me/Rolexbstk" target="_blank" rel="noreferrer" className="underline font-bold">@Rolexbstk</a></p>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://t.me/Exchangewallet234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#00F0FF] text-black py-3 font-bold text-xs uppercase tracking-wider text-center hover:bg-[#00d8e6]"
                >
                  Contact Admin
                </a>
                <button
                  onClick={() => setShowDocsNotice(false)}
                  className="bg-slate-800 text-white px-5 py-3 font-bold text-xs uppercase tracking-wider hover:bg-slate-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Animations CSS */}
      <style jsx>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        @keyframes floatYReverse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(16px); }
        }
        @keyframes floatX {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(16px); }
        }

        .float-y-slow {
          animation: floatY 5s ease-in-out infinite;
        }
        .float-y-slow-reverse {
          animation: floatYReverse 5s ease-in-out infinite;
        }
        .float-x-slow {
          animation: floatX 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;