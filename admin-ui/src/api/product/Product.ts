import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type Product = {
  category?: Category | null;
  colors: JsonValue;
  createdAt: Date;
  description: JsonValue;
  discountedprice: JsonValue;
  id: string;
  images: JsonValue;
  order?: Order | null;
  reviews?: Array<Review>;
  title: string;
  titleprice: number;
  updatedAt: Date;
  variants: JsonValue;
};
