import {
  Form,
  useActionData,
  useTransition
} from "/build/_shared/chunk-ZJV4BXCW.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/shane/shanesme/core/app/routes/contact.jsx?browser
init_react();

// app/routes/contact.jsx
init_react();
var import_react = __toModule(require_react());

// node_modules/@emailjs/browser/es/index.js
init_react();

// node_modules/@emailjs/browser/es/methods/init/init.js
init_react();

// node_modules/@emailjs/browser/es/store/store.js
init_react();
var store = {
  _origin: "https://api.emailjs.com"
};

// node_modules/@emailjs/browser/es/methods/init/init.js
var init = (userID, origin = "https://api.emailjs.com") => {
  store._userID = userID;
  store._origin = origin;
};

// node_modules/@emailjs/browser/es/methods/send/send.js
init_react();

// node_modules/@emailjs/browser/es/utils/validateParams.js
init_react();
var validateParams = (userID, serviceID, templateID) => {
  if (!userID) {
    throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
  }
  if (!serviceID) {
    throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
  }
  if (!templateID) {
    throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
  }
  return true;
};

// node_modules/@emailjs/browser/es/api/sendPost.js
init_react();

// node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js
init_react();
var EmailJSResponseStatus = class {
  constructor(httpResponse) {
    this.status = httpResponse.status;
    this.text = httpResponse.responseText;
  }
};

// node_modules/@emailjs/browser/es/api/sendPost.js
var sendPost = (url, data, headers = {}) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", ({ target }) => {
      const responseStatus = new EmailJSResponseStatus(target);
      if (responseStatus.status === 200 || responseStatus.text === "OK") {
        resolve(responseStatus);
      } else {
        reject(responseStatus);
      }
    });
    xhr.addEventListener("error", ({ target }) => {
      reject(new EmailJSResponseStatus(target));
    });
    xhr.open("POST", store._origin + url, true);
    Object.keys(headers).forEach((key) => {
      xhr.setRequestHeader(key, headers[key]);
    });
    xhr.send(data);
  });
};

// node_modules/@emailjs/browser/es/methods/send/send.js
var send = (serviceID, templateID, templatePrams, userID) => {
  const uID = userID || store._userID;
  validateParams(uID, serviceID, templateID);
  const params = {
    lib_version: "3.4.0",
    user_id: uID,
    service_id: serviceID,
    template_id: templateID,
    template_params: templatePrams
  };
  return sendPost("/api/v1.0/email/send", JSON.stringify(params), {
    "Content-type": "application/json"
  });
};

// node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js
init_react();
var findHTMLForm = (form) => {
  let currentForm;
  if (typeof form === "string") {
    currentForm = document.querySelector(form);
  } else {
    currentForm = form;
  }
  if (!currentForm || currentForm.nodeName !== "FORM") {
    throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
  }
  return currentForm;
};
var sendForm = (serviceID, templateID, form, userID) => {
  const uID = userID || store._userID;
  const currentForm = findHTMLForm(form);
  validateParams(uID, serviceID, templateID);
  const formData = new FormData(currentForm);
  formData.append("lib_version", "3.4.0");
  formData.append("service_id", serviceID);
  formData.append("template_id", templateID);
  formData.append("user_id", uID);
  return sendPost("/api/v1.0/email/send-form", formData);
};

// node_modules/@emailjs/browser/es/index.js
var es_default = {
  init,
  send,
  sendForm
};

// app/routes/contact.jsx
function Contact() {
  const form = (0, import_react.useRef)();
  const sendEmail = (e) => {
    e.preventDefault();
    es_default.sendForm("service_9vu0v1l", "template_h1565se", form.current, "user_kvieQsDGY538Pkqyxt9JA").then((result) => {
      alert("Your email has sent successfully!");
      console.log(result.text);
    }, (error) => {
      alert("Your email has failed to send.");
      console.log(error.text);
    });
  };
  const transition = useTransition();
  const actionData = useActionData();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Send me a message"), /* @__PURE__ */ React.createElement(Form, {
    className: "form-control",
    ref: form,
    onSubmit: sendEmail
  }, /* @__PURE__ */ React.createElement("label", null, "Your name: ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "from_name",
    id: "from_name"
  })), /* @__PURE__ */ React.createElement("label", null, "Your email: ", /* @__PURE__ */ React.createElement("input", {
    type: "email",
    name: "reply_to",
    id: "reply_to"
  })), /* @__PURE__ */ React.createElement("label", null, "What would you like to say? "), /* @__PURE__ */ React.createElement("textarea", {
    name: "message",
    name: "message",
    id: "message"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "submit",
    className: "btn btn-block",
    id: "button",
    value: "Send Email"
  }))));
}
export {
  Contact as default
};
//# sourceMappingURL=/build/routes/contact-FFKGFA55.js.map
