import { HeaderContainer, HeaderLinksContainer } from "../styles/Header";
import Link from "next/link";

function Header() {
  return (
    <>
      {" "}
      <HeaderContainer>
        <h1>MISC</h1>
      </HeaderContainer>
      <HeaderLinksContainer>
        <Link href="/Location">
          <a>Location</a>
        </Link>
        <Link href="/SearchName">
          <a>Search Name</a>
        </Link>
      </HeaderLinksContainer>
    </>
  );
}

export default Header;
