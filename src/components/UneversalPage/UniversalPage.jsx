import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import parser from "html-react-parser";

import Container from "@/components/Container";

import Rectangle from "../../../public/muzey.png";

const UniversalPage = ({
  title,
  desc,
  secondDesc,
  src,
  initialSrc,
  hasSrc,
  linkto360,
  hasLink,
  text360,
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <Container>
        {hasSrc && (
          <Image className="w-full md:h-96" src={Rectangle} alt={initialSrc} />
        )}
        <h2 className="my-8 font-bold text-2xl sm:text-3xl ">{t(title)}</h2>
        <p className=" text-base leading-6 sm:text-lg sm:leading-8 text-justify">
          {parser(t(desc))}
        </p>
        <div className="flex flex-col gap-6 lg:flex-row  justify-between">
          <p className="text-base leading-6 sm:text-lg sm:leading-8 text-justify">
            {t(secondDesc)}
          </p>
          <Image className="w-full h-96" src={src} alt="rectangle" />
        </div>
        {hasLink && (
          <Link
            className="text-primary block my-2 md:my-4 text-lg  md:text-2xl"
            href={linkto360}
          >
            {t(text360)}
          </Link>
        )}
      </Container>
    </div>
  );
};

export default UniversalPage;
