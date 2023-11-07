"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSessionInfoDto = exports.SignInBodyDto = exports.SignUpBodyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class SignUpBodyDto {
}
exports.SignUpBodyDto = SignUpBodyDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'test@mail.ru',
    }),
    __metadata("design:type", String)
], SignUpBodyDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1234',
    }),
    __metadata("design:type", String)
], SignUpBodyDto.prototype, "password", void 0);
class SignInBodyDto {
}
exports.SignInBodyDto = SignInBodyDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'test@mail.ru',
    }),
    __metadata("design:type", String)
], SignInBodyDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1234',
    }),
    __metadata("design:type", String)
], SignInBodyDto.prototype, "password", void 0);
class GetSessionInfoDto {
}
exports.GetSessionInfoDto = GetSessionInfoDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetSessionInfoDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetSessionInfoDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetSessionInfoDto.prototype, "iat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GetSessionInfoDto.prototype, "exp", void 0);
//# sourceMappingURL=dto.js.map