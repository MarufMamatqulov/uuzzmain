import { useTranslation } from "@/hooks/useTranslation";

import Container from "@/components/Container";

const AboutView = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Container>
        <p className="text-xl font-thin leading-10 mt-2 text-justify">
          {t("about:about")}
        </p>
      </Container>
    </div>
  );
};

export default AboutView;
