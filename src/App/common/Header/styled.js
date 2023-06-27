import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 66px;
  max-width: 1097px;
  margin-bottom: 63px;
  font-size: 20px;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const HeaderImage = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;
`;

export const PrevTitle = styled.span`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.slateGray};
  margin-bottom: 12px;
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: 900;
  letter-spacing: 1.9px;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 1px;
  margin: 35px 0 32px 0;
`;

export const Link = styled.a`
  display: inline-flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
