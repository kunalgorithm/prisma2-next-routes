export const askToConfirmSpotBuilder = (email, fellowId) => {
  return {
    to: email,
    from: "dinnerclub@beondeck.com",
    templateId: "d-0c06daf0870e4769beaa1d32fb9a7ff3",
    dynamicTemplateData: {
      fellowId: fellowId
    }
  };
};

export const notifySpotConfirmedBuilder = (
  email,
  fellowId,
  fellowFirstName
) => {
  return {
    to: email,
    from: "dinnerclub@beondeck.com",
    templateId: "ADD_TEMPLATE_ID_HERE",
    dynamicTemplateData: {
      fellowId: fellowId,
      fellowFirstName: fellowFirstName
    }
  };
};

export const dinnerDetailsBuilder = (email, fellowId, fellowFirstName) => {
  return {
    to: email,
    from: "dinnerclub@beondeck.com",
    templateId: "ADD_TEMPLATE_ID_HERE",
    dynamicTemplateData: {
      fellowId: fellowId,
      fellowFirstName: fellowFirstName
    }
  };
};
