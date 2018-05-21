/**
 * Action can be either reversible or irreversible
 */

export type Action = IrreversibleAction | ReversibleAction;

/**
 * * Metadata for Actions
 */
export type ActionMetadata = {
  /**
   * List of tags for the action.
   */
  tags?: string[];

  /**
   * The intent of user to trigger the action.
   */
  userIntent?: string;

  /**
   * Custom properties
   */
  [key: string]: any;
};

export type IrreversibleAction = {
  metadata?: ActionMetadata;
  do: string;
  doArguments: any[];
};

export type ReversibleAction = IrreversibleAction & {
  undo: string;
  undoArguements: any[];
};

export type ActionFunction = (...args: any[]) => Promise<any>;

export type ActionFunctionWithThis = {
  func: ActionFunction;
  thisArg: any;
};

export function isReversibleAction(action: Action): action is ReversibleAction {
  return "undo" in action;
}
