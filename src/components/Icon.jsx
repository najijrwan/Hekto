// src/components/Icon.jsx
import * as LucideIcons from "lucide-react";

const Icon = ({
  name,
  size = 24,
  gradient,
  className = "",
  strokeWidth = 2,
}) => {
  const LucideIcon = LucideIcons[name];
  if (!LucideIcon) return null;

  const gradientId = `${name}-gradient`;

  return (
    <svg width={size} height={size} className={className} viewBox="0 0 24 24">
      {gradient && (
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor={gradient.from} offset="0%" />
            <stop stopColor={gradient.to} offset="100%" />
          </linearGradient>
        </defs>
      )}
      <LucideIcon stroke={gradient ? `url(#${gradientId})` : "currentColor"} strokeWidth={strokeWidth} />
    </svg>
  );
};

export default Icon;
