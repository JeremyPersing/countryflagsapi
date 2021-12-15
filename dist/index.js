"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const path_1 = __importDefault(require("path"));
const notFound_1 = __importDefault(require("./middleware/notFound"));
const pages_1 = __importDefault(require("./routes/pages"));
const flags_1 = __importDefault(require("./routes/flags"));
const serve_favicon_1 = __importDefault(require("serve-favicon"));
const app = (0, express_1.default)();
function main() {
    try {
        app.use((0, cors_1.default)());
        app.use((0, helmet_1.default)({
            contentSecurityPolicy: {
                directives: Object.assign(Object.assign({}, helmet_1.default.contentSecurityPolicy.getDefaultDirectives()), { "script-src": ["'self'", "cdn.jsdelivr.net"], "script-src-attr": ["'unsafe-inline'"] }),
            },
        }));
        app.use((0, compression_1.default)());
        app.use(express_1.default.json());
        app.use((0, serve_favicon_1.default)(path_1.default.join(__dirname, "../public/images/favicon.ico")));
        app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
        app.use("/", flags_1.default);
        app.use("/", pages_1.default);
        app.use("*", notFound_1.default);
        const port = process.env.PORT || 4000;
        app.listen(port, () => console.log(`listening port ${port}`));
    }
    catch (error) {
        console.log("error", error);
        app.use("/", pages_1.default);
    }
}
main();
