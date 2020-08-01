import { writeFileSync } from "fs";
import { resolve } from "path";

const configFile = resolve(__dirname, "../../dist/config.json");
writeFileSync(
  configFile,
  JSON.stringify(
    {
      workPath: "工作目录",
      backupPath: "备份目录",
      gitlab: {
        // 获取项目列表的 api
        fetchProjectsUrl: `http://HOST/api/v4/projects?private_token=TOKEN&per_page=50000&page=1&order_by=id`,
        // 生产环境
        gitlabUrl: `http://USER:TOKEN@HOST`
      }
    },
    null,
    2
  )
);
