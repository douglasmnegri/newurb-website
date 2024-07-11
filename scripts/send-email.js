import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: "us-east-2" });

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end(); 
  }

  const { name, mail, whatsapp, website } = req.body;

  const params = {
    Destination: {
      ToAddresses: "julio.negri@newurb.com.br",
    },
    Message: {
      Body: {
        Text: {
          Data: `Nome: ${name}\n\n Email: ${mail}\n\nContato: ${whatsapp}\n\n Site: ${website}`,
        },
      },
      Subject: { Data: "Registration Confirmation" },
    },
    Source: "noreply@yourdomain.com",
  };

  try {
    const command = new SendEmailCommand(params);
    await ses.send(command);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email", error: error.message });
  }
}
