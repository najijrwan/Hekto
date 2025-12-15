const Icon = ({
  as: IconComponent,
  size = 24,
  variant = 'solid',
  gradientId = 'iconGradient',
  gradientColors = ['#FB2E86', '#7E33E0'], // <-- new prop
  className = '',
}) => {
  if (variant === 'gradient') {
    return (
      <span className={`inline-flex items-center justify-center ${className}`}>
        <svg width={size} height={size} >
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={gradientColors[0]} />
              <stop offset="100%" stopColor={gradientColors[1]} />
            </linearGradient>
          </defs>
          <IconComponent width={size} height={size} fill={`url(#${gradientId})`} />
        </svg>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      <IconComponent fill="currentColor" />
    </span>
  );
};

export default Icon;