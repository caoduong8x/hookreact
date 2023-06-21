import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
function Paragraph() {
  const theme = useContext(ThemeContext); //nhận props từ component cha đang dùng createContext()
  return (
    <span className={theme.theme}>
      Context provides a way to pass data through the component tree without
      having to pass props down manualy at every level
    </span>
  );
}
export default Paragraph;
