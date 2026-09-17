import fs from "node:fs";

const stylesheetPath=new URL("../styles.css",import.meta.url);
const stylesheet=fs.readFileSync(stylesheetPath,"utf8");
const spacingProperties=/^(?:padding(?:-(?:top|right|bottom|left))?|margin(?:-(?:top|right|bottom|left))?|gap|row-gap|column-gap)$/;
const violations=[];

for(const [index,line] of stylesheet.split(/\n/).entries()){
  for(const declaration of line.matchAll(/([\w-]+)\s*:\s*([^;}]+)/g)){
    const property=declaration[1];
    if(!spacingProperties.test(property))continue;
    const value=declaration[2].trim();
    const offGrid=[...value.matchAll(/(?<![-\w.])(-?\d+(?:\.\d+)?)px/g)]
      .map(match=>Number(match[1]))
      .filter(number=>number>0&&number%4!==0);
    if(offGrid.length)violations.push({line:index+1,property,value});
  }
}

if(violations.length){
  console.error("Spacing must use positive pixel values from the 4px grid:");
  violations.forEach(({line,property,value})=>console.error(`${line}: ${property}: ${value}`));
  process.exitCode=1;
}else{
  console.log("Spacing grid check passed: all positive pixel padding, margin, and gap values use 4px increments.");
}
