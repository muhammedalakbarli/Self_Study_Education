// Holberton monoxrom palitrası: bütün fənlər eyni qırmızı vurğunu paylaşır,
// fərqləndirmə ikon və başlıqla olur (Holberton dizaynına uyğun).

export interface ColorClasses {
  bg: string; // dolğun qırmızı
  bgSoft: string; // tünd panel
  text: string; // qırmızı mətn
  border: string; // tünd kənar
  ring: string;
}

const brand: ColorClasses = {
  bg: "bg-brand",
  bgSoft: "bg-panel-2",
  text: "text-brand",
  border: "border-line",
  ring: "ring-brand",
};

export function colorClasses(_color?: string): ColorClasses {
  return brand;
}
