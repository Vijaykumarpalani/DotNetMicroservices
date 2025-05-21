const RECIPIENTS = ['arvid.waldner.2@consultant.volvo.com', 'vijayakumar.palani.2@consultant.volvo.com'];

const buildEmailPayload = ({ accessType, user }) => {
  const body = `
    <p>Hi,</p>
    <p>The user ${user} has requested the following access roles to use the Interest Calculator:</p>
    <ul>
        <li><strong>Interface:</strong> VolvoSelected</li>
        <li><strong>Role:</strong> <span style="text-transform: capitalize">${accessType}</span></li>
    </ul>
    <p>Could you please set up the necessary roles and communicate to the user?</p>
    <p>Thanks!</p>
  `;
  
  return {
    recipients: RECIPIENTS,
    body,
    subject: 'Access Role Request',
  };
};

const utils = {
  buildEmailPayload
};

export default utils;