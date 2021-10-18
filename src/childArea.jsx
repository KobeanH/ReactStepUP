const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChidArea = (props) => {
  const { open } = props;
  return (
    <>
      {open ? (
        <div>
          <p style={style}>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
};
