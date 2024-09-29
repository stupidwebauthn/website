import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import ExternalLinkIcon from "@docusaurus/theme-classic/lib/theme/Icon/ExternalLink";

type FeatureItem = {
  title: string;
  description: JSX.Element;
  cta?: {
    title: string;
    url: string;
  };
};

const FeatureList: FeatureItem[] = [
  {
    title: "Enhanced Security",
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Passkeys eliminate the need for traditional passwords, reducing the risk
        of phishing, brute-force attacks, and other security threats.
      </>
    ),
    cta: {
      title: "FidoAlliance",
      url: "https://fidoalliance.org/passkeys/",
    },
  },
  {
    title: "Increased Convenience",
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        With passkeys, you can log in to your accounts using biometric
        authentication or other secure methods, making the process faster and
        more convenient.
      </>
    ),
    cta: {
      title: "Run your own",
      url: "/docs/getting-started",
    },
  },
  {
    title: "Improved User Experience",
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        No more remembering complex passwords or dealing with password resets.
        Passkeys provide a seamless and hassle-free login experience.
      </>
    ),
    cta: {
      title: "Give it a go",
      url: "https://example.stupidwebauthn.site/",
    },
  },
  {
    title: "Reduced Costs",
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Passwordless authentication can reduce the costs associated with
        password management and support, freeing up resources for other
        important tasks.
      </>
    ),
    cta: {
      title: "Running on a € 0,95 vps",
      url: "https://webdock.io/en/pricing?variant=intel_vps&profile=webdocknano4-2023#details",
    },
  },
];

function Feature({ title, description, cta }: FeatureItem) {
  const isExternalLink = cta?.url.startsWith("http") || false;
  return (
    <div className={clsx("col col--6")}>
      <div className="text--center padding-horiz--md  padding-bottom--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        {cta ? (
          <Link
            className="button button--secondary"
            target={isExternalLink ? "_blank" : undefined}
            to={cta.url}
          >
            {cta.title}
            {isExternalLink ? <ExternalLinkIcon /> : null}
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
