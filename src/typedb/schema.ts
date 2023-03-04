import { v4 as uuidv4 } from "uuid";

import type { BormSchema, DataField } from "@blitznocode/blitz-orm";

export const name: DataField = {
	shared: true,
	path: "name",
	cardinality: "ONE",
	contentType: "TEXT",
};

export const id: DataField = {
	shared: true,
	path: "id",
	cardinality: "ONE",
	default: { type: "function", value: () => uuidv4() },
	validations: { required: true, unique: true },
	contentType: "ID",
	rights: ["CREATE"],
};

export const label: DataField = {
	shared: true,
	path: "name",
	cardinality: "ONE",
	contentType: "TEXT",
};

export const placeholder: DataField = {
	shared: true,
	path: "name",
	cardinality: "ONE",
	contentType: "TEXT",
};

export const contentType: DataField = {
	shared: true,
	path: "name",
	cardinality: "ONE",
	contentType: "TEXT",
};

export const schema: BormSchema = {
	entities: {
		Tree: {
			idFields: ["id"],
			defaultDBConnector: { id: "default" }, // in the future multiple can be specified in the config file. Either they fetch full schemas or they will require a relation to merge attributes from different databases
			dataFields: [{ ...id }, { ...name, rights: ["CREATE", "UPDATE"] }],
			linkFields: [
				{
					path: "parenthoods",
					relation: "parenthood",
					cardinality: "MANY",
					plays: "parent",
					target: "relation",
				},
				{
					path: "references",
					relation: "parenthood",
					cardinality: "MANY",
					plays: "referer",
					target: "relation",
				},
				{
					path: "childhoods",
					relation: "parenthood",
					cardinality: "ONE",
					plays: "child",
					target: "relation",
				},
				{
					path: "referring",
					relation: "reference",
					cardinality: "ONE",
					plays: "referee",
					target: "relation",
				},
				{
					path: "content",
					relation: "tree-content",
					cardinality: "ONE",
					plays: "tree-owner",
					target: "relation",
				},
			],
		},
		Content: {
			idFields: ["id"],
			defaultDBConnector: { id: "default" }, // in the future multiple can be specified in the config file. Either they fetch full schemas or they will require a relation to merge attributes from different databases
			dataFields: [
				{ ...id },
				{
					...label,
					...placeholder,
					...contentType,
					rights: ["CREATE", "UPDATE"],
				},
			],
			linkFields: [
				{
					path: "tree-contents",
					relation: "tree-content",
					cardinality: "ONE",
					plays: "content",
					target: "relation",
				},
			],
		},
	},
	relations: {
		parenthood: {
			idFields: ["id"],
			defaultDBConnector: { id: "default", path: "parenthood" },
			// defaultDBConnector: { id: 'tdb', path: 'User·Account' }, //todo: when Dbpath != relation name
			dataFields: [{ ...id }],
			roles: {
				parent: {
					cardinality: "ONE",
				},
				child: {
					cardinality: "ONE",
				},
			},
		},
		reference: {
			idFields: ["id"],
			defaultDBConnector: { id: "default", path: "reference" },
			// defaultDBConnector: { id: 'tdb', path: 'User·Account' }, //todo: when Dbpath != relation name
			dataFields: [{ ...id }],
			roles: {
				referer: {
					cardinality: "ONE",
				},
				referee: {
					cardinality: "ONE",
				},
			},
		},
		treeContent: {
			idFields: ["id"],
			defaultDBConnector: { id: "default", path: "tree-content" },
			// defaultDBConnector: { id: 'tdb', path: 'User·Account' }, //todo: when Dbpath != relation name
			dataFields: [{ ...id }],
			roles: {
				treeOwner: {
					cardinality: "ONE",
				},
				content: {
					cardinality: "ONE",
				},
			},
		},
	},
};
