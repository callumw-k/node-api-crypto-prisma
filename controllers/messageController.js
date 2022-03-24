"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMessage = exports.getMessage = void 0;
const prisma_1 = __importDefault(require("../lib/prisma/prisma"));
const getMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const messages = yield prisma_1.default.message.findMany({ take: -2 });
    res.json(messages);
});
exports.getMessage = getMessage;
const postMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messages = req.body;
        const result = yield prisma_1.default.message.create({
            data: {
                messageTitle: messages.title,
                messageBody: messages.body,
            },
        });
        res.json(result);
    }
    catch (e) {
        console.log(e);
    }
});
exports.postMessage = postMessage;
