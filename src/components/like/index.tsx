import { motion } from "framer-motion";

interface LikeProps {
  liked: boolean;
}

const Like: React.FC<LikeProps> = ({ liked }) => {
  return (
    <div className="cursor-pointer">
      {!liked && (
        <motion.svg
          className="focus:outline-0"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.85 }}
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.1947 5.14918C19.3292 3.20717 15.8001 4.12703 13.8997 6.36401C11.9868 4.13767 8.45257 3.2267 5.59805 5.19551C4.08429 6.23974 3.13586 7.99739 3.07604 9.85007C2.9361 14.0538 6.67216 17.4126 12.3741 22.5642L12.4827 22.6614C13.3081 23.4066 14.5756 23.403 15.3968 22.6424L15.5157 22.5337C21.1887 17.3612 24.8952 13.9817 24.7426 9.77875C24.6724 7.93727 23.7142 6.18494 22.1947 5.14918ZM14.0487 20.9453L13.9407 21.0539L13.8321 20.9459C8.66237 16.2912 5.2521 13.2132 5.24336 10.0824C5.23731 7.91569 6.85777 6.28616 9.02443 6.28012C10.6928 6.27546 12.3207 7.34342 12.899 8.82598L14.9249 8.82032C15.4841 7.33459 17.1061 6.25756 18.7744 6.2529C20.941 6.24685 22.5706 7.86731 22.5766 10.034C22.5854 13.1648 19.1923 16.2618 14.0487 20.9453Z"
            fill="#3C3B3B"
          />
        </motion.svg>
      )}
      {liked && (
        <motion.svg
          className="focus:outline-0"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.85 }}
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.1961 5.01734C19.3306 3.07534 15.8015 3.99519 13.9011 6.23217C11.9882 4.00584 8.45397 3.09486 5.59946 5.06367C4.0857 6.1079 3.13727 7.86556 3.07744 9.71823C2.93751 13.922 6.67356 17.2807 12.3755 22.4323L12.4841 22.5295C13.3095 23.2747 14.577 23.2712 15.3982 22.5106L15.5171 22.4019C21.1901 17.2294 24.8966 13.8498 24.744 9.64692C24.6739 7.80544 23.7156 6.05311 22.1961 5.01734ZM14.0501 20.8135L13.9421 20.9221L13.8335 20.8141C8.66377 16.1593 5.2535 13.0813 5.24476 9.95051C5.23871 7.78386 6.85917 6.15433 9.02583 6.14828C10.6942 6.14362 12.3221 7.21158 12.9005 8.69414L14.9263 8.68848C15.4855 7.20275 17.1075 6.12572 18.7758 6.12106C20.9424 6.11501 22.572 7.73547 22.578 9.90213C22.5868 13.0329 19.1937 16.1299 14.0501 20.8135Z"
            fill="#A12E2E"
          />
          <path
            d="M23.2414 11.6646C16.9344 18.1822 19.2637 19.6757 13.7694 21.6911C9.03606 19.985 12.9372 19.1933 3.74148 11.719C4.22612 6.21763 10.2135 1.7009 14.2331 8.68967C17.2135 1.68138 23.2268 6.41788 23.2414 11.6646Z"
            fill="#A12E2E"
          />
        </motion.svg>
      )}
    </div>
  );
};

export default Like;
