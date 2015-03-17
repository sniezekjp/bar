#!/usr/bin/env node

var path = require('path');
var fs = require('fs-extra');
var args = process.argv.slice(2);

var cwd = process.cwd();
var modulesDir = path.join(cwd, 'es6', 'modules');
var compsDir = path.join(cwd, 'es6', 'components');

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

if(args[0] === 'generate') {
  if(args[1] === 'module') {
    if(!args[2]) { 
      console.log("Please provide a module name"); 
      process.exit();
    }
    var modules = args[2].split(',');
    modules.forEach(function(module) {
      var capitalized = capitalize(module);
      var newModuleDir = path.join(modulesDir, module);
      
      fs.ensureDirSync(path.join(newModuleDir, 'controllers'));
      fs.ensureDirSync(path.join(newModuleDir, 'services'));
      fs.ensureDirSync(path.join(newModuleDir, 'views'));
      
      var states = fs.readFileSync(path.join(cwd,'bin', 'boilerplates', 'states.js'), {encoding: 'utf-8'});
      var controller = fs.readFileSync(path.join(cwd,'bin', 'boilerplates', 'controller.js'), {encoding: 'utf-8'});
      var service = fs.readFileSync(path.join(cwd,'bin', 'boilerplates', 'service.js'), {encoding: 'utf-8'});
      var view = fs.readFileSync(path.join(cwd,'bin', 'boilerplates', 'view.tpl.html'), {encoding: 'utf-8'});

      states = states.replace(/MODULE/g, capitalized).replace(/_module/g, module);
      controller = controller.replace(/MODULE/g, capitalized);
      service = service.replace(/MODULE/g, capitalized).replace(/_module/g, module);
      view = view.replace(/_module/g, module);

      fs.outputFileSync(path.join(newModuleDir, 'states.js'), states);
      fs.outputFileSync(path.join(newModuleDir,'controllers', capitalized + 'Controller.js'), controller);
      fs.outputFileSync(path.join(newModuleDir,'services', capitalized + 'Service.js'), service);
      fs.outputFileSync(path.join(newModuleDir,'views', module + '.tpl.html'), view);

      var dep = "import " + module + " from " + "'modules/"+module+"/states';";
      var pattern = '/// dependencies (do not remove)';
      var bsFile = path.join(cwd,'es6', 'app', 'bootstrap.js');
      var bsContent = fs.readFileSync(bsFile, {encoding: 'utf-8'});
      if(bsContent.indexOf(dep) === -1) {
        bsContent = bsContent.replace(pattern, dep + "\n" + pattern);
        fs.outputFileSync(bsFile, bsContent);
      }

      console.log(capitalized + ' module created!');
    });
    process.exit();
  } else if(args[1] === 'component') {
    if(!args[2]) { 
      console.log("Please provide a component name");
      process.exit();
    }
    var components = args[2].split(',');
    components.forEach(function(component) {
      var componentBp = fs.readFileSync(path.join(cwd,'bin', 'boilerplates', 'component.js'), {encoding: 'utf-8'});
      componentBp = componentBp.replace(/_component/g, component);

      fs.outputFileSync(path.join(compsDir,component, component + '.js'), componentBp);
      fs.outputFileSync(path.join(compsDir,component, component + '.tpl.html'), "default "+component+" template");

      var dep = "import " + component + " from " + "'./"+component+"/"+component+"';";
      var pattern = '/// dependencies (do not remove)';
      var compsFile = path.join(compsDir, 'components.js');
      var compsContent = fs.readFileSync(compsFile, {encoding: 'utf-8'});
      if(compsContent.indexOf(dep) === -1) {
        compsContent = compsContent.replace(pattern, dep + "\n" + pattern);
        fs.outputFileSync(compsFile, compsContent);
      }
      console.log(component + ' component created!');
    });
    process.exit();
  }
}