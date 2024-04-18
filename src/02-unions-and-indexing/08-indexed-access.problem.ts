import { Equal, Expect } from "../helpers/type-utils";

export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};
type keys =  typeof fakeDataDefaults
type fakeData = keyof keys
export type StringType = keys[Extract<fakeData, "String">]
export type IntType = keys[Extract<fakeData, "Int">];
export type FloatType = keys[Extract<fakeData, "Float">];
export type BooleanType =  keys[Extract<fakeData, "Boolean">];
export type IDType = keys[Extract<fakeData, "ID">];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>,
];
