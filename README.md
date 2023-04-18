# tw-take-home--swap-api
This is a quick example of a front-end focused take home assessment.


## FrontEnd focused take home assessment to practice some Vue 3

Your mission, should you choose to accept it, is to create a one-page application with a list of people and the details about their related home planet.

The list of people and the information related to a planet can be accessed using the swapi api:

SWAPI api details: https://swapi.dev/

Wireframe description:

The candidate should implement a table that contains a list of users with the following information:
Name
Height
Mass
Created
Edited
Planet Name

When the user clicks on the planet name a popup is displayed showing the following information regarding the planet:
Name
Diameter
Climate
Population

The user should be able to sort the table by each column. The user should also be able to filter by searching the person’s name.

## Project Screenshots


### filtering and sorting results 
![Screenshot 2022-07-18 at 21 44 31](https://user-images.githubusercontent.com/13380603/179614115-8d79cea7-872d-43a0-b09e-92e664c4de9a.png)

### Empty state 
![Screenshot 2022-07-17 at 23 03 39](https://user-images.githubusercontent.com/13380603/179426536-3c2bac17-2174-4ee4-976f-03e34fcff493.png)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).


If you get an error
` error:0308010C:digital envelope routines::unsupported`

run `export NODE_OPTIONS=--openssl-legacy-provider` 
