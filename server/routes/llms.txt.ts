import { queryCollection } from "@nuxt/content/server";

import { llmsTxt } from "~/utils/llmsTxt";

export default defineEventHandler(async (event) => {
  const docs = await queryCollection(event, "docs")
    .select("path", "title", "description", "stem")
    .order("stem", "ASC")
    .all();
  setHeader(event, "content-type", "text/markdown; charset=utf-8");
  return llmsTxt(docs);
});
