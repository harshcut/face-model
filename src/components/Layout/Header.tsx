interface Props {
  className?: string;
}

function Header({ className }: Props) {
  return (
    <div className={className}>
      <svg width="50" height="50" fill="#fff" viewBox="0 0 1920 1920">
        <ellipse cx="960" cy="826.4" rx="378.4" ry="393.2" />
        <path d="M960 0C437.6 0 14.1 431.5 14.1 963.9s423.5 963.9 945.9 963.9 945.9-431.5 945.9-963.9S1482.4 0 960 0zm580.6 1553.1c-123.9-122.6-337.6-203.6-580.6-203.6s-456.7 81-580.6 203.6c-147.8-151.2-239.2-359.5-239.2-589.2 0-460.6 367.8-835.4 819.8-835.4s819.8 374.7 819.8 835.4c0 229.7-91.5 438-239.2 589.2z" />
      </svg>
    </div>
  );
}

export default Header;
