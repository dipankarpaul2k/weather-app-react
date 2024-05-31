import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-200 text-base-content rounded gap-y-2">
      <aside>
        <p>Made by Dipankar Paul</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/dipankarpaul2k/weather-app-react"
            target="_blank"
          >
            <IconBrandGithub stroke={2} />
          </a>
          <a
            href="https://www.linkedin.com/in/iamdipankarpaul/"
            target="_blank"
          >
            <IconBrandLinkedin stroke={2} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
