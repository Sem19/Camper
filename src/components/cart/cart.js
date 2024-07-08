import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Modal } from "@mui/material";
import styles from "./cart.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCartItems } from "../../feature/cart/cartSlice";

const Cart = ({ cartItems }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = cartItems.reduce((acc, item) => {
      acc[item._id] = quantities[item._id] || 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [cartItems]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const removeItemFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem._id !== item._id);
    dispatch(setCartItems(updatedCartItems));
    const updatedQuantities = { ...quantities };
    delete updatedQuantities[item._id];
    setQuantities(updatedQuantities);
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      setQuantities({
        ...quantities,
        [itemId]: newQuantity,
      });
    }
  };

  const totalSum = cartItems.reduce((sum, item) => {
    return sum + item.price * (quantities[item._id] || 1);
  }, 0);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.modal_container}>
          <h1 className={styles.cart_title}>Cart</h1>
          <hr className={styles.cart_hr} />
          <div className={styles.modal_inside}>
            {cartItems.length ? (
              cartItems.map((item) => (
                <div key={item._id} className={styles.content}>
                  <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                    <img src={item.gallery[0]} alt={item.name} width={120} height={100} />
                    <div className={styles.cart_description}>
                      <h1 className={styles.cart_name}>{item.name}</h1>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                    <div className={styles.cart_input}>
                      <div className={styles.cart_name}>${item.price}</div>
                      <div onClick={() => updateQuantity(item._id, quantities[item._id] - 1)}>
                        -
                      </div>
                      <input
                        type="number"
                        value={quantities[item._id] || 1}
                        onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                        className={styles.inputCart}
                      />
                      <div onClick={() => updateQuantity(item._id, quantities[item._id] + 1)}>
                        +
                      </div>
                    </div>
                    <div className={styles.cart_buttons}>
                      <button onClick={() => removeItemFromCart(item)}>remove</button>
                      {/* <button>buy</button> */}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No items in the cart</p>
            )}
            <div className={styles.buy_block}>
              <div className={styles.total_price}>
                <div className={styles.cart_name}>
                  Total sum: ${totalSum.toFixed(2)} <button>buy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Badge badgeContent={cartItems.length} color="error">
        <ShoppingCartOutlined className={styles.cart} onClick={handleOpen} />
      </Badge>
    </div>
  );
};

export default Cart;
