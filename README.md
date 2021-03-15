# Getting Started

The face-model is a frontend client for the [face-model-api](https://github.com/harshcut/face-model-api), built with React and TailwindCSS. Get response from Clarifai API and see it visualize. More on Clarifai's `face-detection` model can be found [here](https://www.clarifai.com/models/face-detection).

## Developing

Fork the repository using [this](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) guide, then clone it locally.

```shell
git clone https://github.com/harshcut/face-model
cd face-model
yarn install
```

Make sure you have also installed the PostgreSQL server available at [face-model-api](https://github.com/harshcut/face-model-api). You can now run the client on your `localhost`.

```shell
yarn start
```

## Dependencies

Redux is used for managing user state inside the application. React-Redux state is hydrated on every reload and is subscribed to `localStorage` as `state` on every change. The `store` is available at `src` with `actions` and `reducers` having their respective directories.

For managing form data inside the application React Hook Form is used. It's usage can be fond in the `pages` directory in `src`.

Styled JSX is used for full CSS support for JSX. The type definition can be found in [typings](https://github.com/harshcut/face-model/blob/main/typings/styled-jsx.d.ts). The main use cases can be found in the `components` directory in `src`.

Tailwind is used for predefined `classNames`. Installation guide for React can be found [here](https://tailwindcss.com/docs/guides/create-react-app#setting-up-tailwind-css). Custom themes can be found in `tailwind.config.js` at root. An external override configuration is required to use tailwind on react. This is provided by `craco` with a `craco.config.js` at root.

## Privacy

All data that is collected through the web app is stored securely and will not be distributed to third parties. The data is collected to  improve current features or services in the app.

## License

This project is licensed under the [MIT License](https://github.com/harshcut/face-model/blob/main/LICENSE).
