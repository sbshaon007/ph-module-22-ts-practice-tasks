"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Placed"] = "Placed";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
const printOrderStatus = (orderStatus) => {
    const currentStatus = orderStatus;
    return `Current status: ${currentStatus}`;
};
//# sourceMappingURL=problem-8.js.map