const path = require('path')
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const loaderConfig = require('../config/loaderConfig');

const nixProto = path.resolve(__dirname, '..', 'contracts', 'nix.proto');

const nixPackageDefinition = protoLoader.loadSync(nixProto, loaderConfig);

const nix = grpc.loadPackageDefinition(nixPackageDefinition);

const nixClient = new nix.PurchaseService('localhost:3335', grpc.credentials.createInsecure());

module.exports = nixClient;