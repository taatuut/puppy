function insertProperty(context, params, content)
{
  if (context.inputType.search('json') >= 0 && params) {
    var result = content.toObject();
    Object.keys(params).forEach(function(key) {
      result[key] = params[key];
    });
    return result;
  } else {
    // Pass thru unchanged
    return content;
  }
};

function insertCRM(context, params, content)
{
  var nameCRM = 'didnotgetname';
  if (context.inputType.search('json') >= 0 && params) {
    var result = content.toObject();
    Object.keys(params).forEach(function(key) {
      result[key] = params[key];
      nameCRM = result[key];
    });
    var uriCRM = "http://127.0.0.1:18080/crm.php?name="+nameCRM+"&amp;format=json";
    var objCRM = JSON.parse(fn.subsequence(xdmp.httpGet(uriCRM),2,1));
    for (var key in objCRM) {
      result[key] = unescape(objCRM[key]);
    }
    return result;
  } else {
    // Pass thru unchanged
    return content;
  }
};

exports.transform = insertCRM;

//exports.transform = insertProperty;
