
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Paciente
 * 
 */
export type Paciente = $Result.DefaultSelection<Prisma.$PacientePayload>
/**
 * Model Consulta
 * 
 */
export type Consulta = $Result.DefaultSelection<Prisma.$ConsultaPayload>
/**
 * Model Prontuario
 * 
 */
export type Prontuario = $Result.DefaultSelection<Prisma.$ProntuarioPayload>
/**
 * Model Faturamento
 * 
 */
export type Faturamento = $Result.DefaultSelection<Prisma.$FaturamentoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pacientes
 * const pacientes = await prisma.paciente.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Pacientes
   * const pacientes = await prisma.paciente.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.paciente`: Exposes CRUD operations for the **Paciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.paciente.findMany()
    * ```
    */
  get paciente(): Prisma.PacienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consulta`: Exposes CRUD operations for the **Consulta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consultas
    * const consultas = await prisma.consulta.findMany()
    * ```
    */
  get consulta(): Prisma.ConsultaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prontuario`: Exposes CRUD operations for the **Prontuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prontuarios
    * const prontuarios = await prisma.prontuario.findMany()
    * ```
    */
  get prontuario(): Prisma.ProntuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.faturamento`: Exposes CRUD operations for the **Faturamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faturamentos
    * const faturamentos = await prisma.faturamento.findMany()
    * ```
    */
  get faturamento(): Prisma.FaturamentoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Paciente: 'Paciente',
    Consulta: 'Consulta',
    Prontuario: 'Prontuario',
    Faturamento: 'Faturamento'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "paciente" | "consulta" | "prontuario" | "faturamento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Paciente: {
        payload: Prisma.$PacientePayload<ExtArgs>
        fields: Prisma.PacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findFirst: {
            args: Prisma.PacienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findMany: {
            args: Prisma.PacienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          create: {
            args: Prisma.PacienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          createMany: {
            args: Prisma.PacienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PacienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          update: {
            args: Prisma.PacienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          deleteMany: {
            args: Prisma.PacienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PacienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          aggregate: {
            args: Prisma.PacienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaciente>
          }
          groupBy: {
            args: Prisma.PacienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacienteCountArgs<ExtArgs>
            result: $Utils.Optional<PacienteCountAggregateOutputType> | number
          }
        }
      }
      Consulta: {
        payload: Prisma.$ConsultaPayload<ExtArgs>
        fields: Prisma.ConsultaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          findFirst: {
            args: Prisma.ConsultaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          findMany: {
            args: Prisma.ConsultaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>[]
          }
          create: {
            args: Prisma.ConsultaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          createMany: {
            args: Prisma.ConsultaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConsultaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          update: {
            args: Prisma.ConsultaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          deleteMany: {
            args: Prisma.ConsultaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConsultaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          aggregate: {
            args: Prisma.ConsultaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsulta>
          }
          groupBy: {
            args: Prisma.ConsultaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultaCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultaCountAggregateOutputType> | number
          }
        }
      }
      Prontuario: {
        payload: Prisma.$ProntuarioPayload<ExtArgs>
        fields: Prisma.ProntuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProntuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProntuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProntuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProntuarioPayload>
          }
          findFirst: {
            args: Prisma.ProntuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProntuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProntuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProntuarioPayload>
          }
          findMany: {
            args: Prisma.ProntuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProntuarioPayload>[]
          }
          create: {
            args: Prisma.ProntuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProntuarioPayload>
          }
          createMany: {
            args: Prisma.ProntuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProntuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProntuarioPayload>
          }
          update: {
            args: Prisma.ProntuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProntuarioPayload>
          }
          deleteMany: {
            args: Prisma.ProntuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProntuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProntuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProntuarioPayload>
          }
          aggregate: {
            args: Prisma.ProntuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProntuario>
          }
          groupBy: {
            args: Prisma.ProntuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProntuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProntuarioCountArgs<ExtArgs>
            result: $Utils.Optional<ProntuarioCountAggregateOutputType> | number
          }
        }
      }
      Faturamento: {
        payload: Prisma.$FaturamentoPayload<ExtArgs>
        fields: Prisma.FaturamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FaturamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FaturamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturamentoPayload>
          }
          findFirst: {
            args: Prisma.FaturamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FaturamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturamentoPayload>
          }
          findMany: {
            args: Prisma.FaturamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturamentoPayload>[]
          }
          create: {
            args: Prisma.FaturamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturamentoPayload>
          }
          createMany: {
            args: Prisma.FaturamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FaturamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturamentoPayload>
          }
          update: {
            args: Prisma.FaturamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturamentoPayload>
          }
          deleteMany: {
            args: Prisma.FaturamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FaturamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FaturamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaturamentoPayload>
          }
          aggregate: {
            args: Prisma.FaturamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFaturamento>
          }
          groupBy: {
            args: Prisma.FaturamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FaturamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FaturamentoCountArgs<ExtArgs>
            result: $Utils.Optional<FaturamentoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    paciente?: PacienteOmit
    consulta?: ConsultaOmit
    prontuario?: ProntuarioOmit
    faturamento?: FaturamentoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PacienteCountOutputType
   */

  export type PacienteCountOutputType = {
    consultas: number
  }

  export type PacienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultas?: boolean | PacienteCountOutputTypeCountConsultasArgs
  }

  // Custom InputTypes
  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteCountOutputType
     */
    select?: PacienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountConsultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Paciente
   */

  export type AggregatePaciente = {
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  export type PacienteAvgAggregateOutputType = {
    id: number | null
  }

  export type PacienteSumAggregateOutputType = {
    id: number | null
  }

  export type PacienteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    cpf: string | null
    dataNascimento: Date | null
    telefone: string | null
    email: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type PacienteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    cpf: string | null
    dataNascimento: Date | null
    telefone: string | null
    email: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type PacienteCountAggregateOutputType = {
    id: number
    nome: number
    cpf: number
    dataNascimento: number
    telefone: number
    email: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type PacienteAvgAggregateInputType = {
    id?: true
  }

  export type PacienteSumAggregateInputType = {
    id?: true
  }

  export type PacienteMinAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    dataNascimento?: true
    telefone?: true
    email?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type PacienteMaxAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    dataNascimento?: true
    telefone?: true
    email?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type PacienteCountAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    dataNascimento?: true
    telefone?: true
    email?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type PacienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paciente to aggregate.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pacientes
    **/
    _count?: true | PacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacienteMaxAggregateInputType
  }

  export type GetPacienteAggregateType<T extends PacienteAggregateArgs> = {
        [P in keyof T & keyof AggregatePaciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaciente[P]>
      : GetScalarType<T[P], AggregatePaciente[P]>
  }




  export type PacienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithAggregationInput | PacienteOrderByWithAggregationInput[]
    by: PacienteScalarFieldEnum[] | PacienteScalarFieldEnum
    having?: PacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacienteCountAggregateInputType | true
    _avg?: PacienteAvgAggregateInputType
    _sum?: PacienteSumAggregateInputType
    _min?: PacienteMinAggregateInputType
    _max?: PacienteMaxAggregateInputType
  }

  export type PacienteGroupByOutputType = {
    id: number
    nome: string
    cpf: string
    dataNascimento: Date
    telefone: string | null
    email: string | null
    criadoEm: Date
    atualizadoEm: Date
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  type GetPacienteGroupByPayload<T extends PacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacienteGroupByOutputType[P]>
            : GetScalarType<T[P], PacienteGroupByOutputType[P]>
        }
      >
    >


  export type PacienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    dataNascimento?: boolean
    telefone?: boolean
    email?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    consultas?: boolean | Paciente$consultasArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>



  export type PacienteSelectScalar = {
    id?: boolean
    nome?: boolean
    cpf?: boolean
    dataNascimento?: boolean
    telefone?: boolean
    email?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type PacienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cpf" | "dataNascimento" | "telefone" | "email" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["paciente"]>
  export type PacienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultas?: boolean | Paciente$consultasArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PacientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paciente"
    objects: {
      consultas: Prisma.$ConsultaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      cpf: string
      dataNascimento: Date
      telefone: string | null
      email: string | null
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["paciente"]>
    composites: {}
  }

  type PacienteGetPayload<S extends boolean | null | undefined | PacienteDefaultArgs> = $Result.GetResult<Prisma.$PacientePayload, S>

  type PacienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacienteCountAggregateInputType | true
    }

  export interface PacienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paciente'], meta: { name: 'Paciente' } }
    /**
     * Find zero or one Paciente that matches the filter.
     * @param {PacienteFindUniqueArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacienteFindUniqueArgs>(args: SelectSubset<T, PacienteFindUniqueArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paciente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacienteFindUniqueOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacienteFindUniqueOrThrowArgs>(args: SelectSubset<T, PacienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacienteFindFirstArgs>(args?: SelectSubset<T, PacienteFindFirstArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacienteFindFirstOrThrowArgs>(args?: SelectSubset<T, PacienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.paciente.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.paciente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pacienteWithIdOnly = await prisma.paciente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PacienteFindManyArgs>(args?: SelectSubset<T, PacienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paciente.
     * @param {PacienteCreateArgs} args - Arguments to create a Paciente.
     * @example
     * // Create one Paciente
     * const Paciente = await prisma.paciente.create({
     *   data: {
     *     // ... data to create a Paciente
     *   }
     * })
     * 
     */
    create<T extends PacienteCreateArgs>(args: SelectSubset<T, PacienteCreateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pacientes.
     * @param {PacienteCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacienteCreateManyArgs>(args?: SelectSubset<T, PacienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Paciente.
     * @param {PacienteDeleteArgs} args - Arguments to delete one Paciente.
     * @example
     * // Delete one Paciente
     * const Paciente = await prisma.paciente.delete({
     *   where: {
     *     // ... filter to delete one Paciente
     *   }
     * })
     * 
     */
    delete<T extends PacienteDeleteArgs>(args: SelectSubset<T, PacienteDeleteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paciente.
     * @param {PacienteUpdateArgs} args - Arguments to update one Paciente.
     * @example
     * // Update one Paciente
     * const paciente = await prisma.paciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacienteUpdateArgs>(args: SelectSubset<T, PacienteUpdateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pacientes.
     * @param {PacienteDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.paciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacienteDeleteManyArgs>(args?: SelectSubset<T, PacienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacienteUpdateManyArgs>(args: SelectSubset<T, PacienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Paciente.
     * @param {PacienteUpsertArgs} args - Arguments to update or create a Paciente.
     * @example
     * // Update or create a Paciente
     * const paciente = await prisma.paciente.upsert({
     *   create: {
     *     // ... data to create a Paciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paciente we want to update
     *   }
     * })
     */
    upsert<T extends PacienteUpsertArgs>(args: SelectSubset<T, PacienteUpsertArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.paciente.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends PacienteCountArgs>(
      args?: Subset<T, PacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PacienteAggregateArgs>(args: Subset<T, PacienteAggregateArgs>): Prisma.PrismaPromise<GetPacienteAggregateType<T>>

    /**
     * Group by Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacienteGroupByArgs['orderBy'] }
        : { orderBy?: PacienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paciente model
   */
  readonly fields: PacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consultas<T extends Paciente$consultasArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$consultasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Paciente model
   */
  interface PacienteFieldRefs {
    readonly id: FieldRef<"Paciente", 'Int'>
    readonly nome: FieldRef<"Paciente", 'String'>
    readonly cpf: FieldRef<"Paciente", 'String'>
    readonly dataNascimento: FieldRef<"Paciente", 'DateTime'>
    readonly telefone: FieldRef<"Paciente", 'String'>
    readonly email: FieldRef<"Paciente", 'String'>
    readonly criadoEm: FieldRef<"Paciente", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Paciente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Paciente findUnique
   */
  export type PacienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findUniqueOrThrow
   */
  export type PacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findFirst
   */
  export type PacienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findFirstOrThrow
   */
  export type PacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findMany
   */
  export type PacienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente create
   */
  export type PacienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Paciente.
     */
    data: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
  }

  /**
   * Paciente createMany
   */
  export type PacienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paciente update
   */
  export type PacienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Paciente.
     */
    data: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
    /**
     * Choose, which Paciente to update.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente updateMany
   */
  export type PacienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Paciente upsert
   */
  export type PacienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Paciente to update in case it exists.
     */
    where: PacienteWhereUniqueInput
    /**
     * In case the Paciente found by the `where` argument doesn't exist, create a new Paciente with this data.
     */
    create: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
    /**
     * In case the Paciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
  }

  /**
   * Paciente delete
   */
  export type PacienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter which Paciente to delete.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente deleteMany
   */
  export type PacienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pacientes to delete
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to delete.
     */
    limit?: number
  }

  /**
   * Paciente.consultas
   */
  export type Paciente$consultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    where?: ConsultaWhereInput
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    cursor?: ConsultaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Paciente without action
   */
  export type PacienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
  }


  /**
   * Model Consulta
   */

  export type AggregateConsulta = {
    _count: ConsultaCountAggregateOutputType | null
    _avg: ConsultaAvgAggregateOutputType | null
    _sum: ConsultaSumAggregateOutputType | null
    _min: ConsultaMinAggregateOutputType | null
    _max: ConsultaMaxAggregateOutputType | null
  }

  export type ConsultaAvgAggregateOutputType = {
    id: number | null
    pacienteId: number | null
  }

  export type ConsultaSumAggregateOutputType = {
    id: number | null
    pacienteId: number | null
  }

  export type ConsultaMinAggregateOutputType = {
    id: number | null
    dataHora: Date | null
    motivo: string | null
    pacienteId: number | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type ConsultaMaxAggregateOutputType = {
    id: number | null
    dataHora: Date | null
    motivo: string | null
    pacienteId: number | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type ConsultaCountAggregateOutputType = {
    id: number
    dataHora: number
    motivo: number
    pacienteId: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type ConsultaAvgAggregateInputType = {
    id?: true
    pacienteId?: true
  }

  export type ConsultaSumAggregateInputType = {
    id?: true
    pacienteId?: true
  }

  export type ConsultaMinAggregateInputType = {
    id?: true
    dataHora?: true
    motivo?: true
    pacienteId?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type ConsultaMaxAggregateInputType = {
    id?: true
    dataHora?: true
    motivo?: true
    pacienteId?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type ConsultaCountAggregateInputType = {
    id?: true
    dataHora?: true
    motivo?: true
    pacienteId?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type ConsultaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consulta to aggregate.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consultas
    **/
    _count?: true | ConsultaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsultaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsultaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultaMaxAggregateInputType
  }

  export type GetConsultaAggregateType<T extends ConsultaAggregateArgs> = {
        [P in keyof T & keyof AggregateConsulta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsulta[P]>
      : GetScalarType<T[P], AggregateConsulta[P]>
  }




  export type ConsultaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultaWhereInput
    orderBy?: ConsultaOrderByWithAggregationInput | ConsultaOrderByWithAggregationInput[]
    by: ConsultaScalarFieldEnum[] | ConsultaScalarFieldEnum
    having?: ConsultaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultaCountAggregateInputType | true
    _avg?: ConsultaAvgAggregateInputType
    _sum?: ConsultaSumAggregateInputType
    _min?: ConsultaMinAggregateInputType
    _max?: ConsultaMaxAggregateInputType
  }

  export type ConsultaGroupByOutputType = {
    id: number
    dataHora: Date
    motivo: string
    pacienteId: number
    criadoEm: Date
    atualizadoEm: Date
    _count: ConsultaCountAggregateOutputType | null
    _avg: ConsultaAvgAggregateOutputType | null
    _sum: ConsultaSumAggregateOutputType | null
    _min: ConsultaMinAggregateOutputType | null
    _max: ConsultaMaxAggregateOutputType | null
  }

  type GetConsultaGroupByPayload<T extends ConsultaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultaGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultaGroupByOutputType[P]>
        }
      >
    >


  export type ConsultaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataHora?: boolean
    motivo?: boolean
    pacienteId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    prontuario?: boolean | Consulta$prontuarioArgs<ExtArgs>
    faturamento?: boolean | Consulta$faturamentoArgs<ExtArgs>
  }, ExtArgs["result"]["consulta"]>



  export type ConsultaSelectScalar = {
    id?: boolean
    dataHora?: boolean
    motivo?: boolean
    pacienteId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type ConsultaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dataHora" | "motivo" | "pacienteId" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["consulta"]>
  export type ConsultaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    prontuario?: boolean | Consulta$prontuarioArgs<ExtArgs>
    faturamento?: boolean | Consulta$faturamentoArgs<ExtArgs>
  }

  export type $ConsultaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consulta"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs>
      prontuario: Prisma.$ProntuarioPayload<ExtArgs> | null
      faturamento: Prisma.$FaturamentoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dataHora: Date
      motivo: string
      pacienteId: number
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["consulta"]>
    composites: {}
  }

  type ConsultaGetPayload<S extends boolean | null | undefined | ConsultaDefaultArgs> = $Result.GetResult<Prisma.$ConsultaPayload, S>

  type ConsultaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultaCountAggregateInputType | true
    }

  export interface ConsultaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consulta'], meta: { name: 'Consulta' } }
    /**
     * Find zero or one Consulta that matches the filter.
     * @param {ConsultaFindUniqueArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultaFindUniqueArgs>(args: SelectSubset<T, ConsultaFindUniqueArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consulta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultaFindUniqueOrThrowArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultaFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consulta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindFirstArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultaFindFirstArgs>(args?: SelectSubset<T, ConsultaFindFirstArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consulta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindFirstOrThrowArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultaFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consultas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultas
     * const consultas = await prisma.consulta.findMany()
     * 
     * // Get first 10 Consultas
     * const consultas = await prisma.consulta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultaWithIdOnly = await prisma.consulta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultaFindManyArgs>(args?: SelectSubset<T, ConsultaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consulta.
     * @param {ConsultaCreateArgs} args - Arguments to create a Consulta.
     * @example
     * // Create one Consulta
     * const Consulta = await prisma.consulta.create({
     *   data: {
     *     // ... data to create a Consulta
     *   }
     * })
     * 
     */
    create<T extends ConsultaCreateArgs>(args: SelectSubset<T, ConsultaCreateArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consultas.
     * @param {ConsultaCreateManyArgs} args - Arguments to create many Consultas.
     * @example
     * // Create many Consultas
     * const consulta = await prisma.consulta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultaCreateManyArgs>(args?: SelectSubset<T, ConsultaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Consulta.
     * @param {ConsultaDeleteArgs} args - Arguments to delete one Consulta.
     * @example
     * // Delete one Consulta
     * const Consulta = await prisma.consulta.delete({
     *   where: {
     *     // ... filter to delete one Consulta
     *   }
     * })
     * 
     */
    delete<T extends ConsultaDeleteArgs>(args: SelectSubset<T, ConsultaDeleteArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consulta.
     * @param {ConsultaUpdateArgs} args - Arguments to update one Consulta.
     * @example
     * // Update one Consulta
     * const consulta = await prisma.consulta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultaUpdateArgs>(args: SelectSubset<T, ConsultaUpdateArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consultas.
     * @param {ConsultaDeleteManyArgs} args - Arguments to filter Consultas to delete.
     * @example
     * // Delete a few Consultas
     * const { count } = await prisma.consulta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultaDeleteManyArgs>(args?: SelectSubset<T, ConsultaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultas
     * const consulta = await prisma.consulta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultaUpdateManyArgs>(args: SelectSubset<T, ConsultaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Consulta.
     * @param {ConsultaUpsertArgs} args - Arguments to update or create a Consulta.
     * @example
     * // Update or create a Consulta
     * const consulta = await prisma.consulta.upsert({
     *   create: {
     *     // ... data to create a Consulta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consulta we want to update
     *   }
     * })
     */
    upsert<T extends ConsultaUpsertArgs>(args: SelectSubset<T, ConsultaUpsertArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaCountArgs} args - Arguments to filter Consultas to count.
     * @example
     * // Count the number of Consultas
     * const count = await prisma.consulta.count({
     *   where: {
     *     // ... the filter for the Consultas we want to count
     *   }
     * })
    **/
    count<T extends ConsultaCountArgs>(
      args?: Subset<T, ConsultaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consulta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultaAggregateArgs>(args: Subset<T, ConsultaAggregateArgs>): Prisma.PrismaPromise<GetConsultaAggregateType<T>>

    /**
     * Group by Consulta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsultaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultaGroupByArgs['orderBy'] }
        : { orderBy?: ConsultaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsultaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consulta model
   */
  readonly fields: ConsultaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consulta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prontuario<T extends Consulta$prontuarioArgs<ExtArgs> = {}>(args?: Subset<T, Consulta$prontuarioArgs<ExtArgs>>): Prisma__ProntuarioClient<$Result.GetResult<Prisma.$ProntuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    faturamento<T extends Consulta$faturamentoArgs<ExtArgs> = {}>(args?: Subset<T, Consulta$faturamentoArgs<ExtArgs>>): Prisma__FaturamentoClient<$Result.GetResult<Prisma.$FaturamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Consulta model
   */
  interface ConsultaFieldRefs {
    readonly id: FieldRef<"Consulta", 'Int'>
    readonly dataHora: FieldRef<"Consulta", 'DateTime'>
    readonly motivo: FieldRef<"Consulta", 'String'>
    readonly pacienteId: FieldRef<"Consulta", 'Int'>
    readonly criadoEm: FieldRef<"Consulta", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Consulta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Consulta findUnique
   */
  export type ConsultaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta findUniqueOrThrow
   */
  export type ConsultaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta findFirst
   */
  export type ConsultaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultas.
     */
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Consulta findFirstOrThrow
   */
  export type ConsultaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultas.
     */
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Consulta findMany
   */
  export type ConsultaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consultas to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Consulta create
   */
  export type ConsultaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The data needed to create a Consulta.
     */
    data: XOR<ConsultaCreateInput, ConsultaUncheckedCreateInput>
  }

  /**
   * Consulta createMany
   */
  export type ConsultaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consultas.
     */
    data: ConsultaCreateManyInput | ConsultaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Consulta update
   */
  export type ConsultaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The data needed to update a Consulta.
     */
    data: XOR<ConsultaUpdateInput, ConsultaUncheckedUpdateInput>
    /**
     * Choose, which Consulta to update.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta updateMany
   */
  export type ConsultaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consultas.
     */
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyInput>
    /**
     * Filter which Consultas to update
     */
    where?: ConsultaWhereInput
    /**
     * Limit how many Consultas to update.
     */
    limit?: number
  }

  /**
   * Consulta upsert
   */
  export type ConsultaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The filter to search for the Consulta to update in case it exists.
     */
    where: ConsultaWhereUniqueInput
    /**
     * In case the Consulta found by the `where` argument doesn't exist, create a new Consulta with this data.
     */
    create: XOR<ConsultaCreateInput, ConsultaUncheckedCreateInput>
    /**
     * In case the Consulta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultaUpdateInput, ConsultaUncheckedUpdateInput>
  }

  /**
   * Consulta delete
   */
  export type ConsultaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter which Consulta to delete.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta deleteMany
   */
  export type ConsultaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultas to delete
     */
    where?: ConsultaWhereInput
    /**
     * Limit how many Consultas to delete.
     */
    limit?: number
  }

  /**
   * Consulta.prontuario
   */
  export type Consulta$prontuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prontuario
     */
    select?: ProntuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prontuario
     */
    omit?: ProntuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProntuarioInclude<ExtArgs> | null
    where?: ProntuarioWhereInput
  }

  /**
   * Consulta.faturamento
   */
  export type Consulta$faturamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faturamento
     */
    select?: FaturamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faturamento
     */
    omit?: FaturamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturamentoInclude<ExtArgs> | null
    where?: FaturamentoWhereInput
  }

  /**
   * Consulta without action
   */
  export type ConsultaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
  }


  /**
   * Model Prontuario
   */

  export type AggregateProntuario = {
    _count: ProntuarioCountAggregateOutputType | null
    _avg: ProntuarioAvgAggregateOutputType | null
    _sum: ProntuarioSumAggregateOutputType | null
    _min: ProntuarioMinAggregateOutputType | null
    _max: ProntuarioMaxAggregateOutputType | null
  }

  export type ProntuarioAvgAggregateOutputType = {
    id: number | null
    consultaId: number | null
  }

  export type ProntuarioSumAggregateOutputType = {
    id: number | null
    consultaId: number | null
  }

  export type ProntuarioMinAggregateOutputType = {
    id: number | null
    consultaId: number | null
    descricao: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type ProntuarioMaxAggregateOutputType = {
    id: number | null
    consultaId: number | null
    descricao: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type ProntuarioCountAggregateOutputType = {
    id: number
    consultaId: number
    descricao: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type ProntuarioAvgAggregateInputType = {
    id?: true
    consultaId?: true
  }

  export type ProntuarioSumAggregateInputType = {
    id?: true
    consultaId?: true
  }

  export type ProntuarioMinAggregateInputType = {
    id?: true
    consultaId?: true
    descricao?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type ProntuarioMaxAggregateInputType = {
    id?: true
    consultaId?: true
    descricao?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type ProntuarioCountAggregateInputType = {
    id?: true
    consultaId?: true
    descricao?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type ProntuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prontuario to aggregate.
     */
    where?: ProntuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prontuarios to fetch.
     */
    orderBy?: ProntuarioOrderByWithRelationInput | ProntuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProntuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prontuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prontuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prontuarios
    **/
    _count?: true | ProntuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProntuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProntuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProntuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProntuarioMaxAggregateInputType
  }

  export type GetProntuarioAggregateType<T extends ProntuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateProntuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProntuario[P]>
      : GetScalarType<T[P], AggregateProntuario[P]>
  }




  export type ProntuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProntuarioWhereInput
    orderBy?: ProntuarioOrderByWithAggregationInput | ProntuarioOrderByWithAggregationInput[]
    by: ProntuarioScalarFieldEnum[] | ProntuarioScalarFieldEnum
    having?: ProntuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProntuarioCountAggregateInputType | true
    _avg?: ProntuarioAvgAggregateInputType
    _sum?: ProntuarioSumAggregateInputType
    _min?: ProntuarioMinAggregateInputType
    _max?: ProntuarioMaxAggregateInputType
  }

  export type ProntuarioGroupByOutputType = {
    id: number
    consultaId: number
    descricao: string
    criadoEm: Date
    atualizadoEm: Date
    _count: ProntuarioCountAggregateOutputType | null
    _avg: ProntuarioAvgAggregateOutputType | null
    _sum: ProntuarioSumAggregateOutputType | null
    _min: ProntuarioMinAggregateOutputType | null
    _max: ProntuarioMaxAggregateOutputType | null
  }

  type GetProntuarioGroupByPayload<T extends ProntuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProntuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProntuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProntuarioGroupByOutputType[P]>
            : GetScalarType<T[P], ProntuarioGroupByOutputType[P]>
        }
      >
    >


  export type ProntuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    consultaId?: boolean
    descricao?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    consulta?: boolean | ConsultaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prontuario"]>



  export type ProntuarioSelectScalar = {
    id?: boolean
    consultaId?: boolean
    descricao?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type ProntuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "consultaId" | "descricao" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["prontuario"]>
  export type ProntuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consulta?: boolean | ConsultaDefaultArgs<ExtArgs>
  }

  export type $ProntuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prontuario"
    objects: {
      consulta: Prisma.$ConsultaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      consultaId: number
      descricao: string
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["prontuario"]>
    composites: {}
  }

  type ProntuarioGetPayload<S extends boolean | null | undefined | ProntuarioDefaultArgs> = $Result.GetResult<Prisma.$ProntuarioPayload, S>

  type ProntuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProntuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProntuarioCountAggregateInputType | true
    }

  export interface ProntuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prontuario'], meta: { name: 'Prontuario' } }
    /**
     * Find zero or one Prontuario that matches the filter.
     * @param {ProntuarioFindUniqueArgs} args - Arguments to find a Prontuario
     * @example
     * // Get one Prontuario
     * const prontuario = await prisma.prontuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProntuarioFindUniqueArgs>(args: SelectSubset<T, ProntuarioFindUniqueArgs<ExtArgs>>): Prisma__ProntuarioClient<$Result.GetResult<Prisma.$ProntuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prontuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProntuarioFindUniqueOrThrowArgs} args - Arguments to find a Prontuario
     * @example
     * // Get one Prontuario
     * const prontuario = await prisma.prontuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProntuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ProntuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProntuarioClient<$Result.GetResult<Prisma.$ProntuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prontuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProntuarioFindFirstArgs} args - Arguments to find a Prontuario
     * @example
     * // Get one Prontuario
     * const prontuario = await prisma.prontuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProntuarioFindFirstArgs>(args?: SelectSubset<T, ProntuarioFindFirstArgs<ExtArgs>>): Prisma__ProntuarioClient<$Result.GetResult<Prisma.$ProntuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prontuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProntuarioFindFirstOrThrowArgs} args - Arguments to find a Prontuario
     * @example
     * // Get one Prontuario
     * const prontuario = await prisma.prontuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProntuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ProntuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProntuarioClient<$Result.GetResult<Prisma.$ProntuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prontuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProntuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prontuarios
     * const prontuarios = await prisma.prontuario.findMany()
     * 
     * // Get first 10 Prontuarios
     * const prontuarios = await prisma.prontuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prontuarioWithIdOnly = await prisma.prontuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProntuarioFindManyArgs>(args?: SelectSubset<T, ProntuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProntuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prontuario.
     * @param {ProntuarioCreateArgs} args - Arguments to create a Prontuario.
     * @example
     * // Create one Prontuario
     * const Prontuario = await prisma.prontuario.create({
     *   data: {
     *     // ... data to create a Prontuario
     *   }
     * })
     * 
     */
    create<T extends ProntuarioCreateArgs>(args: SelectSubset<T, ProntuarioCreateArgs<ExtArgs>>): Prisma__ProntuarioClient<$Result.GetResult<Prisma.$ProntuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prontuarios.
     * @param {ProntuarioCreateManyArgs} args - Arguments to create many Prontuarios.
     * @example
     * // Create many Prontuarios
     * const prontuario = await prisma.prontuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProntuarioCreateManyArgs>(args?: SelectSubset<T, ProntuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Prontuario.
     * @param {ProntuarioDeleteArgs} args - Arguments to delete one Prontuario.
     * @example
     * // Delete one Prontuario
     * const Prontuario = await prisma.prontuario.delete({
     *   where: {
     *     // ... filter to delete one Prontuario
     *   }
     * })
     * 
     */
    delete<T extends ProntuarioDeleteArgs>(args: SelectSubset<T, ProntuarioDeleteArgs<ExtArgs>>): Prisma__ProntuarioClient<$Result.GetResult<Prisma.$ProntuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prontuario.
     * @param {ProntuarioUpdateArgs} args - Arguments to update one Prontuario.
     * @example
     * // Update one Prontuario
     * const prontuario = await prisma.prontuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProntuarioUpdateArgs>(args: SelectSubset<T, ProntuarioUpdateArgs<ExtArgs>>): Prisma__ProntuarioClient<$Result.GetResult<Prisma.$ProntuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prontuarios.
     * @param {ProntuarioDeleteManyArgs} args - Arguments to filter Prontuarios to delete.
     * @example
     * // Delete a few Prontuarios
     * const { count } = await prisma.prontuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProntuarioDeleteManyArgs>(args?: SelectSubset<T, ProntuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prontuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProntuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prontuarios
     * const prontuario = await prisma.prontuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProntuarioUpdateManyArgs>(args: SelectSubset<T, ProntuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Prontuario.
     * @param {ProntuarioUpsertArgs} args - Arguments to update or create a Prontuario.
     * @example
     * // Update or create a Prontuario
     * const prontuario = await prisma.prontuario.upsert({
     *   create: {
     *     // ... data to create a Prontuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prontuario we want to update
     *   }
     * })
     */
    upsert<T extends ProntuarioUpsertArgs>(args: SelectSubset<T, ProntuarioUpsertArgs<ExtArgs>>): Prisma__ProntuarioClient<$Result.GetResult<Prisma.$ProntuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prontuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProntuarioCountArgs} args - Arguments to filter Prontuarios to count.
     * @example
     * // Count the number of Prontuarios
     * const count = await prisma.prontuario.count({
     *   where: {
     *     // ... the filter for the Prontuarios we want to count
     *   }
     * })
    **/
    count<T extends ProntuarioCountArgs>(
      args?: Subset<T, ProntuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProntuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prontuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProntuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProntuarioAggregateArgs>(args: Subset<T, ProntuarioAggregateArgs>): Prisma.PrismaPromise<GetProntuarioAggregateType<T>>

    /**
     * Group by Prontuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProntuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProntuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProntuarioGroupByArgs['orderBy'] }
        : { orderBy?: ProntuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProntuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProntuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prontuario model
   */
  readonly fields: ProntuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prontuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProntuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consulta<T extends ConsultaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConsultaDefaultArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prontuario model
   */
  interface ProntuarioFieldRefs {
    readonly id: FieldRef<"Prontuario", 'Int'>
    readonly consultaId: FieldRef<"Prontuario", 'Int'>
    readonly descricao: FieldRef<"Prontuario", 'String'>
    readonly criadoEm: FieldRef<"Prontuario", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Prontuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Prontuario findUnique
   */
  export type ProntuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prontuario
     */
    select?: ProntuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prontuario
     */
    omit?: ProntuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProntuarioInclude<ExtArgs> | null
    /**
     * Filter, which Prontuario to fetch.
     */
    where: ProntuarioWhereUniqueInput
  }

  /**
   * Prontuario findUniqueOrThrow
   */
  export type ProntuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prontuario
     */
    select?: ProntuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prontuario
     */
    omit?: ProntuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProntuarioInclude<ExtArgs> | null
    /**
     * Filter, which Prontuario to fetch.
     */
    where: ProntuarioWhereUniqueInput
  }

  /**
   * Prontuario findFirst
   */
  export type ProntuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prontuario
     */
    select?: ProntuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prontuario
     */
    omit?: ProntuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProntuarioInclude<ExtArgs> | null
    /**
     * Filter, which Prontuario to fetch.
     */
    where?: ProntuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prontuarios to fetch.
     */
    orderBy?: ProntuarioOrderByWithRelationInput | ProntuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prontuarios.
     */
    cursor?: ProntuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prontuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prontuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prontuarios.
     */
    distinct?: ProntuarioScalarFieldEnum | ProntuarioScalarFieldEnum[]
  }

  /**
   * Prontuario findFirstOrThrow
   */
  export type ProntuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prontuario
     */
    select?: ProntuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prontuario
     */
    omit?: ProntuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProntuarioInclude<ExtArgs> | null
    /**
     * Filter, which Prontuario to fetch.
     */
    where?: ProntuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prontuarios to fetch.
     */
    orderBy?: ProntuarioOrderByWithRelationInput | ProntuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prontuarios.
     */
    cursor?: ProntuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prontuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prontuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prontuarios.
     */
    distinct?: ProntuarioScalarFieldEnum | ProntuarioScalarFieldEnum[]
  }

  /**
   * Prontuario findMany
   */
  export type ProntuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prontuario
     */
    select?: ProntuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prontuario
     */
    omit?: ProntuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProntuarioInclude<ExtArgs> | null
    /**
     * Filter, which Prontuarios to fetch.
     */
    where?: ProntuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prontuarios to fetch.
     */
    orderBy?: ProntuarioOrderByWithRelationInput | ProntuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prontuarios.
     */
    cursor?: ProntuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prontuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prontuarios.
     */
    skip?: number
    distinct?: ProntuarioScalarFieldEnum | ProntuarioScalarFieldEnum[]
  }

  /**
   * Prontuario create
   */
  export type ProntuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prontuario
     */
    select?: ProntuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prontuario
     */
    omit?: ProntuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProntuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Prontuario.
     */
    data: XOR<ProntuarioCreateInput, ProntuarioUncheckedCreateInput>
  }

  /**
   * Prontuario createMany
   */
  export type ProntuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prontuarios.
     */
    data: ProntuarioCreateManyInput | ProntuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prontuario update
   */
  export type ProntuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prontuario
     */
    select?: ProntuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prontuario
     */
    omit?: ProntuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProntuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Prontuario.
     */
    data: XOR<ProntuarioUpdateInput, ProntuarioUncheckedUpdateInput>
    /**
     * Choose, which Prontuario to update.
     */
    where: ProntuarioWhereUniqueInput
  }

  /**
   * Prontuario updateMany
   */
  export type ProntuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prontuarios.
     */
    data: XOR<ProntuarioUpdateManyMutationInput, ProntuarioUncheckedUpdateManyInput>
    /**
     * Filter which Prontuarios to update
     */
    where?: ProntuarioWhereInput
    /**
     * Limit how many Prontuarios to update.
     */
    limit?: number
  }

  /**
   * Prontuario upsert
   */
  export type ProntuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prontuario
     */
    select?: ProntuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prontuario
     */
    omit?: ProntuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProntuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Prontuario to update in case it exists.
     */
    where: ProntuarioWhereUniqueInput
    /**
     * In case the Prontuario found by the `where` argument doesn't exist, create a new Prontuario with this data.
     */
    create: XOR<ProntuarioCreateInput, ProntuarioUncheckedCreateInput>
    /**
     * In case the Prontuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProntuarioUpdateInput, ProntuarioUncheckedUpdateInput>
  }

  /**
   * Prontuario delete
   */
  export type ProntuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prontuario
     */
    select?: ProntuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prontuario
     */
    omit?: ProntuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProntuarioInclude<ExtArgs> | null
    /**
     * Filter which Prontuario to delete.
     */
    where: ProntuarioWhereUniqueInput
  }

  /**
   * Prontuario deleteMany
   */
  export type ProntuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prontuarios to delete
     */
    where?: ProntuarioWhereInput
    /**
     * Limit how many Prontuarios to delete.
     */
    limit?: number
  }

  /**
   * Prontuario without action
   */
  export type ProntuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prontuario
     */
    select?: ProntuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prontuario
     */
    omit?: ProntuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProntuarioInclude<ExtArgs> | null
  }


  /**
   * Model Faturamento
   */

  export type AggregateFaturamento = {
    _count: FaturamentoCountAggregateOutputType | null
    _avg: FaturamentoAvgAggregateOutputType | null
    _sum: FaturamentoSumAggregateOutputType | null
    _min: FaturamentoMinAggregateOutputType | null
    _max: FaturamentoMaxAggregateOutputType | null
  }

  export type FaturamentoAvgAggregateOutputType = {
    id: number | null
    consultaId: number | null
    valor: number | null
  }

  export type FaturamentoSumAggregateOutputType = {
    id: number | null
    consultaId: number | null
    valor: number | null
  }

  export type FaturamentoMinAggregateOutputType = {
    id: number | null
    consultaId: number | null
    valor: number | null
    status: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type FaturamentoMaxAggregateOutputType = {
    id: number | null
    consultaId: number | null
    valor: number | null
    status: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type FaturamentoCountAggregateOutputType = {
    id: number
    consultaId: number
    valor: number
    status: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type FaturamentoAvgAggregateInputType = {
    id?: true
    consultaId?: true
    valor?: true
  }

  export type FaturamentoSumAggregateInputType = {
    id?: true
    consultaId?: true
    valor?: true
  }

  export type FaturamentoMinAggregateInputType = {
    id?: true
    consultaId?: true
    valor?: true
    status?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type FaturamentoMaxAggregateInputType = {
    id?: true
    consultaId?: true
    valor?: true
    status?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type FaturamentoCountAggregateInputType = {
    id?: true
    consultaId?: true
    valor?: true
    status?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type FaturamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faturamento to aggregate.
     */
    where?: FaturamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faturamentos to fetch.
     */
    orderBy?: FaturamentoOrderByWithRelationInput | FaturamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FaturamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faturamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faturamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Faturamentos
    **/
    _count?: true | FaturamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FaturamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FaturamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FaturamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FaturamentoMaxAggregateInputType
  }

  export type GetFaturamentoAggregateType<T extends FaturamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateFaturamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFaturamento[P]>
      : GetScalarType<T[P], AggregateFaturamento[P]>
  }




  export type FaturamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaturamentoWhereInput
    orderBy?: FaturamentoOrderByWithAggregationInput | FaturamentoOrderByWithAggregationInput[]
    by: FaturamentoScalarFieldEnum[] | FaturamentoScalarFieldEnum
    having?: FaturamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FaturamentoCountAggregateInputType | true
    _avg?: FaturamentoAvgAggregateInputType
    _sum?: FaturamentoSumAggregateInputType
    _min?: FaturamentoMinAggregateInputType
    _max?: FaturamentoMaxAggregateInputType
  }

  export type FaturamentoGroupByOutputType = {
    id: number
    consultaId: number
    valor: number
    status: string
    criadoEm: Date
    atualizadoEm: Date
    _count: FaturamentoCountAggregateOutputType | null
    _avg: FaturamentoAvgAggregateOutputType | null
    _sum: FaturamentoSumAggregateOutputType | null
    _min: FaturamentoMinAggregateOutputType | null
    _max: FaturamentoMaxAggregateOutputType | null
  }

  type GetFaturamentoGroupByPayload<T extends FaturamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FaturamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FaturamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FaturamentoGroupByOutputType[P]>
            : GetScalarType<T[P], FaturamentoGroupByOutputType[P]>
        }
      >
    >


  export type FaturamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    consultaId?: boolean
    valor?: boolean
    status?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    consulta?: boolean | ConsultaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["faturamento"]>



  export type FaturamentoSelectScalar = {
    id?: boolean
    consultaId?: boolean
    valor?: boolean
    status?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type FaturamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "consultaId" | "valor" | "status" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["faturamento"]>
  export type FaturamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consulta?: boolean | ConsultaDefaultArgs<ExtArgs>
  }

  export type $FaturamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Faturamento"
    objects: {
      consulta: Prisma.$ConsultaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      consultaId: number
      valor: number
      status: string
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["faturamento"]>
    composites: {}
  }

  type FaturamentoGetPayload<S extends boolean | null | undefined | FaturamentoDefaultArgs> = $Result.GetResult<Prisma.$FaturamentoPayload, S>

  type FaturamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FaturamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FaturamentoCountAggregateInputType | true
    }

  export interface FaturamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Faturamento'], meta: { name: 'Faturamento' } }
    /**
     * Find zero or one Faturamento that matches the filter.
     * @param {FaturamentoFindUniqueArgs} args - Arguments to find a Faturamento
     * @example
     * // Get one Faturamento
     * const faturamento = await prisma.faturamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FaturamentoFindUniqueArgs>(args: SelectSubset<T, FaturamentoFindUniqueArgs<ExtArgs>>): Prisma__FaturamentoClient<$Result.GetResult<Prisma.$FaturamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Faturamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FaturamentoFindUniqueOrThrowArgs} args - Arguments to find a Faturamento
     * @example
     * // Get one Faturamento
     * const faturamento = await prisma.faturamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FaturamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, FaturamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FaturamentoClient<$Result.GetResult<Prisma.$FaturamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faturamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaturamentoFindFirstArgs} args - Arguments to find a Faturamento
     * @example
     * // Get one Faturamento
     * const faturamento = await prisma.faturamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FaturamentoFindFirstArgs>(args?: SelectSubset<T, FaturamentoFindFirstArgs<ExtArgs>>): Prisma__FaturamentoClient<$Result.GetResult<Prisma.$FaturamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faturamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaturamentoFindFirstOrThrowArgs} args - Arguments to find a Faturamento
     * @example
     * // Get one Faturamento
     * const faturamento = await prisma.faturamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FaturamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, FaturamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FaturamentoClient<$Result.GetResult<Prisma.$FaturamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Faturamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaturamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faturamentos
     * const faturamentos = await prisma.faturamento.findMany()
     * 
     * // Get first 10 Faturamentos
     * const faturamentos = await prisma.faturamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const faturamentoWithIdOnly = await prisma.faturamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FaturamentoFindManyArgs>(args?: SelectSubset<T, FaturamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaturamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Faturamento.
     * @param {FaturamentoCreateArgs} args - Arguments to create a Faturamento.
     * @example
     * // Create one Faturamento
     * const Faturamento = await prisma.faturamento.create({
     *   data: {
     *     // ... data to create a Faturamento
     *   }
     * })
     * 
     */
    create<T extends FaturamentoCreateArgs>(args: SelectSubset<T, FaturamentoCreateArgs<ExtArgs>>): Prisma__FaturamentoClient<$Result.GetResult<Prisma.$FaturamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Faturamentos.
     * @param {FaturamentoCreateManyArgs} args - Arguments to create many Faturamentos.
     * @example
     * // Create many Faturamentos
     * const faturamento = await prisma.faturamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FaturamentoCreateManyArgs>(args?: SelectSubset<T, FaturamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Faturamento.
     * @param {FaturamentoDeleteArgs} args - Arguments to delete one Faturamento.
     * @example
     * // Delete one Faturamento
     * const Faturamento = await prisma.faturamento.delete({
     *   where: {
     *     // ... filter to delete one Faturamento
     *   }
     * })
     * 
     */
    delete<T extends FaturamentoDeleteArgs>(args: SelectSubset<T, FaturamentoDeleteArgs<ExtArgs>>): Prisma__FaturamentoClient<$Result.GetResult<Prisma.$FaturamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Faturamento.
     * @param {FaturamentoUpdateArgs} args - Arguments to update one Faturamento.
     * @example
     * // Update one Faturamento
     * const faturamento = await prisma.faturamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FaturamentoUpdateArgs>(args: SelectSubset<T, FaturamentoUpdateArgs<ExtArgs>>): Prisma__FaturamentoClient<$Result.GetResult<Prisma.$FaturamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Faturamentos.
     * @param {FaturamentoDeleteManyArgs} args - Arguments to filter Faturamentos to delete.
     * @example
     * // Delete a few Faturamentos
     * const { count } = await prisma.faturamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FaturamentoDeleteManyArgs>(args?: SelectSubset<T, FaturamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faturamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaturamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faturamentos
     * const faturamento = await prisma.faturamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FaturamentoUpdateManyArgs>(args: SelectSubset<T, FaturamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Faturamento.
     * @param {FaturamentoUpsertArgs} args - Arguments to update or create a Faturamento.
     * @example
     * // Update or create a Faturamento
     * const faturamento = await prisma.faturamento.upsert({
     *   create: {
     *     // ... data to create a Faturamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Faturamento we want to update
     *   }
     * })
     */
    upsert<T extends FaturamentoUpsertArgs>(args: SelectSubset<T, FaturamentoUpsertArgs<ExtArgs>>): Prisma__FaturamentoClient<$Result.GetResult<Prisma.$FaturamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Faturamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaturamentoCountArgs} args - Arguments to filter Faturamentos to count.
     * @example
     * // Count the number of Faturamentos
     * const count = await prisma.faturamento.count({
     *   where: {
     *     // ... the filter for the Faturamentos we want to count
     *   }
     * })
    **/
    count<T extends FaturamentoCountArgs>(
      args?: Subset<T, FaturamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FaturamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Faturamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaturamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FaturamentoAggregateArgs>(args: Subset<T, FaturamentoAggregateArgs>): Prisma.PrismaPromise<GetFaturamentoAggregateType<T>>

    /**
     * Group by Faturamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaturamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FaturamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FaturamentoGroupByArgs['orderBy'] }
        : { orderBy?: FaturamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FaturamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaturamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Faturamento model
   */
  readonly fields: FaturamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Faturamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FaturamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consulta<T extends ConsultaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConsultaDefaultArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Faturamento model
   */
  interface FaturamentoFieldRefs {
    readonly id: FieldRef<"Faturamento", 'Int'>
    readonly consultaId: FieldRef<"Faturamento", 'Int'>
    readonly valor: FieldRef<"Faturamento", 'Float'>
    readonly status: FieldRef<"Faturamento", 'String'>
    readonly criadoEm: FieldRef<"Faturamento", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Faturamento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Faturamento findUnique
   */
  export type FaturamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faturamento
     */
    select?: FaturamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faturamento
     */
    omit?: FaturamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturamentoInclude<ExtArgs> | null
    /**
     * Filter, which Faturamento to fetch.
     */
    where: FaturamentoWhereUniqueInput
  }

  /**
   * Faturamento findUniqueOrThrow
   */
  export type FaturamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faturamento
     */
    select?: FaturamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faturamento
     */
    omit?: FaturamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturamentoInclude<ExtArgs> | null
    /**
     * Filter, which Faturamento to fetch.
     */
    where: FaturamentoWhereUniqueInput
  }

  /**
   * Faturamento findFirst
   */
  export type FaturamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faturamento
     */
    select?: FaturamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faturamento
     */
    omit?: FaturamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturamentoInclude<ExtArgs> | null
    /**
     * Filter, which Faturamento to fetch.
     */
    where?: FaturamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faturamentos to fetch.
     */
    orderBy?: FaturamentoOrderByWithRelationInput | FaturamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faturamentos.
     */
    cursor?: FaturamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faturamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faturamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faturamentos.
     */
    distinct?: FaturamentoScalarFieldEnum | FaturamentoScalarFieldEnum[]
  }

  /**
   * Faturamento findFirstOrThrow
   */
  export type FaturamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faturamento
     */
    select?: FaturamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faturamento
     */
    omit?: FaturamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturamentoInclude<ExtArgs> | null
    /**
     * Filter, which Faturamento to fetch.
     */
    where?: FaturamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faturamentos to fetch.
     */
    orderBy?: FaturamentoOrderByWithRelationInput | FaturamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faturamentos.
     */
    cursor?: FaturamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faturamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faturamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faturamentos.
     */
    distinct?: FaturamentoScalarFieldEnum | FaturamentoScalarFieldEnum[]
  }

  /**
   * Faturamento findMany
   */
  export type FaturamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faturamento
     */
    select?: FaturamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faturamento
     */
    omit?: FaturamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturamentoInclude<ExtArgs> | null
    /**
     * Filter, which Faturamentos to fetch.
     */
    where?: FaturamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faturamentos to fetch.
     */
    orderBy?: FaturamentoOrderByWithRelationInput | FaturamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Faturamentos.
     */
    cursor?: FaturamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faturamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faturamentos.
     */
    skip?: number
    distinct?: FaturamentoScalarFieldEnum | FaturamentoScalarFieldEnum[]
  }

  /**
   * Faturamento create
   */
  export type FaturamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faturamento
     */
    select?: FaturamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faturamento
     */
    omit?: FaturamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Faturamento.
     */
    data: XOR<FaturamentoCreateInput, FaturamentoUncheckedCreateInput>
  }

  /**
   * Faturamento createMany
   */
  export type FaturamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Faturamentos.
     */
    data: FaturamentoCreateManyInput | FaturamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Faturamento update
   */
  export type FaturamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faturamento
     */
    select?: FaturamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faturamento
     */
    omit?: FaturamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Faturamento.
     */
    data: XOR<FaturamentoUpdateInput, FaturamentoUncheckedUpdateInput>
    /**
     * Choose, which Faturamento to update.
     */
    where: FaturamentoWhereUniqueInput
  }

  /**
   * Faturamento updateMany
   */
  export type FaturamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Faturamentos.
     */
    data: XOR<FaturamentoUpdateManyMutationInput, FaturamentoUncheckedUpdateManyInput>
    /**
     * Filter which Faturamentos to update
     */
    where?: FaturamentoWhereInput
    /**
     * Limit how many Faturamentos to update.
     */
    limit?: number
  }

  /**
   * Faturamento upsert
   */
  export type FaturamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faturamento
     */
    select?: FaturamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faturamento
     */
    omit?: FaturamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Faturamento to update in case it exists.
     */
    where: FaturamentoWhereUniqueInput
    /**
     * In case the Faturamento found by the `where` argument doesn't exist, create a new Faturamento with this data.
     */
    create: XOR<FaturamentoCreateInput, FaturamentoUncheckedCreateInput>
    /**
     * In case the Faturamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FaturamentoUpdateInput, FaturamentoUncheckedUpdateInput>
  }

  /**
   * Faturamento delete
   */
  export type FaturamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faturamento
     */
    select?: FaturamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faturamento
     */
    omit?: FaturamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturamentoInclude<ExtArgs> | null
    /**
     * Filter which Faturamento to delete.
     */
    where: FaturamentoWhereUniqueInput
  }

  /**
   * Faturamento deleteMany
   */
  export type FaturamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faturamentos to delete
     */
    where?: FaturamentoWhereInput
    /**
     * Limit how many Faturamentos to delete.
     */
    limit?: number
  }

  /**
   * Faturamento without action
   */
  export type FaturamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faturamento
     */
    select?: FaturamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faturamento
     */
    omit?: FaturamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaturamentoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PacienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cpf: 'cpf',
    dataNascimento: 'dataNascimento',
    telefone: 'telefone',
    email: 'email',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type PacienteScalarFieldEnum = (typeof PacienteScalarFieldEnum)[keyof typeof PacienteScalarFieldEnum]


  export const ConsultaScalarFieldEnum: {
    id: 'id',
    dataHora: 'dataHora',
    motivo: 'motivo',
    pacienteId: 'pacienteId',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type ConsultaScalarFieldEnum = (typeof ConsultaScalarFieldEnum)[keyof typeof ConsultaScalarFieldEnum]


  export const ProntuarioScalarFieldEnum: {
    id: 'id',
    consultaId: 'consultaId',
    descricao: 'descricao',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type ProntuarioScalarFieldEnum = (typeof ProntuarioScalarFieldEnum)[keyof typeof ProntuarioScalarFieldEnum]


  export const FaturamentoScalarFieldEnum: {
    id: 'id',
    consultaId: 'consultaId',
    valor: 'valor',
    status: 'status',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type FaturamentoScalarFieldEnum = (typeof FaturamentoScalarFieldEnum)[keyof typeof FaturamentoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const PacienteOrderByRelevanceFieldEnum: {
    nome: 'nome',
    cpf: 'cpf',
    telefone: 'telefone',
    email: 'email'
  };

  export type PacienteOrderByRelevanceFieldEnum = (typeof PacienteOrderByRelevanceFieldEnum)[keyof typeof PacienteOrderByRelevanceFieldEnum]


  export const ConsultaOrderByRelevanceFieldEnum: {
    motivo: 'motivo'
  };

  export type ConsultaOrderByRelevanceFieldEnum = (typeof ConsultaOrderByRelevanceFieldEnum)[keyof typeof ConsultaOrderByRelevanceFieldEnum]


  export const ProntuarioOrderByRelevanceFieldEnum: {
    descricao: 'descricao'
  };

  export type ProntuarioOrderByRelevanceFieldEnum = (typeof ProntuarioOrderByRelevanceFieldEnum)[keyof typeof ProntuarioOrderByRelevanceFieldEnum]


  export const FaturamentoOrderByRelevanceFieldEnum: {
    status: 'status'
  };

  export type FaturamentoOrderByRelevanceFieldEnum = (typeof FaturamentoOrderByRelevanceFieldEnum)[keyof typeof FaturamentoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PacienteWhereInput = {
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    id?: IntFilter<"Paciente"> | number
    nome?: StringFilter<"Paciente"> | string
    cpf?: StringFilter<"Paciente"> | string
    dataNascimento?: DateTimeFilter<"Paciente"> | Date | string
    telefone?: StringNullableFilter<"Paciente"> | string | null
    email?: StringNullableFilter<"Paciente"> | string | null
    criadoEm?: DateTimeFilter<"Paciente"> | Date | string
    atualizadoEm?: DateTimeFilter<"Paciente"> | Date | string
    consultas?: ConsultaListRelationFilter
  }

  export type PacienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    dataNascimento?: SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    consultas?: ConsultaOrderByRelationAggregateInput
    _relevance?: PacienteOrderByRelevanceInput
  }

  export type PacienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cpf?: string
    email?: string
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    nome?: StringFilter<"Paciente"> | string
    dataNascimento?: DateTimeFilter<"Paciente"> | Date | string
    telefone?: StringNullableFilter<"Paciente"> | string | null
    criadoEm?: DateTimeFilter<"Paciente"> | Date | string
    atualizadoEm?: DateTimeFilter<"Paciente"> | Date | string
    consultas?: ConsultaListRelationFilter
  }, "id" | "cpf" | "email">

  export type PacienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    dataNascimento?: SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: PacienteCountOrderByAggregateInput
    _avg?: PacienteAvgOrderByAggregateInput
    _max?: PacienteMaxOrderByAggregateInput
    _min?: PacienteMinOrderByAggregateInput
    _sum?: PacienteSumOrderByAggregateInput
  }

  export type PacienteScalarWhereWithAggregatesInput = {
    AND?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    OR?: PacienteScalarWhereWithAggregatesInput[]
    NOT?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Paciente"> | number
    nome?: StringWithAggregatesFilter<"Paciente"> | string
    cpf?: StringWithAggregatesFilter<"Paciente"> | string
    dataNascimento?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
    telefone?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    email?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
  }

  export type ConsultaWhereInput = {
    AND?: ConsultaWhereInput | ConsultaWhereInput[]
    OR?: ConsultaWhereInput[]
    NOT?: ConsultaWhereInput | ConsultaWhereInput[]
    id?: IntFilter<"Consulta"> | number
    dataHora?: DateTimeFilter<"Consulta"> | Date | string
    motivo?: StringFilter<"Consulta"> | string
    pacienteId?: IntFilter<"Consulta"> | number
    criadoEm?: DateTimeFilter<"Consulta"> | Date | string
    atualizadoEm?: DateTimeFilter<"Consulta"> | Date | string
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    prontuario?: XOR<ProntuarioNullableScalarRelationFilter, ProntuarioWhereInput> | null
    faturamento?: XOR<FaturamentoNullableScalarRelationFilter, FaturamentoWhereInput> | null
  }

  export type ConsultaOrderByWithRelationInput = {
    id?: SortOrder
    dataHora?: SortOrder
    motivo?: SortOrder
    pacienteId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    paciente?: PacienteOrderByWithRelationInput
    prontuario?: ProntuarioOrderByWithRelationInput
    faturamento?: FaturamentoOrderByWithRelationInput
    _relevance?: ConsultaOrderByRelevanceInput
  }

  export type ConsultaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConsultaWhereInput | ConsultaWhereInput[]
    OR?: ConsultaWhereInput[]
    NOT?: ConsultaWhereInput | ConsultaWhereInput[]
    dataHora?: DateTimeFilter<"Consulta"> | Date | string
    motivo?: StringFilter<"Consulta"> | string
    pacienteId?: IntFilter<"Consulta"> | number
    criadoEm?: DateTimeFilter<"Consulta"> | Date | string
    atualizadoEm?: DateTimeFilter<"Consulta"> | Date | string
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    prontuario?: XOR<ProntuarioNullableScalarRelationFilter, ProntuarioWhereInput> | null
    faturamento?: XOR<FaturamentoNullableScalarRelationFilter, FaturamentoWhereInput> | null
  }, "id">

  export type ConsultaOrderByWithAggregationInput = {
    id?: SortOrder
    dataHora?: SortOrder
    motivo?: SortOrder
    pacienteId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: ConsultaCountOrderByAggregateInput
    _avg?: ConsultaAvgOrderByAggregateInput
    _max?: ConsultaMaxOrderByAggregateInput
    _min?: ConsultaMinOrderByAggregateInput
    _sum?: ConsultaSumOrderByAggregateInput
  }

  export type ConsultaScalarWhereWithAggregatesInput = {
    AND?: ConsultaScalarWhereWithAggregatesInput | ConsultaScalarWhereWithAggregatesInput[]
    OR?: ConsultaScalarWhereWithAggregatesInput[]
    NOT?: ConsultaScalarWhereWithAggregatesInput | ConsultaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Consulta"> | number
    dataHora?: DateTimeWithAggregatesFilter<"Consulta"> | Date | string
    motivo?: StringWithAggregatesFilter<"Consulta"> | string
    pacienteId?: IntWithAggregatesFilter<"Consulta"> | number
    criadoEm?: DateTimeWithAggregatesFilter<"Consulta"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Consulta"> | Date | string
  }

  export type ProntuarioWhereInput = {
    AND?: ProntuarioWhereInput | ProntuarioWhereInput[]
    OR?: ProntuarioWhereInput[]
    NOT?: ProntuarioWhereInput | ProntuarioWhereInput[]
    id?: IntFilter<"Prontuario"> | number
    consultaId?: IntFilter<"Prontuario"> | number
    descricao?: StringFilter<"Prontuario"> | string
    criadoEm?: DateTimeFilter<"Prontuario"> | Date | string
    atualizadoEm?: DateTimeFilter<"Prontuario"> | Date | string
    consulta?: XOR<ConsultaScalarRelationFilter, ConsultaWhereInput>
  }

  export type ProntuarioOrderByWithRelationInput = {
    id?: SortOrder
    consultaId?: SortOrder
    descricao?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    consulta?: ConsultaOrderByWithRelationInput
    _relevance?: ProntuarioOrderByRelevanceInput
  }

  export type ProntuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    consultaId?: number
    AND?: ProntuarioWhereInput | ProntuarioWhereInput[]
    OR?: ProntuarioWhereInput[]
    NOT?: ProntuarioWhereInput | ProntuarioWhereInput[]
    descricao?: StringFilter<"Prontuario"> | string
    criadoEm?: DateTimeFilter<"Prontuario"> | Date | string
    atualizadoEm?: DateTimeFilter<"Prontuario"> | Date | string
    consulta?: XOR<ConsultaScalarRelationFilter, ConsultaWhereInput>
  }, "id" | "consultaId">

  export type ProntuarioOrderByWithAggregationInput = {
    id?: SortOrder
    consultaId?: SortOrder
    descricao?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: ProntuarioCountOrderByAggregateInput
    _avg?: ProntuarioAvgOrderByAggregateInput
    _max?: ProntuarioMaxOrderByAggregateInput
    _min?: ProntuarioMinOrderByAggregateInput
    _sum?: ProntuarioSumOrderByAggregateInput
  }

  export type ProntuarioScalarWhereWithAggregatesInput = {
    AND?: ProntuarioScalarWhereWithAggregatesInput | ProntuarioScalarWhereWithAggregatesInput[]
    OR?: ProntuarioScalarWhereWithAggregatesInput[]
    NOT?: ProntuarioScalarWhereWithAggregatesInput | ProntuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Prontuario"> | number
    consultaId?: IntWithAggregatesFilter<"Prontuario"> | number
    descricao?: StringWithAggregatesFilter<"Prontuario"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Prontuario"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Prontuario"> | Date | string
  }

  export type FaturamentoWhereInput = {
    AND?: FaturamentoWhereInput | FaturamentoWhereInput[]
    OR?: FaturamentoWhereInput[]
    NOT?: FaturamentoWhereInput | FaturamentoWhereInput[]
    id?: IntFilter<"Faturamento"> | number
    consultaId?: IntFilter<"Faturamento"> | number
    valor?: FloatFilter<"Faturamento"> | number
    status?: StringFilter<"Faturamento"> | string
    criadoEm?: DateTimeFilter<"Faturamento"> | Date | string
    atualizadoEm?: DateTimeFilter<"Faturamento"> | Date | string
    consulta?: XOR<ConsultaScalarRelationFilter, ConsultaWhereInput>
  }

  export type FaturamentoOrderByWithRelationInput = {
    id?: SortOrder
    consultaId?: SortOrder
    valor?: SortOrder
    status?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    consulta?: ConsultaOrderByWithRelationInput
    _relevance?: FaturamentoOrderByRelevanceInput
  }

  export type FaturamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    consultaId?: number
    AND?: FaturamentoWhereInput | FaturamentoWhereInput[]
    OR?: FaturamentoWhereInput[]
    NOT?: FaturamentoWhereInput | FaturamentoWhereInput[]
    valor?: FloatFilter<"Faturamento"> | number
    status?: StringFilter<"Faturamento"> | string
    criadoEm?: DateTimeFilter<"Faturamento"> | Date | string
    atualizadoEm?: DateTimeFilter<"Faturamento"> | Date | string
    consulta?: XOR<ConsultaScalarRelationFilter, ConsultaWhereInput>
  }, "id" | "consultaId">

  export type FaturamentoOrderByWithAggregationInput = {
    id?: SortOrder
    consultaId?: SortOrder
    valor?: SortOrder
    status?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: FaturamentoCountOrderByAggregateInput
    _avg?: FaturamentoAvgOrderByAggregateInput
    _max?: FaturamentoMaxOrderByAggregateInput
    _min?: FaturamentoMinOrderByAggregateInput
    _sum?: FaturamentoSumOrderByAggregateInput
  }

  export type FaturamentoScalarWhereWithAggregatesInput = {
    AND?: FaturamentoScalarWhereWithAggregatesInput | FaturamentoScalarWhereWithAggregatesInput[]
    OR?: FaturamentoScalarWhereWithAggregatesInput[]
    NOT?: FaturamentoScalarWhereWithAggregatesInput | FaturamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Faturamento"> | number
    consultaId?: IntWithAggregatesFilter<"Faturamento"> | number
    valor?: FloatWithAggregatesFilter<"Faturamento"> | number
    status?: StringWithAggregatesFilter<"Faturamento"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Faturamento"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Faturamento"> | Date | string
  }

  export type PacienteCreateInput = {
    nome: string
    cpf: string
    dataNascimento: Date | string
    telefone?: string | null
    email?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    consultas?: ConsultaCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateInput = {
    id?: number
    nome: string
    cpf: string
    dataNascimento: Date | string
    telefone?: string | null
    email?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    consultas?: ConsultaUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    consultas?: ConsultaUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    consultas?: ConsultaUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteCreateManyInput = {
    id?: number
    nome: string
    cpf: string
    dataNascimento: Date | string
    telefone?: string | null
    email?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PacienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultaCreateInput = {
    dataHora: Date | string
    motivo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    paciente: PacienteCreateNestedOneWithoutConsultasInput
    prontuario?: ProntuarioCreateNestedOneWithoutConsultaInput
    faturamento?: FaturamentoCreateNestedOneWithoutConsultaInput
  }

  export type ConsultaUncheckedCreateInput = {
    id?: number
    dataHora: Date | string
    motivo: string
    pacienteId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    prontuario?: ProntuarioUncheckedCreateNestedOneWithoutConsultaInput
    faturamento?: FaturamentoUncheckedCreateNestedOneWithoutConsultaInput
  }

  export type ConsultaUpdateInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PacienteUpdateOneRequiredWithoutConsultasNestedInput
    prontuario?: ProntuarioUpdateOneWithoutConsultaNestedInput
    faturamento?: FaturamentoUpdateOneWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    pacienteId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    prontuario?: ProntuarioUncheckedUpdateOneWithoutConsultaNestedInput
    faturamento?: FaturamentoUncheckedUpdateOneWithoutConsultaNestedInput
  }

  export type ConsultaCreateManyInput = {
    id?: number
    dataHora: Date | string
    motivo: string
    pacienteId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ConsultaUpdateManyMutationInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    pacienteId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProntuarioCreateInput = {
    descricao: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    consulta: ConsultaCreateNestedOneWithoutProntuarioInput
  }

  export type ProntuarioUncheckedCreateInput = {
    id?: number
    consultaId: number
    descricao: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ProntuarioUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    consulta?: ConsultaUpdateOneRequiredWithoutProntuarioNestedInput
  }

  export type ProntuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    consultaId?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProntuarioCreateManyInput = {
    id?: number
    consultaId: number
    descricao: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ProntuarioUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProntuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    consultaId?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaturamentoCreateInput = {
    valor: number
    status: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    consulta: ConsultaCreateNestedOneWithoutFaturamentoInput
  }

  export type FaturamentoUncheckedCreateInput = {
    id?: number
    consultaId: number
    valor: number
    status: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type FaturamentoUpdateInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    consulta?: ConsultaUpdateOneRequiredWithoutFaturamentoNestedInput
  }

  export type FaturamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    consultaId?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaturamentoCreateManyInput = {
    id?: number
    consultaId: number
    valor: number
    status: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type FaturamentoUpdateManyMutationInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaturamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    consultaId?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ConsultaListRelationFilter = {
    every?: ConsultaWhereInput
    some?: ConsultaWhereInput
    none?: ConsultaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConsultaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PacienteOrderByRelevanceInput = {
    fields: PacienteOrderByRelevanceFieldEnum | PacienteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PacienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    dataNascimento?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type PacienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PacienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    dataNascimento?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type PacienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    dataNascimento?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type PacienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PacienteScalarRelationFilter = {
    is?: PacienteWhereInput
    isNot?: PacienteWhereInput
  }

  export type ProntuarioNullableScalarRelationFilter = {
    is?: ProntuarioWhereInput | null
    isNot?: ProntuarioWhereInput | null
  }

  export type FaturamentoNullableScalarRelationFilter = {
    is?: FaturamentoWhereInput | null
    isNot?: FaturamentoWhereInput | null
  }

  export type ConsultaOrderByRelevanceInput = {
    fields: ConsultaOrderByRelevanceFieldEnum | ConsultaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ConsultaCountOrderByAggregateInput = {
    id?: SortOrder
    dataHora?: SortOrder
    motivo?: SortOrder
    pacienteId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ConsultaAvgOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
  }

  export type ConsultaMaxOrderByAggregateInput = {
    id?: SortOrder
    dataHora?: SortOrder
    motivo?: SortOrder
    pacienteId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ConsultaMinOrderByAggregateInput = {
    id?: SortOrder
    dataHora?: SortOrder
    motivo?: SortOrder
    pacienteId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ConsultaSumOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
  }

  export type ConsultaScalarRelationFilter = {
    is?: ConsultaWhereInput
    isNot?: ConsultaWhereInput
  }

  export type ProntuarioOrderByRelevanceInput = {
    fields: ProntuarioOrderByRelevanceFieldEnum | ProntuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProntuarioCountOrderByAggregateInput = {
    id?: SortOrder
    consultaId?: SortOrder
    descricao?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ProntuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    consultaId?: SortOrder
  }

  export type ProntuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    consultaId?: SortOrder
    descricao?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ProntuarioMinOrderByAggregateInput = {
    id?: SortOrder
    consultaId?: SortOrder
    descricao?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ProntuarioSumOrderByAggregateInput = {
    id?: SortOrder
    consultaId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FaturamentoOrderByRelevanceInput = {
    fields: FaturamentoOrderByRelevanceFieldEnum | FaturamentoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FaturamentoCountOrderByAggregateInput = {
    id?: SortOrder
    consultaId?: SortOrder
    valor?: SortOrder
    status?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type FaturamentoAvgOrderByAggregateInput = {
    id?: SortOrder
    consultaId?: SortOrder
    valor?: SortOrder
  }

  export type FaturamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    consultaId?: SortOrder
    valor?: SortOrder
    status?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type FaturamentoMinOrderByAggregateInput = {
    id?: SortOrder
    consultaId?: SortOrder
    valor?: SortOrder
    status?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type FaturamentoSumOrderByAggregateInput = {
    id?: SortOrder
    consultaId?: SortOrder
    valor?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ConsultaCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput> | ConsultaCreateWithoutPacienteInput[] | ConsultaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput | ConsultaCreateOrConnectWithoutPacienteInput[]
    createMany?: ConsultaCreateManyPacienteInputEnvelope
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type ConsultaUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput> | ConsultaCreateWithoutPacienteInput[] | ConsultaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput | ConsultaCreateOrConnectWithoutPacienteInput[]
    createMany?: ConsultaCreateManyPacienteInputEnvelope
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ConsultaUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput> | ConsultaCreateWithoutPacienteInput[] | ConsultaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput | ConsultaCreateOrConnectWithoutPacienteInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutPacienteInput | ConsultaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: ConsultaCreateManyPacienteInputEnvelope
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutPacienteInput | ConsultaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutPacienteInput | ConsultaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ConsultaUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput> | ConsultaCreateWithoutPacienteInput[] | ConsultaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput | ConsultaCreateOrConnectWithoutPacienteInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutPacienteInput | ConsultaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: ConsultaCreateManyPacienteInputEnvelope
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutPacienteInput | ConsultaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutPacienteInput | ConsultaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type PacienteCreateNestedOneWithoutConsultasInput = {
    create?: XOR<PacienteCreateWithoutConsultasInput, PacienteUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutConsultasInput
    connect?: PacienteWhereUniqueInput
  }

  export type ProntuarioCreateNestedOneWithoutConsultaInput = {
    create?: XOR<ProntuarioCreateWithoutConsultaInput, ProntuarioUncheckedCreateWithoutConsultaInput>
    connectOrCreate?: ProntuarioCreateOrConnectWithoutConsultaInput
    connect?: ProntuarioWhereUniqueInput
  }

  export type FaturamentoCreateNestedOneWithoutConsultaInput = {
    create?: XOR<FaturamentoCreateWithoutConsultaInput, FaturamentoUncheckedCreateWithoutConsultaInput>
    connectOrCreate?: FaturamentoCreateOrConnectWithoutConsultaInput
    connect?: FaturamentoWhereUniqueInput
  }

  export type ProntuarioUncheckedCreateNestedOneWithoutConsultaInput = {
    create?: XOR<ProntuarioCreateWithoutConsultaInput, ProntuarioUncheckedCreateWithoutConsultaInput>
    connectOrCreate?: ProntuarioCreateOrConnectWithoutConsultaInput
    connect?: ProntuarioWhereUniqueInput
  }

  export type FaturamentoUncheckedCreateNestedOneWithoutConsultaInput = {
    create?: XOR<FaturamentoCreateWithoutConsultaInput, FaturamentoUncheckedCreateWithoutConsultaInput>
    connectOrCreate?: FaturamentoCreateOrConnectWithoutConsultaInput
    connect?: FaturamentoWhereUniqueInput
  }

  export type PacienteUpdateOneRequiredWithoutConsultasNestedInput = {
    create?: XOR<PacienteCreateWithoutConsultasInput, PacienteUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutConsultasInput
    upsert?: PacienteUpsertWithoutConsultasInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutConsultasInput, PacienteUpdateWithoutConsultasInput>, PacienteUncheckedUpdateWithoutConsultasInput>
  }

  export type ProntuarioUpdateOneWithoutConsultaNestedInput = {
    create?: XOR<ProntuarioCreateWithoutConsultaInput, ProntuarioUncheckedCreateWithoutConsultaInput>
    connectOrCreate?: ProntuarioCreateOrConnectWithoutConsultaInput
    upsert?: ProntuarioUpsertWithoutConsultaInput
    disconnect?: ProntuarioWhereInput | boolean
    delete?: ProntuarioWhereInput | boolean
    connect?: ProntuarioWhereUniqueInput
    update?: XOR<XOR<ProntuarioUpdateToOneWithWhereWithoutConsultaInput, ProntuarioUpdateWithoutConsultaInput>, ProntuarioUncheckedUpdateWithoutConsultaInput>
  }

  export type FaturamentoUpdateOneWithoutConsultaNestedInput = {
    create?: XOR<FaturamentoCreateWithoutConsultaInput, FaturamentoUncheckedCreateWithoutConsultaInput>
    connectOrCreate?: FaturamentoCreateOrConnectWithoutConsultaInput
    upsert?: FaturamentoUpsertWithoutConsultaInput
    disconnect?: FaturamentoWhereInput | boolean
    delete?: FaturamentoWhereInput | boolean
    connect?: FaturamentoWhereUniqueInput
    update?: XOR<XOR<FaturamentoUpdateToOneWithWhereWithoutConsultaInput, FaturamentoUpdateWithoutConsultaInput>, FaturamentoUncheckedUpdateWithoutConsultaInput>
  }

  export type ProntuarioUncheckedUpdateOneWithoutConsultaNestedInput = {
    create?: XOR<ProntuarioCreateWithoutConsultaInput, ProntuarioUncheckedCreateWithoutConsultaInput>
    connectOrCreate?: ProntuarioCreateOrConnectWithoutConsultaInput
    upsert?: ProntuarioUpsertWithoutConsultaInput
    disconnect?: ProntuarioWhereInput | boolean
    delete?: ProntuarioWhereInput | boolean
    connect?: ProntuarioWhereUniqueInput
    update?: XOR<XOR<ProntuarioUpdateToOneWithWhereWithoutConsultaInput, ProntuarioUpdateWithoutConsultaInput>, ProntuarioUncheckedUpdateWithoutConsultaInput>
  }

  export type FaturamentoUncheckedUpdateOneWithoutConsultaNestedInput = {
    create?: XOR<FaturamentoCreateWithoutConsultaInput, FaturamentoUncheckedCreateWithoutConsultaInput>
    connectOrCreate?: FaturamentoCreateOrConnectWithoutConsultaInput
    upsert?: FaturamentoUpsertWithoutConsultaInput
    disconnect?: FaturamentoWhereInput | boolean
    delete?: FaturamentoWhereInput | boolean
    connect?: FaturamentoWhereUniqueInput
    update?: XOR<XOR<FaturamentoUpdateToOneWithWhereWithoutConsultaInput, FaturamentoUpdateWithoutConsultaInput>, FaturamentoUncheckedUpdateWithoutConsultaInput>
  }

  export type ConsultaCreateNestedOneWithoutProntuarioInput = {
    create?: XOR<ConsultaCreateWithoutProntuarioInput, ConsultaUncheckedCreateWithoutProntuarioInput>
    connectOrCreate?: ConsultaCreateOrConnectWithoutProntuarioInput
    connect?: ConsultaWhereUniqueInput
  }

  export type ConsultaUpdateOneRequiredWithoutProntuarioNestedInput = {
    create?: XOR<ConsultaCreateWithoutProntuarioInput, ConsultaUncheckedCreateWithoutProntuarioInput>
    connectOrCreate?: ConsultaCreateOrConnectWithoutProntuarioInput
    upsert?: ConsultaUpsertWithoutProntuarioInput
    connect?: ConsultaWhereUniqueInput
    update?: XOR<XOR<ConsultaUpdateToOneWithWhereWithoutProntuarioInput, ConsultaUpdateWithoutProntuarioInput>, ConsultaUncheckedUpdateWithoutProntuarioInput>
  }

  export type ConsultaCreateNestedOneWithoutFaturamentoInput = {
    create?: XOR<ConsultaCreateWithoutFaturamentoInput, ConsultaUncheckedCreateWithoutFaturamentoInput>
    connectOrCreate?: ConsultaCreateOrConnectWithoutFaturamentoInput
    connect?: ConsultaWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ConsultaUpdateOneRequiredWithoutFaturamentoNestedInput = {
    create?: XOR<ConsultaCreateWithoutFaturamentoInput, ConsultaUncheckedCreateWithoutFaturamentoInput>
    connectOrCreate?: ConsultaCreateOrConnectWithoutFaturamentoInput
    upsert?: ConsultaUpsertWithoutFaturamentoInput
    connect?: ConsultaWhereUniqueInput
    update?: XOR<XOR<ConsultaUpdateToOneWithWhereWithoutFaturamentoInput, ConsultaUpdateWithoutFaturamentoInput>, ConsultaUncheckedUpdateWithoutFaturamentoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ConsultaCreateWithoutPacienteInput = {
    dataHora: Date | string
    motivo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    prontuario?: ProntuarioCreateNestedOneWithoutConsultaInput
    faturamento?: FaturamentoCreateNestedOneWithoutConsultaInput
  }

  export type ConsultaUncheckedCreateWithoutPacienteInput = {
    id?: number
    dataHora: Date | string
    motivo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    prontuario?: ProntuarioUncheckedCreateNestedOneWithoutConsultaInput
    faturamento?: FaturamentoUncheckedCreateNestedOneWithoutConsultaInput
  }

  export type ConsultaCreateOrConnectWithoutPacienteInput = {
    where: ConsultaWhereUniqueInput
    create: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput>
  }

  export type ConsultaCreateManyPacienteInputEnvelope = {
    data: ConsultaCreateManyPacienteInput | ConsultaCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type ConsultaUpsertWithWhereUniqueWithoutPacienteInput = {
    where: ConsultaWhereUniqueInput
    update: XOR<ConsultaUpdateWithoutPacienteInput, ConsultaUncheckedUpdateWithoutPacienteInput>
    create: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput>
  }

  export type ConsultaUpdateWithWhereUniqueWithoutPacienteInput = {
    where: ConsultaWhereUniqueInput
    data: XOR<ConsultaUpdateWithoutPacienteInput, ConsultaUncheckedUpdateWithoutPacienteInput>
  }

  export type ConsultaUpdateManyWithWhereWithoutPacienteInput = {
    where: ConsultaScalarWhereInput
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyWithoutPacienteInput>
  }

  export type ConsultaScalarWhereInput = {
    AND?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
    OR?: ConsultaScalarWhereInput[]
    NOT?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
    id?: IntFilter<"Consulta"> | number
    dataHora?: DateTimeFilter<"Consulta"> | Date | string
    motivo?: StringFilter<"Consulta"> | string
    pacienteId?: IntFilter<"Consulta"> | number
    criadoEm?: DateTimeFilter<"Consulta"> | Date | string
    atualizadoEm?: DateTimeFilter<"Consulta"> | Date | string
  }

  export type PacienteCreateWithoutConsultasInput = {
    nome: string
    cpf: string
    dataNascimento: Date | string
    telefone?: string | null
    email?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PacienteUncheckedCreateWithoutConsultasInput = {
    id?: number
    nome: string
    cpf: string
    dataNascimento: Date | string
    telefone?: string | null
    email?: string | null
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PacienteCreateOrConnectWithoutConsultasInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutConsultasInput, PacienteUncheckedCreateWithoutConsultasInput>
  }

  export type ProntuarioCreateWithoutConsultaInput = {
    descricao: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ProntuarioUncheckedCreateWithoutConsultaInput = {
    id?: number
    descricao: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ProntuarioCreateOrConnectWithoutConsultaInput = {
    where: ProntuarioWhereUniqueInput
    create: XOR<ProntuarioCreateWithoutConsultaInput, ProntuarioUncheckedCreateWithoutConsultaInput>
  }

  export type FaturamentoCreateWithoutConsultaInput = {
    valor: number
    status: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type FaturamentoUncheckedCreateWithoutConsultaInput = {
    id?: number
    valor: number
    status: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type FaturamentoCreateOrConnectWithoutConsultaInput = {
    where: FaturamentoWhereUniqueInput
    create: XOR<FaturamentoCreateWithoutConsultaInput, FaturamentoUncheckedCreateWithoutConsultaInput>
  }

  export type PacienteUpsertWithoutConsultasInput = {
    update: XOR<PacienteUpdateWithoutConsultasInput, PacienteUncheckedUpdateWithoutConsultasInput>
    create: XOR<PacienteCreateWithoutConsultasInput, PacienteUncheckedCreateWithoutConsultasInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutConsultasInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutConsultasInput, PacienteUncheckedUpdateWithoutConsultasInput>
  }

  export type PacienteUpdateWithoutConsultasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteUncheckedUpdateWithoutConsultasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProntuarioUpsertWithoutConsultaInput = {
    update: XOR<ProntuarioUpdateWithoutConsultaInput, ProntuarioUncheckedUpdateWithoutConsultaInput>
    create: XOR<ProntuarioCreateWithoutConsultaInput, ProntuarioUncheckedCreateWithoutConsultaInput>
    where?: ProntuarioWhereInput
  }

  export type ProntuarioUpdateToOneWithWhereWithoutConsultaInput = {
    where?: ProntuarioWhereInput
    data: XOR<ProntuarioUpdateWithoutConsultaInput, ProntuarioUncheckedUpdateWithoutConsultaInput>
  }

  export type ProntuarioUpdateWithoutConsultaInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProntuarioUncheckedUpdateWithoutConsultaInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaturamentoUpsertWithoutConsultaInput = {
    update: XOR<FaturamentoUpdateWithoutConsultaInput, FaturamentoUncheckedUpdateWithoutConsultaInput>
    create: XOR<FaturamentoCreateWithoutConsultaInput, FaturamentoUncheckedCreateWithoutConsultaInput>
    where?: FaturamentoWhereInput
  }

  export type FaturamentoUpdateToOneWithWhereWithoutConsultaInput = {
    where?: FaturamentoWhereInput
    data: XOR<FaturamentoUpdateWithoutConsultaInput, FaturamentoUncheckedUpdateWithoutConsultaInput>
  }

  export type FaturamentoUpdateWithoutConsultaInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaturamentoUncheckedUpdateWithoutConsultaInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultaCreateWithoutProntuarioInput = {
    dataHora: Date | string
    motivo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    paciente: PacienteCreateNestedOneWithoutConsultasInput
    faturamento?: FaturamentoCreateNestedOneWithoutConsultaInput
  }

  export type ConsultaUncheckedCreateWithoutProntuarioInput = {
    id?: number
    dataHora: Date | string
    motivo: string
    pacienteId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    faturamento?: FaturamentoUncheckedCreateNestedOneWithoutConsultaInput
  }

  export type ConsultaCreateOrConnectWithoutProntuarioInput = {
    where: ConsultaWhereUniqueInput
    create: XOR<ConsultaCreateWithoutProntuarioInput, ConsultaUncheckedCreateWithoutProntuarioInput>
  }

  export type ConsultaUpsertWithoutProntuarioInput = {
    update: XOR<ConsultaUpdateWithoutProntuarioInput, ConsultaUncheckedUpdateWithoutProntuarioInput>
    create: XOR<ConsultaCreateWithoutProntuarioInput, ConsultaUncheckedCreateWithoutProntuarioInput>
    where?: ConsultaWhereInput
  }

  export type ConsultaUpdateToOneWithWhereWithoutProntuarioInput = {
    where?: ConsultaWhereInput
    data: XOR<ConsultaUpdateWithoutProntuarioInput, ConsultaUncheckedUpdateWithoutProntuarioInput>
  }

  export type ConsultaUpdateWithoutProntuarioInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PacienteUpdateOneRequiredWithoutConsultasNestedInput
    faturamento?: FaturamentoUpdateOneWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateWithoutProntuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    pacienteId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    faturamento?: FaturamentoUncheckedUpdateOneWithoutConsultaNestedInput
  }

  export type ConsultaCreateWithoutFaturamentoInput = {
    dataHora: Date | string
    motivo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    paciente: PacienteCreateNestedOneWithoutConsultasInput
    prontuario?: ProntuarioCreateNestedOneWithoutConsultaInput
  }

  export type ConsultaUncheckedCreateWithoutFaturamentoInput = {
    id?: number
    dataHora: Date | string
    motivo: string
    pacienteId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    prontuario?: ProntuarioUncheckedCreateNestedOneWithoutConsultaInput
  }

  export type ConsultaCreateOrConnectWithoutFaturamentoInput = {
    where: ConsultaWhereUniqueInput
    create: XOR<ConsultaCreateWithoutFaturamentoInput, ConsultaUncheckedCreateWithoutFaturamentoInput>
  }

  export type ConsultaUpsertWithoutFaturamentoInput = {
    update: XOR<ConsultaUpdateWithoutFaturamentoInput, ConsultaUncheckedUpdateWithoutFaturamentoInput>
    create: XOR<ConsultaCreateWithoutFaturamentoInput, ConsultaUncheckedCreateWithoutFaturamentoInput>
    where?: ConsultaWhereInput
  }

  export type ConsultaUpdateToOneWithWhereWithoutFaturamentoInput = {
    where?: ConsultaWhereInput
    data: XOR<ConsultaUpdateWithoutFaturamentoInput, ConsultaUncheckedUpdateWithoutFaturamentoInput>
  }

  export type ConsultaUpdateWithoutFaturamentoInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PacienteUpdateOneRequiredWithoutConsultasNestedInput
    prontuario?: ProntuarioUpdateOneWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateWithoutFaturamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    pacienteId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    prontuario?: ProntuarioUncheckedUpdateOneWithoutConsultaNestedInput
  }

  export type ConsultaCreateManyPacienteInput = {
    id?: number
    dataHora: Date | string
    motivo: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ConsultaUpdateWithoutPacienteInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    prontuario?: ProntuarioUpdateOneWithoutConsultaNestedInput
    faturamento?: FaturamentoUpdateOneWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    prontuario?: ProntuarioUncheckedUpdateOneWithoutConsultaNestedInput
    faturamento?: FaturamentoUncheckedUpdateOneWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateManyWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}