const SignInPage = ({ params }: { params: { 'sign-in': string[] } }) => {
  console.log(params);
  console.log(params['sign-in'][1]);
  return <div>SignInPage :{params['sign-in'][1]}</div>;
};
export default SignInPage;
