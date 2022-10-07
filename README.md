
   
<br />
<div align="center">

<h1 align="center">Shoppingify Website</h1>
<h3 align="center">

  [ViewDemo](https://bmhuyquoc104-shoppingify.netlify.app/)
</h3>

</div>



<!-- Table of Contents -->
# :notebook_with_decorative_cover: Table of Contents

- [:notebook_with_decorative_cover: Table of Contents](#notebook_with_decorative_cover-table-of-contents)
  - [:star2: About the Project](#star2-about-the-project)
    - [:camera: Screenshots](#camera-screenshots)
    - [:space_invader: Tech Stack](#space_invader-tech-stack)
    - [:dart: Features](#dart-features)
    - [:art: Color Reference](#art-color-reference)
    - [:key: Environment Variables](#key-environment-variables)
  - [:toolbox: Getting Started](#toolbox-getting-started)
    - [:bangbang: Prerequisites](#bangbang-prerequisites)
    - [:gear: Installation](#gear-installation)
    - [:running: Run Locally](#running-run-locally)
  - [:eyes: Usage](#eyes-usage)
  - [:handshake: Contact](#handshake-contact)

  

<!-- About the Project -->
## :star2: About the Project

<!-- Screenshots -->
### :camera: Screenshots

- Light mode home page
![Light mode](https://i.imgur.com/HUx4Y2h.png)

- Dark mode home page
![Dark mode](https://i.imgur.com/63TQRI1.png)

- Shopping History page
![Shopping History page](https://i.imgur.com/hTM9elf.png)

- Shopping History detail page
![detail page](https://i.imgur.com/HGa6Qld.png)

- Statistic Page
![Statistic page](https://i.imgur.com/QfjNnwE.png)

- Item detail display
![Item detail display](https://i.imgur.com/wnG7HTS.png)

- Add new item display
![Add item](https://i.imgur.com/X9HmKE2.png)

- Edit item list display
![Edit item list](https://i.imgur.com/4oNibRh.png)

- Complete item list display
![Complete item list](https://i.imgur.com/Xb9GU6m.png)

  <div>
    <p>Mobile website</p>
    <img style = "object-fit:contain" src = "https://i.imgur.com/OUYdFHf.png" width="500" height="700"/>
  </div>

  <div>
    <p>Mobile shopping history</p>
    <img style = "object-fit:contain" src = "https://i.imgur.com/aCJcNn6.png" width="500" height="700"/>
  </div>
   <div>
    <p>Mobile shopping history detail</p>
    <img style = "object-fit:contain" src = "https://i.imgur.com/8memzBt.png" width="500" height="700"/>
  </div>
  <div>
    <p>Mobile statistic</p>
    <img style = "object-fit:contain" src = "https://i.imgur.com/8auiHJM.png" width="500" height="700"/>
  </div>

<div>
    <p>Mobile item detail</p>
    <img style = "object-fit:contain" src = "https://i.imgur.com/4XjuMut.png" width="500" height="700"/>
  </div>

  <div>
    <p>Mobile add new item </p>
    <img style = "object-fit:contain" src = "https://i.imgur.com/WMlDTSq.png" width="500" height="700"/>
  </div>

  <div>
    <p>Mobile edit item list</p>
    <img style = "object-fit:contain" src = "https://i.imgur.com/esFMAZf.png" width="500" height="700"/>
  </div>

  <div>
    <p>Mobile complete item list</p>
    <img style = "object-fit:contain" src = "https://i.imgur.com/uDpKMYj.png" width="500" height="700"/>
  </div>
<!-- TechStack -->
### :space_invader: Tech Stack

<details>
  <summary>Client</summary>

  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
  ![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
  ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
  ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
  ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
  ![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)
</details>

<details>
  <summary>Server</summary>
  
  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

</details>

<details>
<summary>Database</summary>

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

</details>

<details>
<summary>Deploy</summary>
  
  ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
  ![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
</details>

<!-- Features -->
### :dart: Features
- Toggle between dark and light mode

- Page transition animation 
  
- See a list of items under different categories.

- Add a new item with name, category, note, and image.

- When user add a new item, user can select one from the existing categories or add a new one if the category does not exist

-  When user select an item, user can see its details and user can choose to add the current list or delete the item.


-  Add items to the current list

-  Increase the number of item in the list


-  Remove the item from the list


-  User can save/update the list with a name (user can have only one active list at a time)


-  User can toggle between editing state and completing state
-  When user am at completing state, user can save my progress by selecting the item
  
-  User can cancel the active list


-  When user try to cancel a list, user can see a confirmation notification


-  See user's shopping history and user can see the details of it


-  See some statistics: top items, top categories, and monthly comparison.


- Search for items

<!-- Color Reference -->
### :art: Color Reference
- See [Global Theme File](https://github.com/bmhuyquoc104/shoppingify/blob/main/client/src/style/GlobalStyled.ts)



<!-- Env Variables -->
### :key: Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URL`

``

<!-- Getting Started -->
## 	:toolbox: Getting Started

<!-- Prerequisites -->
### :bangbang: Prerequisites

This project uses Npm as package manager

```bash
 npm install npm@latest -g
```

<!-- Installation -->
### :gear: Installation

<!-- Run Locally -->
### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/bmhuyquoc104/shoppingify
```

Go to the project directory

```bash
  cd shoppingify
```

Install dependencies for client

```bash
  cd client
  npm install
```
Start the client

```bash
  npm run dev
```

Install dependencies for server

```bash
  cd server
  npm install
```

Start the server

```bash
  npm run dev
```

<!-- Usage -->
## :eyes: Usage

This project can be used for any real stores to interact with user. In other words, this project is able to show current items,allow user to add, remove item, show history detail and the statistic sale of the store.

<!-- Contact -->
## :handshake: Contact

Vo Quoc Huy - bmhuyquoc104@gmail.com

Project Link: [https://github.com/bmhuyquoc104/shoppingify](https://github.com/bmhuyquoc104/shoppingify)




