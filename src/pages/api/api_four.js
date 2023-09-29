import { sendMail } from "../../../service/mailService";
const handler = async (req, res) => {
  try {
    const { method } = req;
    console.log('body=>', req.body);
    switch (method) {
      case "POST": {
        //Do some thing
        await sendMail(
          "My Portfolio - Bilal",
          "bilalusuf93@hotmail.com",
          req.body?.emailbody
        );
        res.status(200).send("Successfully Sent!");
        break;
      }
      case "GET": {
        //Do some thing
        res.status(200).send(req.auth_data);
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};

export default handler;