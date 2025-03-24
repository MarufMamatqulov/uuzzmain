import { useRouter } from "next/router";

import { muzeys } from "@/data";

import UniversalPage from "@/components/UneversalPage";

const Muzeys = ({ muzeys }) => {
  const router = useRouter();
  const { query } = router;
  const { muzey } = query;

  const data = muzeys[muzey];

  return (
    <UniversalPage
      title={data.title}
      desc={data.description}
      secondDesc={data.description2}
      src={data.src}
      initialSrc={data.src}
      hasSrc={true}
      linkto360={data.href}
      hasLink={true}
      text360={data.text360}
    />
  );
};

export const getStaticPaths = async () => {
  const params = Object.keys(muzeys);

  const paths = params.map((param) => `/muzeys/${param}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async () => {
  return {
    props: {
      muzeys,
    },
  };
};

export default Muzeys;
