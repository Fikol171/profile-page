import { LinkEnvelope } from "../../images/icon";
import {
  Description,
  HeaderContainer,
  HeaderContent,
  HeaderImage,
  Title,
  PrevTitle,
} from "./styled";

export const Header = () => {
  return (
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
          👨🏻‍💻💻 I’m a passionate Frontend Developer in love with React,currently
          looking for new job opportunities.
        </Description>
        <a
          href="mailto://PawelOwiesek@gmail.com"
          title="PawelOwiesek@gmail.com"
          rel="noopener noreferrer"
        >
          <LinkEnvelope />
        </a>
      </HeaderContent>
    </HeaderContainer>
  );
};