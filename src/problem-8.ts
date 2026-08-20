enum OrderStatus {
    Placed = `Placed`,
    Shipped = `Shipped`,
    Delivered = `Delivered`,
    Cancelled = `Cancelled`
}

const printOrderStatus = (orderStatus : OrderStatus): string => {
    const currentStatus = orderStatus;
    return `Current status: ${currentStatus}`;
}
