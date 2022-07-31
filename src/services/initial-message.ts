import chalk from "chalk";
import figlet from "figlet";

export class InitialMessage {
    private constructor() {
        console.log(
            chalk.yellow(
                figlet.textSync("sacola-cli", {
                    font: "DOS Rebel",
                    horizontalLayout: "full",
                })
            )
        );
    }

    static print(): InitialMessage {
        return new InitialMessage();
    }
}
