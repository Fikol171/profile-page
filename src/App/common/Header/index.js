import {
  Description,
  HeaderContainer,
  HeaderContent,
  HeaderImage,
  Title,
  PrevTitle,
  MailButton,
  Envelope,
  Link,
} from "./styled";
import envelope from "../../images/Message.svg";

import { NewButtonTheme } from "../NewButtonTheme";

export const Header = () => {
  return (
    <>
      <NewButtonTheme />

      <HeaderContainer>
        <HeaderImage
          src={
            "https://i.postimg.cc/vTkFwP37/351040578-1694964497628708-4383450599782484564-n.jpg"
          }
          alt=""
        />
        <HeaderContent>
          <PrevTitle>This Is</PrevTitle>
          <Title>Pawel Owiesek</Title>
          <Description>
            👨🏻‍💻💻 I’m a passionate Frontend Developer in love with
            React,currently looking for new job opportunities.
          </Description>{" "}
          <MailButton>
            <Envelope src={envelope} alt="" />
            <Link
              href="mailto://PawelOwiesek@gmail.com"
              title="PawelOwiesek@gmail.com"
              rel="noopener noreferrer"
            >
              Hire Me
            </Link>
          </MailButton>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
};
