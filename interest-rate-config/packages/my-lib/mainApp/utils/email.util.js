import { INTERFACES } from '../consts/app.consts';

const RECIPIENTS = ['arvid.waldner.2@consultant.volvo.com', 'vijayakumar.palani.2@consultant.volvo.com'];

const buildEmailPayload = ({ accessType, user, interfaceType }) => {
  const interfaceName = INTERFACES[interfaceType].label;
  const body = `
    <p>Hi,</p>
    <p>The user ${user} has requested the following access roles to use ${interfaceName}:</p>
    <ul>
        <li><strong>Interface:</strong> ${interfaceName}</li>
        <li><strong>Role:</strong> <span style="text-transform: capitalize">${accessType}</span></li>
    </ul>
    <p>Could you please set up the necessary roles and communicate to the user?</p>
    <p>Thanks!</p>
  `;
  
  return {
    recipients: RECIPIENTS,
    body,
    subject: 'access Role Request',
  };
};

const utils = {
  buildEmailPayload
};

export default utils;