export {};

// Exclude --　除外

type Exclude<T, U> = T extends U ? never : T;

type MyExclude =
  | (string extends string | number ? never : string)
  | (number extends string | number ? never : number)
  | (DebugType extends string | number ? never : DebugType);

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctiontype = MyExclude;

// Extract -- 抽出

type FunctionTypeByExtranct = Extract<SomeTypes, DebugType>;

// Nonnullable -- ユニオン型からNull,undefindeを排除

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
