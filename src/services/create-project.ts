import inquirer from "inquirer";

export class CreateProject {
    static async execute(): Promise<CreateProject> {
        const { name } = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Qual seu nome?",
            },
        ]);
        console.log(name);
        return new CreateProject();
    }
}
