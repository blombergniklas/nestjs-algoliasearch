var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
__markAsModule(exports);
__export(exports, {
  getIndexToken: () => getIndexToken
});
const getIndexToken = (indexName) => `${typeof indexName === "string" ? indexName : indexName.name}algolaIndex`;
