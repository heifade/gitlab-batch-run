import { pullAll } from "gitlab-batch";
import { getConfig } from "./config";

const config = getConfig();

pullAll({
  gitlabUrl: config.gitlab.gitlabUrl,
  workPath: config.workPath,
  fetchProjectsUrl: config.gitlab.fetchProjectsUrl
});
