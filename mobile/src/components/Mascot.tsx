// Zefi — tülkü mascotu (rəsmi brend illüstrasiyası, PNG asset). API əvvəlki kimi.
import { Image } from "react-native";

const RATIO = 397 / 260;

export default function Mascot({
  size = 120,
}: {
  size?: number;
  mood?: "happy" | "sad" | "celebrate";
}) {
  return (
    <Image
      source={require("../../assets/zefi.png")}
      style={{ width: size, height: Math.round(size * RATIO) }}
      resizeMode="contain"
    />
  );
}
