import { ActionFunction, ActionFunctionWithThis } from "./Actions";
import { IActionFunctionRegistry } from "./IActionFunctionRegistry";
export class ActionFunctionRegistry implements IActionFunctionRegistry {
  private functionRegistry: { [key: string]: ActionFunctionWithThis } = {};

  register(name: string, func: ActionFunction, thisArg: any = null): void {
    if (this.functionRegistry[name]) {
      throw new Error("Function already registered!");
    }
    this.functionRegistry[name] = { func, thisArg };
  }

  getFunctionByName(name: string): ActionFunctionWithThis {
    if (!this.functionRegistry[name]) {
      throw new Error("Function not defined/registered");
    }
    return this.functionRegistry[name];
  }
}
