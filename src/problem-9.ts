const appConfig = {
    theme: `dark`,
    version:2
} as const;

// appConfig.theme = `light`;
// Cannot assign to 'theme' because it is a read-only property.
// appConfig.version = 3; 
// Cannot assign to 'version' because it is a read-only property.

const colors = ["red", "green" , "blue"] as const;
type Colors = typeof colors[number];

// colors[0] = `black`;
// Cannot assign to '0' because it is a read-only property.

