import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Modal } from "@mui/material";
import styles from "./cart.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../../feature/cart/cartSlice";
import MyForm from "../Shared/my-form/my-form";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [buy, setBuy] = useState(false);

  // useEffect(() => {
  //   if (open && cartItems.length === 0) {
  //     setOpen(false);
  //   }
  // }, [cartItems, open]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    if (buy) setBuy(false);
    setOpen(false);
  };

  const handleBuy = () => setBuy(true);

  const removeItemFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem._id !== item._id);
    dispatch(setCartItems(updatedCartItems));
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updateQuantitys = cartItems.map((el) =>
      el._id === itemId ? { ...el, quantities: newQuantity } : el,
    );
    dispatch(setCartItems(updateQuantitys));
  };

  const { quantity, totalSum } = cartItems.reduce(
    (acc, item) => ({
      quantity: acc.quantity + item.quantities,
      totalSum: acc.totalSum + item.quantities * item.price,
    }),
    {
      quantity: 0,
      totalSum: 0,
    },
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          {buy ? (
            // <MyForm/>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className={styles.modal_container}>
                <MyForm handleClose={handleClose} />
              </div>
            </Modal>
          ) : (
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
                          <div onClick={() => updateQuantity(item._id, item.quantities - 1)}>-</div>
                          <input
                            type="number"
                            value={item.quantities}
                            onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                            className={styles.inputCart}
                          />
                          <div onClick={() => updateQuantity(item._id, item.quantities + 1)}>+</div>
                        </div>
                        <div className={styles.cart_buttons}>
                          <button onClick={() => removeItemFromCart(item)}>remove</button>
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
                      Total sum: ${totalSum.toFixed(2)} <button onClick={handleBuy}>buy</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>
      <Badge badgeContent={quantity} color="error">
        <ShoppingCartOutlined className={styles.cart} onClick={handleOpen} />
      </Badge>
    </div>
  );
};

export default Cart;
