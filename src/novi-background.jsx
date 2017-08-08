const React = novi.react.React;
import Editor from "./Editor";
import Settings from "./Settings";

const Plugin = {
    name: "novi-plugin-background",
    title: "Novi Background",
    description: "Novi Background description",
    version: "1.0.0",
    defaults: {
        querySelector: '.novi-background'
    },
    ui: {
        editor: [Editor],
        settings: <Settings />,
    }
};

novi.plugins.register(Plugin);