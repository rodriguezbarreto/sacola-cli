#!/usr/bin/env node
import chalk from "chalk";
import figlet from "figlet";

console.log(
    chalk.yellow(
        figlet.textSync("sacola-cli", {
            font: "DOS Rebel",
            horizontalLayout: "full",
        })
    )
);
