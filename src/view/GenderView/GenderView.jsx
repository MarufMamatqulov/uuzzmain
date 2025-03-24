import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

import Container from "@/components/Container/Container";
import NavLink from "@/components/NavLink";
import { genders } from "@/view/GenderView/config";

const GenderView = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Container>
        <div className="grid grid-cols-1  gap-8 mt-4 sm:grid-cols-2  md:grid-cols-3">
          {genders.map((item) => (
            <NavLink href={item.href} key={item.id}>
              <Image className="w-full h-96" src={item.src} alt={item.text} />
              <h2 className="my-2 lg:my-4">{t(item.title)}</h2>
              <p>{item.text}</p>
            </NavLink>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default GenderView;
