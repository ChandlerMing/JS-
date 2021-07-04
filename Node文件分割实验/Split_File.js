function splitFile(fs, callback) {

  // 读取配置文件信息
  const config = JSON.parse(fs.readFileSync('./config_20181113401_zqm.json', 'utf-8'));
  // 获取目标文件路径和输出文件路径
  const sourcePath = config.inputPath;
  const targetPath = config.outputPath;
  // 获取输入文件名称
  const inputFile = config.inputFile;
  // 获取文件分片名称
  const sectionPrefix = config.sectionPrefix;
  // 获取文件分片大小（字节）
  const sectionSize = config.sectionSize;

  // 迭代器
  let count = 1;
  console.log('开始分片');
  // 创建读取流
  const readStream = fs.createReadStream(sourcePath + inputFile, { highWaterMark: sectionSize * 1024 });

  readStream.on('data', (chunk) => {
    // 当有数据流出时，写入数据
    const writeStream = fs.createWriteStream(`${targetPath}${sectionPrefix}${count++}.${inputFile.split('.').pop()}`);
    writeStream.write(chunk);
    writeStream.end();
  })

  readStream.on('end', () => {
    // 当没有数据时，关闭数据流
    console.log('分片完成');
    callback(fs);
  });

}

module.exports = splitFile;