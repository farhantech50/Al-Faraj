
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TeacherApplication
 * 
 */
export type TeacherApplication = $Result.DefaultSelection<Prisma.$TeacherApplicationPayload>
/**
 * Model AssignedTeacherStudent
 * 
 */
export type AssignedTeacherStudent = $Result.DefaultSelection<Prisma.$AssignedTeacherStudentPayload>
/**
 * Model Assignment
 * 
 */
export type Assignment = $Result.DefaultSelection<Prisma.$AssignmentPayload>
/**
 * Model ClassSchedule
 * 
 */
export type ClassSchedule = $Result.DefaultSelection<Prisma.$ClassSchedulePayload>
/**
 * Model ClassScheduleOverride
 * 
 */
export type ClassScheduleOverride = $Result.DefaultSelection<Prisma.$ClassScheduleOverridePayload>
/**
 * Model Lookup
 * 
 */
export type Lookup = $Result.DefaultSelection<Prisma.$LookupPayload>
/**
 * Model ModeratorPermission
 * 
 */
export type ModeratorPermission = $Result.DefaultSelection<Prisma.$ModeratorPermissionPayload>
/**
 * Model StudentProfile
 * 
 */
export type StudentProfile = $Result.DefaultSelection<Prisma.$StudentProfilePayload>
/**
 * Model TeacherProfile
 * 
 */
export type TeacherProfile = $Result.DefaultSelection<Prisma.$TeacherProfilePayload>
/**
 * Model TuitionPost
 * 
 */
export type TuitionPost = $Result.DefaultSelection<Prisma.$TuitionPostPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Medium: {
  online: 'online',
  offline: 'offline'
};

export type Medium = (typeof Medium)[keyof typeof Medium]


export const Day: {
  monday: 'monday',
  tuesday: 'tuesday',
  wednesday: 'wednesday',
  thursday: 'thursday',
  friday: 'friday',
  saturday: 'saturday',
  sunday: 'sunday'
};

export type Day = (typeof Day)[keyof typeof Day]


export const Role: {
  admin: 'admin',
  moderator: 'moderator',
  teacher: 'teacher',
  student: 'student'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Gender: {
  male: 'male',
  female: 'female',
  other: 'other'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Medium = $Enums.Medium

export const Medium: typeof $Enums.Medium

export type Day = $Enums.Day

export const Day: typeof $Enums.Day

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more TeacherApplications
 * const teacherApplications = await prisma.teacherApplication.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more TeacherApplications
   * const teacherApplications = await prisma.teacherApplication.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.teacherApplication`: Exposes CRUD operations for the **TeacherApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeacherApplications
    * const teacherApplications = await prisma.teacherApplication.findMany()
    * ```
    */
  get teacherApplication(): Prisma.TeacherApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignedTeacherStudent`: Exposes CRUD operations for the **AssignedTeacherStudent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssignedTeacherStudents
    * const assignedTeacherStudents = await prisma.assignedTeacherStudent.findMany()
    * ```
    */
  get assignedTeacherStudent(): Prisma.AssignedTeacherStudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **Assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.AssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classSchedule`: Exposes CRUD operations for the **ClassSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassSchedules
    * const classSchedules = await prisma.classSchedule.findMany()
    * ```
    */
  get classSchedule(): Prisma.ClassScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classScheduleOverride`: Exposes CRUD operations for the **ClassScheduleOverride** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassScheduleOverrides
    * const classScheduleOverrides = await prisma.classScheduleOverride.findMany()
    * ```
    */
  get classScheduleOverride(): Prisma.ClassScheduleOverrideDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lookup`: Exposes CRUD operations for the **Lookup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lookups
    * const lookups = await prisma.lookup.findMany()
    * ```
    */
  get lookup(): Prisma.LookupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moderatorPermission`: Exposes CRUD operations for the **ModeratorPermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModeratorPermissions
    * const moderatorPermissions = await prisma.moderatorPermission.findMany()
    * ```
    */
  get moderatorPermission(): Prisma.ModeratorPermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentProfile`: Exposes CRUD operations for the **StudentProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentProfiles
    * const studentProfiles = await prisma.studentProfile.findMany()
    * ```
    */
  get studentProfile(): Prisma.StudentProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacherProfile`: Exposes CRUD operations for the **TeacherProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeacherProfiles
    * const teacherProfiles = await prisma.teacherProfile.findMany()
    * ```
    */
  get teacherProfile(): Prisma.TeacherProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tuitionPost`: Exposes CRUD operations for the **TuitionPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TuitionPosts
    * const tuitionPosts = await prisma.tuitionPost.findMany()
    * ```
    */
  get tuitionPost(): Prisma.TuitionPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    TeacherApplication: 'TeacherApplication',
    AssignedTeacherStudent: 'AssignedTeacherStudent',
    Assignment: 'Assignment',
    ClassSchedule: 'ClassSchedule',
    ClassScheduleOverride: 'ClassScheduleOverride',
    Lookup: 'Lookup',
    ModeratorPermission: 'ModeratorPermission',
    StudentProfile: 'StudentProfile',
    TeacherProfile: 'TeacherProfile',
    TuitionPost: 'TuitionPost',
    User: 'User',
    RefreshToken: 'RefreshToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "teacherApplication" | "assignedTeacherStudent" | "assignment" | "classSchedule" | "classScheduleOverride" | "lookup" | "moderatorPermission" | "studentProfile" | "teacherProfile" | "tuitionPost" | "user" | "refreshToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TeacherApplication: {
        payload: Prisma.$TeacherApplicationPayload<ExtArgs>
        fields: Prisma.TeacherApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherApplicationPayload>
          }
          findFirst: {
            args: Prisma.TeacherApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherApplicationPayload>
          }
          findMany: {
            args: Prisma.TeacherApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherApplicationPayload>[]
          }
          create: {
            args: Prisma.TeacherApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherApplicationPayload>
          }
          createMany: {
            args: Prisma.TeacherApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherApplicationPayload>[]
          }
          delete: {
            args: Prisma.TeacherApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherApplicationPayload>
          }
          update: {
            args: Prisma.TeacherApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherApplicationPayload>
          }
          deleteMany: {
            args: Prisma.TeacherApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherApplicationPayload>[]
          }
          upsert: {
            args: Prisma.TeacherApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherApplicationPayload>
          }
          aggregate: {
            args: Prisma.TeacherApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacherApplication>
          }
          groupBy: {
            args: Prisma.TeacherApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherApplicationCountAggregateOutputType> | number
          }
        }
      }
      AssignedTeacherStudent: {
        payload: Prisma.$AssignedTeacherStudentPayload<ExtArgs>
        fields: Prisma.AssignedTeacherStudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignedTeacherStudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTeacherStudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignedTeacherStudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTeacherStudentPayload>
          }
          findFirst: {
            args: Prisma.AssignedTeacherStudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTeacherStudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignedTeacherStudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTeacherStudentPayload>
          }
          findMany: {
            args: Prisma.AssignedTeacherStudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTeacherStudentPayload>[]
          }
          create: {
            args: Prisma.AssignedTeacherStudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTeacherStudentPayload>
          }
          createMany: {
            args: Prisma.AssignedTeacherStudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignedTeacherStudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTeacherStudentPayload>[]
          }
          delete: {
            args: Prisma.AssignedTeacherStudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTeacherStudentPayload>
          }
          update: {
            args: Prisma.AssignedTeacherStudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTeacherStudentPayload>
          }
          deleteMany: {
            args: Prisma.AssignedTeacherStudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignedTeacherStudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignedTeacherStudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTeacherStudentPayload>[]
          }
          upsert: {
            args: Prisma.AssignedTeacherStudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignedTeacherStudentPayload>
          }
          aggregate: {
            args: Prisma.AssignedTeacherStudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignedTeacherStudent>
          }
          groupBy: {
            args: Prisma.AssignedTeacherStudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignedTeacherStudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignedTeacherStudentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignedTeacherStudentCountAggregateOutputType> | number
          }
        }
      }
      Assignment: {
        payload: Prisma.$AssignmentPayload<ExtArgs>
        fields: Prisma.AssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findMany: {
            args: Prisma.AssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          create: {
            args: Prisma.AssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          createMany: {
            args: Prisma.AssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          delete: {
            args: Prisma.AssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          update: {
            args: Prisma.AssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          upsert: {
            args: Prisma.AssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.AssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
          }
        }
      }
      ClassSchedule: {
        payload: Prisma.$ClassSchedulePayload<ExtArgs>
        fields: Prisma.ClassScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>
          }
          findFirst: {
            args: Prisma.ClassScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>
          }
          findMany: {
            args: Prisma.ClassScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>[]
          }
          create: {
            args: Prisma.ClassScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>
          }
          createMany: {
            args: Prisma.ClassScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>[]
          }
          delete: {
            args: Prisma.ClassScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>
          }
          update: {
            args: Prisma.ClassScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>
          }
          deleteMany: {
            args: Prisma.ClassScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>[]
          }
          upsert: {
            args: Prisma.ClassScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassSchedulePayload>
          }
          aggregate: {
            args: Prisma.ClassScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassSchedule>
          }
          groupBy: {
            args: Prisma.ClassScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ClassScheduleCountAggregateOutputType> | number
          }
        }
      }
      ClassScheduleOverride: {
        payload: Prisma.$ClassScheduleOverridePayload<ExtArgs>
        fields: Prisma.ClassScheduleOverrideFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassScheduleOverrideFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassScheduleOverridePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassScheduleOverrideFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassScheduleOverridePayload>
          }
          findFirst: {
            args: Prisma.ClassScheduleOverrideFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassScheduleOverridePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassScheduleOverrideFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassScheduleOverridePayload>
          }
          findMany: {
            args: Prisma.ClassScheduleOverrideFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassScheduleOverridePayload>[]
          }
          create: {
            args: Prisma.ClassScheduleOverrideCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassScheduleOverridePayload>
          }
          createMany: {
            args: Prisma.ClassScheduleOverrideCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassScheduleOverrideCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassScheduleOverridePayload>[]
          }
          delete: {
            args: Prisma.ClassScheduleOverrideDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassScheduleOverridePayload>
          }
          update: {
            args: Prisma.ClassScheduleOverrideUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassScheduleOverridePayload>
          }
          deleteMany: {
            args: Prisma.ClassScheduleOverrideDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassScheduleOverrideUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassScheduleOverrideUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassScheduleOverridePayload>[]
          }
          upsert: {
            args: Prisma.ClassScheduleOverrideUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassScheduleOverridePayload>
          }
          aggregate: {
            args: Prisma.ClassScheduleOverrideAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassScheduleOverride>
          }
          groupBy: {
            args: Prisma.ClassScheduleOverrideGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassScheduleOverrideGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassScheduleOverrideCountArgs<ExtArgs>
            result: $Utils.Optional<ClassScheduleOverrideCountAggregateOutputType> | number
          }
        }
      }
      Lookup: {
        payload: Prisma.$LookupPayload<ExtArgs>
        fields: Prisma.LookupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LookupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LookupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LookupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LookupPayload>
          }
          findFirst: {
            args: Prisma.LookupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LookupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LookupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LookupPayload>
          }
          findMany: {
            args: Prisma.LookupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LookupPayload>[]
          }
          create: {
            args: Prisma.LookupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LookupPayload>
          }
          createMany: {
            args: Prisma.LookupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LookupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LookupPayload>[]
          }
          delete: {
            args: Prisma.LookupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LookupPayload>
          }
          update: {
            args: Prisma.LookupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LookupPayload>
          }
          deleteMany: {
            args: Prisma.LookupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LookupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LookupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LookupPayload>[]
          }
          upsert: {
            args: Prisma.LookupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LookupPayload>
          }
          aggregate: {
            args: Prisma.LookupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLookup>
          }
          groupBy: {
            args: Prisma.LookupGroupByArgs<ExtArgs>
            result: $Utils.Optional<LookupGroupByOutputType>[]
          }
          count: {
            args: Prisma.LookupCountArgs<ExtArgs>
            result: $Utils.Optional<LookupCountAggregateOutputType> | number
          }
        }
      }
      ModeratorPermission: {
        payload: Prisma.$ModeratorPermissionPayload<ExtArgs>
        fields: Prisma.ModeratorPermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModeratorPermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeratorPermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModeratorPermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeratorPermissionPayload>
          }
          findFirst: {
            args: Prisma.ModeratorPermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeratorPermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModeratorPermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeratorPermissionPayload>
          }
          findMany: {
            args: Prisma.ModeratorPermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeratorPermissionPayload>[]
          }
          create: {
            args: Prisma.ModeratorPermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeratorPermissionPayload>
          }
          createMany: {
            args: Prisma.ModeratorPermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModeratorPermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeratorPermissionPayload>[]
          }
          delete: {
            args: Prisma.ModeratorPermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeratorPermissionPayload>
          }
          update: {
            args: Prisma.ModeratorPermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeratorPermissionPayload>
          }
          deleteMany: {
            args: Prisma.ModeratorPermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModeratorPermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModeratorPermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeratorPermissionPayload>[]
          }
          upsert: {
            args: Prisma.ModeratorPermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModeratorPermissionPayload>
          }
          aggregate: {
            args: Prisma.ModeratorPermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModeratorPermission>
          }
          groupBy: {
            args: Prisma.ModeratorPermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModeratorPermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModeratorPermissionCountArgs<ExtArgs>
            result: $Utils.Optional<ModeratorPermissionCountAggregateOutputType> | number
          }
        }
      }
      StudentProfile: {
        payload: Prisma.$StudentProfilePayload<ExtArgs>
        fields: Prisma.StudentProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          findFirst: {
            args: Prisma.StudentProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          findMany: {
            args: Prisma.StudentProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          create: {
            args: Prisma.StudentProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          createMany: {
            args: Prisma.StudentProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          delete: {
            args: Prisma.StudentProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          update: {
            args: Prisma.StudentProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          deleteMany: {
            args: Prisma.StudentProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          upsert: {
            args: Prisma.StudentProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          aggregate: {
            args: Prisma.StudentProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentProfile>
          }
          groupBy: {
            args: Prisma.StudentProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentProfileCountArgs<ExtArgs>
            result: $Utils.Optional<StudentProfileCountAggregateOutputType> | number
          }
        }
      }
      TeacherProfile: {
        payload: Prisma.$TeacherProfilePayload<ExtArgs>
        fields: Prisma.TeacherProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherProfilePayload>
          }
          findFirst: {
            args: Prisma.TeacherProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherProfilePayload>
          }
          findMany: {
            args: Prisma.TeacherProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherProfilePayload>[]
          }
          create: {
            args: Prisma.TeacherProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherProfilePayload>
          }
          createMany: {
            args: Prisma.TeacherProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherProfilePayload>[]
          }
          delete: {
            args: Prisma.TeacherProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherProfilePayload>
          }
          update: {
            args: Prisma.TeacherProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherProfilePayload>
          }
          deleteMany: {
            args: Prisma.TeacherProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherProfilePayload>[]
          }
          upsert: {
            args: Prisma.TeacherProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherProfilePayload>
          }
          aggregate: {
            args: Prisma.TeacherProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacherProfile>
          }
          groupBy: {
            args: Prisma.TeacherProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherProfileCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherProfileCountAggregateOutputType> | number
          }
        }
      }
      TuitionPost: {
        payload: Prisma.$TuitionPostPayload<ExtArgs>
        fields: Prisma.TuitionPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TuitionPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TuitionPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionPostPayload>
          }
          findFirst: {
            args: Prisma.TuitionPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TuitionPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionPostPayload>
          }
          findMany: {
            args: Prisma.TuitionPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionPostPayload>[]
          }
          create: {
            args: Prisma.TuitionPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionPostPayload>
          }
          createMany: {
            args: Prisma.TuitionPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TuitionPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionPostPayload>[]
          }
          delete: {
            args: Prisma.TuitionPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionPostPayload>
          }
          update: {
            args: Prisma.TuitionPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionPostPayload>
          }
          deleteMany: {
            args: Prisma.TuitionPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TuitionPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TuitionPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionPostPayload>[]
          }
          upsert: {
            args: Prisma.TuitionPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TuitionPostPayload>
          }
          aggregate: {
            args: Prisma.TuitionPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTuitionPost>
          }
          groupBy: {
            args: Prisma.TuitionPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<TuitionPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.TuitionPostCountArgs<ExtArgs>
            result: $Utils.Optional<TuitionPostCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    teacherApplication?: TeacherApplicationOmit
    assignedTeacherStudent?: AssignedTeacherStudentOmit
    assignment?: AssignmentOmit
    classSchedule?: ClassScheduleOmit
    classScheduleOverride?: ClassScheduleOverrideOmit
    lookup?: LookupOmit
    moderatorPermission?: ModeratorPermissionOmit
    studentProfile?: StudentProfileOmit
    teacherProfile?: TeacherProfileOmit
    tuitionPost?: TuitionPostOmit
    user?: UserOmit
    refreshToken?: RefreshTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ClassScheduleCountOutputType
   */

  export type ClassScheduleCountOutputType = {
    overrides: number
  }

  export type ClassScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    overrides?: boolean | ClassScheduleCountOutputTypeCountOverridesArgs
  }

  // Custom InputTypes
  /**
   * ClassScheduleCountOutputType without action
   */
  export type ClassScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassScheduleCountOutputType
     */
    select?: ClassScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassScheduleCountOutputType without action
   */
  export type ClassScheduleCountOutputTypeCountOverridesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassScheduleOverrideWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    refreshTokens: number
    teacherAssignments: number
    studentAssignments: number
    teacherHomework: number
    studentHomework: number
    tuitionPosts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
    teacherAssignments?: boolean | UserCountOutputTypeCountTeacherAssignmentsArgs
    studentAssignments?: boolean | UserCountOutputTypeCountStudentAssignmentsArgs
    teacherHomework?: boolean | UserCountOutputTypeCountTeacherHomeworkArgs
    studentHomework?: boolean | UserCountOutputTypeCountStudentHomeworkArgs
    tuitionPosts?: boolean | UserCountOutputTypeCountTuitionPostsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeacherAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignedTeacherStudentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudentAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignedTeacherStudentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeacherHomeworkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudentHomeworkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTuitionPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TuitionPostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TeacherApplication
   */

  export type AggregateTeacherApplication = {
    _count: TeacherApplicationCountAggregateOutputType | null
    _avg: TeacherApplicationAvgAggregateOutputType | null
    _sum: TeacherApplicationSumAggregateOutputType | null
    _min: TeacherApplicationMinAggregateOutputType | null
    _max: TeacherApplicationMaxAggregateOutputType | null
  }

  export type TeacherApplicationAvgAggregateOutputType = {
    id: number | null
    tuitionPostId: number | null
    teacherId: number | null
    status: number | null
  }

  export type TeacherApplicationSumAggregateOutputType = {
    id: number | null
    tuitionPostId: number | null
    teacherId: number | null
    status: number | null
  }

  export type TeacherApplicationMinAggregateOutputType = {
    id: number | null
    tuitionPostId: number | null
    teacherId: number | null
    coverNote: string | null
    status: number | null
    appliedAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherApplicationMaxAggregateOutputType = {
    id: number | null
    tuitionPostId: number | null
    teacherId: number | null
    coverNote: string | null
    status: number | null
    appliedAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherApplicationCountAggregateOutputType = {
    id: number
    tuitionPostId: number
    teacherId: number
    coverNote: number
    status: number
    appliedAt: number
    updatedAt: number
    _all: number
  }


  export type TeacherApplicationAvgAggregateInputType = {
    id?: true
    tuitionPostId?: true
    teacherId?: true
    status?: true
  }

  export type TeacherApplicationSumAggregateInputType = {
    id?: true
    tuitionPostId?: true
    teacherId?: true
    status?: true
  }

  export type TeacherApplicationMinAggregateInputType = {
    id?: true
    tuitionPostId?: true
    teacherId?: true
    coverNote?: true
    status?: true
    appliedAt?: true
    updatedAt?: true
  }

  export type TeacherApplicationMaxAggregateInputType = {
    id?: true
    tuitionPostId?: true
    teacherId?: true
    coverNote?: true
    status?: true
    appliedAt?: true
    updatedAt?: true
  }

  export type TeacherApplicationCountAggregateInputType = {
    id?: true
    tuitionPostId?: true
    teacherId?: true
    coverNote?: true
    status?: true
    appliedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeacherApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherApplication to aggregate.
     */
    where?: TeacherApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherApplications to fetch.
     */
    orderBy?: TeacherApplicationOrderByWithRelationInput | TeacherApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeacherApplications
    **/
    _count?: true | TeacherApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherApplicationMaxAggregateInputType
  }

  export type GetTeacherApplicationAggregateType<T extends TeacherApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacherApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacherApplication[P]>
      : GetScalarType<T[P], AggregateTeacherApplication[P]>
  }




  export type TeacherApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherApplicationWhereInput
    orderBy?: TeacherApplicationOrderByWithAggregationInput | TeacherApplicationOrderByWithAggregationInput[]
    by: TeacherApplicationScalarFieldEnum[] | TeacherApplicationScalarFieldEnum
    having?: TeacherApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherApplicationCountAggregateInputType | true
    _avg?: TeacherApplicationAvgAggregateInputType
    _sum?: TeacherApplicationSumAggregateInputType
    _min?: TeacherApplicationMinAggregateInputType
    _max?: TeacherApplicationMaxAggregateInputType
  }

  export type TeacherApplicationGroupByOutputType = {
    id: number
    tuitionPostId: number
    teacherId: number
    coverNote: string | null
    status: number
    appliedAt: Date
    updatedAt: Date
    _count: TeacherApplicationCountAggregateOutputType | null
    _avg: TeacherApplicationAvgAggregateOutputType | null
    _sum: TeacherApplicationSumAggregateOutputType | null
    _min: TeacherApplicationMinAggregateOutputType | null
    _max: TeacherApplicationMaxAggregateOutputType | null
  }

  type GetTeacherApplicationGroupByPayload<T extends TeacherApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherApplicationGroupByOutputType[P]>
        }
      >
    >


  export type TeacherApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tuitionPostId?: boolean
    teacherId?: boolean
    coverNote?: boolean
    status?: boolean
    appliedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["teacherApplication"]>

  export type TeacherApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tuitionPostId?: boolean
    teacherId?: boolean
    coverNote?: boolean
    status?: boolean
    appliedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["teacherApplication"]>

  export type TeacherApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tuitionPostId?: boolean
    teacherId?: boolean
    coverNote?: boolean
    status?: boolean
    appliedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["teacherApplication"]>

  export type TeacherApplicationSelectScalar = {
    id?: boolean
    tuitionPostId?: boolean
    teacherId?: boolean
    coverNote?: boolean
    status?: boolean
    appliedAt?: boolean
    updatedAt?: boolean
  }

  export type TeacherApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tuitionPostId" | "teacherId" | "coverNote" | "status" | "appliedAt" | "updatedAt", ExtArgs["result"]["teacherApplication"]>

  export type $TeacherApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeacherApplication"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tuitionPostId: number
      teacherId: number
      coverNote: string | null
      status: number
      appliedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teacherApplication"]>
    composites: {}
  }

  type TeacherApplicationGetPayload<S extends boolean | null | undefined | TeacherApplicationDefaultArgs> = $Result.GetResult<Prisma.$TeacherApplicationPayload, S>

  type TeacherApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherApplicationCountAggregateInputType | true
    }

  export interface TeacherApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeacherApplication'], meta: { name: 'TeacherApplication' } }
    /**
     * Find zero or one TeacherApplication that matches the filter.
     * @param {TeacherApplicationFindUniqueArgs} args - Arguments to find a TeacherApplication
     * @example
     * // Get one TeacherApplication
     * const teacherApplication = await prisma.teacherApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherApplicationFindUniqueArgs>(args: SelectSubset<T, TeacherApplicationFindUniqueArgs<ExtArgs>>): Prisma__TeacherApplicationClient<$Result.GetResult<Prisma.$TeacherApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeacherApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherApplicationFindUniqueOrThrowArgs} args - Arguments to find a TeacherApplication
     * @example
     * // Get one TeacherApplication
     * const teacherApplication = await prisma.teacherApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherApplicationClient<$Result.GetResult<Prisma.$TeacherApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherApplicationFindFirstArgs} args - Arguments to find a TeacherApplication
     * @example
     * // Get one TeacherApplication
     * const teacherApplication = await prisma.teacherApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherApplicationFindFirstArgs>(args?: SelectSubset<T, TeacherApplicationFindFirstArgs<ExtArgs>>): Prisma__TeacherApplicationClient<$Result.GetResult<Prisma.$TeacherApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherApplicationFindFirstOrThrowArgs} args - Arguments to find a TeacherApplication
     * @example
     * // Get one TeacherApplication
     * const teacherApplication = await prisma.teacherApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherApplicationClient<$Result.GetResult<Prisma.$TeacherApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeacherApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherApplications
     * const teacherApplications = await prisma.teacherApplication.findMany()
     * 
     * // Get first 10 TeacherApplications
     * const teacherApplications = await prisma.teacherApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherApplicationWithIdOnly = await prisma.teacherApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherApplicationFindManyArgs>(args?: SelectSubset<T, TeacherApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeacherApplication.
     * @param {TeacherApplicationCreateArgs} args - Arguments to create a TeacherApplication.
     * @example
     * // Create one TeacherApplication
     * const TeacherApplication = await prisma.teacherApplication.create({
     *   data: {
     *     // ... data to create a TeacherApplication
     *   }
     * })
     * 
     */
    create<T extends TeacherApplicationCreateArgs>(args: SelectSubset<T, TeacherApplicationCreateArgs<ExtArgs>>): Prisma__TeacherApplicationClient<$Result.GetResult<Prisma.$TeacherApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeacherApplications.
     * @param {TeacherApplicationCreateManyArgs} args - Arguments to create many TeacherApplications.
     * @example
     * // Create many TeacherApplications
     * const teacherApplication = await prisma.teacherApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherApplicationCreateManyArgs>(args?: SelectSubset<T, TeacherApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeacherApplications and returns the data saved in the database.
     * @param {TeacherApplicationCreateManyAndReturnArgs} args - Arguments to create many TeacherApplications.
     * @example
     * // Create many TeacherApplications
     * const teacherApplication = await prisma.teacherApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeacherApplications and only return the `id`
     * const teacherApplicationWithIdOnly = await prisma.teacherApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeacherApplication.
     * @param {TeacherApplicationDeleteArgs} args - Arguments to delete one TeacherApplication.
     * @example
     * // Delete one TeacherApplication
     * const TeacherApplication = await prisma.teacherApplication.delete({
     *   where: {
     *     // ... filter to delete one TeacherApplication
     *   }
     * })
     * 
     */
    delete<T extends TeacherApplicationDeleteArgs>(args: SelectSubset<T, TeacherApplicationDeleteArgs<ExtArgs>>): Prisma__TeacherApplicationClient<$Result.GetResult<Prisma.$TeacherApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeacherApplication.
     * @param {TeacherApplicationUpdateArgs} args - Arguments to update one TeacherApplication.
     * @example
     * // Update one TeacherApplication
     * const teacherApplication = await prisma.teacherApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherApplicationUpdateArgs>(args: SelectSubset<T, TeacherApplicationUpdateArgs<ExtArgs>>): Prisma__TeacherApplicationClient<$Result.GetResult<Prisma.$TeacherApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeacherApplications.
     * @param {TeacherApplicationDeleteManyArgs} args - Arguments to filter TeacherApplications to delete.
     * @example
     * // Delete a few TeacherApplications
     * const { count } = await prisma.teacherApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherApplicationDeleteManyArgs>(args?: SelectSubset<T, TeacherApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherApplications
     * const teacherApplication = await prisma.teacherApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherApplicationUpdateManyArgs>(args: SelectSubset<T, TeacherApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherApplications and returns the data updated in the database.
     * @param {TeacherApplicationUpdateManyAndReturnArgs} args - Arguments to update many TeacherApplications.
     * @example
     * // Update many TeacherApplications
     * const teacherApplication = await prisma.teacherApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeacherApplications and only return the `id`
     * const teacherApplicationWithIdOnly = await prisma.teacherApplication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeacherApplication.
     * @param {TeacherApplicationUpsertArgs} args - Arguments to update or create a TeacherApplication.
     * @example
     * // Update or create a TeacherApplication
     * const teacherApplication = await prisma.teacherApplication.upsert({
     *   create: {
     *     // ... data to create a TeacherApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherApplication we want to update
     *   }
     * })
     */
    upsert<T extends TeacherApplicationUpsertArgs>(args: SelectSubset<T, TeacherApplicationUpsertArgs<ExtArgs>>): Prisma__TeacherApplicationClient<$Result.GetResult<Prisma.$TeacherApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeacherApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherApplicationCountArgs} args - Arguments to filter TeacherApplications to count.
     * @example
     * // Count the number of TeacherApplications
     * const count = await prisma.teacherApplication.count({
     *   where: {
     *     // ... the filter for the TeacherApplications we want to count
     *   }
     * })
    **/
    count<T extends TeacherApplicationCountArgs>(
      args?: Subset<T, TeacherApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeacherApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherApplicationAggregateArgs>(args: Subset<T, TeacherApplicationAggregateArgs>): Prisma.PrismaPromise<GetTeacherApplicationAggregateType<T>>

    /**
     * Group by TeacherApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherApplicationGroupByArgs} args - Group by arguments.
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
      T extends TeacherApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherApplicationGroupByArgs['orderBy'] }
        : { orderBy?: TeacherApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeacherApplication model
   */
  readonly fields: TeacherApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeacherApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the TeacherApplication model
   */
  interface TeacherApplicationFieldRefs {
    readonly id: FieldRef<"TeacherApplication", 'Int'>
    readonly tuitionPostId: FieldRef<"TeacherApplication", 'Int'>
    readonly teacherId: FieldRef<"TeacherApplication", 'Int'>
    readonly coverNote: FieldRef<"TeacherApplication", 'String'>
    readonly status: FieldRef<"TeacherApplication", 'Int'>
    readonly appliedAt: FieldRef<"TeacherApplication", 'DateTime'>
    readonly updatedAt: FieldRef<"TeacherApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeacherApplication findUnique
   */
  export type TeacherApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherApplication
     */
    select?: TeacherApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherApplication
     */
    omit?: TeacherApplicationOmit<ExtArgs> | null
    /**
     * Filter, which TeacherApplication to fetch.
     */
    where: TeacherApplicationWhereUniqueInput
  }

  /**
   * TeacherApplication findUniqueOrThrow
   */
  export type TeacherApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherApplication
     */
    select?: TeacherApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherApplication
     */
    omit?: TeacherApplicationOmit<ExtArgs> | null
    /**
     * Filter, which TeacherApplication to fetch.
     */
    where: TeacherApplicationWhereUniqueInput
  }

  /**
   * TeacherApplication findFirst
   */
  export type TeacherApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherApplication
     */
    select?: TeacherApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherApplication
     */
    omit?: TeacherApplicationOmit<ExtArgs> | null
    /**
     * Filter, which TeacherApplication to fetch.
     */
    where?: TeacherApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherApplications to fetch.
     */
    orderBy?: TeacherApplicationOrderByWithRelationInput | TeacherApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherApplications.
     */
    cursor?: TeacherApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherApplications.
     */
    distinct?: TeacherApplicationScalarFieldEnum | TeacherApplicationScalarFieldEnum[]
  }

  /**
   * TeacherApplication findFirstOrThrow
   */
  export type TeacherApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherApplication
     */
    select?: TeacherApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherApplication
     */
    omit?: TeacherApplicationOmit<ExtArgs> | null
    /**
     * Filter, which TeacherApplication to fetch.
     */
    where?: TeacherApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherApplications to fetch.
     */
    orderBy?: TeacherApplicationOrderByWithRelationInput | TeacherApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherApplications.
     */
    cursor?: TeacherApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherApplications.
     */
    distinct?: TeacherApplicationScalarFieldEnum | TeacherApplicationScalarFieldEnum[]
  }

  /**
   * TeacherApplication findMany
   */
  export type TeacherApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherApplication
     */
    select?: TeacherApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherApplication
     */
    omit?: TeacherApplicationOmit<ExtArgs> | null
    /**
     * Filter, which TeacherApplications to fetch.
     */
    where?: TeacherApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherApplications to fetch.
     */
    orderBy?: TeacherApplicationOrderByWithRelationInput | TeacherApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeacherApplications.
     */
    cursor?: TeacherApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherApplications.
     */
    distinct?: TeacherApplicationScalarFieldEnum | TeacherApplicationScalarFieldEnum[]
  }

  /**
   * TeacherApplication create
   */
  export type TeacherApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherApplication
     */
    select?: TeacherApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherApplication
     */
    omit?: TeacherApplicationOmit<ExtArgs> | null
    /**
     * The data needed to create a TeacherApplication.
     */
    data: XOR<TeacherApplicationCreateInput, TeacherApplicationUncheckedCreateInput>
  }

  /**
   * TeacherApplication createMany
   */
  export type TeacherApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherApplications.
     */
    data: TeacherApplicationCreateManyInput | TeacherApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeacherApplication createManyAndReturn
   */
  export type TeacherApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherApplication
     */
    select?: TeacherApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherApplication
     */
    omit?: TeacherApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many TeacherApplications.
     */
    data: TeacherApplicationCreateManyInput | TeacherApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeacherApplication update
   */
  export type TeacherApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherApplication
     */
    select?: TeacherApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherApplication
     */
    omit?: TeacherApplicationOmit<ExtArgs> | null
    /**
     * The data needed to update a TeacherApplication.
     */
    data: XOR<TeacherApplicationUpdateInput, TeacherApplicationUncheckedUpdateInput>
    /**
     * Choose, which TeacherApplication to update.
     */
    where: TeacherApplicationWhereUniqueInput
  }

  /**
   * TeacherApplication updateMany
   */
  export type TeacherApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherApplications.
     */
    data: XOR<TeacherApplicationUpdateManyMutationInput, TeacherApplicationUncheckedUpdateManyInput>
    /**
     * Filter which TeacherApplications to update
     */
    where?: TeacherApplicationWhereInput
    /**
     * Limit how many TeacherApplications to update.
     */
    limit?: number
  }

  /**
   * TeacherApplication updateManyAndReturn
   */
  export type TeacherApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherApplication
     */
    select?: TeacherApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherApplication
     */
    omit?: TeacherApplicationOmit<ExtArgs> | null
    /**
     * The data used to update TeacherApplications.
     */
    data: XOR<TeacherApplicationUpdateManyMutationInput, TeacherApplicationUncheckedUpdateManyInput>
    /**
     * Filter which TeacherApplications to update
     */
    where?: TeacherApplicationWhereInput
    /**
     * Limit how many TeacherApplications to update.
     */
    limit?: number
  }

  /**
   * TeacherApplication upsert
   */
  export type TeacherApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherApplication
     */
    select?: TeacherApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherApplication
     */
    omit?: TeacherApplicationOmit<ExtArgs> | null
    /**
     * The filter to search for the TeacherApplication to update in case it exists.
     */
    where: TeacherApplicationWhereUniqueInput
    /**
     * In case the TeacherApplication found by the `where` argument doesn't exist, create a new TeacherApplication with this data.
     */
    create: XOR<TeacherApplicationCreateInput, TeacherApplicationUncheckedCreateInput>
    /**
     * In case the TeacherApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherApplicationUpdateInput, TeacherApplicationUncheckedUpdateInput>
  }

  /**
   * TeacherApplication delete
   */
  export type TeacherApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherApplication
     */
    select?: TeacherApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherApplication
     */
    omit?: TeacherApplicationOmit<ExtArgs> | null
    /**
     * Filter which TeacherApplication to delete.
     */
    where: TeacherApplicationWhereUniqueInput
  }

  /**
   * TeacherApplication deleteMany
   */
  export type TeacherApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherApplications to delete
     */
    where?: TeacherApplicationWhereInput
    /**
     * Limit how many TeacherApplications to delete.
     */
    limit?: number
  }

  /**
   * TeacherApplication without action
   */
  export type TeacherApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherApplication
     */
    select?: TeacherApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherApplication
     */
    omit?: TeacherApplicationOmit<ExtArgs> | null
  }


  /**
   * Model AssignedTeacherStudent
   */

  export type AggregateAssignedTeacherStudent = {
    _count: AssignedTeacherStudentCountAggregateOutputType | null
    _avg: AssignedTeacherStudentAvgAggregateOutputType | null
    _sum: AssignedTeacherStudentSumAggregateOutputType | null
    _min: AssignedTeacherStudentMinAggregateOutputType | null
    _max: AssignedTeacherStudentMaxAggregateOutputType | null
  }

  export type AssignedTeacherStudentAvgAggregateOutputType = {
    id: number | null
    tuitionPostId: number | null
    teacherId: number | null
    studentId: number | null
    assignedBy: number | null
  }

  export type AssignedTeacherStudentSumAggregateOutputType = {
    id: number | null
    tuitionPostId: number | null
    teacherId: number | null
    studentId: number | null
    assignedBy: number | null
  }

  export type AssignedTeacherStudentMinAggregateOutputType = {
    id: number | null
    tuitionPostId: number | null
    teacherId: number | null
    studentId: number | null
    assignedBy: number | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssignedTeacherStudentMaxAggregateOutputType = {
    id: number | null
    tuitionPostId: number | null
    teacherId: number | null
    studentId: number | null
    assignedBy: number | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssignedTeacherStudentCountAggregateOutputType = {
    id: number
    tuitionPostId: number
    teacherId: number
    studentId: number
    assignedBy: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssignedTeacherStudentAvgAggregateInputType = {
    id?: true
    tuitionPostId?: true
    teacherId?: true
    studentId?: true
    assignedBy?: true
  }

  export type AssignedTeacherStudentSumAggregateInputType = {
    id?: true
    tuitionPostId?: true
    teacherId?: true
    studentId?: true
    assignedBy?: true
  }

  export type AssignedTeacherStudentMinAggregateInputType = {
    id?: true
    tuitionPostId?: true
    teacherId?: true
    studentId?: true
    assignedBy?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssignedTeacherStudentMaxAggregateInputType = {
    id?: true
    tuitionPostId?: true
    teacherId?: true
    studentId?: true
    assignedBy?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssignedTeacherStudentCountAggregateInputType = {
    id?: true
    tuitionPostId?: true
    teacherId?: true
    studentId?: true
    assignedBy?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssignedTeacherStudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssignedTeacherStudent to aggregate.
     */
    where?: AssignedTeacherStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignedTeacherStudents to fetch.
     */
    orderBy?: AssignedTeacherStudentOrderByWithRelationInput | AssignedTeacherStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignedTeacherStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignedTeacherStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignedTeacherStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssignedTeacherStudents
    **/
    _count?: true | AssignedTeacherStudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssignedTeacherStudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssignedTeacherStudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignedTeacherStudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignedTeacherStudentMaxAggregateInputType
  }

  export type GetAssignedTeacherStudentAggregateType<T extends AssignedTeacherStudentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignedTeacherStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignedTeacherStudent[P]>
      : GetScalarType<T[P], AggregateAssignedTeacherStudent[P]>
  }




  export type AssignedTeacherStudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignedTeacherStudentWhereInput
    orderBy?: AssignedTeacherStudentOrderByWithAggregationInput | AssignedTeacherStudentOrderByWithAggregationInput[]
    by: AssignedTeacherStudentScalarFieldEnum[] | AssignedTeacherStudentScalarFieldEnum
    having?: AssignedTeacherStudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignedTeacherStudentCountAggregateInputType | true
    _avg?: AssignedTeacherStudentAvgAggregateInputType
    _sum?: AssignedTeacherStudentSumAggregateInputType
    _min?: AssignedTeacherStudentMinAggregateInputType
    _max?: AssignedTeacherStudentMaxAggregateInputType
  }

  export type AssignedTeacherStudentGroupByOutputType = {
    id: number
    tuitionPostId: number
    teacherId: number
    studentId: number
    assignedBy: number
    startDate: Date
    endDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AssignedTeacherStudentCountAggregateOutputType | null
    _avg: AssignedTeacherStudentAvgAggregateOutputType | null
    _sum: AssignedTeacherStudentSumAggregateOutputType | null
    _min: AssignedTeacherStudentMinAggregateOutputType | null
    _max: AssignedTeacherStudentMaxAggregateOutputType | null
  }

  type GetAssignedTeacherStudentGroupByPayload<T extends AssignedTeacherStudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignedTeacherStudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignedTeacherStudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignedTeacherStudentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignedTeacherStudentGroupByOutputType[P]>
        }
      >
    >


  export type AssignedTeacherStudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tuitionPostId?: boolean
    teacherId?: boolean
    studentId?: boolean
    assignedBy?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tuitionPost?: boolean | TuitionPostDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    classSchedule?: boolean | AssignedTeacherStudent$classScheduleArgs<ExtArgs>
  }, ExtArgs["result"]["assignedTeacherStudent"]>

  export type AssignedTeacherStudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tuitionPostId?: boolean
    teacherId?: boolean
    studentId?: boolean
    assignedBy?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tuitionPost?: boolean | TuitionPostDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignedTeacherStudent"]>

  export type AssignedTeacherStudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tuitionPostId?: boolean
    teacherId?: boolean
    studentId?: boolean
    assignedBy?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tuitionPost?: boolean | TuitionPostDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignedTeacherStudent"]>

  export type AssignedTeacherStudentSelectScalar = {
    id?: boolean
    tuitionPostId?: boolean
    teacherId?: boolean
    studentId?: boolean
    assignedBy?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssignedTeacherStudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tuitionPostId" | "teacherId" | "studentId" | "assignedBy" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["assignedTeacherStudent"]>
  export type AssignedTeacherStudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tuitionPost?: boolean | TuitionPostDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    classSchedule?: boolean | AssignedTeacherStudent$classScheduleArgs<ExtArgs>
  }
  export type AssignedTeacherStudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tuitionPost?: boolean | TuitionPostDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssignedTeacherStudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tuitionPost?: boolean | TuitionPostDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AssignedTeacherStudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssignedTeacherStudent"
    objects: {
      tuitionPost: Prisma.$TuitionPostPayload<ExtArgs>
      teacher: Prisma.$UserPayload<ExtArgs>
      student: Prisma.$UserPayload<ExtArgs>
      classSchedule: Prisma.$ClassSchedulePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tuitionPostId: number
      teacherId: number
      studentId: number
      assignedBy: number
      startDate: Date
      endDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["assignedTeacherStudent"]>
    composites: {}
  }

  type AssignedTeacherStudentGetPayload<S extends boolean | null | undefined | AssignedTeacherStudentDefaultArgs> = $Result.GetResult<Prisma.$AssignedTeacherStudentPayload, S>

  type AssignedTeacherStudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignedTeacherStudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignedTeacherStudentCountAggregateInputType | true
    }

  export interface AssignedTeacherStudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssignedTeacherStudent'], meta: { name: 'AssignedTeacherStudent' } }
    /**
     * Find zero or one AssignedTeacherStudent that matches the filter.
     * @param {AssignedTeacherStudentFindUniqueArgs} args - Arguments to find a AssignedTeacherStudent
     * @example
     * // Get one AssignedTeacherStudent
     * const assignedTeacherStudent = await prisma.assignedTeacherStudent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignedTeacherStudentFindUniqueArgs>(args: SelectSubset<T, AssignedTeacherStudentFindUniqueArgs<ExtArgs>>): Prisma__AssignedTeacherStudentClient<$Result.GetResult<Prisma.$AssignedTeacherStudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssignedTeacherStudent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignedTeacherStudentFindUniqueOrThrowArgs} args - Arguments to find a AssignedTeacherStudent
     * @example
     * // Get one AssignedTeacherStudent
     * const assignedTeacherStudent = await prisma.assignedTeacherStudent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignedTeacherStudentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignedTeacherStudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignedTeacherStudentClient<$Result.GetResult<Prisma.$AssignedTeacherStudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignedTeacherStudent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedTeacherStudentFindFirstArgs} args - Arguments to find a AssignedTeacherStudent
     * @example
     * // Get one AssignedTeacherStudent
     * const assignedTeacherStudent = await prisma.assignedTeacherStudent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignedTeacherStudentFindFirstArgs>(args?: SelectSubset<T, AssignedTeacherStudentFindFirstArgs<ExtArgs>>): Prisma__AssignedTeacherStudentClient<$Result.GetResult<Prisma.$AssignedTeacherStudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssignedTeacherStudent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedTeacherStudentFindFirstOrThrowArgs} args - Arguments to find a AssignedTeacherStudent
     * @example
     * // Get one AssignedTeacherStudent
     * const assignedTeacherStudent = await prisma.assignedTeacherStudent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignedTeacherStudentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignedTeacherStudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignedTeacherStudentClient<$Result.GetResult<Prisma.$AssignedTeacherStudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssignedTeacherStudents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedTeacherStudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssignedTeacherStudents
     * const assignedTeacherStudents = await prisma.assignedTeacherStudent.findMany()
     * 
     * // Get first 10 AssignedTeacherStudents
     * const assignedTeacherStudents = await prisma.assignedTeacherStudent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignedTeacherStudentWithIdOnly = await prisma.assignedTeacherStudent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignedTeacherStudentFindManyArgs>(args?: SelectSubset<T, AssignedTeacherStudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignedTeacherStudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssignedTeacherStudent.
     * @param {AssignedTeacherStudentCreateArgs} args - Arguments to create a AssignedTeacherStudent.
     * @example
     * // Create one AssignedTeacherStudent
     * const AssignedTeacherStudent = await prisma.assignedTeacherStudent.create({
     *   data: {
     *     // ... data to create a AssignedTeacherStudent
     *   }
     * })
     * 
     */
    create<T extends AssignedTeacherStudentCreateArgs>(args: SelectSubset<T, AssignedTeacherStudentCreateArgs<ExtArgs>>): Prisma__AssignedTeacherStudentClient<$Result.GetResult<Prisma.$AssignedTeacherStudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssignedTeacherStudents.
     * @param {AssignedTeacherStudentCreateManyArgs} args - Arguments to create many AssignedTeacherStudents.
     * @example
     * // Create many AssignedTeacherStudents
     * const assignedTeacherStudent = await prisma.assignedTeacherStudent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignedTeacherStudentCreateManyArgs>(args?: SelectSubset<T, AssignedTeacherStudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssignedTeacherStudents and returns the data saved in the database.
     * @param {AssignedTeacherStudentCreateManyAndReturnArgs} args - Arguments to create many AssignedTeacherStudents.
     * @example
     * // Create many AssignedTeacherStudents
     * const assignedTeacherStudent = await prisma.assignedTeacherStudent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssignedTeacherStudents and only return the `id`
     * const assignedTeacherStudentWithIdOnly = await prisma.assignedTeacherStudent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignedTeacherStudentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignedTeacherStudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignedTeacherStudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssignedTeacherStudent.
     * @param {AssignedTeacherStudentDeleteArgs} args - Arguments to delete one AssignedTeacherStudent.
     * @example
     * // Delete one AssignedTeacherStudent
     * const AssignedTeacherStudent = await prisma.assignedTeacherStudent.delete({
     *   where: {
     *     // ... filter to delete one AssignedTeacherStudent
     *   }
     * })
     * 
     */
    delete<T extends AssignedTeacherStudentDeleteArgs>(args: SelectSubset<T, AssignedTeacherStudentDeleteArgs<ExtArgs>>): Prisma__AssignedTeacherStudentClient<$Result.GetResult<Prisma.$AssignedTeacherStudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssignedTeacherStudent.
     * @param {AssignedTeacherStudentUpdateArgs} args - Arguments to update one AssignedTeacherStudent.
     * @example
     * // Update one AssignedTeacherStudent
     * const assignedTeacherStudent = await prisma.assignedTeacherStudent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignedTeacherStudentUpdateArgs>(args: SelectSubset<T, AssignedTeacherStudentUpdateArgs<ExtArgs>>): Prisma__AssignedTeacherStudentClient<$Result.GetResult<Prisma.$AssignedTeacherStudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssignedTeacherStudents.
     * @param {AssignedTeacherStudentDeleteManyArgs} args - Arguments to filter AssignedTeacherStudents to delete.
     * @example
     * // Delete a few AssignedTeacherStudents
     * const { count } = await prisma.assignedTeacherStudent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignedTeacherStudentDeleteManyArgs>(args?: SelectSubset<T, AssignedTeacherStudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignedTeacherStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedTeacherStudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssignedTeacherStudents
     * const assignedTeacherStudent = await prisma.assignedTeacherStudent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignedTeacherStudentUpdateManyArgs>(args: SelectSubset<T, AssignedTeacherStudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssignedTeacherStudents and returns the data updated in the database.
     * @param {AssignedTeacherStudentUpdateManyAndReturnArgs} args - Arguments to update many AssignedTeacherStudents.
     * @example
     * // Update many AssignedTeacherStudents
     * const assignedTeacherStudent = await prisma.assignedTeacherStudent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssignedTeacherStudents and only return the `id`
     * const assignedTeacherStudentWithIdOnly = await prisma.assignedTeacherStudent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssignedTeacherStudentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignedTeacherStudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignedTeacherStudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssignedTeacherStudent.
     * @param {AssignedTeacherStudentUpsertArgs} args - Arguments to update or create a AssignedTeacherStudent.
     * @example
     * // Update or create a AssignedTeacherStudent
     * const assignedTeacherStudent = await prisma.assignedTeacherStudent.upsert({
     *   create: {
     *     // ... data to create a AssignedTeacherStudent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssignedTeacherStudent we want to update
     *   }
     * })
     */
    upsert<T extends AssignedTeacherStudentUpsertArgs>(args: SelectSubset<T, AssignedTeacherStudentUpsertArgs<ExtArgs>>): Prisma__AssignedTeacherStudentClient<$Result.GetResult<Prisma.$AssignedTeacherStudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssignedTeacherStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedTeacherStudentCountArgs} args - Arguments to filter AssignedTeacherStudents to count.
     * @example
     * // Count the number of AssignedTeacherStudents
     * const count = await prisma.assignedTeacherStudent.count({
     *   where: {
     *     // ... the filter for the AssignedTeacherStudents we want to count
     *   }
     * })
    **/
    count<T extends AssignedTeacherStudentCountArgs>(
      args?: Subset<T, AssignedTeacherStudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignedTeacherStudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssignedTeacherStudent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedTeacherStudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssignedTeacherStudentAggregateArgs>(args: Subset<T, AssignedTeacherStudentAggregateArgs>): Prisma.PrismaPromise<GetAssignedTeacherStudentAggregateType<T>>

    /**
     * Group by AssignedTeacherStudent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignedTeacherStudentGroupByArgs} args - Group by arguments.
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
      T extends AssignedTeacherStudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignedTeacherStudentGroupByArgs['orderBy'] }
        : { orderBy?: AssignedTeacherStudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssignedTeacherStudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignedTeacherStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssignedTeacherStudent model
   */
  readonly fields: AssignedTeacherStudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssignedTeacherStudent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignedTeacherStudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tuitionPost<T extends TuitionPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TuitionPostDefaultArgs<ExtArgs>>): Prisma__TuitionPostClient<$Result.GetResult<Prisma.$TuitionPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    classSchedule<T extends AssignedTeacherStudent$classScheduleArgs<ExtArgs> = {}>(args?: Subset<T, AssignedTeacherStudent$classScheduleArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AssignedTeacherStudent model
   */
  interface AssignedTeacherStudentFieldRefs {
    readonly id: FieldRef<"AssignedTeacherStudent", 'Int'>
    readonly tuitionPostId: FieldRef<"AssignedTeacherStudent", 'Int'>
    readonly teacherId: FieldRef<"AssignedTeacherStudent", 'Int'>
    readonly studentId: FieldRef<"AssignedTeacherStudent", 'Int'>
    readonly assignedBy: FieldRef<"AssignedTeacherStudent", 'Int'>
    readonly startDate: FieldRef<"AssignedTeacherStudent", 'DateTime'>
    readonly endDate: FieldRef<"AssignedTeacherStudent", 'DateTime'>
    readonly createdAt: FieldRef<"AssignedTeacherStudent", 'DateTime'>
    readonly updatedAt: FieldRef<"AssignedTeacherStudent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssignedTeacherStudent findUnique
   */
  export type AssignedTeacherStudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTeacherStudent
     */
    select?: AssignedTeacherStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTeacherStudent
     */
    omit?: AssignedTeacherStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTeacherStudentInclude<ExtArgs> | null
    /**
     * Filter, which AssignedTeacherStudent to fetch.
     */
    where: AssignedTeacherStudentWhereUniqueInput
  }

  /**
   * AssignedTeacherStudent findUniqueOrThrow
   */
  export type AssignedTeacherStudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTeacherStudent
     */
    select?: AssignedTeacherStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTeacherStudent
     */
    omit?: AssignedTeacherStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTeacherStudentInclude<ExtArgs> | null
    /**
     * Filter, which AssignedTeacherStudent to fetch.
     */
    where: AssignedTeacherStudentWhereUniqueInput
  }

  /**
   * AssignedTeacherStudent findFirst
   */
  export type AssignedTeacherStudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTeacherStudent
     */
    select?: AssignedTeacherStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTeacherStudent
     */
    omit?: AssignedTeacherStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTeacherStudentInclude<ExtArgs> | null
    /**
     * Filter, which AssignedTeacherStudent to fetch.
     */
    where?: AssignedTeacherStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignedTeacherStudents to fetch.
     */
    orderBy?: AssignedTeacherStudentOrderByWithRelationInput | AssignedTeacherStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignedTeacherStudents.
     */
    cursor?: AssignedTeacherStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignedTeacherStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignedTeacherStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignedTeacherStudents.
     */
    distinct?: AssignedTeacherStudentScalarFieldEnum | AssignedTeacherStudentScalarFieldEnum[]
  }

  /**
   * AssignedTeacherStudent findFirstOrThrow
   */
  export type AssignedTeacherStudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTeacherStudent
     */
    select?: AssignedTeacherStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTeacherStudent
     */
    omit?: AssignedTeacherStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTeacherStudentInclude<ExtArgs> | null
    /**
     * Filter, which AssignedTeacherStudent to fetch.
     */
    where?: AssignedTeacherStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignedTeacherStudents to fetch.
     */
    orderBy?: AssignedTeacherStudentOrderByWithRelationInput | AssignedTeacherStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssignedTeacherStudents.
     */
    cursor?: AssignedTeacherStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignedTeacherStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignedTeacherStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignedTeacherStudents.
     */
    distinct?: AssignedTeacherStudentScalarFieldEnum | AssignedTeacherStudentScalarFieldEnum[]
  }

  /**
   * AssignedTeacherStudent findMany
   */
  export type AssignedTeacherStudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTeacherStudent
     */
    select?: AssignedTeacherStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTeacherStudent
     */
    omit?: AssignedTeacherStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTeacherStudentInclude<ExtArgs> | null
    /**
     * Filter, which AssignedTeacherStudents to fetch.
     */
    where?: AssignedTeacherStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssignedTeacherStudents to fetch.
     */
    orderBy?: AssignedTeacherStudentOrderByWithRelationInput | AssignedTeacherStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssignedTeacherStudents.
     */
    cursor?: AssignedTeacherStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssignedTeacherStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssignedTeacherStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssignedTeacherStudents.
     */
    distinct?: AssignedTeacherStudentScalarFieldEnum | AssignedTeacherStudentScalarFieldEnum[]
  }

  /**
   * AssignedTeacherStudent create
   */
  export type AssignedTeacherStudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTeacherStudent
     */
    select?: AssignedTeacherStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTeacherStudent
     */
    omit?: AssignedTeacherStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTeacherStudentInclude<ExtArgs> | null
    /**
     * The data needed to create a AssignedTeacherStudent.
     */
    data: XOR<AssignedTeacherStudentCreateInput, AssignedTeacherStudentUncheckedCreateInput>
  }

  /**
   * AssignedTeacherStudent createMany
   */
  export type AssignedTeacherStudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssignedTeacherStudents.
     */
    data: AssignedTeacherStudentCreateManyInput | AssignedTeacherStudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssignedTeacherStudent createManyAndReturn
   */
  export type AssignedTeacherStudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTeacherStudent
     */
    select?: AssignedTeacherStudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTeacherStudent
     */
    omit?: AssignedTeacherStudentOmit<ExtArgs> | null
    /**
     * The data used to create many AssignedTeacherStudents.
     */
    data: AssignedTeacherStudentCreateManyInput | AssignedTeacherStudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTeacherStudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssignedTeacherStudent update
   */
  export type AssignedTeacherStudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTeacherStudent
     */
    select?: AssignedTeacherStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTeacherStudent
     */
    omit?: AssignedTeacherStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTeacherStudentInclude<ExtArgs> | null
    /**
     * The data needed to update a AssignedTeacherStudent.
     */
    data: XOR<AssignedTeacherStudentUpdateInput, AssignedTeacherStudentUncheckedUpdateInput>
    /**
     * Choose, which AssignedTeacherStudent to update.
     */
    where: AssignedTeacherStudentWhereUniqueInput
  }

  /**
   * AssignedTeacherStudent updateMany
   */
  export type AssignedTeacherStudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssignedTeacherStudents.
     */
    data: XOR<AssignedTeacherStudentUpdateManyMutationInput, AssignedTeacherStudentUncheckedUpdateManyInput>
    /**
     * Filter which AssignedTeacherStudents to update
     */
    where?: AssignedTeacherStudentWhereInput
    /**
     * Limit how many AssignedTeacherStudents to update.
     */
    limit?: number
  }

  /**
   * AssignedTeacherStudent updateManyAndReturn
   */
  export type AssignedTeacherStudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTeacherStudent
     */
    select?: AssignedTeacherStudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTeacherStudent
     */
    omit?: AssignedTeacherStudentOmit<ExtArgs> | null
    /**
     * The data used to update AssignedTeacherStudents.
     */
    data: XOR<AssignedTeacherStudentUpdateManyMutationInput, AssignedTeacherStudentUncheckedUpdateManyInput>
    /**
     * Filter which AssignedTeacherStudents to update
     */
    where?: AssignedTeacherStudentWhereInput
    /**
     * Limit how many AssignedTeacherStudents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTeacherStudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssignedTeacherStudent upsert
   */
  export type AssignedTeacherStudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTeacherStudent
     */
    select?: AssignedTeacherStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTeacherStudent
     */
    omit?: AssignedTeacherStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTeacherStudentInclude<ExtArgs> | null
    /**
     * The filter to search for the AssignedTeacherStudent to update in case it exists.
     */
    where: AssignedTeacherStudentWhereUniqueInput
    /**
     * In case the AssignedTeacherStudent found by the `where` argument doesn't exist, create a new AssignedTeacherStudent with this data.
     */
    create: XOR<AssignedTeacherStudentCreateInput, AssignedTeacherStudentUncheckedCreateInput>
    /**
     * In case the AssignedTeacherStudent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignedTeacherStudentUpdateInput, AssignedTeacherStudentUncheckedUpdateInput>
  }

  /**
   * AssignedTeacherStudent delete
   */
  export type AssignedTeacherStudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTeacherStudent
     */
    select?: AssignedTeacherStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTeacherStudent
     */
    omit?: AssignedTeacherStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTeacherStudentInclude<ExtArgs> | null
    /**
     * Filter which AssignedTeacherStudent to delete.
     */
    where: AssignedTeacherStudentWhereUniqueInput
  }

  /**
   * AssignedTeacherStudent deleteMany
   */
  export type AssignedTeacherStudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssignedTeacherStudents to delete
     */
    where?: AssignedTeacherStudentWhereInput
    /**
     * Limit how many AssignedTeacherStudents to delete.
     */
    limit?: number
  }

  /**
   * AssignedTeacherStudent.classSchedule
   */
  export type AssignedTeacherStudent$classScheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    where?: ClassScheduleWhereInput
  }

  /**
   * AssignedTeacherStudent without action
   */
  export type AssignedTeacherStudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTeacherStudent
     */
    select?: AssignedTeacherStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTeacherStudent
     */
    omit?: AssignedTeacherStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTeacherStudentInclude<ExtArgs> | null
  }


  /**
   * Model Assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  export type AssignmentAvgAggregateOutputType = {
    id: number | null
    teacherId: number | null
    studentId: number | null
    grade: number | null
    status: number | null
    subject: number | null
  }

  export type AssignmentSumAggregateOutputType = {
    id: number | null
    teacherId: number | null
    studentId: number | null
    grade: number | null
    status: number | null
    subject: number | null
  }

  export type AssignmentMinAggregateOutputType = {
    id: number | null
    teacherId: number | null
    studentId: number | null
    title: string | null
    description: string | null
    dueDate: Date | null
    fileUrl: string | null
    fileName: string | null
    note: string | null
    grade: number | null
    feedback: string | null
    gradedAt: Date | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
    subject: number | null
  }

  export type AssignmentMaxAggregateOutputType = {
    id: number | null
    teacherId: number | null
    studentId: number | null
    title: string | null
    description: string | null
    dueDate: Date | null
    fileUrl: string | null
    fileName: string | null
    note: string | null
    grade: number | null
    feedback: string | null
    gradedAt: Date | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
    subject: number | null
  }

  export type AssignmentCountAggregateOutputType = {
    id: number
    teacherId: number
    studentId: number
    title: number
    description: number
    dueDate: number
    fileUrl: number
    fileName: number
    note: number
    grade: number
    feedback: number
    gradedAt: number
    status: number
    createdAt: number
    updatedAt: number
    subject: number
    _all: number
  }


  export type AssignmentAvgAggregateInputType = {
    id?: true
    teacherId?: true
    studentId?: true
    grade?: true
    status?: true
    subject?: true
  }

  export type AssignmentSumAggregateInputType = {
    id?: true
    teacherId?: true
    studentId?: true
    grade?: true
    status?: true
    subject?: true
  }

  export type AssignmentMinAggregateInputType = {
    id?: true
    teacherId?: true
    studentId?: true
    title?: true
    description?: true
    dueDate?: true
    fileUrl?: true
    fileName?: true
    note?: true
    grade?: true
    feedback?: true
    gradedAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    subject?: true
  }

  export type AssignmentMaxAggregateInputType = {
    id?: true
    teacherId?: true
    studentId?: true
    title?: true
    description?: true
    dueDate?: true
    fileUrl?: true
    fileName?: true
    note?: true
    grade?: true
    feedback?: true
    gradedAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    subject?: true
  }

  export type AssignmentCountAggregateInputType = {
    id?: true
    teacherId?: true
    studentId?: true
    title?: true
    description?: true
    dueDate?: true
    fileUrl?: true
    fileName?: true
    note?: true
    grade?: true
    feedback?: true
    gradedAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    subject?: true
    _all?: true
  }

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignment to aggregate.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignments
    **/
    _count?: true | AssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentMaxAggregateInputType
  }

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>
  }




  export type AssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithAggregationInput | AssignmentOrderByWithAggregationInput[]
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum
    having?: AssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentCountAggregateInputType | true
    _avg?: AssignmentAvgAggregateInputType
    _sum?: AssignmentSumAggregateInputType
    _min?: AssignmentMinAggregateInputType
    _max?: AssignmentMaxAggregateInputType
  }

  export type AssignmentGroupByOutputType = {
    id: number
    teacherId: number
    studentId: number
    title: string
    description: string | null
    dueDate: Date
    fileUrl: string | null
    fileName: string | null
    note: string | null
    grade: number | null
    feedback: string | null
    gradedAt: Date | null
    status: number | null
    createdAt: Date
    updatedAt: Date
    subject: number | null
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    studentId?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    fileUrl?: boolean
    fileName?: boolean
    note?: boolean
    grade?: boolean
    feedback?: boolean
    gradedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subject?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    studentId?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    fileUrl?: boolean
    fileName?: boolean
    note?: boolean
    grade?: boolean
    feedback?: boolean
    gradedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subject?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    studentId?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    fileUrl?: boolean
    fileName?: boolean
    note?: boolean
    grade?: boolean
    feedback?: boolean
    gradedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subject?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectScalar = {
    id?: boolean
    teacherId?: boolean
    studentId?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    fileUrl?: boolean
    fileName?: boolean
    note?: boolean
    grade?: boolean
    feedback?: boolean
    gradedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subject?: boolean
  }

  export type AssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacherId" | "studentId" | "title" | "description" | "dueDate" | "fileUrl" | "fileName" | "note" | "grade" | "feedback" | "gradedAt" | "status" | "createdAt" | "updatedAt" | "subject", ExtArgs["result"]["assignment"]>
  export type AssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assignment"
    objects: {
      teacher: Prisma.$UserPayload<ExtArgs>
      student: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teacherId: number
      studentId: number
      title: string
      description: string | null
      dueDate: Date
      fileUrl: string | null
      fileName: string | null
      note: string | null
      grade: number | null
      feedback: string | null
      gradedAt: Date | null
      status: number | null
      createdAt: Date
      updatedAt: Date
      subject: number | null
    }, ExtArgs["result"]["assignment"]>
    composites: {}
  }

  type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = $Result.GetResult<Prisma.$AssignmentPayload, S>

  type AssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface AssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignment'], meta: { name: 'Assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {AssignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentFindUniqueArgs>(args: SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentFindFirstArgs>(args?: SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentWithIdOnly = await prisma.assignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentFindManyArgs>(args?: SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignment.
     * @param {AssignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
     */
    create<T extends AssignmentCreateArgs>(args: SelectSubset<T, AssignmentCreateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignments.
     * @param {AssignmentCreateManyArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentCreateManyArgs>(args?: SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assignments and returns the data saved in the database.
     * @param {AssignmentCreateManyAndReturnArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assignment.
     * @param {AssignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
     */
    delete<T extends AssignmentDeleteArgs>(args: SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignment.
     * @param {AssignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentUpdateArgs>(args: SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignments.
     * @param {AssignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentDeleteManyArgs>(args?: SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentUpdateManyArgs>(args: SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments and returns the data updated in the database.
     * @param {AssignmentUpdateManyAndReturnArgs} args - Arguments to update many Assignments.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assignment.
     * @param {AssignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentUpsertArgs>(args: SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends AssignmentCountArgs>(
      args?: Subset<T, AssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssignmentAggregateArgs>(args: Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentGroupByArgs} args - Group by arguments.
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
      T extends AssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assignment model
   */
  readonly fields: AssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Assignment model
   */
  interface AssignmentFieldRefs {
    readonly id: FieldRef<"Assignment", 'Int'>
    readonly teacherId: FieldRef<"Assignment", 'Int'>
    readonly studentId: FieldRef<"Assignment", 'Int'>
    readonly title: FieldRef<"Assignment", 'String'>
    readonly description: FieldRef<"Assignment", 'String'>
    readonly dueDate: FieldRef<"Assignment", 'DateTime'>
    readonly fileUrl: FieldRef<"Assignment", 'String'>
    readonly fileName: FieldRef<"Assignment", 'String'>
    readonly note: FieldRef<"Assignment", 'String'>
    readonly grade: FieldRef<"Assignment", 'Int'>
    readonly feedback: FieldRef<"Assignment", 'String'>
    readonly gradedAt: FieldRef<"Assignment", 'DateTime'>
    readonly status: FieldRef<"Assignment", 'Int'>
    readonly createdAt: FieldRef<"Assignment", 'DateTime'>
    readonly updatedAt: FieldRef<"Assignment", 'DateTime'>
    readonly subject: FieldRef<"Assignment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Assignment findUnique
   */
  export type AssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findUniqueOrThrow
   */
  export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findFirst
   */
  export type AssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findFirstOrThrow
   */
  export type AssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findMany
   */
  export type AssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignments to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment create
   */
  export type AssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assignment.
     */
    data: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
  }

  /**
   * Assignment createMany
   */
  export type AssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assignment createManyAndReturn
   */
  export type AssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment update
   */
  export type AssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assignment.
     */
    data: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
    /**
     * Choose, which Assignment to update.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment updateMany
   */
  export type AssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
  }

  /**
   * Assignment updateManyAndReturn
   */
  export type AssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment upsert
   */
  export type AssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assignment to update in case it exists.
     */
    where: AssignmentWhereUniqueInput
    /**
     * In case the Assignment found by the `where` argument doesn't exist, create a new Assignment with this data.
     */
    create: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
    /**
     * In case the Assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
  }

  /**
   * Assignment delete
   */
  export type AssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter which Assignment to delete.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment deleteMany
   */
  export type AssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignments to delete
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to delete.
     */
    limit?: number
  }

  /**
   * Assignment without action
   */
  export type AssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
  }


  /**
   * Model ClassSchedule
   */

  export type AggregateClassSchedule = {
    _count: ClassScheduleCountAggregateOutputType | null
    _avg: ClassScheduleAvgAggregateOutputType | null
    _sum: ClassScheduleSumAggregateOutputType | null
    _min: ClassScheduleMinAggregateOutputType | null
    _max: ClassScheduleMaxAggregateOutputType | null
  }

  export type ClassScheduleAvgAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    teacherId: number | null
    studentId: number | null
    subjectIds: number | null
  }

  export type ClassScheduleSumAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    teacherId: number | null
    studentId: number | null
    subjectIds: number[]
  }

  export type ClassScheduleMinAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    teacherId: number | null
    studentId: number | null
    startTime: string | null
    endTime: string | null
    medium: $Enums.Medium | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassScheduleMaxAggregateOutputType = {
    id: number | null
    assignmentId: number | null
    teacherId: number | null
    studentId: number | null
    startTime: string | null
    endTime: string | null
    medium: $Enums.Medium | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassScheduleCountAggregateOutputType = {
    id: number
    assignmentId: number
    teacherId: number
    studentId: number
    subjectIds: number
    days: number
    startTime: number
    endTime: number
    medium: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClassScheduleAvgAggregateInputType = {
    id?: true
    assignmentId?: true
    teacherId?: true
    studentId?: true
    subjectIds?: true
  }

  export type ClassScheduleSumAggregateInputType = {
    id?: true
    assignmentId?: true
    teacherId?: true
    studentId?: true
    subjectIds?: true
  }

  export type ClassScheduleMinAggregateInputType = {
    id?: true
    assignmentId?: true
    teacherId?: true
    studentId?: true
    startTime?: true
    endTime?: true
    medium?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassScheduleMaxAggregateInputType = {
    id?: true
    assignmentId?: true
    teacherId?: true
    studentId?: true
    startTime?: true
    endTime?: true
    medium?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassScheduleCountAggregateInputType = {
    id?: true
    assignmentId?: true
    teacherId?: true
    studentId?: true
    subjectIds?: true
    days?: true
    startTime?: true
    endTime?: true
    medium?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClassScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassSchedule to aggregate.
     */
    where?: ClassScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSchedules to fetch.
     */
    orderBy?: ClassScheduleOrderByWithRelationInput | ClassScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassSchedules
    **/
    _count?: true | ClassScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassScheduleMaxAggregateInputType
  }

  export type GetClassScheduleAggregateType<T extends ClassScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateClassSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassSchedule[P]>
      : GetScalarType<T[P], AggregateClassSchedule[P]>
  }




  export type ClassScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassScheduleWhereInput
    orderBy?: ClassScheduleOrderByWithAggregationInput | ClassScheduleOrderByWithAggregationInput[]
    by: ClassScheduleScalarFieldEnum[] | ClassScheduleScalarFieldEnum
    having?: ClassScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassScheduleCountAggregateInputType | true
    _avg?: ClassScheduleAvgAggregateInputType
    _sum?: ClassScheduleSumAggregateInputType
    _min?: ClassScheduleMinAggregateInputType
    _max?: ClassScheduleMaxAggregateInputType
  }

  export type ClassScheduleGroupByOutputType = {
    id: number
    assignmentId: number
    teacherId: number
    studentId: number
    subjectIds: number[]
    days: $Enums.Day[]
    startTime: string
    endTime: string
    medium: $Enums.Medium
    createdAt: Date
    updatedAt: Date
    _count: ClassScheduleCountAggregateOutputType | null
    _avg: ClassScheduleAvgAggregateOutputType | null
    _sum: ClassScheduleSumAggregateOutputType | null
    _min: ClassScheduleMinAggregateOutputType | null
    _max: ClassScheduleMaxAggregateOutputType | null
  }

  type GetClassScheduleGroupByPayload<T extends ClassScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ClassScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ClassScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    teacherId?: boolean
    studentId?: boolean
    subjectIds?: boolean
    days?: boolean
    startTime?: boolean
    endTime?: boolean
    medium?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    overrides?: boolean | ClassSchedule$overridesArgs<ExtArgs>
    assignment?: boolean | AssignedTeacherStudentDefaultArgs<ExtArgs>
    _count?: boolean | ClassScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classSchedule"]>

  export type ClassScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    teacherId?: boolean
    studentId?: boolean
    subjectIds?: boolean
    days?: boolean
    startTime?: boolean
    endTime?: boolean
    medium?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignedTeacherStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classSchedule"]>

  export type ClassScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    teacherId?: boolean
    studentId?: boolean
    subjectIds?: boolean
    days?: boolean
    startTime?: boolean
    endTime?: boolean
    medium?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignedTeacherStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classSchedule"]>

  export type ClassScheduleSelectScalar = {
    id?: boolean
    assignmentId?: boolean
    teacherId?: boolean
    studentId?: boolean
    subjectIds?: boolean
    days?: boolean
    startTime?: boolean
    endTime?: boolean
    medium?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClassScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assignmentId" | "teacherId" | "studentId" | "subjectIds" | "days" | "startTime" | "endTime" | "medium" | "createdAt" | "updatedAt", ExtArgs["result"]["classSchedule"]>
  export type ClassScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    overrides?: boolean | ClassSchedule$overridesArgs<ExtArgs>
    assignment?: boolean | AssignedTeacherStudentDefaultArgs<ExtArgs>
    _count?: boolean | ClassScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignedTeacherStudentDefaultArgs<ExtArgs>
  }
  export type ClassScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignedTeacherStudentDefaultArgs<ExtArgs>
  }

  export type $ClassSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassSchedule"
    objects: {
      overrides: Prisma.$ClassScheduleOverridePayload<ExtArgs>[]
      assignment: Prisma.$AssignedTeacherStudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      assignmentId: number
      teacherId: number
      studentId: number
      subjectIds: number[]
      days: $Enums.Day[]
      startTime: string
      endTime: string
      medium: $Enums.Medium
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["classSchedule"]>
    composites: {}
  }

  type ClassScheduleGetPayload<S extends boolean | null | undefined | ClassScheduleDefaultArgs> = $Result.GetResult<Prisma.$ClassSchedulePayload, S>

  type ClassScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassScheduleCountAggregateInputType | true
    }

  export interface ClassScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassSchedule'], meta: { name: 'ClassSchedule' } }
    /**
     * Find zero or one ClassSchedule that matches the filter.
     * @param {ClassScheduleFindUniqueArgs} args - Arguments to find a ClassSchedule
     * @example
     * // Get one ClassSchedule
     * const classSchedule = await prisma.classSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassScheduleFindUniqueArgs>(args: SelectSubset<T, ClassScheduleFindUniqueArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassScheduleFindUniqueOrThrowArgs} args - Arguments to find a ClassSchedule
     * @example
     * // Get one ClassSchedule
     * const classSchedule = await prisma.classSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleFindFirstArgs} args - Arguments to find a ClassSchedule
     * @example
     * // Get one ClassSchedule
     * const classSchedule = await prisma.classSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassScheduleFindFirstArgs>(args?: SelectSubset<T, ClassScheduleFindFirstArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleFindFirstOrThrowArgs} args - Arguments to find a ClassSchedule
     * @example
     * // Get one ClassSchedule
     * const classSchedule = await prisma.classSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassSchedules
     * const classSchedules = await prisma.classSchedule.findMany()
     * 
     * // Get first 10 ClassSchedules
     * const classSchedules = await prisma.classSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classScheduleWithIdOnly = await prisma.classSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassScheduleFindManyArgs>(args?: SelectSubset<T, ClassScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassSchedule.
     * @param {ClassScheduleCreateArgs} args - Arguments to create a ClassSchedule.
     * @example
     * // Create one ClassSchedule
     * const ClassSchedule = await prisma.classSchedule.create({
     *   data: {
     *     // ... data to create a ClassSchedule
     *   }
     * })
     * 
     */
    create<T extends ClassScheduleCreateArgs>(args: SelectSubset<T, ClassScheduleCreateArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassSchedules.
     * @param {ClassScheduleCreateManyArgs} args - Arguments to create many ClassSchedules.
     * @example
     * // Create many ClassSchedules
     * const classSchedule = await prisma.classSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassScheduleCreateManyArgs>(args?: SelectSubset<T, ClassScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassSchedules and returns the data saved in the database.
     * @param {ClassScheduleCreateManyAndReturnArgs} args - Arguments to create many ClassSchedules.
     * @example
     * // Create many ClassSchedules
     * const classSchedule = await prisma.classSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassSchedules and only return the `id`
     * const classScheduleWithIdOnly = await prisma.classSchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassSchedule.
     * @param {ClassScheduleDeleteArgs} args - Arguments to delete one ClassSchedule.
     * @example
     * // Delete one ClassSchedule
     * const ClassSchedule = await prisma.classSchedule.delete({
     *   where: {
     *     // ... filter to delete one ClassSchedule
     *   }
     * })
     * 
     */
    delete<T extends ClassScheduleDeleteArgs>(args: SelectSubset<T, ClassScheduleDeleteArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassSchedule.
     * @param {ClassScheduleUpdateArgs} args - Arguments to update one ClassSchedule.
     * @example
     * // Update one ClassSchedule
     * const classSchedule = await prisma.classSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassScheduleUpdateArgs>(args: SelectSubset<T, ClassScheduleUpdateArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassSchedules.
     * @param {ClassScheduleDeleteManyArgs} args - Arguments to filter ClassSchedules to delete.
     * @example
     * // Delete a few ClassSchedules
     * const { count } = await prisma.classSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassScheduleDeleteManyArgs>(args?: SelectSubset<T, ClassScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassSchedules
     * const classSchedule = await prisma.classSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassScheduleUpdateManyArgs>(args: SelectSubset<T, ClassScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassSchedules and returns the data updated in the database.
     * @param {ClassScheduleUpdateManyAndReturnArgs} args - Arguments to update many ClassSchedules.
     * @example
     * // Update many ClassSchedules
     * const classSchedule = await prisma.classSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassSchedules and only return the `id`
     * const classScheduleWithIdOnly = await prisma.classSchedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassSchedule.
     * @param {ClassScheduleUpsertArgs} args - Arguments to update or create a ClassSchedule.
     * @example
     * // Update or create a ClassSchedule
     * const classSchedule = await prisma.classSchedule.upsert({
     *   create: {
     *     // ... data to create a ClassSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassSchedule we want to update
     *   }
     * })
     */
    upsert<T extends ClassScheduleUpsertArgs>(args: SelectSubset<T, ClassScheduleUpsertArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleCountArgs} args - Arguments to filter ClassSchedules to count.
     * @example
     * // Count the number of ClassSchedules
     * const count = await prisma.classSchedule.count({
     *   where: {
     *     // ... the filter for the ClassSchedules we want to count
     *   }
     * })
    **/
    count<T extends ClassScheduleCountArgs>(
      args?: Subset<T, ClassScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassScheduleAggregateArgs>(args: Subset<T, ClassScheduleAggregateArgs>): Prisma.PrismaPromise<GetClassScheduleAggregateType<T>>

    /**
     * Group by ClassSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleGroupByArgs} args - Group by arguments.
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
      T extends ClassScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ClassScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassSchedule model
   */
  readonly fields: ClassScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    overrides<T extends ClassSchedule$overridesArgs<ExtArgs> = {}>(args?: Subset<T, ClassSchedule$overridesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassScheduleOverridePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignment<T extends AssignedTeacherStudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssignedTeacherStudentDefaultArgs<ExtArgs>>): Prisma__AssignedTeacherStudentClient<$Result.GetResult<Prisma.$AssignedTeacherStudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ClassSchedule model
   */
  interface ClassScheduleFieldRefs {
    readonly id: FieldRef<"ClassSchedule", 'Int'>
    readonly assignmentId: FieldRef<"ClassSchedule", 'Int'>
    readonly teacherId: FieldRef<"ClassSchedule", 'Int'>
    readonly studentId: FieldRef<"ClassSchedule", 'Int'>
    readonly subjectIds: FieldRef<"ClassSchedule", 'Int[]'>
    readonly days: FieldRef<"ClassSchedule", 'Day[]'>
    readonly startTime: FieldRef<"ClassSchedule", 'String'>
    readonly endTime: FieldRef<"ClassSchedule", 'String'>
    readonly medium: FieldRef<"ClassSchedule", 'Medium'>
    readonly createdAt: FieldRef<"ClassSchedule", 'DateTime'>
    readonly updatedAt: FieldRef<"ClassSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClassSchedule findUnique
   */
  export type ClassScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ClassSchedule to fetch.
     */
    where: ClassScheduleWhereUniqueInput
  }

  /**
   * ClassSchedule findUniqueOrThrow
   */
  export type ClassScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ClassSchedule to fetch.
     */
    where: ClassScheduleWhereUniqueInput
  }

  /**
   * ClassSchedule findFirst
   */
  export type ClassScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ClassSchedule to fetch.
     */
    where?: ClassScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSchedules to fetch.
     */
    orderBy?: ClassScheduleOrderByWithRelationInput | ClassScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassSchedules.
     */
    cursor?: ClassScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassSchedules.
     */
    distinct?: ClassScheduleScalarFieldEnum | ClassScheduleScalarFieldEnum[]
  }

  /**
   * ClassSchedule findFirstOrThrow
   */
  export type ClassScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ClassSchedule to fetch.
     */
    where?: ClassScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSchedules to fetch.
     */
    orderBy?: ClassScheduleOrderByWithRelationInput | ClassScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassSchedules.
     */
    cursor?: ClassScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassSchedules.
     */
    distinct?: ClassScheduleScalarFieldEnum | ClassScheduleScalarFieldEnum[]
  }

  /**
   * ClassSchedule findMany
   */
  export type ClassScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ClassSchedules to fetch.
     */
    where?: ClassScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassSchedules to fetch.
     */
    orderBy?: ClassScheduleOrderByWithRelationInput | ClassScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassSchedules.
     */
    cursor?: ClassScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassSchedules.
     */
    distinct?: ClassScheduleScalarFieldEnum | ClassScheduleScalarFieldEnum[]
  }

  /**
   * ClassSchedule create
   */
  export type ClassScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassSchedule.
     */
    data: XOR<ClassScheduleCreateInput, ClassScheduleUncheckedCreateInput>
  }

  /**
   * ClassSchedule createMany
   */
  export type ClassScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassSchedules.
     */
    data: ClassScheduleCreateManyInput | ClassScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassSchedule createManyAndReturn
   */
  export type ClassScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many ClassSchedules.
     */
    data: ClassScheduleCreateManyInput | ClassScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassSchedule update
   */
  export type ClassScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassSchedule.
     */
    data: XOR<ClassScheduleUpdateInput, ClassScheduleUncheckedUpdateInput>
    /**
     * Choose, which ClassSchedule to update.
     */
    where: ClassScheduleWhereUniqueInput
  }

  /**
   * ClassSchedule updateMany
   */
  export type ClassScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassSchedules.
     */
    data: XOR<ClassScheduleUpdateManyMutationInput, ClassScheduleUncheckedUpdateManyInput>
    /**
     * Filter which ClassSchedules to update
     */
    where?: ClassScheduleWhereInput
    /**
     * Limit how many ClassSchedules to update.
     */
    limit?: number
  }

  /**
   * ClassSchedule updateManyAndReturn
   */
  export type ClassScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * The data used to update ClassSchedules.
     */
    data: XOR<ClassScheduleUpdateManyMutationInput, ClassScheduleUncheckedUpdateManyInput>
    /**
     * Filter which ClassSchedules to update
     */
    where?: ClassScheduleWhereInput
    /**
     * Limit how many ClassSchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassSchedule upsert
   */
  export type ClassScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassSchedule to update in case it exists.
     */
    where: ClassScheduleWhereUniqueInput
    /**
     * In case the ClassSchedule found by the `where` argument doesn't exist, create a new ClassSchedule with this data.
     */
    create: XOR<ClassScheduleCreateInput, ClassScheduleUncheckedCreateInput>
    /**
     * In case the ClassSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassScheduleUpdateInput, ClassScheduleUncheckedUpdateInput>
  }

  /**
   * ClassSchedule delete
   */
  export type ClassScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
    /**
     * Filter which ClassSchedule to delete.
     */
    where: ClassScheduleWhereUniqueInput
  }

  /**
   * ClassSchedule deleteMany
   */
  export type ClassScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassSchedules to delete
     */
    where?: ClassScheduleWhereInput
    /**
     * Limit how many ClassSchedules to delete.
     */
    limit?: number
  }

  /**
   * ClassSchedule.overrides
   */
  export type ClassSchedule$overridesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassScheduleOverride
     */
    select?: ClassScheduleOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassScheduleOverride
     */
    omit?: ClassScheduleOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleOverrideInclude<ExtArgs> | null
    where?: ClassScheduleOverrideWhereInput
    orderBy?: ClassScheduleOverrideOrderByWithRelationInput | ClassScheduleOverrideOrderByWithRelationInput[]
    cursor?: ClassScheduleOverrideWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScheduleOverrideScalarFieldEnum | ClassScheduleOverrideScalarFieldEnum[]
  }

  /**
   * ClassSchedule without action
   */
  export type ClassScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassSchedule
     */
    select?: ClassScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassSchedule
     */
    omit?: ClassScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleInclude<ExtArgs> | null
  }


  /**
   * Model ClassScheduleOverride
   */

  export type AggregateClassScheduleOverride = {
    _count: ClassScheduleOverrideCountAggregateOutputType | null
    _avg: ClassScheduleOverrideAvgAggregateOutputType | null
    _sum: ClassScheduleOverrideSumAggregateOutputType | null
    _min: ClassScheduleOverrideMinAggregateOutputType | null
    _max: ClassScheduleOverrideMaxAggregateOutputType | null
  }

  export type ClassScheduleOverrideAvgAggregateOutputType = {
    id: number | null
    classScheduleId: number | null
  }

  export type ClassScheduleOverrideSumAggregateOutputType = {
    id: number | null
    classScheduleId: number | null
  }

  export type ClassScheduleOverrideMinAggregateOutputType = {
    id: number | null
    classScheduleId: number | null
    originalDate: Date | null
    newDate: Date | null
    startTime: string | null
    endTime: string | null
    medium: $Enums.Medium | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassScheduleOverrideMaxAggregateOutputType = {
    id: number | null
    classScheduleId: number | null
    originalDate: Date | null
    newDate: Date | null
    startTime: string | null
    endTime: string | null
    medium: $Enums.Medium | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassScheduleOverrideCountAggregateOutputType = {
    id: number
    classScheduleId: number
    originalDate: number
    newDate: number
    startTime: number
    endTime: number
    medium: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClassScheduleOverrideAvgAggregateInputType = {
    id?: true
    classScheduleId?: true
  }

  export type ClassScheduleOverrideSumAggregateInputType = {
    id?: true
    classScheduleId?: true
  }

  export type ClassScheduleOverrideMinAggregateInputType = {
    id?: true
    classScheduleId?: true
    originalDate?: true
    newDate?: true
    startTime?: true
    endTime?: true
    medium?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassScheduleOverrideMaxAggregateInputType = {
    id?: true
    classScheduleId?: true
    originalDate?: true
    newDate?: true
    startTime?: true
    endTime?: true
    medium?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClassScheduleOverrideCountAggregateInputType = {
    id?: true
    classScheduleId?: true
    originalDate?: true
    newDate?: true
    startTime?: true
    endTime?: true
    medium?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClassScheduleOverrideAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassScheduleOverride to aggregate.
     */
    where?: ClassScheduleOverrideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassScheduleOverrides to fetch.
     */
    orderBy?: ClassScheduleOverrideOrderByWithRelationInput | ClassScheduleOverrideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassScheduleOverrideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassScheduleOverrides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassScheduleOverrides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassScheduleOverrides
    **/
    _count?: true | ClassScheduleOverrideCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassScheduleOverrideAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassScheduleOverrideSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassScheduleOverrideMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassScheduleOverrideMaxAggregateInputType
  }

  export type GetClassScheduleOverrideAggregateType<T extends ClassScheduleOverrideAggregateArgs> = {
        [P in keyof T & keyof AggregateClassScheduleOverride]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassScheduleOverride[P]>
      : GetScalarType<T[P], AggregateClassScheduleOverride[P]>
  }




  export type ClassScheduleOverrideGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassScheduleOverrideWhereInput
    orderBy?: ClassScheduleOverrideOrderByWithAggregationInput | ClassScheduleOverrideOrderByWithAggregationInput[]
    by: ClassScheduleOverrideScalarFieldEnum[] | ClassScheduleOverrideScalarFieldEnum
    having?: ClassScheduleOverrideScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassScheduleOverrideCountAggregateInputType | true
    _avg?: ClassScheduleOverrideAvgAggregateInputType
    _sum?: ClassScheduleOverrideSumAggregateInputType
    _min?: ClassScheduleOverrideMinAggregateInputType
    _max?: ClassScheduleOverrideMaxAggregateInputType
  }

  export type ClassScheduleOverrideGroupByOutputType = {
    id: number
    classScheduleId: number
    originalDate: Date
    newDate: Date
    startTime: string
    endTime: string
    medium: $Enums.Medium
    createdAt: Date
    updatedAt: Date
    _count: ClassScheduleOverrideCountAggregateOutputType | null
    _avg: ClassScheduleOverrideAvgAggregateOutputType | null
    _sum: ClassScheduleOverrideSumAggregateOutputType | null
    _min: ClassScheduleOverrideMinAggregateOutputType | null
    _max: ClassScheduleOverrideMaxAggregateOutputType | null
  }

  type GetClassScheduleOverrideGroupByPayload<T extends ClassScheduleOverrideGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassScheduleOverrideGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassScheduleOverrideGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassScheduleOverrideGroupByOutputType[P]>
            : GetScalarType<T[P], ClassScheduleOverrideGroupByOutputType[P]>
        }
      >
    >


  export type ClassScheduleOverrideSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classScheduleId?: boolean
    originalDate?: boolean
    newDate?: boolean
    startTime?: boolean
    endTime?: boolean
    medium?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    classSchedule?: boolean | ClassScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classScheduleOverride"]>

  export type ClassScheduleOverrideSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classScheduleId?: boolean
    originalDate?: boolean
    newDate?: boolean
    startTime?: boolean
    endTime?: boolean
    medium?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    classSchedule?: boolean | ClassScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classScheduleOverride"]>

  export type ClassScheduleOverrideSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classScheduleId?: boolean
    originalDate?: boolean
    newDate?: boolean
    startTime?: boolean
    endTime?: boolean
    medium?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    classSchedule?: boolean | ClassScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classScheduleOverride"]>

  export type ClassScheduleOverrideSelectScalar = {
    id?: boolean
    classScheduleId?: boolean
    originalDate?: boolean
    newDate?: boolean
    startTime?: boolean
    endTime?: boolean
    medium?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClassScheduleOverrideOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "classScheduleId" | "originalDate" | "newDate" | "startTime" | "endTime" | "medium" | "createdAt" | "updatedAt", ExtArgs["result"]["classScheduleOverride"]>
  export type ClassScheduleOverrideInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classSchedule?: boolean | ClassScheduleDefaultArgs<ExtArgs>
  }
  export type ClassScheduleOverrideIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classSchedule?: boolean | ClassScheduleDefaultArgs<ExtArgs>
  }
  export type ClassScheduleOverrideIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classSchedule?: boolean | ClassScheduleDefaultArgs<ExtArgs>
  }

  export type $ClassScheduleOverridePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassScheduleOverride"
    objects: {
      classSchedule: Prisma.$ClassSchedulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      classScheduleId: number
      originalDate: Date
      newDate: Date
      startTime: string
      endTime: string
      medium: $Enums.Medium
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["classScheduleOverride"]>
    composites: {}
  }

  type ClassScheduleOverrideGetPayload<S extends boolean | null | undefined | ClassScheduleOverrideDefaultArgs> = $Result.GetResult<Prisma.$ClassScheduleOverridePayload, S>

  type ClassScheduleOverrideCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassScheduleOverrideFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassScheduleOverrideCountAggregateInputType | true
    }

  export interface ClassScheduleOverrideDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassScheduleOverride'], meta: { name: 'ClassScheduleOverride' } }
    /**
     * Find zero or one ClassScheduleOverride that matches the filter.
     * @param {ClassScheduleOverrideFindUniqueArgs} args - Arguments to find a ClassScheduleOverride
     * @example
     * // Get one ClassScheduleOverride
     * const classScheduleOverride = await prisma.classScheduleOverride.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassScheduleOverrideFindUniqueArgs>(args: SelectSubset<T, ClassScheduleOverrideFindUniqueArgs<ExtArgs>>): Prisma__ClassScheduleOverrideClient<$Result.GetResult<Prisma.$ClassScheduleOverridePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassScheduleOverride that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassScheduleOverrideFindUniqueOrThrowArgs} args - Arguments to find a ClassScheduleOverride
     * @example
     * // Get one ClassScheduleOverride
     * const classScheduleOverride = await prisma.classScheduleOverride.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassScheduleOverrideFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassScheduleOverrideFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassScheduleOverrideClient<$Result.GetResult<Prisma.$ClassScheduleOverridePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassScheduleOverride that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleOverrideFindFirstArgs} args - Arguments to find a ClassScheduleOverride
     * @example
     * // Get one ClassScheduleOverride
     * const classScheduleOverride = await prisma.classScheduleOverride.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassScheduleOverrideFindFirstArgs>(args?: SelectSubset<T, ClassScheduleOverrideFindFirstArgs<ExtArgs>>): Prisma__ClassScheduleOverrideClient<$Result.GetResult<Prisma.$ClassScheduleOverridePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassScheduleOverride that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleOverrideFindFirstOrThrowArgs} args - Arguments to find a ClassScheduleOverride
     * @example
     * // Get one ClassScheduleOverride
     * const classScheduleOverride = await prisma.classScheduleOverride.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassScheduleOverrideFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassScheduleOverrideFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassScheduleOverrideClient<$Result.GetResult<Prisma.$ClassScheduleOverridePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassScheduleOverrides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleOverrideFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassScheduleOverrides
     * const classScheduleOverrides = await prisma.classScheduleOverride.findMany()
     * 
     * // Get first 10 ClassScheduleOverrides
     * const classScheduleOverrides = await prisma.classScheduleOverride.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classScheduleOverrideWithIdOnly = await prisma.classScheduleOverride.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassScheduleOverrideFindManyArgs>(args?: SelectSubset<T, ClassScheduleOverrideFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassScheduleOverridePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassScheduleOverride.
     * @param {ClassScheduleOverrideCreateArgs} args - Arguments to create a ClassScheduleOverride.
     * @example
     * // Create one ClassScheduleOverride
     * const ClassScheduleOverride = await prisma.classScheduleOverride.create({
     *   data: {
     *     // ... data to create a ClassScheduleOverride
     *   }
     * })
     * 
     */
    create<T extends ClassScheduleOverrideCreateArgs>(args: SelectSubset<T, ClassScheduleOverrideCreateArgs<ExtArgs>>): Prisma__ClassScheduleOverrideClient<$Result.GetResult<Prisma.$ClassScheduleOverridePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassScheduleOverrides.
     * @param {ClassScheduleOverrideCreateManyArgs} args - Arguments to create many ClassScheduleOverrides.
     * @example
     * // Create many ClassScheduleOverrides
     * const classScheduleOverride = await prisma.classScheduleOverride.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassScheduleOverrideCreateManyArgs>(args?: SelectSubset<T, ClassScheduleOverrideCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassScheduleOverrides and returns the data saved in the database.
     * @param {ClassScheduleOverrideCreateManyAndReturnArgs} args - Arguments to create many ClassScheduleOverrides.
     * @example
     * // Create many ClassScheduleOverrides
     * const classScheduleOverride = await prisma.classScheduleOverride.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassScheduleOverrides and only return the `id`
     * const classScheduleOverrideWithIdOnly = await prisma.classScheduleOverride.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassScheduleOverrideCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassScheduleOverrideCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassScheduleOverridePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassScheduleOverride.
     * @param {ClassScheduleOverrideDeleteArgs} args - Arguments to delete one ClassScheduleOverride.
     * @example
     * // Delete one ClassScheduleOverride
     * const ClassScheduleOverride = await prisma.classScheduleOverride.delete({
     *   where: {
     *     // ... filter to delete one ClassScheduleOverride
     *   }
     * })
     * 
     */
    delete<T extends ClassScheduleOverrideDeleteArgs>(args: SelectSubset<T, ClassScheduleOverrideDeleteArgs<ExtArgs>>): Prisma__ClassScheduleOverrideClient<$Result.GetResult<Prisma.$ClassScheduleOverridePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassScheduleOverride.
     * @param {ClassScheduleOverrideUpdateArgs} args - Arguments to update one ClassScheduleOverride.
     * @example
     * // Update one ClassScheduleOverride
     * const classScheduleOverride = await prisma.classScheduleOverride.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassScheduleOverrideUpdateArgs>(args: SelectSubset<T, ClassScheduleOverrideUpdateArgs<ExtArgs>>): Prisma__ClassScheduleOverrideClient<$Result.GetResult<Prisma.$ClassScheduleOverridePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassScheduleOverrides.
     * @param {ClassScheduleOverrideDeleteManyArgs} args - Arguments to filter ClassScheduleOverrides to delete.
     * @example
     * // Delete a few ClassScheduleOverrides
     * const { count } = await prisma.classScheduleOverride.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassScheduleOverrideDeleteManyArgs>(args?: SelectSubset<T, ClassScheduleOverrideDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassScheduleOverrides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleOverrideUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassScheduleOverrides
     * const classScheduleOverride = await prisma.classScheduleOverride.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassScheduleOverrideUpdateManyArgs>(args: SelectSubset<T, ClassScheduleOverrideUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassScheduleOverrides and returns the data updated in the database.
     * @param {ClassScheduleOverrideUpdateManyAndReturnArgs} args - Arguments to update many ClassScheduleOverrides.
     * @example
     * // Update many ClassScheduleOverrides
     * const classScheduleOverride = await prisma.classScheduleOverride.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassScheduleOverrides and only return the `id`
     * const classScheduleOverrideWithIdOnly = await prisma.classScheduleOverride.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassScheduleOverrideUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassScheduleOverrideUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassScheduleOverridePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassScheduleOverride.
     * @param {ClassScheduleOverrideUpsertArgs} args - Arguments to update or create a ClassScheduleOverride.
     * @example
     * // Update or create a ClassScheduleOverride
     * const classScheduleOverride = await prisma.classScheduleOverride.upsert({
     *   create: {
     *     // ... data to create a ClassScheduleOverride
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassScheduleOverride we want to update
     *   }
     * })
     */
    upsert<T extends ClassScheduleOverrideUpsertArgs>(args: SelectSubset<T, ClassScheduleOverrideUpsertArgs<ExtArgs>>): Prisma__ClassScheduleOverrideClient<$Result.GetResult<Prisma.$ClassScheduleOverridePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassScheduleOverrides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleOverrideCountArgs} args - Arguments to filter ClassScheduleOverrides to count.
     * @example
     * // Count the number of ClassScheduleOverrides
     * const count = await prisma.classScheduleOverride.count({
     *   where: {
     *     // ... the filter for the ClassScheduleOverrides we want to count
     *   }
     * })
    **/
    count<T extends ClassScheduleOverrideCountArgs>(
      args?: Subset<T, ClassScheduleOverrideCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassScheduleOverrideCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassScheduleOverride.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleOverrideAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassScheduleOverrideAggregateArgs>(args: Subset<T, ClassScheduleOverrideAggregateArgs>): Prisma.PrismaPromise<GetClassScheduleOverrideAggregateType<T>>

    /**
     * Group by ClassScheduleOverride.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassScheduleOverrideGroupByArgs} args - Group by arguments.
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
      T extends ClassScheduleOverrideGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassScheduleOverrideGroupByArgs['orderBy'] }
        : { orderBy?: ClassScheduleOverrideGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassScheduleOverrideGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassScheduleOverrideGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassScheduleOverride model
   */
  readonly fields: ClassScheduleOverrideFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassScheduleOverride.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassScheduleOverrideClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classSchedule<T extends ClassScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassScheduleDefaultArgs<ExtArgs>>): Prisma__ClassScheduleClient<$Result.GetResult<Prisma.$ClassSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ClassScheduleOverride model
   */
  interface ClassScheduleOverrideFieldRefs {
    readonly id: FieldRef<"ClassScheduleOverride", 'Int'>
    readonly classScheduleId: FieldRef<"ClassScheduleOverride", 'Int'>
    readonly originalDate: FieldRef<"ClassScheduleOverride", 'DateTime'>
    readonly newDate: FieldRef<"ClassScheduleOverride", 'DateTime'>
    readonly startTime: FieldRef<"ClassScheduleOverride", 'String'>
    readonly endTime: FieldRef<"ClassScheduleOverride", 'String'>
    readonly medium: FieldRef<"ClassScheduleOverride", 'Medium'>
    readonly createdAt: FieldRef<"ClassScheduleOverride", 'DateTime'>
    readonly updatedAt: FieldRef<"ClassScheduleOverride", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClassScheduleOverride findUnique
   */
  export type ClassScheduleOverrideFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassScheduleOverride
     */
    select?: ClassScheduleOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassScheduleOverride
     */
    omit?: ClassScheduleOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleOverrideInclude<ExtArgs> | null
    /**
     * Filter, which ClassScheduleOverride to fetch.
     */
    where: ClassScheduleOverrideWhereUniqueInput
  }

  /**
   * ClassScheduleOverride findUniqueOrThrow
   */
  export type ClassScheduleOverrideFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassScheduleOverride
     */
    select?: ClassScheduleOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassScheduleOverride
     */
    omit?: ClassScheduleOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleOverrideInclude<ExtArgs> | null
    /**
     * Filter, which ClassScheduleOverride to fetch.
     */
    where: ClassScheduleOverrideWhereUniqueInput
  }

  /**
   * ClassScheduleOverride findFirst
   */
  export type ClassScheduleOverrideFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassScheduleOverride
     */
    select?: ClassScheduleOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassScheduleOverride
     */
    omit?: ClassScheduleOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleOverrideInclude<ExtArgs> | null
    /**
     * Filter, which ClassScheduleOverride to fetch.
     */
    where?: ClassScheduleOverrideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassScheduleOverrides to fetch.
     */
    orderBy?: ClassScheduleOverrideOrderByWithRelationInput | ClassScheduleOverrideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassScheduleOverrides.
     */
    cursor?: ClassScheduleOverrideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassScheduleOverrides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassScheduleOverrides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassScheduleOverrides.
     */
    distinct?: ClassScheduleOverrideScalarFieldEnum | ClassScheduleOverrideScalarFieldEnum[]
  }

  /**
   * ClassScheduleOverride findFirstOrThrow
   */
  export type ClassScheduleOverrideFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassScheduleOverride
     */
    select?: ClassScheduleOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassScheduleOverride
     */
    omit?: ClassScheduleOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleOverrideInclude<ExtArgs> | null
    /**
     * Filter, which ClassScheduleOverride to fetch.
     */
    where?: ClassScheduleOverrideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassScheduleOverrides to fetch.
     */
    orderBy?: ClassScheduleOverrideOrderByWithRelationInput | ClassScheduleOverrideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassScheduleOverrides.
     */
    cursor?: ClassScheduleOverrideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassScheduleOverrides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassScheduleOverrides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassScheduleOverrides.
     */
    distinct?: ClassScheduleOverrideScalarFieldEnum | ClassScheduleOverrideScalarFieldEnum[]
  }

  /**
   * ClassScheduleOverride findMany
   */
  export type ClassScheduleOverrideFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassScheduleOverride
     */
    select?: ClassScheduleOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassScheduleOverride
     */
    omit?: ClassScheduleOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleOverrideInclude<ExtArgs> | null
    /**
     * Filter, which ClassScheduleOverrides to fetch.
     */
    where?: ClassScheduleOverrideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassScheduleOverrides to fetch.
     */
    orderBy?: ClassScheduleOverrideOrderByWithRelationInput | ClassScheduleOverrideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassScheduleOverrides.
     */
    cursor?: ClassScheduleOverrideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassScheduleOverrides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassScheduleOverrides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassScheduleOverrides.
     */
    distinct?: ClassScheduleOverrideScalarFieldEnum | ClassScheduleOverrideScalarFieldEnum[]
  }

  /**
   * ClassScheduleOverride create
   */
  export type ClassScheduleOverrideCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassScheduleOverride
     */
    select?: ClassScheduleOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassScheduleOverride
     */
    omit?: ClassScheduleOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleOverrideInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassScheduleOverride.
     */
    data: XOR<ClassScheduleOverrideCreateInput, ClassScheduleOverrideUncheckedCreateInput>
  }

  /**
   * ClassScheduleOverride createMany
   */
  export type ClassScheduleOverrideCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassScheduleOverrides.
     */
    data: ClassScheduleOverrideCreateManyInput | ClassScheduleOverrideCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassScheduleOverride createManyAndReturn
   */
  export type ClassScheduleOverrideCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassScheduleOverride
     */
    select?: ClassScheduleOverrideSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassScheduleOverride
     */
    omit?: ClassScheduleOverrideOmit<ExtArgs> | null
    /**
     * The data used to create many ClassScheduleOverrides.
     */
    data: ClassScheduleOverrideCreateManyInput | ClassScheduleOverrideCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleOverrideIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassScheduleOverride update
   */
  export type ClassScheduleOverrideUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassScheduleOverride
     */
    select?: ClassScheduleOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassScheduleOverride
     */
    omit?: ClassScheduleOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleOverrideInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassScheduleOverride.
     */
    data: XOR<ClassScheduleOverrideUpdateInput, ClassScheduleOverrideUncheckedUpdateInput>
    /**
     * Choose, which ClassScheduleOverride to update.
     */
    where: ClassScheduleOverrideWhereUniqueInput
  }

  /**
   * ClassScheduleOverride updateMany
   */
  export type ClassScheduleOverrideUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassScheduleOverrides.
     */
    data: XOR<ClassScheduleOverrideUpdateManyMutationInput, ClassScheduleOverrideUncheckedUpdateManyInput>
    /**
     * Filter which ClassScheduleOverrides to update
     */
    where?: ClassScheduleOverrideWhereInput
    /**
     * Limit how many ClassScheduleOverrides to update.
     */
    limit?: number
  }

  /**
   * ClassScheduleOverride updateManyAndReturn
   */
  export type ClassScheduleOverrideUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassScheduleOverride
     */
    select?: ClassScheduleOverrideSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassScheduleOverride
     */
    omit?: ClassScheduleOverrideOmit<ExtArgs> | null
    /**
     * The data used to update ClassScheduleOverrides.
     */
    data: XOR<ClassScheduleOverrideUpdateManyMutationInput, ClassScheduleOverrideUncheckedUpdateManyInput>
    /**
     * Filter which ClassScheduleOverrides to update
     */
    where?: ClassScheduleOverrideWhereInput
    /**
     * Limit how many ClassScheduleOverrides to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleOverrideIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassScheduleOverride upsert
   */
  export type ClassScheduleOverrideUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassScheduleOverride
     */
    select?: ClassScheduleOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassScheduleOverride
     */
    omit?: ClassScheduleOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleOverrideInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassScheduleOverride to update in case it exists.
     */
    where: ClassScheduleOverrideWhereUniqueInput
    /**
     * In case the ClassScheduleOverride found by the `where` argument doesn't exist, create a new ClassScheduleOverride with this data.
     */
    create: XOR<ClassScheduleOverrideCreateInput, ClassScheduleOverrideUncheckedCreateInput>
    /**
     * In case the ClassScheduleOverride was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassScheduleOverrideUpdateInput, ClassScheduleOverrideUncheckedUpdateInput>
  }

  /**
   * ClassScheduleOverride delete
   */
  export type ClassScheduleOverrideDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassScheduleOverride
     */
    select?: ClassScheduleOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassScheduleOverride
     */
    omit?: ClassScheduleOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleOverrideInclude<ExtArgs> | null
    /**
     * Filter which ClassScheduleOverride to delete.
     */
    where: ClassScheduleOverrideWhereUniqueInput
  }

  /**
   * ClassScheduleOverride deleteMany
   */
  export type ClassScheduleOverrideDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassScheduleOverrides to delete
     */
    where?: ClassScheduleOverrideWhereInput
    /**
     * Limit how many ClassScheduleOverrides to delete.
     */
    limit?: number
  }

  /**
   * ClassScheduleOverride without action
   */
  export type ClassScheduleOverrideDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassScheduleOverride
     */
    select?: ClassScheduleOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassScheduleOverride
     */
    omit?: ClassScheduleOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassScheduleOverrideInclude<ExtArgs> | null
  }


  /**
   * Model Lookup
   */

  export type AggregateLookup = {
    _count: LookupCountAggregateOutputType | null
    _avg: LookupAvgAggregateOutputType | null
    _sum: LookupSumAggregateOutputType | null
    _min: LookupMinAggregateOutputType | null
    _max: LookupMaxAggregateOutputType | null
  }

  export type LookupAvgAggregateOutputType = {
    id: number | null
  }

  export type LookupSumAggregateOutputType = {
    id: number | null
  }

  export type LookupMinAggregateOutputType = {
    id: number | null
    name: string | null
    value: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type LookupMaxAggregateOutputType = {
    id: number | null
    name: string | null
    value: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type LookupCountAggregateOutputType = {
    id: number
    name: number
    value: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type LookupAvgAggregateInputType = {
    id?: true
  }

  export type LookupSumAggregateInputType = {
    id?: true
  }

  export type LookupMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
    isActive?: true
    createdAt?: true
  }

  export type LookupMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
    isActive?: true
    createdAt?: true
  }

  export type LookupCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type LookupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lookup to aggregate.
     */
    where?: LookupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lookups to fetch.
     */
    orderBy?: LookupOrderByWithRelationInput | LookupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LookupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lookups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lookups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lookups
    **/
    _count?: true | LookupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LookupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LookupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LookupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LookupMaxAggregateInputType
  }

  export type GetLookupAggregateType<T extends LookupAggregateArgs> = {
        [P in keyof T & keyof AggregateLookup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLookup[P]>
      : GetScalarType<T[P], AggregateLookup[P]>
  }




  export type LookupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LookupWhereInput
    orderBy?: LookupOrderByWithAggregationInput | LookupOrderByWithAggregationInput[]
    by: LookupScalarFieldEnum[] | LookupScalarFieldEnum
    having?: LookupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LookupCountAggregateInputType | true
    _avg?: LookupAvgAggregateInputType
    _sum?: LookupSumAggregateInputType
    _min?: LookupMinAggregateInputType
    _max?: LookupMaxAggregateInputType
  }

  export type LookupGroupByOutputType = {
    id: number
    name: string
    value: string
    isActive: boolean
    createdAt: Date
    _count: LookupCountAggregateOutputType | null
    _avg: LookupAvgAggregateOutputType | null
    _sum: LookupSumAggregateOutputType | null
    _min: LookupMinAggregateOutputType | null
    _max: LookupMaxAggregateOutputType | null
  }

  type GetLookupGroupByPayload<T extends LookupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LookupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LookupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LookupGroupByOutputType[P]>
            : GetScalarType<T[P], LookupGroupByOutputType[P]>
        }
      >
    >


  export type LookupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["lookup"]>

  export type LookupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["lookup"]>

  export type LookupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["lookup"]>

  export type LookupSelectScalar = {
    id?: boolean
    name?: boolean
    value?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type LookupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "value" | "isActive" | "createdAt", ExtArgs["result"]["lookup"]>

  export type $LookupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lookup"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      value: string
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["lookup"]>
    composites: {}
  }

  type LookupGetPayload<S extends boolean | null | undefined | LookupDefaultArgs> = $Result.GetResult<Prisma.$LookupPayload, S>

  type LookupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LookupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LookupCountAggregateInputType | true
    }

  export interface LookupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lookup'], meta: { name: 'Lookup' } }
    /**
     * Find zero or one Lookup that matches the filter.
     * @param {LookupFindUniqueArgs} args - Arguments to find a Lookup
     * @example
     * // Get one Lookup
     * const lookup = await prisma.lookup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LookupFindUniqueArgs>(args: SelectSubset<T, LookupFindUniqueArgs<ExtArgs>>): Prisma__LookupClient<$Result.GetResult<Prisma.$LookupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lookup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LookupFindUniqueOrThrowArgs} args - Arguments to find a Lookup
     * @example
     * // Get one Lookup
     * const lookup = await prisma.lookup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LookupFindUniqueOrThrowArgs>(args: SelectSubset<T, LookupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LookupClient<$Result.GetResult<Prisma.$LookupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lookup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LookupFindFirstArgs} args - Arguments to find a Lookup
     * @example
     * // Get one Lookup
     * const lookup = await prisma.lookup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LookupFindFirstArgs>(args?: SelectSubset<T, LookupFindFirstArgs<ExtArgs>>): Prisma__LookupClient<$Result.GetResult<Prisma.$LookupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lookup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LookupFindFirstOrThrowArgs} args - Arguments to find a Lookup
     * @example
     * // Get one Lookup
     * const lookup = await prisma.lookup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LookupFindFirstOrThrowArgs>(args?: SelectSubset<T, LookupFindFirstOrThrowArgs<ExtArgs>>): Prisma__LookupClient<$Result.GetResult<Prisma.$LookupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lookups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LookupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lookups
     * const lookups = await prisma.lookup.findMany()
     * 
     * // Get first 10 Lookups
     * const lookups = await prisma.lookup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lookupWithIdOnly = await prisma.lookup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LookupFindManyArgs>(args?: SelectSubset<T, LookupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LookupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lookup.
     * @param {LookupCreateArgs} args - Arguments to create a Lookup.
     * @example
     * // Create one Lookup
     * const Lookup = await prisma.lookup.create({
     *   data: {
     *     // ... data to create a Lookup
     *   }
     * })
     * 
     */
    create<T extends LookupCreateArgs>(args: SelectSubset<T, LookupCreateArgs<ExtArgs>>): Prisma__LookupClient<$Result.GetResult<Prisma.$LookupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lookups.
     * @param {LookupCreateManyArgs} args - Arguments to create many Lookups.
     * @example
     * // Create many Lookups
     * const lookup = await prisma.lookup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LookupCreateManyArgs>(args?: SelectSubset<T, LookupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lookups and returns the data saved in the database.
     * @param {LookupCreateManyAndReturnArgs} args - Arguments to create many Lookups.
     * @example
     * // Create many Lookups
     * const lookup = await prisma.lookup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lookups and only return the `id`
     * const lookupWithIdOnly = await prisma.lookup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LookupCreateManyAndReturnArgs>(args?: SelectSubset<T, LookupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LookupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lookup.
     * @param {LookupDeleteArgs} args - Arguments to delete one Lookup.
     * @example
     * // Delete one Lookup
     * const Lookup = await prisma.lookup.delete({
     *   where: {
     *     // ... filter to delete one Lookup
     *   }
     * })
     * 
     */
    delete<T extends LookupDeleteArgs>(args: SelectSubset<T, LookupDeleteArgs<ExtArgs>>): Prisma__LookupClient<$Result.GetResult<Prisma.$LookupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lookup.
     * @param {LookupUpdateArgs} args - Arguments to update one Lookup.
     * @example
     * // Update one Lookup
     * const lookup = await prisma.lookup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LookupUpdateArgs>(args: SelectSubset<T, LookupUpdateArgs<ExtArgs>>): Prisma__LookupClient<$Result.GetResult<Prisma.$LookupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lookups.
     * @param {LookupDeleteManyArgs} args - Arguments to filter Lookups to delete.
     * @example
     * // Delete a few Lookups
     * const { count } = await prisma.lookup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LookupDeleteManyArgs>(args?: SelectSubset<T, LookupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lookups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LookupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lookups
     * const lookup = await prisma.lookup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LookupUpdateManyArgs>(args: SelectSubset<T, LookupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lookups and returns the data updated in the database.
     * @param {LookupUpdateManyAndReturnArgs} args - Arguments to update many Lookups.
     * @example
     * // Update many Lookups
     * const lookup = await prisma.lookup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lookups and only return the `id`
     * const lookupWithIdOnly = await prisma.lookup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LookupUpdateManyAndReturnArgs>(args: SelectSubset<T, LookupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LookupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lookup.
     * @param {LookupUpsertArgs} args - Arguments to update or create a Lookup.
     * @example
     * // Update or create a Lookup
     * const lookup = await prisma.lookup.upsert({
     *   create: {
     *     // ... data to create a Lookup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lookup we want to update
     *   }
     * })
     */
    upsert<T extends LookupUpsertArgs>(args: SelectSubset<T, LookupUpsertArgs<ExtArgs>>): Prisma__LookupClient<$Result.GetResult<Prisma.$LookupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lookups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LookupCountArgs} args - Arguments to filter Lookups to count.
     * @example
     * // Count the number of Lookups
     * const count = await prisma.lookup.count({
     *   where: {
     *     // ... the filter for the Lookups we want to count
     *   }
     * })
    **/
    count<T extends LookupCountArgs>(
      args?: Subset<T, LookupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LookupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lookup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LookupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LookupAggregateArgs>(args: Subset<T, LookupAggregateArgs>): Prisma.PrismaPromise<GetLookupAggregateType<T>>

    /**
     * Group by Lookup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LookupGroupByArgs} args - Group by arguments.
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
      T extends LookupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LookupGroupByArgs['orderBy'] }
        : { orderBy?: LookupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LookupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLookupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lookup model
   */
  readonly fields: LookupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lookup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LookupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Lookup model
   */
  interface LookupFieldRefs {
    readonly id: FieldRef<"Lookup", 'Int'>
    readonly name: FieldRef<"Lookup", 'String'>
    readonly value: FieldRef<"Lookup", 'String'>
    readonly isActive: FieldRef<"Lookup", 'Boolean'>
    readonly createdAt: FieldRef<"Lookup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lookup findUnique
   */
  export type LookupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lookup
     */
    select?: LookupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lookup
     */
    omit?: LookupOmit<ExtArgs> | null
    /**
     * Filter, which Lookup to fetch.
     */
    where: LookupWhereUniqueInput
  }

  /**
   * Lookup findUniqueOrThrow
   */
  export type LookupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lookup
     */
    select?: LookupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lookup
     */
    omit?: LookupOmit<ExtArgs> | null
    /**
     * Filter, which Lookup to fetch.
     */
    where: LookupWhereUniqueInput
  }

  /**
   * Lookup findFirst
   */
  export type LookupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lookup
     */
    select?: LookupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lookup
     */
    omit?: LookupOmit<ExtArgs> | null
    /**
     * Filter, which Lookup to fetch.
     */
    where?: LookupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lookups to fetch.
     */
    orderBy?: LookupOrderByWithRelationInput | LookupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lookups.
     */
    cursor?: LookupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lookups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lookups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lookups.
     */
    distinct?: LookupScalarFieldEnum | LookupScalarFieldEnum[]
  }

  /**
   * Lookup findFirstOrThrow
   */
  export type LookupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lookup
     */
    select?: LookupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lookup
     */
    omit?: LookupOmit<ExtArgs> | null
    /**
     * Filter, which Lookup to fetch.
     */
    where?: LookupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lookups to fetch.
     */
    orderBy?: LookupOrderByWithRelationInput | LookupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lookups.
     */
    cursor?: LookupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lookups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lookups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lookups.
     */
    distinct?: LookupScalarFieldEnum | LookupScalarFieldEnum[]
  }

  /**
   * Lookup findMany
   */
  export type LookupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lookup
     */
    select?: LookupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lookup
     */
    omit?: LookupOmit<ExtArgs> | null
    /**
     * Filter, which Lookups to fetch.
     */
    where?: LookupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lookups to fetch.
     */
    orderBy?: LookupOrderByWithRelationInput | LookupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lookups.
     */
    cursor?: LookupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lookups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lookups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lookups.
     */
    distinct?: LookupScalarFieldEnum | LookupScalarFieldEnum[]
  }

  /**
   * Lookup create
   */
  export type LookupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lookup
     */
    select?: LookupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lookup
     */
    omit?: LookupOmit<ExtArgs> | null
    /**
     * The data needed to create a Lookup.
     */
    data: XOR<LookupCreateInput, LookupUncheckedCreateInput>
  }

  /**
   * Lookup createMany
   */
  export type LookupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lookups.
     */
    data: LookupCreateManyInput | LookupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lookup createManyAndReturn
   */
  export type LookupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lookup
     */
    select?: LookupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lookup
     */
    omit?: LookupOmit<ExtArgs> | null
    /**
     * The data used to create many Lookups.
     */
    data: LookupCreateManyInput | LookupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lookup update
   */
  export type LookupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lookup
     */
    select?: LookupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lookup
     */
    omit?: LookupOmit<ExtArgs> | null
    /**
     * The data needed to update a Lookup.
     */
    data: XOR<LookupUpdateInput, LookupUncheckedUpdateInput>
    /**
     * Choose, which Lookup to update.
     */
    where: LookupWhereUniqueInput
  }

  /**
   * Lookup updateMany
   */
  export type LookupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lookups.
     */
    data: XOR<LookupUpdateManyMutationInput, LookupUncheckedUpdateManyInput>
    /**
     * Filter which Lookups to update
     */
    where?: LookupWhereInput
    /**
     * Limit how many Lookups to update.
     */
    limit?: number
  }

  /**
   * Lookup updateManyAndReturn
   */
  export type LookupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lookup
     */
    select?: LookupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lookup
     */
    omit?: LookupOmit<ExtArgs> | null
    /**
     * The data used to update Lookups.
     */
    data: XOR<LookupUpdateManyMutationInput, LookupUncheckedUpdateManyInput>
    /**
     * Filter which Lookups to update
     */
    where?: LookupWhereInput
    /**
     * Limit how many Lookups to update.
     */
    limit?: number
  }

  /**
   * Lookup upsert
   */
  export type LookupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lookup
     */
    select?: LookupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lookup
     */
    omit?: LookupOmit<ExtArgs> | null
    /**
     * The filter to search for the Lookup to update in case it exists.
     */
    where: LookupWhereUniqueInput
    /**
     * In case the Lookup found by the `where` argument doesn't exist, create a new Lookup with this data.
     */
    create: XOR<LookupCreateInput, LookupUncheckedCreateInput>
    /**
     * In case the Lookup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LookupUpdateInput, LookupUncheckedUpdateInput>
  }

  /**
   * Lookup delete
   */
  export type LookupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lookup
     */
    select?: LookupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lookup
     */
    omit?: LookupOmit<ExtArgs> | null
    /**
     * Filter which Lookup to delete.
     */
    where: LookupWhereUniqueInput
  }

  /**
   * Lookup deleteMany
   */
  export type LookupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lookups to delete
     */
    where?: LookupWhereInput
    /**
     * Limit how many Lookups to delete.
     */
    limit?: number
  }

  /**
   * Lookup without action
   */
  export type LookupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lookup
     */
    select?: LookupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lookup
     */
    omit?: LookupOmit<ExtArgs> | null
  }


  /**
   * Model ModeratorPermission
   */

  export type AggregateModeratorPermission = {
    _count: ModeratorPermissionCountAggregateOutputType | null
    _avg: ModeratorPermissionAvgAggregateOutputType | null
    _sum: ModeratorPermissionSumAggregateOutputType | null
    _min: ModeratorPermissionMinAggregateOutputType | null
    _max: ModeratorPermissionMaxAggregateOutputType | null
  }

  export type ModeratorPermissionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ModeratorPermissionSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ModeratorPermissionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    canAssignTeachers: boolean | null
    canApproveJobs: boolean | null
    canManageUsers: boolean | null
    canPostJobs: boolean | null
    canRejectApplications: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModeratorPermissionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    canAssignTeachers: boolean | null
    canApproveJobs: boolean | null
    canManageUsers: boolean | null
    canPostJobs: boolean | null
    canRejectApplications: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModeratorPermissionCountAggregateOutputType = {
    id: number
    userId: number
    canAssignTeachers: number
    canApproveJobs: number
    canManageUsers: number
    canPostJobs: number
    canRejectApplications: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModeratorPermissionAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ModeratorPermissionSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ModeratorPermissionMinAggregateInputType = {
    id?: true
    userId?: true
    canAssignTeachers?: true
    canApproveJobs?: true
    canManageUsers?: true
    canPostJobs?: true
    canRejectApplications?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModeratorPermissionMaxAggregateInputType = {
    id?: true
    userId?: true
    canAssignTeachers?: true
    canApproveJobs?: true
    canManageUsers?: true
    canPostJobs?: true
    canRejectApplications?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModeratorPermissionCountAggregateInputType = {
    id?: true
    userId?: true
    canAssignTeachers?: true
    canApproveJobs?: true
    canManageUsers?: true
    canPostJobs?: true
    canRejectApplications?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModeratorPermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModeratorPermission to aggregate.
     */
    where?: ModeratorPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModeratorPermissions to fetch.
     */
    orderBy?: ModeratorPermissionOrderByWithRelationInput | ModeratorPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModeratorPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModeratorPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModeratorPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModeratorPermissions
    **/
    _count?: true | ModeratorPermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModeratorPermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModeratorPermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModeratorPermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModeratorPermissionMaxAggregateInputType
  }

  export type GetModeratorPermissionAggregateType<T extends ModeratorPermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateModeratorPermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModeratorPermission[P]>
      : GetScalarType<T[P], AggregateModeratorPermission[P]>
  }




  export type ModeratorPermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModeratorPermissionWhereInput
    orderBy?: ModeratorPermissionOrderByWithAggregationInput | ModeratorPermissionOrderByWithAggregationInput[]
    by: ModeratorPermissionScalarFieldEnum[] | ModeratorPermissionScalarFieldEnum
    having?: ModeratorPermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModeratorPermissionCountAggregateInputType | true
    _avg?: ModeratorPermissionAvgAggregateInputType
    _sum?: ModeratorPermissionSumAggregateInputType
    _min?: ModeratorPermissionMinAggregateInputType
    _max?: ModeratorPermissionMaxAggregateInputType
  }

  export type ModeratorPermissionGroupByOutputType = {
    id: number
    userId: number
    canAssignTeachers: boolean
    canApproveJobs: boolean
    canManageUsers: boolean
    canPostJobs: boolean
    canRejectApplications: boolean
    createdAt: Date
    updatedAt: Date
    _count: ModeratorPermissionCountAggregateOutputType | null
    _avg: ModeratorPermissionAvgAggregateOutputType | null
    _sum: ModeratorPermissionSumAggregateOutputType | null
    _min: ModeratorPermissionMinAggregateOutputType | null
    _max: ModeratorPermissionMaxAggregateOutputType | null
  }

  type GetModeratorPermissionGroupByPayload<T extends ModeratorPermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModeratorPermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModeratorPermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModeratorPermissionGroupByOutputType[P]>
            : GetScalarType<T[P], ModeratorPermissionGroupByOutputType[P]>
        }
      >
    >


  export type ModeratorPermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    canAssignTeachers?: boolean
    canApproveJobs?: boolean
    canManageUsers?: boolean
    canPostJobs?: boolean
    canRejectApplications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moderatorPermission"]>

  export type ModeratorPermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    canAssignTeachers?: boolean
    canApproveJobs?: boolean
    canManageUsers?: boolean
    canPostJobs?: boolean
    canRejectApplications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moderatorPermission"]>

  export type ModeratorPermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    canAssignTeachers?: boolean
    canApproveJobs?: boolean
    canManageUsers?: boolean
    canPostJobs?: boolean
    canRejectApplications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moderatorPermission"]>

  export type ModeratorPermissionSelectScalar = {
    id?: boolean
    userId?: boolean
    canAssignTeachers?: boolean
    canApproveJobs?: boolean
    canManageUsers?: boolean
    canPostJobs?: boolean
    canRejectApplications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModeratorPermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "canAssignTeachers" | "canApproveJobs" | "canManageUsers" | "canPostJobs" | "canRejectApplications" | "createdAt" | "updatedAt", ExtArgs["result"]["moderatorPermission"]>
  export type ModeratorPermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ModeratorPermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ModeratorPermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ModeratorPermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModeratorPermission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      canAssignTeachers: boolean
      canApproveJobs: boolean
      canManageUsers: boolean
      canPostJobs: boolean
      canRejectApplications: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["moderatorPermission"]>
    composites: {}
  }

  type ModeratorPermissionGetPayload<S extends boolean | null | undefined | ModeratorPermissionDefaultArgs> = $Result.GetResult<Prisma.$ModeratorPermissionPayload, S>

  type ModeratorPermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModeratorPermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModeratorPermissionCountAggregateInputType | true
    }

  export interface ModeratorPermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModeratorPermission'], meta: { name: 'ModeratorPermission' } }
    /**
     * Find zero or one ModeratorPermission that matches the filter.
     * @param {ModeratorPermissionFindUniqueArgs} args - Arguments to find a ModeratorPermission
     * @example
     * // Get one ModeratorPermission
     * const moderatorPermission = await prisma.moderatorPermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModeratorPermissionFindUniqueArgs>(args: SelectSubset<T, ModeratorPermissionFindUniqueArgs<ExtArgs>>): Prisma__ModeratorPermissionClient<$Result.GetResult<Prisma.$ModeratorPermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModeratorPermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModeratorPermissionFindUniqueOrThrowArgs} args - Arguments to find a ModeratorPermission
     * @example
     * // Get one ModeratorPermission
     * const moderatorPermission = await prisma.moderatorPermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModeratorPermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, ModeratorPermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModeratorPermissionClient<$Result.GetResult<Prisma.$ModeratorPermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModeratorPermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorPermissionFindFirstArgs} args - Arguments to find a ModeratorPermission
     * @example
     * // Get one ModeratorPermission
     * const moderatorPermission = await prisma.moderatorPermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModeratorPermissionFindFirstArgs>(args?: SelectSubset<T, ModeratorPermissionFindFirstArgs<ExtArgs>>): Prisma__ModeratorPermissionClient<$Result.GetResult<Prisma.$ModeratorPermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModeratorPermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorPermissionFindFirstOrThrowArgs} args - Arguments to find a ModeratorPermission
     * @example
     * // Get one ModeratorPermission
     * const moderatorPermission = await prisma.moderatorPermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModeratorPermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, ModeratorPermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModeratorPermissionClient<$Result.GetResult<Prisma.$ModeratorPermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModeratorPermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorPermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModeratorPermissions
     * const moderatorPermissions = await prisma.moderatorPermission.findMany()
     * 
     * // Get first 10 ModeratorPermissions
     * const moderatorPermissions = await prisma.moderatorPermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moderatorPermissionWithIdOnly = await prisma.moderatorPermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModeratorPermissionFindManyArgs>(args?: SelectSubset<T, ModeratorPermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModeratorPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModeratorPermission.
     * @param {ModeratorPermissionCreateArgs} args - Arguments to create a ModeratorPermission.
     * @example
     * // Create one ModeratorPermission
     * const ModeratorPermission = await prisma.moderatorPermission.create({
     *   data: {
     *     // ... data to create a ModeratorPermission
     *   }
     * })
     * 
     */
    create<T extends ModeratorPermissionCreateArgs>(args: SelectSubset<T, ModeratorPermissionCreateArgs<ExtArgs>>): Prisma__ModeratorPermissionClient<$Result.GetResult<Prisma.$ModeratorPermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModeratorPermissions.
     * @param {ModeratorPermissionCreateManyArgs} args - Arguments to create many ModeratorPermissions.
     * @example
     * // Create many ModeratorPermissions
     * const moderatorPermission = await prisma.moderatorPermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModeratorPermissionCreateManyArgs>(args?: SelectSubset<T, ModeratorPermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModeratorPermissions and returns the data saved in the database.
     * @param {ModeratorPermissionCreateManyAndReturnArgs} args - Arguments to create many ModeratorPermissions.
     * @example
     * // Create many ModeratorPermissions
     * const moderatorPermission = await prisma.moderatorPermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModeratorPermissions and only return the `id`
     * const moderatorPermissionWithIdOnly = await prisma.moderatorPermission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModeratorPermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, ModeratorPermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModeratorPermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ModeratorPermission.
     * @param {ModeratorPermissionDeleteArgs} args - Arguments to delete one ModeratorPermission.
     * @example
     * // Delete one ModeratorPermission
     * const ModeratorPermission = await prisma.moderatorPermission.delete({
     *   where: {
     *     // ... filter to delete one ModeratorPermission
     *   }
     * })
     * 
     */
    delete<T extends ModeratorPermissionDeleteArgs>(args: SelectSubset<T, ModeratorPermissionDeleteArgs<ExtArgs>>): Prisma__ModeratorPermissionClient<$Result.GetResult<Prisma.$ModeratorPermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModeratorPermission.
     * @param {ModeratorPermissionUpdateArgs} args - Arguments to update one ModeratorPermission.
     * @example
     * // Update one ModeratorPermission
     * const moderatorPermission = await prisma.moderatorPermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModeratorPermissionUpdateArgs>(args: SelectSubset<T, ModeratorPermissionUpdateArgs<ExtArgs>>): Prisma__ModeratorPermissionClient<$Result.GetResult<Prisma.$ModeratorPermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModeratorPermissions.
     * @param {ModeratorPermissionDeleteManyArgs} args - Arguments to filter ModeratorPermissions to delete.
     * @example
     * // Delete a few ModeratorPermissions
     * const { count } = await prisma.moderatorPermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModeratorPermissionDeleteManyArgs>(args?: SelectSubset<T, ModeratorPermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModeratorPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorPermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModeratorPermissions
     * const moderatorPermission = await prisma.moderatorPermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModeratorPermissionUpdateManyArgs>(args: SelectSubset<T, ModeratorPermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModeratorPermissions and returns the data updated in the database.
     * @param {ModeratorPermissionUpdateManyAndReturnArgs} args - Arguments to update many ModeratorPermissions.
     * @example
     * // Update many ModeratorPermissions
     * const moderatorPermission = await prisma.moderatorPermission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModeratorPermissions and only return the `id`
     * const moderatorPermissionWithIdOnly = await prisma.moderatorPermission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModeratorPermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, ModeratorPermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModeratorPermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ModeratorPermission.
     * @param {ModeratorPermissionUpsertArgs} args - Arguments to update or create a ModeratorPermission.
     * @example
     * // Update or create a ModeratorPermission
     * const moderatorPermission = await prisma.moderatorPermission.upsert({
     *   create: {
     *     // ... data to create a ModeratorPermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModeratorPermission we want to update
     *   }
     * })
     */
    upsert<T extends ModeratorPermissionUpsertArgs>(args: SelectSubset<T, ModeratorPermissionUpsertArgs<ExtArgs>>): Prisma__ModeratorPermissionClient<$Result.GetResult<Prisma.$ModeratorPermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModeratorPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorPermissionCountArgs} args - Arguments to filter ModeratorPermissions to count.
     * @example
     * // Count the number of ModeratorPermissions
     * const count = await prisma.moderatorPermission.count({
     *   where: {
     *     // ... the filter for the ModeratorPermissions we want to count
     *   }
     * })
    **/
    count<T extends ModeratorPermissionCountArgs>(
      args?: Subset<T, ModeratorPermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModeratorPermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModeratorPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorPermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModeratorPermissionAggregateArgs>(args: Subset<T, ModeratorPermissionAggregateArgs>): Prisma.PrismaPromise<GetModeratorPermissionAggregateType<T>>

    /**
     * Group by ModeratorPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModeratorPermissionGroupByArgs} args - Group by arguments.
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
      T extends ModeratorPermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModeratorPermissionGroupByArgs['orderBy'] }
        : { orderBy?: ModeratorPermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModeratorPermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModeratorPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModeratorPermission model
   */
  readonly fields: ModeratorPermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModeratorPermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModeratorPermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ModeratorPermission model
   */
  interface ModeratorPermissionFieldRefs {
    readonly id: FieldRef<"ModeratorPermission", 'Int'>
    readonly userId: FieldRef<"ModeratorPermission", 'Int'>
    readonly canAssignTeachers: FieldRef<"ModeratorPermission", 'Boolean'>
    readonly canApproveJobs: FieldRef<"ModeratorPermission", 'Boolean'>
    readonly canManageUsers: FieldRef<"ModeratorPermission", 'Boolean'>
    readonly canPostJobs: FieldRef<"ModeratorPermission", 'Boolean'>
    readonly canRejectApplications: FieldRef<"ModeratorPermission", 'Boolean'>
    readonly createdAt: FieldRef<"ModeratorPermission", 'DateTime'>
    readonly updatedAt: FieldRef<"ModeratorPermission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ModeratorPermission findUnique
   */
  export type ModeratorPermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: ModeratorPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: ModeratorPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeratorPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ModeratorPermission to fetch.
     */
    where: ModeratorPermissionWhereUniqueInput
  }

  /**
   * ModeratorPermission findUniqueOrThrow
   */
  export type ModeratorPermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: ModeratorPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: ModeratorPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeratorPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ModeratorPermission to fetch.
     */
    where: ModeratorPermissionWhereUniqueInput
  }

  /**
   * ModeratorPermission findFirst
   */
  export type ModeratorPermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: ModeratorPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: ModeratorPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeratorPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ModeratorPermission to fetch.
     */
    where?: ModeratorPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModeratorPermissions to fetch.
     */
    orderBy?: ModeratorPermissionOrderByWithRelationInput | ModeratorPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModeratorPermissions.
     */
    cursor?: ModeratorPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModeratorPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModeratorPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModeratorPermissions.
     */
    distinct?: ModeratorPermissionScalarFieldEnum | ModeratorPermissionScalarFieldEnum[]
  }

  /**
   * ModeratorPermission findFirstOrThrow
   */
  export type ModeratorPermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: ModeratorPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: ModeratorPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeratorPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ModeratorPermission to fetch.
     */
    where?: ModeratorPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModeratorPermissions to fetch.
     */
    orderBy?: ModeratorPermissionOrderByWithRelationInput | ModeratorPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModeratorPermissions.
     */
    cursor?: ModeratorPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModeratorPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModeratorPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModeratorPermissions.
     */
    distinct?: ModeratorPermissionScalarFieldEnum | ModeratorPermissionScalarFieldEnum[]
  }

  /**
   * ModeratorPermission findMany
   */
  export type ModeratorPermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: ModeratorPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: ModeratorPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeratorPermissionInclude<ExtArgs> | null
    /**
     * Filter, which ModeratorPermissions to fetch.
     */
    where?: ModeratorPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModeratorPermissions to fetch.
     */
    orderBy?: ModeratorPermissionOrderByWithRelationInput | ModeratorPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModeratorPermissions.
     */
    cursor?: ModeratorPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModeratorPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModeratorPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModeratorPermissions.
     */
    distinct?: ModeratorPermissionScalarFieldEnum | ModeratorPermissionScalarFieldEnum[]
  }

  /**
   * ModeratorPermission create
   */
  export type ModeratorPermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: ModeratorPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: ModeratorPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeratorPermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a ModeratorPermission.
     */
    data: XOR<ModeratorPermissionCreateInput, ModeratorPermissionUncheckedCreateInput>
  }

  /**
   * ModeratorPermission createMany
   */
  export type ModeratorPermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModeratorPermissions.
     */
    data: ModeratorPermissionCreateManyInput | ModeratorPermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModeratorPermission createManyAndReturn
   */
  export type ModeratorPermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: ModeratorPermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: ModeratorPermissionOmit<ExtArgs> | null
    /**
     * The data used to create many ModeratorPermissions.
     */
    data: ModeratorPermissionCreateManyInput | ModeratorPermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeratorPermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModeratorPermission update
   */
  export type ModeratorPermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: ModeratorPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: ModeratorPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeratorPermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a ModeratorPermission.
     */
    data: XOR<ModeratorPermissionUpdateInput, ModeratorPermissionUncheckedUpdateInput>
    /**
     * Choose, which ModeratorPermission to update.
     */
    where: ModeratorPermissionWhereUniqueInput
  }

  /**
   * ModeratorPermission updateMany
   */
  export type ModeratorPermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModeratorPermissions.
     */
    data: XOR<ModeratorPermissionUpdateManyMutationInput, ModeratorPermissionUncheckedUpdateManyInput>
    /**
     * Filter which ModeratorPermissions to update
     */
    where?: ModeratorPermissionWhereInput
    /**
     * Limit how many ModeratorPermissions to update.
     */
    limit?: number
  }

  /**
   * ModeratorPermission updateManyAndReturn
   */
  export type ModeratorPermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: ModeratorPermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: ModeratorPermissionOmit<ExtArgs> | null
    /**
     * The data used to update ModeratorPermissions.
     */
    data: XOR<ModeratorPermissionUpdateManyMutationInput, ModeratorPermissionUncheckedUpdateManyInput>
    /**
     * Filter which ModeratorPermissions to update
     */
    where?: ModeratorPermissionWhereInput
    /**
     * Limit how many ModeratorPermissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeratorPermissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModeratorPermission upsert
   */
  export type ModeratorPermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: ModeratorPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: ModeratorPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeratorPermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the ModeratorPermission to update in case it exists.
     */
    where: ModeratorPermissionWhereUniqueInput
    /**
     * In case the ModeratorPermission found by the `where` argument doesn't exist, create a new ModeratorPermission with this data.
     */
    create: XOR<ModeratorPermissionCreateInput, ModeratorPermissionUncheckedCreateInput>
    /**
     * In case the ModeratorPermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModeratorPermissionUpdateInput, ModeratorPermissionUncheckedUpdateInput>
  }

  /**
   * ModeratorPermission delete
   */
  export type ModeratorPermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: ModeratorPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: ModeratorPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeratorPermissionInclude<ExtArgs> | null
    /**
     * Filter which ModeratorPermission to delete.
     */
    where: ModeratorPermissionWhereUniqueInput
  }

  /**
   * ModeratorPermission deleteMany
   */
  export type ModeratorPermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModeratorPermissions to delete
     */
    where?: ModeratorPermissionWhereInput
    /**
     * Limit how many ModeratorPermissions to delete.
     */
    limit?: number
  }

  /**
   * ModeratorPermission without action
   */
  export type ModeratorPermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: ModeratorPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: ModeratorPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeratorPermissionInclude<ExtArgs> | null
  }


  /**
   * Model StudentProfile
   */

  export type AggregateStudentProfile = {
    _count: StudentProfileCountAggregateOutputType | null
    _avg: StudentProfileAvgAggregateOutputType | null
    _sum: StudentProfileSumAggregateOutputType | null
    _min: StudentProfileMinAggregateOutputType | null
    _max: StudentProfileMaxAggregateOutputType | null
  }

  export type StudentProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    gradeLevel: number | null
  }

  export type StudentProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
    gradeLevel: number | null
  }

  export type StudentProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    gradeLevel: number | null
    institution: string | null
    createdAt: Date | null
    updatedAt: Date | null
    contact: string | null
  }

  export type StudentProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    gradeLevel: number | null
    institution: string | null
    createdAt: Date | null
    updatedAt: Date | null
    contact: string | null
  }

  export type StudentProfileCountAggregateOutputType = {
    id: number
    userId: number
    gradeLevel: number
    institution: number
    createdAt: number
    updatedAt: number
    contact: number
    _all: number
  }


  export type StudentProfileAvgAggregateInputType = {
    id?: true
    userId?: true
    gradeLevel?: true
  }

  export type StudentProfileSumAggregateInputType = {
    id?: true
    userId?: true
    gradeLevel?: true
  }

  export type StudentProfileMinAggregateInputType = {
    id?: true
    userId?: true
    gradeLevel?: true
    institution?: true
    createdAt?: true
    updatedAt?: true
    contact?: true
  }

  export type StudentProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    gradeLevel?: true
    institution?: true
    createdAt?: true
    updatedAt?: true
    contact?: true
  }

  export type StudentProfileCountAggregateInputType = {
    id?: true
    userId?: true
    gradeLevel?: true
    institution?: true
    createdAt?: true
    updatedAt?: true
    contact?: true
    _all?: true
  }

  export type StudentProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProfile to aggregate.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentProfiles
    **/
    _count?: true | StudentProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentProfileMaxAggregateInputType
  }

  export type GetStudentProfileAggregateType<T extends StudentProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentProfile[P]>
      : GetScalarType<T[P], AggregateStudentProfile[P]>
  }




  export type StudentProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProfileWhereInput
    orderBy?: StudentProfileOrderByWithAggregationInput | StudentProfileOrderByWithAggregationInput[]
    by: StudentProfileScalarFieldEnum[] | StudentProfileScalarFieldEnum
    having?: StudentProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentProfileCountAggregateInputType | true
    _avg?: StudentProfileAvgAggregateInputType
    _sum?: StudentProfileSumAggregateInputType
    _min?: StudentProfileMinAggregateInputType
    _max?: StudentProfileMaxAggregateInputType
  }

  export type StudentProfileGroupByOutputType = {
    id: number
    userId: number
    gradeLevel: number | null
    institution: string | null
    createdAt: Date
    updatedAt: Date
    contact: string | null
    _count: StudentProfileCountAggregateOutputType | null
    _avg: StudentProfileAvgAggregateOutputType | null
    _sum: StudentProfileSumAggregateOutputType | null
    _min: StudentProfileMinAggregateOutputType | null
    _max: StudentProfileMaxAggregateOutputType | null
  }

  type GetStudentProfileGroupByPayload<T extends StudentProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentProfileGroupByOutputType[P]>
            : GetScalarType<T[P], StudentProfileGroupByOutputType[P]>
        }
      >
    >


  export type StudentProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gradeLevel?: boolean
    institution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contact?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gradeLevel?: boolean
    institution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contact?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gradeLevel?: boolean
    institution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contact?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    gradeLevel?: boolean
    institution?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contact?: boolean
  }

  export type StudentProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "gradeLevel" | "institution" | "createdAt" | "updatedAt" | "contact", ExtArgs["result"]["studentProfile"]>
  export type StudentProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudentProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudentProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudentProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      gradeLevel: number | null
      institution: string | null
      createdAt: Date
      updatedAt: Date
      contact: string | null
    }, ExtArgs["result"]["studentProfile"]>
    composites: {}
  }

  type StudentProfileGetPayload<S extends boolean | null | undefined | StudentProfileDefaultArgs> = $Result.GetResult<Prisma.$StudentProfilePayload, S>

  type StudentProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentProfileCountAggregateInputType | true
    }

  export interface StudentProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentProfile'], meta: { name: 'StudentProfile' } }
    /**
     * Find zero or one StudentProfile that matches the filter.
     * @param {StudentProfileFindUniqueArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentProfileFindUniqueArgs>(args: SelectSubset<T, StudentProfileFindUniqueArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentProfileFindUniqueOrThrowArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindFirstArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentProfileFindFirstArgs>(args?: SelectSubset<T, StudentProfileFindFirstArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindFirstOrThrowArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentProfiles
     * const studentProfiles = await prisma.studentProfile.findMany()
     * 
     * // Get first 10 StudentProfiles
     * const studentProfiles = await prisma.studentProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentProfileFindManyArgs>(args?: SelectSubset<T, StudentProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentProfile.
     * @param {StudentProfileCreateArgs} args - Arguments to create a StudentProfile.
     * @example
     * // Create one StudentProfile
     * const StudentProfile = await prisma.studentProfile.create({
     *   data: {
     *     // ... data to create a StudentProfile
     *   }
     * })
     * 
     */
    create<T extends StudentProfileCreateArgs>(args: SelectSubset<T, StudentProfileCreateArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentProfiles.
     * @param {StudentProfileCreateManyArgs} args - Arguments to create many StudentProfiles.
     * @example
     * // Create many StudentProfiles
     * const studentProfile = await prisma.studentProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentProfileCreateManyArgs>(args?: SelectSubset<T, StudentProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentProfiles and returns the data saved in the database.
     * @param {StudentProfileCreateManyAndReturnArgs} args - Arguments to create many StudentProfiles.
     * @example
     * // Create many StudentProfiles
     * const studentProfile = await prisma.studentProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentProfiles and only return the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentProfile.
     * @param {StudentProfileDeleteArgs} args - Arguments to delete one StudentProfile.
     * @example
     * // Delete one StudentProfile
     * const StudentProfile = await prisma.studentProfile.delete({
     *   where: {
     *     // ... filter to delete one StudentProfile
     *   }
     * })
     * 
     */
    delete<T extends StudentProfileDeleteArgs>(args: SelectSubset<T, StudentProfileDeleteArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentProfile.
     * @param {StudentProfileUpdateArgs} args - Arguments to update one StudentProfile.
     * @example
     * // Update one StudentProfile
     * const studentProfile = await prisma.studentProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentProfileUpdateArgs>(args: SelectSubset<T, StudentProfileUpdateArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentProfiles.
     * @param {StudentProfileDeleteManyArgs} args - Arguments to filter StudentProfiles to delete.
     * @example
     * // Delete a few StudentProfiles
     * const { count } = await prisma.studentProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentProfileDeleteManyArgs>(args?: SelectSubset<T, StudentProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentProfiles
     * const studentProfile = await prisma.studentProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentProfileUpdateManyArgs>(args: SelectSubset<T, StudentProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProfiles and returns the data updated in the database.
     * @param {StudentProfileUpdateManyAndReturnArgs} args - Arguments to update many StudentProfiles.
     * @example
     * // Update many StudentProfiles
     * const studentProfile = await prisma.studentProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentProfiles and only return the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentProfile.
     * @param {StudentProfileUpsertArgs} args - Arguments to update or create a StudentProfile.
     * @example
     * // Update or create a StudentProfile
     * const studentProfile = await prisma.studentProfile.upsert({
     *   create: {
     *     // ... data to create a StudentProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentProfile we want to update
     *   }
     * })
     */
    upsert<T extends StudentProfileUpsertArgs>(args: SelectSubset<T, StudentProfileUpsertArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileCountArgs} args - Arguments to filter StudentProfiles to count.
     * @example
     * // Count the number of StudentProfiles
     * const count = await prisma.studentProfile.count({
     *   where: {
     *     // ... the filter for the StudentProfiles we want to count
     *   }
     * })
    **/
    count<T extends StudentProfileCountArgs>(
      args?: Subset<T, StudentProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentProfileAggregateArgs>(args: Subset<T, StudentProfileAggregateArgs>): Prisma.PrismaPromise<GetStudentProfileAggregateType<T>>

    /**
     * Group by StudentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileGroupByArgs} args - Group by arguments.
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
      T extends StudentProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentProfileGroupByArgs['orderBy'] }
        : { orderBy?: StudentProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentProfile model
   */
  readonly fields: StudentProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudentProfile model
   */
  interface StudentProfileFieldRefs {
    readonly id: FieldRef<"StudentProfile", 'Int'>
    readonly userId: FieldRef<"StudentProfile", 'Int'>
    readonly gradeLevel: FieldRef<"StudentProfile", 'Int'>
    readonly institution: FieldRef<"StudentProfile", 'String'>
    readonly createdAt: FieldRef<"StudentProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentProfile", 'DateTime'>
    readonly contact: FieldRef<"StudentProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StudentProfile findUnique
   */
  export type StudentProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile findUniqueOrThrow
   */
  export type StudentProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile findFirst
   */
  export type StudentProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile findFirstOrThrow
   */
  export type StudentProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile findMany
   */
  export type StudentProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfiles to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile create
   */
  export type StudentProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentProfile.
     */
    data: XOR<StudentProfileCreateInput, StudentProfileUncheckedCreateInput>
  }

  /**
   * StudentProfile createMany
   */
  export type StudentProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentProfiles.
     */
    data: StudentProfileCreateManyInput | StudentProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentProfile createManyAndReturn
   */
  export type StudentProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * The data used to create many StudentProfiles.
     */
    data: StudentProfileCreateManyInput | StudentProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentProfile update
   */
  export type StudentProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentProfile.
     */
    data: XOR<StudentProfileUpdateInput, StudentProfileUncheckedUpdateInput>
    /**
     * Choose, which StudentProfile to update.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile updateMany
   */
  export type StudentProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentProfiles.
     */
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyInput>
    /**
     * Filter which StudentProfiles to update
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to update.
     */
    limit?: number
  }

  /**
   * StudentProfile updateManyAndReturn
   */
  export type StudentProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * The data used to update StudentProfiles.
     */
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyInput>
    /**
     * Filter which StudentProfiles to update
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentProfile upsert
   */
  export type StudentProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentProfile to update in case it exists.
     */
    where: StudentProfileWhereUniqueInput
    /**
     * In case the StudentProfile found by the `where` argument doesn't exist, create a new StudentProfile with this data.
     */
    create: XOR<StudentProfileCreateInput, StudentProfileUncheckedCreateInput>
    /**
     * In case the StudentProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentProfileUpdateInput, StudentProfileUncheckedUpdateInput>
  }

  /**
   * StudentProfile delete
   */
  export type StudentProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter which StudentProfile to delete.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile deleteMany
   */
  export type StudentProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProfiles to delete
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to delete.
     */
    limit?: number
  }

  /**
   * StudentProfile without action
   */
  export type StudentProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
  }


  /**
   * Model TeacherProfile
   */

  export type AggregateTeacherProfile = {
    _count: TeacherProfileCountAggregateOutputType | null
    _avg: TeacherProfileAvgAggregateOutputType | null
    _sum: TeacherProfileSumAggregateOutputType | null
    _min: TeacherProfileMinAggregateOutputType | null
    _max: TeacherProfileMaxAggregateOutputType | null
  }

  export type TeacherProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    experienceYears: number | null
  }

  export type TeacherProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
    experienceYears: number | null
  }

  export type TeacherProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    bio: string | null
    experienceYears: number | null
    educationalBackground: string | null
    cvUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    bio: string | null
    experienceYears: number | null
    educationalBackground: string | null
    cvUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherProfileCountAggregateOutputType = {
    id: number
    userId: number
    bio: number
    experienceYears: number
    educationalBackground: number
    cvUrl: number
    medium: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeacherProfileAvgAggregateInputType = {
    id?: true
    userId?: true
    experienceYears?: true
  }

  export type TeacherProfileSumAggregateInputType = {
    id?: true
    userId?: true
    experienceYears?: true
  }

  export type TeacherProfileMinAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    experienceYears?: true
    educationalBackground?: true
    cvUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeacherProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    experienceYears?: true
    educationalBackground?: true
    cvUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeacherProfileCountAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    experienceYears?: true
    educationalBackground?: true
    cvUrl?: true
    medium?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeacherProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherProfile to aggregate.
     */
    where?: TeacherProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherProfiles to fetch.
     */
    orderBy?: TeacherProfileOrderByWithRelationInput | TeacherProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeacherProfiles
    **/
    _count?: true | TeacherProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherProfileMaxAggregateInputType
  }

  export type GetTeacherProfileAggregateType<T extends TeacherProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacherProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacherProfile[P]>
      : GetScalarType<T[P], AggregateTeacherProfile[P]>
  }




  export type TeacherProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherProfileWhereInput
    orderBy?: TeacherProfileOrderByWithAggregationInput | TeacherProfileOrderByWithAggregationInput[]
    by: TeacherProfileScalarFieldEnum[] | TeacherProfileScalarFieldEnum
    having?: TeacherProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherProfileCountAggregateInputType | true
    _avg?: TeacherProfileAvgAggregateInputType
    _sum?: TeacherProfileSumAggregateInputType
    _min?: TeacherProfileMinAggregateInputType
    _max?: TeacherProfileMaxAggregateInputType
  }

  export type TeacherProfileGroupByOutputType = {
    id: number
    userId: number
    bio: string | null
    experienceYears: number | null
    educationalBackground: string | null
    cvUrl: string | null
    medium: $Enums.Medium[]
    createdAt: Date
    updatedAt: Date
    _count: TeacherProfileCountAggregateOutputType | null
    _avg: TeacherProfileAvgAggregateOutputType | null
    _sum: TeacherProfileSumAggregateOutputType | null
    _min: TeacherProfileMinAggregateOutputType | null
    _max: TeacherProfileMaxAggregateOutputType | null
  }

  type GetTeacherProfileGroupByPayload<T extends TeacherProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherProfileGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherProfileGroupByOutputType[P]>
        }
      >
    >


  export type TeacherProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    experienceYears?: boolean
    educationalBackground?: boolean
    cvUrl?: boolean
    medium?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherProfile"]>

  export type TeacherProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    experienceYears?: boolean
    educationalBackground?: boolean
    cvUrl?: boolean
    medium?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherProfile"]>

  export type TeacherProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    experienceYears?: boolean
    educationalBackground?: boolean
    cvUrl?: boolean
    medium?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherProfile"]>

  export type TeacherProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    bio?: boolean
    experienceYears?: boolean
    educationalBackground?: boolean
    cvUrl?: boolean
    medium?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeacherProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bio" | "experienceYears" | "educationalBackground" | "cvUrl" | "medium" | "createdAt" | "updatedAt", ExtArgs["result"]["teacherProfile"]>
  export type TeacherProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeacherProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeacherProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TeacherProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeacherProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      bio: string | null
      experienceYears: number | null
      educationalBackground: string | null
      cvUrl: string | null
      medium: $Enums.Medium[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teacherProfile"]>
    composites: {}
  }

  type TeacherProfileGetPayload<S extends boolean | null | undefined | TeacherProfileDefaultArgs> = $Result.GetResult<Prisma.$TeacherProfilePayload, S>

  type TeacherProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherProfileCountAggregateInputType | true
    }

  export interface TeacherProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeacherProfile'], meta: { name: 'TeacherProfile' } }
    /**
     * Find zero or one TeacherProfile that matches the filter.
     * @param {TeacherProfileFindUniqueArgs} args - Arguments to find a TeacherProfile
     * @example
     * // Get one TeacherProfile
     * const teacherProfile = await prisma.teacherProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherProfileFindUniqueArgs>(args: SelectSubset<T, TeacherProfileFindUniqueArgs<ExtArgs>>): Prisma__TeacherProfileClient<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeacherProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherProfileFindUniqueOrThrowArgs} args - Arguments to find a TeacherProfile
     * @example
     * // Get one TeacherProfile
     * const teacherProfile = await prisma.teacherProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherProfileClient<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherProfileFindFirstArgs} args - Arguments to find a TeacherProfile
     * @example
     * // Get one TeacherProfile
     * const teacherProfile = await prisma.teacherProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherProfileFindFirstArgs>(args?: SelectSubset<T, TeacherProfileFindFirstArgs<ExtArgs>>): Prisma__TeacherProfileClient<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherProfileFindFirstOrThrowArgs} args - Arguments to find a TeacherProfile
     * @example
     * // Get one TeacherProfile
     * const teacherProfile = await prisma.teacherProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherProfileClient<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeacherProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherProfiles
     * const teacherProfiles = await prisma.teacherProfile.findMany()
     * 
     * // Get first 10 TeacherProfiles
     * const teacherProfiles = await prisma.teacherProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherProfileWithIdOnly = await prisma.teacherProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherProfileFindManyArgs>(args?: SelectSubset<T, TeacherProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeacherProfile.
     * @param {TeacherProfileCreateArgs} args - Arguments to create a TeacherProfile.
     * @example
     * // Create one TeacherProfile
     * const TeacherProfile = await prisma.teacherProfile.create({
     *   data: {
     *     // ... data to create a TeacherProfile
     *   }
     * })
     * 
     */
    create<T extends TeacherProfileCreateArgs>(args: SelectSubset<T, TeacherProfileCreateArgs<ExtArgs>>): Prisma__TeacherProfileClient<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeacherProfiles.
     * @param {TeacherProfileCreateManyArgs} args - Arguments to create many TeacherProfiles.
     * @example
     * // Create many TeacherProfiles
     * const teacherProfile = await prisma.teacherProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherProfileCreateManyArgs>(args?: SelectSubset<T, TeacherProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeacherProfiles and returns the data saved in the database.
     * @param {TeacherProfileCreateManyAndReturnArgs} args - Arguments to create many TeacherProfiles.
     * @example
     * // Create many TeacherProfiles
     * const teacherProfile = await prisma.teacherProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeacherProfiles and only return the `id`
     * const teacherProfileWithIdOnly = await prisma.teacherProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeacherProfile.
     * @param {TeacherProfileDeleteArgs} args - Arguments to delete one TeacherProfile.
     * @example
     * // Delete one TeacherProfile
     * const TeacherProfile = await prisma.teacherProfile.delete({
     *   where: {
     *     // ... filter to delete one TeacherProfile
     *   }
     * })
     * 
     */
    delete<T extends TeacherProfileDeleteArgs>(args: SelectSubset<T, TeacherProfileDeleteArgs<ExtArgs>>): Prisma__TeacherProfileClient<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeacherProfile.
     * @param {TeacherProfileUpdateArgs} args - Arguments to update one TeacherProfile.
     * @example
     * // Update one TeacherProfile
     * const teacherProfile = await prisma.teacherProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherProfileUpdateArgs>(args: SelectSubset<T, TeacherProfileUpdateArgs<ExtArgs>>): Prisma__TeacherProfileClient<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeacherProfiles.
     * @param {TeacherProfileDeleteManyArgs} args - Arguments to filter TeacherProfiles to delete.
     * @example
     * // Delete a few TeacherProfiles
     * const { count } = await prisma.teacherProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherProfileDeleteManyArgs>(args?: SelectSubset<T, TeacherProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherProfiles
     * const teacherProfile = await prisma.teacherProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherProfileUpdateManyArgs>(args: SelectSubset<T, TeacherProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherProfiles and returns the data updated in the database.
     * @param {TeacherProfileUpdateManyAndReturnArgs} args - Arguments to update many TeacherProfiles.
     * @example
     * // Update many TeacherProfiles
     * const teacherProfile = await prisma.teacherProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeacherProfiles and only return the `id`
     * const teacherProfileWithIdOnly = await prisma.teacherProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeacherProfile.
     * @param {TeacherProfileUpsertArgs} args - Arguments to update or create a TeacherProfile.
     * @example
     * // Update or create a TeacherProfile
     * const teacherProfile = await prisma.teacherProfile.upsert({
     *   create: {
     *     // ... data to create a TeacherProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherProfile we want to update
     *   }
     * })
     */
    upsert<T extends TeacherProfileUpsertArgs>(args: SelectSubset<T, TeacherProfileUpsertArgs<ExtArgs>>): Prisma__TeacherProfileClient<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeacherProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherProfileCountArgs} args - Arguments to filter TeacherProfiles to count.
     * @example
     * // Count the number of TeacherProfiles
     * const count = await prisma.teacherProfile.count({
     *   where: {
     *     // ... the filter for the TeacherProfiles we want to count
     *   }
     * })
    **/
    count<T extends TeacherProfileCountArgs>(
      args?: Subset<T, TeacherProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeacherProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherProfileAggregateArgs>(args: Subset<T, TeacherProfileAggregateArgs>): Prisma.PrismaPromise<GetTeacherProfileAggregateType<T>>

    /**
     * Group by TeacherProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherProfileGroupByArgs} args - Group by arguments.
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
      T extends TeacherProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherProfileGroupByArgs['orderBy'] }
        : { orderBy?: TeacherProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeacherProfile model
   */
  readonly fields: TeacherProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeacherProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeacherProfile model
   */
  interface TeacherProfileFieldRefs {
    readonly id: FieldRef<"TeacherProfile", 'Int'>
    readonly userId: FieldRef<"TeacherProfile", 'Int'>
    readonly bio: FieldRef<"TeacherProfile", 'String'>
    readonly experienceYears: FieldRef<"TeacherProfile", 'Int'>
    readonly educationalBackground: FieldRef<"TeacherProfile", 'String'>
    readonly cvUrl: FieldRef<"TeacherProfile", 'String'>
    readonly medium: FieldRef<"TeacherProfile", 'Medium[]'>
    readonly createdAt: FieldRef<"TeacherProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"TeacherProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeacherProfile findUnique
   */
  export type TeacherProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileInclude<ExtArgs> | null
    /**
     * Filter, which TeacherProfile to fetch.
     */
    where: TeacherProfileWhereUniqueInput
  }

  /**
   * TeacherProfile findUniqueOrThrow
   */
  export type TeacherProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileInclude<ExtArgs> | null
    /**
     * Filter, which TeacherProfile to fetch.
     */
    where: TeacherProfileWhereUniqueInput
  }

  /**
   * TeacherProfile findFirst
   */
  export type TeacherProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileInclude<ExtArgs> | null
    /**
     * Filter, which TeacherProfile to fetch.
     */
    where?: TeacherProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherProfiles to fetch.
     */
    orderBy?: TeacherProfileOrderByWithRelationInput | TeacherProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherProfiles.
     */
    cursor?: TeacherProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherProfiles.
     */
    distinct?: TeacherProfileScalarFieldEnum | TeacherProfileScalarFieldEnum[]
  }

  /**
   * TeacherProfile findFirstOrThrow
   */
  export type TeacherProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileInclude<ExtArgs> | null
    /**
     * Filter, which TeacherProfile to fetch.
     */
    where?: TeacherProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherProfiles to fetch.
     */
    orderBy?: TeacherProfileOrderByWithRelationInput | TeacherProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherProfiles.
     */
    cursor?: TeacherProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherProfiles.
     */
    distinct?: TeacherProfileScalarFieldEnum | TeacherProfileScalarFieldEnum[]
  }

  /**
   * TeacherProfile findMany
   */
  export type TeacherProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileInclude<ExtArgs> | null
    /**
     * Filter, which TeacherProfiles to fetch.
     */
    where?: TeacherProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherProfiles to fetch.
     */
    orderBy?: TeacherProfileOrderByWithRelationInput | TeacherProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeacherProfiles.
     */
    cursor?: TeacherProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherProfiles.
     */
    distinct?: TeacherProfileScalarFieldEnum | TeacherProfileScalarFieldEnum[]
  }

  /**
   * TeacherProfile create
   */
  export type TeacherProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a TeacherProfile.
     */
    data: XOR<TeacherProfileCreateInput, TeacherProfileUncheckedCreateInput>
  }

  /**
   * TeacherProfile createMany
   */
  export type TeacherProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherProfiles.
     */
    data: TeacherProfileCreateManyInput | TeacherProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeacherProfile createManyAndReturn
   */
  export type TeacherProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * The data used to create many TeacherProfiles.
     */
    data: TeacherProfileCreateManyInput | TeacherProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherProfile update
   */
  export type TeacherProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a TeacherProfile.
     */
    data: XOR<TeacherProfileUpdateInput, TeacherProfileUncheckedUpdateInput>
    /**
     * Choose, which TeacherProfile to update.
     */
    where: TeacherProfileWhereUniqueInput
  }

  /**
   * TeacherProfile updateMany
   */
  export type TeacherProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherProfiles.
     */
    data: XOR<TeacherProfileUpdateManyMutationInput, TeacherProfileUncheckedUpdateManyInput>
    /**
     * Filter which TeacherProfiles to update
     */
    where?: TeacherProfileWhereInput
    /**
     * Limit how many TeacherProfiles to update.
     */
    limit?: number
  }

  /**
   * TeacherProfile updateManyAndReturn
   */
  export type TeacherProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * The data used to update TeacherProfiles.
     */
    data: XOR<TeacherProfileUpdateManyMutationInput, TeacherProfileUncheckedUpdateManyInput>
    /**
     * Filter which TeacherProfiles to update
     */
    where?: TeacherProfileWhereInput
    /**
     * Limit how many TeacherProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherProfile upsert
   */
  export type TeacherProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the TeacherProfile to update in case it exists.
     */
    where: TeacherProfileWhereUniqueInput
    /**
     * In case the TeacherProfile found by the `where` argument doesn't exist, create a new TeacherProfile with this data.
     */
    create: XOR<TeacherProfileCreateInput, TeacherProfileUncheckedCreateInput>
    /**
     * In case the TeacherProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherProfileUpdateInput, TeacherProfileUncheckedUpdateInput>
  }

  /**
   * TeacherProfile delete
   */
  export type TeacherProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileInclude<ExtArgs> | null
    /**
     * Filter which TeacherProfile to delete.
     */
    where: TeacherProfileWhereUniqueInput
  }

  /**
   * TeacherProfile deleteMany
   */
  export type TeacherProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherProfiles to delete
     */
    where?: TeacherProfileWhereInput
    /**
     * Limit how many TeacherProfiles to delete.
     */
    limit?: number
  }

  /**
   * TeacherProfile without action
   */
  export type TeacherProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileInclude<ExtArgs> | null
  }


  /**
   * Model TuitionPost
   */

  export type AggregateTuitionPost = {
    _count: TuitionPostCountAggregateOutputType | null
    _avg: TuitionPostAvgAggregateOutputType | null
    _sum: TuitionPostSumAggregateOutputType | null
    _min: TuitionPostMinAggregateOutputType | null
    _max: TuitionPostMaxAggregateOutputType | null
  }

  export type TuitionPostAvgAggregateOutputType = {
    id: number | null
    postedBy: number | null
    budget: Decimal | null
    area: number | null
    status: number | null
    subjects: number | null
  }

  export type TuitionPostSumAggregateOutputType = {
    id: number | null
    postedBy: number | null
    budget: Decimal | null
    area: number | null
    status: number | null
    subjects: number[]
  }

  export type TuitionPostMinAggregateOutputType = {
    id: number | null
    postedBy: number | null
    title: string | null
    description: string | null
    budget: Decimal | null
    medium: $Enums.Medium | null
    area: number | null
    startTime: string | null
    endTime: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TuitionPostMaxAggregateOutputType = {
    id: number | null
    postedBy: number | null
    title: string | null
    description: string | null
    budget: Decimal | null
    medium: $Enums.Medium | null
    area: number | null
    startTime: string | null
    endTime: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TuitionPostCountAggregateOutputType = {
    id: number
    postedBy: number
    title: number
    description: number
    budget: number
    medium: number
    area: number
    days: number
    startTime: number
    endTime: number
    status: number
    createdAt: number
    updatedAt: number
    subjects: number
    _all: number
  }


  export type TuitionPostAvgAggregateInputType = {
    id?: true
    postedBy?: true
    budget?: true
    area?: true
    status?: true
    subjects?: true
  }

  export type TuitionPostSumAggregateInputType = {
    id?: true
    postedBy?: true
    budget?: true
    area?: true
    status?: true
    subjects?: true
  }

  export type TuitionPostMinAggregateInputType = {
    id?: true
    postedBy?: true
    title?: true
    description?: true
    budget?: true
    medium?: true
    area?: true
    startTime?: true
    endTime?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TuitionPostMaxAggregateInputType = {
    id?: true
    postedBy?: true
    title?: true
    description?: true
    budget?: true
    medium?: true
    area?: true
    startTime?: true
    endTime?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TuitionPostCountAggregateInputType = {
    id?: true
    postedBy?: true
    title?: true
    description?: true
    budget?: true
    medium?: true
    area?: true
    days?: true
    startTime?: true
    endTime?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    subjects?: true
    _all?: true
  }

  export type TuitionPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TuitionPost to aggregate.
     */
    where?: TuitionPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TuitionPosts to fetch.
     */
    orderBy?: TuitionPostOrderByWithRelationInput | TuitionPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TuitionPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TuitionPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TuitionPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TuitionPosts
    **/
    _count?: true | TuitionPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TuitionPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TuitionPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TuitionPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TuitionPostMaxAggregateInputType
  }

  export type GetTuitionPostAggregateType<T extends TuitionPostAggregateArgs> = {
        [P in keyof T & keyof AggregateTuitionPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTuitionPost[P]>
      : GetScalarType<T[P], AggregateTuitionPost[P]>
  }




  export type TuitionPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TuitionPostWhereInput
    orderBy?: TuitionPostOrderByWithAggregationInput | TuitionPostOrderByWithAggregationInput[]
    by: TuitionPostScalarFieldEnum[] | TuitionPostScalarFieldEnum
    having?: TuitionPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TuitionPostCountAggregateInputType | true
    _avg?: TuitionPostAvgAggregateInputType
    _sum?: TuitionPostSumAggregateInputType
    _min?: TuitionPostMinAggregateInputType
    _max?: TuitionPostMaxAggregateInputType
  }

  export type TuitionPostGroupByOutputType = {
    id: number
    postedBy: number
    title: string
    description: string | null
    budget: Decimal | null
    medium: $Enums.Medium
    area: number
    days: $Enums.Day[]
    startTime: string
    endTime: string
    status: number
    createdAt: Date
    updatedAt: Date
    subjects: number[]
    _count: TuitionPostCountAggregateOutputType | null
    _avg: TuitionPostAvgAggregateOutputType | null
    _sum: TuitionPostSumAggregateOutputType | null
    _min: TuitionPostMinAggregateOutputType | null
    _max: TuitionPostMaxAggregateOutputType | null
  }

  type GetTuitionPostGroupByPayload<T extends TuitionPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TuitionPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TuitionPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TuitionPostGroupByOutputType[P]>
            : GetScalarType<T[P], TuitionPostGroupByOutputType[P]>
        }
      >
    >


  export type TuitionPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postedBy?: boolean
    title?: boolean
    description?: boolean
    budget?: boolean
    medium?: boolean
    area?: boolean
    days?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subjects?: boolean
    postedByUser?: boolean | UserDefaultArgs<ExtArgs>
    assigns?: boolean | TuitionPost$assignsArgs<ExtArgs>
  }, ExtArgs["result"]["tuitionPost"]>

  export type TuitionPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postedBy?: boolean
    title?: boolean
    description?: boolean
    budget?: boolean
    medium?: boolean
    area?: boolean
    days?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subjects?: boolean
    postedByUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tuitionPost"]>

  export type TuitionPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postedBy?: boolean
    title?: boolean
    description?: boolean
    budget?: boolean
    medium?: boolean
    area?: boolean
    days?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subjects?: boolean
    postedByUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tuitionPost"]>

  export type TuitionPostSelectScalar = {
    id?: boolean
    postedBy?: boolean
    title?: boolean
    description?: boolean
    budget?: boolean
    medium?: boolean
    area?: boolean
    days?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subjects?: boolean
  }

  export type TuitionPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postedBy" | "title" | "description" | "budget" | "medium" | "area" | "days" | "startTime" | "endTime" | "status" | "createdAt" | "updatedAt" | "subjects", ExtArgs["result"]["tuitionPost"]>
  export type TuitionPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postedByUser?: boolean | UserDefaultArgs<ExtArgs>
    assigns?: boolean | TuitionPost$assignsArgs<ExtArgs>
  }
  export type TuitionPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postedByUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TuitionPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postedByUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TuitionPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TuitionPost"
    objects: {
      postedByUser: Prisma.$UserPayload<ExtArgs>
      assigns: Prisma.$AssignedTeacherStudentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      postedBy: number
      title: string
      description: string | null
      budget: Prisma.Decimal | null
      medium: $Enums.Medium
      area: number
      days: $Enums.Day[]
      startTime: string
      endTime: string
      status: number
      createdAt: Date
      updatedAt: Date
      subjects: number[]
    }, ExtArgs["result"]["tuitionPost"]>
    composites: {}
  }

  type TuitionPostGetPayload<S extends boolean | null | undefined | TuitionPostDefaultArgs> = $Result.GetResult<Prisma.$TuitionPostPayload, S>

  type TuitionPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TuitionPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TuitionPostCountAggregateInputType | true
    }

  export interface TuitionPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TuitionPost'], meta: { name: 'TuitionPost' } }
    /**
     * Find zero or one TuitionPost that matches the filter.
     * @param {TuitionPostFindUniqueArgs} args - Arguments to find a TuitionPost
     * @example
     * // Get one TuitionPost
     * const tuitionPost = await prisma.tuitionPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TuitionPostFindUniqueArgs>(args: SelectSubset<T, TuitionPostFindUniqueArgs<ExtArgs>>): Prisma__TuitionPostClient<$Result.GetResult<Prisma.$TuitionPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TuitionPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TuitionPostFindUniqueOrThrowArgs} args - Arguments to find a TuitionPost
     * @example
     * // Get one TuitionPost
     * const tuitionPost = await prisma.tuitionPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TuitionPostFindUniqueOrThrowArgs>(args: SelectSubset<T, TuitionPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TuitionPostClient<$Result.GetResult<Prisma.$TuitionPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TuitionPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TuitionPostFindFirstArgs} args - Arguments to find a TuitionPost
     * @example
     * // Get one TuitionPost
     * const tuitionPost = await prisma.tuitionPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TuitionPostFindFirstArgs>(args?: SelectSubset<T, TuitionPostFindFirstArgs<ExtArgs>>): Prisma__TuitionPostClient<$Result.GetResult<Prisma.$TuitionPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TuitionPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TuitionPostFindFirstOrThrowArgs} args - Arguments to find a TuitionPost
     * @example
     * // Get one TuitionPost
     * const tuitionPost = await prisma.tuitionPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TuitionPostFindFirstOrThrowArgs>(args?: SelectSubset<T, TuitionPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__TuitionPostClient<$Result.GetResult<Prisma.$TuitionPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TuitionPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TuitionPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TuitionPosts
     * const tuitionPosts = await prisma.tuitionPost.findMany()
     * 
     * // Get first 10 TuitionPosts
     * const tuitionPosts = await prisma.tuitionPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tuitionPostWithIdOnly = await prisma.tuitionPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TuitionPostFindManyArgs>(args?: SelectSubset<T, TuitionPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TuitionPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TuitionPost.
     * @param {TuitionPostCreateArgs} args - Arguments to create a TuitionPost.
     * @example
     * // Create one TuitionPost
     * const TuitionPost = await prisma.tuitionPost.create({
     *   data: {
     *     // ... data to create a TuitionPost
     *   }
     * })
     * 
     */
    create<T extends TuitionPostCreateArgs>(args: SelectSubset<T, TuitionPostCreateArgs<ExtArgs>>): Prisma__TuitionPostClient<$Result.GetResult<Prisma.$TuitionPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TuitionPosts.
     * @param {TuitionPostCreateManyArgs} args - Arguments to create many TuitionPosts.
     * @example
     * // Create many TuitionPosts
     * const tuitionPost = await prisma.tuitionPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TuitionPostCreateManyArgs>(args?: SelectSubset<T, TuitionPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TuitionPosts and returns the data saved in the database.
     * @param {TuitionPostCreateManyAndReturnArgs} args - Arguments to create many TuitionPosts.
     * @example
     * // Create many TuitionPosts
     * const tuitionPost = await prisma.tuitionPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TuitionPosts and only return the `id`
     * const tuitionPostWithIdOnly = await prisma.tuitionPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TuitionPostCreateManyAndReturnArgs>(args?: SelectSubset<T, TuitionPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TuitionPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TuitionPost.
     * @param {TuitionPostDeleteArgs} args - Arguments to delete one TuitionPost.
     * @example
     * // Delete one TuitionPost
     * const TuitionPost = await prisma.tuitionPost.delete({
     *   where: {
     *     // ... filter to delete one TuitionPost
     *   }
     * })
     * 
     */
    delete<T extends TuitionPostDeleteArgs>(args: SelectSubset<T, TuitionPostDeleteArgs<ExtArgs>>): Prisma__TuitionPostClient<$Result.GetResult<Prisma.$TuitionPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TuitionPost.
     * @param {TuitionPostUpdateArgs} args - Arguments to update one TuitionPost.
     * @example
     * // Update one TuitionPost
     * const tuitionPost = await prisma.tuitionPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TuitionPostUpdateArgs>(args: SelectSubset<T, TuitionPostUpdateArgs<ExtArgs>>): Prisma__TuitionPostClient<$Result.GetResult<Prisma.$TuitionPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TuitionPosts.
     * @param {TuitionPostDeleteManyArgs} args - Arguments to filter TuitionPosts to delete.
     * @example
     * // Delete a few TuitionPosts
     * const { count } = await prisma.tuitionPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TuitionPostDeleteManyArgs>(args?: SelectSubset<T, TuitionPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TuitionPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TuitionPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TuitionPosts
     * const tuitionPost = await prisma.tuitionPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TuitionPostUpdateManyArgs>(args: SelectSubset<T, TuitionPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TuitionPosts and returns the data updated in the database.
     * @param {TuitionPostUpdateManyAndReturnArgs} args - Arguments to update many TuitionPosts.
     * @example
     * // Update many TuitionPosts
     * const tuitionPost = await prisma.tuitionPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TuitionPosts and only return the `id`
     * const tuitionPostWithIdOnly = await prisma.tuitionPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TuitionPostUpdateManyAndReturnArgs>(args: SelectSubset<T, TuitionPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TuitionPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TuitionPost.
     * @param {TuitionPostUpsertArgs} args - Arguments to update or create a TuitionPost.
     * @example
     * // Update or create a TuitionPost
     * const tuitionPost = await prisma.tuitionPost.upsert({
     *   create: {
     *     // ... data to create a TuitionPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TuitionPost we want to update
     *   }
     * })
     */
    upsert<T extends TuitionPostUpsertArgs>(args: SelectSubset<T, TuitionPostUpsertArgs<ExtArgs>>): Prisma__TuitionPostClient<$Result.GetResult<Prisma.$TuitionPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TuitionPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TuitionPostCountArgs} args - Arguments to filter TuitionPosts to count.
     * @example
     * // Count the number of TuitionPosts
     * const count = await prisma.tuitionPost.count({
     *   where: {
     *     // ... the filter for the TuitionPosts we want to count
     *   }
     * })
    **/
    count<T extends TuitionPostCountArgs>(
      args?: Subset<T, TuitionPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TuitionPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TuitionPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TuitionPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TuitionPostAggregateArgs>(args: Subset<T, TuitionPostAggregateArgs>): Prisma.PrismaPromise<GetTuitionPostAggregateType<T>>

    /**
     * Group by TuitionPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TuitionPostGroupByArgs} args - Group by arguments.
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
      T extends TuitionPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TuitionPostGroupByArgs['orderBy'] }
        : { orderBy?: TuitionPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TuitionPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTuitionPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TuitionPost model
   */
  readonly fields: TuitionPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TuitionPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TuitionPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postedByUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assigns<T extends TuitionPost$assignsArgs<ExtArgs> = {}>(args?: Subset<T, TuitionPost$assignsArgs<ExtArgs>>): Prisma__AssignedTeacherStudentClient<$Result.GetResult<Prisma.$AssignedTeacherStudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TuitionPost model
   */
  interface TuitionPostFieldRefs {
    readonly id: FieldRef<"TuitionPost", 'Int'>
    readonly postedBy: FieldRef<"TuitionPost", 'Int'>
    readonly title: FieldRef<"TuitionPost", 'String'>
    readonly description: FieldRef<"TuitionPost", 'String'>
    readonly budget: FieldRef<"TuitionPost", 'Decimal'>
    readonly medium: FieldRef<"TuitionPost", 'Medium'>
    readonly area: FieldRef<"TuitionPost", 'Int'>
    readonly days: FieldRef<"TuitionPost", 'Day[]'>
    readonly startTime: FieldRef<"TuitionPost", 'String'>
    readonly endTime: FieldRef<"TuitionPost", 'String'>
    readonly status: FieldRef<"TuitionPost", 'Int'>
    readonly createdAt: FieldRef<"TuitionPost", 'DateTime'>
    readonly updatedAt: FieldRef<"TuitionPost", 'DateTime'>
    readonly subjects: FieldRef<"TuitionPost", 'Int[]'>
  }
    

  // Custom InputTypes
  /**
   * TuitionPost findUnique
   */
  export type TuitionPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionPost
     */
    select?: TuitionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionPost
     */
    omit?: TuitionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionPostInclude<ExtArgs> | null
    /**
     * Filter, which TuitionPost to fetch.
     */
    where: TuitionPostWhereUniqueInput
  }

  /**
   * TuitionPost findUniqueOrThrow
   */
  export type TuitionPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionPost
     */
    select?: TuitionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionPost
     */
    omit?: TuitionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionPostInclude<ExtArgs> | null
    /**
     * Filter, which TuitionPost to fetch.
     */
    where: TuitionPostWhereUniqueInput
  }

  /**
   * TuitionPost findFirst
   */
  export type TuitionPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionPost
     */
    select?: TuitionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionPost
     */
    omit?: TuitionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionPostInclude<ExtArgs> | null
    /**
     * Filter, which TuitionPost to fetch.
     */
    where?: TuitionPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TuitionPosts to fetch.
     */
    orderBy?: TuitionPostOrderByWithRelationInput | TuitionPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TuitionPosts.
     */
    cursor?: TuitionPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TuitionPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TuitionPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TuitionPosts.
     */
    distinct?: TuitionPostScalarFieldEnum | TuitionPostScalarFieldEnum[]
  }

  /**
   * TuitionPost findFirstOrThrow
   */
  export type TuitionPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionPost
     */
    select?: TuitionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionPost
     */
    omit?: TuitionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionPostInclude<ExtArgs> | null
    /**
     * Filter, which TuitionPost to fetch.
     */
    where?: TuitionPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TuitionPosts to fetch.
     */
    orderBy?: TuitionPostOrderByWithRelationInput | TuitionPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TuitionPosts.
     */
    cursor?: TuitionPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TuitionPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TuitionPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TuitionPosts.
     */
    distinct?: TuitionPostScalarFieldEnum | TuitionPostScalarFieldEnum[]
  }

  /**
   * TuitionPost findMany
   */
  export type TuitionPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionPost
     */
    select?: TuitionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionPost
     */
    omit?: TuitionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionPostInclude<ExtArgs> | null
    /**
     * Filter, which TuitionPosts to fetch.
     */
    where?: TuitionPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TuitionPosts to fetch.
     */
    orderBy?: TuitionPostOrderByWithRelationInput | TuitionPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TuitionPosts.
     */
    cursor?: TuitionPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TuitionPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TuitionPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TuitionPosts.
     */
    distinct?: TuitionPostScalarFieldEnum | TuitionPostScalarFieldEnum[]
  }

  /**
   * TuitionPost create
   */
  export type TuitionPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionPost
     */
    select?: TuitionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionPost
     */
    omit?: TuitionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionPostInclude<ExtArgs> | null
    /**
     * The data needed to create a TuitionPost.
     */
    data: XOR<TuitionPostCreateInput, TuitionPostUncheckedCreateInput>
  }

  /**
   * TuitionPost createMany
   */
  export type TuitionPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TuitionPosts.
     */
    data: TuitionPostCreateManyInput | TuitionPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TuitionPost createManyAndReturn
   */
  export type TuitionPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionPost
     */
    select?: TuitionPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionPost
     */
    omit?: TuitionPostOmit<ExtArgs> | null
    /**
     * The data used to create many TuitionPosts.
     */
    data: TuitionPostCreateManyInput | TuitionPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TuitionPost update
   */
  export type TuitionPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionPost
     */
    select?: TuitionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionPost
     */
    omit?: TuitionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionPostInclude<ExtArgs> | null
    /**
     * The data needed to update a TuitionPost.
     */
    data: XOR<TuitionPostUpdateInput, TuitionPostUncheckedUpdateInput>
    /**
     * Choose, which TuitionPost to update.
     */
    where: TuitionPostWhereUniqueInput
  }

  /**
   * TuitionPost updateMany
   */
  export type TuitionPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TuitionPosts.
     */
    data: XOR<TuitionPostUpdateManyMutationInput, TuitionPostUncheckedUpdateManyInput>
    /**
     * Filter which TuitionPosts to update
     */
    where?: TuitionPostWhereInput
    /**
     * Limit how many TuitionPosts to update.
     */
    limit?: number
  }

  /**
   * TuitionPost updateManyAndReturn
   */
  export type TuitionPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionPost
     */
    select?: TuitionPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionPost
     */
    omit?: TuitionPostOmit<ExtArgs> | null
    /**
     * The data used to update TuitionPosts.
     */
    data: XOR<TuitionPostUpdateManyMutationInput, TuitionPostUncheckedUpdateManyInput>
    /**
     * Filter which TuitionPosts to update
     */
    where?: TuitionPostWhereInput
    /**
     * Limit how many TuitionPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TuitionPost upsert
   */
  export type TuitionPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionPost
     */
    select?: TuitionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionPost
     */
    omit?: TuitionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionPostInclude<ExtArgs> | null
    /**
     * The filter to search for the TuitionPost to update in case it exists.
     */
    where: TuitionPostWhereUniqueInput
    /**
     * In case the TuitionPost found by the `where` argument doesn't exist, create a new TuitionPost with this data.
     */
    create: XOR<TuitionPostCreateInput, TuitionPostUncheckedCreateInput>
    /**
     * In case the TuitionPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TuitionPostUpdateInput, TuitionPostUncheckedUpdateInput>
  }

  /**
   * TuitionPost delete
   */
  export type TuitionPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionPost
     */
    select?: TuitionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionPost
     */
    omit?: TuitionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionPostInclude<ExtArgs> | null
    /**
     * Filter which TuitionPost to delete.
     */
    where: TuitionPostWhereUniqueInput
  }

  /**
   * TuitionPost deleteMany
   */
  export type TuitionPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TuitionPosts to delete
     */
    where?: TuitionPostWhereInput
    /**
     * Limit how many TuitionPosts to delete.
     */
    limit?: number
  }

  /**
   * TuitionPost.assigns
   */
  export type TuitionPost$assignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTeacherStudent
     */
    select?: AssignedTeacherStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTeacherStudent
     */
    omit?: AssignedTeacherStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTeacherStudentInclude<ExtArgs> | null
    where?: AssignedTeacherStudentWhereInput
  }

  /**
   * TuitionPost without action
   */
  export type TuitionPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionPost
     */
    select?: TuitionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionPost
     */
    omit?: TuitionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionPostInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    userCode: string | null
    name: string | null
    email: string | null
    password: string | null
    address: string | null
    contact: string | null
    gender: $Enums.Gender | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    userCode: string | null
    name: string | null
    email: string | null
    password: string | null
    address: string | null
    contact: string | null
    gender: $Enums.Gender | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userCode: number
    name: number
    email: number
    password: number
    address: number
    contact: number
    gender: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    userCode?: true
    name?: true
    email?: true
    password?: true
    address?: true
    contact?: true
    gender?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userCode?: true
    name?: true
    email?: true
    password?: true
    address?: true
    contact?: true
    gender?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userCode?: true
    name?: true
    email?: true
    password?: true
    address?: true
    contact?: true
    gender?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    userCode: string | null
    name: string
    email: string
    password: string
    address: string | null
    contact: string | null
    gender: $Enums.Gender | null
    role: $Enums.Role
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userCode?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    contact?: boolean
    gender?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    teacherProfile?: boolean | User$teacherProfileArgs<ExtArgs>
    moderatorPermission?: boolean | User$moderatorPermissionArgs<ExtArgs>
    studentProfile?: boolean | User$studentProfileArgs<ExtArgs>
    teacherAssignments?: boolean | User$teacherAssignmentsArgs<ExtArgs>
    studentAssignments?: boolean | User$studentAssignmentsArgs<ExtArgs>
    teacherHomework?: boolean | User$teacherHomeworkArgs<ExtArgs>
    studentHomework?: boolean | User$studentHomeworkArgs<ExtArgs>
    tuitionPosts?: boolean | User$tuitionPostsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userCode?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    contact?: boolean
    gender?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userCode?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    contact?: boolean
    gender?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userCode?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    contact?: boolean
    gender?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userCode" | "name" | "email" | "password" | "address" | "contact" | "gender" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    teacherProfile?: boolean | User$teacherProfileArgs<ExtArgs>
    moderatorPermission?: boolean | User$moderatorPermissionArgs<ExtArgs>
    studentProfile?: boolean | User$studentProfileArgs<ExtArgs>
    teacherAssignments?: boolean | User$teacherAssignmentsArgs<ExtArgs>
    studentAssignments?: boolean | User$studentAssignmentsArgs<ExtArgs>
    teacherHomework?: boolean | User$teacherHomeworkArgs<ExtArgs>
    studentHomework?: boolean | User$studentHomeworkArgs<ExtArgs>
    tuitionPosts?: boolean | User$tuitionPostsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      teacherProfile: Prisma.$TeacherProfilePayload<ExtArgs> | null
      moderatorPermission: Prisma.$ModeratorPermissionPayload<ExtArgs> | null
      studentProfile: Prisma.$StudentProfilePayload<ExtArgs> | null
      teacherAssignments: Prisma.$AssignedTeacherStudentPayload<ExtArgs>[]
      studentAssignments: Prisma.$AssignedTeacherStudentPayload<ExtArgs>[]
      teacherHomework: Prisma.$AssignmentPayload<ExtArgs>[]
      studentHomework: Prisma.$AssignmentPayload<ExtArgs>[]
      tuitionPosts: Prisma.$TuitionPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userCode: string | null
      name: string
      email: string
      password: string
      address: string | null
      contact: string | null
      gender: $Enums.Gender | null
      role: $Enums.Role
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teacherProfile<T extends User$teacherProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$teacherProfileArgs<ExtArgs>>): Prisma__TeacherProfileClient<$Result.GetResult<Prisma.$TeacherProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    moderatorPermission<T extends User$moderatorPermissionArgs<ExtArgs> = {}>(args?: Subset<T, User$moderatorPermissionArgs<ExtArgs>>): Prisma__ModeratorPermissionClient<$Result.GetResult<Prisma.$ModeratorPermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    studentProfile<T extends User$studentProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$studentProfileArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    teacherAssignments<T extends User$teacherAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$teacherAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignedTeacherStudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studentAssignments<T extends User$studentAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$studentAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignedTeacherStudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teacherHomework<T extends User$teacherHomeworkArgs<ExtArgs> = {}>(args?: Subset<T, User$teacherHomeworkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studentHomework<T extends User$studentHomeworkArgs<ExtArgs> = {}>(args?: Subset<T, User$studentHomeworkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tuitionPosts<T extends User$tuitionPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$tuitionPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TuitionPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly userCode: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly contact: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User.teacherProfile
   */
  export type User$teacherProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherProfile
     */
    select?: TeacherProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherProfile
     */
    omit?: TeacherProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherProfileInclude<ExtArgs> | null
    where?: TeacherProfileWhereInput
  }

  /**
   * User.moderatorPermission
   */
  export type User$moderatorPermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModeratorPermission
     */
    select?: ModeratorPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModeratorPermission
     */
    omit?: ModeratorPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModeratorPermissionInclude<ExtArgs> | null
    where?: ModeratorPermissionWhereInput
  }

  /**
   * User.studentProfile
   */
  export type User$studentProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    where?: StudentProfileWhereInput
  }

  /**
   * User.teacherAssignments
   */
  export type User$teacherAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTeacherStudent
     */
    select?: AssignedTeacherStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTeacherStudent
     */
    omit?: AssignedTeacherStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTeacherStudentInclude<ExtArgs> | null
    where?: AssignedTeacherStudentWhereInput
    orderBy?: AssignedTeacherStudentOrderByWithRelationInput | AssignedTeacherStudentOrderByWithRelationInput[]
    cursor?: AssignedTeacherStudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignedTeacherStudentScalarFieldEnum | AssignedTeacherStudentScalarFieldEnum[]
  }

  /**
   * User.studentAssignments
   */
  export type User$studentAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignedTeacherStudent
     */
    select?: AssignedTeacherStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssignedTeacherStudent
     */
    omit?: AssignedTeacherStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignedTeacherStudentInclude<ExtArgs> | null
    where?: AssignedTeacherStudentWhereInput
    orderBy?: AssignedTeacherStudentOrderByWithRelationInput | AssignedTeacherStudentOrderByWithRelationInput[]
    cursor?: AssignedTeacherStudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignedTeacherStudentScalarFieldEnum | AssignedTeacherStudentScalarFieldEnum[]
  }

  /**
   * User.teacherHomework
   */
  export type User$teacherHomeworkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * User.studentHomework
   */
  export type User$studentHomeworkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * User.tuitionPosts
   */
  export type User$tuitionPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TuitionPost
     */
    select?: TuitionPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TuitionPost
     */
    omit?: TuitionPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TuitionPostInclude<ExtArgs> | null
    where?: TuitionPostWhereInput
    orderBy?: TuitionPostOrderByWithRelationInput | TuitionPostOrderByWithRelationInput[]
    cursor?: TuitionPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TuitionPostScalarFieldEnum | TuitionPostScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RefreshTokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: number | null
    token: string | null
    userId: number | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    userId: number | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type RefreshTokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RefreshTokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefreshTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefreshTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _avg?: RefreshTokenAvgAggregateInputType
    _sum?: RefreshTokenSumAggregateInputType
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: number
    token: string
    userId: number
    createdAt: Date
    expiresAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "createdAt" | "expiresAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      userId: number
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'Int'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'Int'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
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


  export const TeacherApplicationScalarFieldEnum: {
    id: 'id',
    tuitionPostId: 'tuitionPostId',
    teacherId: 'teacherId',
    coverNote: 'coverNote',
    status: 'status',
    appliedAt: 'appliedAt',
    updatedAt: 'updatedAt'
  };

  export type TeacherApplicationScalarFieldEnum = (typeof TeacherApplicationScalarFieldEnum)[keyof typeof TeacherApplicationScalarFieldEnum]


  export const AssignedTeacherStudentScalarFieldEnum: {
    id: 'id',
    tuitionPostId: 'tuitionPostId',
    teacherId: 'teacherId',
    studentId: 'studentId',
    assignedBy: 'assignedBy',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssignedTeacherStudentScalarFieldEnum = (typeof AssignedTeacherStudentScalarFieldEnum)[keyof typeof AssignedTeacherStudentScalarFieldEnum]


  export const AssignmentScalarFieldEnum: {
    id: 'id',
    teacherId: 'teacherId',
    studentId: 'studentId',
    title: 'title',
    description: 'description',
    dueDate: 'dueDate',
    fileUrl: 'fileUrl',
    fileName: 'fileName',
    note: 'note',
    grade: 'grade',
    feedback: 'feedback',
    gradedAt: 'gradedAt',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    subject: 'subject'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


  export const ClassScheduleScalarFieldEnum: {
    id: 'id',
    assignmentId: 'assignmentId',
    teacherId: 'teacherId',
    studentId: 'studentId',
    subjectIds: 'subjectIds',
    days: 'days',
    startTime: 'startTime',
    endTime: 'endTime',
    medium: 'medium',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClassScheduleScalarFieldEnum = (typeof ClassScheduleScalarFieldEnum)[keyof typeof ClassScheduleScalarFieldEnum]


  export const ClassScheduleOverrideScalarFieldEnum: {
    id: 'id',
    classScheduleId: 'classScheduleId',
    originalDate: 'originalDate',
    newDate: 'newDate',
    startTime: 'startTime',
    endTime: 'endTime',
    medium: 'medium',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClassScheduleOverrideScalarFieldEnum = (typeof ClassScheduleOverrideScalarFieldEnum)[keyof typeof ClassScheduleOverrideScalarFieldEnum]


  export const LookupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type LookupScalarFieldEnum = (typeof LookupScalarFieldEnum)[keyof typeof LookupScalarFieldEnum]


  export const ModeratorPermissionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    canAssignTeachers: 'canAssignTeachers',
    canApproveJobs: 'canApproveJobs',
    canManageUsers: 'canManageUsers',
    canPostJobs: 'canPostJobs',
    canRejectApplications: 'canRejectApplications',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModeratorPermissionScalarFieldEnum = (typeof ModeratorPermissionScalarFieldEnum)[keyof typeof ModeratorPermissionScalarFieldEnum]


  export const StudentProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gradeLevel: 'gradeLevel',
    institution: 'institution',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    contact: 'contact'
  };

  export type StudentProfileScalarFieldEnum = (typeof StudentProfileScalarFieldEnum)[keyof typeof StudentProfileScalarFieldEnum]


  export const TeacherProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bio: 'bio',
    experienceYears: 'experienceYears',
    educationalBackground: 'educationalBackground',
    cvUrl: 'cvUrl',
    medium: 'medium',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeacherProfileScalarFieldEnum = (typeof TeacherProfileScalarFieldEnum)[keyof typeof TeacherProfileScalarFieldEnum]


  export const TuitionPostScalarFieldEnum: {
    id: 'id',
    postedBy: 'postedBy',
    title: 'title',
    description: 'description',
    budget: 'budget',
    medium: 'medium',
    area: 'area',
    days: 'days',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    subjects: 'subjects'
  };

  export type TuitionPostScalarFieldEnum = (typeof TuitionPostScalarFieldEnum)[keyof typeof TuitionPostScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    userCode: 'userCode',
    name: 'name',
    email: 'email',
    password: 'password',
    address: 'address',
    contact: 'contact',
    gender: 'gender',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Day[]'
   */
  export type ListEnumDayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Day[]'>
    


  /**
   * Reference to a field of type 'Day'
   */
  export type EnumDayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Day'>
    


  /**
   * Reference to a field of type 'Medium'
   */
  export type EnumMediumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Medium'>
    


  /**
   * Reference to a field of type 'Medium[]'
   */
  export type ListEnumMediumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Medium[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TeacherApplicationWhereInput = {
    AND?: TeacherApplicationWhereInput | TeacherApplicationWhereInput[]
    OR?: TeacherApplicationWhereInput[]
    NOT?: TeacherApplicationWhereInput | TeacherApplicationWhereInput[]
    id?: IntFilter<"TeacherApplication"> | number
    tuitionPostId?: IntFilter<"TeacherApplication"> | number
    teacherId?: IntFilter<"TeacherApplication"> | number
    coverNote?: StringNullableFilter<"TeacherApplication"> | string | null
    status?: IntFilter<"TeacherApplication"> | number
    appliedAt?: DateTimeFilter<"TeacherApplication"> | Date | string
    updatedAt?: DateTimeFilter<"TeacherApplication"> | Date | string
  }

  export type TeacherApplicationOrderByWithRelationInput = {
    id?: SortOrder
    tuitionPostId?: SortOrder
    teacherId?: SortOrder
    coverNote?: SortOrderInput | SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tuitionPostId_teacherId?: TeacherApplicationTuitionPostIdTeacherIdCompoundUniqueInput
    AND?: TeacherApplicationWhereInput | TeacherApplicationWhereInput[]
    OR?: TeacherApplicationWhereInput[]
    NOT?: TeacherApplicationWhereInput | TeacherApplicationWhereInput[]
    tuitionPostId?: IntFilter<"TeacherApplication"> | number
    teacherId?: IntFilter<"TeacherApplication"> | number
    coverNote?: StringNullableFilter<"TeacherApplication"> | string | null
    status?: IntFilter<"TeacherApplication"> | number
    appliedAt?: DateTimeFilter<"TeacherApplication"> | Date | string
    updatedAt?: DateTimeFilter<"TeacherApplication"> | Date | string
  }, "id" | "tuitionPostId_teacherId">

  export type TeacherApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    tuitionPostId?: SortOrder
    teacherId?: SortOrder
    coverNote?: SortOrderInput | SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeacherApplicationCountOrderByAggregateInput
    _avg?: TeacherApplicationAvgOrderByAggregateInput
    _max?: TeacherApplicationMaxOrderByAggregateInput
    _min?: TeacherApplicationMinOrderByAggregateInput
    _sum?: TeacherApplicationSumOrderByAggregateInput
  }

  export type TeacherApplicationScalarWhereWithAggregatesInput = {
    AND?: TeacherApplicationScalarWhereWithAggregatesInput | TeacherApplicationScalarWhereWithAggregatesInput[]
    OR?: TeacherApplicationScalarWhereWithAggregatesInput[]
    NOT?: TeacherApplicationScalarWhereWithAggregatesInput | TeacherApplicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeacherApplication"> | number
    tuitionPostId?: IntWithAggregatesFilter<"TeacherApplication"> | number
    teacherId?: IntWithAggregatesFilter<"TeacherApplication"> | number
    coverNote?: StringNullableWithAggregatesFilter<"TeacherApplication"> | string | null
    status?: IntWithAggregatesFilter<"TeacherApplication"> | number
    appliedAt?: DateTimeWithAggregatesFilter<"TeacherApplication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TeacherApplication"> | Date | string
  }

  export type AssignedTeacherStudentWhereInput = {
    AND?: AssignedTeacherStudentWhereInput | AssignedTeacherStudentWhereInput[]
    OR?: AssignedTeacherStudentWhereInput[]
    NOT?: AssignedTeacherStudentWhereInput | AssignedTeacherStudentWhereInput[]
    id?: IntFilter<"AssignedTeacherStudent"> | number
    tuitionPostId?: IntFilter<"AssignedTeacherStudent"> | number
    teacherId?: IntFilter<"AssignedTeacherStudent"> | number
    studentId?: IntFilter<"AssignedTeacherStudent"> | number
    assignedBy?: IntFilter<"AssignedTeacherStudent"> | number
    startDate?: DateTimeFilter<"AssignedTeacherStudent"> | Date | string
    endDate?: DateTimeNullableFilter<"AssignedTeacherStudent"> | Date | string | null
    createdAt?: DateTimeFilter<"AssignedTeacherStudent"> | Date | string
    updatedAt?: DateTimeFilter<"AssignedTeacherStudent"> | Date | string
    tuitionPost?: XOR<TuitionPostScalarRelationFilter, TuitionPostWhereInput>
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    classSchedule?: XOR<ClassScheduleNullableScalarRelationFilter, ClassScheduleWhereInput> | null
  }

  export type AssignedTeacherStudentOrderByWithRelationInput = {
    id?: SortOrder
    tuitionPostId?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    assignedBy?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tuitionPost?: TuitionPostOrderByWithRelationInput
    teacher?: UserOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
    classSchedule?: ClassScheduleOrderByWithRelationInput
  }

  export type AssignedTeacherStudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tuitionPostId?: number
    AND?: AssignedTeacherStudentWhereInput | AssignedTeacherStudentWhereInput[]
    OR?: AssignedTeacherStudentWhereInput[]
    NOT?: AssignedTeacherStudentWhereInput | AssignedTeacherStudentWhereInput[]
    teacherId?: IntFilter<"AssignedTeacherStudent"> | number
    studentId?: IntFilter<"AssignedTeacherStudent"> | number
    assignedBy?: IntFilter<"AssignedTeacherStudent"> | number
    startDate?: DateTimeFilter<"AssignedTeacherStudent"> | Date | string
    endDate?: DateTimeNullableFilter<"AssignedTeacherStudent"> | Date | string | null
    createdAt?: DateTimeFilter<"AssignedTeacherStudent"> | Date | string
    updatedAt?: DateTimeFilter<"AssignedTeacherStudent"> | Date | string
    tuitionPost?: XOR<TuitionPostScalarRelationFilter, TuitionPostWhereInput>
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    classSchedule?: XOR<ClassScheduleNullableScalarRelationFilter, ClassScheduleWhereInput> | null
  }, "id" | "tuitionPostId">

  export type AssignedTeacherStudentOrderByWithAggregationInput = {
    id?: SortOrder
    tuitionPostId?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    assignedBy?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssignedTeacherStudentCountOrderByAggregateInput
    _avg?: AssignedTeacherStudentAvgOrderByAggregateInput
    _max?: AssignedTeacherStudentMaxOrderByAggregateInput
    _min?: AssignedTeacherStudentMinOrderByAggregateInput
    _sum?: AssignedTeacherStudentSumOrderByAggregateInput
  }

  export type AssignedTeacherStudentScalarWhereWithAggregatesInput = {
    AND?: AssignedTeacherStudentScalarWhereWithAggregatesInput | AssignedTeacherStudentScalarWhereWithAggregatesInput[]
    OR?: AssignedTeacherStudentScalarWhereWithAggregatesInput[]
    NOT?: AssignedTeacherStudentScalarWhereWithAggregatesInput | AssignedTeacherStudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AssignedTeacherStudent"> | number
    tuitionPostId?: IntWithAggregatesFilter<"AssignedTeacherStudent"> | number
    teacherId?: IntWithAggregatesFilter<"AssignedTeacherStudent"> | number
    studentId?: IntWithAggregatesFilter<"AssignedTeacherStudent"> | number
    assignedBy?: IntWithAggregatesFilter<"AssignedTeacherStudent"> | number
    startDate?: DateTimeWithAggregatesFilter<"AssignedTeacherStudent"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"AssignedTeacherStudent"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AssignedTeacherStudent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AssignedTeacherStudent"> | Date | string
  }

  export type AssignmentWhereInput = {
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    id?: IntFilter<"Assignment"> | number
    teacherId?: IntFilter<"Assignment"> | number
    studentId?: IntFilter<"Assignment"> | number
    title?: StringFilter<"Assignment"> | string
    description?: StringNullableFilter<"Assignment"> | string | null
    dueDate?: DateTimeFilter<"Assignment"> | Date | string
    fileUrl?: StringNullableFilter<"Assignment"> | string | null
    fileName?: StringNullableFilter<"Assignment"> | string | null
    note?: StringNullableFilter<"Assignment"> | string | null
    grade?: IntNullableFilter<"Assignment"> | number | null
    feedback?: StringNullableFilter<"Assignment"> | string | null
    gradedAt?: DateTimeNullableFilter<"Assignment"> | Date | string | null
    status?: IntNullableFilter<"Assignment"> | number | null
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    updatedAt?: DateTimeFilter<"Assignment"> | Date | string
    subject?: IntNullableFilter<"Assignment"> | number | null
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AssignmentOrderByWithRelationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    dueDate?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    fileName?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    grade?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    gradedAt?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subject?: SortOrderInput | SortOrder
    teacher?: UserOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
  }

  export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    teacherId?: IntFilter<"Assignment"> | number
    studentId?: IntFilter<"Assignment"> | number
    title?: StringFilter<"Assignment"> | string
    description?: StringNullableFilter<"Assignment"> | string | null
    dueDate?: DateTimeFilter<"Assignment"> | Date | string
    fileUrl?: StringNullableFilter<"Assignment"> | string | null
    fileName?: StringNullableFilter<"Assignment"> | string | null
    note?: StringNullableFilter<"Assignment"> | string | null
    grade?: IntNullableFilter<"Assignment"> | number | null
    feedback?: StringNullableFilter<"Assignment"> | string | null
    gradedAt?: DateTimeNullableFilter<"Assignment"> | Date | string | null
    status?: IntNullableFilter<"Assignment"> | number | null
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    updatedAt?: DateTimeFilter<"Assignment"> | Date | string
    subject?: IntNullableFilter<"Assignment"> | number | null
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    dueDate?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    fileName?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    grade?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    gradedAt?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subject?: SortOrderInput | SortOrder
    _count?: AssignmentCountOrderByAggregateInput
    _avg?: AssignmentAvgOrderByAggregateInput
    _max?: AssignmentMaxOrderByAggregateInput
    _min?: AssignmentMinOrderByAggregateInput
    _sum?: AssignmentSumOrderByAggregateInput
  }

  export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    OR?: AssignmentScalarWhereWithAggregatesInput[]
    NOT?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Assignment"> | number
    teacherId?: IntWithAggregatesFilter<"Assignment"> | number
    studentId?: IntWithAggregatesFilter<"Assignment"> | number
    title?: StringWithAggregatesFilter<"Assignment"> | string
    description?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    dueDate?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
    fileUrl?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    fileName?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    note?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    grade?: IntNullableWithAggregatesFilter<"Assignment"> | number | null
    feedback?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    gradedAt?: DateTimeNullableWithAggregatesFilter<"Assignment"> | Date | string | null
    status?: IntNullableWithAggregatesFilter<"Assignment"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
    subject?: IntNullableWithAggregatesFilter<"Assignment"> | number | null
  }

  export type ClassScheduleWhereInput = {
    AND?: ClassScheduleWhereInput | ClassScheduleWhereInput[]
    OR?: ClassScheduleWhereInput[]
    NOT?: ClassScheduleWhereInput | ClassScheduleWhereInput[]
    id?: IntFilter<"ClassSchedule"> | number
    assignmentId?: IntFilter<"ClassSchedule"> | number
    teacherId?: IntFilter<"ClassSchedule"> | number
    studentId?: IntFilter<"ClassSchedule"> | number
    subjectIds?: IntNullableListFilter<"ClassSchedule">
    days?: EnumDayNullableListFilter<"ClassSchedule">
    startTime?: StringFilter<"ClassSchedule"> | string
    endTime?: StringFilter<"ClassSchedule"> | string
    medium?: EnumMediumFilter<"ClassSchedule"> | $Enums.Medium
    createdAt?: DateTimeFilter<"ClassSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"ClassSchedule"> | Date | string
    overrides?: ClassScheduleOverrideListRelationFilter
    assignment?: XOR<AssignedTeacherStudentScalarRelationFilter, AssignedTeacherStudentWhereInput>
  }

  export type ClassScheduleOrderByWithRelationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    subjectIds?: SortOrder
    days?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    medium?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    overrides?: ClassScheduleOverrideOrderByRelationAggregateInput
    assignment?: AssignedTeacherStudentOrderByWithRelationInput
  }

  export type ClassScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    assignmentId?: number
    AND?: ClassScheduleWhereInput | ClassScheduleWhereInput[]
    OR?: ClassScheduleWhereInput[]
    NOT?: ClassScheduleWhereInput | ClassScheduleWhereInput[]
    teacherId?: IntFilter<"ClassSchedule"> | number
    studentId?: IntFilter<"ClassSchedule"> | number
    subjectIds?: IntNullableListFilter<"ClassSchedule">
    days?: EnumDayNullableListFilter<"ClassSchedule">
    startTime?: StringFilter<"ClassSchedule"> | string
    endTime?: StringFilter<"ClassSchedule"> | string
    medium?: EnumMediumFilter<"ClassSchedule"> | $Enums.Medium
    createdAt?: DateTimeFilter<"ClassSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"ClassSchedule"> | Date | string
    overrides?: ClassScheduleOverrideListRelationFilter
    assignment?: XOR<AssignedTeacherStudentScalarRelationFilter, AssignedTeacherStudentWhereInput>
  }, "id" | "assignmentId">

  export type ClassScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    subjectIds?: SortOrder
    days?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    medium?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClassScheduleCountOrderByAggregateInput
    _avg?: ClassScheduleAvgOrderByAggregateInput
    _max?: ClassScheduleMaxOrderByAggregateInput
    _min?: ClassScheduleMinOrderByAggregateInput
    _sum?: ClassScheduleSumOrderByAggregateInput
  }

  export type ClassScheduleScalarWhereWithAggregatesInput = {
    AND?: ClassScheduleScalarWhereWithAggregatesInput | ClassScheduleScalarWhereWithAggregatesInput[]
    OR?: ClassScheduleScalarWhereWithAggregatesInput[]
    NOT?: ClassScheduleScalarWhereWithAggregatesInput | ClassScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClassSchedule"> | number
    assignmentId?: IntWithAggregatesFilter<"ClassSchedule"> | number
    teacherId?: IntWithAggregatesFilter<"ClassSchedule"> | number
    studentId?: IntWithAggregatesFilter<"ClassSchedule"> | number
    subjectIds?: IntNullableListFilter<"ClassSchedule">
    days?: EnumDayNullableListFilter<"ClassSchedule">
    startTime?: StringWithAggregatesFilter<"ClassSchedule"> | string
    endTime?: StringWithAggregatesFilter<"ClassSchedule"> | string
    medium?: EnumMediumWithAggregatesFilter<"ClassSchedule"> | $Enums.Medium
    createdAt?: DateTimeWithAggregatesFilter<"ClassSchedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClassSchedule"> | Date | string
  }

  export type ClassScheduleOverrideWhereInput = {
    AND?: ClassScheduleOverrideWhereInput | ClassScheduleOverrideWhereInput[]
    OR?: ClassScheduleOverrideWhereInput[]
    NOT?: ClassScheduleOverrideWhereInput | ClassScheduleOverrideWhereInput[]
    id?: IntFilter<"ClassScheduleOverride"> | number
    classScheduleId?: IntFilter<"ClassScheduleOverride"> | number
    originalDate?: DateTimeFilter<"ClassScheduleOverride"> | Date | string
    newDate?: DateTimeFilter<"ClassScheduleOverride"> | Date | string
    startTime?: StringFilter<"ClassScheduleOverride"> | string
    endTime?: StringFilter<"ClassScheduleOverride"> | string
    medium?: EnumMediumFilter<"ClassScheduleOverride"> | $Enums.Medium
    createdAt?: DateTimeFilter<"ClassScheduleOverride"> | Date | string
    updatedAt?: DateTimeFilter<"ClassScheduleOverride"> | Date | string
    classSchedule?: XOR<ClassScheduleScalarRelationFilter, ClassScheduleWhereInput>
  }

  export type ClassScheduleOverrideOrderByWithRelationInput = {
    id?: SortOrder
    classScheduleId?: SortOrder
    originalDate?: SortOrder
    newDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    medium?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    classSchedule?: ClassScheduleOrderByWithRelationInput
  }

  export type ClassScheduleOverrideWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClassScheduleOverrideWhereInput | ClassScheduleOverrideWhereInput[]
    OR?: ClassScheduleOverrideWhereInput[]
    NOT?: ClassScheduleOverrideWhereInput | ClassScheduleOverrideWhereInput[]
    classScheduleId?: IntFilter<"ClassScheduleOverride"> | number
    originalDate?: DateTimeFilter<"ClassScheduleOverride"> | Date | string
    newDate?: DateTimeFilter<"ClassScheduleOverride"> | Date | string
    startTime?: StringFilter<"ClassScheduleOverride"> | string
    endTime?: StringFilter<"ClassScheduleOverride"> | string
    medium?: EnumMediumFilter<"ClassScheduleOverride"> | $Enums.Medium
    createdAt?: DateTimeFilter<"ClassScheduleOverride"> | Date | string
    updatedAt?: DateTimeFilter<"ClassScheduleOverride"> | Date | string
    classSchedule?: XOR<ClassScheduleScalarRelationFilter, ClassScheduleWhereInput>
  }, "id">

  export type ClassScheduleOverrideOrderByWithAggregationInput = {
    id?: SortOrder
    classScheduleId?: SortOrder
    originalDate?: SortOrder
    newDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    medium?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClassScheduleOverrideCountOrderByAggregateInput
    _avg?: ClassScheduleOverrideAvgOrderByAggregateInput
    _max?: ClassScheduleOverrideMaxOrderByAggregateInput
    _min?: ClassScheduleOverrideMinOrderByAggregateInput
    _sum?: ClassScheduleOverrideSumOrderByAggregateInput
  }

  export type ClassScheduleOverrideScalarWhereWithAggregatesInput = {
    AND?: ClassScheduleOverrideScalarWhereWithAggregatesInput | ClassScheduleOverrideScalarWhereWithAggregatesInput[]
    OR?: ClassScheduleOverrideScalarWhereWithAggregatesInput[]
    NOT?: ClassScheduleOverrideScalarWhereWithAggregatesInput | ClassScheduleOverrideScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClassScheduleOverride"> | number
    classScheduleId?: IntWithAggregatesFilter<"ClassScheduleOverride"> | number
    originalDate?: DateTimeWithAggregatesFilter<"ClassScheduleOverride"> | Date | string
    newDate?: DateTimeWithAggregatesFilter<"ClassScheduleOverride"> | Date | string
    startTime?: StringWithAggregatesFilter<"ClassScheduleOverride"> | string
    endTime?: StringWithAggregatesFilter<"ClassScheduleOverride"> | string
    medium?: EnumMediumWithAggregatesFilter<"ClassScheduleOverride"> | $Enums.Medium
    createdAt?: DateTimeWithAggregatesFilter<"ClassScheduleOverride"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClassScheduleOverride"> | Date | string
  }

  export type LookupWhereInput = {
    AND?: LookupWhereInput | LookupWhereInput[]
    OR?: LookupWhereInput[]
    NOT?: LookupWhereInput | LookupWhereInput[]
    id?: IntFilter<"Lookup"> | number
    name?: StringFilter<"Lookup"> | string
    value?: StringFilter<"Lookup"> | string
    isActive?: BoolFilter<"Lookup"> | boolean
    createdAt?: DateTimeFilter<"Lookup"> | Date | string
  }

  export type LookupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type LookupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LookupWhereInput | LookupWhereInput[]
    OR?: LookupWhereInput[]
    NOT?: LookupWhereInput | LookupWhereInput[]
    name?: StringFilter<"Lookup"> | string
    value?: StringFilter<"Lookup"> | string
    isActive?: BoolFilter<"Lookup"> | boolean
    createdAt?: DateTimeFilter<"Lookup"> | Date | string
  }, "id">

  export type LookupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: LookupCountOrderByAggregateInput
    _avg?: LookupAvgOrderByAggregateInput
    _max?: LookupMaxOrderByAggregateInput
    _min?: LookupMinOrderByAggregateInput
    _sum?: LookupSumOrderByAggregateInput
  }

  export type LookupScalarWhereWithAggregatesInput = {
    AND?: LookupScalarWhereWithAggregatesInput | LookupScalarWhereWithAggregatesInput[]
    OR?: LookupScalarWhereWithAggregatesInput[]
    NOT?: LookupScalarWhereWithAggregatesInput | LookupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lookup"> | number
    name?: StringWithAggregatesFilter<"Lookup"> | string
    value?: StringWithAggregatesFilter<"Lookup"> | string
    isActive?: BoolWithAggregatesFilter<"Lookup"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Lookup"> | Date | string
  }

  export type ModeratorPermissionWhereInput = {
    AND?: ModeratorPermissionWhereInput | ModeratorPermissionWhereInput[]
    OR?: ModeratorPermissionWhereInput[]
    NOT?: ModeratorPermissionWhereInput | ModeratorPermissionWhereInput[]
    id?: IntFilter<"ModeratorPermission"> | number
    userId?: IntFilter<"ModeratorPermission"> | number
    canAssignTeachers?: BoolFilter<"ModeratorPermission"> | boolean
    canApproveJobs?: BoolFilter<"ModeratorPermission"> | boolean
    canManageUsers?: BoolFilter<"ModeratorPermission"> | boolean
    canPostJobs?: BoolFilter<"ModeratorPermission"> | boolean
    canRejectApplications?: BoolFilter<"ModeratorPermission"> | boolean
    createdAt?: DateTimeFilter<"ModeratorPermission"> | Date | string
    updatedAt?: DateTimeFilter<"ModeratorPermission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ModeratorPermissionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    canAssignTeachers?: SortOrder
    canApproveJobs?: SortOrder
    canManageUsers?: SortOrder
    canPostJobs?: SortOrder
    canRejectApplications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ModeratorPermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ModeratorPermissionWhereInput | ModeratorPermissionWhereInput[]
    OR?: ModeratorPermissionWhereInput[]
    NOT?: ModeratorPermissionWhereInput | ModeratorPermissionWhereInput[]
    canAssignTeachers?: BoolFilter<"ModeratorPermission"> | boolean
    canApproveJobs?: BoolFilter<"ModeratorPermission"> | boolean
    canManageUsers?: BoolFilter<"ModeratorPermission"> | boolean
    canPostJobs?: BoolFilter<"ModeratorPermission"> | boolean
    canRejectApplications?: BoolFilter<"ModeratorPermission"> | boolean
    createdAt?: DateTimeFilter<"ModeratorPermission"> | Date | string
    updatedAt?: DateTimeFilter<"ModeratorPermission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ModeratorPermissionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    canAssignTeachers?: SortOrder
    canApproveJobs?: SortOrder
    canManageUsers?: SortOrder
    canPostJobs?: SortOrder
    canRejectApplications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModeratorPermissionCountOrderByAggregateInput
    _avg?: ModeratorPermissionAvgOrderByAggregateInput
    _max?: ModeratorPermissionMaxOrderByAggregateInput
    _min?: ModeratorPermissionMinOrderByAggregateInput
    _sum?: ModeratorPermissionSumOrderByAggregateInput
  }

  export type ModeratorPermissionScalarWhereWithAggregatesInput = {
    AND?: ModeratorPermissionScalarWhereWithAggregatesInput | ModeratorPermissionScalarWhereWithAggregatesInput[]
    OR?: ModeratorPermissionScalarWhereWithAggregatesInput[]
    NOT?: ModeratorPermissionScalarWhereWithAggregatesInput | ModeratorPermissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ModeratorPermission"> | number
    userId?: IntWithAggregatesFilter<"ModeratorPermission"> | number
    canAssignTeachers?: BoolWithAggregatesFilter<"ModeratorPermission"> | boolean
    canApproveJobs?: BoolWithAggregatesFilter<"ModeratorPermission"> | boolean
    canManageUsers?: BoolWithAggregatesFilter<"ModeratorPermission"> | boolean
    canPostJobs?: BoolWithAggregatesFilter<"ModeratorPermission"> | boolean
    canRejectApplications?: BoolWithAggregatesFilter<"ModeratorPermission"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ModeratorPermission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ModeratorPermission"> | Date | string
  }

  export type StudentProfileWhereInput = {
    AND?: StudentProfileWhereInput | StudentProfileWhereInput[]
    OR?: StudentProfileWhereInput[]
    NOT?: StudentProfileWhereInput | StudentProfileWhereInput[]
    id?: IntFilter<"StudentProfile"> | number
    userId?: IntFilter<"StudentProfile"> | number
    gradeLevel?: IntNullableFilter<"StudentProfile"> | number | null
    institution?: StringNullableFilter<"StudentProfile"> | string | null
    createdAt?: DateTimeFilter<"StudentProfile"> | Date | string
    updatedAt?: DateTimeFilter<"StudentProfile"> | Date | string
    contact?: StringNullableFilter<"StudentProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StudentProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gradeLevel?: SortOrderInput | SortOrder
    institution?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contact?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StudentProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: StudentProfileWhereInput | StudentProfileWhereInput[]
    OR?: StudentProfileWhereInput[]
    NOT?: StudentProfileWhereInput | StudentProfileWhereInput[]
    gradeLevel?: IntNullableFilter<"StudentProfile"> | number | null
    institution?: StringNullableFilter<"StudentProfile"> | string | null
    createdAt?: DateTimeFilter<"StudentProfile"> | Date | string
    updatedAt?: DateTimeFilter<"StudentProfile"> | Date | string
    contact?: StringNullableFilter<"StudentProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type StudentProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gradeLevel?: SortOrderInput | SortOrder
    institution?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contact?: SortOrderInput | SortOrder
    _count?: StudentProfileCountOrderByAggregateInput
    _avg?: StudentProfileAvgOrderByAggregateInput
    _max?: StudentProfileMaxOrderByAggregateInput
    _min?: StudentProfileMinOrderByAggregateInput
    _sum?: StudentProfileSumOrderByAggregateInput
  }

  export type StudentProfileScalarWhereWithAggregatesInput = {
    AND?: StudentProfileScalarWhereWithAggregatesInput | StudentProfileScalarWhereWithAggregatesInput[]
    OR?: StudentProfileScalarWhereWithAggregatesInput[]
    NOT?: StudentProfileScalarWhereWithAggregatesInput | StudentProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StudentProfile"> | number
    userId?: IntWithAggregatesFilter<"StudentProfile"> | number
    gradeLevel?: IntNullableWithAggregatesFilter<"StudentProfile"> | number | null
    institution?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StudentProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentProfile"> | Date | string
    contact?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
  }

  export type TeacherProfileWhereInput = {
    AND?: TeacherProfileWhereInput | TeacherProfileWhereInput[]
    OR?: TeacherProfileWhereInput[]
    NOT?: TeacherProfileWhereInput | TeacherProfileWhereInput[]
    id?: IntFilter<"TeacherProfile"> | number
    userId?: IntFilter<"TeacherProfile"> | number
    bio?: StringNullableFilter<"TeacherProfile"> | string | null
    experienceYears?: IntNullableFilter<"TeacherProfile"> | number | null
    educationalBackground?: StringNullableFilter<"TeacherProfile"> | string | null
    cvUrl?: StringNullableFilter<"TeacherProfile"> | string | null
    medium?: EnumMediumNullableListFilter<"TeacherProfile">
    createdAt?: DateTimeFilter<"TeacherProfile"> | Date | string
    updatedAt?: DateTimeFilter<"TeacherProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TeacherProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrderInput | SortOrder
    experienceYears?: SortOrderInput | SortOrder
    educationalBackground?: SortOrderInput | SortOrder
    cvUrl?: SortOrderInput | SortOrder
    medium?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TeacherProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: TeacherProfileWhereInput | TeacherProfileWhereInput[]
    OR?: TeacherProfileWhereInput[]
    NOT?: TeacherProfileWhereInput | TeacherProfileWhereInput[]
    bio?: StringNullableFilter<"TeacherProfile"> | string | null
    experienceYears?: IntNullableFilter<"TeacherProfile"> | number | null
    educationalBackground?: StringNullableFilter<"TeacherProfile"> | string | null
    cvUrl?: StringNullableFilter<"TeacherProfile"> | string | null
    medium?: EnumMediumNullableListFilter<"TeacherProfile">
    createdAt?: DateTimeFilter<"TeacherProfile"> | Date | string
    updatedAt?: DateTimeFilter<"TeacherProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type TeacherProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrderInput | SortOrder
    experienceYears?: SortOrderInput | SortOrder
    educationalBackground?: SortOrderInput | SortOrder
    cvUrl?: SortOrderInput | SortOrder
    medium?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeacherProfileCountOrderByAggregateInput
    _avg?: TeacherProfileAvgOrderByAggregateInput
    _max?: TeacherProfileMaxOrderByAggregateInput
    _min?: TeacherProfileMinOrderByAggregateInput
    _sum?: TeacherProfileSumOrderByAggregateInput
  }

  export type TeacherProfileScalarWhereWithAggregatesInput = {
    AND?: TeacherProfileScalarWhereWithAggregatesInput | TeacherProfileScalarWhereWithAggregatesInput[]
    OR?: TeacherProfileScalarWhereWithAggregatesInput[]
    NOT?: TeacherProfileScalarWhereWithAggregatesInput | TeacherProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeacherProfile"> | number
    userId?: IntWithAggregatesFilter<"TeacherProfile"> | number
    bio?: StringNullableWithAggregatesFilter<"TeacherProfile"> | string | null
    experienceYears?: IntNullableWithAggregatesFilter<"TeacherProfile"> | number | null
    educationalBackground?: StringNullableWithAggregatesFilter<"TeacherProfile"> | string | null
    cvUrl?: StringNullableWithAggregatesFilter<"TeacherProfile"> | string | null
    medium?: EnumMediumNullableListFilter<"TeacherProfile">
    createdAt?: DateTimeWithAggregatesFilter<"TeacherProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TeacherProfile"> | Date | string
  }

  export type TuitionPostWhereInput = {
    AND?: TuitionPostWhereInput | TuitionPostWhereInput[]
    OR?: TuitionPostWhereInput[]
    NOT?: TuitionPostWhereInput | TuitionPostWhereInput[]
    id?: IntFilter<"TuitionPost"> | number
    postedBy?: IntFilter<"TuitionPost"> | number
    title?: StringFilter<"TuitionPost"> | string
    description?: StringNullableFilter<"TuitionPost"> | string | null
    budget?: DecimalNullableFilter<"TuitionPost"> | Decimal | DecimalJsLike | number | string | null
    medium?: EnumMediumFilter<"TuitionPost"> | $Enums.Medium
    area?: IntFilter<"TuitionPost"> | number
    days?: EnumDayNullableListFilter<"TuitionPost">
    startTime?: StringFilter<"TuitionPost"> | string
    endTime?: StringFilter<"TuitionPost"> | string
    status?: IntFilter<"TuitionPost"> | number
    createdAt?: DateTimeFilter<"TuitionPost"> | Date | string
    updatedAt?: DateTimeFilter<"TuitionPost"> | Date | string
    subjects?: IntNullableListFilter<"TuitionPost">
    postedByUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    assigns?: XOR<AssignedTeacherStudentNullableScalarRelationFilter, AssignedTeacherStudentWhereInput> | null
  }

  export type TuitionPostOrderByWithRelationInput = {
    id?: SortOrder
    postedBy?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    medium?: SortOrder
    area?: SortOrder
    days?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subjects?: SortOrder
    postedByUser?: UserOrderByWithRelationInput
    assigns?: AssignedTeacherStudentOrderByWithRelationInput
  }

  export type TuitionPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TuitionPostWhereInput | TuitionPostWhereInput[]
    OR?: TuitionPostWhereInput[]
    NOT?: TuitionPostWhereInput | TuitionPostWhereInput[]
    postedBy?: IntFilter<"TuitionPost"> | number
    title?: StringFilter<"TuitionPost"> | string
    description?: StringNullableFilter<"TuitionPost"> | string | null
    budget?: DecimalNullableFilter<"TuitionPost"> | Decimal | DecimalJsLike | number | string | null
    medium?: EnumMediumFilter<"TuitionPost"> | $Enums.Medium
    area?: IntFilter<"TuitionPost"> | number
    days?: EnumDayNullableListFilter<"TuitionPost">
    startTime?: StringFilter<"TuitionPost"> | string
    endTime?: StringFilter<"TuitionPost"> | string
    status?: IntFilter<"TuitionPost"> | number
    createdAt?: DateTimeFilter<"TuitionPost"> | Date | string
    updatedAt?: DateTimeFilter<"TuitionPost"> | Date | string
    subjects?: IntNullableListFilter<"TuitionPost">
    postedByUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    assigns?: XOR<AssignedTeacherStudentNullableScalarRelationFilter, AssignedTeacherStudentWhereInput> | null
  }, "id">

  export type TuitionPostOrderByWithAggregationInput = {
    id?: SortOrder
    postedBy?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    medium?: SortOrder
    area?: SortOrder
    days?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subjects?: SortOrder
    _count?: TuitionPostCountOrderByAggregateInput
    _avg?: TuitionPostAvgOrderByAggregateInput
    _max?: TuitionPostMaxOrderByAggregateInput
    _min?: TuitionPostMinOrderByAggregateInput
    _sum?: TuitionPostSumOrderByAggregateInput
  }

  export type TuitionPostScalarWhereWithAggregatesInput = {
    AND?: TuitionPostScalarWhereWithAggregatesInput | TuitionPostScalarWhereWithAggregatesInput[]
    OR?: TuitionPostScalarWhereWithAggregatesInput[]
    NOT?: TuitionPostScalarWhereWithAggregatesInput | TuitionPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TuitionPost"> | number
    postedBy?: IntWithAggregatesFilter<"TuitionPost"> | number
    title?: StringWithAggregatesFilter<"TuitionPost"> | string
    description?: StringNullableWithAggregatesFilter<"TuitionPost"> | string | null
    budget?: DecimalNullableWithAggregatesFilter<"TuitionPost"> | Decimal | DecimalJsLike | number | string | null
    medium?: EnumMediumWithAggregatesFilter<"TuitionPost"> | $Enums.Medium
    area?: IntWithAggregatesFilter<"TuitionPost"> | number
    days?: EnumDayNullableListFilter<"TuitionPost">
    startTime?: StringWithAggregatesFilter<"TuitionPost"> | string
    endTime?: StringWithAggregatesFilter<"TuitionPost"> | string
    status?: IntWithAggregatesFilter<"TuitionPost"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TuitionPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TuitionPost"> | Date | string
    subjects?: IntNullableListFilter<"TuitionPost">
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    userCode?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    contact?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    refreshTokens?: RefreshTokenListRelationFilter
    teacherProfile?: XOR<TeacherProfileNullableScalarRelationFilter, TeacherProfileWhereInput> | null
    moderatorPermission?: XOR<ModeratorPermissionNullableScalarRelationFilter, ModeratorPermissionWhereInput> | null
    studentProfile?: XOR<StudentProfileNullableScalarRelationFilter, StudentProfileWhereInput> | null
    teacherAssignments?: AssignedTeacherStudentListRelationFilter
    studentAssignments?: AssignedTeacherStudentListRelationFilter
    teacherHomework?: AssignmentListRelationFilter
    studentHomework?: AssignmentListRelationFilter
    tuitionPosts?: TuitionPostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userCode?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    teacherProfile?: TeacherProfileOrderByWithRelationInput
    moderatorPermission?: ModeratorPermissionOrderByWithRelationInput
    studentProfile?: StudentProfileOrderByWithRelationInput
    teacherAssignments?: AssignedTeacherStudentOrderByRelationAggregateInput
    studentAssignments?: AssignedTeacherStudentOrderByRelationAggregateInput
    teacherHomework?: AssignmentOrderByRelationAggregateInput
    studentHomework?: AssignmentOrderByRelationAggregateInput
    tuitionPosts?: TuitionPostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userCode?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    contact?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    refreshTokens?: RefreshTokenListRelationFilter
    teacherProfile?: XOR<TeacherProfileNullableScalarRelationFilter, TeacherProfileWhereInput> | null
    moderatorPermission?: XOR<ModeratorPermissionNullableScalarRelationFilter, ModeratorPermissionWhereInput> | null
    studentProfile?: XOR<StudentProfileNullableScalarRelationFilter, StudentProfileWhereInput> | null
    teacherAssignments?: AssignedTeacherStudentListRelationFilter
    studentAssignments?: AssignedTeacherStudentListRelationFilter
    teacherHomework?: AssignmentListRelationFilter
    studentHomework?: AssignmentListRelationFilter
    tuitionPosts?: TuitionPostListRelationFilter
  }, "id" | "userCode" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userCode?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    userCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    contact?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: EnumGenderNullableWithAggregatesFilter<"User"> | $Enums.Gender | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: IntFilter<"RefreshToken"> | number
    token?: StringFilter<"RefreshToken"> | string
    userId?: IntFilter<"RefreshToken"> | number
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: IntFilter<"RefreshToken"> | number
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _avg?: RefreshTokenAvgOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
    _sum?: RefreshTokenSumOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RefreshToken"> | number
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: IntWithAggregatesFilter<"RefreshToken"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type TeacherApplicationCreateInput = {
    tuitionPostId: number
    teacherId: number
    coverNote?: string | null
    status?: number
    appliedAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherApplicationUncheckedCreateInput = {
    id?: number
    tuitionPostId: number
    teacherId: number
    coverNote?: string | null
    status?: number
    appliedAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherApplicationUpdateInput = {
    tuitionPostId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    coverNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tuitionPostId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    coverNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherApplicationCreateManyInput = {
    id?: number
    tuitionPostId: number
    teacherId: number
    coverNote?: string | null
    status?: number
    appliedAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherApplicationUpdateManyMutationInput = {
    tuitionPostId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    coverNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherApplicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tuitionPostId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    coverNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignedTeacherStudentCreateInput = {
    assignedBy: number
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tuitionPost: TuitionPostCreateNestedOneWithoutAssignsInput
    teacher: UserCreateNestedOneWithoutTeacherAssignmentsInput
    student: UserCreateNestedOneWithoutStudentAssignmentsInput
    classSchedule?: ClassScheduleCreateNestedOneWithoutAssignmentInput
  }

  export type AssignedTeacherStudentUncheckedCreateInput = {
    id?: number
    tuitionPostId: number
    teacherId: number
    studentId: number
    assignedBy: number
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classSchedule?: ClassScheduleUncheckedCreateNestedOneWithoutAssignmentInput
  }

  export type AssignedTeacherStudentUpdateInput = {
    assignedBy?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tuitionPost?: TuitionPostUpdateOneRequiredWithoutAssignsNestedInput
    teacher?: UserUpdateOneRequiredWithoutTeacherAssignmentsNestedInput
    student?: UserUpdateOneRequiredWithoutStudentAssignmentsNestedInput
    classSchedule?: ClassScheduleUpdateOneWithoutAssignmentNestedInput
  }

  export type AssignedTeacherStudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tuitionPostId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    assignedBy?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classSchedule?: ClassScheduleUncheckedUpdateOneWithoutAssignmentNestedInput
  }

  export type AssignedTeacherStudentCreateManyInput = {
    id?: number
    tuitionPostId: number
    teacherId: number
    studentId: number
    assignedBy: number
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignedTeacherStudentUpdateManyMutationInput = {
    assignedBy?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignedTeacherStudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tuitionPostId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    assignedBy?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateInput = {
    title: string
    description?: string | null
    dueDate: Date | string
    fileUrl?: string | null
    fileName?: string | null
    note?: string | null
    grade?: number | null
    feedback?: string | null
    gradedAt?: Date | string | null
    status?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subject?: number | null
    teacher: UserCreateNestedOneWithoutTeacherHomeworkInput
    student: UserCreateNestedOneWithoutStudentHomeworkInput
  }

  export type AssignmentUncheckedCreateInput = {
    id?: number
    teacherId: number
    studentId: number
    title: string
    description?: string | null
    dueDate: Date | string
    fileUrl?: string | null
    fileName?: string | null
    note?: string | null
    grade?: number | null
    feedback?: string | null
    gradedAt?: Date | string | null
    status?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subject?: number | null
  }

  export type AssignmentUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: NullableIntFieldUpdateOperationsInput | number | null
    teacher?: UserUpdateOneRequiredWithoutTeacherHomeworkNestedInput
    student?: UserUpdateOneRequiredWithoutStudentHomeworkNestedInput
  }

  export type AssignmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AssignmentCreateManyInput = {
    id?: number
    teacherId: number
    studentId: number
    title: string
    description?: string | null
    dueDate: Date | string
    fileUrl?: string | null
    fileName?: string | null
    note?: string | null
    grade?: number | null
    feedback?: string | null
    gradedAt?: Date | string | null
    status?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subject?: number | null
  }

  export type AssignmentUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AssignmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClassScheduleCreateInput = {
    teacherId: number
    studentId: number
    subjectIds?: ClassScheduleCreatesubjectIdsInput | number[]
    days?: ClassScheduleCreatedaysInput | $Enums.Day[]
    startTime: string
    endTime: string
    medium: $Enums.Medium
    createdAt?: Date | string
    updatedAt?: Date | string
    overrides?: ClassScheduleOverrideCreateNestedManyWithoutClassScheduleInput
    assignment: AssignedTeacherStudentCreateNestedOneWithoutClassScheduleInput
  }

  export type ClassScheduleUncheckedCreateInput = {
    id?: number
    assignmentId: number
    teacherId: number
    studentId: number
    subjectIds?: ClassScheduleCreatesubjectIdsInput | number[]
    days?: ClassScheduleCreatedaysInput | $Enums.Day[]
    startTime: string
    endTime: string
    medium: $Enums.Medium
    createdAt?: Date | string
    updatedAt?: Date | string
    overrides?: ClassScheduleOverrideUncheckedCreateNestedManyWithoutClassScheduleInput
  }

  export type ClassScheduleUpdateInput = {
    teacherId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectIds?: ClassScheduleUpdatesubjectIdsInput | number[]
    days?: ClassScheduleUpdatedaysInput | $Enums.Day[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    medium?: EnumMediumFieldUpdateOperationsInput | $Enums.Medium
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    overrides?: ClassScheduleOverrideUpdateManyWithoutClassScheduleNestedInput
    assignment?: AssignedTeacherStudentUpdateOneRequiredWithoutClassScheduleNestedInput
  }

  export type ClassScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectIds?: ClassScheduleUpdatesubjectIdsInput | number[]
    days?: ClassScheduleUpdatedaysInput | $Enums.Day[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    medium?: EnumMediumFieldUpdateOperationsInput | $Enums.Medium
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    overrides?: ClassScheduleOverrideUncheckedUpdateManyWithoutClassScheduleNestedInput
  }

  export type ClassScheduleCreateManyInput = {
    id?: number
    assignmentId: number
    teacherId: number
    studentId: number
    subjectIds?: ClassScheduleCreatesubjectIdsInput | number[]
    days?: ClassScheduleCreatedaysInput | $Enums.Day[]
    startTime: string
    endTime: string
    medium: $Enums.Medium
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassScheduleUpdateManyMutationInput = {
    teacherId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectIds?: ClassScheduleUpdatesubjectIdsInput | number[]
    days?: ClassScheduleUpdatedaysInput | $Enums.Day[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    medium?: EnumMediumFieldUpdateOperationsInput | $Enums.Medium
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectIds?: ClassScheduleUpdatesubjectIdsInput | number[]
    days?: ClassScheduleUpdatedaysInput | $Enums.Day[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    medium?: EnumMediumFieldUpdateOperationsInput | $Enums.Medium
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassScheduleOverrideCreateInput = {
    originalDate: Date | string
    newDate: Date | string
    startTime: string
    endTime: string
    medium: $Enums.Medium
    createdAt?: Date | string
    updatedAt?: Date | string
    classSchedule: ClassScheduleCreateNestedOneWithoutOverridesInput
  }

  export type ClassScheduleOverrideUncheckedCreateInput = {
    id?: number
    classScheduleId: number
    originalDate: Date | string
    newDate: Date | string
    startTime: string
    endTime: string
    medium: $Enums.Medium
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassScheduleOverrideUpdateInput = {
    originalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    medium?: EnumMediumFieldUpdateOperationsInput | $Enums.Medium
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classSchedule?: ClassScheduleUpdateOneRequiredWithoutOverridesNestedInput
  }

  export type ClassScheduleOverrideUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    classScheduleId?: IntFieldUpdateOperationsInput | number
    originalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    medium?: EnumMediumFieldUpdateOperationsInput | $Enums.Medium
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassScheduleOverrideCreateManyInput = {
    id?: number
    classScheduleId: number
    originalDate: Date | string
    newDate: Date | string
    startTime: string
    endTime: string
    medium: $Enums.Medium
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassScheduleOverrideUpdateManyMutationInput = {
    originalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    medium?: EnumMediumFieldUpdateOperationsInput | $Enums.Medium
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassScheduleOverrideUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    classScheduleId?: IntFieldUpdateOperationsInput | number
    originalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    medium?: EnumMediumFieldUpdateOperationsInput | $Enums.Medium
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LookupCreateInput = {
    name: string
    value: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type LookupUncheckedCreateInput = {
    id?: number
    name: string
    value: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type LookupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LookupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LookupCreateManyInput = {
    id?: number
    name: string
    value: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type LookupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LookupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModeratorPermissionCreateInput = {
    canAssignTeachers?: boolean
    canApproveJobs?: boolean
    canManageUsers?: boolean
    canPostJobs?: boolean
    canRejectApplications?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutModeratorPermissionInput
  }

  export type ModeratorPermissionUncheckedCreateInput = {
    id?: number
    userId: number
    canAssignTeachers?: boolean
    canApproveJobs?: boolean
    canManageUsers?: boolean
    canPostJobs?: boolean
    canRejectApplications?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModeratorPermissionUpdateInput = {
    canAssignTeachers?: BoolFieldUpdateOperationsInput | boolean
    canApproveJobs?: BoolFieldUpdateOperationsInput | boolean
    canManageUsers?: BoolFieldUpdateOperationsInput | boolean
    canPostJobs?: BoolFieldUpdateOperationsInput | boolean
    canRejectApplications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutModeratorPermissionNestedInput
  }

  export type ModeratorPermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    canAssignTeachers?: BoolFieldUpdateOperationsInput | boolean
    canApproveJobs?: BoolFieldUpdateOperationsInput | boolean
    canManageUsers?: BoolFieldUpdateOperationsInput | boolean
    canPostJobs?: BoolFieldUpdateOperationsInput | boolean
    canRejectApplications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModeratorPermissionCreateManyInput = {
    id?: number
    userId: number
    canAssignTeachers?: boolean
    canApproveJobs?: boolean
    canManageUsers?: boolean
    canPostJobs?: boolean
    canRejectApplications?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModeratorPermissionUpdateManyMutationInput = {
    canAssignTeachers?: BoolFieldUpdateOperationsInput | boolean
    canApproveJobs?: BoolFieldUpdateOperationsInput | boolean
    canManageUsers?: BoolFieldUpdateOperationsInput | boolean
    canPostJobs?: BoolFieldUpdateOperationsInput | boolean
    canRejectApplications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModeratorPermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    canAssignTeachers?: BoolFieldUpdateOperationsInput | boolean
    canApproveJobs?: BoolFieldUpdateOperationsInput | boolean
    canManageUsers?: BoolFieldUpdateOperationsInput | boolean
    canPostJobs?: BoolFieldUpdateOperationsInput | boolean
    canRejectApplications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProfileCreateInput = {
    gradeLevel?: number | null
    institution?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contact?: string | null
    user: UserCreateNestedOneWithoutStudentProfileInput
  }

  export type StudentProfileUncheckedCreateInput = {
    id?: number
    userId: number
    gradeLevel?: number | null
    institution?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contact?: string | null
  }

  export type StudentProfileUpdateInput = {
    gradeLevel?: NullableIntFieldUpdateOperationsInput | number | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutStudentProfileNestedInput
  }

  export type StudentProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    gradeLevel?: NullableIntFieldUpdateOperationsInput | number | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentProfileCreateManyInput = {
    id?: number
    userId: number
    gradeLevel?: number | null
    institution?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contact?: string | null
  }

  export type StudentProfileUpdateManyMutationInput = {
    gradeLevel?: NullableIntFieldUpdateOperationsInput | number | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    gradeLevel?: NullableIntFieldUpdateOperationsInput | number | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeacherProfileCreateInput = {
    bio?: string | null
    experienceYears?: number | null
    educationalBackground?: string | null
    cvUrl?: string | null
    medium?: TeacherProfileCreatemediumInput | $Enums.Medium[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTeacherProfileInput
  }

  export type TeacherProfileUncheckedCreateInput = {
    id?: number
    userId: number
    bio?: string | null
    experienceYears?: number | null
    educationalBackground?: string | null
    cvUrl?: string | null
    medium?: TeacherProfileCreatemediumInput | $Enums.Medium[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherProfileUpdateInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    educationalBackground?: NullableStringFieldUpdateOperationsInput | string | null
    cvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: TeacherProfileUpdatemediumInput | $Enums.Medium[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeacherProfileNestedInput
  }

  export type TeacherProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    educationalBackground?: NullableStringFieldUpdateOperationsInput | string | null
    cvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: TeacherProfileUpdatemediumInput | $Enums.Medium[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherProfileCreateManyInput = {
    id?: number
    userId: number
    bio?: string | null
    experienceYears?: number | null
    educationalBackground?: string | null
    cvUrl?: string | null
    medium?: TeacherProfileCreatemediumInput | $Enums.Medium[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherProfileUpdateManyMutationInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    educationalBackground?: NullableStringFieldUpdateOperationsInput | string | null
    cvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: TeacherProfileUpdatemediumInput | $Enums.Medium[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    educationalBackground?: NullableStringFieldUpdateOperationsInput | string | null
    cvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: TeacherProfileUpdatemediumInput | $Enums.Medium[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TuitionPostCreateInput = {
    title: string
    description?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    medium: $Enums.Medium
    area: number
    days?: TuitionPostCreatedaysInput | $Enums.Day[]
    startTime: string
    endTime: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: TuitionPostCreatesubjectsInput | number[]
    postedByUser: UserCreateNestedOneWithoutTuitionPostsInput
    assigns?: AssignedTeacherStudentCreateNestedOneWithoutTuitionPostInput
  }

  export type TuitionPostUncheckedCreateInput = {
    id?: number
    postedBy: number
    title: string
    description?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    medium: $Enums.Medium
    area: number
    days?: TuitionPostCreatedaysInput | $Enums.Day[]
    startTime: string
    endTime: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: TuitionPostCreatesubjectsInput | number[]
    assigns?: AssignedTeacherStudentUncheckedCreateNestedOneWithoutTuitionPostInput
  }

  export type TuitionPostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    medium?: EnumMediumFieldUpdateOperationsInput | $Enums.Medium
    area?: IntFieldUpdateOperationsInput | number
    days?: TuitionPostUpdatedaysInput | $Enums.Day[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: TuitionPostUpdatesubjectsInput | number[]
    postedByUser?: UserUpdateOneRequiredWithoutTuitionPostsNestedInput
    assigns?: AssignedTeacherStudentUpdateOneWithoutTuitionPostNestedInput
  }

  export type TuitionPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postedBy?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    medium?: EnumMediumFieldUpdateOperationsInput | $Enums.Medium
    area?: IntFieldUpdateOperationsInput | number
    days?: TuitionPostUpdatedaysInput | $Enums.Day[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: TuitionPostUpdatesubjectsInput | number[]
    assigns?: AssignedTeacherStudentUncheckedUpdateOneWithoutTuitionPostNestedInput
  }

  export type TuitionPostCreateManyInput = {
    id?: number
    postedBy: number
    title: string
    description?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    medium: $Enums.Medium
    area: number
    days?: TuitionPostCreatedaysInput | $Enums.Day[]
    startTime: string
    endTime: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: TuitionPostCreatesubjectsInput | number[]
  }

  export type TuitionPostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    medium?: EnumMediumFieldUpdateOperationsInput | $Enums.Medium
    area?: IntFieldUpdateOperationsInput | number
    days?: TuitionPostUpdatedaysInput | $Enums.Day[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: TuitionPostUpdatesubjectsInput | number[]
  }

  export type TuitionPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postedBy?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    medium?: EnumMediumFieldUpdateOperationsInput | $Enums.Medium
    area?: IntFieldUpdateOperationsInput | number
    days?: TuitionPostUpdatedaysInput | $Enums.Day[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: TuitionPostUpdatesubjectsInput | number[]
  }

  export type UserCreateInput = {
    userCode?: string | null
    name: string
    email: string
    password: string
    address?: string | null
    contact?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    teacherProfile?: TeacherProfileCreateNestedOneWithoutUserInput
    moderatorPermission?: ModeratorPermissionCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
    teacherAssignments?: AssignedTeacherStudentCreateNestedManyWithoutTeacherInput
    studentAssignments?: AssignedTeacherStudentCreateNestedManyWithoutStudentInput
    teacherHomework?: AssignmentCreateNestedManyWithoutTeacherInput
    studentHomework?: AssignmentCreateNestedManyWithoutStudentInput
    tuitionPosts?: TuitionPostCreateNestedManyWithoutPostedByUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    userCode?: string | null
    name: string
    email: string
    password: string
    address?: string | null
    contact?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    teacherProfile?: TeacherProfileUncheckedCreateNestedOneWithoutUserInput
    moderatorPermission?: ModeratorPermissionUncheckedCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
    teacherAssignments?: AssignedTeacherStudentUncheckedCreateNestedManyWithoutTeacherInput
    studentAssignments?: AssignedTeacherStudentUncheckedCreateNestedManyWithoutStudentInput
    teacherHomework?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    studentHomework?: AssignmentUncheckedCreateNestedManyWithoutStudentInput
    tuitionPosts?: TuitionPostUncheckedCreateNestedManyWithoutPostedByUserInput
  }

  export type UserUpdateInput = {
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    teacherProfile?: TeacherProfileUpdateOneWithoutUserNestedInput
    moderatorPermission?: ModeratorPermissionUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
    teacherAssignments?: AssignedTeacherStudentUpdateManyWithoutTeacherNestedInput
    studentAssignments?: AssignedTeacherStudentUpdateManyWithoutStudentNestedInput
    teacherHomework?: AssignmentUpdateManyWithoutTeacherNestedInput
    studentHomework?: AssignmentUpdateManyWithoutStudentNestedInput
    tuitionPosts?: TuitionPostUpdateManyWithoutPostedByUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    teacherProfile?: TeacherProfileUncheckedUpdateOneWithoutUserNestedInput
    moderatorPermission?: ModeratorPermissionUncheckedUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
    teacherAssignments?: AssignedTeacherStudentUncheckedUpdateManyWithoutTeacherNestedInput
    studentAssignments?: AssignedTeacherStudentUncheckedUpdateManyWithoutStudentNestedInput
    teacherHomework?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    studentHomework?: AssignmentUncheckedUpdateManyWithoutStudentNestedInput
    tuitionPosts?: TuitionPostUncheckedUpdateManyWithoutPostedByUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    userCode?: string | null
    name: string
    email: string
    password: string
    address?: string | null
    contact?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: number
    token: string
    userId: number
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type RefreshTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: number
    token: string
    userId: number
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TeacherApplicationTuitionPostIdTeacherIdCompoundUniqueInput = {
    tuitionPostId: number
    teacherId: number
  }

  export type TeacherApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    tuitionPostId?: SortOrder
    teacherId?: SortOrder
    coverNote?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
    tuitionPostId?: SortOrder
    teacherId?: SortOrder
    status?: SortOrder
  }

  export type TeacherApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    tuitionPostId?: SortOrder
    teacherId?: SortOrder
    coverNote?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    tuitionPostId?: SortOrder
    teacherId?: SortOrder
    coverNote?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherApplicationSumOrderByAggregateInput = {
    id?: SortOrder
    tuitionPostId?: SortOrder
    teacherId?: SortOrder
    status?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TuitionPostScalarRelationFilter = {
    is?: TuitionPostWhereInput
    isNot?: TuitionPostWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ClassScheduleNullableScalarRelationFilter = {
    is?: ClassScheduleWhereInput | null
    isNot?: ClassScheduleWhereInput | null
  }

  export type AssignedTeacherStudentCountOrderByAggregateInput = {
    id?: SortOrder
    tuitionPostId?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    assignedBy?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignedTeacherStudentAvgOrderByAggregateInput = {
    id?: SortOrder
    tuitionPostId?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    assignedBy?: SortOrder
  }

  export type AssignedTeacherStudentMaxOrderByAggregateInput = {
    id?: SortOrder
    tuitionPostId?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    assignedBy?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignedTeacherStudentMinOrderByAggregateInput = {
    id?: SortOrder
    tuitionPostId?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    assignedBy?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignedTeacherStudentSumOrderByAggregateInput = {
    id?: SortOrder
    tuitionPostId?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    assignedBy?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    note?: SortOrder
    grade?: SortOrder
    feedback?: SortOrder
    gradedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subject?: SortOrder
  }

  export type AssignmentAvgOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    grade?: SortOrder
    status?: SortOrder
    subject?: SortOrder
  }

  export type AssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    note?: SortOrder
    grade?: SortOrder
    feedback?: SortOrder
    gradedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subject?: SortOrder
  }

  export type AssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    note?: SortOrder
    grade?: SortOrder
    feedback?: SortOrder
    gradedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subject?: SortOrder
  }

  export type AssignmentSumOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    grade?: SortOrder
    status?: SortOrder
    subject?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumDayNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel> | null
    has?: $Enums.Day | EnumDayFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Day[] | ListEnumDayFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumMediumFilter<$PrismaModel = never> = {
    equals?: $Enums.Medium | EnumMediumFieldRefInput<$PrismaModel>
    in?: $Enums.Medium[] | ListEnumMediumFieldRefInput<$PrismaModel>
    notIn?: $Enums.Medium[] | ListEnumMediumFieldRefInput<$PrismaModel>
    not?: NestedEnumMediumFilter<$PrismaModel> | $Enums.Medium
  }

  export type ClassScheduleOverrideListRelationFilter = {
    every?: ClassScheduleOverrideWhereInput
    some?: ClassScheduleOverrideWhereInput
    none?: ClassScheduleOverrideWhereInput
  }

  export type AssignedTeacherStudentScalarRelationFilter = {
    is?: AssignedTeacherStudentWhereInput
    isNot?: AssignedTeacherStudentWhereInput
  }

  export type ClassScheduleOverrideOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    subjectIds?: SortOrder
    days?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    medium?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    subjectIds?: SortOrder
  }

  export type ClassScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    medium?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    medium?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    teacherId?: SortOrder
    studentId?: SortOrder
    subjectIds?: SortOrder
  }

  export type EnumMediumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Medium | EnumMediumFieldRefInput<$PrismaModel>
    in?: $Enums.Medium[] | ListEnumMediumFieldRefInput<$PrismaModel>
    notIn?: $Enums.Medium[] | ListEnumMediumFieldRefInput<$PrismaModel>
    not?: NestedEnumMediumWithAggregatesFilter<$PrismaModel> | $Enums.Medium
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediumFilter<$PrismaModel>
    _max?: NestedEnumMediumFilter<$PrismaModel>
  }

  export type ClassScheduleScalarRelationFilter = {
    is?: ClassScheduleWhereInput
    isNot?: ClassScheduleWhereInput
  }

  export type ClassScheduleOverrideCountOrderByAggregateInput = {
    id?: SortOrder
    classScheduleId?: SortOrder
    originalDate?: SortOrder
    newDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    medium?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassScheduleOverrideAvgOrderByAggregateInput = {
    id?: SortOrder
    classScheduleId?: SortOrder
  }

  export type ClassScheduleOverrideMaxOrderByAggregateInput = {
    id?: SortOrder
    classScheduleId?: SortOrder
    originalDate?: SortOrder
    newDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    medium?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassScheduleOverrideMinOrderByAggregateInput = {
    id?: SortOrder
    classScheduleId?: SortOrder
    originalDate?: SortOrder
    newDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    medium?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassScheduleOverrideSumOrderByAggregateInput = {
    id?: SortOrder
    classScheduleId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LookupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type LookupAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LookupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type LookupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type LookupSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ModeratorPermissionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    canAssignTeachers?: SortOrder
    canApproveJobs?: SortOrder
    canManageUsers?: SortOrder
    canPostJobs?: SortOrder
    canRejectApplications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModeratorPermissionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ModeratorPermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    canAssignTeachers?: SortOrder
    canApproveJobs?: SortOrder
    canManageUsers?: SortOrder
    canPostJobs?: SortOrder
    canRejectApplications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModeratorPermissionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    canAssignTeachers?: SortOrder
    canApproveJobs?: SortOrder
    canManageUsers?: SortOrder
    canPostJobs?: SortOrder
    canRejectApplications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModeratorPermissionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StudentProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gradeLevel?: SortOrder
    institution?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contact?: SortOrder
  }

  export type StudentProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gradeLevel?: SortOrder
  }

  export type StudentProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gradeLevel?: SortOrder
    institution?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contact?: SortOrder
  }

  export type StudentProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gradeLevel?: SortOrder
    institution?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contact?: SortOrder
  }

  export type StudentProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gradeLevel?: SortOrder
  }

  export type EnumMediumNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Medium[] | ListEnumMediumFieldRefInput<$PrismaModel> | null
    has?: $Enums.Medium | EnumMediumFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Medium[] | ListEnumMediumFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Medium[] | ListEnumMediumFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TeacherProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    experienceYears?: SortOrder
    educationalBackground?: SortOrder
    cvUrl?: SortOrder
    medium?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    experienceYears?: SortOrder
  }

  export type TeacherProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    experienceYears?: SortOrder
    educationalBackground?: SortOrder
    cvUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    experienceYears?: SortOrder
    educationalBackground?: SortOrder
    cvUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    experienceYears?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type AssignedTeacherStudentNullableScalarRelationFilter = {
    is?: AssignedTeacherStudentWhereInput | null
    isNot?: AssignedTeacherStudentWhereInput | null
  }

  export type TuitionPostCountOrderByAggregateInput = {
    id?: SortOrder
    postedBy?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    medium?: SortOrder
    area?: SortOrder
    days?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subjects?: SortOrder
  }

  export type TuitionPostAvgOrderByAggregateInput = {
    id?: SortOrder
    postedBy?: SortOrder
    budget?: SortOrder
    area?: SortOrder
    status?: SortOrder
    subjects?: SortOrder
  }

  export type TuitionPostMaxOrderByAggregateInput = {
    id?: SortOrder
    postedBy?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    medium?: SortOrder
    area?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TuitionPostMinOrderByAggregateInput = {
    id?: SortOrder
    postedBy?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    medium?: SortOrder
    area?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TuitionPostSumOrderByAggregateInput = {
    id?: SortOrder
    postedBy?: SortOrder
    budget?: SortOrder
    area?: SortOrder
    status?: SortOrder
    subjects?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type TeacherProfileNullableScalarRelationFilter = {
    is?: TeacherProfileWhereInput | null
    isNot?: TeacherProfileWhereInput | null
  }

  export type ModeratorPermissionNullableScalarRelationFilter = {
    is?: ModeratorPermissionWhereInput | null
    isNot?: ModeratorPermissionWhereInput | null
  }

  export type StudentProfileNullableScalarRelationFilter = {
    is?: StudentProfileWhereInput | null
    isNot?: StudentProfileWhereInput | null
  }

  export type AssignedTeacherStudentListRelationFilter = {
    every?: AssignedTeacherStudentWhereInput
    some?: AssignedTeacherStudentWhereInput
    none?: AssignedTeacherStudentWhereInput
  }

  export type AssignmentListRelationFilter = {
    every?: AssignmentWhereInput
    some?: AssignmentWhereInput
    none?: AssignmentWhereInput
  }

  export type TuitionPostListRelationFilter = {
    every?: TuitionPostWhereInput
    some?: TuitionPostWhereInput
    none?: TuitionPostWhereInput
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignedTeacherStudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TuitionPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userCode?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    gender?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userCode?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    gender?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userCode?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    contact?: SortOrder
    gender?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type RefreshTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type RefreshTokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TuitionPostCreateNestedOneWithoutAssignsInput = {
    create?: XOR<TuitionPostCreateWithoutAssignsInput, TuitionPostUncheckedCreateWithoutAssignsInput>
    connectOrCreate?: TuitionPostCreateOrConnectWithoutAssignsInput
    connect?: TuitionPostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTeacherAssignmentsInput = {
    create?: XOR<UserCreateWithoutTeacherAssignmentsInput, UserUncheckedCreateWithoutTeacherAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStudentAssignmentsInput = {
    create?: XOR<UserCreateWithoutStudentAssignmentsInput, UserUncheckedCreateWithoutStudentAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type ClassScheduleCreateNestedOneWithoutAssignmentInput = {
    create?: XOR<ClassScheduleCreateWithoutAssignmentInput, ClassScheduleUncheckedCreateWithoutAssignmentInput>
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutAssignmentInput
    connect?: ClassScheduleWhereUniqueInput
  }

  export type ClassScheduleUncheckedCreateNestedOneWithoutAssignmentInput = {
    create?: XOR<ClassScheduleCreateWithoutAssignmentInput, ClassScheduleUncheckedCreateWithoutAssignmentInput>
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutAssignmentInput
    connect?: ClassScheduleWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TuitionPostUpdateOneRequiredWithoutAssignsNestedInput = {
    create?: XOR<TuitionPostCreateWithoutAssignsInput, TuitionPostUncheckedCreateWithoutAssignsInput>
    connectOrCreate?: TuitionPostCreateOrConnectWithoutAssignsInput
    upsert?: TuitionPostUpsertWithoutAssignsInput
    connect?: TuitionPostWhereUniqueInput
    update?: XOR<XOR<TuitionPostUpdateToOneWithWhereWithoutAssignsInput, TuitionPostUpdateWithoutAssignsInput>, TuitionPostUncheckedUpdateWithoutAssignsInput>
  }

  export type UserUpdateOneRequiredWithoutTeacherAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutTeacherAssignmentsInput, UserUncheckedCreateWithoutTeacherAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherAssignmentsInput
    upsert?: UserUpsertWithoutTeacherAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeacherAssignmentsInput, UserUpdateWithoutTeacherAssignmentsInput>, UserUncheckedUpdateWithoutTeacherAssignmentsInput>
  }

  export type UserUpdateOneRequiredWithoutStudentAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutStudentAssignmentsInput, UserUncheckedCreateWithoutStudentAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentAssignmentsInput
    upsert?: UserUpsertWithoutStudentAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentAssignmentsInput, UserUpdateWithoutStudentAssignmentsInput>, UserUncheckedUpdateWithoutStudentAssignmentsInput>
  }

  export type ClassScheduleUpdateOneWithoutAssignmentNestedInput = {
    create?: XOR<ClassScheduleCreateWithoutAssignmentInput, ClassScheduleUncheckedCreateWithoutAssignmentInput>
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutAssignmentInput
    upsert?: ClassScheduleUpsertWithoutAssignmentInput
    disconnect?: ClassScheduleWhereInput | boolean
    delete?: ClassScheduleWhereInput | boolean
    connect?: ClassScheduleWhereUniqueInput
    update?: XOR<XOR<ClassScheduleUpdateToOneWithWhereWithoutAssignmentInput, ClassScheduleUpdateWithoutAssignmentInput>, ClassScheduleUncheckedUpdateWithoutAssignmentInput>
  }

  export type ClassScheduleUncheckedUpdateOneWithoutAssignmentNestedInput = {
    create?: XOR<ClassScheduleCreateWithoutAssignmentInput, ClassScheduleUncheckedCreateWithoutAssignmentInput>
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutAssignmentInput
    upsert?: ClassScheduleUpsertWithoutAssignmentInput
    disconnect?: ClassScheduleWhereInput | boolean
    delete?: ClassScheduleWhereInput | boolean
    connect?: ClassScheduleWhereUniqueInput
    update?: XOR<XOR<ClassScheduleUpdateToOneWithWhereWithoutAssignmentInput, ClassScheduleUpdateWithoutAssignmentInput>, ClassScheduleUncheckedUpdateWithoutAssignmentInput>
  }

  export type UserCreateNestedOneWithoutTeacherHomeworkInput = {
    create?: XOR<UserCreateWithoutTeacherHomeworkInput, UserUncheckedCreateWithoutTeacherHomeworkInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherHomeworkInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStudentHomeworkInput = {
    create?: XOR<UserCreateWithoutStudentHomeworkInput, UserUncheckedCreateWithoutStudentHomeworkInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentHomeworkInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTeacherHomeworkNestedInput = {
    create?: XOR<UserCreateWithoutTeacherHomeworkInput, UserUncheckedCreateWithoutTeacherHomeworkInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherHomeworkInput
    upsert?: UserUpsertWithoutTeacherHomeworkInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeacherHomeworkInput, UserUpdateWithoutTeacherHomeworkInput>, UserUncheckedUpdateWithoutTeacherHomeworkInput>
  }

  export type UserUpdateOneRequiredWithoutStudentHomeworkNestedInput = {
    create?: XOR<UserCreateWithoutStudentHomeworkInput, UserUncheckedCreateWithoutStudentHomeworkInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentHomeworkInput
    upsert?: UserUpsertWithoutStudentHomeworkInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentHomeworkInput, UserUpdateWithoutStudentHomeworkInput>, UserUncheckedUpdateWithoutStudentHomeworkInput>
  }

  export type ClassScheduleCreatesubjectIdsInput = {
    set: number[]
  }

  export type ClassScheduleCreatedaysInput = {
    set: $Enums.Day[]
  }

  export type ClassScheduleOverrideCreateNestedManyWithoutClassScheduleInput = {
    create?: XOR<ClassScheduleOverrideCreateWithoutClassScheduleInput, ClassScheduleOverrideUncheckedCreateWithoutClassScheduleInput> | ClassScheduleOverrideCreateWithoutClassScheduleInput[] | ClassScheduleOverrideUncheckedCreateWithoutClassScheduleInput[]
    connectOrCreate?: ClassScheduleOverrideCreateOrConnectWithoutClassScheduleInput | ClassScheduleOverrideCreateOrConnectWithoutClassScheduleInput[]
    createMany?: ClassScheduleOverrideCreateManyClassScheduleInputEnvelope
    connect?: ClassScheduleOverrideWhereUniqueInput | ClassScheduleOverrideWhereUniqueInput[]
  }

  export type AssignedTeacherStudentCreateNestedOneWithoutClassScheduleInput = {
    create?: XOR<AssignedTeacherStudentCreateWithoutClassScheduleInput, AssignedTeacherStudentUncheckedCreateWithoutClassScheduleInput>
    connectOrCreate?: AssignedTeacherStudentCreateOrConnectWithoutClassScheduleInput
    connect?: AssignedTeacherStudentWhereUniqueInput
  }

  export type ClassScheduleOverrideUncheckedCreateNestedManyWithoutClassScheduleInput = {
    create?: XOR<ClassScheduleOverrideCreateWithoutClassScheduleInput, ClassScheduleOverrideUncheckedCreateWithoutClassScheduleInput> | ClassScheduleOverrideCreateWithoutClassScheduleInput[] | ClassScheduleOverrideUncheckedCreateWithoutClassScheduleInput[]
    connectOrCreate?: ClassScheduleOverrideCreateOrConnectWithoutClassScheduleInput | ClassScheduleOverrideCreateOrConnectWithoutClassScheduleInput[]
    createMany?: ClassScheduleOverrideCreateManyClassScheduleInputEnvelope
    connect?: ClassScheduleOverrideWhereUniqueInput | ClassScheduleOverrideWhereUniqueInput[]
  }

  export type ClassScheduleUpdatesubjectIdsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type ClassScheduleUpdatedaysInput = {
    set?: $Enums.Day[]
    push?: $Enums.Day | $Enums.Day[]
  }

  export type EnumMediumFieldUpdateOperationsInput = {
    set?: $Enums.Medium
  }

  export type ClassScheduleOverrideUpdateManyWithoutClassScheduleNestedInput = {
    create?: XOR<ClassScheduleOverrideCreateWithoutClassScheduleInput, ClassScheduleOverrideUncheckedCreateWithoutClassScheduleInput> | ClassScheduleOverrideCreateWithoutClassScheduleInput[] | ClassScheduleOverrideUncheckedCreateWithoutClassScheduleInput[]
    connectOrCreate?: ClassScheduleOverrideCreateOrConnectWithoutClassScheduleInput | ClassScheduleOverrideCreateOrConnectWithoutClassScheduleInput[]
    upsert?: ClassScheduleOverrideUpsertWithWhereUniqueWithoutClassScheduleInput | ClassScheduleOverrideUpsertWithWhereUniqueWithoutClassScheduleInput[]
    createMany?: ClassScheduleOverrideCreateManyClassScheduleInputEnvelope
    set?: ClassScheduleOverrideWhereUniqueInput | ClassScheduleOverrideWhereUniqueInput[]
    disconnect?: ClassScheduleOverrideWhereUniqueInput | ClassScheduleOverrideWhereUniqueInput[]
    delete?: ClassScheduleOverrideWhereUniqueInput | ClassScheduleOverrideWhereUniqueInput[]
    connect?: ClassScheduleOverrideWhereUniqueInput | ClassScheduleOverrideWhereUniqueInput[]
    update?: ClassScheduleOverrideUpdateWithWhereUniqueWithoutClassScheduleInput | ClassScheduleOverrideUpdateWithWhereUniqueWithoutClassScheduleInput[]
    updateMany?: ClassScheduleOverrideUpdateManyWithWhereWithoutClassScheduleInput | ClassScheduleOverrideUpdateManyWithWhereWithoutClassScheduleInput[]
    deleteMany?: ClassScheduleOverrideScalarWhereInput | ClassScheduleOverrideScalarWhereInput[]
  }

  export type AssignedTeacherStudentUpdateOneRequiredWithoutClassScheduleNestedInput = {
    create?: XOR<AssignedTeacherStudentCreateWithoutClassScheduleInput, AssignedTeacherStudentUncheckedCreateWithoutClassScheduleInput>
    connectOrCreate?: AssignedTeacherStudentCreateOrConnectWithoutClassScheduleInput
    upsert?: AssignedTeacherStudentUpsertWithoutClassScheduleInput
    connect?: AssignedTeacherStudentWhereUniqueInput
    update?: XOR<XOR<AssignedTeacherStudentUpdateToOneWithWhereWithoutClassScheduleInput, AssignedTeacherStudentUpdateWithoutClassScheduleInput>, AssignedTeacherStudentUncheckedUpdateWithoutClassScheduleInput>
  }

  export type ClassScheduleOverrideUncheckedUpdateManyWithoutClassScheduleNestedInput = {
    create?: XOR<ClassScheduleOverrideCreateWithoutClassScheduleInput, ClassScheduleOverrideUncheckedCreateWithoutClassScheduleInput> | ClassScheduleOverrideCreateWithoutClassScheduleInput[] | ClassScheduleOverrideUncheckedCreateWithoutClassScheduleInput[]
    connectOrCreate?: ClassScheduleOverrideCreateOrConnectWithoutClassScheduleInput | ClassScheduleOverrideCreateOrConnectWithoutClassScheduleInput[]
    upsert?: ClassScheduleOverrideUpsertWithWhereUniqueWithoutClassScheduleInput | ClassScheduleOverrideUpsertWithWhereUniqueWithoutClassScheduleInput[]
    createMany?: ClassScheduleOverrideCreateManyClassScheduleInputEnvelope
    set?: ClassScheduleOverrideWhereUniqueInput | ClassScheduleOverrideWhereUniqueInput[]
    disconnect?: ClassScheduleOverrideWhereUniqueInput | ClassScheduleOverrideWhereUniqueInput[]
    delete?: ClassScheduleOverrideWhereUniqueInput | ClassScheduleOverrideWhereUniqueInput[]
    connect?: ClassScheduleOverrideWhereUniqueInput | ClassScheduleOverrideWhereUniqueInput[]
    update?: ClassScheduleOverrideUpdateWithWhereUniqueWithoutClassScheduleInput | ClassScheduleOverrideUpdateWithWhereUniqueWithoutClassScheduleInput[]
    updateMany?: ClassScheduleOverrideUpdateManyWithWhereWithoutClassScheduleInput | ClassScheduleOverrideUpdateManyWithWhereWithoutClassScheduleInput[]
    deleteMany?: ClassScheduleOverrideScalarWhereInput | ClassScheduleOverrideScalarWhereInput[]
  }

  export type ClassScheduleCreateNestedOneWithoutOverridesInput = {
    create?: XOR<ClassScheduleCreateWithoutOverridesInput, ClassScheduleUncheckedCreateWithoutOverridesInput>
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutOverridesInput
    connect?: ClassScheduleWhereUniqueInput
  }

  export type ClassScheduleUpdateOneRequiredWithoutOverridesNestedInput = {
    create?: XOR<ClassScheduleCreateWithoutOverridesInput, ClassScheduleUncheckedCreateWithoutOverridesInput>
    connectOrCreate?: ClassScheduleCreateOrConnectWithoutOverridesInput
    upsert?: ClassScheduleUpsertWithoutOverridesInput
    connect?: ClassScheduleWhereUniqueInput
    update?: XOR<XOR<ClassScheduleUpdateToOneWithWhereWithoutOverridesInput, ClassScheduleUpdateWithoutOverridesInput>, ClassScheduleUncheckedUpdateWithoutOverridesInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserCreateNestedOneWithoutModeratorPermissionInput = {
    create?: XOR<UserCreateWithoutModeratorPermissionInput, UserUncheckedCreateWithoutModeratorPermissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutModeratorPermissionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutModeratorPermissionNestedInput = {
    create?: XOR<UserCreateWithoutModeratorPermissionInput, UserUncheckedCreateWithoutModeratorPermissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutModeratorPermissionInput
    upsert?: UserUpsertWithoutModeratorPermissionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutModeratorPermissionInput, UserUpdateWithoutModeratorPermissionInput>, UserUncheckedUpdateWithoutModeratorPermissionInput>
  }

  export type UserCreateNestedOneWithoutStudentProfileInput = {
    create?: XOR<UserCreateWithoutStudentProfileInput, UserUncheckedCreateWithoutStudentProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStudentProfileNestedInput = {
    create?: XOR<UserCreateWithoutStudentProfileInput, UserUncheckedCreateWithoutStudentProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentProfileInput
    upsert?: UserUpsertWithoutStudentProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentProfileInput, UserUpdateWithoutStudentProfileInput>, UserUncheckedUpdateWithoutStudentProfileInput>
  }

  export type TeacherProfileCreatemediumInput = {
    set: $Enums.Medium[]
  }

  export type UserCreateNestedOneWithoutTeacherProfileInput = {
    create?: XOR<UserCreateWithoutTeacherProfileInput, UserUncheckedCreateWithoutTeacherProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherProfileInput
    connect?: UserWhereUniqueInput
  }

  export type TeacherProfileUpdatemediumInput = {
    set?: $Enums.Medium[]
    push?: $Enums.Medium | $Enums.Medium[]
  }

  export type UserUpdateOneRequiredWithoutTeacherProfileNestedInput = {
    create?: XOR<UserCreateWithoutTeacherProfileInput, UserUncheckedCreateWithoutTeacherProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherProfileInput
    upsert?: UserUpsertWithoutTeacherProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeacherProfileInput, UserUpdateWithoutTeacherProfileInput>, UserUncheckedUpdateWithoutTeacherProfileInput>
  }

  export type TuitionPostCreatedaysInput = {
    set: $Enums.Day[]
  }

  export type TuitionPostCreatesubjectsInput = {
    set: number[]
  }

  export type UserCreateNestedOneWithoutTuitionPostsInput = {
    create?: XOR<UserCreateWithoutTuitionPostsInput, UserUncheckedCreateWithoutTuitionPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTuitionPostsInput
    connect?: UserWhereUniqueInput
  }

  export type AssignedTeacherStudentCreateNestedOneWithoutTuitionPostInput = {
    create?: XOR<AssignedTeacherStudentCreateWithoutTuitionPostInput, AssignedTeacherStudentUncheckedCreateWithoutTuitionPostInput>
    connectOrCreate?: AssignedTeacherStudentCreateOrConnectWithoutTuitionPostInput
    connect?: AssignedTeacherStudentWhereUniqueInput
  }

  export type AssignedTeacherStudentUncheckedCreateNestedOneWithoutTuitionPostInput = {
    create?: XOR<AssignedTeacherStudentCreateWithoutTuitionPostInput, AssignedTeacherStudentUncheckedCreateWithoutTuitionPostInput>
    connectOrCreate?: AssignedTeacherStudentCreateOrConnectWithoutTuitionPostInput
    connect?: AssignedTeacherStudentWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type TuitionPostUpdatedaysInput = {
    set?: $Enums.Day[]
    push?: $Enums.Day | $Enums.Day[]
  }

  export type TuitionPostUpdatesubjectsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type UserUpdateOneRequiredWithoutTuitionPostsNestedInput = {
    create?: XOR<UserCreateWithoutTuitionPostsInput, UserUncheckedCreateWithoutTuitionPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTuitionPostsInput
    upsert?: UserUpsertWithoutTuitionPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTuitionPostsInput, UserUpdateWithoutTuitionPostsInput>, UserUncheckedUpdateWithoutTuitionPostsInput>
  }

  export type AssignedTeacherStudentUpdateOneWithoutTuitionPostNestedInput = {
    create?: XOR<AssignedTeacherStudentCreateWithoutTuitionPostInput, AssignedTeacherStudentUncheckedCreateWithoutTuitionPostInput>
    connectOrCreate?: AssignedTeacherStudentCreateOrConnectWithoutTuitionPostInput
    upsert?: AssignedTeacherStudentUpsertWithoutTuitionPostInput
    disconnect?: AssignedTeacherStudentWhereInput | boolean
    delete?: AssignedTeacherStudentWhereInput | boolean
    connect?: AssignedTeacherStudentWhereUniqueInput
    update?: XOR<XOR<AssignedTeacherStudentUpdateToOneWithWhereWithoutTuitionPostInput, AssignedTeacherStudentUpdateWithoutTuitionPostInput>, AssignedTeacherStudentUncheckedUpdateWithoutTuitionPostInput>
  }

  export type AssignedTeacherStudentUncheckedUpdateOneWithoutTuitionPostNestedInput = {
    create?: XOR<AssignedTeacherStudentCreateWithoutTuitionPostInput, AssignedTeacherStudentUncheckedCreateWithoutTuitionPostInput>
    connectOrCreate?: AssignedTeacherStudentCreateOrConnectWithoutTuitionPostInput
    upsert?: AssignedTeacherStudentUpsertWithoutTuitionPostInput
    disconnect?: AssignedTeacherStudentWhereInput | boolean
    delete?: AssignedTeacherStudentWhereInput | boolean
    connect?: AssignedTeacherStudentWhereUniqueInput
    update?: XOR<XOR<AssignedTeacherStudentUpdateToOneWithWhereWithoutTuitionPostInput, AssignedTeacherStudentUpdateWithoutTuitionPostInput>, AssignedTeacherStudentUncheckedUpdateWithoutTuitionPostInput>
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type TeacherProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<TeacherProfileCreateWithoutUserInput, TeacherProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherProfileCreateOrConnectWithoutUserInput
    connect?: TeacherProfileWhereUniqueInput
  }

  export type ModeratorPermissionCreateNestedOneWithoutUserInput = {
    create?: XOR<ModeratorPermissionCreateWithoutUserInput, ModeratorPermissionUncheckedCreateWithoutUserInput>
    connectOrCreate?: ModeratorPermissionCreateOrConnectWithoutUserInput
    connect?: ModeratorPermissionWhereUniqueInput
  }

  export type StudentProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type AssignedTeacherStudentCreateNestedManyWithoutTeacherInput = {
    create?: XOR<AssignedTeacherStudentCreateWithoutTeacherInput, AssignedTeacherStudentUncheckedCreateWithoutTeacherInput> | AssignedTeacherStudentCreateWithoutTeacherInput[] | AssignedTeacherStudentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AssignedTeacherStudentCreateOrConnectWithoutTeacherInput | AssignedTeacherStudentCreateOrConnectWithoutTeacherInput[]
    createMany?: AssignedTeacherStudentCreateManyTeacherInputEnvelope
    connect?: AssignedTeacherStudentWhereUniqueInput | AssignedTeacherStudentWhereUniqueInput[]
  }

  export type AssignedTeacherStudentCreateNestedManyWithoutStudentInput = {
    create?: XOR<AssignedTeacherStudentCreateWithoutStudentInput, AssignedTeacherStudentUncheckedCreateWithoutStudentInput> | AssignedTeacherStudentCreateWithoutStudentInput[] | AssignedTeacherStudentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AssignedTeacherStudentCreateOrConnectWithoutStudentInput | AssignedTeacherStudentCreateOrConnectWithoutStudentInput[]
    createMany?: AssignedTeacherStudentCreateManyStudentInputEnvelope
    connect?: AssignedTeacherStudentWhereUniqueInput | AssignedTeacherStudentWhereUniqueInput[]
  }

  export type AssignmentCreateNestedManyWithoutTeacherInput = {
    create?: XOR<AssignmentCreateWithoutTeacherInput, AssignmentUncheckedCreateWithoutTeacherInput> | AssignmentCreateWithoutTeacherInput[] | AssignmentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutTeacherInput | AssignmentCreateOrConnectWithoutTeacherInput[]
    createMany?: AssignmentCreateManyTeacherInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type AssignmentCreateNestedManyWithoutStudentInput = {
    create?: XOR<AssignmentCreateWithoutStudentInput, AssignmentUncheckedCreateWithoutStudentInput> | AssignmentCreateWithoutStudentInput[] | AssignmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutStudentInput | AssignmentCreateOrConnectWithoutStudentInput[]
    createMany?: AssignmentCreateManyStudentInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type TuitionPostCreateNestedManyWithoutPostedByUserInput = {
    create?: XOR<TuitionPostCreateWithoutPostedByUserInput, TuitionPostUncheckedCreateWithoutPostedByUserInput> | TuitionPostCreateWithoutPostedByUserInput[] | TuitionPostUncheckedCreateWithoutPostedByUserInput[]
    connectOrCreate?: TuitionPostCreateOrConnectWithoutPostedByUserInput | TuitionPostCreateOrConnectWithoutPostedByUserInput[]
    createMany?: TuitionPostCreateManyPostedByUserInputEnvelope
    connect?: TuitionPostWhereUniqueInput | TuitionPostWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type TeacherProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TeacherProfileCreateWithoutUserInput, TeacherProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherProfileCreateOrConnectWithoutUserInput
    connect?: TeacherProfileWhereUniqueInput
  }

  export type ModeratorPermissionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ModeratorPermissionCreateWithoutUserInput, ModeratorPermissionUncheckedCreateWithoutUserInput>
    connectOrCreate?: ModeratorPermissionCreateOrConnectWithoutUserInput
    connect?: ModeratorPermissionWhereUniqueInput
  }

  export type StudentProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type AssignedTeacherStudentUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<AssignedTeacherStudentCreateWithoutTeacherInput, AssignedTeacherStudentUncheckedCreateWithoutTeacherInput> | AssignedTeacherStudentCreateWithoutTeacherInput[] | AssignedTeacherStudentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AssignedTeacherStudentCreateOrConnectWithoutTeacherInput | AssignedTeacherStudentCreateOrConnectWithoutTeacherInput[]
    createMany?: AssignedTeacherStudentCreateManyTeacherInputEnvelope
    connect?: AssignedTeacherStudentWhereUniqueInput | AssignedTeacherStudentWhereUniqueInput[]
  }

  export type AssignedTeacherStudentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AssignedTeacherStudentCreateWithoutStudentInput, AssignedTeacherStudentUncheckedCreateWithoutStudentInput> | AssignedTeacherStudentCreateWithoutStudentInput[] | AssignedTeacherStudentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AssignedTeacherStudentCreateOrConnectWithoutStudentInput | AssignedTeacherStudentCreateOrConnectWithoutStudentInput[]
    createMany?: AssignedTeacherStudentCreateManyStudentInputEnvelope
    connect?: AssignedTeacherStudentWhereUniqueInput | AssignedTeacherStudentWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<AssignmentCreateWithoutTeacherInput, AssignmentUncheckedCreateWithoutTeacherInput> | AssignmentCreateWithoutTeacherInput[] | AssignmentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutTeacherInput | AssignmentCreateOrConnectWithoutTeacherInput[]
    createMany?: AssignmentCreateManyTeacherInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AssignmentCreateWithoutStudentInput, AssignmentUncheckedCreateWithoutStudentInput> | AssignmentCreateWithoutStudentInput[] | AssignmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutStudentInput | AssignmentCreateOrConnectWithoutStudentInput[]
    createMany?: AssignmentCreateManyStudentInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type TuitionPostUncheckedCreateNestedManyWithoutPostedByUserInput = {
    create?: XOR<TuitionPostCreateWithoutPostedByUserInput, TuitionPostUncheckedCreateWithoutPostedByUserInput> | TuitionPostCreateWithoutPostedByUserInput[] | TuitionPostUncheckedCreateWithoutPostedByUserInput[]
    connectOrCreate?: TuitionPostCreateOrConnectWithoutPostedByUserInput | TuitionPostCreateOrConnectWithoutPostedByUserInput[]
    createMany?: TuitionPostCreateManyPostedByUserInputEnvelope
    connect?: TuitionPostWhereUniqueInput | TuitionPostWhereUniqueInput[]
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type TeacherProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeacherProfileCreateWithoutUserInput, TeacherProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherProfileCreateOrConnectWithoutUserInput
    upsert?: TeacherProfileUpsertWithoutUserInput
    disconnect?: TeacherProfileWhereInput | boolean
    delete?: TeacherProfileWhereInput | boolean
    connect?: TeacherProfileWhereUniqueInput
    update?: XOR<XOR<TeacherProfileUpdateToOneWithWhereWithoutUserInput, TeacherProfileUpdateWithoutUserInput>, TeacherProfileUncheckedUpdateWithoutUserInput>
  }

  export type ModeratorPermissionUpdateOneWithoutUserNestedInput = {
    create?: XOR<ModeratorPermissionCreateWithoutUserInput, ModeratorPermissionUncheckedCreateWithoutUserInput>
    connectOrCreate?: ModeratorPermissionCreateOrConnectWithoutUserInput
    upsert?: ModeratorPermissionUpsertWithoutUserInput
    disconnect?: ModeratorPermissionWhereInput | boolean
    delete?: ModeratorPermissionWhereInput | boolean
    connect?: ModeratorPermissionWhereUniqueInput
    update?: XOR<XOR<ModeratorPermissionUpdateToOneWithWhereWithoutUserInput, ModeratorPermissionUpdateWithoutUserInput>, ModeratorPermissionUncheckedUpdateWithoutUserInput>
  }

  export type StudentProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    upsert?: StudentProfileUpsertWithoutUserInput
    disconnect?: StudentProfileWhereInput | boolean
    delete?: StudentProfileWhereInput | boolean
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutUserInput, StudentProfileUpdateWithoutUserInput>, StudentProfileUncheckedUpdateWithoutUserInput>
  }

  export type AssignedTeacherStudentUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<AssignedTeacherStudentCreateWithoutTeacherInput, AssignedTeacherStudentUncheckedCreateWithoutTeacherInput> | AssignedTeacherStudentCreateWithoutTeacherInput[] | AssignedTeacherStudentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AssignedTeacherStudentCreateOrConnectWithoutTeacherInput | AssignedTeacherStudentCreateOrConnectWithoutTeacherInput[]
    upsert?: AssignedTeacherStudentUpsertWithWhereUniqueWithoutTeacherInput | AssignedTeacherStudentUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: AssignedTeacherStudentCreateManyTeacherInputEnvelope
    set?: AssignedTeacherStudentWhereUniqueInput | AssignedTeacherStudentWhereUniqueInput[]
    disconnect?: AssignedTeacherStudentWhereUniqueInput | AssignedTeacherStudentWhereUniqueInput[]
    delete?: AssignedTeacherStudentWhereUniqueInput | AssignedTeacherStudentWhereUniqueInput[]
    connect?: AssignedTeacherStudentWhereUniqueInput | AssignedTeacherStudentWhereUniqueInput[]
    update?: AssignedTeacherStudentUpdateWithWhereUniqueWithoutTeacherInput | AssignedTeacherStudentUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: AssignedTeacherStudentUpdateManyWithWhereWithoutTeacherInput | AssignedTeacherStudentUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: AssignedTeacherStudentScalarWhereInput | AssignedTeacherStudentScalarWhereInput[]
  }

  export type AssignedTeacherStudentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AssignedTeacherStudentCreateWithoutStudentInput, AssignedTeacherStudentUncheckedCreateWithoutStudentInput> | AssignedTeacherStudentCreateWithoutStudentInput[] | AssignedTeacherStudentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AssignedTeacherStudentCreateOrConnectWithoutStudentInput | AssignedTeacherStudentCreateOrConnectWithoutStudentInput[]
    upsert?: AssignedTeacherStudentUpsertWithWhereUniqueWithoutStudentInput | AssignedTeacherStudentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AssignedTeacherStudentCreateManyStudentInputEnvelope
    set?: AssignedTeacherStudentWhereUniqueInput | AssignedTeacherStudentWhereUniqueInput[]
    disconnect?: AssignedTeacherStudentWhereUniqueInput | AssignedTeacherStudentWhereUniqueInput[]
    delete?: AssignedTeacherStudentWhereUniqueInput | AssignedTeacherStudentWhereUniqueInput[]
    connect?: AssignedTeacherStudentWhereUniqueInput | AssignedTeacherStudentWhereUniqueInput[]
    update?: AssignedTeacherStudentUpdateWithWhereUniqueWithoutStudentInput | AssignedTeacherStudentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AssignedTeacherStudentUpdateManyWithWhereWithoutStudentInput | AssignedTeacherStudentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AssignedTeacherStudentScalarWhereInput | AssignedTeacherStudentScalarWhereInput[]
  }

  export type AssignmentUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<AssignmentCreateWithoutTeacherInput, AssignmentUncheckedCreateWithoutTeacherInput> | AssignmentCreateWithoutTeacherInput[] | AssignmentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutTeacherInput | AssignmentCreateOrConnectWithoutTeacherInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutTeacherInput | AssignmentUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: AssignmentCreateManyTeacherInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutTeacherInput | AssignmentUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutTeacherInput | AssignmentUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type AssignmentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AssignmentCreateWithoutStudentInput, AssignmentUncheckedCreateWithoutStudentInput> | AssignmentCreateWithoutStudentInput[] | AssignmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutStudentInput | AssignmentCreateOrConnectWithoutStudentInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutStudentInput | AssignmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AssignmentCreateManyStudentInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutStudentInput | AssignmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutStudentInput | AssignmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type TuitionPostUpdateManyWithoutPostedByUserNestedInput = {
    create?: XOR<TuitionPostCreateWithoutPostedByUserInput, TuitionPostUncheckedCreateWithoutPostedByUserInput> | TuitionPostCreateWithoutPostedByUserInput[] | TuitionPostUncheckedCreateWithoutPostedByUserInput[]
    connectOrCreate?: TuitionPostCreateOrConnectWithoutPostedByUserInput | TuitionPostCreateOrConnectWithoutPostedByUserInput[]
    upsert?: TuitionPostUpsertWithWhereUniqueWithoutPostedByUserInput | TuitionPostUpsertWithWhereUniqueWithoutPostedByUserInput[]
    createMany?: TuitionPostCreateManyPostedByUserInputEnvelope
    set?: TuitionPostWhereUniqueInput | TuitionPostWhereUniqueInput[]
    disconnect?: TuitionPostWhereUniqueInput | TuitionPostWhereUniqueInput[]
    delete?: TuitionPostWhereUniqueInput | TuitionPostWhereUniqueInput[]
    connect?: TuitionPostWhereUniqueInput | TuitionPostWhereUniqueInput[]
    update?: TuitionPostUpdateWithWhereUniqueWithoutPostedByUserInput | TuitionPostUpdateWithWhereUniqueWithoutPostedByUserInput[]
    updateMany?: TuitionPostUpdateManyWithWhereWithoutPostedByUserInput | TuitionPostUpdateManyWithWhereWithoutPostedByUserInput[]
    deleteMany?: TuitionPostScalarWhereInput | TuitionPostScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type TeacherProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeacherProfileCreateWithoutUserInput, TeacherProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherProfileCreateOrConnectWithoutUserInput
    upsert?: TeacherProfileUpsertWithoutUserInput
    disconnect?: TeacherProfileWhereInput | boolean
    delete?: TeacherProfileWhereInput | boolean
    connect?: TeacherProfileWhereUniqueInput
    update?: XOR<XOR<TeacherProfileUpdateToOneWithWhereWithoutUserInput, TeacherProfileUpdateWithoutUserInput>, TeacherProfileUncheckedUpdateWithoutUserInput>
  }

  export type ModeratorPermissionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ModeratorPermissionCreateWithoutUserInput, ModeratorPermissionUncheckedCreateWithoutUserInput>
    connectOrCreate?: ModeratorPermissionCreateOrConnectWithoutUserInput
    upsert?: ModeratorPermissionUpsertWithoutUserInput
    disconnect?: ModeratorPermissionWhereInput | boolean
    delete?: ModeratorPermissionWhereInput | boolean
    connect?: ModeratorPermissionWhereUniqueInput
    update?: XOR<XOR<ModeratorPermissionUpdateToOneWithWhereWithoutUserInput, ModeratorPermissionUpdateWithoutUserInput>, ModeratorPermissionUncheckedUpdateWithoutUserInput>
  }

  export type StudentProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    upsert?: StudentProfileUpsertWithoutUserInput
    disconnect?: StudentProfileWhereInput | boolean
    delete?: StudentProfileWhereInput | boolean
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutUserInput, StudentProfileUpdateWithoutUserInput>, StudentProfileUncheckedUpdateWithoutUserInput>
  }

  export type AssignedTeacherStudentUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<AssignedTeacherStudentCreateWithoutTeacherInput, AssignedTeacherStudentUncheckedCreateWithoutTeacherInput> | AssignedTeacherStudentCreateWithoutTeacherInput[] | AssignedTeacherStudentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AssignedTeacherStudentCreateOrConnectWithoutTeacherInput | AssignedTeacherStudentCreateOrConnectWithoutTeacherInput[]
    upsert?: AssignedTeacherStudentUpsertWithWhereUniqueWithoutTeacherInput | AssignedTeacherStudentUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: AssignedTeacherStudentCreateManyTeacherInputEnvelope
    set?: AssignedTeacherStudentWhereUniqueInput | AssignedTeacherStudentWhereUniqueInput[]
    disconnect?: AssignedTeacherStudentWhereUniqueInput | AssignedTeacherStudentWhereUniqueInput[]
    delete?: AssignedTeacherStudentWhereUniqueInput | AssignedTeacherStudentWhereUniqueInput[]
    connect?: AssignedTeacherStudentWhereUniqueInput | AssignedTeacherStudentWhereUniqueInput[]
    update?: AssignedTeacherStudentUpdateWithWhereUniqueWithoutTeacherInput | AssignedTeacherStudentUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: AssignedTeacherStudentUpdateManyWithWhereWithoutTeacherInput | AssignedTeacherStudentUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: AssignedTeacherStudentScalarWhereInput | AssignedTeacherStudentScalarWhereInput[]
  }

  export type AssignedTeacherStudentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AssignedTeacherStudentCreateWithoutStudentInput, AssignedTeacherStudentUncheckedCreateWithoutStudentInput> | AssignedTeacherStudentCreateWithoutStudentInput[] | AssignedTeacherStudentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AssignedTeacherStudentCreateOrConnectWithoutStudentInput | AssignedTeacherStudentCreateOrConnectWithoutStudentInput[]
    upsert?: AssignedTeacherStudentUpsertWithWhereUniqueWithoutStudentInput | AssignedTeacherStudentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AssignedTeacherStudentCreateManyStudentInputEnvelope
    set?: AssignedTeacherStudentWhereUniqueInput | AssignedTeacherStudentWhereUniqueInput[]
    disconnect?: AssignedTeacherStudentWhereUniqueInput | AssignedTeacherStudentWhereUniqueInput[]
    delete?: AssignedTeacherStudentWhereUniqueInput | AssignedTeacherStudentWhereUniqueInput[]
    connect?: AssignedTeacherStudentWhereUniqueInput | AssignedTeacherStudentWhereUniqueInput[]
    update?: AssignedTeacherStudentUpdateWithWhereUniqueWithoutStudentInput | AssignedTeacherStudentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AssignedTeacherStudentUpdateManyWithWhereWithoutStudentInput | AssignedTeacherStudentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AssignedTeacherStudentScalarWhereInput | AssignedTeacherStudentScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<AssignmentCreateWithoutTeacherInput, AssignmentUncheckedCreateWithoutTeacherInput> | AssignmentCreateWithoutTeacherInput[] | AssignmentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutTeacherInput | AssignmentCreateOrConnectWithoutTeacherInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutTeacherInput | AssignmentUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: AssignmentCreateManyTeacherInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutTeacherInput | AssignmentUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutTeacherInput | AssignmentUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AssignmentCreateWithoutStudentInput, AssignmentUncheckedCreateWithoutStudentInput> | AssignmentCreateWithoutStudentInput[] | AssignmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutStudentInput | AssignmentCreateOrConnectWithoutStudentInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutStudentInput | AssignmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AssignmentCreateManyStudentInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutStudentInput | AssignmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutStudentInput | AssignmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type TuitionPostUncheckedUpdateManyWithoutPostedByUserNestedInput = {
    create?: XOR<TuitionPostCreateWithoutPostedByUserInput, TuitionPostUncheckedCreateWithoutPostedByUserInput> | TuitionPostCreateWithoutPostedByUserInput[] | TuitionPostUncheckedCreateWithoutPostedByUserInput[]
    connectOrCreate?: TuitionPostCreateOrConnectWithoutPostedByUserInput | TuitionPostCreateOrConnectWithoutPostedByUserInput[]
    upsert?: TuitionPostUpsertWithWhereUniqueWithoutPostedByUserInput | TuitionPostUpsertWithWhereUniqueWithoutPostedByUserInput[]
    createMany?: TuitionPostCreateManyPostedByUserInputEnvelope
    set?: TuitionPostWhereUniqueInput | TuitionPostWhereUniqueInput[]
    disconnect?: TuitionPostWhereUniqueInput | TuitionPostWhereUniqueInput[]
    delete?: TuitionPostWhereUniqueInput | TuitionPostWhereUniqueInput[]
    connect?: TuitionPostWhereUniqueInput | TuitionPostWhereUniqueInput[]
    update?: TuitionPostUpdateWithWhereUniqueWithoutPostedByUserInput | TuitionPostUpdateWithWhereUniqueWithoutPostedByUserInput[]
    updateMany?: TuitionPostUpdateManyWithWhereWithoutPostedByUserInput | TuitionPostUpdateManyWithWhereWithoutPostedByUserInput[]
    deleteMany?: TuitionPostScalarWhereInput | TuitionPostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumMediumFilter<$PrismaModel = never> = {
    equals?: $Enums.Medium | EnumMediumFieldRefInput<$PrismaModel>
    in?: $Enums.Medium[] | ListEnumMediumFieldRefInput<$PrismaModel>
    notIn?: $Enums.Medium[] | ListEnumMediumFieldRefInput<$PrismaModel>
    not?: NestedEnumMediumFilter<$PrismaModel> | $Enums.Medium
  }

  export type NestedEnumMediumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Medium | EnumMediumFieldRefInput<$PrismaModel>
    in?: $Enums.Medium[] | ListEnumMediumFieldRefInput<$PrismaModel>
    notIn?: $Enums.Medium[] | ListEnumMediumFieldRefInput<$PrismaModel>
    not?: NestedEnumMediumWithAggregatesFilter<$PrismaModel> | $Enums.Medium
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediumFilter<$PrismaModel>
    _max?: NestedEnumMediumFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type TuitionPostCreateWithoutAssignsInput = {
    title: string
    description?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    medium: $Enums.Medium
    area: number
    days?: TuitionPostCreatedaysInput | $Enums.Day[]
    startTime: string
    endTime: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: TuitionPostCreatesubjectsInput | number[]
    postedByUser: UserCreateNestedOneWithoutTuitionPostsInput
  }

  export type TuitionPostUncheckedCreateWithoutAssignsInput = {
    id?: number
    postedBy: number
    title: string
    description?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    medium: $Enums.Medium
    area: number
    days?: TuitionPostCreatedaysInput | $Enums.Day[]
    startTime: string
    endTime: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: TuitionPostCreatesubjectsInput | number[]
  }

  export type TuitionPostCreateOrConnectWithoutAssignsInput = {
    where: TuitionPostWhereUniqueInput
    create: XOR<TuitionPostCreateWithoutAssignsInput, TuitionPostUncheckedCreateWithoutAssignsInput>
  }

  export type UserCreateWithoutTeacherAssignmentsInput = {
    userCode?: string | null
    name: string
    email: string
    password: string
    address?: string | null
    contact?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    teacherProfile?: TeacherProfileCreateNestedOneWithoutUserInput
    moderatorPermission?: ModeratorPermissionCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
    studentAssignments?: AssignedTeacherStudentCreateNestedManyWithoutStudentInput
    teacherHomework?: AssignmentCreateNestedManyWithoutTeacherInput
    studentHomework?: AssignmentCreateNestedManyWithoutStudentInput
    tuitionPosts?: TuitionPostCreateNestedManyWithoutPostedByUserInput
  }

  export type UserUncheckedCreateWithoutTeacherAssignmentsInput = {
    id?: number
    userCode?: string | null
    name: string
    email: string
    password: string
    address?: string | null
    contact?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    teacherProfile?: TeacherProfileUncheckedCreateNestedOneWithoutUserInput
    moderatorPermission?: ModeratorPermissionUncheckedCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
    studentAssignments?: AssignedTeacherStudentUncheckedCreateNestedManyWithoutStudentInput
    teacherHomework?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    studentHomework?: AssignmentUncheckedCreateNestedManyWithoutStudentInput
    tuitionPosts?: TuitionPostUncheckedCreateNestedManyWithoutPostedByUserInput
  }

  export type UserCreateOrConnectWithoutTeacherAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeacherAssignmentsInput, UserUncheckedCreateWithoutTeacherAssignmentsInput>
  }

  export type UserCreateWithoutStudentAssignmentsInput = {
    userCode?: string | null
    name: string
    email: string
    password: string
    address?: string | null
    contact?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    teacherProfile?: TeacherProfileCreateNestedOneWithoutUserInput
    moderatorPermission?: ModeratorPermissionCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
    teacherAssignments?: AssignedTeacherStudentCreateNestedManyWithoutTeacherInput
    teacherHomework?: AssignmentCreateNestedManyWithoutTeacherInput
    studentHomework?: AssignmentCreateNestedManyWithoutStudentInput
    tuitionPosts?: TuitionPostCreateNestedManyWithoutPostedByUserInput
  }

  export type UserUncheckedCreateWithoutStudentAssignmentsInput = {
    id?: number
    userCode?: string | null
    name: string
    email: string
    password: string
    address?: string | null
    contact?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    teacherProfile?: TeacherProfileUncheckedCreateNestedOneWithoutUserInput
    moderatorPermission?: ModeratorPermissionUncheckedCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
    teacherAssignments?: AssignedTeacherStudentUncheckedCreateNestedManyWithoutTeacherInput
    teacherHomework?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    studentHomework?: AssignmentUncheckedCreateNestedManyWithoutStudentInput
    tuitionPosts?: TuitionPostUncheckedCreateNestedManyWithoutPostedByUserInput
  }

  export type UserCreateOrConnectWithoutStudentAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentAssignmentsInput, UserUncheckedCreateWithoutStudentAssignmentsInput>
  }

  export type ClassScheduleCreateWithoutAssignmentInput = {
    teacherId: number
    studentId: number
    subjectIds?: ClassScheduleCreatesubjectIdsInput | number[]
    days?: ClassScheduleCreatedaysInput | $Enums.Day[]
    startTime: string
    endTime: string
    medium: $Enums.Medium
    createdAt?: Date | string
    updatedAt?: Date | string
    overrides?: ClassScheduleOverrideCreateNestedManyWithoutClassScheduleInput
  }

  export type ClassScheduleUncheckedCreateWithoutAssignmentInput = {
    id?: number
    teacherId: number
    studentId: number
    subjectIds?: ClassScheduleCreatesubjectIdsInput | number[]
    days?: ClassScheduleCreatedaysInput | $Enums.Day[]
    startTime: string
    endTime: string
    medium: $Enums.Medium
    createdAt?: Date | string
    updatedAt?: Date | string
    overrides?: ClassScheduleOverrideUncheckedCreateNestedManyWithoutClassScheduleInput
  }

  export type ClassScheduleCreateOrConnectWithoutAssignmentInput = {
    where: ClassScheduleWhereUniqueInput
    create: XOR<ClassScheduleCreateWithoutAssignmentInput, ClassScheduleUncheckedCreateWithoutAssignmentInput>
  }

  export type TuitionPostUpsertWithoutAssignsInput = {
    update: XOR<TuitionPostUpdateWithoutAssignsInput, TuitionPostUncheckedUpdateWithoutAssignsInput>
    create: XOR<TuitionPostCreateWithoutAssignsInput, TuitionPostUncheckedCreateWithoutAssignsInput>
    where?: TuitionPostWhereInput
  }

  export type TuitionPostUpdateToOneWithWhereWithoutAssignsInput = {
    where?: TuitionPostWhereInput
    data: XOR<TuitionPostUpdateWithoutAssignsInput, TuitionPostUncheckedUpdateWithoutAssignsInput>
  }

  export type TuitionPostUpdateWithoutAssignsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    medium?: EnumMediumFieldUpdateOperationsInput | $Enums.Medium
    area?: IntFieldUpdateOperationsInput | number
    days?: TuitionPostUpdatedaysInput | $Enums.Day[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: TuitionPostUpdatesubjectsInput | number[]
    postedByUser?: UserUpdateOneRequiredWithoutTuitionPostsNestedInput
  }

  export type TuitionPostUncheckedUpdateWithoutAssignsInput = {
    id?: IntFieldUpdateOperationsInput | number
    postedBy?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    medium?: EnumMediumFieldUpdateOperationsInput | $Enums.Medium
    area?: IntFieldUpdateOperationsInput | number
    days?: TuitionPostUpdatedaysInput | $Enums.Day[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: TuitionPostUpdatesubjectsInput | number[]
  }

  export type UserUpsertWithoutTeacherAssignmentsInput = {
    update: XOR<UserUpdateWithoutTeacherAssignmentsInput, UserUncheckedUpdateWithoutTeacherAssignmentsInput>
    create: XOR<UserCreateWithoutTeacherAssignmentsInput, UserUncheckedCreateWithoutTeacherAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeacherAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeacherAssignmentsInput, UserUncheckedUpdateWithoutTeacherAssignmentsInput>
  }

  export type UserUpdateWithoutTeacherAssignmentsInput = {
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    teacherProfile?: TeacherProfileUpdateOneWithoutUserNestedInput
    moderatorPermission?: ModeratorPermissionUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
    studentAssignments?: AssignedTeacherStudentUpdateManyWithoutStudentNestedInput
    teacherHomework?: AssignmentUpdateManyWithoutTeacherNestedInput
    studentHomework?: AssignmentUpdateManyWithoutStudentNestedInput
    tuitionPosts?: TuitionPostUpdateManyWithoutPostedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeacherAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    teacherProfile?: TeacherProfileUncheckedUpdateOneWithoutUserNestedInput
    moderatorPermission?: ModeratorPermissionUncheckedUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
    studentAssignments?: AssignedTeacherStudentUncheckedUpdateManyWithoutStudentNestedInput
    teacherHomework?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    studentHomework?: AssignmentUncheckedUpdateManyWithoutStudentNestedInput
    tuitionPosts?: TuitionPostUncheckedUpdateManyWithoutPostedByUserNestedInput
  }

  export type UserUpsertWithoutStudentAssignmentsInput = {
    update: XOR<UserUpdateWithoutStudentAssignmentsInput, UserUncheckedUpdateWithoutStudentAssignmentsInput>
    create: XOR<UserCreateWithoutStudentAssignmentsInput, UserUncheckedCreateWithoutStudentAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentAssignmentsInput, UserUncheckedUpdateWithoutStudentAssignmentsInput>
  }

  export type UserUpdateWithoutStudentAssignmentsInput = {
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    teacherProfile?: TeacherProfileUpdateOneWithoutUserNestedInput
    moderatorPermission?: ModeratorPermissionUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
    teacherAssignments?: AssignedTeacherStudentUpdateManyWithoutTeacherNestedInput
    teacherHomework?: AssignmentUpdateManyWithoutTeacherNestedInput
    studentHomework?: AssignmentUpdateManyWithoutStudentNestedInput
    tuitionPosts?: TuitionPostUpdateManyWithoutPostedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    teacherProfile?: TeacherProfileUncheckedUpdateOneWithoutUserNestedInput
    moderatorPermission?: ModeratorPermissionUncheckedUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
    teacherAssignments?: AssignedTeacherStudentUncheckedUpdateManyWithoutTeacherNestedInput
    teacherHomework?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    studentHomework?: AssignmentUncheckedUpdateManyWithoutStudentNestedInput
    tuitionPosts?: TuitionPostUncheckedUpdateManyWithoutPostedByUserNestedInput
  }

  export type ClassScheduleUpsertWithoutAssignmentInput = {
    update: XOR<ClassScheduleUpdateWithoutAssignmentInput, ClassScheduleUncheckedUpdateWithoutAssignmentInput>
    create: XOR<ClassScheduleCreateWithoutAssignmentInput, ClassScheduleUncheckedCreateWithoutAssignmentInput>
    where?: ClassScheduleWhereInput
  }

  export type ClassScheduleUpdateToOneWithWhereWithoutAssignmentInput = {
    where?: ClassScheduleWhereInput
    data: XOR<ClassScheduleUpdateWithoutAssignmentInput, ClassScheduleUncheckedUpdateWithoutAssignmentInput>
  }

  export type ClassScheduleUpdateWithoutAssignmentInput = {
    teacherId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectIds?: ClassScheduleUpdatesubjectIdsInput | number[]
    days?: ClassScheduleUpdatedaysInput | $Enums.Day[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    medium?: EnumMediumFieldUpdateOperationsInput | $Enums.Medium
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    overrides?: ClassScheduleOverrideUpdateManyWithoutClassScheduleNestedInput
  }

  export type ClassScheduleUncheckedUpdateWithoutAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectIds?: ClassScheduleUpdatesubjectIdsInput | number[]
    days?: ClassScheduleUpdatedaysInput | $Enums.Day[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    medium?: EnumMediumFieldUpdateOperationsInput | $Enums.Medium
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    overrides?: ClassScheduleOverrideUncheckedUpdateManyWithoutClassScheduleNestedInput
  }

  export type UserCreateWithoutTeacherHomeworkInput = {
    userCode?: string | null
    name: string
    email: string
    password: string
    address?: string | null
    contact?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    teacherProfile?: TeacherProfileCreateNestedOneWithoutUserInput
    moderatorPermission?: ModeratorPermissionCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
    teacherAssignments?: AssignedTeacherStudentCreateNestedManyWithoutTeacherInput
    studentAssignments?: AssignedTeacherStudentCreateNestedManyWithoutStudentInput
    studentHomework?: AssignmentCreateNestedManyWithoutStudentInput
    tuitionPosts?: TuitionPostCreateNestedManyWithoutPostedByUserInput
  }

  export type UserUncheckedCreateWithoutTeacherHomeworkInput = {
    id?: number
    userCode?: string | null
    name: string
    email: string
    password: string
    address?: string | null
    contact?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    teacherProfile?: TeacherProfileUncheckedCreateNestedOneWithoutUserInput
    moderatorPermission?: ModeratorPermissionUncheckedCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
    teacherAssignments?: AssignedTeacherStudentUncheckedCreateNestedManyWithoutTeacherInput
    studentAssignments?: AssignedTeacherStudentUncheckedCreateNestedManyWithoutStudentInput
    studentHomework?: AssignmentUncheckedCreateNestedManyWithoutStudentInput
    tuitionPosts?: TuitionPostUncheckedCreateNestedManyWithoutPostedByUserInput
  }

  export type UserCreateOrConnectWithoutTeacherHomeworkInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeacherHomeworkInput, UserUncheckedCreateWithoutTeacherHomeworkInput>
  }

  export type UserCreateWithoutStudentHomeworkInput = {
    userCode?: string | null
    name: string
    email: string
    password: string
    address?: string | null
    contact?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    teacherProfile?: TeacherProfileCreateNestedOneWithoutUserInput
    moderatorPermission?: ModeratorPermissionCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
    teacherAssignments?: AssignedTeacherStudentCreateNestedManyWithoutTeacherInput
    studentAssignments?: AssignedTeacherStudentCreateNestedManyWithoutStudentInput
    teacherHomework?: AssignmentCreateNestedManyWithoutTeacherInput
    tuitionPosts?: TuitionPostCreateNestedManyWithoutPostedByUserInput
  }

  export type UserUncheckedCreateWithoutStudentHomeworkInput = {
    id?: number
    userCode?: string | null
    name: string
    email: string
    password: string
    address?: string | null
    contact?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    teacherProfile?: TeacherProfileUncheckedCreateNestedOneWithoutUserInput
    moderatorPermission?: ModeratorPermissionUncheckedCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
    teacherAssignments?: AssignedTeacherStudentUncheckedCreateNestedManyWithoutTeacherInput
    studentAssignments?: AssignedTeacherStudentUncheckedCreateNestedManyWithoutStudentInput
    teacherHomework?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    tuitionPosts?: TuitionPostUncheckedCreateNestedManyWithoutPostedByUserInput
  }

  export type UserCreateOrConnectWithoutStudentHomeworkInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentHomeworkInput, UserUncheckedCreateWithoutStudentHomeworkInput>
  }

  export type UserUpsertWithoutTeacherHomeworkInput = {
    update: XOR<UserUpdateWithoutTeacherHomeworkInput, UserUncheckedUpdateWithoutTeacherHomeworkInput>
    create: XOR<UserCreateWithoutTeacherHomeworkInput, UserUncheckedCreateWithoutTeacherHomeworkInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeacherHomeworkInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeacherHomeworkInput, UserUncheckedUpdateWithoutTeacherHomeworkInput>
  }

  export type UserUpdateWithoutTeacherHomeworkInput = {
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    teacherProfile?: TeacherProfileUpdateOneWithoutUserNestedInput
    moderatorPermission?: ModeratorPermissionUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
    teacherAssignments?: AssignedTeacherStudentUpdateManyWithoutTeacherNestedInput
    studentAssignments?: AssignedTeacherStudentUpdateManyWithoutStudentNestedInput
    studentHomework?: AssignmentUpdateManyWithoutStudentNestedInput
    tuitionPosts?: TuitionPostUpdateManyWithoutPostedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeacherHomeworkInput = {
    id?: IntFieldUpdateOperationsInput | number
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    teacherProfile?: TeacherProfileUncheckedUpdateOneWithoutUserNestedInput
    moderatorPermission?: ModeratorPermissionUncheckedUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
    teacherAssignments?: AssignedTeacherStudentUncheckedUpdateManyWithoutTeacherNestedInput
    studentAssignments?: AssignedTeacherStudentUncheckedUpdateManyWithoutStudentNestedInput
    studentHomework?: AssignmentUncheckedUpdateManyWithoutStudentNestedInput
    tuitionPosts?: TuitionPostUncheckedUpdateManyWithoutPostedByUserNestedInput
  }

  export type UserUpsertWithoutStudentHomeworkInput = {
    update: XOR<UserUpdateWithoutStudentHomeworkInput, UserUncheckedUpdateWithoutStudentHomeworkInput>
    create: XOR<UserCreateWithoutStudentHomeworkInput, UserUncheckedCreateWithoutStudentHomeworkInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentHomeworkInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentHomeworkInput, UserUncheckedUpdateWithoutStudentHomeworkInput>
  }

  export type UserUpdateWithoutStudentHomeworkInput = {
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    teacherProfile?: TeacherProfileUpdateOneWithoutUserNestedInput
    moderatorPermission?: ModeratorPermissionUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
    teacherAssignments?: AssignedTeacherStudentUpdateManyWithoutTeacherNestedInput
    studentAssignments?: AssignedTeacherStudentUpdateManyWithoutStudentNestedInput
    teacherHomework?: AssignmentUpdateManyWithoutTeacherNestedInput
    tuitionPosts?: TuitionPostUpdateManyWithoutPostedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentHomeworkInput = {
    id?: IntFieldUpdateOperationsInput | number
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    teacherProfile?: TeacherProfileUncheckedUpdateOneWithoutUserNestedInput
    moderatorPermission?: ModeratorPermissionUncheckedUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
    teacherAssignments?: AssignedTeacherStudentUncheckedUpdateManyWithoutTeacherNestedInput
    studentAssignments?: AssignedTeacherStudentUncheckedUpdateManyWithoutStudentNestedInput
    teacherHomework?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    tuitionPosts?: TuitionPostUncheckedUpdateManyWithoutPostedByUserNestedInput
  }

  export type ClassScheduleOverrideCreateWithoutClassScheduleInput = {
    originalDate: Date | string
    newDate: Date | string
    startTime: string
    endTime: string
    medium: $Enums.Medium
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassScheduleOverrideUncheckedCreateWithoutClassScheduleInput = {
    id?: number
    originalDate: Date | string
    newDate: Date | string
    startTime: string
    endTime: string
    medium: $Enums.Medium
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassScheduleOverrideCreateOrConnectWithoutClassScheduleInput = {
    where: ClassScheduleOverrideWhereUniqueInput
    create: XOR<ClassScheduleOverrideCreateWithoutClassScheduleInput, ClassScheduleOverrideUncheckedCreateWithoutClassScheduleInput>
  }

  export type ClassScheduleOverrideCreateManyClassScheduleInputEnvelope = {
    data: ClassScheduleOverrideCreateManyClassScheduleInput | ClassScheduleOverrideCreateManyClassScheduleInput[]
    skipDuplicates?: boolean
  }

  export type AssignedTeacherStudentCreateWithoutClassScheduleInput = {
    assignedBy: number
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tuitionPost: TuitionPostCreateNestedOneWithoutAssignsInput
    teacher: UserCreateNestedOneWithoutTeacherAssignmentsInput
    student: UserCreateNestedOneWithoutStudentAssignmentsInput
  }

  export type AssignedTeacherStudentUncheckedCreateWithoutClassScheduleInput = {
    id?: number
    tuitionPostId: number
    teacherId: number
    studentId: number
    assignedBy: number
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignedTeacherStudentCreateOrConnectWithoutClassScheduleInput = {
    where: AssignedTeacherStudentWhereUniqueInput
    create: XOR<AssignedTeacherStudentCreateWithoutClassScheduleInput, AssignedTeacherStudentUncheckedCreateWithoutClassScheduleInput>
  }

  export type ClassScheduleOverrideUpsertWithWhereUniqueWithoutClassScheduleInput = {
    where: ClassScheduleOverrideWhereUniqueInput
    update: XOR<ClassScheduleOverrideUpdateWithoutClassScheduleInput, ClassScheduleOverrideUncheckedUpdateWithoutClassScheduleInput>
    create: XOR<ClassScheduleOverrideCreateWithoutClassScheduleInput, ClassScheduleOverrideUncheckedCreateWithoutClassScheduleInput>
  }

  export type ClassScheduleOverrideUpdateWithWhereUniqueWithoutClassScheduleInput = {
    where: ClassScheduleOverrideWhereUniqueInput
    data: XOR<ClassScheduleOverrideUpdateWithoutClassScheduleInput, ClassScheduleOverrideUncheckedUpdateWithoutClassScheduleInput>
  }

  export type ClassScheduleOverrideUpdateManyWithWhereWithoutClassScheduleInput = {
    where: ClassScheduleOverrideScalarWhereInput
    data: XOR<ClassScheduleOverrideUpdateManyMutationInput, ClassScheduleOverrideUncheckedUpdateManyWithoutClassScheduleInput>
  }

  export type ClassScheduleOverrideScalarWhereInput = {
    AND?: ClassScheduleOverrideScalarWhereInput | ClassScheduleOverrideScalarWhereInput[]
    OR?: ClassScheduleOverrideScalarWhereInput[]
    NOT?: ClassScheduleOverrideScalarWhereInput | ClassScheduleOverrideScalarWhereInput[]
    id?: IntFilter<"ClassScheduleOverride"> | number
    classScheduleId?: IntFilter<"ClassScheduleOverride"> | number
    originalDate?: DateTimeFilter<"ClassScheduleOverride"> | Date | string
    newDate?: DateTimeFilter<"ClassScheduleOverride"> | Date | string
    startTime?: StringFilter<"ClassScheduleOverride"> | string
    endTime?: StringFilter<"ClassScheduleOverride"> | string
    medium?: EnumMediumFilter<"ClassScheduleOverride"> | $Enums.Medium
    createdAt?: DateTimeFilter<"ClassScheduleOverride"> | Date | string
    updatedAt?: DateTimeFilter<"ClassScheduleOverride"> | Date | string
  }

  export type AssignedTeacherStudentUpsertWithoutClassScheduleInput = {
    update: XOR<AssignedTeacherStudentUpdateWithoutClassScheduleInput, AssignedTeacherStudentUncheckedUpdateWithoutClassScheduleInput>
    create: XOR<AssignedTeacherStudentCreateWithoutClassScheduleInput, AssignedTeacherStudentUncheckedCreateWithoutClassScheduleInput>
    where?: AssignedTeacherStudentWhereInput
  }

  export type AssignedTeacherStudentUpdateToOneWithWhereWithoutClassScheduleInput = {
    where?: AssignedTeacherStudentWhereInput
    data: XOR<AssignedTeacherStudentUpdateWithoutClassScheduleInput, AssignedTeacherStudentUncheckedUpdateWithoutClassScheduleInput>
  }

  export type AssignedTeacherStudentUpdateWithoutClassScheduleInput = {
    assignedBy?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tuitionPost?: TuitionPostUpdateOneRequiredWithoutAssignsNestedInput
    teacher?: UserUpdateOneRequiredWithoutTeacherAssignmentsNestedInput
    student?: UserUpdateOneRequiredWithoutStudentAssignmentsNestedInput
  }

  export type AssignedTeacherStudentUncheckedUpdateWithoutClassScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    tuitionPostId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    assignedBy?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassScheduleCreateWithoutOverridesInput = {
    teacherId: number
    studentId: number
    subjectIds?: ClassScheduleCreatesubjectIdsInput | number[]
    days?: ClassScheduleCreatedaysInput | $Enums.Day[]
    startTime: string
    endTime: string
    medium: $Enums.Medium
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignedTeacherStudentCreateNestedOneWithoutClassScheduleInput
  }

  export type ClassScheduleUncheckedCreateWithoutOverridesInput = {
    id?: number
    assignmentId: number
    teacherId: number
    studentId: number
    subjectIds?: ClassScheduleCreatesubjectIdsInput | number[]
    days?: ClassScheduleCreatedaysInput | $Enums.Day[]
    startTime: string
    endTime: string
    medium: $Enums.Medium
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassScheduleCreateOrConnectWithoutOverridesInput = {
    where: ClassScheduleWhereUniqueInput
    create: XOR<ClassScheduleCreateWithoutOverridesInput, ClassScheduleUncheckedCreateWithoutOverridesInput>
  }

  export type ClassScheduleUpsertWithoutOverridesInput = {
    update: XOR<ClassScheduleUpdateWithoutOverridesInput, ClassScheduleUncheckedUpdateWithoutOverridesInput>
    create: XOR<ClassScheduleCreateWithoutOverridesInput, ClassScheduleUncheckedCreateWithoutOverridesInput>
    where?: ClassScheduleWhereInput
  }

  export type ClassScheduleUpdateToOneWithWhereWithoutOverridesInput = {
    where?: ClassScheduleWhereInput
    data: XOR<ClassScheduleUpdateWithoutOverridesInput, ClassScheduleUncheckedUpdateWithoutOverridesInput>
  }

  export type ClassScheduleUpdateWithoutOverridesInput = {
    teacherId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectIds?: ClassScheduleUpdatesubjectIdsInput | number[]
    days?: ClassScheduleUpdatedaysInput | $Enums.Day[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    medium?: EnumMediumFieldUpdateOperationsInput | $Enums.Medium
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignedTeacherStudentUpdateOneRequiredWithoutClassScheduleNestedInput
  }

  export type ClassScheduleUncheckedUpdateWithoutOverridesInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignmentId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectIds?: ClassScheduleUpdatesubjectIdsInput | number[]
    days?: ClassScheduleUpdatedaysInput | $Enums.Day[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    medium?: EnumMediumFieldUpdateOperationsInput | $Enums.Medium
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutModeratorPermissionInput = {
    userCode?: string | null
    name: string
    email: string
    password: string
    address?: string | null
    contact?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    teacherProfile?: TeacherProfileCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
    teacherAssignments?: AssignedTeacherStudentCreateNestedManyWithoutTeacherInput
    studentAssignments?: AssignedTeacherStudentCreateNestedManyWithoutStudentInput
    teacherHomework?: AssignmentCreateNestedManyWithoutTeacherInput
    studentHomework?: AssignmentCreateNestedManyWithoutStudentInput
    tuitionPosts?: TuitionPostCreateNestedManyWithoutPostedByUserInput
  }

  export type UserUncheckedCreateWithoutModeratorPermissionInput = {
    id?: number
    userCode?: string | null
    name: string
    email: string
    password: string
    address?: string | null
    contact?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    teacherProfile?: TeacherProfileUncheckedCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
    teacherAssignments?: AssignedTeacherStudentUncheckedCreateNestedManyWithoutTeacherInput
    studentAssignments?: AssignedTeacherStudentUncheckedCreateNestedManyWithoutStudentInput
    teacherHomework?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    studentHomework?: AssignmentUncheckedCreateNestedManyWithoutStudentInput
    tuitionPosts?: TuitionPostUncheckedCreateNestedManyWithoutPostedByUserInput
  }

  export type UserCreateOrConnectWithoutModeratorPermissionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModeratorPermissionInput, UserUncheckedCreateWithoutModeratorPermissionInput>
  }

  export type UserUpsertWithoutModeratorPermissionInput = {
    update: XOR<UserUpdateWithoutModeratorPermissionInput, UserUncheckedUpdateWithoutModeratorPermissionInput>
    create: XOR<UserCreateWithoutModeratorPermissionInput, UserUncheckedCreateWithoutModeratorPermissionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutModeratorPermissionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutModeratorPermissionInput, UserUncheckedUpdateWithoutModeratorPermissionInput>
  }

  export type UserUpdateWithoutModeratorPermissionInput = {
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    teacherProfile?: TeacherProfileUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
    teacherAssignments?: AssignedTeacherStudentUpdateManyWithoutTeacherNestedInput
    studentAssignments?: AssignedTeacherStudentUpdateManyWithoutStudentNestedInput
    teacherHomework?: AssignmentUpdateManyWithoutTeacherNestedInput
    studentHomework?: AssignmentUpdateManyWithoutStudentNestedInput
    tuitionPosts?: TuitionPostUpdateManyWithoutPostedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutModeratorPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    teacherProfile?: TeacherProfileUncheckedUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
    teacherAssignments?: AssignedTeacherStudentUncheckedUpdateManyWithoutTeacherNestedInput
    studentAssignments?: AssignedTeacherStudentUncheckedUpdateManyWithoutStudentNestedInput
    teacherHomework?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    studentHomework?: AssignmentUncheckedUpdateManyWithoutStudentNestedInput
    tuitionPosts?: TuitionPostUncheckedUpdateManyWithoutPostedByUserNestedInput
  }

  export type UserCreateWithoutStudentProfileInput = {
    userCode?: string | null
    name: string
    email: string
    password: string
    address?: string | null
    contact?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    teacherProfile?: TeacherProfileCreateNestedOneWithoutUserInput
    moderatorPermission?: ModeratorPermissionCreateNestedOneWithoutUserInput
    teacherAssignments?: AssignedTeacherStudentCreateNestedManyWithoutTeacherInput
    studentAssignments?: AssignedTeacherStudentCreateNestedManyWithoutStudentInput
    teacherHomework?: AssignmentCreateNestedManyWithoutTeacherInput
    studentHomework?: AssignmentCreateNestedManyWithoutStudentInput
    tuitionPosts?: TuitionPostCreateNestedManyWithoutPostedByUserInput
  }

  export type UserUncheckedCreateWithoutStudentProfileInput = {
    id?: number
    userCode?: string | null
    name: string
    email: string
    password: string
    address?: string | null
    contact?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    teacherProfile?: TeacherProfileUncheckedCreateNestedOneWithoutUserInput
    moderatorPermission?: ModeratorPermissionUncheckedCreateNestedOneWithoutUserInput
    teacherAssignments?: AssignedTeacherStudentUncheckedCreateNestedManyWithoutTeacherInput
    studentAssignments?: AssignedTeacherStudentUncheckedCreateNestedManyWithoutStudentInput
    teacherHomework?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    studentHomework?: AssignmentUncheckedCreateNestedManyWithoutStudentInput
    tuitionPosts?: TuitionPostUncheckedCreateNestedManyWithoutPostedByUserInput
  }

  export type UserCreateOrConnectWithoutStudentProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentProfileInput, UserUncheckedCreateWithoutStudentProfileInput>
  }

  export type UserUpsertWithoutStudentProfileInput = {
    update: XOR<UserUpdateWithoutStudentProfileInput, UserUncheckedUpdateWithoutStudentProfileInput>
    create: XOR<UserCreateWithoutStudentProfileInput, UserUncheckedCreateWithoutStudentProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentProfileInput, UserUncheckedUpdateWithoutStudentProfileInput>
  }

  export type UserUpdateWithoutStudentProfileInput = {
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    teacherProfile?: TeacherProfileUpdateOneWithoutUserNestedInput
    moderatorPermission?: ModeratorPermissionUpdateOneWithoutUserNestedInput
    teacherAssignments?: AssignedTeacherStudentUpdateManyWithoutTeacherNestedInput
    studentAssignments?: AssignedTeacherStudentUpdateManyWithoutStudentNestedInput
    teacherHomework?: AssignmentUpdateManyWithoutTeacherNestedInput
    studentHomework?: AssignmentUpdateManyWithoutStudentNestedInput
    tuitionPosts?: TuitionPostUpdateManyWithoutPostedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    teacherProfile?: TeacherProfileUncheckedUpdateOneWithoutUserNestedInput
    moderatorPermission?: ModeratorPermissionUncheckedUpdateOneWithoutUserNestedInput
    teacherAssignments?: AssignedTeacherStudentUncheckedUpdateManyWithoutTeacherNestedInput
    studentAssignments?: AssignedTeacherStudentUncheckedUpdateManyWithoutStudentNestedInput
    teacherHomework?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    studentHomework?: AssignmentUncheckedUpdateManyWithoutStudentNestedInput
    tuitionPosts?: TuitionPostUncheckedUpdateManyWithoutPostedByUserNestedInput
  }

  export type UserCreateWithoutTeacherProfileInput = {
    userCode?: string | null
    name: string
    email: string
    password: string
    address?: string | null
    contact?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    moderatorPermission?: ModeratorPermissionCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
    teacherAssignments?: AssignedTeacherStudentCreateNestedManyWithoutTeacherInput
    studentAssignments?: AssignedTeacherStudentCreateNestedManyWithoutStudentInput
    teacherHomework?: AssignmentCreateNestedManyWithoutTeacherInput
    studentHomework?: AssignmentCreateNestedManyWithoutStudentInput
    tuitionPosts?: TuitionPostCreateNestedManyWithoutPostedByUserInput
  }

  export type UserUncheckedCreateWithoutTeacherProfileInput = {
    id?: number
    userCode?: string | null
    name: string
    email: string
    password: string
    address?: string | null
    contact?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    moderatorPermission?: ModeratorPermissionUncheckedCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
    teacherAssignments?: AssignedTeacherStudentUncheckedCreateNestedManyWithoutTeacherInput
    studentAssignments?: AssignedTeacherStudentUncheckedCreateNestedManyWithoutStudentInput
    teacherHomework?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    studentHomework?: AssignmentUncheckedCreateNestedManyWithoutStudentInput
    tuitionPosts?: TuitionPostUncheckedCreateNestedManyWithoutPostedByUserInput
  }

  export type UserCreateOrConnectWithoutTeacherProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeacherProfileInput, UserUncheckedCreateWithoutTeacherProfileInput>
  }

  export type UserUpsertWithoutTeacherProfileInput = {
    update: XOR<UserUpdateWithoutTeacherProfileInput, UserUncheckedUpdateWithoutTeacherProfileInput>
    create: XOR<UserCreateWithoutTeacherProfileInput, UserUncheckedCreateWithoutTeacherProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeacherProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeacherProfileInput, UserUncheckedUpdateWithoutTeacherProfileInput>
  }

  export type UserUpdateWithoutTeacherProfileInput = {
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    moderatorPermission?: ModeratorPermissionUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
    teacherAssignments?: AssignedTeacherStudentUpdateManyWithoutTeacherNestedInput
    studentAssignments?: AssignedTeacherStudentUpdateManyWithoutStudentNestedInput
    teacherHomework?: AssignmentUpdateManyWithoutTeacherNestedInput
    studentHomework?: AssignmentUpdateManyWithoutStudentNestedInput
    tuitionPosts?: TuitionPostUpdateManyWithoutPostedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeacherProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    moderatorPermission?: ModeratorPermissionUncheckedUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
    teacherAssignments?: AssignedTeacherStudentUncheckedUpdateManyWithoutTeacherNestedInput
    studentAssignments?: AssignedTeacherStudentUncheckedUpdateManyWithoutStudentNestedInput
    teacherHomework?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    studentHomework?: AssignmentUncheckedUpdateManyWithoutStudentNestedInput
    tuitionPosts?: TuitionPostUncheckedUpdateManyWithoutPostedByUserNestedInput
  }

  export type UserCreateWithoutTuitionPostsInput = {
    userCode?: string | null
    name: string
    email: string
    password: string
    address?: string | null
    contact?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    teacherProfile?: TeacherProfileCreateNestedOneWithoutUserInput
    moderatorPermission?: ModeratorPermissionCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
    teacherAssignments?: AssignedTeacherStudentCreateNestedManyWithoutTeacherInput
    studentAssignments?: AssignedTeacherStudentCreateNestedManyWithoutStudentInput
    teacherHomework?: AssignmentCreateNestedManyWithoutTeacherInput
    studentHomework?: AssignmentCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutTuitionPostsInput = {
    id?: number
    userCode?: string | null
    name: string
    email: string
    password: string
    address?: string | null
    contact?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    teacherProfile?: TeacherProfileUncheckedCreateNestedOneWithoutUserInput
    moderatorPermission?: ModeratorPermissionUncheckedCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
    teacherAssignments?: AssignedTeacherStudentUncheckedCreateNestedManyWithoutTeacherInput
    studentAssignments?: AssignedTeacherStudentUncheckedCreateNestedManyWithoutStudentInput
    teacherHomework?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    studentHomework?: AssignmentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutTuitionPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTuitionPostsInput, UserUncheckedCreateWithoutTuitionPostsInput>
  }

  export type AssignedTeacherStudentCreateWithoutTuitionPostInput = {
    assignedBy: number
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: UserCreateNestedOneWithoutTeacherAssignmentsInput
    student: UserCreateNestedOneWithoutStudentAssignmentsInput
    classSchedule?: ClassScheduleCreateNestedOneWithoutAssignmentInput
  }

  export type AssignedTeacherStudentUncheckedCreateWithoutTuitionPostInput = {
    id?: number
    teacherId: number
    studentId: number
    assignedBy: number
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classSchedule?: ClassScheduleUncheckedCreateNestedOneWithoutAssignmentInput
  }

  export type AssignedTeacherStudentCreateOrConnectWithoutTuitionPostInput = {
    where: AssignedTeacherStudentWhereUniqueInput
    create: XOR<AssignedTeacherStudentCreateWithoutTuitionPostInput, AssignedTeacherStudentUncheckedCreateWithoutTuitionPostInput>
  }

  export type UserUpsertWithoutTuitionPostsInput = {
    update: XOR<UserUpdateWithoutTuitionPostsInput, UserUncheckedUpdateWithoutTuitionPostsInput>
    create: XOR<UserCreateWithoutTuitionPostsInput, UserUncheckedCreateWithoutTuitionPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTuitionPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTuitionPostsInput, UserUncheckedUpdateWithoutTuitionPostsInput>
  }

  export type UserUpdateWithoutTuitionPostsInput = {
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    teacherProfile?: TeacherProfileUpdateOneWithoutUserNestedInput
    moderatorPermission?: ModeratorPermissionUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
    teacherAssignments?: AssignedTeacherStudentUpdateManyWithoutTeacherNestedInput
    studentAssignments?: AssignedTeacherStudentUpdateManyWithoutStudentNestedInput
    teacherHomework?: AssignmentUpdateManyWithoutTeacherNestedInput
    studentHomework?: AssignmentUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutTuitionPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    teacherProfile?: TeacherProfileUncheckedUpdateOneWithoutUserNestedInput
    moderatorPermission?: ModeratorPermissionUncheckedUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
    teacherAssignments?: AssignedTeacherStudentUncheckedUpdateManyWithoutTeacherNestedInput
    studentAssignments?: AssignedTeacherStudentUncheckedUpdateManyWithoutStudentNestedInput
    teacherHomework?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    studentHomework?: AssignmentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type AssignedTeacherStudentUpsertWithoutTuitionPostInput = {
    update: XOR<AssignedTeacherStudentUpdateWithoutTuitionPostInput, AssignedTeacherStudentUncheckedUpdateWithoutTuitionPostInput>
    create: XOR<AssignedTeacherStudentCreateWithoutTuitionPostInput, AssignedTeacherStudentUncheckedCreateWithoutTuitionPostInput>
    where?: AssignedTeacherStudentWhereInput
  }

  export type AssignedTeacherStudentUpdateToOneWithWhereWithoutTuitionPostInput = {
    where?: AssignedTeacherStudentWhereInput
    data: XOR<AssignedTeacherStudentUpdateWithoutTuitionPostInput, AssignedTeacherStudentUncheckedUpdateWithoutTuitionPostInput>
  }

  export type AssignedTeacherStudentUpdateWithoutTuitionPostInput = {
    assignedBy?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutTeacherAssignmentsNestedInput
    student?: UserUpdateOneRequiredWithoutStudentAssignmentsNestedInput
    classSchedule?: ClassScheduleUpdateOneWithoutAssignmentNestedInput
  }

  export type AssignedTeacherStudentUncheckedUpdateWithoutTuitionPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    assignedBy?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classSchedule?: ClassScheduleUncheckedUpdateOneWithoutAssignmentNestedInput
  }

  export type RefreshTokenCreateWithoutUserInput = {
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeacherProfileCreateWithoutUserInput = {
    bio?: string | null
    experienceYears?: number | null
    educationalBackground?: string | null
    cvUrl?: string | null
    medium?: TeacherProfileCreatemediumInput | $Enums.Medium[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherProfileUncheckedCreateWithoutUserInput = {
    id?: number
    bio?: string | null
    experienceYears?: number | null
    educationalBackground?: string | null
    cvUrl?: string | null
    medium?: TeacherProfileCreatemediumInput | $Enums.Medium[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherProfileCreateOrConnectWithoutUserInput = {
    where: TeacherProfileWhereUniqueInput
    create: XOR<TeacherProfileCreateWithoutUserInput, TeacherProfileUncheckedCreateWithoutUserInput>
  }

  export type ModeratorPermissionCreateWithoutUserInput = {
    canAssignTeachers?: boolean
    canApproveJobs?: boolean
    canManageUsers?: boolean
    canPostJobs?: boolean
    canRejectApplications?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModeratorPermissionUncheckedCreateWithoutUserInput = {
    id?: number
    canAssignTeachers?: boolean
    canApproveJobs?: boolean
    canManageUsers?: boolean
    canPostJobs?: boolean
    canRejectApplications?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModeratorPermissionCreateOrConnectWithoutUserInput = {
    where: ModeratorPermissionWhereUniqueInput
    create: XOR<ModeratorPermissionCreateWithoutUserInput, ModeratorPermissionUncheckedCreateWithoutUserInput>
  }

  export type StudentProfileCreateWithoutUserInput = {
    gradeLevel?: number | null
    institution?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contact?: string | null
  }

  export type StudentProfileUncheckedCreateWithoutUserInput = {
    id?: number
    gradeLevel?: number | null
    institution?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contact?: string | null
  }

  export type StudentProfileCreateOrConnectWithoutUserInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
  }

  export type AssignedTeacherStudentCreateWithoutTeacherInput = {
    assignedBy: number
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tuitionPost: TuitionPostCreateNestedOneWithoutAssignsInput
    student: UserCreateNestedOneWithoutStudentAssignmentsInput
    classSchedule?: ClassScheduleCreateNestedOneWithoutAssignmentInput
  }

  export type AssignedTeacherStudentUncheckedCreateWithoutTeacherInput = {
    id?: number
    tuitionPostId: number
    studentId: number
    assignedBy: number
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classSchedule?: ClassScheduleUncheckedCreateNestedOneWithoutAssignmentInput
  }

  export type AssignedTeacherStudentCreateOrConnectWithoutTeacherInput = {
    where: AssignedTeacherStudentWhereUniqueInput
    create: XOR<AssignedTeacherStudentCreateWithoutTeacherInput, AssignedTeacherStudentUncheckedCreateWithoutTeacherInput>
  }

  export type AssignedTeacherStudentCreateManyTeacherInputEnvelope = {
    data: AssignedTeacherStudentCreateManyTeacherInput | AssignedTeacherStudentCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type AssignedTeacherStudentCreateWithoutStudentInput = {
    assignedBy: number
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tuitionPost: TuitionPostCreateNestedOneWithoutAssignsInput
    teacher: UserCreateNestedOneWithoutTeacherAssignmentsInput
    classSchedule?: ClassScheduleCreateNestedOneWithoutAssignmentInput
  }

  export type AssignedTeacherStudentUncheckedCreateWithoutStudentInput = {
    id?: number
    tuitionPostId: number
    teacherId: number
    assignedBy: number
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    classSchedule?: ClassScheduleUncheckedCreateNestedOneWithoutAssignmentInput
  }

  export type AssignedTeacherStudentCreateOrConnectWithoutStudentInput = {
    where: AssignedTeacherStudentWhereUniqueInput
    create: XOR<AssignedTeacherStudentCreateWithoutStudentInput, AssignedTeacherStudentUncheckedCreateWithoutStudentInput>
  }

  export type AssignedTeacherStudentCreateManyStudentInputEnvelope = {
    data: AssignedTeacherStudentCreateManyStudentInput | AssignedTeacherStudentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentCreateWithoutTeacherInput = {
    title: string
    description?: string | null
    dueDate: Date | string
    fileUrl?: string | null
    fileName?: string | null
    note?: string | null
    grade?: number | null
    feedback?: string | null
    gradedAt?: Date | string | null
    status?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subject?: number | null
    student: UserCreateNestedOneWithoutStudentHomeworkInput
  }

  export type AssignmentUncheckedCreateWithoutTeacherInput = {
    id?: number
    studentId: number
    title: string
    description?: string | null
    dueDate: Date | string
    fileUrl?: string | null
    fileName?: string | null
    note?: string | null
    grade?: number | null
    feedback?: string | null
    gradedAt?: Date | string | null
    status?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subject?: number | null
  }

  export type AssignmentCreateOrConnectWithoutTeacherInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutTeacherInput, AssignmentUncheckedCreateWithoutTeacherInput>
  }

  export type AssignmentCreateManyTeacherInputEnvelope = {
    data: AssignmentCreateManyTeacherInput | AssignmentCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentCreateWithoutStudentInput = {
    title: string
    description?: string | null
    dueDate: Date | string
    fileUrl?: string | null
    fileName?: string | null
    note?: string | null
    grade?: number | null
    feedback?: string | null
    gradedAt?: Date | string | null
    status?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subject?: number | null
    teacher: UserCreateNestedOneWithoutTeacherHomeworkInput
  }

  export type AssignmentUncheckedCreateWithoutStudentInput = {
    id?: number
    teacherId: number
    title: string
    description?: string | null
    dueDate: Date | string
    fileUrl?: string | null
    fileName?: string | null
    note?: string | null
    grade?: number | null
    feedback?: string | null
    gradedAt?: Date | string | null
    status?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subject?: number | null
  }

  export type AssignmentCreateOrConnectWithoutStudentInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutStudentInput, AssignmentUncheckedCreateWithoutStudentInput>
  }

  export type AssignmentCreateManyStudentInputEnvelope = {
    data: AssignmentCreateManyStudentInput | AssignmentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type TuitionPostCreateWithoutPostedByUserInput = {
    title: string
    description?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    medium: $Enums.Medium
    area: number
    days?: TuitionPostCreatedaysInput | $Enums.Day[]
    startTime: string
    endTime: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: TuitionPostCreatesubjectsInput | number[]
    assigns?: AssignedTeacherStudentCreateNestedOneWithoutTuitionPostInput
  }

  export type TuitionPostUncheckedCreateWithoutPostedByUserInput = {
    id?: number
    title: string
    description?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    medium: $Enums.Medium
    area: number
    days?: TuitionPostCreatedaysInput | $Enums.Day[]
    startTime: string
    endTime: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: TuitionPostCreatesubjectsInput | number[]
    assigns?: AssignedTeacherStudentUncheckedCreateNestedOneWithoutTuitionPostInput
  }

  export type TuitionPostCreateOrConnectWithoutPostedByUserInput = {
    where: TuitionPostWhereUniqueInput
    create: XOR<TuitionPostCreateWithoutPostedByUserInput, TuitionPostUncheckedCreateWithoutPostedByUserInput>
  }

  export type TuitionPostCreateManyPostedByUserInputEnvelope = {
    data: TuitionPostCreateManyPostedByUserInput | TuitionPostCreateManyPostedByUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: IntFilter<"RefreshToken"> | number
    token?: StringFilter<"RefreshToken"> | string
    userId?: IntFilter<"RefreshToken"> | number
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type TeacherProfileUpsertWithoutUserInput = {
    update: XOR<TeacherProfileUpdateWithoutUserInput, TeacherProfileUncheckedUpdateWithoutUserInput>
    create: XOR<TeacherProfileCreateWithoutUserInput, TeacherProfileUncheckedCreateWithoutUserInput>
    where?: TeacherProfileWhereInput
  }

  export type TeacherProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: TeacherProfileWhereInput
    data: XOR<TeacherProfileUpdateWithoutUserInput, TeacherProfileUncheckedUpdateWithoutUserInput>
  }

  export type TeacherProfileUpdateWithoutUserInput = {
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    educationalBackground?: NullableStringFieldUpdateOperationsInput | string | null
    cvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: TeacherProfileUpdatemediumInput | $Enums.Medium[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    educationalBackground?: NullableStringFieldUpdateOperationsInput | string | null
    cvUrl?: NullableStringFieldUpdateOperationsInput | string | null
    medium?: TeacherProfileUpdatemediumInput | $Enums.Medium[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModeratorPermissionUpsertWithoutUserInput = {
    update: XOR<ModeratorPermissionUpdateWithoutUserInput, ModeratorPermissionUncheckedUpdateWithoutUserInput>
    create: XOR<ModeratorPermissionCreateWithoutUserInput, ModeratorPermissionUncheckedCreateWithoutUserInput>
    where?: ModeratorPermissionWhereInput
  }

  export type ModeratorPermissionUpdateToOneWithWhereWithoutUserInput = {
    where?: ModeratorPermissionWhereInput
    data: XOR<ModeratorPermissionUpdateWithoutUserInput, ModeratorPermissionUncheckedUpdateWithoutUserInput>
  }

  export type ModeratorPermissionUpdateWithoutUserInput = {
    canAssignTeachers?: BoolFieldUpdateOperationsInput | boolean
    canApproveJobs?: BoolFieldUpdateOperationsInput | boolean
    canManageUsers?: BoolFieldUpdateOperationsInput | boolean
    canPostJobs?: BoolFieldUpdateOperationsInput | boolean
    canRejectApplications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModeratorPermissionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    canAssignTeachers?: BoolFieldUpdateOperationsInput | boolean
    canApproveJobs?: BoolFieldUpdateOperationsInput | boolean
    canManageUsers?: BoolFieldUpdateOperationsInput | boolean
    canPostJobs?: BoolFieldUpdateOperationsInput | boolean
    canRejectApplications?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProfileUpsertWithoutUserInput = {
    update: XOR<StudentProfileUpdateWithoutUserInput, StudentProfileUncheckedUpdateWithoutUserInput>
    create: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutUserInput, StudentProfileUncheckedUpdateWithoutUserInput>
  }

  export type StudentProfileUpdateWithoutUserInput = {
    gradeLevel?: NullableIntFieldUpdateOperationsInput | number | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    gradeLevel?: NullableIntFieldUpdateOperationsInput | number | null
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssignedTeacherStudentUpsertWithWhereUniqueWithoutTeacherInput = {
    where: AssignedTeacherStudentWhereUniqueInput
    update: XOR<AssignedTeacherStudentUpdateWithoutTeacherInput, AssignedTeacherStudentUncheckedUpdateWithoutTeacherInput>
    create: XOR<AssignedTeacherStudentCreateWithoutTeacherInput, AssignedTeacherStudentUncheckedCreateWithoutTeacherInput>
  }

  export type AssignedTeacherStudentUpdateWithWhereUniqueWithoutTeacherInput = {
    where: AssignedTeacherStudentWhereUniqueInput
    data: XOR<AssignedTeacherStudentUpdateWithoutTeacherInput, AssignedTeacherStudentUncheckedUpdateWithoutTeacherInput>
  }

  export type AssignedTeacherStudentUpdateManyWithWhereWithoutTeacherInput = {
    where: AssignedTeacherStudentScalarWhereInput
    data: XOR<AssignedTeacherStudentUpdateManyMutationInput, AssignedTeacherStudentUncheckedUpdateManyWithoutTeacherInput>
  }

  export type AssignedTeacherStudentScalarWhereInput = {
    AND?: AssignedTeacherStudentScalarWhereInput | AssignedTeacherStudentScalarWhereInput[]
    OR?: AssignedTeacherStudentScalarWhereInput[]
    NOT?: AssignedTeacherStudentScalarWhereInput | AssignedTeacherStudentScalarWhereInput[]
    id?: IntFilter<"AssignedTeacherStudent"> | number
    tuitionPostId?: IntFilter<"AssignedTeacherStudent"> | number
    teacherId?: IntFilter<"AssignedTeacherStudent"> | number
    studentId?: IntFilter<"AssignedTeacherStudent"> | number
    assignedBy?: IntFilter<"AssignedTeacherStudent"> | number
    startDate?: DateTimeFilter<"AssignedTeacherStudent"> | Date | string
    endDate?: DateTimeNullableFilter<"AssignedTeacherStudent"> | Date | string | null
    createdAt?: DateTimeFilter<"AssignedTeacherStudent"> | Date | string
    updatedAt?: DateTimeFilter<"AssignedTeacherStudent"> | Date | string
  }

  export type AssignedTeacherStudentUpsertWithWhereUniqueWithoutStudentInput = {
    where: AssignedTeacherStudentWhereUniqueInput
    update: XOR<AssignedTeacherStudentUpdateWithoutStudentInput, AssignedTeacherStudentUncheckedUpdateWithoutStudentInput>
    create: XOR<AssignedTeacherStudentCreateWithoutStudentInput, AssignedTeacherStudentUncheckedCreateWithoutStudentInput>
  }

  export type AssignedTeacherStudentUpdateWithWhereUniqueWithoutStudentInput = {
    where: AssignedTeacherStudentWhereUniqueInput
    data: XOR<AssignedTeacherStudentUpdateWithoutStudentInput, AssignedTeacherStudentUncheckedUpdateWithoutStudentInput>
  }

  export type AssignedTeacherStudentUpdateManyWithWhereWithoutStudentInput = {
    where: AssignedTeacherStudentScalarWhereInput
    data: XOR<AssignedTeacherStudentUpdateManyMutationInput, AssignedTeacherStudentUncheckedUpdateManyWithoutStudentInput>
  }

  export type AssignmentUpsertWithWhereUniqueWithoutTeacherInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutTeacherInput, AssignmentUncheckedUpdateWithoutTeacherInput>
    create: XOR<AssignmentCreateWithoutTeacherInput, AssignmentUncheckedCreateWithoutTeacherInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutTeacherInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutTeacherInput, AssignmentUncheckedUpdateWithoutTeacherInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutTeacherInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutTeacherInput>
  }

  export type AssignmentScalarWhereInput = {
    AND?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    OR?: AssignmentScalarWhereInput[]
    NOT?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    id?: IntFilter<"Assignment"> | number
    teacherId?: IntFilter<"Assignment"> | number
    studentId?: IntFilter<"Assignment"> | number
    title?: StringFilter<"Assignment"> | string
    description?: StringNullableFilter<"Assignment"> | string | null
    dueDate?: DateTimeFilter<"Assignment"> | Date | string
    fileUrl?: StringNullableFilter<"Assignment"> | string | null
    fileName?: StringNullableFilter<"Assignment"> | string | null
    note?: StringNullableFilter<"Assignment"> | string | null
    grade?: IntNullableFilter<"Assignment"> | number | null
    feedback?: StringNullableFilter<"Assignment"> | string | null
    gradedAt?: DateTimeNullableFilter<"Assignment"> | Date | string | null
    status?: IntNullableFilter<"Assignment"> | number | null
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    updatedAt?: DateTimeFilter<"Assignment"> | Date | string
    subject?: IntNullableFilter<"Assignment"> | number | null
  }

  export type AssignmentUpsertWithWhereUniqueWithoutStudentInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutStudentInput, AssignmentUncheckedUpdateWithoutStudentInput>
    create: XOR<AssignmentCreateWithoutStudentInput, AssignmentUncheckedCreateWithoutStudentInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutStudentInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutStudentInput, AssignmentUncheckedUpdateWithoutStudentInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutStudentInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutStudentInput>
  }

  export type TuitionPostUpsertWithWhereUniqueWithoutPostedByUserInput = {
    where: TuitionPostWhereUniqueInput
    update: XOR<TuitionPostUpdateWithoutPostedByUserInput, TuitionPostUncheckedUpdateWithoutPostedByUserInput>
    create: XOR<TuitionPostCreateWithoutPostedByUserInput, TuitionPostUncheckedCreateWithoutPostedByUserInput>
  }

  export type TuitionPostUpdateWithWhereUniqueWithoutPostedByUserInput = {
    where: TuitionPostWhereUniqueInput
    data: XOR<TuitionPostUpdateWithoutPostedByUserInput, TuitionPostUncheckedUpdateWithoutPostedByUserInput>
  }

  export type TuitionPostUpdateManyWithWhereWithoutPostedByUserInput = {
    where: TuitionPostScalarWhereInput
    data: XOR<TuitionPostUpdateManyMutationInput, TuitionPostUncheckedUpdateManyWithoutPostedByUserInput>
  }

  export type TuitionPostScalarWhereInput = {
    AND?: TuitionPostScalarWhereInput | TuitionPostScalarWhereInput[]
    OR?: TuitionPostScalarWhereInput[]
    NOT?: TuitionPostScalarWhereInput | TuitionPostScalarWhereInput[]
    id?: IntFilter<"TuitionPost"> | number
    postedBy?: IntFilter<"TuitionPost"> | number
    title?: StringFilter<"TuitionPost"> | string
    description?: StringNullableFilter<"TuitionPost"> | string | null
    budget?: DecimalNullableFilter<"TuitionPost"> | Decimal | DecimalJsLike | number | string | null
    medium?: EnumMediumFilter<"TuitionPost"> | $Enums.Medium
    area?: IntFilter<"TuitionPost"> | number
    days?: EnumDayNullableListFilter<"TuitionPost">
    startTime?: StringFilter<"TuitionPost"> | string
    endTime?: StringFilter<"TuitionPost"> | string
    status?: IntFilter<"TuitionPost"> | number
    createdAt?: DateTimeFilter<"TuitionPost"> | Date | string
    updatedAt?: DateTimeFilter<"TuitionPost"> | Date | string
    subjects?: IntNullableListFilter<"TuitionPost">
  }

  export type UserCreateWithoutRefreshTokensInput = {
    userCode?: string | null
    name: string
    email: string
    password: string
    address?: string | null
    contact?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherProfile?: TeacherProfileCreateNestedOneWithoutUserInput
    moderatorPermission?: ModeratorPermissionCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
    teacherAssignments?: AssignedTeacherStudentCreateNestedManyWithoutTeacherInput
    studentAssignments?: AssignedTeacherStudentCreateNestedManyWithoutStudentInput
    teacherHomework?: AssignmentCreateNestedManyWithoutTeacherInput
    studentHomework?: AssignmentCreateNestedManyWithoutStudentInput
    tuitionPosts?: TuitionPostCreateNestedManyWithoutPostedByUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: number
    userCode?: string | null
    name: string
    email: string
    password: string
    address?: string | null
    contact?: string | null
    gender?: $Enums.Gender | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherProfile?: TeacherProfileUncheckedCreateNestedOneWithoutUserInput
    moderatorPermission?: ModeratorPermissionUncheckedCreateNestedOneWithoutUserInput
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
    teacherAssignments?: AssignedTeacherStudentUncheckedCreateNestedManyWithoutTeacherInput
    studentAssignments?: AssignedTeacherStudentUncheckedCreateNestedManyWithoutStudentInput
    teacherHomework?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    studentHomework?: AssignmentUncheckedCreateNestedManyWithoutStudentInput
    tuitionPosts?: TuitionPostUncheckedCreateNestedManyWithoutPostedByUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherProfile?: TeacherProfileUpdateOneWithoutUserNestedInput
    moderatorPermission?: ModeratorPermissionUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
    teacherAssignments?: AssignedTeacherStudentUpdateManyWithoutTeacherNestedInput
    studentAssignments?: AssignedTeacherStudentUpdateManyWithoutStudentNestedInput
    teacherHomework?: AssignmentUpdateManyWithoutTeacherNestedInput
    studentHomework?: AssignmentUpdateManyWithoutStudentNestedInput
    tuitionPosts?: TuitionPostUpdateManyWithoutPostedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    userCode?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherProfile?: TeacherProfileUncheckedUpdateOneWithoutUserNestedInput
    moderatorPermission?: ModeratorPermissionUncheckedUpdateOneWithoutUserNestedInput
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
    teacherAssignments?: AssignedTeacherStudentUncheckedUpdateManyWithoutTeacherNestedInput
    studentAssignments?: AssignedTeacherStudentUncheckedUpdateManyWithoutStudentNestedInput
    teacherHomework?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    studentHomework?: AssignmentUncheckedUpdateManyWithoutStudentNestedInput
    tuitionPosts?: TuitionPostUncheckedUpdateManyWithoutPostedByUserNestedInput
  }

  export type ClassScheduleOverrideCreateManyClassScheduleInput = {
    id?: number
    originalDate: Date | string
    newDate: Date | string
    startTime: string
    endTime: string
    medium: $Enums.Medium
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClassScheduleOverrideUpdateWithoutClassScheduleInput = {
    originalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    medium?: EnumMediumFieldUpdateOperationsInput | $Enums.Medium
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassScheduleOverrideUncheckedUpdateWithoutClassScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    originalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    medium?: EnumMediumFieldUpdateOperationsInput | $Enums.Medium
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassScheduleOverrideUncheckedUpdateManyWithoutClassScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    originalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    newDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    medium?: EnumMediumFieldUpdateOperationsInput | $Enums.Medium
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: number
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type AssignedTeacherStudentCreateManyTeacherInput = {
    id?: number
    tuitionPostId: number
    studentId: number
    assignedBy: number
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignedTeacherStudentCreateManyStudentInput = {
    id?: number
    tuitionPostId: number
    teacherId: number
    assignedBy: number
    startDate: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentCreateManyTeacherInput = {
    id?: number
    studentId: number
    title: string
    description?: string | null
    dueDate: Date | string
    fileUrl?: string | null
    fileName?: string | null
    note?: string | null
    grade?: number | null
    feedback?: string | null
    gradedAt?: Date | string | null
    status?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subject?: number | null
  }

  export type AssignmentCreateManyStudentInput = {
    id?: number
    teacherId: number
    title: string
    description?: string | null
    dueDate: Date | string
    fileUrl?: string | null
    fileName?: string | null
    note?: string | null
    grade?: number | null
    feedback?: string | null
    gradedAt?: Date | string | null
    status?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subject?: number | null
  }

  export type TuitionPostCreateManyPostedByUserInput = {
    id?: number
    title: string
    description?: string | null
    budget?: Decimal | DecimalJsLike | number | string | null
    medium: $Enums.Medium
    area: number
    days?: TuitionPostCreatedaysInput | $Enums.Day[]
    startTime: string
    endTime: string
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    subjects?: TuitionPostCreatesubjectsInput | number[]
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignedTeacherStudentUpdateWithoutTeacherInput = {
    assignedBy?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tuitionPost?: TuitionPostUpdateOneRequiredWithoutAssignsNestedInput
    student?: UserUpdateOneRequiredWithoutStudentAssignmentsNestedInput
    classSchedule?: ClassScheduleUpdateOneWithoutAssignmentNestedInput
  }

  export type AssignedTeacherStudentUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    tuitionPostId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    assignedBy?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classSchedule?: ClassScheduleUncheckedUpdateOneWithoutAssignmentNestedInput
  }

  export type AssignedTeacherStudentUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    tuitionPostId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    assignedBy?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignedTeacherStudentUpdateWithoutStudentInput = {
    assignedBy?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tuitionPost?: TuitionPostUpdateOneRequiredWithoutAssignsNestedInput
    teacher?: UserUpdateOneRequiredWithoutTeacherAssignmentsNestedInput
    classSchedule?: ClassScheduleUpdateOneWithoutAssignmentNestedInput
  }

  export type AssignedTeacherStudentUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    tuitionPostId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    assignedBy?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    classSchedule?: ClassScheduleUncheckedUpdateOneWithoutAssignmentNestedInput
  }

  export type AssignedTeacherStudentUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    tuitionPostId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    assignedBy?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUpdateWithoutTeacherInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: NullableIntFieldUpdateOperationsInput | number | null
    student?: UserUpdateOneRequiredWithoutStudentHomeworkNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AssignmentUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AssignmentUpdateWithoutStudentInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: NullableIntFieldUpdateOperationsInput | number | null
    teacher?: UserUpdateOneRequiredWithoutTeacherHomeworkNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AssignmentUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TuitionPostUpdateWithoutPostedByUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    medium?: EnumMediumFieldUpdateOperationsInput | $Enums.Medium
    area?: IntFieldUpdateOperationsInput | number
    days?: TuitionPostUpdatedaysInput | $Enums.Day[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: TuitionPostUpdatesubjectsInput | number[]
    assigns?: AssignedTeacherStudentUpdateOneWithoutTuitionPostNestedInput
  }

  export type TuitionPostUncheckedUpdateWithoutPostedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    medium?: EnumMediumFieldUpdateOperationsInput | $Enums.Medium
    area?: IntFieldUpdateOperationsInput | number
    days?: TuitionPostUpdatedaysInput | $Enums.Day[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: TuitionPostUpdatesubjectsInput | number[]
    assigns?: AssignedTeacherStudentUncheckedUpdateOneWithoutTuitionPostNestedInput
  }

  export type TuitionPostUncheckedUpdateManyWithoutPostedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    medium?: EnumMediumFieldUpdateOperationsInput | $Enums.Medium
    area?: IntFieldUpdateOperationsInput | number
    days?: TuitionPostUpdatedaysInput | $Enums.Day[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subjects?: TuitionPostUpdatesubjectsInput | number[]
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