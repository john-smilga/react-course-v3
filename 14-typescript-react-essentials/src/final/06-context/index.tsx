import { useTheme, ThemeProvider } from './context';

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
      <button
        onClick={() => {
          if (context.theme === 'dark') {
            context.setTheme('system');
            return;
          }
          context.setTheme('dark');
        }}
        className='btn btn-center'
      >
        toggle theme
      </button>
    </div>
  );
}
export default ParentComponent;
