import { Image } from "@yext/pages-components";
import Ce_site from "../types/site";
const Footer = (_site: Ce_site) => {
  const { c_footer } = _site;
  return (
    <>
      {c_footer && (
        <Image image={c_footer} />
      ) }
    </>
  );
};

export default Footer;
