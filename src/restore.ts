import { pushAll } from "gitlab-batch";
import { getConfig } from "./config";

const config = getConfig();

pushAll({
  gitlabUrl: config.gitlab.gitlabUrl,
  workPath: config.backupPath
});
