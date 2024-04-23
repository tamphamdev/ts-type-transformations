import { Equal, Expect } from "../helpers/type-utils";

const getServerSideProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json: { title: string } = await data.json();
  return {
    props: {
      json,
      isCool: true,
    },
  };
};

// type InferPropsFromServerSideFunction<T extends (...args: any) => any> =  Awaited<ReturnType<T>> extends {props: infer TJSON}  ? TJSON: never;
type InferPropsFromServerSideFunction<T> = T extends () => Promise<{
  props: infer P
}> ? P : never

type tests = [
  Expect<
    Equal<
      InferPropsFromServerSideFunction<typeof getServerSideProps>,
      { json: { title: string }, isCool: boolean }
    >
  >
];
