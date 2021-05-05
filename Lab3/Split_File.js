function splitFile(fs, callback) {

  // 读取配置文件信息
  const config = JSON.parse(fs.readFileSync('./config_20181113401_zqm.json', 'utf-8'));
  // 获取目标文件路径和输出文件路径
  const sourcePath = config.input;
  const targetPath = config.output;
  // 获取文件分片名称
  const sectionPrefix = config.sectionPrefix;
  // 获取文件分片大小（字节）
  const sectionSize = config.sectionSize;

  // 迭代器
  let count = 1;
  console.log('开始分片');
  // 创建读取流
  const readStream = fs.createReadStream(sourcePath, { highWaterMark: sectionSize * 1024 });
  // fs.createReadStream(sourcePath, { highWaterMark: sectionSize * 1024 }).pipe( fs.createWriteStream(`${targetPath}/${sectionPrefix}${count++}.png`))

  readStream.on('data', (chunk) => {
    // 当有数据流出时，写入数据
    const writeStream = fs.createWriteStream(`${targetPath}/${sectionPrefix}${count++}.png`);
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