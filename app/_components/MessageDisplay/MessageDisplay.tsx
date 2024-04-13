import styles from "./MessageDisplay.module.scss";

const messageTypes = {
  notFound: {
    title: "Not Found",
    text: "This page doesn't exist or is unavailable.",
  },
  emptyState: {
    title: "No Content Just Yet",
    text: "There's nothing here yet, but check back soon!",
  },
};

export function MessageDisplay({ type }: { type: keyof typeof messageTypes }) {
  const { title, text } = messageTypes[type];

  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}
