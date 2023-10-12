import { createRoot } from "react-dom/client";
import React from "react";
import { ChatPage } from "./ChatPage";

const container = document.createElement("div");
container.classList.add("application-container");
document.body.append(container);

createRoot(container).render(<ChatPage />);
