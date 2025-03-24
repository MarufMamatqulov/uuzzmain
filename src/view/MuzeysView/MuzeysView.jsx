import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

import Container from "@/components/Container/Container";
import { muzeys } from "@/view/MuzeysView/config";

const MuzeysView = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Container>
        <div className="grid grid-cols-1  gap-8 mt-4 sm:grid-cols-2  md:grid-cols-3">
          {muzeys.map((item) => (
            <Link href={item.href} key={item.id}>
              <Image className="w-full h-64" src={item.src} alt={item.text} />
              <h2 className="my-2 lg:my-4">{t(item.title)}</h2>
              <Link className="z-100" href="http://360.vrmuseum.uz/museum5">
                {item.text}
              </Link>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MuzeysView;
