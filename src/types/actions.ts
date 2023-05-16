import { EventObject, ActionObject, SendExpr, DelayExpr } from './types';

export enum ActionTypes {
  Start = 'xstate.start',
  Stop = 'xstate.stop',
  Raise = 'xstate.raise',
  Send = 'xstate.send',
  Cancel = 'xstate.cancel',
  NullEvent = '',
  Assign = 'xstate.assign',
  After = 'xstate.after',
  DoneState = 'done.state',
  DoneInvoke = 'done.invoke',
  Log = 'xstate.log',
  Init = 'xstate.init',
  Invoke = 'xstate.invoke',
  ErrorExecution = 'error.execution',
  ErrorCommunication = 'error.communication',
  ErrorPlatform = 'error.platform',
  ErrorCustom = 'xstate.error',
  Update = 'xstate.update',
  Pure = 'xstate.pure',
  Choose = 'xstate.choose',
}

export interface RaiseAction<
  TContext,
  TExpressionEvent extends EventObject,
  TEvent extends EventObject = TExpressionEvent,
> extends ActionObject<TContext, TExpressionEvent, TEvent> {
  type: ActionTypes.Raise;
  event: TEvent | SendExpr<TContext, TExpressionEvent, TEvent>;
  delay:
    | number
    | string
    | undefined
    | DelayExpr<TContext, TExpressionEvent>;
  id: string | number | undefined;
}
