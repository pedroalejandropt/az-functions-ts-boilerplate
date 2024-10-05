type CustomError = {
    response: {
        body: {
            errors: Record<string, any>;
        };
    };
}