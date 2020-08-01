import { resolve } from "path";
import { readFileSync, existsSync } from "fs";
import * as userHome from "user-home";

interface IConfig {
  /**
   * 工作目录
   * 如：/Volumes/RamDisk/gitlab_clone
   */
  workPath: string;
  /**
   * 备份目录
   * 如：/Volumes/RamDisk/gitlab-backup
   */
  backupPath: string;
  gitlab: {
    /**
     * 获取项目列表的 api
     * 如：http://${gitlabUrl}/api/v4/projects?private_token=${token}&per_page=100000&page=1&order_by=id
     */
    fetchProjectsUrl: string;
    /**
     * git 的 URL。
     * 例如1：http://${gitlabUser}:${token}@${gitlabUrl}， 这里提供了用户名密码
     * 例如2：http://${gitlabUrl}
     */
    gitlabUrl: string;
  };
}

export function getConfig(): IConfig {
  let configFile = resolve(userHome, "gitlab-batch-run.config.json");
  if (!existsSync(configFile)) {
    throw new Error(`${configFile} 不存在，请先配置！`);
  }
  return JSON.parse(readFileSync(configFile, { encoding: "utf8" }));
}
