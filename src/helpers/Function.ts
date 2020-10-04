export const ifElseByCondition = <T>(condition: (() => boolean) | boolean) => (
  trueThen: T
) => (orDefault: T): T =>
  (typeof condition === "boolean" ? condition : condition())
    ? trueThen
    : orDefault;

export const identity = <T>(a: T): T => a;
