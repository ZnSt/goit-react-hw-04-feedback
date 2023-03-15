import { BtnFd } from './Feedback.styled';

export const Feedback = props => {
  const { names, type, method } = props;
  return (
    <>
      {names.map(name => (
        <BtnFd id={name} type={type} key={name} onClick={method}>
          {name}
        </BtnFd>
      ))}
    </>
  );
};
