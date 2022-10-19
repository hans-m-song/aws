import { Construct } from "constructs";

type Constructable = new (scope: Construct, ...args: any[]) => any;
type Arguments<T extends Constructable> = ConstructorParameters<T> extends [
  Construct,
  ...infer Rest,
]
  ? Rest
  : never;

const defer =
  <Class extends Constructable>(ctor: Class, scope: Construct) =>
  (...args: Arguments<Class>) =>
    new ctor(scope, ...args);

export class Singleton extends Construct {
  private static instances: Record<string, Singleton>;
}
