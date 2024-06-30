import { event } from "./schemas/event";
import { job } from "./schemas/job";
import { jobTag } from "./schemas/jobTags";
import { post } from "./schemas/post";
import { tag } from "./schemas/tag";

export const schema = {
  types: [post, tag, event, job, jobTag],
};
