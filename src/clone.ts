import { cloneAll } from "gitlab-batch";
import { getConfig } from "./config";

const config = getConfig();

cloneAll({
  gitlabUrl: config.gitlab.gitlabUrl,
  workPath: config.workPath,
  fetchProjectsUrl: config.gitlab.fetchProjectsUrl
});
