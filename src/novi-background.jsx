const React = novi.react.React;
import Editor from "./Editor";
import Settings from "./Settings";
const Language = novi.language;

const Plugin = {
    name: "novi-plugin-background",
    title: "Novi Background",
    description: "Novi Background description",
    version: "1.0.2",
    dependencies: {
      novi: "0.8.6"
    },
    defaults: {
        querySelector: '.novi-background'
    },
    ui: {
        editor: [Editor],
        settings: <Settings />,
    },
    onLanguageChange: onLanguageChange
};
function onLanguageChange(plugin){
    const messages = Language.getDataByKey("novi-plugin-background");
    plugin.ui.editor[0].title = messages.editor.title;
    plugin.ui.editor[0].tooltip = messages.editor.tooltip;
    return plugin;
}

novi.plugins.register(Plugin);