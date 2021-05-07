function mergeFile(fs) {

  // 读取配置文件信息
  const config = JSON.parse(fs.readFileSync('./config_20181113401_zqm.json', 'utf-8'));
  // 获取目标文件路径和输出文件路径
  const sourcePath = config.outputPath;
  const targetPath = config.inputPath;
  // 获取输入输出文件名称
  const inputFile = config.inputFile;
  const outputFile = config.outputFile;
  // 获取分片数量和分片前缀
  const sectionNum = config.sectionNum;
  const sectionPrefix = config.sectionPrefix;

  // 读取分片
  console.log('读取分片：');
  let arr = [];
  for (let i = 1; i <= sectionNum; i++) {
    arr.push(sectionPrefix + i + '.' + inputFile.split('.').pop());
  }
  console.log(arr);

  // 合并分片
  // 创建写入流
  const writeStream = fs.createWriteStream(`${targetPath}${outputFile}`);
  writeStream.on('finish', () => {
    console.log('写入完成');
  })

  const write = function (writeStream, arr) {
    if (arr.length === 0) {
      writeStream.end();
      return;
    }
    const curSection = arr.shift();
    const readStream = fs.createReadStream(`${sourcePath}${curSection}`);
    readStream.on('data', (chunk) => {
      writeStream.write(chunk)
    })
    readStream.on('end', () => {
      write(writeStream, arr);
    })
  }

  write(writeStream, arr)
}

module.exports = mergeFile;