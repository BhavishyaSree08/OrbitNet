
import { mailtrapClient,sender } from "../lib/mailtrap.js"
import { createWelcomeEmailTemplate } from "./emailTemplates.js"
import {createCommentNotificationEmailTemplate} from "./emailTemplates.js"
import { createConnectionAcceptedEmailTemplate } from "./emailTemplates.js"
export const sendWelcomeEmail=async(email,name,profileUrl)=>{
   const recepient=[{email}]
   
   try{
    const response=await mailtrapClient.send({
        from:sender,
        to:recepient,
        subject:"Welcome to OrbitNet",
        html:createWelcomeEmailTemplate(name,profileUrl),
        category:"welcome"
    })

    console.log("welcome email sent successfully",response);
   }catch(error){
      throw error;
   }
}

export const sendCommentNotificationEmail=async(
   recipientEmail,
   recipientName,
   commenterName,
   postUrl,
   commentContent
)=>{
   const recipient = [{ email : recipientEmail}];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			subject: "New Comment on Your Post",
			html: createCommentNotificationEmailTemplate(recipientName, commenterName, postUrl, commentContent),
			category: "comment_notification",
		});
		console.log("Comment Notification Email sent successfully", response);
	} catch (error) {
		throw error;
	}
}
export const sendConnectionAcceptedEmail = async (senderEmail, senderName, recipientName, profileUrl) => {
	const recipient = [{ email: senderEmail }];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			subject: `${recipientName} accepted your connection request`,
			html: createConnectionAcceptedEmailTemplate(senderName, recipientName, profileUrl),
			category: "connection_accepted",
		});
	} catch (error) {}
};