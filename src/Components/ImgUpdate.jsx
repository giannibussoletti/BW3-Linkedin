const ImgUpdate = () => {
  fetch("https://striveschool-api.herokuapp.com/api/profile/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBiMGZiMDA2YmJlOTAwMTVkZWU1OGEiLCJpYXQiOjE3NzkxMDk4MDgsImV4cCI6MTc4MDMxOTQwOH0.NcEsDXU_hRcTEeLEQZqtcnmcYnQvt2mj7zUv9tSJ22M`,
    },
    body: JSON.stringify({
      name: "Mario",
      surname: "Rossi",
      email: "ma@R.it",
      username: "MR",
      bio: "Faccio di necessità virtù e faccio di virtù una sicurezza",
      title: "Full Stack Web Developer",
      area: "Roma - Italia",
      image: "https://cdn.pixabay.com/photo/2026/05/18/18/44/18-44-14-412_1280.jpg", // SERVER GENERATED, modificabile
    }),
  })
    .then((res) =>
      res.ok
        ? console.log("immagine aggiornata")
        : () => {
            throw new Error(res.status)
          },
    )
    .catch((err) => console.log(err))
}

export default ImgUpdate
