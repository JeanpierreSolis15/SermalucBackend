const { Router } = require("express");
const notificationRouter = Router();
var schedule = require("node-schedule");
var admin = require("firebase-admin");

notificationRouter.post("/scheduleCreate", (req, res) => {
  const { nombre, descripcion, fechaHora, token } = req.body;
  let dateConverter = new Date(fechaHora);
  const limaOffset = -5 * 60; // -5 horas en minutos
  dateConverter.setMinutes(dateConverter.getMinutes() + dateConverter.getTimezoneOffset() - limaOffset);
  console.log(dateConverter);
  var j = schedule.scheduleJob(dateConverter, function () {
    var message = {
      notification: {
        title: nombre,
        body: descripcion,
      },
      token: token,
    };

    admin
      .messaging()
      .send(message)
      .then((response) => {
        console.log("Notificación enviada:", response);
      })
      .catch((error) => {
        console.log("Error al enviar notificación:", error);
      });
  });

  res.status(200).send({
    code: 200,
    response: "Notificación programada para : " + dateConverter,
  });
});

module.exports = {
  notificationRouter,
};
