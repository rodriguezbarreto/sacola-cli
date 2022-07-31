#!/usr/bin/env node

import { CreateProject, InitialMessage } from "./services";

InitialMessage.print();
CreateProject.execute();
