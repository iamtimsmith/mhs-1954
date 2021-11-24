import nodemailer from "nodemailer";

module.exports = (req, res) => {
	const { contacts, name, email, pass, subject, body } = req.body;
	let recipients = ``;

	if (!contacts)
		return res.send({ error: `You don't have any contacts set up!` });

	for (let i = 0; i < contacts.length; i++) {
		recipients += i === 0 ? contacts[i].email : `, ${contacts[i].email}`;
	}

	const transporter = nodemailer.createTransport({
		service: `gmail`,
		auth: {
			user: email,
			pass: pass,
		},
	});

	const mailOptions = {
		from: email,
		to: recipients,
		subject: subject,
		text: body.replace(/<[^>]*>?/gm, ""),
		html: body,
	};
	console.log("mailOptions", mailOptions);
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) return res.send({ error });
		return res.send({ success: `Your message was successfully sent!` });
	});
};
