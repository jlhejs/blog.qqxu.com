---
title: 【NodeJS】工具模块 joi
date: 2022-12-21T19:00:00Z
lang: zh
type: web
duration: 15分钟
description: 我不在我的项目中使用 Prettier 的理由。
---

### joi是什么

joi 是nodejs的一个工具模块，主要用于JavaScript对象的校验。它是一种简单易用的javacript对象约束描述语言，可以轻松解决nodejs开发中的各种参数的校验。

### 常用验证
``` js
// 3 - 30 个 数字、字符
username: Joi.string().alphanum().min(3).max(30).required();

// 3 - 30 位 字母数字组合密码
password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/);

// string || number 都可以通过
access_token: [Joi.string(), Joi.number()];

// 生日限制
birthyear: Joi.number().integer().min(1900).max(2018);

// email 限制
email: Joi.string().email();

// URI限制
website: Joi.string().uri({ scheme: [ 'git', /git+https?/ ] });

// ==== 允许为空/ 否认不允许为空 ====
search: Joi.string().allow('');

// 验证枚举值，如果不传，默认为all
type: Joi.string().valid('disabled', 'normal', 'all').default('all');

// 开始时间 会自动格式化
startTime: Joi.date().min('1-1-1974').max('now');

// 结束时间 必须大于开始时间，小于2100-1-1
endTime: Joi.when(Joi.ref('startTime'), { is: Joi.date().required(), then: Joi.date().max('1-1-2100') });

// 页码 限制最小值
page: Joi.number().integer().min(1).default(1);
pageSize: Joi.number().integer().default(8);
deleteWhenLtTen: Joi.number().integer().max(10).strip();

// 数组中包含某个字段 && 数字
arrayString: Joi.array().items(
    // 数组中必须包含 name1
    Joi.string().label('name1').required(),
    // 数组中必须包含 数字
    Joi.number().required(),
    // 除掉【以上类型的以外字段】---数组中可以包含其他类型，如bool
    Joi.any().strip()
);

// 数组对象, 如需其参考以上字段
arrayObject: Joi.array().items(
  Joi.object().keys({
    age: Joi.number().integer().max(200),
    sex: Joi.boolean()
  })
);

with('isA', 'AVal'); //意思是，isA 和 AVal 这两字段如果填写了isA，也必须要填写AVal
with('isB', 'BVal'); //道理同上
without('isA', 'isB'); //意思是 isA 和 isB 只能填写其中一个
or('isA', 'isB'); //意思是 isA 和 isB 这两字段至少填写其一
```

### 简单示例
``` js
// 导入joi模块
const joi = require('joi')

// 定义验证规则
const schema = joi.object({
  // username必须是字符串类型、最小长度是2、最大长度是6、必填项、自定义验证失败错误信息
  username: joi.string().min(2).max(6).required().error(new Error('用户名格式不正确')),
  // email必须是字符串类型、必须符合邮箱格式、必填项、自定义验证失败错误信息
  email: joi.string().email().required().error(new Error('邮箱格式不正确')),
  // pwd必须是字符串类型、必须符合指定的正则规则、自定义验证失败错误信息
  pwd: joi.string().regex(/^[a-zA-Z0-9]+$/).error(new Error('密码格式不正确')),
  // sex必须是数字类型、值是0或1、必填项、自定义验证失败错误信息
  sex: joi.number().valid(0, 1).required().error(new Error('性别格式不正确')),
  // 可以根据sex的值来定义name2的类型属性
  name2: joi.when('sex',
    {
      is: 1,
      then: joi.string().required().error(new Error('name2格式不正确'))
    }),

  name3: joi.string().max(2).allow('').error(new Error('name3格式不正确')),
  // 针对数组的操作
  orderItems: joi.array().items(
    joi.object().keys({
      thirdOrderItemId: joi.string().required().error(new Error('订单明细ID不能为空')),
      productName: joi.string().required().error(new Error('商品名称不能为空'))
    })
  )
})

const body = {
  username: 'adm',
  email: 'admin@qq.com',
  pwd: 'abc123',
  sex: 1,
  phone: '13',
  name2: '1',
  name3: '',
  orderItems: '[{\"thirdOrderItemId\": \"123\",\"productName\": \"151515\"}]'
}

body.orderItems = JSON.parse(body.orderItems) // 针对数组操作必须是json对象，如果是json字符串需要自己解析一次。

async function run() {
    try {
        /*验证*/
        await schema.validateAsync(body, { allowUnknown: true, abortEarly: true }); 
        console.log('验证成功');
    } catch (e) {
        console.log(e.message);
    }
}

run();
```

### pm2安装

使用npm命令：

## pm2常用命令

1.  进入bin目录启动：pm2 start www / pm2 start app.js
2.  pm2 start app.js --name="fx67ll" 启动并命名为fx67ll，没有命名的话后续可以用id替代name
3.  pm2 start app.js --watch 当文件变化时自动重启应用
4.  pm2 start script.sh 启动bash脚本
5.  pm2 list 查看所有启动的应用列表
6.  pm2 monit 显示每个应用程序的CPU和内存占用情况
7.  pm2 show \[app-id/app-name\] 显示指定应用程序的所有信息
8.  pm2 log 显示应用程序的日志信息
9.  pm2 log \[app-id/app-name\] 显示指定应用程序的日志信息
10.  pm2 flush 清空所有日志文件
11.  pm2 stop all 停止所有应用程序
12.  pm2 stop \[app-id/app-name\] 停止指定应用程序
13.  pm2 restart all 重启所有应用程序
14.  pm2 restart \[app-id/app-name\] 重启指定应用程序
15.  pm2 delete all 关闭并删除所有应用程序
16.  pm2 delete \[app-id/app-name\] 删除指定的应用程序
17.  pm2 reset \[app-id/app-name\] 重置重启数量
18.  pm2 startup 创建开机自启动命令
19.  pm2 save 保存当前应用列表
20.  pm2 resurrect 重新加载保存的应用列表
21.  pm2 update 保存进程，杀死并重启进程，一般用于更新pm2版本
22.  pm2 ecosystem 生成一个示例json配置文件
23.  *更多命令*可以参考pm2官方文档

### 使用均衡负载模式(cluster mode)的相关命令

1.  pm2 start app.js -i n 均衡负载模式(cluster mode)启动n个app.js应用实例
2.  pm2 reload all 重启均衡负载模式(cluster mode)下的所有应用
3.  pm2 gracefulReload all Graceful reload all apps in cluster mode
4.  pm2 scale \[app-id/app-name\] 10 将指定的应用程序拓展到10个实例

### 0秒停机重新加载(集群模式下，可以达到重启时不停止服务)

1.  pm2 reload app.js 重新启动所有进程，始终保持至少一个进程在运行
2.  pm2 gracefulReload all 优雅地以集群模式重新加载所有应用程序

## pm2配置文件

### 生成示例配置文件

```auto
// 生成一个示例json配置文件
pm2 ecosystem
// pm2初始化
pm2 init
```

### 配置项

1.  基础类
    +   name：进程名
    +   script：node启动文件的路径
    +   cwd ：项目所在的目录
    +   args ：通过命令行传递给node启动文件的参数
    +   interpreter ：编译器的绝对路径（默认node）
    +   interpreter\_args ：传给编译器的参数
    +   node\_args：传给node的参数
2.  进阶类
    +   instances ：进程数
    +   exec\_mode ：进程的模式（cluster或fork）
    +   *PS:* cluster模式利用node的child\_process模块孵化多个子进程，主进程监听端口，子进程只和主进程通信，从而达到单个端口多个进程；通过轮转方式实现负载均衡
    +   watch ：布尔值或文件数组，允许开启监听文件改动重启
    +   ignore\_watch ：不监听的文件
    +   max\_memory\_restart ：超过该内存就自动重启
    +   env ：应用中的默认环境变量
    +   env\_ ：命令行中可传入的环境变量，覆盖默认环境变量
    +   source\_map\_support ：默认true，支持sourcemap文件
3.  日志类
    +   log\_date\_format ：日志时间格式
    +   error\_file ：错误日志存放路径
    +   out\_file ：全部日志存放路径
    +   combine\_logs：是否将不同id的进程日志合并
    +   merge\_logs：同上
4.  控制流
    +   min\_uptime ：pm2认为进程在线的最小时长
    +   listen\_timeout ：如果app没有发送ready信号，间隔多长时间reload
    +   kill\_timeout ：从告诉进程要关闭到强制关闭进程的间隔时间
    +   wait\_ready：是否等待进程发送ready信号
    +   max\_restarts ：最大不稳定重启次数（不稳定指的是小于1s或者小于的min\_uptime重启）
    +   restart\_delay：进程掉线后，等待多长时间重启
    +   autorestart： 是否开启自动重启

配置项实践中需要注意的内容

1.  script：若使用cluster模式，必须是启动文件入口，不可通过npm启动
2.  max\_restarts：指不稳定重启，即小于1s或min\_uptime的重启，要结合min\_uptime配置才起效
3.  listen\_timeout：当cluster模式时，这个值要大于一个进程启动所需时间，否则reload时会造成短暂的服务不可用

### 配置文件示例

```auto
module.exports = {
    apps : [{
        name      : 'api',      //应用名
        script    : 'app.js',   //应用文件位置
        env: {
            PM2_SERVE_PATH: ".",    //静态服务路径
            PM2_SERVE_PORT: 8080,   //静态服务器访问端口
            NODE_ENV: 'development' //启动默认模式
        },
        env_production : {
            NODE_ENV: 'production'  //使用production模式 pm2 start ecosystem.config.js --env production
        },
        instances:"max",          //将应用程序分布在所有CPU核心上,可以是整数或负数
        watch:true,               //监听模式
        output: './out.log',      //指定日志标准输出文件及位置
        error: './error.log',     //错误输出日志文件及位置，pm2 install pm2-logrotate进行日志文件拆分
        merge_logs: true,         //集群情况下，可以合并日志
        log_type:"json",          //日志类型
        log_date_format: "DD-MM-YYYY",  //日志日期记录格式
    }],
    deploy : {
        production : {
            user : 'node',                      //ssh 用户
            host : '212.83.163.1',              //ssh 地址
            ref  : 'origin/master',             //GIT远程/分支
            repo : 'git@github.com:repo.git',   //git地址
            path : '/var/www/production',       //服务器文件路径
            post-deploy : 'npm install && pm2 reload ecosystem.config.js --env production'  //部署后的动作
        }
    }
};
```

### 配置启动命令（package.json）

```auto
# pm2-server工程的环境变量，目的是区分各个环境的应用启动路径
# cross-env NODE_ENV=development

# pm2的启动命令
# pm2 start pm2-conf/ecosystem.config.js

# 传递给pm2的参数，-- only  <name>，--env <env name>
# --only  detective  --env test

cross-env NODE_ENV=development   pm2 start pm2-conf/ecosystem.config.js   --only  detective  --env test
```