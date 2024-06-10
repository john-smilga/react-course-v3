import { useTheme, ThemeProvider } from './basic-context';

function ParentComponent() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
  return <Component />;
}

function Component() {
  const context = useTheme();
  console.log(context);

  return (
    <div>
      <h2>random component</h2>
    </div>
  );
}
export default ParentComponent;
