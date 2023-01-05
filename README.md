# Weather APP - Weather station Koritnica

![Screenshot 2023-01-04 at 12 31 32](https://user-images.githubusercontent.com/20104948/210546263-93a63975-2efc-4808-82a8-68476ea4f740.png)


The Weather APP is a React-based application for my personal weather station based in Koritnica (Slovenia). It displays current weather conditions and charts for the current day at the location where the weather station is based. To get the data, I used the API written into NodeJs (Fastify) which connects to the weather station via Raspberry Pi. Going forward, I also want to add historical data and make a PWA from the current app, to be used on mobile devices.

## Installation

Use the npm or yarn to install.

```bash
npm install
```
or
```bash
yarn install
```

For development (if you use Yarn, else just replace it with npm):

```bash
yarn run dev
```

## Packages used

* "@headlessui/react": "^1.7.4",
* "@tanstack/react-query": "^4.19.1",
* "@tanstack/react-router": "^0.0.1-beta.25",
* "i18next": "^22.4.6",
* "recharts": "^2.2.0"


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
