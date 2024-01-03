# ADMIN.BIKE-BOOKING.COM
This task is an admin panel for a company that provides bicycle booking services.

Layout link: https://www.figma.com/file/pIU4QX9TlF6vOw1x1Vf8yB/ADMIN.BIKE-BOOKING.COM?node-id=105%3A108

Front-end deploy: https://admin-bike-booking.netlify.app/

Demo video: https://youtu.be/Mjpk-K5eyJ8

App is able to do the following:

- user can add a bicycle with fields (ID, name, type, color, wheel size, price, description)
- added bicycle is displayed on the list of bicycles
- user can change the status of the bicycle (available/busy/unavailable) 
- user can remove a bicycle
- user can check stats on bicycles (number of bicycles, number of available bicycles, number of booked bicycles, average price of a bicycle)

## Stack

- *Front-end*: React, Redux, Redux Toolkit, TypeScript, HTML5, SCSS
- *Back-end*: Node.js / Express
- *Database*: MongoDB

## Setup
1. Use 18 LTS version of Node.js
2. Clone/download this repo
3. Go to project directory:
```bash
cd keenethics-test-task
```
4. Install dependencies:
```bash
npm i
```
5. Switch to `develop` branch:
```bash
git checkout develop
```
6. When the server is started, you can send open app on the address `http://localhost:3000/`


## Starting application

**Development mode**
1. Go to server directory:
```bash
cd server
```
2. Run server in one terminal:
```bash
npm start
```
3. Open deploy: https://admin-bike-booking.netlify.app/ .

or 

3. In other terminal go to front-end directory:
```bash
cd front
```
4. Run and open app:
```bash
npm start
```

---

**Note**: replace `npm` with `yarn` in `package.json` if you use yarn.
