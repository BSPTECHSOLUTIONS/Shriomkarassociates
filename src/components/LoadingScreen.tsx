import logoImg from "@assets/image_1780123616191.png";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0D1B2A]">
      <div className="flex flex-col items-center gap-8">
        <img
          src={logoImg}
          alt="Sri Omkar Associates"
          className="w-52 h-auto rounded-2xl shadow-2xl animate-pulse"
        />
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full bg-[#EAB308] animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <div
            className="w-3 h-3 rounded-full bg-[#EAB308] animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <div
            className="w-3 h-3 rounded-full bg-[#EAB308] animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>
        <p className="text-white/50 text-xs tracking-widest uppercase font-sans">
          Loading...
        </p>
      </div>
    </div>
  );
}
