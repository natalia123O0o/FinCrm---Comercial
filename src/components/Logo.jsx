export default function Logo({ compact = false, className = '' }) {
  return (
    <span className={`${compact ? 'dash__logo' : 'logo'} ${className}`.trim()}>
      F<svg className="logo__i" viewBox="0 0 10 26" aria-hidden="true">
        <circle className="dot" cx="5" cy="4" r="2.5" />
        <rect className="bar" x="3" y="9" width="4" height="15" rx="1" />
      </svg>nCRM
    </span>
  );
}
