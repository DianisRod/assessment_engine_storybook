import Headline from "../Headline";

export default {
  component: Headline,
  title: "App Headline",
};

export const Basic = ({ color }) => <Headline color={color} />;
Basic.args = {
  color: "#516dd0",
};