export function createWelcomeEmailTemplate(name,profileUrl){
   return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to OrbitNet</title>
  </head>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background: linear-gradient(to right, #d3e4ed, #14a3d7); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAqFBMVEWw1eupzOGt0eejxdr///+s0+oAHTa12/GHqr+53vU4WG2y1+2t1OoAFC8ePVFnh5u82+4AGDL0+fzR5vPf7vdykqa/3e/c7PYAJj3//wDw9/vH4fHq9Pp5mq+u1O8AIDmr0/QtTWFScoYTNUp+oLWavtRKa4AADizY6ozj8G7o817t9Uvy+DzC3sL5/BXH4rbC6P4AACBdfZECLEIAACdAX3MnR1wTN01fGCnKAAAFeUlEQVR4nO2aCXPaSBBGJaSZQYwkdCFkJIy5nGSP7BrW5P//s50W2FyOnUoxqvpc/SplY6QKevR0z+msvU+O4zqfmx4bwsOG+LAhPmyIDxviw4b4sCE+bIgPG+LDhviwIT5siA8b4sOG+LAhPmyIDxviw4b4sCE+bIgPG+LDhviwIT5siA8b4sOG+LAhPmyIDxviw4b4sCE+bIgPG+LDhviwIT5siA8b4sOG+LAhPmyIDxviw4b4sCE+nRqKI919aHeGQuh63EyyLJs049oRYUef25Wh0HnmnzLJdTeB7MZQJEVrVeR1WZZ1XkzozyLpwrELw9Ahv8YErc3A9qfOSXLs2G+rHRiK0rTPJrmoLkIkje9n9sNo31DkRqR8S6RVz20rWjcUY5NwPymcoSjsK9o2JMF3HEQ+Sax+vnVDaqLngmoUT9XxTwruwwO90v34UTm3x66hKK8iqIZfRuci4utX+qX76SCw8AyWY5iZHDx/Rw2jc8OHb3d3fzyQocQzNIUku8zBa8M/7+7+ugc1THz/qpu4Mrz/+/v3fyANzcCl8Rutj+/owBSWg6EKVCh0QK737b/W8N8g0D/7/34XW4ZmJEoj7WTovQRM69V8m24CMjSvn39U1XKwOnwDggxny8XjY+/WT2LHMNRNO4FoVk/pxmkldG8Qye12SIZBfxnJarmsZLTs0zeQFLkwhtv0vylGDMMko5lD5tfrRZXOe/TUaiDjldvrmVY6XUk5n67dnrcapNK0WdNrZmS4W01v/zBWDHXmTxKhfV9rtd7JHeXdNIpd0zpNHs7m22iozWtzVY1kagYA5tZ9pbl5BO0YmgqThU5Y+xNKLzeWm8BRsWzbozGstunotWiqlUw9LSZ+DVRLjZqv285wTF2FWlczT/dmy7axkmG1ODEJNkaM7nVwDE0ISc38qtspRbCQw8CV8f4qxdA77ULcpfRMIjYCx9AM1Wi+ILJDd6/70UCfGMrnsx4/eExX2rRooBhqP6MYCd/fT4x0L4qdE8N0eGaoRulGlX4GZJiYp3VODB0VLXsnhhejNjVNF4ExBKo0+tIw/BKHR8NR9HYMgQyv8nAdzdWroV5FV3k4VVh5aIpoflFLN8daqt10657W0h5eLaX+0Dn2h9qr5PpYS2n4tjkJYjCUc7T+kKJnRjMhxYVitJOL4MRQr2W0elVUfRmtX8Y0cxRDmvk2+jAu9eazWDsnhqa0yGhqxqU0oVLTGXUe7a3udrZWtx+Y2plblLRi384tNlu5c88NqUuUg5UXhl7/WZpC6oiaVjvURi6n65sv89uaH07288PpU/RI49EzQ9M0q1Ru43gr04oa7KE26edIPnm3jqK1OX7ZzoHV4tDw3B/zk6tajOaVlNVuJNoJcDtUp4nGYAlj2O4wNX7xklhmKnh2WQWO64ZBe5nuE4d3b5+INtfaKB1/Yc1e/Nptv4vt9dLJx/su4nrZ+JbYXfM2vcD4o4enZWOLj2B738IMb+r3FWnvprS5E2x772n8gSJ9B3Z3EK3vHxbvKlIEbSah08UecPFOLtJFy4Jd7OObhjp580CCSD7FPv4+1fxCX+zlh/szNh/UoRvQxXka0e5iNLUWIiQh81Poumm9P8V5GudllJo1eV0mSVLW44Y2ppo3z6Dcmo7OtYnDbtuRbHx5hsgSXZ5NTPKijV02KfKO9JyOz5eGr8dLuzp66fAZ4c8AG+LDhviwIT5siA8b4sOG+LAhPmyIDxviw4b4sCE+bIgPG+LDhviwIT5siA8b4sOG+LAhPmyIDxviw4b4sCE+bIgPG+LDhviwIT5siA8b4sOG+LAhPmyIDxviw4b4sCE+bIgPG+LDhviwIT5siA8b4sOG+LAhPr3/AYDoTWGulIHDAAAAAElFTkSuQmCC" alt="UnLinked Logo" style="width: 150px; margin-bottom: 20px;border-radius: 10px;">
      <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to OrbitNet!</h1>
    </div>
    <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
      <p style="font-size: 18px; color: #0077B5;"><strong>Hello ${name},</strong></p>
      <p>We're thrilled to have you join our professional community! OrbitNet is your platform to connect, learn, and grow in your career.</p>
      <div style="background-color: #f3f6f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p style="font-size: 16px; margin: 0;"><strong>Here's how to get started:</strong></p>
        <ul style="padding-left: 20px;">
          <li>Complete your profile</li>
          <li>Connect with colleagues and friends</li>
          <li>Join groups relevant to your interests</li>
          <li>Explore job opportunities</li>
        </ul>
      </div>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${profileUrl}" style="background-color: #0077B5; color: white; padding: 14px 28px; text-decoration: none; border-radius: 30px; font-weight: bold; font-size: 16px; transition: background-color 0.3s;">Complete Your Profile</a>
      </div>
      <p>If you have any questions or need assistance, our support team is always here to help.</p>
      <p>Best regards,<br>The OrbitNet Team</p>
    </div>
  </body>
  </html> 
  `;
}
export const createConnectionAcceptedEmailTemplate = (senderName, recipientName, profileUrl) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Connection Request Accepted</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #0077B5, #00A0DC); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <img src="https://img.freepik.com/premium-vector/linkedin-logo_578229-227.jpg" alt="UnLinked Logo" style="width: 150px; margin-bottom: 20px;border-radius: 10px;"/>
    <h1 style="color: white; margin: 0; font-size: 28px;">Connection Accepted!</h1>
  </div>
  <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
    <p style="font-size: 18px; color: #0077B5;"><strong>Hello ${senderName},</strong></p>
    <p>Great news! <strong>${recipientName}</strong> has accepted your connection request on UnLinked.</p>
    <div style="background-color: #f3f6f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <p style="font-size: 16px; margin: 0;"><strong>What's next?</strong></p>
      <ul style="padding-left: 20px;">
        <li>Check out ${recipientName}'s full profile</li>
        <li>Send a message to start a conversation</li>
        <li>Explore mutual connections and interests</li>
      </ul>
    </div>
    <div style="text-align: center; margin: 30px 0;">
      <a href="${profileUrl}" style="background-color: #0077B5; color: white; padding: 14px 28px; text-decoration: none; border-radius: 30px; font-weight: bold; font-size: 16px; transition: background-color 0.3s;">View ${recipientName}'s Profile</a>
    </div>
    <p>Expanding your professional network opens up new opportunities. Keep connecting!</p>
    <p>Best regards,<br>The OrbitNet Team</p>
  </div>
</body>
</html>
`;

export const createCommentNotificationEmailTemplate = (recipientName, commenterName, postUrl, commentContent) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Comment on Your Post</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #0077B5, #00A0DC); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <img src="https://img.freepik.com/premium-vector/linkedin-logo_578229-227.jpg" alt="UnLinked Logo" style="width: 150px; margin-bottom: 20px;border-radius: 10px;"/>
    <h1 style="color: white; margin: 0; font-size: 28px;">New Comment on Your Post</h1>
  </div>
  <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
    <p style="font-size: 18px; color: #0077B5;"><strong>Hello ${recipientName},</strong></p>
    <p>${commenterName} has commented on your post:</p>
    <div style="background-color: #f3f6f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <p style="font-style: italic; margin: 0;">"${commentContent}"</p>
    </div>
    <div style="text-align: center; margin: 30px 0;">
      <a href=${postUrl} style="background-color: #0077B5; color: white; padding: 14px 28px; text-decoration: none; border-radius: 30px; font-weight: bold; font-size: 16px; transition: background-color 0.3s;">View Comment</a>
    </div>
    <p>Stay engaged with your network by responding to comments and fostering discussions.</p>
    <p>Best regards,<br>The OrbitNet Team</p>
  </div>
</body>
</html>
`;