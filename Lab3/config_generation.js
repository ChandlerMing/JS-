function configGeneration(fs) {
  // 配置信息
  const configFileName = 'config_20181113401_zqm.json',
    sectionSize = 2,
    sectionPrefix = '20181113401_zqm_section_',
    inputPath = './input/',
    outputPath = './output/',
    inputFile = 'input.png',
    outputFile = 'output.png'
  // 计算分片数量
  const stats = fs.statSync(inputPath+inputFile);
  const fileSize = stats.size;
  const sectionNum = Math.ceil(fileSize / (1024 * sectionSize));
  // 集成配置信息
  const config = {
    sectionSize,
    sectionNum,
    sectionPrefix,
    inputPath,
    outputPath,
    inputFile,
    outputFile
  }
  console.log(`文件大小为：${fileSize} 字节，分片数量为${sectionNum}片`);
  // 写入配置文件
  fs.writeFileSync(`./${configFileName}`, JSON.stringify(config));
  console.log('配置文件生成成功');
}

module.exports = configGeneration;