const express = require("express");
const Joi = require("joi");
let router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send(reviews);
  })
  .post((req, res) => {
    const schema = {
      id: Joi.number(),
      name: Joi.string().min(3).required(),
      image: Joi.string(),
      review: {
        summary: Joi.string(),
        text: Joi.string(),
        score: Joi.number(),
      },
      type: Joi.string().required(),
    };

    const result = Joi.validate(req.body, schema);

    if (result.error) {
      res.status(400).send(result.error);
      return;
    }
  });

router
  .route("/:id")
  .get((req, res) => {
    res.send(reviews.find((review) => review.id == req.params.id));
  })
  .put((req, res) => {
    res.send(`Endpoint PUT /reviews/${req.params.id}`);
  });

module.exports = router;

let reviews = [
  {
    id: 1,
    name: "Dok 36",
    image:
      "https://www.koffietje.nl/wp-content/uploads/2022/12/WhatsApp-Image-2023-01-20-at-09.38.58.jpeg",
    review: {
      summary: "Dit is een korte samenvatting over Dok 36.",
      text: "Dit is een langere tekst over het restaurant/ koffieplekje",
      score: 9,
    },
    type: "coffee",
  },
  {
    id: 2,
    name: "Maona",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipNE3wsr8ngpG5WZ3i11cQv6c2xP8xDyD6w3p9yx=s680-w680-h510",
    review: {
      summary: "Dit is een korte samenvatting over Maona.",
      text: "Dit is een langere tekst over het restaurant/ koffieplekje",
      score: 7.5,
    },
    type: "coffee",
  },
  {
    id: 3,
    name: "Cuperus",
    image:
      "https://cdn.webshopapp.com/shops/257190/files/394978032/img-0018.jpg",
    review: {
      summary: "Dit is een korte samenvatting over Cuperus.",
      text: "Dit is een langere tekst over het restaurant/ koffieplekje",
      score: 7,
    },
    type: "coffee",
  },
  {
    id: 4,
    name: "Black & Yellow",
    image:
      "https://www.koffietje.nl/wp-content/uploads/2019/12/Black-yellow-8.jpg",
    review: {
      summary: "Dit is een korte samenvatting over Black & Yellow.",
      text: "Dit is een langere tekst over het restaurant/ koffieplekje",
      score: 6,
    },
    type: "coffee",
  },
];
