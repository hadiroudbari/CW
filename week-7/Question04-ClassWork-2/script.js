function config(options) {
    // implement your code here
options.startup= options.startup ?? "normal";
options.boot= options.boot ?? "safe";
options.bandrate= options.bandrate ?? "115200";
options.port= options.port ?? "COM1";

console.log(options);
    }
    config({ startup: "selective", boot: "minimal", port: "COM2" }); 
    // { startup: "normal", boot: "safe", bandrate: "115200", port: "COM1" }
    config({ startup: "diagnostic" });
     // { startup: "normal", boot: "safe", port: "COM1"}
    config({}); 
    // { startup: "normal", boot: "safe", port: "COM1"}