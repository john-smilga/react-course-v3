const Person = ({ name }) => {
  console.log('render');

  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};
export default Person;
