import Joi from "joi";

export const VALIDATION_RULES = Object.freeze({
  password: {
    min: 8,
    max: 64,
    patternText: /(?=.*[A-Z])/,
    patterNumbers: /(?=.*[0-9])/,
    messagesUI: {
      "string.min": "8 characters or more (no spaces)",
      "string.pattern.name": "Uppercase and lowercase letters",
      "string.empty": "At least one digit",
    },
    messages: function () {
      return {
        ...this.messagesUI,
        "string.max": "Can not be bigger than 64 characters",
        "any.required": "At least one digit",
      };
    },
  },
  email: {
    messages: function () {
      return {
        email: "Invalid email",
      };
    },
  },
});

export const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .messages(VALIDATION_RULES.email.messages())
    .required(),
  password: Joi.string()
    .min(VALIDATION_RULES.password.min)
    .max(VALIDATION_RULES.password.max)
    .pattern(VALIDATION_RULES.password.patternText, "uppercase letter")
    .pattern(VALIDATION_RULES.password.patterNumbers, "number")
    .messages(VALIDATION_RULES.password.messages())
    .required(),
});
