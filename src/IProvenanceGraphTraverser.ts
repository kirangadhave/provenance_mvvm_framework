import { NodeIdentifier, ProvenanceNode } from "./Node";
import { IProvenanceGraph } from "./IProvenanceGraph";

export interface IProvenanceGraphTraverser {
  graph: IProvenanceGraph;

  toStateNode(id: NodeIdentifier): Promise<ProvenanceNode>;
}
