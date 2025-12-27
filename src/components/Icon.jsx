import * as LucideIcons from "lucide-react";

const Icon = ({
  name,
  size = 24,
  gradient,
  className = "",
  strokeWidth = 2,
  uniqueId,
}) => {
  const LucideIcon = LucideIcons[name];
  if (!LucideIcon) return null;

  // ensure unique gradient id per instance
  const gradientId = `${name}-gradient-${uniqueId || Math.random().toString(36).substr(2, 9)}`;

  return (
    <>
      {gradient && (
        <svg width="0" height="0">
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
              <stop stopColor={gradient.from} offset="0%" />
              <stop stopColor={gradient.to} offset="100%" />
            </linearGradient>
          </defs>
        </svg>
      )}
      <LucideIcon
        size={size}
        stroke={gradient ? `url(#${gradientId})` : "currentColor"}
        strokeWidth={strokeWidth}
        className={className}
      />
    </>
  );
};

export default Icon;
