(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['add-shortcut-modal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div\n  id=\"add-shortcut-modal\"\n  class=\"hide\"\n  data-modal=\"\"\n  data-tab-container=\"add-shortcut\"\n>\n  <h3>Add new shortcut</h3>\n  <div class=\"tabs\">\n    <button class=\"active\" data-tab=\"new\">Create new shortcut</button>\n    <button data-tab=\"link\">Link to another shortcut</button>\n  </div>\n  <div class=\"tab\" data-tab=\"new\">\n    <form id=\"add-shortcut-form\" data-form>\n      <div class=\"field\">\n        <label for=\"shortcut-new-title\">Title</label>\n        <input\n          type=\"text\"\n          id=\"shortcut-new-title\"\n          placeholder=\"Eg. Reddit\"\n          name=\"title\"\n        />\n      </div>\n      <div class=\"field\">\n        <label for=\"shortcut-new-link\">Link</label>\n        <input\n          type=\"text\"\n          id=\"shortcut-new-link\"\n          placeholder=\"Eg. reddit.com\"\n          name=\"link\"\n        />\n      </div>\n      <div class=\"field\">\n        <label for=\"shortcut-new-icon\">Icon</label>\n        <input\n          type=\"text\"\n          id=\"shortcut-new-icon\"\n          placeholder=\"Link to the favicon, I have to optimize this somehow\"\n          name=\"icon\"\n        />\n      </div>\n      <div class=\"field-submit\">\n        <button type=\"submit\">Submit</button>\n      </div>\n    </form>\n  </div>\n  <div class=\"tab hide\" data-tab=\"link\">\n    <form id=\"add-shortcut-form-related\" data-form>\n      <div class=\"field\">\n        <label for=\"shortcut-related\">Related shortcut</label>\n        <select id=\"shortcut-related\" name=\"parent\"></select>\n      </div>\n      <div class=\"field\">\n        <label for=\"shortcut-related-title\">Title</label>\n        <input\n          type=\"text\"\n          id=\"shortcut-related-title\"\n          placeholder=\"Eg. Reddit\"\n          name=\"title\"\n        />\n      </div>\n      <div class=\"field\">\n        <label for=\"shortcut-related-link\">Link</label>\n        <input\n          type=\"text\"\n          id=\"shortcut-related-link\"\n          placeholder=\"Eg. reddit.com\"\n          name=\"link\"\n        />\n      </div>\n      <div class=\"field-submit\">\n        <button type=\"submit\">Submit</button>\n      </div>\n    </form>\n  </div>\n</div>\n";
},"useData":true});
templates['auth-modal'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"signup-message\">\n      <p>Your account is created. You can access your account using your username</p>\n      <div id=\"login-uuid-container\"><span>Or use this UUID:</span><span id=\"login-uuid\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"uuid") || (depth0 != null ? lookupProperty(depth0,"uuid") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"uuid","hash":{},"data":data,"loc":{"start":{"line":10,"column":89},"end":{"line":10,"column":97}}}) : helper)))
    + "</span></div>\n      <p>You will need your password to login if you have set it. You can set a password later as well.</p>\n      <div class=\"field-submit\">\n        <button id=\"proceed\">Proceed</button>\n      </div>\n    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"isCreatingAccount") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":16,"column":4},"end":{"line":78,"column":4}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"actions-container\">\n      <button id=\"back\">Go Back</button>\n    </div>\n    <form id=\"register-form\" data-form>\n      <div class=\"field\">\n        <label for=\"username\">Username</label>\n        <input\n          type=\"text\"\n          name=\"username\"\n          id=\"username\"\n          placeholder=\"Username\"\n        />\n      </div>\n      <div class=\"field\">\n        <label for=\"password\">Password</label>\n        <input\n          type=\"password\"\n          name=\"password\"\n          id=\"password\"\n          placeholder=\"Password\"\n        />\n      </div>\n      <div class=\"error\"><p>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"error") || (depth0 != null ? lookupProperty(depth0,"error") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"error","hash":{},"data":data,"loc":{"start":{"line":39,"column":28},"end":{"line":39,"column":37}}}) : helper)))
    + "</p></div>\n      <div class=\"field-submit\">\n        <button type=\"submit\" id=\"login-submit\">Register</button>\n      </div>\n    </form>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"isLoggingIn") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":44,"column":4},"end":{"line":78,"column":4}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"actions-container\">\n      <button id=\"back\">Go Back</button>\n    </div>\n    <form id=\"login-form\" data-form>\n      <div class=\"field\">\n        <label for=\"username\">Username or UUID</label>\n        <input\n          type=\"text\"\n          name=\"username\"\n          id=\"username\"\n          placeholder=\"Username or UUID\"\n          required\n        />\n      </div>\n      <div class=\"field\">\n        <label for=\"password\">Password</label>\n        <input\n          type=\"password\"\n          name=\"password\"\n          id=\"password\"\n          placeholder=\"Password\"\n        />\n      </div>\n      <div class=\"error\"><p>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"error") || (depth0 != null ? lookupProperty(depth0,"error") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"error","hash":{},"data":data,"loc":{"start":{"line":68,"column":28},"end":{"line":68,"column":37}}}) : helper)))
    + "</p></div>\n      <div class=\"field-submit\">\n        <button type=\"submit\" id=\"login-submit\">Login</button>\n      </div>\n    </form>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "    <p class=\"disclaimer\">You are currently using this app as a guest. Your shortcuts are stored locally on your device and will not be synced across other devices. If you want to access your shortcuts from anywhere and keep them safe in the cloud, you can create a free account with us. Creating an account will also allow you to share your shortcuts with others and discover new ones from our community. Are you ready to join us?</p>\n    <button id=\"register-button\" class=\"navigation-button\">Sure, I'll create an account</button>\n    <div class=\"separator\">Or</div>\n    <button id=\"login-button\" class=\"navigation-button\">Already have an account</button>\n    ";
},"11":function(container,depth0,helpers,partials,data) {
    return "    <div id=\"loading\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div\n  id=\"auth-modal\"\n  class=\"hide\"\n  data-modal=\"\"\n  data-tab-container=\"auth\"\n>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"createdAccount") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":78,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"loading") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":79,"column":4},"end":{"line":81,"column":11}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
templates['shortcut'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <a href=\"https://"
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":3,"column":19},"end":{"line":3,"column":27}}}) : helper)))
    + "\">\n    <div class=\"header\">\n      <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"icon") || (depth0 != null ? lookupProperty(depth0,"icon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":5,"column":16},"end":{"line":5,"column":24}}}) : helper)))
    + "\" />\n      <div class=\"title\">\n        <h1>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":7,"column":21}}}) : helper)))
    + "</h1>\n        <h3>https://"
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":8,"column":20},"end":{"line":8,"column":28}}}) : helper)))
    + "</h3>\n      </div>\n    </div>\n  </a>\n  <div class=\"children\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"children") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":18,"column":13}}})) != null ? stack1 : "")
    + "  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <a href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"link") : depth0), depth0))
    + "\" data-id=\"child-"
    + alias2(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":14,"column":43},"end":{"line":14,"column":51}}}) : helper)))
    + "-"
    + alias2(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":14,"column":52},"end":{"line":14,"column":62}}}) : helper)))
    + "\">\n      <img src=\"./icons/chevron-right.svg\" class=\"icon\" />\n      <span>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "</span>\n    </a>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <a href=\"https://"
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":21,"column":19},"end":{"line":21,"column":27}}}) : helper)))
    + "\">\n    <div>\n      <h1>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":23,"column":10},"end":{"line":23,"column":19}}}) : helper)))
    + "</h1>\n      <h3>https://"
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":24,"column":18},"end":{"line":24,"column":26}}}) : helper)))
    + "</h3>\n    </div>\n  </a>\n  <div class=\"img\">\n    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"icon") || (depth0 != null ? lookupProperty(depth0,"icon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":28,"column":14},"end":{"line":28,"column":22}}}) : helper)))
    + "\" />\n  </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"shortcut\" data-id=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":37}}}) : helper)))
    + "\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"hasChildren") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":30,"column":9}}})) != null ? stack1 : "")
    + "  <div class=\"edit-actions\">\n    <button class=\"edit\"><img src=\"./icons/edit.svg\" class=\"icon\" /></button>\n    <button class=\"delete\"><img src=\"./icons/delete.svg\" class=\"icon\" /></button>\n  </div>\n</div>\n";
},"useData":true});
})();