<h1>
  <img src="./docs/banner.png" alt="Rocketseat Move.it" />
</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Vercel&message=deploy&color=black&style=for-the-badge&logo=vercel"/>
  <img src="https://img.shields.io/github/languages/count/dgbragas/nlw__move.it?style=for-the-badge" />
  <img src="https://img.shields.io/github/repo-size/dgbragas/nlw__move.it?style=for-the-badge" />
  <img src="http://img.shields.io/static/v1?label=Code%20Style&message=AirBnB&color=red&style=for-the-badge" />
  <img src="http://img.shields.io/static/v1?label=STATUS&message=v1%20Finished&color=yellowgreen&style=for-the-badge"/>
</p>

## **:book: Summary**

- [About this project](#-about-the-project)
- [Principle libraries](#-principle-libraries)
- [Prerequisites](#warning-prerequisites)
- [Next steps](#shoe-next-steps)

## **<img src="./docs/badge.png"> About the project**

Move.it it's a gamification game - focused for who pass too much time in front the computer - based in work and exercises cycles where in each cycle finalized you receive new dynamic challenges used to earn EXP points and up to the next level (if you complete them).

<img src="./docs/moveit-capture.gif" alt="Move.it presentation" />

### Application functionalities

- After 25 minutes (Pomodoro's time) an alerm are emitted and a new random challenge appears
- The user progress is saved in browser Cookies

## **<img src="./docs/badge.png"> Principle libraries**

- **js-cookie:** v2.2.1
- **next:** v10.0.7
- **react:** v17.0.1

### Principle lint and development dependencies

- **eslint:** v7.20.0
- **prettier:** v2.2.1
- **typescript:** v4.2.2

## **:warning: Prerequisites**

- <a href="https://nodejs.org/en/" target="_blank">NodeJS</a>
- <a href="https://yarnpkg.com/" target="_blank">YarnPKG</a> or <a href="https://www.npmjs.com/" target="_blank">NPM</a>

### Running the application locally

```bash
  # Clonning the repository
  git clone https://github.com/dgbragas/nlw__move.it

  # Entering in the cloned folder
  cd nlw__move.it

  # Installing project dependencies (you can also use 'npm install')
  yarn

  # Running the application (it will run at http://localhost:3000)
  yarn install
```

## **:shoe: Next steps**

- [ ] User login using GitHub oAuth
- [ ] Leaderboard creation
- [ ] Serverless implementation
- [ ] Aprimore current components
- [ ] Allow challenges management
- [ ] Structure a layout to share your progress in Twitter and correlateds.

---

*Developed by @dgbragas in the @Rocketseat Next Level Week #4*
