"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextModule = void 0;
const common_1 = require("@nestjs/common");
const controller_1 = require("./controller");
const util_module_1 = require("../util/util.module");
const service_1 = require("./service");
const entity_module_1 = require("./entity/entity.module");
let ContextModule = exports.ContextModule = class ContextModule {
};
exports.ContextModule = ContextModule = __decorate([
    (0, common_1.Module)({
        imports: [entity_module_1.EntityModule, util_module_1.UtilModule],
        controllers: [
            controller_1.CarbonController,
            controller_1.CreditController,
            controller_1.GamificationController,
            controller_1.LoginController,
            controller_1.RegisterController,
            controller_1.UserController,
        ],
        providers: [
            service_1.CarbonService,
            service_1.CreditService,
            service_1.GamificationService,
            service_1.LoginService,
            service_1.RegisterService,
        ],
    })
], ContextModule);
//# sourceMappingURL=context.module.js.map