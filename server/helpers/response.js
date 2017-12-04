module.exports = (res) => {
    return {
        success: (data) => {
            res.json({
                item: data
            });
        },
        error: (data) => {
            res.json({
                error: data
            });
        }
    };
};