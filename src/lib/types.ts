export type Category = "ao" | "khoac" | "vay" | "quan";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: Category;
  image: string;
  price: number;
  oldPrice?: number | null;
  sizes: string[];
  soldOut: string[];
  description: string;
  credit?: string | null;
};

export const CATEGORIES: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "Tất cả" },
  { key: "ao", label: "Áo" },
  { key: "khoac", label: "Áo khoác" },
  { key: "vay", label: "Váy" },
  { key: "quan", label: "Quần" },
];

export function categoryLabel(c: Category) {
  return CATEGORIES.find((x) => x.key === c)?.label ?? c;
}
