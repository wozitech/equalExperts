import App from './server';

const PORT = process.env.PORT || 3000;
// eslint-disable-next-line no-console
App.listen(PORT, () => console.log(`Listening on port ${PORT}`));
