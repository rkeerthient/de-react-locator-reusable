import { Image } from "@yext/pages-components";
import Ce_site from "../types/site";

const Header = (_site: Ce_site) => {
  const { c_header } = _site;

  return (
    <>
      {c_header ? (
        <Image image={c_header} />
      ) : (
        <img src="https://i.imgur.com/SxcJgmW.png" alt="" />
      )}
    </>
  );
};

export default Header;
