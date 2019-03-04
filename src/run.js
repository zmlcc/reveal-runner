#!/usr/bin/env node
"use strict";
const fs = require("fs-extra");
const es6Renderer = require("express-es6-template-engine");
const matter = require("gray-matter");

const program = require('commander');

program
    .option('-f --file <filename>', "source file")
    .parse(process.argv);

if (!program.file) {
    throw new Error("miss file parameter")
}

var buf = matter(fs.readFileSync(program.file))

const configuration = require("./Configuration");
var conf = configuration.loadConfiguration(() => buf.data);

var outDir = "./public"

fs.emptyDirSync(outDir);

es6Renderer(__dirname + '/../view/template.marko', {
    locals: Object.assign({}, conf),
    partials: {}
}, (_) => { })
    .then(output => { fs.writeFileSync(outDir +"/index.html", output) 
console.log("Write html file")})
    .catch(e => { throw new Error(e); });

fs.writeFileSync(outDir + "/markdown.md", buf.content);
console.log("Write markdown file")

fs.copySync(__dirname + "/../static/libs", outDir + "/libs");
console.log("Write lib file")

