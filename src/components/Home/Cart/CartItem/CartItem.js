// React
import { Fragment } from "react";
//

// Redux
import { useDispatch } from "react-redux";
import {
  handleCartQuantity,
  removeFromCart,
} from "../../../../store/commerce-slice";
//

// Styled Components
import styled from "styled-components";
//

// Material UI
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CloseIcon from "@material-ui/icons/Close";
//

const CartItem = (props) => {
  // Redux
  const dispatch = useDispatch();
  //

  const increaseQuantity = () => {
    dispatch(
      handleCartQuantity({
        productId: props.data.id,
        quantity: props.data.quantity + 1,
      })
    );
  };

  const decreaseQuantity = () => {
    if (props.data.quantity > 0) {
      dispatch(
        handleCartQuantity({
          productId: props.data.id,
          quantity: props.data.quantity - 1,
        })
      );
    }
    if (props.data.quantity === 0) {
      dispatch(
        removeFromCart({
          productId: props.data.id,
        })
      );
    }
  };

  const removeItemFromCart = () => {
    dispatch(
      removeFromCart({
        productId: props.data.id,
      })
    );
  };

  return (
    <Fragment>
      <Wrapper remove={props.data.quantity === 0}>
        <div className="image-wrapper">
          <img
            src={props.data.variant?.assets[0]?.url}
            alt="product image"
            className="image-wrapper__img"
          />
        </div>
        <div className="info-wrapper">
          <p className="info-wrapper__title">{props.data.name}</p>
          <p className="info-wrapper__variables">
            {props.data.selected_options[0]?.option_name}{" "}
            {props.data.selected_options[0]?.option_name && "/"}{" "}
            {props.data.selected_options[1]?.option_name}
          </p>

          <div className="info-wrapper__quantity">
            <ButtonGroup size="small" className="wrapper">
              <Button className="decrease" onClick={decreaseQuantity}>
                -
              </Button>
              <Button className="quantity" disabled>
                {props.data.quantity}
              </Button>
              <Button className="increase" onClick={increaseQuantity}>
                +
              </Button>
            </ButtonGroup>
          </div>

          <CloseIcon className="close-btn" onClick={removeItemFromCart} />
          <p className="product-price">
            ${(props.data.price.formatted * props.data.quantity).toFixed(2)}
          </p>
        </div>
      </Wrapper>
    </Fragment>
  );
};
export default CartItem;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 5px;
  margin-bottom: 5px;
  overflow: hidden;
  min-height: 100px;
  position: relative;

  display: ${(props) => (props.remove ? "none" : "grid")};
  grid-template-columns: 35% 65%;
  grid-template-rows: 100px;

  .image-wrapper {
    height: 100%;
    width: 100%;
    padding-left: 10px;

    &__img {
      object-fit: contain;
      width: 100%;
      height: 100%;
      border: 1px solid #b0bec5;
      border-radius: 4px;
      padding: 2px;
    }
  }

  .info-wrapper {
    height: 100%;
    width: 100%;
    padding: 0px;
    padding-left: 10px;
    padding-right: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__title {
      font-size: 16px;
      color: #263238;
      margin-right: 30px;
      font-weight: 600;
    }

    &__variables {
      font-weight: 600;
      font-size: 12px;
      letter-spacing: -0.06px;
    }

    &__quantity {
      .wrapper {
        height: 30px;
        font-size: 20px;
        .increase {
          font-size: 20px;
        }

        .decrease {
          font-size: 20px;
        }

        .quantity {
          font-size: 15px;
          color: #000;
        }
      }
    }
  }

  .close-btn {
    position: absolute;
    right: 20px;
    top: 2.5px;
    cursor: pointer;
  }

  .product-price {
    position: absolute;
    right: 20px;
    bottom: 0px;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: -0.06px;
    color: #546e7a;
  }
`;
