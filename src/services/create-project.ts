import { prompt } from "inquirer";

export class CreateProject {
    static async execute(): Promise<CreateProject> {
        const info = await this.getProjectInfo();
        console.log(info);

        return new CreateProject();
    }

    private static async getProjectInfo(): Promise<string> {
        const { name } = await prompt([
            {
                type: "input",
                name: "name",
                message: "Qual seu nome?",
            },
        ]);

        return name;
    }
}
