import sun from "../../images/brightness 1.svg";
import { Wrapper, Button, Sun, ThemeText } from "./styled";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../theme.Slice";

export const NewButtonTheme = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <ThemeText>
        DARK MODE <span>OFF</span>
      </ThemeText>
      <Button onClick={() => dispatch(toggleTheme())}>
        <Sun>
          <img src={sun} alt="" />
        </Sun>
      </Button>
    </Wrapper>
  );
};
