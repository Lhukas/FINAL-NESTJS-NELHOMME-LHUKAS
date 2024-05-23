"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const user_module_1 = require("./user/user.module");
const task_module_1 = require("./task/task.module");
exports.routes = [
    {
        path: 'user',
        module: user_module_1.UserModule,
    },
    {
        path: 'task',
        module: task_module_1.TaskModule,
    },
];
//# sourceMappingURL=app.routes.js.map