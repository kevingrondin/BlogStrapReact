module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "be0143e99ebe85b2b1c6efad3516a369"),
    },
  },
  cron: {
    enabled: true,
  },
});
