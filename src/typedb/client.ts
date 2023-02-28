import BormClient from "@blitznocode/blitz-orm";

import { config } from "./config";
import { schema } from "./schema";

const bormClient = new BormClient({
	schema,
	config,
});

export default bormClient;
