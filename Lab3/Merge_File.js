const { RSA_NO_PADDING } = require("constants");

function mergeFile(fs) {
  // 读取配置文件信息
  const config = JSON.parse(fs.readFileSync('./config_20181113401_zqm.json', 'utf-8'));
  // 获取目标文件路径和输出文件路径
  const sourcePath = config.output;
  const targetPath = config.input;

  // 读取分片
  console.log('读取分片：');
  const arr = fs.readdirSync(sourcePath);
  console.log(arr);

  // 合并分片
  // 创建写入流
  const writeStream = fs.createWriteStream(`${targetPath}/output.png`);
  while (arr.length >= 0) {
    const curSection = arr.shift();
    fs.createReadStream(`${sourcePath}/${curSection}`).pipe(writeStream, { end: false });
  }

}

module.exports = mergeFile;