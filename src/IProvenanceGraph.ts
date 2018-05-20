import { Handler } from "./Handler";
import { Application } from "./Application";
import { ProvenanceNode, RootNode, NodeIdentifier } from "./Node";

export interface IProvenanceGraph {
  application: Application;
  current: ProvenanceNode;
  root: RootNode;

  addNode(node: ProvenanceNode): void;
  getNode(id: NodeIdentifier): ProvenanceNode;
  emitNodeChangedEvent(node: ProvenanceNode): void;

  on(type: string, handler: Handler): void;
  off(type: string, handler: Handler): void;
}
