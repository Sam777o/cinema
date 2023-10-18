import _ from "lodash";
import { createTransport } from "nodemailer";
import path  from "path";
import fs  from "fs";

const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'cinema.llc.arm@gmail.com',
        pass: 'iugsqdhxmujjvpao'
    }
});

class Mail {
    static send(to, subject, template, params = {}) {
        const filename = path.resolve('./views/email', template + '.ejs');
        // const html = ejs.render(fs.readFileSync(filename, 'utf-8'), params);
        const html = _.template(fs.readFileSync(filename, 'utf-8'))(params);
        return transporter.sendMail({
            from: '"Cinema Administrator" <cinema.llc.arm@gmail.com>',
            to,
            subject: subject,
            html,
        });
    }
}

export default Mail
