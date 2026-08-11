// "Zefi" — Imparo mascotu, react-native-svg ilə kodla-çəkilmiş vektor (web ilə eyni dizayn).
// Animasiya YOX (statik). Brend palitrası: Fox #F47B3A · Tangerine #FF9F43 · Golden #FFD165
// · Cream #FFF4DF · Cocoa #3B2723 · pəncə #5C3320.
import { useId } from "react";
import Svg, {
  Defs,
  RadialGradient,
  LinearGradient,
  Stop,
  Path,
  Circle,
  Ellipse,
} from "react-native-svg";

export type ZefiEmotion = "welcome" | "happy" | "learning" | "celebrating" | "worried";

const COCOA = "#3B2723";
const CORAL = "#FF8F70";
const PAW = "#5C3320";
const HONEY = "#FFD165";
const BROW = "#D2532A";
const RATIO = 132 / 120;

export default function ZefiMascot({
  emotion = "happy",
  size = 120,
}: {
  emotion?: ZefiEmotion;
  size?: number;
}) {
  const uid = useId().replace(/:/g, "");
  const fox = `${uid}fox`;
  const cream = `${uid}cream`;
  const joyful = emotion === "celebrating";
  const learning = emotion === "learning";
  const worried = emotion === "worried";

  return (
    <Svg width={size} height={Math.round(size * RATIO)} viewBox="0 0 120 132">
      <Defs>
        <RadialGradient id={fox} cx="40%" cy="30%" r="75%">
          <Stop offset="0" stopColor="#FF9F43" />
          <Stop offset="0.55" stopColor="#F47B3A" />
          <Stop offset="1" stopColor="#E06A2C" />
        </RadialGradient>
        <LinearGradient id={cream} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FFFCF4" />
          <Stop offset="1" stopColor="#F5E6C6" />
        </LinearGradient>
      </Defs>

      {/* quyruq */}
      <Path d="M86 98 C114 98 120 64 104 48 C96 40 85 46 90 58 C96 76 82 88 78 94 Z" fill={`url(#${fox})`} stroke={COCOA} strokeWidth={2.5} strokeLinejoin="round" />
      <Path d="M104 48 C96 40 85 46 90 58 C93 65 92 72 87 76 C101 74 109 61 104 48 Z" fill={`url(#${cream})`} stroke={COCOA} strokeWidth={1.4} />

      {/* ayaqlar + pəncələr */}
      <Path d="M48 106 L48 116" stroke="#E06A2C" strokeWidth={14} strokeLinecap="round" />
      <Path d="M72 106 L72 116" stroke="#E06A2C" strokeWidth={14} strokeLinecap="round" />
      <Ellipse cx={47} cy={118} rx={10} ry={7} fill={PAW} stroke={COCOA} strokeWidth={2} />
      <Ellipse cx={73} cy={118} rx={10} ry={7} fill={PAW} stroke={COCOA} strokeWidth={2} />

      {/* qollar + pəncələr */}
      <Path d="M34 82 C27 88 25 96 28 102" stroke={`url(#${fox})`} strokeWidth={13} strokeLinecap="round" fill="none" />
      <Path d="M86 82 C93 88 95 96 92 102" stroke={`url(#${fox})`} strokeWidth={13} strokeLinecap="round" fill="none" />
      <Ellipse cx={28} cy={103} rx={8} ry={7.5} fill={PAW} stroke={COCOA} strokeWidth={2} />
      <Ellipse cx={92} cy={103} rx={8} ry={7.5} fill={PAW} stroke={COCOA} strokeWidth={2} />

      {/* gövdə + krem sinə */}
      <Path d="M60 58 C78 58 88 73 88 91 C88 108 76 114 60 114 C44 114 32 108 32 91 C32 73 42 58 60 58 Z" fill={`url(#${fox})`} stroke={COCOA} strokeWidth={2.5} />
      <Path d="M60 68 C70 68 76 78 76 90 C76 102 69 108 60 108 C51 108 44 102 44 90 C44 78 50 68 60 68 Z" fill={`url(#${cream})`} />

      {/* qızıl çanta qayışları + ulduz nişanı */}
      <Path d="M49 68 L54 100" stroke={HONEY} strokeWidth={5.5} strokeLinecap="round" />
      <Path d="M71 68 L66 100" stroke={HONEY} strokeWidth={5.5} strokeLinecap="round" />
      <Circle cx={60} cy={88} r={7} fill={HONEY} stroke="#E0A93B" strokeWidth={1.5} />
      <Path d="M60 84 l1.3 2.9 3.1 0.3 -2.4 2 0.8 3 -2.8 -1.6 -2.8 1.6 0.8 -3 -2.4 -2 3.1 -0.3 z" fill="#fff" />

      {/* qulaqlar */}
      <Path d="M32 42 L26 4 L56 24 Z" fill={`url(#${fox})`} stroke={COCOA} strokeWidth={2.5} strokeLinejoin="round" />
      <Path d="M88 42 L94 4 L64 24 Z" fill={`url(#${fox})`} stroke={COCOA} strokeWidth={2.5} strokeLinejoin="round" />
      <Path d="M36 33 L33 13 L50 25 Z" fill={`url(#${cream})`} />
      <Path d="M84 33 L87 13 L70 25 Z" fill={`url(#${cream})`} />

      {/* baş + tülkü blaze */}
      <Circle cx={60} cy={42} r={32} fill={`url(#${fox})`} stroke={COCOA} strokeWidth={2.5} />
      <Path d="M60 28 C64 28 66 33 66 39 C74 41 80 48 81 56 C82 65 76 72 66 74 C63 75 57 75 54 74 C44 72 38 65 39 56 C40 48 46 41 54 39 C54 33 56 28 60 28 Z" fill={`url(#${cream})`} />

      {/* qaşlar */}
      {learning ? (
        <>
          <Path d="M43 32 C47 29 55 29 59 33" stroke={BROW} strokeWidth={3.5} fill="none" strokeLinecap="round" />
          <Path d="M77 34 C73 31 66 31 62 34" stroke={BROW} strokeWidth={3.5} fill="none" strokeLinecap="round" />
        </>
      ) : worried ? (
        <>
          <Path d="M44 36 C48 33 54 34 58 37" stroke={BROW} strokeWidth={3.5} fill="none" strokeLinecap="round" />
          <Path d="M76 36 C72 33 66 34 62 37" stroke={BROW} strokeWidth={3.5} fill="none" strokeLinecap="round" />
        </>
      ) : (
        <>
          <Path d="M44 35 C48 32 55 32 59 36" stroke={BROW} strokeWidth={3.5} fill="none" strokeLinecap="round" />
          <Path d="M76 35 C72 32 65 32 61 36" stroke={BROW} strokeWidth={3.5} fill="none" strokeLinecap="round" />
        </>
      )}

      {/* yanaqlar */}
      <Ellipse cx={46} cy={52} rx={4.5} ry={2.8} fill={CORAL} opacity={0.5} />
      <Ellipse cx={74} cy={52} rx={4.5} ry={2.8} fill={CORAL} opacity={0.5} />

      {/* gözlər */}
      {joyful ? (
        <>
          <Path d="M43 48 q7 -8 14 0" stroke={COCOA} strokeWidth={3.2} fill="none" strokeLinecap="round" />
          <Path d="M63 48 q7 -8 14 0" stroke={COCOA} strokeWidth={3.2} fill="none" strokeLinecap="round" />
        </>
      ) : (
        <>
          <Ellipse cx={50} cy={47} rx={6.5} ry={7.5} fill={COCOA} />
          <Ellipse cx={70} cy={47} rx={6.5} ry={7.5} fill={COCOA} />
          <Circle cx={47.7} cy={learning ? 43 : 44.3} r={2.4} fill="#fff" />
          <Circle cx={67.7} cy={learning ? 43 : 44.3} r={2.4} fill="#fff" />
          <Circle cx={52} cy={49} r={1.1} fill="#fff" opacity={0.6} />
          <Circle cx={72} cy={49} r={1.1} fill="#fff" opacity={0.6} />
        </>
      )}

      {/* burun */}
      <Path d="M55.5 56 h9 l-4.5 4.5 z" fill={COCOA} />

      {/* ağız */}
      {joyful ? (
        <Path d="M52 61 q8 11 16 0 q-8 6 -16 0 z" fill={COCOA} />
      ) : worried ? (
        <Path d="M55 64 q5 -2 10 0" stroke={COCOA} strokeWidth={2.4} fill="none" strokeLinecap="round" />
      ) : learning ? (
        <Path d="M56 62 q4 2 8 0" stroke={COCOA} strokeWidth={2.4} fill="none" strokeLinecap="round" />
      ) : (
        <>
          <Path d="M60 60.5 C60 65 55 67 51.5 64.5" stroke={COCOA} strokeWidth={2.4} fill="none" strokeLinecap="round" />
          <Path d="M60 60.5 C60 65 65 67 68.5 64.5" stroke={COCOA} strokeWidth={2.4} fill="none" strokeLinecap="round" />
        </>
      )}
    </Svg>
  );
}
