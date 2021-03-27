import { Link } from "react-router-dom";

interface Props {
  at: "SIGNIN" | "REGISTER" | string;
  to: string;
  className?: string;
}

const Footer = ({ at, to, className }: Props) => {
  let snippet: string[];

  switch (at) {
    case "SIGNIN":
      snippet = ["Don't have an account?", "Sign Up"];
      break;
    case "REGISTER":
      snippet = ["Already have an account?", "Sign In"];
      break;
    default:
      snippet = ["Don't have an account?", "Sign Up"];
      to = "/register";
  }

  return (
    <div className={className}>
      <div className="mb-6">
        <a
          href="https://github.com/harshcut/face-model#privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
      </div>
      <div>
        <span className="text-custom-200 mr-3">{snippet[0]}</span>
        <Link to={to}>{snippet[1]}</Link>
      </div>
      <div>
        <span className="text-custom-200 mr-2">Go to</span>
        <a
          href="https://github.com/harshcut"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Footer;
