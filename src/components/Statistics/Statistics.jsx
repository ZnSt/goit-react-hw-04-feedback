export const Statistics = props => {
  const { names } = props;
  return (
    <>
      {names.map(([name, value]) => (
        <p key={name}>
          {name} : {value}
        </p>
      ))}
    </>
  );
};
