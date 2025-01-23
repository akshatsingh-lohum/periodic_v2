import { ElementCategory } from "./ElementCategory";

export interface Element {
  number: number;
  symbol: string;
  category: ElementCategory;
  group: number;
  period: number;
  weight: string;
}
