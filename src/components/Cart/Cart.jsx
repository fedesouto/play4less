import React, { useState, useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import { BsXCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { addOrder, updateStock } from "../../config/firebase/firestoreService";

const inputs = [
  {
    label: "Nombre",
    name: "name",
    id: "buyer-name",
  },
  {
    label: "E-mail",
    name: "email",
    id: "buyer-email",
  },
  {
    label: "Teléfono",
    name: "phone",
    id: "buyer-phone",
  },
];
export const CartComponent = () => {
  const { cart, deleteItem, emptyCart } = useCart();
  const [total, setTotal] = useState(0);
  const [orderId, setOrderId] = useState(null);
  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (event) => {
    setBuyer({ ...buyer, [event.target.name]: event.target.value });
  };

  const handleDelete = (itemId, price, quantity) => {
    deleteItem(itemId);
    setTotal(total - price * quantity);
  };

  const calculateTotal = () => {
    if (cart.length > 0) {
      setTotal(
        cart.reduce(
          (acumulador, item) => acumulador + item.quantity * item.item.price,
          0
        )
      );
    }
  };

  const onSubmit = async () => {
    const order = {
      buyer: buyer,
      items: cart,
      date: Date.now(),
      total: total,
    };
    addOrder(order, setOrderId);
    await updateStock(order);
    emptyCart();
  };

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  if (cart.length === 0 && !orderId) {
    return (
      <div className="cart">
        <h1>Tu carrito está vacío.</h1>
        <Link to="/">
          <button className="btn btn-lg mainColorButton mt-3">
            Comprár aquí
          </button>
        </Link>
      </div>
    );
  } else if (orderId) {
    return (
      <div className="cart">
        <h1>Gracias por tu compra!</h1>
        <h2 className="lead mt-4">Tu orden {orderId} ya fue procesada.</h2>
        <Link to="/">
          <button className="btn btn-lg mainColorButton mt-5">
            Volver al inicio
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="cart">
        <h1 className="text-center mb-3">Tu Carrito</h1>
        <table className="table table-striped table-light text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Título</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => {
              const { quantity, item } = product;
              const { id, title, image, price } = item;

              return (
                <tr key={id} className="align-middle">
                  <th scope="row">
                    <img src={image} className="cartItem-image" alt={title} />
                  </th>
                  <td>{title}</td>
                  <td>{product.quantity}</td>
                  <td>$ {price}</td>
                  <td>
                    <BsXCircleFill
                      className="text-danger removeButton"
                      onClick={() => {
                        handleDelete(id, price, quantity);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>Total: $ {total}</p>
        <Link to="/">
          <button className="btn btn-lg mainColorButton mb-5">
            Seguir Comprando
          </button>
        </Link>
        <div className="checkout">
          <h3 className="text-center">Finalizá tu compra</h3>
          <form>
            {inputs.map(({ label, name, id }) => {
              return (
                <div className="row g-3 mt-2 align-items-center">
                  <div className="col-3">
                    <label htmlFor={id} className="mb-2">
                      {label}
                    </label>
                  </div>
                  <div className="col-9">
                    <input
                      type="text"
                      className="form-control"
                      id={id}
                      name={name}
                      value={buyer[name]}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              );
            })}
          </form>
          <button
            className="btn btn-success mt-4"
            onClick={onSubmit}
            disabled={!(buyer.name && buyer.email && buyer.phone)}
          >
            Comprar
          </button>
        </div>
      </div>
    );
  }
};
