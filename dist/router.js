"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const users_1 = require("./controller/users");
const router = (0, express_1.Router)();
router.get('/health-check', (req, res) => {
    res.send('I am OK');
});
router.use('/config', controller_1.ProductRoutes);
router.use('/users', users_1.UserRoutes);
exports.default = router;
//# sourceMappingURL=router.js.map