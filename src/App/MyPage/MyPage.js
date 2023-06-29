import { Header } from "../common/Header";
import SkillSection from "../common/Section";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme";
import { GlobalStyles } from "../Global Styles";
import { useSelector } from "react-redux";
import { selectThemeState } from "../theme.Slice";

const MyPage = () => {
  const isLightTheme = useSelector(selectThemeState);

  return (
    <div>
      <ThemeProvider theme={isLightTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header />
        <SkillSection />
      </ThemeProvider>
    </div>
  );
};

export default MyPage;
