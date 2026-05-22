const ImgUpdate = () => {
  fetch("https://striveschool-api.herokuapp.com/api/profile/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBiMGZiMDA2YmJlOTAwMTVkZWU1OGEiLCJpYXQiOjE3NzkxMDk4MDgsImV4cCI6MTc4MDMxOTQwOH0.NcEsDXU_hRcTEeLEQZqtcnmcYnQvt2mj7zUv9tSJ22M`,
    },
    body: JSON.stringify({
      name: "Gianni",
      surname: "Bussoletti",
      email: "g@b.it",
      username: "GianniBussoletti",
      bio: "Faccio di necessità virtù e faccio di virtù una sicurezza",
      title: "Full Stack Web Developer",
      area: "Roma - Italia",
      image: "https://cdn.pixabay.com/photo/2023/12/13/23/01/swirl-8447932_1280.jpg", // SERVER GENERATED, modificabile
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
