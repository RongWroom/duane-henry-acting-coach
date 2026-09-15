import './index.css';

const hydrateApp = async () => {
  const [{ StrictMode, createElement }, { createRoot, hydrateRoot }, { default: App }] = await Promise.all([
    import('react'),
    import('react-dom/client'),
    import('./App.tsx'),
  ]);

  const root = document.getElementById('root')!;
  const app = createElement(StrictMode, null, createElement(App));

  // Production serves the real page as HTML. Development still uses Vite's empty root.
  if (root.hasChildNodes()) {
    hydrateRoot(root, app);
  } else {
    createRoot(root).render(app);
  }
};

const scheduleHydration = (callback: () => void) => {
  const requestIdleCallback = (window as {
    requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => void;
  }).requestIdleCallback;

  if (requestIdleCallback) {
    requestIdleCallback(callback, { timeout: 1500 });
  } else {
    window.setTimeout(callback, 0);
  }
};

scheduleHydration(() => {
  void hydrateApp();
});
