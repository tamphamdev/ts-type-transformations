import { Equal, Expect } from "../helpers/type-utils";
type User =  {
  id: string,
  name: string,
  email: string
}
const getUser = ():Promise<User> => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  });
};

type ReturnValue = Awaited<ReturnType<typeof getUser>>;

type tests = [
  Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>,
];
