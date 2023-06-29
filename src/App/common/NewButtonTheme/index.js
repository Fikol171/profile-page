import sun from "../../images/brightness 1.svg";
import { Wrapper, Button, Sun, ThemeText } from "./styled";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../theme.Slice";
import { selectThemeState } from "../../theme.Slice";
import { useSelector } from "react-redux";

export const NewButtonTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectThemeState);

  return (
    <Wrapper>
      <ThemeText>
        DARK MODE <span>{theme ? "ON" : "OFF"}</span>
      </ThemeText>
      <Button onClick={() => dispatch(toggleTheme())}>
        <Sun>
          <img src={sun} alt="" />
        </Sun>
      </Button>
    </Wrapper>
  );
};
