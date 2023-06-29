import styled from "styled-components";

export const Container = styled.div`
  width: 1216px;
  height: 404px;
  background-color: ${({ theme }) => theme.basic.background};
  border-radius: 4px;
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);
`;

export const SkillHeader = styled.h2`
  padding: 32px 0 0 32px;
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.5px;
`;

export const Divider = styled.div`
  width: 1151px;
  height: 1px;
  margin: 15px 0 32px 32px;
  background-color: ${({ theme }) => theme.basic.slateGray};
`;
