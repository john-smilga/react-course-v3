import { type PropsWithChildren } from 'react';

type ComponentProps = {
  name: string;
  id: number;
  children: React.ReactNode;
};

// type ComponentProps = PropsWithChildren<{
//   name: string;
//   id: number;
// }>;

function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h2>Name : {name}</h2>
      <h2>ID : {id}</h2>
      {children}
    </div>
  );
}
export default Component;

// type ComponentProps = {
//   name: string;
//   id: number;
// };

// function Component({ name, id }: ComponentProps) {
//   return (
//     <div>
//       <h1>Name : {name}</h1>
//       <h1>ID : {id}</h1>
//     </div>
//   );
// }
// export default Component;

// function Component({ name, id }: { name: string; id: number }) {
//   return (
//     <div>
//       <h1>Name : {name}</h1>
//       <h1>ID : {id}</h1>
//     </div>
//   );
// }
// export default Component;
