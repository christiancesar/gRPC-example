const path = require('path')
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const implementations = require('./implementations');
require('./database');

const nixProto = path.resolve(__dirname, 'contracts', 'nix.proto');

var packageDefinition = protoLoader.loadSync(nixProto, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const proto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

server.addService(proto.PurchaseService.service, implementations);
server.bind('0.0.0.0:3335', grpc.ServerCredentials.createInsecure())
server.start();
console.log("Server Nix online");