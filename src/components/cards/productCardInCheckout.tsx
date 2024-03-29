import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import laptop from "../../images/laptop.png";
import ModalImage from "react-modal-image";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

function ProductCardInCheckout({ p }: any) {
  const colors = ["Black", "Gray", "Silver", "White", "Yellow"];
  let dispatch = useDispatch();

  // const handleColorChange = (e: any) => {
  //   console.log("color changed", e.target.value);

  //   let cart: any = [];
  //   if (typeof window !== "undefined") {
  //     const cartData = localStorage.getItem("cart");
  //     if (cartData) {
  //       cart = JSON.parse(cartData);
  //     }

  //     cart.map((product: any, i: any) => {
  //       if (product._id === p._id) {
  //         cart[i].color = e.target.value;
  //       }
  //     });

  //     //  console.log('cart udpate color', cart)
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //     dispatch({
  //       type: "ADD_TO_CART",
  //       payload: cart,
  //     });
  //   }
  // };

  const handleQuantityChange = (e: any) => {
    // console.log("available quantity", p.quantity);
    let count = e.target.value < 1 ? 1 : e.target.value;

    if (count > p.quantity) {
      toast.error(`Max available quantity: ${p.quantity}`);
      return;
    }

    let cart: any = [];

    if (typeof window !== "undefined") {
      const cartData = localStorage.getItem("cart");
      if (cartData) {
        cart = JSON.parse(cartData);
      }

      cart.map((product: any, i: any) => {
        if (product._id === p._id) {
          cart[i].count = count;
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const handleRemove = () => {
    // console.log(p._id, "to remove");
    let cart: any = [];

    if (typeof window !== "undefined") {
      const cartData = localStorage.getItem("cart");
      if (cartData) {
        cart = JSON.parse(cartData);
      }
      // [1,2,3,4,5]
      cart.map((product: any, i: any) => {
        if (product._id === p._id) {
          cart.splice(i, 1);
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  return (
    <tbody>
      <tr>
        <td>
          <div style={{ width: "100px", height: "auto", margin: "auto" }}>
            {p.images.length ? (
              <ModalImage small={p.images[0].url} large={p.images[0].url} />
            ) : (
              <ModalImage small={laptop} large={laptop} />
            )}
          </div>
        </td>
        <td>{p.title}</td>
        <td>${p.price}</td>
        <td>{p.brand}</td>
        <td>
          {p.color}
          {/* <select
            onChange={handleColorChange}
            name="color"
            className="form-control"
          >
            {p.color ? (
              <option value={p.color}>{p.color}</option>
            ) : (
              <option>Select</option>
            )}
            {colors
              .filter((c) => c !== p.color)
              .map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
          </select> */}
        </td>
        <td className="text-center">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input
              type="number"
              className="form-control"
              value={p.count}
              onChange={handleQuantityChange}
            />
          </div>
        </td>
        <td className="text-center">
          {p.shipping === "Yes" ? (
            <CheckCircleOutlined className="text-success" />
          ) : (
            <CloseCircleOutlined className="text-danger" />
          )}
        </td>
        <td className="text-center">
          <DeleteOutlined
            onClick={handleRemove}
            className="text-danger pointer"
          />
        </td>
      </tr>
    </tbody>
  );
}

export default ProductCardInCheckout;
