type PaymentMethod = `cash` | `card` | `mobile`;

// interface can not express types like these because interface needs to have a shape like object key-value property to be declared

interface Order {
    id: number;
    method:PaymentMethod;
}

 let method: PaymentMethod = "card";

 const orderObj:Order = {
    id: 1,
    method: `card`
 }

 console.log(orderObj);
 
