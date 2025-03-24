import Link from "next/link";
import Icon from "@/icons/Icon";
import { useTranslation } from "@/hooks/useTranslation";

import Container from "@/components/Container";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Container>
        <div className="border-t py-5 flex justify-between flex-row-reverse md:flex-row">
          <p className="text-sm text-footer">2023 © {t("footer:footer")}</p>
          <div className="flex gap-5">
            <Link href="https://telegram.me/shovotland">
              <Icon icon="telegram" size={20} />
            </Link>
            <Link href="https://www.facebook.com/campaign/landing.php?campaign_id=11554070363&extra_1=s%7Cc%7C477437435741%7Ce%7Cfacebook%7C&placement=&creative=477437435741&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D11554070363%26adgroupid%3D112923417056%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D1028523%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjw98ujBhCgARIsAD7QeAhJxERVIvuciIoUz5OK6VOi2iVQGzNZXOn_6HzKiaskAiEL3nJCs_QaAhXKEALw_wcB">
              <Icon icon="facebook" size={20} />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
