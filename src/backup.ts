import { cloneAll } from "gitlab-batch";
import { getConfig } from "./config";

const config = getConfig();

cloneAll({
  gitlabUrl: config.gitlab.gitlabUrl,
  workPath: config.backupPath,
  fetchProjectsUrl: config.gitlab.fetchProjectsUrl
});
