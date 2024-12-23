import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./page.module.css";
import { IconType } from "react-icons";
import PageContainer from "@/components/PageContainer/PageContainer";
import { Language } from "@/lib/model/language";
import { getTranslations } from "next-intl/server";

export default async function About(props: {
  params: Promise<{ locale: Language }>;
}) {
  const params = await props.params;
  const { locale: lang } = params;

  const t = await getTranslations("About");

  const icons = [
    { href: "https://facebook.com", icon: FaFacebook },
    { href: "https://twitter.com", icon: FaTwitter },
    { href: "https://instagram.com", icon: FaInstagram },
    { href: "https://linkedin.com", icon: FaLinkedin },
  ].map(({ href, icon: Icon }) => {
    return getSocialLink(href, Icon);
  });
  return (
    <PageContainer center lang={lang}>
      <>
        <h1>{t("intro")}</h1>
        <p> {t("artist")}</p>
        <div className={styles.socialIcons}>{icons}</div>
      </>
    </PageContainer>
  );
}

function getSocialLink(href: string, Icon: IconType) {
  return (
    <a href={href} key={href} target='_blank' rel='noopener noreferrer'>
      <Icon size={24}></Icon>
    </a>
  );
}
