'use client';

interface ImgPlaceholderProps {
  label: string;
  className?: string;
  light?: boolean;
}

export function ImgPlaceholder({ label, className = '', light = false }: ImgPlaceholderProps) {
  if (light) {
    return (
      <div className={`flex flex-col items-center justify-center bg-[#e8f0e9] border-2 border-dashed border-[#2d6a4f]/30 rounded-2xl text-[#2d6a4f]/60 select-none ${className}`}>
        <svg width="40" height="40" fill="none" viewBox="0 0 40 40" className="mb-3 opacity-50">
          <rect width="40" height="40" rx="8" fill="#2d6a4f" fillOpacity=".12" />
          <path d="M8 28l8-8 5 5 6-7 9 10H8z" fill="#2d6a4f" fillOpacity=".35" />
          <circle cx="14" cy="15" r="3" fill="#2d6a4f" fillOpacity=".35" />
        </svg>
        <span className="text-xs font-semibold tracking-widest uppercase">{label}</span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center border-2 border-dashed border-white/20 rounded-2xl text-white/40 select-none bg-white/5 ${className}`}>
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40" className="mb-3 opacity-50">
        <rect width="40" height="40" rx="8" fill="white" fillOpacity=".1" />
        <path d="M8 28l8-8 5 5 6-7 9 10H8z" fill="white" fillOpacity=".3" />
        <circle cx="14" cy="15" r="3" fill="white" fillOpacity=".3" />
      </svg>
      <span className="text-xs font-semibold tracking-widest uppercase">{label}</span>
    </div>
  );
}
