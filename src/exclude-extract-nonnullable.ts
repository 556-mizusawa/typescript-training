export {};

// Exclude --　除外

type DebagType = () => void;
type SomeTypes = string | number | DebagType;
type FunctionType = Exclude<SomeTypes, string | number>;
type NunFunctionType = Exclude<SomeTypes, DebagType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

// Extract -- 抽出

type FunctionTypeByExtranct = Extract<SomeTypes, DebagType>;
type NonFunctionTypeByExtranct = Extract<SomeTypes, string | number>;
type FunctionTypeExtranctingFunction = Extract<SomeTypes, Function>;

// Nonnullable -- ユニオン型からNull,undefindeを排除

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
