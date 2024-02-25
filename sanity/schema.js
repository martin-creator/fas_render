import { event } from "./schemas/event";
import { post } from "./schemas/post";
import { tag } from "./schemas/tag";

export const schema = {
  types: [post, tag, event],
};
