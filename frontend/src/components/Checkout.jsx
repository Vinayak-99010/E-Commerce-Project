import { useState } from "react";

export default function Checkout({ cart, setCart, setPage }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    payment: "cod"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert(`🎉 Thank you ${form.name}! Your order has been placed.`);
    setCart([]);
    setPage("home");
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "400px",
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        }}
      >
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
        />

        <label>Address:</label>
        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
        />

        <label>Payment Method:</label>
        <select
          name="payment"
          value={form.payment}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "12px" }}
        >
          <option value="cod">Cash on Delivery</option>
          <option value="card">Credit/Debit Card</option>
          <option value="upi">UPI</option>
        </select>

        <h3>Total: ₹{total}</h3>
        <button
          type="submit"
          style={{
            background: "#ff5733",
            color: "#fff",
            padding: "10px",
            width: "100%",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Place Order
        </button>
      </form>
    </div>
  );
}