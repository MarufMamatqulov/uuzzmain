import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";

import Container from "@/components/Container";

import Slider from "@/components/Slider";
import Image from "next/image";

import { slider } from "@/components/Slider/config";
import { muzeys } from "@/view/MuzeysView/config";
import { genders } from "@/view/GenderView/config";
import { jadids } from "@/view/DjadidsView/config";

const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 36,
  },
  576: {
    slidesPerView: 2,
    spaceBetween: 36,
  },
  992: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Slider navigationClassName={true} autoplay={true} className="my-4">
        {slider.map((slide) => (
          <div key={slide.id}>
            <Image className="w-full" src={slide.src} alt={slide.src} />
          </div>
        ))}
      </Slider>
      <Container className="my-8">
        <Link
          href="/muzeys"
          className="inline-block my-6 text-2xl font-normal "
        >
          {t("navbar:muzeys")}
        </Link>
        <Slider
          slidesPerView={3}
          spaceBetween={50}
          className="my-4"
          breakpoints={breakpoints}
        >
          {muzeys.map((slide) => (
            <Link href={slide.href} key={slide.id}>
              <Image className="w-full h-72" src={slide.src} alt={slide.src} />
              <p className="mt-4 whitespace-nowrap overflow-hidden text-ellipsis text-xl">
                {t(slide.title)}
              </p>
            </Link>
          ))}
        </Slider>
        <Link
          href="/genders"
          className="inline-block my-6 text-2xl font-normal "
        >
          {t("navbar:genders")}
        </Link>
        <Slider slidesPerView={3} spaceBetween={50} breakpoints={breakpoints}>
          {genders.map((slide) => (
            <Link href={slide.href} key={slide.id}>
              <Image className="w-full h-96" src={slide.src} alt={slide.src} />
              <p className="mt-4 whitespace-nowrap overflow-hidden text-ellipsis text-xl">
                {t(slide.title)}
              </p>
            </Link>
          ))}
        </Slider>
        <Link
          href="/jadids"
          className="inline-block my-6 text-2xl font-normal "
        >
          {t("navbar:jadids")}
        </Link>
        <Slider slidesPerView={3} spaceBetween={50} breakpoints={breakpoints}>
          {jadids.map((slide) => (
            <Link href={slide.href} key={slide.id}>
              <Image className="w-full h-96" src={slide.src} alt={slide.src} />
              <p className="mt-4 whitespace-nowrap overflow-hidden text-ellipsis text-xl">
                {t(slide.title)}
              </p>
            </Link>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Home;
