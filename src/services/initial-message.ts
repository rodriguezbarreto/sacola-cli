import { yellow } from "chalk";
import { textSync } from "figlet";

export class InitialMessage {
    private constructor() {
        console.log(
            yellow(textSync("sacola-cli", { font: "DOS Rebel", horizontalLayout: "full" }))
        );
    }

    static print(): InitialMessage {
        return new InitialMessage();
    }
}
