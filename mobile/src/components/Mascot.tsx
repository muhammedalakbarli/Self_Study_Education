// Zefi — tülkü mascotu (rəsmi brend vərəqinə uyğun, react-native-svg). mood: happy|sad|celebrate.
import Svg, { Path, Circle, Ellipse, G } from "react-native-svg";

const FOX = "#F47B3A";
const CREAM = "#FFF4DF";
const CORAL = "#FF8F70";
const COCOA = "#3B2723";
const OUTLINE = "#C85A28";
const PAW = "#5C3320";
const HONEY = "#FFD166";

export default function Mascot({
  size = 120,
  mood = "happy",
}: {
  size?: number;
  mood?: "happy" | "sad" | "celebrate";
}) {
  const joyful = mood === "celebrate";
  return (
    <Svg width={size} height={(size * 130) / 120} viewBox="0 0 120 130">
      <Ellipse cx={60} cy={124} rx={33} ry={5} fill={COCOA} opacity={0.12} />
      {/* quyruq */}
      <Path d="M84 96 C112 96 118 64 103 49 C96 42 86 47 90 58 C95 74 82 86 78 92 Z" fill={FOX} stroke={OUTLINE} strokeWidth={2} strokeLinejoin="round" />
      <Path d="M103 49 C96 42 86 47 90 58 C92 64 91 71 87 75 C100 73 107 61 103 49 Z" fill={CREAM} />
      {/* ayaqlar + pəncələr */}
      <Path d="M48 104 L48 114" stroke={FOX} strokeWidth={13} strokeLinecap="round" />
      <Path d="M72 104 L72 114" stroke={FOX} strokeWidth={13} strokeLinecap="round" />
      <Ellipse cx={47} cy={117} rx={9} ry={6.5} fill={PAW} />
      <Ellipse cx={73} cy={117} rx={9} ry={6.5} fill={PAW} />
      {/* qollar + pəncələr */}
      <Path d="M35 80 C28 86 26 94 29 100" stroke={FOX} strokeWidth={12} strokeLinecap="round" fill="none" />
      <Path d="M85 80 C92 86 94 94 91 100" stroke={FOX} strokeWidth={12} strokeLinecap="round" fill="none" />
      <Ellipse cx={29} cy={101} rx={7.5} ry={7} fill={PAW} />
      <Ellipse cx={91} cy={101} rx={7.5} ry={7} fill={PAW} />
      {/* gövdə + sinə */}
      <Path d="M60 58 C77 58 86 72 86 90 C86 106 75 112 60 112 C45 112 34 106 34 90 C34 72 43 58 60 58 Z" fill={FOX} stroke={OUTLINE} strokeWidth={2} />
      <Ellipse cx={60} cy={92} rx={16} ry={18} fill={CREAM} />
      <Path d="M48 68 L53 98" stroke={HONEY} strokeWidth={5} strokeLinecap="round" />
      <Path d="M72 68 L67 98" stroke={HONEY} strokeWidth={5} strokeLinecap="round" />
      {/* qulaqlar */}
      <Path d="M33 42 L28 4 L55 24 Z" fill={FOX} stroke={OUTLINE} strokeWidth={2} strokeLinejoin="round" />
      <Path d="M87 42 L92 4 L65 24 Z" fill={FOX} stroke={OUTLINE} strokeWidth={2} strokeLinejoin="round" />
      <Path d="M37 34 L34 14 L49 25 Z" fill={CREAM} />
      <Path d="M83 34 L86 14 L71 25 Z" fill={CREAM} />
      {/* baş + blaze */}
      <Circle cx={60} cy={42} r={31} fill={FOX} stroke={OUTLINE} strokeWidth={2} />
      <Path d="M60 30 C63 30 65 34 65 39 C72 41 78 47 79 55 C80 63 75 70 66 72 C63 73 57 73 54 72 C45 70 40 63 41 55 C42 47 48 41 55 39 C55 34 57 30 60 30 Z" fill={CREAM} />
      {/* qaşlar */}
      <Path d={mood === "sad" ? "M45 39 C49 36 54 36 57 38" : "M45 37 C49 34 55 34 58 38"} stroke={OUTLINE} strokeWidth={3} fill="none" strokeLinecap="round" />
      <Path d={mood === "sad" ? "M75 39 C71 36 66 36 63 38" : "M75 37 C71 34 65 34 62 38"} stroke={OUTLINE} strokeWidth={3} fill="none" strokeLinecap="round" />
      {/* yanaqlar */}
      <Ellipse cx={47} cy={52} rx={4} ry={2.6} fill={CORAL} opacity={0.5} />
      <Ellipse cx={73} cy={52} rx={4} ry={2.6} fill={CORAL} opacity={0.5} />
      {/* gözlər */}
      {joyful ? (
        <G>
          <Path d="M44 47 q6 -7 12 0" stroke={COCOA} strokeWidth={3} fill="none" strokeLinecap="round" />
          <Path d="M64 47 q6 -7 12 0" stroke={COCOA} strokeWidth={3} fill="none" strokeLinecap="round" />
        </G>
      ) : (
        <G>
          <Ellipse cx={50} cy={46} rx={6} ry={7} fill={COCOA} />
          <Ellipse cx={70} cy={46} rx={6} ry={7} fill={COCOA} />
          <Circle cx={48} cy={43.5} r={2.2} fill="#fff" />
          <Circle cx={68} cy={43.5} r={2.2} fill="#fff" />
        </G>
      )}
      {/* burun */}
      <Path d="M56 56 h8 l-4 4 z" fill={COCOA} />
      {/* ağız */}
      {joyful ? (
        <Path d="M52 60 q8 10 16 0 q-8 5 -16 0 z" fill={COCOA} />
      ) : mood === "sad" ? (
        <Path d="M55 63 q5 -2 10 0" stroke={COCOA} strokeWidth={2.2} fill="none" strokeLinecap="round" />
      ) : (
        <G>
          <Path d="M60 60 C60 64 56 66 53 64" stroke={COCOA} strokeWidth={2.2} fill="none" strokeLinecap="round" />
          <Path d="M60 60 C60 64 64 66 67 64" stroke={COCOA} strokeWidth={2.2} fill="none" strokeLinecap="round" />
        </G>
      )}
    </Svg>
  );
}
