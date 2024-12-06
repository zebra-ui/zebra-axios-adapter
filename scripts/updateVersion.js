const fs = require('fs').promises
const path = require('path')
const signale = require('signale')

// 更新路径以匹配你的目录结构
const zebraUiPackagePath = path.join(
  __dirname,
  '../example/v3-normal/uni_modules/zebra-axios-adapter/package.json'
)
const rootPackagePath = path.join(__dirname, '../package.json')

async function updateVersion() {
  try {
    // 读取 zebra-ui 的 package.json 文件
    const zebraUiData = await fs.readFile(zebraUiPackagePath, 'utf8')
    const zebraUiPackage = JSON.parse(zebraUiData)
    const newVersion = zebraUiPackage.version

    // 更新根目录的 package.json
    const rootData = await fs.readFile(rootPackagePath, 'utf8')
    const rootPackage = JSON.parse(rootData)
    rootPackage.version = newVersion
    await fs.writeFile(
      rootPackagePath,
      JSON.stringify(rootPackage, null, 4),
      'utf8'
    )
    signale.success(
      `根目录的 package.json 中的 version 字段已成功更新为: ${newVersion}`
    )

    signale.success(
      `src/package.json 中的 version 字段已成功更新为: ${newVersion}`
    )
  } catch (error) {
    signale.error('处理过程中发生错误:', error.message)
  }
}

updateVersion()
