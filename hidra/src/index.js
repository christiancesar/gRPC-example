const path = require('path')
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const implementations = require('./implementations');
require('./database');

const hidraProto = path.resolve(__dirname, 'contracts', 'hidra.proto');

var packageDefinition = protoLoader.loadSync(hidraProto, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const proto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

server.addService(proto.UserService.service, implementations);
server.bind('0.0.0.0:3334', grpc.ServerCredentials.createInsecure())
server.start();

console.log("Server Hidra online");