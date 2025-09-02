export default function Navbar({ setPage, cartCount }) {
  return (
    <div className="navbar">
      <span style={{ cursor: "pointer" }} onClick={() => setPage("home")}>
        🛒 My E-Commerce Store
      </span>
      <span
        style={{
          float: "right",
          cursor: "pointer",
          fontSize: "18px",
          marginRight: "20px"
        }}
        onClick={() => setPage("cart")}
      >
        🛍️ Cart ({cartCount})
      </span>
    </div>
  );
}