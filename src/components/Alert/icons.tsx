interface Props {
  foreground: string;
}

export const Informative = ({ foreground }: Props) => (
  <svg viewBox="0 0 24 24" width="24px" height="24px">
    <path
      fill={foreground}
      d="M21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9zM10.5 7.5A1.5 1.5 0 1 0 12 6a1.5 1.5 0 0 0-1.5 1.5zm-.5 3.54v1h1V18h2v-6a.96.96 0 0 0-.96-.96z"
    />
  </svg>
);

export const Emergency = ({ foreground }: Props) => (
  <svg viewBox="0 0 24 24" width="24px" height="24px">
    <path
      fill={foreground}
      d="M12.946 3.552L21.52 18.4c.424.735.33 1.6-.519 1.6H3.855c-.85 0-1.817-.865-1.392-1.6l8.573-14.848a1.103 1.103 0 0 1 1.91 0zm.545 12.948a1.5 1.5 0 1 0-1.5 1.5 1.5 1.5 0 0 0 1.5-1.5zM13 8h-2v5h2z"
    />
  </svg>
);
