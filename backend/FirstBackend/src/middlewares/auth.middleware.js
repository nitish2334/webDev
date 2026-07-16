 export const sampleMiddleware = async (req, res, next) => {
    console.log("I ma simple middleware 1")
    next();
};

 export const sampleMiddleware2 = async (req, res, next) => {
    console.log("I ma simple middleware 2")
    next();
};

