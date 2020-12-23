# 4all - Front-end test

## Project

This project will be a clothing store called **STI Store**, which will be based on some existing stores.
The inspirations for this project are:

- [Kanui](https://www.kanui.com.br/);
- [Lacoste](https://www.lacoste.com/br/);
- [Renner](https://www.lojasrenner.com.br/);
- [Netshoes](https://www.netshoes.com.br/);
  The premise of the store would be something aimed at a younger audience with affordable clothes and a lot of sales based on promotions, as for example in [Kanui](https://www.kanui.com.br/), but with a more _clean_ visual footprint, like e-commerce from [Lacoste](https://www.lacoste.com/br/).

## UI

For this project, a _Low Fidelity_ UI was created, with the thought of having a north for the programming to follow, below the images:

![VisualMap UI](https://github.com/GabrielStima/4allfrontend/blob/master/src/assets/Design/Group8.png);

and in relation to the final visual concept of e-commerce, I will be based on another project of my own, which is also called **STI Store**, that so far is in UI development, [Link para o projeto em desenvolvimento.](https://github.com/GabrielStima/stistore), and because of that I will use the same color system:

![System color](https://github.com/GabrielStima/4allfrontend/blob/master/src/assets/Design/ColorAndFonts.png).

## Development

For this project a framework was created to guide the development if you want to acess [click here](https://github.com/GabrielStima/4allfrontend/projects/1), or go to a project tab in the repository and
click on 4allfrontend.

### Scripts

`npm start` : Run application;
`npm run build`: Run build;

### Build

The build is working however it is not optimized with lazy loader.

### Responsiveness

Regarding responsive, it was built up to 768px, so following the Google DevTools the resolutions covered were 4k(2560px), Laptop L(1440px), Laptop(1024px), Tablet(768px).

### Service layer

In this project I created this store with react and redux, using a fictitius services layer.
The data structure that services returns is as folloes:

### Home sections

` [{ title: "Top ofertas", items: [], url: "/ListProducts/5", }]`

### Menu

` [{ id: 2, title: "Masculino", url: "/ListProducts/5" }]`

### Items Category 5

` { id:5, title:"Top ofertas", items:[] }`

### Clothes Categories

` [{ id: 1, title: "Camisas", }]`

### Products

` [{ id: 1, idCategory: 1, title: "Lorem Ipsum", oldPrice: "12.00", price: "10.00", size: ["PP", "P", "M", "G", "GG"], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu est at elit efficitur cursus vel sit amet eros. Sed efficitur placerat arcu, vitae pellentesque erat tincidunt at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus eu nibh mattis, molestie dui eget, elementum urna. Nulla a velit pellentesque, molestie tellus varius, pretium ipsum. Donec interdum massa sed leo dictum, in efficitur enim sagittis. Fusce a sodales dolor. Pellentesque ornare tellus lorem, sed egestas diam viverra ut.", image: shirt }]`

## Tests

Regarding tests within this project, I didn't have enough time to apply the tests I would like.
The idea would be to create integration tests, in simulated services, unit tests and component snapshots.
If you want to see a project with some tests you can see this [repository](https://github.com/GabrielStima/personalblogchallenge) however I have another project with more advanced tests and with reports of coverage but this I cannot leave public but if you need I can release it to an email.
