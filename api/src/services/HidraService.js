const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const loaderConfig = require('../config/loaderConfig');

const hidraProto = path.resolve(__dirname, '..', 'contracts', 'hidra.proto');

const hidraPackageDefinition = protoLoader.loadSync(hidraProto, loaderConfig);

const hidra = grpc.loadPackageDefinition(hidraPackageDefinition);

const hidraClient = new hidra.UserService(
  'localhost:3334', 
  grpc.credentials.createInsecure()
);

module.exports = hidraClient;
