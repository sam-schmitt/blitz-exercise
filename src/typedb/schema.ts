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

export const schema: BormSchema = {
	entities: {
		Tree: {
			idFields: ["id"],
			defaultDBConnector: { id: "default" }, // in the future multiple can be specified in the config file. Either they fetch full schemas or they will require a relation to merge attributes from different databases
			dataFields: [{ ...id }, { ...name, rights: ["CREATE", "UPDATE"] }],
			linkFields: [
				{
					path: "parent-hoods",
					relation: "parenthood",
					cardinality: "MANY",
					plays: "parent",
					target: "relation",
				},
				{
					path: "parent-hoods",
					relation: "parenthood",
					cardinality: "MANY",
					plays: "child",
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
		childhood: {
			idFields: ["id"],
			defaultDBConnector: { id: "default", path: "childhood" },
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
	},
};
