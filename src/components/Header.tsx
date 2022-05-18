import { H1, Link, PFC, HBetween } from "./ui";

export type HeaderProps = {
  title?: string;
};

const Header: PFC<HeaderProps> = ({ title, children }) => (
  <header
    css={{
      position: "sticky",
      top: 0,
      zIndex: 1,
      background: "black",
    }}
  >
    <HBetween py={4} align="end">
      <Link href="/" css={{ textDecoration: "none" }}>
        <H1>
          <span>Sketches</span>
          {title ? (
            <span
              css={{
                "::before": {
                  content: "'::'",
                },
              }}
            >
              {title}
            </span>
          ) : null}
        </H1>
      </Link>
      {children}
    </HBetween>
  </header>
);

export default Header;
