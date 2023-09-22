export const Card = (props) => {
  let username = props.username;
  let status = props.status;
  let loc = props.location;
  return (
    <>
      <h2>{username}</h2>
      <p>{status}</p>
      <p>{loc}</p>
    </>
  );
};
