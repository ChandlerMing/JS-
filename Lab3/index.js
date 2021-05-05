const fs = require('fs');
const configGeneration = require('./config_generation.js');
const splitFile = require('./Split_File.js');
const mergeFile = require('./Merge_File.js');

configGeneration(fs);
splitFile(fs, mergeFile);
