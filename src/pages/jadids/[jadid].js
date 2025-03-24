import { useRouter } from "next/router";

import { jadids } from "@/data";

import UniversalPage from "@/components/UneversalPage";

const Jadid = ({ jadids }) => {
  const router = useRouter();
  const { query } = router;
  const { jadid } = query;

  const data = jadids[jadid];

  return (
    <UniversalPage
      title={data.title}
      desc={data.description}
      secondDesc={data.description2}
      src={data.image}
    />
  );
};

export const getStaticPaths = async () => {
  const params = Object.keys(jadids);

  const paths = params.map((param) => `/jadids/${param}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async () => {
  return {
    props: {
      jadids,
    },
  };
};

export default Jadid;
