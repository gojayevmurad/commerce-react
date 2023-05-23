import React from "react";
import "./styles/order.scss";

const Orders = () => {
  const orders = [
    {
      items: [
        "6462be07d2d7617c7773dd82",
        "6462be3ad2d7617c7773dd84",
        "6462becbd2d7617c7773dda5",
      ],
      orderNumber: 7531284,
      shippedDate: "30 Mart 2023",
      total: 78,
      status: "delivered",
      statusColor: "green",
    },
    {
      items: ["6462be07d2d7617c7773dd82"],
      orderNumber: 1235312,
      shippedDate: "30 May 2023",
      total: 42,
      status: "Çatdırılma üçün çıxıb",
      statusColor: "orange",
    },
    {
      items: ["6462be07d2d7617c7773dd82", "6462becbd2d7617c7773dda5"],
      orderNumber: 5345367,
      shippedDate: "30 İyun 2023",
      total: 1234,
      status: "İmtina",
      statusColor: "red",
    },
  ];

  return (
    <div className="profile_order">
      <h3>Sifarişlər</h3>
      <ul>
        {orders.map((item, index) => {
          return (
            <li key={index}>
              <div className="order-top">
                <div>
                  {item.items.map((photo) => {
                    return <p>{photo}</p>;
                  })}
                </div>
                <button>SİFARİŞƏ BAX</button>
              </div>
              <div className="order-detail">
                <div>
                  <p>Sifariş nömrəsi</p>
                  <span>{item.orderNumber}</span>
                </div>
                <div>
                  <p>Çatdırılma vaxtı</p>
                  <span>{item.shippedDate}</span>
                </div>
                <div>
                  <p>Cəmi</p>
                  <span>₼{item.total}</span>
                </div>
                <div>
                  <p>Status</p>
                  <span style={{ color: [item.statusColor] }}>
                    {item.status}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Orders;
