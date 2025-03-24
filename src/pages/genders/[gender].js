import { useRouter } from "next/router";

import { genders } from "@/data";

import UniversalPage from "@/components/UneversalPage";

const Gender = ({ genders }) => {
  const router = useRouter();
  const { query } = router;
  const { gender } = query;

  const data = genders[gender];

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
  const params = Object.keys(genders);

  const paths = params.map((param) => `/genders/${param}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async () => {
  return {
    props: {
      genders,
    },
  };
};

export default Gender;
