# 安装

```sh
npm i gitlab-batch-run
```

# 配置

`gitlab-batch-run.config.json`

```json
{
  "workPath": "/Volumes/RamDisk/gitlab_clone",
  "gitlab": {
    // 获取项目列表的 api
    "fetchProjectsUrl": "http://IP:PORT/api/v4/projects?private_token=TOKEN&per_page=50000&page=1&order_by=id",

    // 生产环境
    "gitlabUrl": "http://USER:TOKEN@IP:PORT"
  }
}
```
