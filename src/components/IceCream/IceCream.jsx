import classNames from "classnames";
import { BsChatSquareFill } from "react-icons/bs";
import colon from "../../assets/colon.png";

import styles from "./iceCream.module.css";

const IceCream = ({ title, likes, order, image, price = "1000" }) => {
  return (
    <div className={classNames([styles.wrapper, styles.wrapperAnime])}>
      <div className={styles.header}>
        <div className={styles.imageWrapper}>
          <img src={image} className={styles.image} alt="" />
        </div>
        <div className={styles.badgeWrapper}>
          <div
            className={classNames([
              styles.primaryBadge,
              styles.badgeAnime,
              "group",
            ])}
          >
            <img src={colon} className="h-4 w-auto"></img>
            <span
              className={classNames([styles.counter, "group-hover:text-white"])}
            >
              {price}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.textWrapper}>
        <h1 className={styles.text}>{`${order}. ${title}`}</h1>
      </div>
    </div>
  );
};

export default IceCream;
