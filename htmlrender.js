const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");

const render = table => {
    const html = [];
  
    html.push(table
      .map(table => renderTable(table))
    );
    html.push(waitlist
      .map(waitlist => renderWaitlist(waitlist))
    );
  
    return renderMain(html.join(""));
  
  };

  const renderTable = tables => {
    let template = fs.readFileSync(path.resolve(templatesDir, "card.html"), "utf8");
    template = replacePlaceholders(template, "name", tables.getName());
    template = replacePlaceholders(template, "phone", tables.getPhone());
    template = replacePlaceholders(template, "email", tables.getEmail());
    template = replacePlaceholders(template, "party", tables.getParty());
    return template;
  };
  
  const renderWaitlist = waitlist => {
    let template = fs.readFileSync(path.resolve(templatesDir, "card.html"), "utf8");
    template = replacePlaceholders(template, "name", waitlist.getName());
    template = replacePlaceholders(template, "phone", waitlist.getPhone());
    template = replacePlaceholders(template, "email", waitlist.getEmail());
    template = replacePlaceholders(template, "party", waitlist.getParty());

    return template;
  };

  const renderMain = html => {
    const template = fs.readFileSync(path.resolve(templatesDir, "tables.html"), "utf8");
    return replacePlaceholders(template, "tables", html);
  };
  
  const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
  };
  
  module.exports = render