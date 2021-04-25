const path = require('path')
const grpc = require('grpc'); 
const protoLoader = require('@grpc/proto-loader');


const userProto = path.resolve(__dirname, 'contract', 'user.proto');

var packageDefinition = protoLoader.loadSync(userProto, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});