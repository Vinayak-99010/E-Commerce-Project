export default function Cart({ cart, addToCart, removeFromCart, setPage }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>🛒 Cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#fff",
                marginBottom: "12px",
                padding: "12px",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "60px", height: "60px", borderRadius: "8px" }}
              />
              <div style={{ flex: "1", marginLeft: "10px" }}>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>
              <div>
                <button onClick={() => removeFromCart(item)}>-</button>
                <span style={{ margin: "0 8px" }}>{item.quantity}</span>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
          <button onClick={() => setPage("checkout")}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}