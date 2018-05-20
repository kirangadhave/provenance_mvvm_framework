import { Action } from "./Actions";

/**
 * String identifier for nodes.
 */
export type NodeIdentifier = string;

export type NodeMetadata = {
  createdBy: string;
  createdOn: string;
  [key: string]: any;
};

/**
 * Attached to nodes
 */
export type Artifacts = {
  [key: string]: any;
};

/**
 * Basic type of node.
 */
export type RootNode = {
  id: NodeIdentifier;
  label: string;
  metadata: NodeMetadata;
  children: StateNode[];
  artifacts: Artifacts;
};

export type StateNode = RootNode & {
  action: Action;
  actionResult: any;
  parent: ProvenanceNode;
};

export type ProvenanceNode = RootNode | StateNode;
