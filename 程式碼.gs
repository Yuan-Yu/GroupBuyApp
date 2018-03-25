//********************** Project Config *****************************//
var rootUrl = 'Your project root URL' // Look like: https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec
var firebaseID = "Your FirebaseID";
var firebaseKey = "Your Firebase Prive Key";
//********************** Project Config end *****************************//


//****** Routing Table for Get method *******//
var doMap = {'index':index,'init':init, 'getOrder': getOrder};
//****** Routing Table for Post method *******//
var postMap = {'postOrder':postOrder};
var firebaseUrl = "https://"+ firebaseID+".firebaseio.com/";

//******* Route *****///
function doGet(e) {
  var parameter = e.parameter;
  if (typeof(parameter['do']) == 'undefined'){
    parameter['do'] = 'init';
  }
  return doMap[parameter['do']](parameter);
}

function doPost(params) {
  return postMap[params['do']](params);
}


//********************* Controllers *************************//
function index(parameter){
  var id = parameter['id'];
  var htmlTemp =HtmlService.createTemplateFromFile('index');
  htmlTemp.url = rootUrl+'?do=index&id='+id;
  htmlTemp.id = id;
  htmlTemp.sheeturl = rootUrl +'?do=getOrder&id='+ id;
  htmlTemp.root = rootUrl;
  return htmlTemp.evaluate();
}

function init(params){
  var id = Utilities.getUuid();
  var htmlTemp =HtmlService.createTemplateFromFile('redirect');
  htmlTemp.url = rootUrl+'?do=index&id='+id;
  return htmlTemp.evaluate();
}

function getOrder(params){
  var id = params['id']
  var htmlTemp = HtmlService.createTemplateFromFile('order.html');
  var drinkList = getOrderFromDB(id);
  htmlTemp.drinkList = JSON.stringify(drinkList);
  return htmlTemp.evaluate();
}
function postOrder(params) {
  var id = params.id;
  var name = params.name;
  var drink = params.drink;
  var size = params.size;
  var sugar = params.sugar;
  var ice = params.ice;
  var price = params.price;
  var add = params.add;
  var extraInfo = params.extraInfo;
  postOrderToDB(id,name,drink,size,sugar,ice,price,add,extraInfo);
}


//********************* Interal functions *************************//

// for inculd css,js into html
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

// communicate with Firebase
function getOrderFromDB(orderID){
  var tmp = JSON.parse(UrlFetchApp.fetch(firebaseUrl+'Orders/'+orderID+'.json'+'?auth='+firebaseKey));
  drinkList = [];
  for(var k in tmp) drinkList.push(tmp[k]) ;
  return tmp;
}
function postOrderToDB(orderID,name,drink,size,sugar,ice,price,add,extraInfo){
  var order = {
    'name':name,
    'drink':drink,
    'size': size,
    'sugar':sugar,
    'ice':ice,
    'price': price,
    'add':add,
    'ispayed': false,
    'extraInfo':extraInfo
  }
  var options = {
    'method':'post',
    'payload': JSON.stringify(order)
  }
  UrlFetchApp.fetch(firebaseUrl+'Orders/'+orderID+'.json'+'?auth='+firebaseKey,options)
}


