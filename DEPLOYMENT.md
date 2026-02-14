# AWS 部署指南

## 前置要求

1. **安装 Node.js**
   - 下载并安装 Node.js (v16+): https://nodejs.org/
   - 安装后重启终端，验证安装：
     ```bash
     node --version
     npm --version
     ```

2. **安装依赖**
   ```bash
   npm install
   # 或使用 pnpm (推荐)
   npm install -g pnpm
   pnpm install
   ```

## 构建生产包

```bash
# 使用 npm
npm run build

# 或使用 pnpm
pnpm build
```

构建完成后，所有静态文件将生成在 `dist` 文件夹中。

## AWS 部署选项

### 选项 1: AWS Amplify Hosting (强烈推荐) ⭐

最适合前端项目的部署方式，零配置、自动 CI/CD、内置 HTTPS。

#### 优势：
- ✅ 一键部署，无需复杂配置
- ✅ 自动 CI/CD（连接 Git 仓库自动部署）
- ✅ 免费 SSL 证书和自定义域名
- ✅ 全球 CDN 加速
- ✅ 原子部署（零停机时间）
- ✅ 即时回滚到任何版本
- ✅ 预览部署（PR 自动生成预览链接）
- ✅ 环境变量管理
- ✅ 表单处理和重定向规则

#### 方法 A: 通过 AWS 控制台部署（最简单）

1. 登录 [AWS Amplify 控制台](https://console.aws.amazon.com/amplify/)
2. 点击 "New app" → "Host web app"
3. 选择代码托管平台（GitHub/GitLab/Bitbucket/CodeCommit）
4. 授权并选择你的仓库和分支
5. Amplify 会自动检测构建设置：
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
6. 点击 "Save and deploy"
7. 等待 3-5 分钟，部署完成！

#### 方法 B: 通过 Amplify CLI 部署

1. **安装 Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. **配置 AWS 凭证**
   ```bash
   amplify configure
   ```

3. **初始化项目**
   ```bash
   amplify init
   # 项目名称: pawbytelabs
   # 环境: production
   # 编辑器: 选择你的编辑器
   # 应用类型: javascript
   # 框架: react
   # 源目录: src
   # 分发目录: dist
   # 构建命令: npm run build
   # 启动命令: npm run dev
   ```

4. **添加托管**
   ```bash
   amplify add hosting
   # 选择: Hosting with Amplify Console (Managed hosting with custom domains, Continuous deployment)
   # 选择: Manual deployment
   ```

5. **发布**
   ```bash
   amplify publish
   ```

#### 自定义域名配置

1. 在 Amplify 控制台中，选择你的应用
2. 点击 "Domain management"
3. 添加你的域名
4. Amplify 会自动配置 SSL 证书和 DNS 记录
5. 按照提示在你的域名提供商处添加 CNAME 记录

#### 环境变量配置

在 Amplify 控制台中：
1. 选择你的应用 → "Environment variables"
2. 添加变量：
   - `VITE_API_URL`: https://api.pawbytelabs.com
   - `VITE_GA_ID`: your-google-analytics-id

---

### 选项 2: AWS S3 + CloudFront

适合需要更多控制权的场景。

#### 步骤：

1. **创建 S3 存储桶**
   ```bash
   aws s3 mb s3://pawbytelabs-website
   ```

2. **上传构建文件**
   ```bash
   aws s3 sync dist/ s3://pawbytelabs-website --delete
   ```

3. **配置 S3 静态网站托管**
   - 在 S3 控制台中启用静态网站托管
   - 设置索引文档: `index.html`
   - 设置错误文档: `index.html` (用于 SPA 路由)

4. **设置存储桶策略**
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::pawbytelabs-website/*"
       }
     ]
   }
   ```

5. **创建 CloudFront 分发**
   - 提供 HTTPS 支持
   - 全球 CDN 加速
   - 自定义域名支持

### 选项 3: AWS EC2

如果需要更多控制权，可以使用 EC2 实例。

#### 步骤：

1. **启动 EC2 实例** (Amazon Linux 2 或 Ubuntu)

2. **安装 Nginx**
   ```bash
   # Amazon Linux 2
   sudo yum install nginx -y
   
   # Ubuntu
   sudo apt update
   sudo apt install nginx -y
   ```

3. **上传构建文件**
   ```bash
   scp -r dist/* ec2-user@your-ec2-ip:/usr/share/nginx/html/
   ```

4. **配置 Nginx**
   编辑 `/etc/nginx/nginx.conf` 或创建新的站点配置：
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /usr/share/nginx/html;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

5. **启动 Nginx**
   ```bash
   sudo systemctl start nginx
   sudo systemctl enable nginx
   ```

### 选项 4: AWS Elastic Beanstalk

适合需要自动扩展的场景。

#### 步骤：

1. **安装 EB CLI**
   ```bash
   pip install awsebcli
   ```

2. **初始化**
   ```bash
   eb init
   ```

3. **创建环境并部署**
   ```bash
   eb create pawbytelabs-env
   eb deploy
   ```

## 自动化部署脚本

创建 `deploy.sh` 脚本：

```bash
#!/bin/bash

# 构建项目
echo "Building project..."
npm run build

# 上传到 S3
echo "Uploading to S3..."
aws s3 sync dist/ s3://pawbytelabs-website --delete

# 清除 CloudFront 缓存 (如果使用)
echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"

echo "Deployment complete!"
```

使用方式：
```bash
chmod +x deploy.sh
./deploy.sh
```

## 成本估算

- **Amplify Hosting**: 
  - 免费套餐: 1000 构建分钟/月 + 15GB 存储 + 5GB 流量
  - 超出后: $0.01/构建分钟 + $0.023/GB 存储 + $0.15/GB 流量
  - 预计成本: $0-2/月（低流量网站）
- **S3 + CloudFront**: ~$1-5/月
- **EC2 t2.micro**: ~$8-10/月

## 推荐配置

对于 PawByteLabs 网站，**强烈推荐使用 AWS Amplify Hosting**：
- ✅ 零配置，开箱即用
- ✅ 自动 CI/CD，推送代码即部署
- ✅ 免费 SSL 证书
- ✅ 全球 CDN 加速
- ✅ 原子部署，零停机
- ✅ 一键回滚
- ✅ 预览部署（PR 预览）
- ✅ 成本低廉（免费套餐足够）

## 域名配置

1. 在 Route 53 或你的域名提供商处配置 DNS
2. 将域名指向 CloudFront 分发或 S3 网站端点
3. 在 CloudFront 中配置自定义 SSL 证书 (使用 AWS Certificate Manager 免费申请)

## 环境变量

如果需要配置环境变量，创建 `.env.production` 文件：

```env
VITE_API_URL=https://api.pawbytelabs.com
VITE_GA_ID=your-google-analytics-id
```

## 监控和日志

- 启用 CloudFront 访问日志
- 配置 CloudWatch 监控
- 设置告警通知

## 故障排查

如果部署后页面无法访问：
1. 检查 S3 存储桶策略是否正确
2. 确认 CloudFront 分发状态为 "Deployed"
3. 检查安全组和网络 ACL 设置 (EC2)
4. 验证 Nginx 配置和服务状态 (EC2)

---

需要帮助？联系 AWS 支持或查看文档：
- AWS S3: https://docs.aws.amazon.com/s3/
- AWS CloudFront: https://docs.aws.amazon.com/cloudfront/
- AWS Amplify: https://docs.amplify.aws/
