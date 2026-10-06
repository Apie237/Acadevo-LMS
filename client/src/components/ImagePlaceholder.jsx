import React, { useState } from "react";
import { ImageIcon } from "lucide-react";

// Renders `src` if provided and loadable; otherwise a polished branded
// placeholder. Use for any image that may not exist yet.
const ImagePlaceholder = ({
  src,
  alt = "",
  label,
  initials,
  icon: Icon,
  className = "",
  imgClassName = "",
  variant = "blue",
}) => {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${imgClassName} ${className}`}
      />
    );
  }

  const bg =
    variant === "navy"
      ? "from-navy-700 via-navy-800 to-navy-900 text-white"
      : "from-brand-50 via-white to-brand-100 text-brand-600";

  return (
    <div
      role="img"
      aria-label={alt || label || "Image placeholder"}
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br ${bg} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(20,110,245,0.18) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        {Icon ? (
          <Icon size={56} strokeWidth={1.4} className="opacity-90" />
        ) : initials ? (
          <span className="text-4xl font-extrabold tracking-tight opacity-90">{initials}</span>
        ) : (
          <ImageIcon size={28} strokeWidth={1.5} className="opacity-70" />
        )}
        {label && <span className="text-xs font-semibold uppercase tracking-wider opacity-70">{label}</span>}
      </div>
    </div>
  );
};

export default ImagePlaceholder;
