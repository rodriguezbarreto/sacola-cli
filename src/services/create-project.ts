import { readdirSync } from "fs";
import { prompt } from "inquirer";
import { join } from "path";

export class CreateProject {
    static async execute(): Promise<CreateProject> {
        await this.getProjectInfo();

        return new CreateProject();
    }

    private static async getProjectInfo(): Promise<string> {
        const templatesNames = readdirSync(join(__dirname, "../templates"));
        const { name } = await prompt([
            {
                name: "template",
                type: "list",
                message: "What project template would you like to generate?",
                choices: templatesNames,
            },
            {
                name: "projectName",
                type: "input",
                message: "Project name as a slug (ex: my-project):",
            },
        ]);

        return name;
    }
}
