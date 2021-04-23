import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "./firebase";
import Order from "./Order";
import { useStateValue } from "./StateProvider";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, []);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      {console.log(orders)}
      <div className="orders_order">
        {orders.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
