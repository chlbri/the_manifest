import { EventObject, SingleOrArray } from './types/types';

type Services = Record<string, { data: any; error?: any }>;

type TransitionConfig = {
  cond?: string;
  in?: string;
  internal?: string;
  target?: string;
  meta?: Record<string, any>;
  actions?: SingleOrArray<string>;
  description?: string;
};

type InvokeConfig = {
  /**
   * The unique identifier for the invoked machine. If not specified, this
   * will be the machine's own `id`, or the URL (from `src`).
   */
  id?: string;

  /**
   * The source of the machine to be invoked, or the machine itself.
   */
  src: string;

  /**
   * If `true`, events sent to the parent service will be forwarded to the invoked service.
   *
   * Default: `false`
   */
  autoForward?: boolean;

  data?: string;

  then?: string | TransitionConfig;
  catch?: string | TransitionConfig;
  meta?: Record<string, any>;
};

type BaseStateConfig = {
  /**
   * The relative key of the state node, which represents its location in the overall state value.
   * This is automatically determined by the configuration shape via the key where it was defined.
   */
  key?: string;
  /**
   * The initial state node key.
   */
  // initial?: string;
  invoke?: InvokeConfig;
  on?: Record<string, SingleOrArray<TransitionConfig>>;
  entry?: SingleOrArray<string>;
  exit?: SingleOrArray<string>;
};

type ParallelConfig = {
  parallel: true;

  /**
   * The initial state node key.
   */
  states: Record<string, ParallelConfig>;
} & BaseStateConfig;

type Config<S extends Services = Services> = {
  /**
   * The relative key of the state node, which represents its location in the overall state value.
   * This is automatically determined by the configuration shape via the key where it was defined.
   */
  key?: string;

  /**
   * The initial state node key.
   */
  initial?: string;
  types?: {
    context?: NonNullable<unknown>;
    events?: EventObject;
  };
  type?: 'compound' | 'parallel';
};

export function createMachine<C extends Config>() {}
