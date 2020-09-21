import nodemailer from 'nodemailer';

module.exports = (req, res) => {
	const {contacts, name, email, pass, subject, body} = req.body;
	let recipients = ``;

	for (let i=0; i < contacts.length; i++) {
		recipients += i === 0 ? contacts[i].email : `, ${contacts[i].email}`;
	}
	
	const transporter = nodemailer.createTransport({
		service: `gmail`,
		auth: {
			user: email,
			pass: pass
		}
	});

	const mailOptions = {
		from: email,
		to: recipients,
		subject: subject,
		text: body
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) res.send({error});
		res.send({success: `Your message was successfully sent!`});
	});
}
