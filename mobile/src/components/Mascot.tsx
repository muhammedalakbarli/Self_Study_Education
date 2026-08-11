// Zefi — tülkü mascotu (react-native-svg, düz rənglər). mood: happy | sad | celebrate.
import Svg, { Path, Circle, Ellipse } from "react-native-svg";

const FOX = "#F47B3A";
const CREAM = "#FFF4DF";
const CORAL = "#FF8F70";
const COCOA = "#3B2723";
const OUTLINE = "#B84E1F";
const HONEY = "#FFD166";

export default function Mascot({
  size = 120,
  mood = "happy",
}: {
  size?: number;
  mood?: "happy" | "sad" | "celebrate";
}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 120 128">
      {/* yer kölgəsi */}
      <Ellipse cx={60} cy={122} rx={34} ry={5} fill={COCOA} opacity={0.13} />
      {/* quyruq */}
      <Path d="M82 96 C108 96 116 68 104 52 C98 44 88 48 91 58 C95 72 82 84 76 90 Z" fill={FOX} stroke={OUTLINE} strokeWidth={2.5} strokeLinejoin="round" />
      <Path d="M104 52 C98 44 88 48 91 58 C93 64 92 70 88 74 C99 73 106 62 104 52 Z" fill={CREAM} />
      {/* ayaqlar */}
      <Ellipse cx={49} cy={112} rx={9} ry={7} fill={FOX} stroke={OUTLINE} strokeWidth={2.5} />
      <Ellipse cx={71} cy={112} rx={9} ry={7} fill={FOX} stroke={OUTLINE} strokeWidth={2.5} />
      {/* qollar */}
      <Path d="M34 78 q-9 8 -6 20 q7 3 12 -3 q-3 -9 2 -16 z" fill={FOX} stroke={OUTLINE} strokeWidth={2.5} strokeLinejoin="round" />
      <Path d="M86 78 q9 8 6 20 q-7 3 -12 -3 q3 -9 -2 -16 z" fill={FOX} stroke={OUTLINE} strokeWidth={2.5} strokeLinejoin="round" />
      {/* gövdə */}
      <Path d="M60 60 C76 60 84 72 84 88 C84 104 74 110 60 110 C46 110 36 104 36 88 C36 72 44 60 60 60 Z" fill={FOX} stroke={OUTLINE} strokeWidth={2.5} />
      <Ellipse cx={60} cy={92} rx={15} ry={16} fill={CREAM} />
      <Path d="M46 74 Q60 82 74 74" stroke={HONEY} strokeWidth={5} fill="none" strokeLinecap="round" />
      {/* qulaqlar */}
      <Path d="M34 40 L31 6 L56 25 Z" fill={FOX} stroke={OUTLINE} strokeWidth={2.5} strokeLinejoin="round" />
      <Path d="M86 40 L89 6 L64 25 Z" fill={FOX} stroke={OUTLINE} strokeWidth={2.5} strokeLinejoin="round" />
      <Path d="M38 33 L36 15 L50 26 Z" fill={CORAL} />
      <Path d="M82 33 L84 15 L70 26 Z" fill={CORAL} />
      {/* baş + üz */}
      <Circle cx={60} cy={44} r={30} fill={FOX} stroke={OUTLINE} strokeWidth={2.5} />
      <Path d="M60 36 C73 36 78 47 76 56 C73 65 67 70 60 70 C53 70 47 65 44 56 C42 47 47 36 60 36 Z" fill={CREAM} />
      {/* yanaqlar */}
      <Ellipse cx={48} cy={50} rx={3.6} ry={2.4} fill={CORAL} opacity={0.55} />
      <Ellipse cx={72} cy={50} rx={3.6} ry={2.4} fill={CORAL} opacity={0.55} />
      {/* gözlər */}
      {mood === "celebrate" ? (
        <>
          <Path d="M44 47 q6 -8 12 0" stroke={COCOA} strokeWidth={3} fill="none" strokeLinecap="round" />
          <Path d="M64 47 q6 -8 12 0" stroke={COCOA} strokeWidth={3} fill="none" strokeLinecap="round" />
        </>
      ) : (
        <>
          <Ellipse cx={50} cy={45} rx={5.5} ry={7} fill={COCOA} />
          <Ellipse cx={70} cy={45} rx={5.5} ry={7} fill={COCOA} />
          <Circle cx={48} cy={42.5} r={2.1} fill="#fff" />
          <Circle cx={68} cy={42.5} r={2.1} fill="#fff" />
        </>
      )}
      {/* burun */}
      <Ellipse cx={60} cy={55} rx={4.2} ry={3.3} fill={COCOA} />
      {/* ağız */}
      {mood === "celebrate" ? (
        <Path d="M51 58 q9 11 18 0 q-9 5 -18 0 z" fill={COCOA} />
      ) : mood === "sad" ? (
        <Path d="M54 62 q6 -2 12 0" stroke={COCOA} strokeWidth={2.4} fill="none" strokeLinecap="round" />
      ) : (
        <Path d="M52 59 Q60 65 68 59" stroke={COCOA} strokeWidth={2.6} fill="none" strokeLinecap="round" />
      )}
    </Svg>
  );
}
