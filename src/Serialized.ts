import { Application } from "./Application";
import { Action } from "./Actions";
import { NodeIdentifier, NodeMetadata, Artifacts } from "./Node";

export type SerializedProvenanceGraph = {
  nodes: SerializedProvenanceNode[];
  root: NodeIdentifier;
  application: Application;
  current: NodeIdentifier;
};

export type SerializedRootNode = {
  id: NodeIdentifier;
  children: NodeIdentifier[];
  label: string;
  metadata: NodeMetadata;
  artifacts: Artifacts;
};

export type SerializedStateNode = SerializedRootNode & {
  parent: NodeIdentifier;
  action: Action;
  actionResult: any;
};

export type SerializedProvenanceNode = SerializedStateNode | SerializedRootNode;
