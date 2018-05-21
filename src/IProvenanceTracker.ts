import { IProvenanceGraphTraverser } from "./IProvenanceGraphTraverser";
import { StateNode } from "./Node";
import { Action } from "./Actions";
import { IActionFunctionRegistry } from "./IActionFunctionRegistry";

export interface IProvenanceTracker {
  registry: IActionFunctionRegistry;

  /**
   * @param action
   * @param skipFirstDoFunctionCall
   * ! If skipFirstDoFunctionCall is true, the do function will be called only when traversing not during this function.
   */
  applyAction(
    action: Action,
    skipFirstDoFunctionCall: boolean
  ): Promise<StateNode>;
}
