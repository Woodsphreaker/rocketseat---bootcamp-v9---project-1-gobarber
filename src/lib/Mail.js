import nodemailer from 'nodemailer'
import mailConfig from '../config/mail'
import { resolve } from 'path'
import exphbs from 'express-handlebars'
import nodemailerhbs from 'nodemailer-express-handlebars'

const { host, port, secure, auth } = mailConfig

const viewPath = resolve(__dirname, '..', 'app', 'views', 'emails')

const transporter = nodemailer.createTransport({
  host,
  port,
  secure,
  auth: auth.user ? auth : null,
})

transporter.use(
  'compile',
  nodemailerhbs({
    viewEngine: exphbs.create({
      layoutsDir: resolve(viewPath, 'layouts'),
      partialsDir: resolve(viewPath, 'partials'),
      defaultLayout: 'default',
      extname: '.hbs',
    }),
    viewPath,
    extName: '.hbs',
  })
)

const sendMail = message => {
  return transporter.sendMail({
    ...mailConfig.default,
    ...message,
  })
}

export default { sendMail }
