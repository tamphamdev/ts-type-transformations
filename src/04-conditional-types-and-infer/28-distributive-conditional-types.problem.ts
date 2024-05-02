import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

// type GetAppleOrBanana<T> = T extends "apple" | "banana" ? T : never
// type AppleOrBanana =  GetAppleOrBanana<Fruit>
// or
type AppleOrBanana = Fruit extends infer T
  ? T extends "apple" | "banana"
    ? T
    : never
  : never;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
